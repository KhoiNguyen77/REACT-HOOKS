import { memo } from "react"
import React from 'react'

const Child = (props) => {
    console.log("run");
  return (
    <div>{props.renderNumber()}</div>
  )
}

export default memo(Child) //chặn reload lại khi state ở trang cha thay đổi ==> Chỉ render lại khi props đầu vào thay đổi