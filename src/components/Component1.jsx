import React from 'react'
import {useContext} from 'react'
import {counterContext} from '../context/context'

// const Component1 = ({count}) => {
const Component1 = () => {
    // const counter = useContext(counterContext)
    const value = useContext(counterContext)    // because it is an object now, we will call it as value not counter

    return (
        <div>
            {/* Component1 */}
            {/* {count} */}
            {/* {counter} */}
            {value.count}
        </div>
    )
}

export default Component1