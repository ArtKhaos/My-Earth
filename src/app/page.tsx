import classNames from "classnames";
import styles from './page.module.scss'
import SelectCity from "@/components/forms/selectCity/selectCity";

export default function Home() {
    return (
        <main className={"container mx-auto"}>
            <div className={'grid grid-cols-12 gap-1'}>
                <div className={'col-span-8'}>
                    <h1 className={classNames('text-green font-rubik', styles.my_earth)}>
                <span className={styles.greenShadow}>
                    Моя
                </span>&nbsp;<span
                        className={classNames('text-blue', styles.blueShadow)}>
                    земля
                </span></h1>
                    <p className={styles.actualNews}>Актуальные новости твоего города</p>
                </div>
                <div className={'col-span-4'}>
                    <SelectCity className={'mx-auto mt-[156px]'}/>
                </div>
            </div>
        </main>
    );
}
