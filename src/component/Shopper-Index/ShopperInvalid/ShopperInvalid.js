import { Link } from "react-router-dom";

export function ShopperInvalid() {

    // <div></div>
    return (
        <div className="container-fluid">
            <h3 className="text-danger">Invalid User Name Or Password</h3>
            <Link to='/Login'>Back To Login</Link>
        </div>
    )
}