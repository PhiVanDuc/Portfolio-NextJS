import Navigation from "@/components/navigation/Navigation"
import '@/assets/SCSS/style.scss'
import '@/assets/SCSS/styleTheme.scss'
import ThemeProvider from "@/contexts/ThemeProvider";

export default function RootLayout({ children, params: { lang } }) {
    return (
        <html lang={`${lang}`}>
            <body>
                <ThemeProvider>
                    <Navigation lang={lang}/>
                    
                    <main>
                        { children }
                    </main>
                </ThemeProvider>
            </body>
        </html>
    )
}