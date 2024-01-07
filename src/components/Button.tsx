import React from 'react';

type ButtonType = {
    onclick: () => void
    name: string
}

const Button = (props: ButtonType) => {

    const onClickHendler = () => {
        props.onclick()
    }

    return (
        <button onClick={onClickHendler} >{props.name}</button>
    );
};

export default Button;