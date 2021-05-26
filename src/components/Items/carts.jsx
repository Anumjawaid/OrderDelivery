import React, { useState } from 'react'
import Pan from '../UI/panlogo.png'
import cartim from '../UI/cart.png'
import Footer from './footer'
import { Link } from "react-router-dom";
import Items from './itemsdisplay'
import cartemp from '../UI/cartemp.JPG'
import Info from './userinfo'



import './style.css';


export default function Cart({ cart, setCart,pr }) {
    const ITEMS = '/items'
    const CART = '/cart'
    let [page, setPage] = useState(ITEMS)
    const navigateto = (nextpage) => {
        setPage(nextpage)
    }
    const remove = (i) => {
        console.log("i am working", i)
        cart.splice(i, 1)
        setCart([...cart])
        // setNcart(Object.assign({}, ncart)) this can be used as well as setNcart({...ncart})
    }

    const totalprice = () => {
        var tp = 0
        cart.map((v, i) => (tp += v['price']))
        return tp
    }

    var pr = totalprice()

    return (

        <div>
            {page===ITEMS ?
           
                <div>
                    <div className="aa">
                        <nav className="navbar">

                            <a className="navbar-brand" href="#" >
                                <img src={Pan} alt="" id="pan" width="60" height="48" />KHANA PAKANA</a>
                            <p className="cartimage">
                                <img src={cartim} width='30px' />Items{cart.length ? <span style={{ color: 'brown', fontSize: '20px' }}> {cart.length}</span> : <span>*</span>}</p>

                        </nav>
                    </div>
                    {cart.length ? 
                    <div className="container main">
                        <div className="col-md-12">
                        <div className="cartitemhead"><h3>Your Cart</h3>
                            <div className="cartbtn">
                                <button onClick={() => setCart([])} className="btn btn-primary del" >Delete Cart</button>
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <table id='tab'>
                                <tr>
                                <th>Sno</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Add/Remove</th>
                                </tr>
                                {
                                    cart.map((v,i)=>(<tr>
                                        <td>{i+1}</td>
                                        <td>{v['name']}</td>
                                        <td>{v['price']}</td>
                                        <td>{v['quantity']}</td>
                                        <td><button key={i} className="btn btn-primary remo" onClick={() => remove(i)}>Remove Item</button></td>
                                    </tr>))
                                }
                                
                            </table>
                        </div>

                        
                        <div className="col-md-12 " >
                            <div className="total">
                            <h3>SubTotal  {pr}</h3>
                            <button className="btn btn-primary dep" onClick={()=>navigateto('/userinfo')}>Place Your Order</button>
                            </div>

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
                : page===CART ?
                
                <Items></Items>
                
                :<Info cart={cart} setCart={setCart} pr={pr}/>
               

            }


        </div>
    )
}
