'use client'
import React, { useState} from 'react';
import styles from './customSelect.module.scss'
import classNames from "classnames";
type customSelectProps = {
    placeholder:string,
    className?:string
}
function CustomSelect(props:customSelectProps) {
    const [inputVal, setInputVal] = useState('')

    const handleInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInputVal(e.target?.value)
    }
    return (
        <div className={classNames(styles.selectHolder, props.className)}>
            <input value={inputVal} onChange={e => handleInput(e)} placeholder={props.placeholder} className={'font-raleway'}/>
        </div>
    );
}

export default CustomSelect;