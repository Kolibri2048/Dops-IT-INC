import React, {ChangeEvent, RefObject, useEffect, useRef, useState} from 'react';

type InputType = {
    inputRef: RefObject<HTMLInputElement>
    // newTitle: string
    // setNewTitle: (newTitle: string) => void
}

export const Input = (props:InputType) => {
    // const[newTitle, setNewTitle] = useState('')

    // const onChangeHendler = (e: ChangeEvent<HTMLInputElement>) => {
    //     props.setNewTitle(e.currentTarget.value)
    // }

    // const inputRef = useRef(null)

    return (
        <input
            ref={props.inputRef}
            // onChange={onChangeHendler}
            // value={props.newTitle}
        />
    );
};

//---------------------------------------------
// import React, {ChangeEvent, useEffect, useState} from 'react';
//
// type InputType = {
//     newTitle: string
//     setNewTitle: (newTitle: string) => void
// }
//
// export const Input = (props:InputType) => {
//     // const[newTitle, setNewTitle] = useState('')
//
//     const onChangeHendler = (e: ChangeEvent<HTMLInputElement>) => {
//         props.setNewTitle(e.currentTarget.value)
//
//     }
//
//     return (
//         <input onChange={onChangeHendler} value={props.newTitle}/>
//     );
// };

