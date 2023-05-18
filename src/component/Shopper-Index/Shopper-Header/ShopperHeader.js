import { useEffect } from "react";
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom";

export function ShoppingHeader() {

    const navigate = useNavigate();
    const [cookie, setCookie, removeCookie] = useCookies();

    function signoutClick() {
        removeCookie ("UserName")
        navigate("/Login")
    }

    useEffect(
        () => {
            if (cookie["UserName"] == undefined) {
                navigate("/Login")
            }
        }, [])
    // <div></div>
    return (
        <div>
            <div >
                <h4 className="justify-content-right">Hello - {cookie["UserName"]}</h4>
                <button onClick={signoutClick} className="btn btn-link">Signout</button>
            </div>
            <div className=" d-flex justify-content-between">
                <div>
                    <div>
                        <img src="electronics.jpg" width='250px' height='220px' />
                        <img src="woman_clothing.jpg" width='250px' height='220px' />
                        <img src="men_clothing.jpg" width='250px' height='220px' />
                        <img src="jwelary.jpg" width='250px' height='220px' />
                    </div>
                </div>
            </div>
        </div>
    )
}