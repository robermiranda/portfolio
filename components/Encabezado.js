import style from '../styles/Aos.module.css';
import { title } from '../data';

export default function App () {
    return (
        <header className={style.hero}>
            <div className={style.herocenter}>
                <h1 className={style.hero__logo} data-aos="zoom-in">
                    {title.h1}
                </h1>
                <h2 className={style.hero__text}
                    data-aos="fade-up"
                    data-aos-easing="ease"
                    data-aos-delay="400">
                    
                        {title.h2}
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
