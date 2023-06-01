import React, { useCallback, useState } from 'react'
import Child from './Child'

const UseCallBack = () => {
    const [number, setNumber] = useState(1)
    const rendernumber = () => {
        return <div>
            {number}
        </div>
    }
    //userCallBack dùng để cache lại địa chỉ hàm phục thuộc vào tham số, nếu tham số thay đổi thì hàm sẽ được tạo mới
    const renderNumberCallBack = useCallback(rendernumber, [number]);
    return (
        <div className="container">
            <h3>Number: {number}</h3>
            <button className='btn btn-dark' onClick={() => {
                setNumber(number + 1)
            }}>+</button>

            <Child renderNumber={renderNumberCallBack}></Child>
        </div>
    )
}

export default UseCallBack