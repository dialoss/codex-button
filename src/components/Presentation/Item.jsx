import React from 'react';

const Item = ({name, setting, isActive, callback}) => {
    return (
        <div className={"table__item " + (isActive ? "active": "")}
             onClick={() => callback(setting, name)}>
            <p>{setting}</p>
        </div>
    );
};

export default Item;