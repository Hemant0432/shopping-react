import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export function ShoppingDetails() {

    const [product, setProduct] = useState({})
    const params = useParams();

    useEffect(() => {
        axios({
            method: 'get',
            url: `https://fakestoreapi.com/products/${params.id}`
        })
            .then(response => {
                setProduct(response.data)
            })
            .catch(ex => {
                console.log(ex);
            })
    }, [])

    //<div></div>
    return (
        <div>
            <h3>Details</h3>
            <div className="row">
                <div className="col-4">
                    <img src={product.image} className='p-2' width='440px' height='370px'/>
                </div>
                <div className="col-8">
                    <label className="fs-2 fw-bold">Name:-</label>
                    <p className="fs-4 ">{product.title}</p>
                    <label className="fs-2 fw-bold">Price:-</label>
                    <p className="fs-4 ">&#8377; &nbsp;{product.price}</p>
                    <label className="fs-2 fw-bold">Description:-</label>
                    <p className="fs-4 ">{product.description}</p>
                 
                   
                    <button className="btn btn-primary">Buy Product</button><br/>
                    <div className="btn"><Link to={'/Categiory/' + product.category}>Back To {product.category}</Link></div>
                </div>
            </div>
        </div>
    )
}