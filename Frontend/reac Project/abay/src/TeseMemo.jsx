import { memo, useEffect } from "react";

export default memo (function TestMemo(){
    useEffect(()=>{
        console.log("test memo component")
    })

    return <>
        <h1>This is from test memo component</h1>
    </>
})