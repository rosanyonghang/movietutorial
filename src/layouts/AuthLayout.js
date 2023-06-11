import {useState, useEffect} from "react";
import {useLocation} from "react-router";

export const AuthLayout = () => {
    let [count,setCount] = useState(0);
    let count2= 0;
    // let count= 0;
    const location = useLocation();
    const increaseCount=()=>{
        setCount(count+1);
        console.log(location)
    }

    useEffect(()=>{
        console.log('value has changed');
    },[]);

    return <div>
        <h1>
            {count2} AuthLayout {count}
        </h1>
        <button onClick={increaseCount}>Inrc count</button>
    </div>
}