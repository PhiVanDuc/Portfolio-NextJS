import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

const locales = ["en", "vi"];

const getLocale = (request) => {
    const headers = {};
    request.headers.forEach((value, key) => {
        if (key === "accept-language") {
            headers[key] = value;
            return;
        }
    });

    const languages = new Negotiator({ headers }).languages();
    const defaultLocale = "en";

    return match(languages, locales, defaultLocale);
}

export const middleware = (request) => {
    const { pathname } = request.nextUrl;
    const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) return;

    const locale = getLocale(request);
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return Response.redirect(request.nextUrl);
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}