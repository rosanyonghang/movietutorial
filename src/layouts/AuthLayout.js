import {useState, useEffect} from "react";
import {useLocation, useNavigate} from "react-router";

export const AuthLayout = () => {
    let [count, setCount] = useState(0);
    let count2 = 0;
    const [creds, setCreds] = useState({username: '', password: ''})
    // let count= 0;
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        console.log('value has changed');
    }, []);

    const formHandler = (e) => {
        setCreds({
            ...creds,
            [e.target.name]: e.target.value
        })
    }

    const loginUser = (e) => {
        e.preventDefault();
        if (creds.username === 'admin' && creds.password === 'admin') {
            // alert('user logged in')
            navigate('/home');
        } else {
            alert('Wrong creds')
        }
    }
    return <div>
        <form onSubmit={loginUser}>
            <input type="text" name={"username"} onChange={formHandler} value={creds.username}
                   placeholder={"enter username"}/>
            <input type="text" name={"password"} onChange={formHandler} value={creds.password}
                   placeholder={"enter password"}/>
            <button type={"submit"}>Login</button>
        </form>
    </div>
}