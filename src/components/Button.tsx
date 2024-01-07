import React from 'react';


type PropsButton = {
    name: string
    onClick: () => void
}

const Button = (props: PropsButton) => {
    const onClickHandler = () => props.onClick()


    return (
        <button onClick={onClickHandler}>{props.name}</button>
    );
};

export default Button;