import {useRouteError} from "react-router"
export function Error(){
    const error = useRouteError();
    console.log(error)
    return<div>
        <h1>status:{error?.status}</h1>
        <h1>reason:{error?.statusText}</h1>
    </div>
}