import React, {useContext} from 'react'
import Component1 from "../components/Component1"
import {counterContext} from "../context/context"

// const Button = ({count}) => {
const Button = () => {

    const value = useContext(counterContext);

    return (
        <div>
            {/* <button  > */}
            <button onClick={() => value.setCount((count) => count + 1)} >
                {/* <span><Component1 count={count} /></span> */}
                <span><Component1 /></span>
                    I am a Button
            </button>
        </div>
    )
}

export default Button