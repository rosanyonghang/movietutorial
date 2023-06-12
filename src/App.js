import './App.scss';
import {HomeLayout} from "./layouts/HomeLayout";
import {Route, Routes} from "react-router";
import {AuthLayout} from "./layouts/AuthLayout";
import {DynamicRoute} from "./pages/Dynamic";
import {AddTaskScreen} from "./pages/AddTaskScreen";
const App= ()=> {
    const routes = [
        {path:'', element: <AuthLayout/>},
        {path:'/dynamo/:rambilas', element: <DynamicRoute/>},
        {path:'home', element: <HomeLayout/>},
        {path:'/add-task', element: <AddTaskScreen/>},
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
