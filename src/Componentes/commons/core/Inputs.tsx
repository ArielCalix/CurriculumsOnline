import React from "react";
import styles from '../../../styles/commonStyles.module.css';

type typesInput = 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week';
type style = 'colorPrimary' | 'colorInfo' | 'colorSuccess' | 'colorWarning' | 'colorDanger' | 'colorLightShade' | 'colorLightAccent' | 'colorMainBrand' | 'colorDarkAccent' | 'colorDarkShade';

interface InputProps {
    type: typesInput;
    name: string;
    value: any;
    placeHolder?: string;
    styleInputs: style;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Inputs(props: InputProps) {
    return <input
        onChange={props.onChange}
        name={props.name}
        value={props.value}
        className={`form-control mr-sm-2 ${styles[props.styleInputs]}`}
        type={props.type}
        placeholder={props.placeHolder}
        data-aria-label={props.type} />
}