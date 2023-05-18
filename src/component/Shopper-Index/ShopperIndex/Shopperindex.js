import { ShoppingHeader } from "../Shopper-Header/ShopperHeader";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ShoppingCategiory } from "../ShopperCategiory/ShopperCategiory";
import { ShoppingDetails } from "../Shopper-Details/ShopperDetails";
import { ShopperRegister } from "../ShopperRegister/ShopperRegister";
import { ShopperLogin } from "../ShopperLogin/ShopperLogin";
import { ShopperInvalid } from "../ShopperInvalid/ShopperInvalid";

export function ShopperIndex() {

    // <div></div>
    return (
        <div className="container-fluid">
            <BrowserRouter>
                <div className="d-flex justify-content-between bg-dark text-white m-2">
                    <h2 >Shopper App.</h2>
                    <div className="d-flex justify-content-between">
                        <div className="m-2 btn "><Link to='/Home' className="text-white">Home</Link></div>
                        <div className="m-2 btn "><Link to='/Register' className="text-white">Register</Link></div>
                        <div className="m-2 btn"><Link to='Categiory/electronics' className="text-white">Electronics</Link></div>
                        <div className="m-2 btn"><Link to='Categiory/jewelery' className="text-white">Jewelery</Link></div>
                        <div className="m-2 btn"><Link to="Categiory/men's clothing" className="text-white">Men's clothing</Link></div>
                        <div className="m-2 btn"><Link to="Categiory/women's clothing" className="text-white">Women's clothing</Link></div>
                    </div>
                    <div className="m-2">
                        <span className="bi bi-search ms-2"></span>
                        <span className="bi bi-person ms-2"></span>
                        <span className="bi bi-cart4 ms-2"></span>
                        <span className="bi bi-heart ms-2"></span>
                    </div>
                </div>
                <div>

                    <Routes>
                        <Route path="/" element={<ShoppingHeader />}></Route>
                        <Route path="Home" element={<ShoppingHeader />}></Route>
                        <Route path="Categiory/:catname" element={<ShoppingCategiory />}></Route>
                        <Route path="/details/:id" element={<ShoppingDetails />}></Route>
                        <Route path="/Register" element={<ShopperRegister/>}></Route>
                        <Route path="login" element={<ShopperLogin/>}></Route>
                        <Route path="/Invalid" element={<ShopperInvalid/>}></Route>
                        
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}