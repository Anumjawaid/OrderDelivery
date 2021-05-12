import React, { useState } from 'react'
import './style.css';
import Pan from '../UI/panlogo.png'
import cartim from '../UI/cart.png'
import Deliver from '../UI/delivery.png'
import Footer from './footer'


export default function Info({ cart, setCart ,pr}) {
    console.log(cart,pr, "from userinfo")


    return (
        <>
            <div className="aa">
                <nav className="navbar">

                    <a className="navbar-brand" href="#" >
                        <img src={Pan} alt="" width="60" height="48" />KHANA PAKANA</a>
                    <p className="cartimage">
                        <img src={cartim} width='30px' />
                        Items{cart.length ? <span style={{ color: 'brown', fontSize: '20px' }}>
                             {cart.length}</span> : <span>*</span>}</p>

                </nav>
            </div>
            {/*  */}
            <div className="container usermain">
                <div className="row">
                    <div className="col-md-6">
                        <div className="divimage">
                            <img src={Deliver} id='imdeliver'/>
                            <div className="descim">
                            <h3>Please Fill in Your Details</h3>
                            <h4>We Will Deliver You with Love And Care</h4>
                            </div>
                            </div>

                        <div className="col-md-4 insideinfo">
                            <label>Your Name</label>
                            <input type='text' placeholder="Enter Your Name" />
                            <label>Your Phone</label>
                            <input type='text' placeholder="Enter Your MobileNo" />
                            <label>Your Email</label>
                            <input type='text' placeholder="Enter Your Email" />
                            <label>Address</label>
                            <textarea type='text' placeholder="Enter Your Address" />
                            <button btn btn-primary del>Confirm Order</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="cartcontainer">
                            <h4>Your Order</h4>
                            <ul>
                            {cart.map((v,i)=>(
                                <li key={i}>Item :{v['name'] } Price :{v['price']} </li>


                            ))}
                            <li>Sub Total :{pr}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}