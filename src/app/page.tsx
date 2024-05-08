import classNames from "classnames";
import styles from './page.module.scss'

export default function Home() {
    return (
        <main className={"container mx-auto font-inter"}>
            <h1 className={classNames('text-green font-rubik', styles.my_earth)}>
                <span className={styles.greenShadow}>
                    Моя
                </span>&nbsp;<span
                className={classNames('text-blue', styles.blueShadow)}>
                    земля
                </span></h1>
            <p className={styles.actualNews}>Актуальные новости твоего города</p>
        </main>
    );
}
