import axios from "axios"
import { useEffect, useState } from "react"
import { useCookies } from "react-cookie"
import { Link, useNavigate, useParams } from "react-router-dom"

export function ShoppingCategiory() {

    const [product, setProduct] = useState([])
    const [cookie, setCookie, removeCookie] = useCookies();
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        if (cookie["UserName"] ==undefined) {
            navigate("/Login")
        }
        axios({
            method: 'get',
            url: `https://fakestoreapi.com/products/category/${params.catname}`
        })
            .then(response => {
                setProduct(response.data)
            })
            .then(ex => {
                console.log(ex);
            })
    }, [params.catname])
    // <div></div>
    return (
        <div>
            <h3>Categiory {params.catname}</h3>
            <div className="d-flex flex-wrap">
                {
                    product.map(item =>
                        <div className="card p-2 m-2" style={{ width: '18rem' }}>
                            <img src={item.image} className='card-img-top' height='260px' />
                            <div className="card-header">
                                <label>Name</label>
                                <p className="text-dark">{item.title}</p>
                            </div>
                            <div className="card-body">
                                <label>Price</label>
                                <p >{item.price}</p>
                            </div>
                            <div className="card-footer">
                                <button className="btn "><Link to={'/details/' + item.id} >Buy Product</Link></button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}