import {useParams} from "react-router";

export const DynamicRoute = () => {
    const params = useParams();
    console.log(params);
    return <div>
        <h1>params: {params.rambilas}</h1>
    </div>
}