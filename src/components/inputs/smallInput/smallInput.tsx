import React from 'react';

type smallInputProps = {
    placeholder:string
}
function SmallInput(props:smallInputProps) {
    return (
        <div>
            <input placeholder={props.placeholder}/>
        </div>
    );
}

export default SmallInput;