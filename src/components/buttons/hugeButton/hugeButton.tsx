import React from 'react';
import classNames from "classnames";
import styles from './hugeButton.module.scss'
type hugeButtonProps = {
    text: string,
    className?:string,
    color: 'blue' | 'green'
}
function HugeButton(props:hugeButtonProps) {
    return (
        <button className={classNames(styles.hugeButton, props.className, (props.color == 'green' ? styles.green : styles.blue ))}>
            {props.text}
        </button>
    );
}

export default HugeButton;