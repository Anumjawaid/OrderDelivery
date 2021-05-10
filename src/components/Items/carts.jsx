import React, { useState } from 'react'
import Pan from '../UI/panlogo.png'
import cartim from '../UI/cart.png'
import Footer from './footer'
import { Link } from "react-router-dom";
import Items from './itemsdisplay'
import cartemp from '../UI/cartemp.JPG'



import './style.css';


export default function Cart({ cart, setCart }) {
    const ITEMS = '/items'
    const CART = '/cart'
    // let [ncart, setNcart] = useState()
    // ncart = cart

    let [page, setPage] = useState(ITEMS)



    const navigateto = (nextpage) => {
        setPage(nextpage)

    }
    const remove = (i) => {
        // ncart = cart
        console.log("i am working", i)
        // delete cart[i]
        cart.splice(i, 1)
        // console.log(ncart)
        // setTimeout(() => {  setCart(cart) }, 2000);
        setCart([...cart])
        // setNcart(Object.assign({}, ncart)) this can be used as well as setNcart({...ncart})
        // 
    }
    const totalprice = () => {

        var tp = 0
        cart.map((v, i) => (tp += v['price']))
        // console.log(tp)
        return tp
    }



    var pr = totalprice()
    console.log(pr)

    return (

        <div>
            {page===ITEMS ?
           
                <div>
                    <div className="aa">
                        <nav className="navbar">

                            <a className="navbar-brand" href="#" >
                                <img src={Pan} alt="" width="60" height="48" />KHANA PAKANA</a>
                            <p className="cartimage">
                                <img src={cartim} width='30px' />Items{cart.length ? <span style={{ color: 'brown', fontSize: '20px' }}> {cart.length}</span> : <span>*</span>}</p>

                        </nav>
                    </div>
                    {cart.length ? <div className="container main">
                        <div className="cartitemhead">

                            <h3>Your Cart Items</h3>
                            <div className="cartbtn">
                                <button onClick={() => setCart([])} className="btn btn-primary del" >Delete Cart</button>
                            </div>
                        </div>

                        {cart.map((v, i) => (
                            <div className="row">


                                <div className="col-md-12" style={{ marginLeft: '50px' }}>
                                    <div className="card cartcard" style={{ width: "60rem" }}>
                                        {/* <img src={b[i] }alt="" className="card-img-top"/> */}
                                        <div className="card-body"><h5 className="card-title">{v['name']}</h5>
                                            <p className='card-text'> Price:{v['price']} Quantity {v['quantity']}</p></div>
                                        <button key={i} className="btn btn-primary remo" onClick={() => remove(i)}>Remove Item</button>
                                    </div>


                                </div>

                            </div>
                        ))}
                        <div className="col-md-12 total" style={{ marginLeft: '30px' }}>
                            <h3>SubTotal  {pr}</h3>
                            <button className="btn btn-primary del" onClick={totalprice}>Place Your Order</button>

                        </div>
                    </div>
                    
                    
                    :<>
                    <div className="container nocart">
                        <div className="row">
                            <div className="col-md-12">
                                <img src={cartemp} id='cartimage'/>
                                <br></br>
                                <h4>NO ITEMS IN HERE</h4>
                                <br></br>
                                <h5>Shop to Fill Your Cart</h5>
                                <button className="btn btn-primary del" id="got" onClick={()=>navigateto(CART)}>Goto Items</button>
                            </div>

                        </div>
                    </div>
                    
                    </>

                     }











                    <br />
                    <div className="footcart" style={{ position: 'sticky' }}>
                        <Footer />
                    </div>
                </div>
                : <Items></Items>
               

            }


        </div>
    )
}
