import './App.scss';
import {HomeLayout} from "./layouts/HomeLayout";
import {Route, Routes} from "react-router";
import {AuthLayout} from "./layouts/AuthLayout";
const App= ()=> {
    const routes = [
        {path:'', element: <AuthLayout/>},
        {path:'home', element: <HomeLayout/>},
        {path:'*', element: <AuthLayout/>},
    ]
  return (
    <div className="App">
      <Routes>
          {routes.map((v,key)=>(
              <Route  path={v.path} element={v.element} key={key}/>
          ))}
      </Routes>
    </div>
  );
}

export default App;
