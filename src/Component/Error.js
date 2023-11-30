import { useRouteError } from "react-router-dom";
import error_img from "../img/error__404.jpg"

const Error = () => {
    const err = useRouteError();
    const newLocal = "./";
    return(
        <div>
            <img className="w-screen h-screen" src={error_img} alt="error" />
        </div>
    )
}

export default Error;