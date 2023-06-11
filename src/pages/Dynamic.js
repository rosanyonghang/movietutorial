import {useParams} from "react-router";

export const DynamicRoute = () => {
    const params = useParams();
    console.log(params);
    return <div>DynamicRoute</div>
}