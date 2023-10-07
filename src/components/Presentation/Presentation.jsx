import React, {useState} from 'react';
import Button from "../../ui/Button/Button";
import Item from "./Item";
import "./Presentation.scss";
import {Default, ThemeToggler, Togglers} from "./constants";

const Presentation = () => {
    const [selection, setSelection] = useState(Default);
    const [theme, setTheme] = useState('dark');
    function changeValue(setting, name) {
        setSelection(s => ({...s, [name]: setting}));
    }
    function changeTheme() {
        setTheme(theme => {
            if (theme === 'light') return 'dark';
            return 'light';
        })
    }
    return (
        <div className={"presentation " + theme}>
            <div className="theme-toggler">
                <Button icons={['moon']} {...ThemeToggler} onClick={changeTheme}></Button>
            </div>
            <div className="content">
                <Button icons={['plus', 'brackets']} {...{...selection, theme}}>Button</Button>
                <div className={"table"}>
                    {
                        Object.keys(Togglers).map((header, i) =>
                            <div className={"table__column"} key={i}>
                                <p className={"table__header"}>{header}</p>
                                {
                                    Togglers[header].map((setting, j) =>
                                        <Item setting={setting}
                                              name={header}
                                              isActive={selection[header] === setting}
                                              callback={changeValue} key={j}>
                                        </Item>
                                    )
                                }
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Presentation;