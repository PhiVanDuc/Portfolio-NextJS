"use client"

import Link from "next/link"
import '@/components/navigation/styleNavigation.scss'
import { usePathname, useRouter } from "next/navigation"
import { ThemeContext } from "@/contexts/ThemeProvider"
import { useContext } from "react"

export default function Navigation({ lang }) {
    const pathname = usePathname();
    const router = useRouter();
    const { theme, switchTheme } = useContext(ThemeContext);

    const handleClickSwitchTheme = () => {
        if (theme === "light") switchTheme("dark");
        else switchTheme("light");
    }

    const handleClickSwitchLang = () => {
        if (lang === "en") router.push("/vi");
        else router.push("/en");
    }

    return (
        <header className='header-main'>
            <div className='container'>                
                <nav className='nav-main'>
                    <Link className='logo' href="/">
                        <span>Logo</span>
                        <span>The Example Name</span>
                    </Link>

                    <ul className='nav-list'>
                        <li className='nav-item'>
                            <Link className={ pathname === `/${lang}` ? "active" : "nav-link" } href={'/'}>Home</Link>
                        </li>
                    </ul>
                </nav>

                <div className='action-buttons'>
                    <a className='btn-website-f8' href="https://fullstack.edu.vn/@son-dang" target="_blank">F8</a>
                    <a className='btn-facebook-f8' href="https://www.facebook.com/groups/f8official" target="_blank">
                        <svg fill="#777777" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                            <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
                        </svg>
                    </a>
                    <a className='btn-youtube-f8' href="https://www.youtube.com/c/F8VNOfficial" target="_blank">
                        <svg fill="#777777" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 72 72">
                            <path d="M61.115,18.856C63.666,21.503,64,25.709,64,36s-0.334,14.497-2.885,17.144C58.563,55.791,55.906,56,36,56	s-22.563-0.209-25.115-2.856C8.334,50.497,8,46.291,8,36s0.334-14.497,2.885-17.144S16.094,16,36,16S58.563,16.209,61.115,18.856z M31.464,44.476l13.603-8.044l-13.603-7.918V44.476z"></path>
                        </svg>
                    </a>

                    <button className='btn-switch-theme' onClick={handleClickSwitchTheme}>
                        {
                            theme === "light" ?
                            (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className='w-6 h-6 icon-dark'>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                                </svg>
                            ) :
                            (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='w-6 h-6 icon-light'>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                </svg>
                            )
                        }
                    </button>
                    <button className="btn-switch-lang" onClick={handleClickSwitchLang}>{ lang }</button>
                </div>
            </div>
        </header>
    )
}
