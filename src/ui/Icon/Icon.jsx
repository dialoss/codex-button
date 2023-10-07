import React from 'react';
import {ReactComponent as IconBrackets} from "../icons/brackets.svg";
import {ReactComponent as IconPlus} from "../icons/plus.svg";
import {ReactComponent as IconMoon} from "../icons/add-background.svg";
import "./Icon.scss";

const Icons = {
    'brackets': IconBrackets,
    'plus': IconPlus,
    'moon': IconMoon,
}

const Icon = ({name, type}) => {
    return (
        <div className={`icon icon-${name} icon-${type}`}>
            {
                React.createElement(Icons[name], {style: {width:20, height:20}})
            }
        </div>
    );
};

export default Icon;