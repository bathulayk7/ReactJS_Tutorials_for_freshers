import { useState } from 'react'

const useCounter = () => {
const [count,setCount]=useState();

const inc=()=>{
    setCount(count+1);
}
return [count,inc];
 
}

export default useCounter