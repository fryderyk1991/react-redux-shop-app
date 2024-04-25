import { Link, useRouteError } from "react-router-dom";

const NotFoundPage = () => {
    const error = useRouteError()
    console.log(error)
    return <div>
        <Link to='/'>Go back to Home Page</Link>
        <p>{error.statusText} </p>
        </div>;
}


export default NotFoundPage;