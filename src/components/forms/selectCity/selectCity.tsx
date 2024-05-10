import React from 'react';
import CustomSelect from "@/components/inputs/customSelect/customSelect";
import classNames from "classnames";
import styles from './selectCity.module.scss'
import HugeButton from "@/components/buttons/hugeButton/hugeButton";

type selectCityProps = {
    className: string,
}

function SelectCity(props: selectCityProps) {
    return (
        <div className={classNames(props.className, 'flex flex-col items-center')}>
            <h2 className={styles.yourCity}>Ваш город</h2>

            <CustomSelect placeholder={'Москва'} className={'mt-[50px]'}/>

            <HugeButton text={'Начать'} className={'mt-[20px]'} color={'green'}/>
            <p className={'mt-[20px] font-light text-[24px] leading-7'}>или</p>
            <HugeButton text={'Войти'} className={'mt-[20px]'} color={'green'}/>
            <HugeButton text={'Регистрация'} className={'mt-[20px]'} color={'blue'}/>

            <p className={classNames('mt-[50px]', styles.privacyPolicy)}>
                Авторизуясь, вы принимаете <span
                className={'underline'}>соглашение на обработку персональных данных.</span></p>
        </div>
    );
}

export default SelectCity;