import React, {useEffect, useRef} from 'react';
import styles from "./Button.module.scss";
import Icon from "../Icon/Icon";
import {ButtonPaddings, Colors, IconMargins, IconPaddings} from "./variables";
import {hexToRGB, setVar} from "./helpers";
import { SmoothCorners } from 'react-smooth-corners'

interface IButton {
    type: 'solid' | 'outline' | 'soft' | 'ghost';
    size: 'small' | 'medium' | 'large';
    style: 'primary' | 'secondary' | 'danger';
    icontype: 'none' | 'leading' | 'trailing' | 'leading-trailing' | 'standalone';
    state: 'default' | 'hover' | 'disabled';
    icons: ['plus', 'brackets'] | ['moon'],
    theme: 'light' | 'dark',

    children?: React.ReactNode;
    onClick: () => {},
}

const Button = (props: IButton) => {
    const buttonStyle: string = Object.values(props).map((st: string) => styles[st]).join(' ');

    const ref = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const colors = Colors[props.theme];

        setVar(ref, "--icon-padding", IconPaddings[props.size]);
        setVar(ref, "--icon-margin", IconMargins[props.size]);
        setVar(ref, "--color-text", hexToRGB(colors[(props.style + '-text') as keyof typeof colors]));
        setVar(ref, "--color-main", hexToRGB(colors[props.style]));
        setVar(ref, "--color-hover",
            hexToRGB(colors[(props.style + '-' + props.type + '-hover') as keyof typeof colors] || "#fff"));
        setVar(ref, "--padding", (props.icontype === 'standalone' ? '0' : ButtonPaddings[props.size]));

        if (props.state === 'disabled') {
            setVar(ref, "--color-main", hexToRGB(colors['disabled']));
            setVar(ref, "--color-text", hexToRGB(colors['disabled-text']));
        }
        if (props.type === 'solid' && props.state !== 'disabled') {
            setVar(ref, "--color-text", hexToRGB("#fff"));
        }
    }, [props]);

    return (
        <SmoothCorners
            corners={props.icontype !== 'standalone' ? "12, 3" : "3"}
            as="div" className={'button'}>
            <button className={styles.button + ' ' + buttonStyle} ref={ref} onClick={props.onClick}>
                {
                    ['leading', 'standalone', 'leading-trailing'].includes(props.icontype) &&
                    <Icon name={props.icons[0]} type={props.icontype}></Icon>
                }
                {
                    !['standalone'].includes(props.icontype) &&
                    <p>{props.children}</p>
                }
                {
                    ['trailing', 'leading-trailing'].includes(props.icontype) &&
                    <Icon name={props.icons[1]} type={props.icontype}/>
                }
            </button>
        </SmoothCorners>
    );
};

export default Button;