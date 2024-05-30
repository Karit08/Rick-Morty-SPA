import style from './Header.module.css'

export default function Header() {
    return (
        <header className={style.header}>
            <div className={style.wrapper}>
                <div className={style.logo}> Rick & Morty </div>
                <nav className={style.nav}>
                    <a className={style.a} href="#">Home</a>
                    <a className={style.a} href="#">About me</a>
                    <a className={style.a} href="#">Contact</a>
                </nav>
            </div>
        </header>
    )
};