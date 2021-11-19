import React from "react";
import styles from "../../../styles/commonStyles.module.css";

type typesButton = 'button' | 'reset' | 'submit';
type style = 'colorPrimary' | 'colorInfo' | 'colorSuccess' | 'colorWarning' | 'colorDanger' | 'colorLightShade' | 'colorLightAccent' | 'colorMainBrand' | 'colorDarkAccent' | 'colorDarkShade';

interface buttonProps {
    type?: typesButton;
    name?: string;
    styles?: string;
    buttonStyle: style;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button(props: buttonProps) {
    return <button
        onClick={props.onClick}
        className={`btn btn-outline my-2 my-sm-0 ${props.styles} ${styles[props.buttonStyle]}`}
        type={props.type}>{props.name}
    </button>
}
