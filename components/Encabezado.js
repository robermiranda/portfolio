import style from '../styles/Aos.module.css';

export default function App () {
    return (
        <header className={style.hero}>
            <div className={style.herocenter}>
                <h1 className={style.hero__logo} data-aos="zoom-in">
                    Roberto Miranda
                </h1>
                <h2 className={style.hero__text}
                    data-aos="fade-up"
                    data-aos-easing="ease"
                    data-aos-delay="400">
                    
                        Desarrollador Web y Sistemas Informáticos
                </h2>
            </div>
            <span className={style.hero__scroll}
                data-aos="fade-up"
                data-aos-easing="ease"
                data-aos-delay="800">

                <i className={`${style.chevron} ${style.bottom}`}></i>
            </span>
        </header>
    )
}
