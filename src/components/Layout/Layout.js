import Head from 'next/head'
import Link from 'next/link'
import styles from './Layout.module.css'
import { Brightness6Rounded } from '@material-ui/icons'
import { useEffect, useState } from 'react'

const Layout = ({ children, title = 'World Ranks' }) => {
    const [theme, setTheme] = useState('light')

    const swithTheme = () => {
        if (theme === 'light') {
            saveTheme('dark')
        } else {
            saveTheme('light')
        }
    }

    const saveTheme = (theme) => {
        setTheme(theme)
        localStorage.setItem('theme', theme)
        document.documentElement.setAttribute('data-theme', theme)
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', localStorage.getItem('theme'))
    }, [])

    return (
        <div className={styles.container}>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/img/favicon.png" />
            </Head>
            <header className={styles.header}>
                <Link href="/">
                    <img src="/img/logo.svg" alt="logo" />
                </Link>
                <button className={styles.themeSwitcher} onClick={swithTheme}>
                    <Brightness6Rounded />
                </button>
            </header>
            <main className={styles.main}>{children}</main>

            <footer className={styles.footer}>Rafael Barros @ github.com/BarrosAmorim</footer>
        </div>
    )
}

export default Layout
