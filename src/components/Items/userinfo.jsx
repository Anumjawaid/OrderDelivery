import React, { createFactory, useState } from 'react'
import './style.css';
import Pan from '../UI/panlogo.png'
import cartim from '../UI/cart.png'
import Deliver from '../UI/delivery.png'
import Thank from '../UI/thank.png'
import Footer from './footer'
import firebase from '../../config/firebase'
import Items from './itemsdisplay'


export default function Info({ cart, setCart, pr }) {

    console.log(cart, pr, "from userinfo")

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phn, setPhone] = useState()
    const [orderd, setOrder] = useState()
    const [address, setAddress] = useState()
    const [page, setPage] = useState('/order')
    function refreshPage() { window. location. reload(false);}


    const addorder = () => {
        if (name == '' || email == '' || phn == '' || address == '') {
            console.log("yahan if me aya hon")
            alert("Please Fill All Required Fields")
        }
        else {

            console.log("IN ORDER")
            const order = {}
            order.name = name
            order.email = email
            order.phn = phn
            order.address = address
            order.cart = cart
            setOrder(order)
            console.log(order, "order")
            try {
                firebase.database().ref('/').child('orders').push(order)
                setPage('/thankyou')
                setCart([])

            }
            catch {
                setPage('/errortryagain')

            }
        }
    }
    return (
        <>
            <div>
                {
                    page === '/order' ? <div>
                        <div className="aa">
                            <nav className="navbar">

                                <a className="navbar-brand" href="#" >
                                    <img src={Pan} alt="" id='pan' width="60" height="48" />KHANA PAKANA</a>
                                <p className="cartimage">
                                    <img src={cartim} width='30px' />
                        Items{cart.length ? <span style={{ color: 'brown', fontSize: '20px' }}>
                                        {cart.length}</span> : <span>*</span>}</p>

                            </nav>
                        </div>
                        <div className="container usermain">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="divimage">
                                        <img src={Deliver} id='imdeliver' />
                                        <div className="descim">
                                            <h3>Please Fill in Your Details</h3>
                                            <h4>We Will Deliver You with Love And Care</h4>
                                        </div>
                                    </div>
                                    <div className="col-md-4 insideinfo">
                                        <label>Your Name</label>
                                        <input type='text' placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                                        <label>Your Phone</label>
                                        <input type='text' placeholder="Enter Your MobileNo" value={phn} onChange={(e) => setPhone(e.target.value)} />
                                        <label>Your Email</label>
                                        <input type='text' placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                        <label>Address</label>
                                        

                                        <input  type='text' id='textarea' placeholder="Enter Your Address" value={address} onChange={(e) => setAddress(e.target.value)} />
                                        <button className='btn btn-primary co' onClick={addorder}>Confirm Order</button>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="cartcontainer">
                                        <h4>Your Order</h4>
                                        <ul>
                                            {cart.map((v, i) => (
                                                <li key={i}>Item :{v['name']} Price :{v['price']} </li>


                                            ))}
                                            <li>Sub Total :{pr}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>

                        : page === '/thankyou' ?
                        <>
                        <div className="aa">
                            <nav className="navbar">

                                <a className="navbar-brand" href="#" >
                                    <img src={Pan} alt="" id='pan' width="60" height="48" />KHANA PAKANA</a>
                                <p className="cartimage">
                                    <img src={cartim} width='30px' />
                        Items{cart.length ? <span style={{ color: 'brown', fontSize: '20px' }}>
                                        {cart.length}</span> : <span>*</span>}</p>

                            </nav>
                        </div>
                            <div className="shopping">
                                <img src={Thank} id='shop'/>
                                <h4>Thank you to shop with us</h4>
        <a href="#" className="btn btn-primary" onClick={refreshPage}>Go Back To home Page</a>

                            </div>
                            </>
                            :
                            <div>
                                {alert("Error Please Try Again \n Fill All Input Fields")
                                
                                }
                                {setPage('/order')}
                                
                            </div>
                            
                }

                <Footer />
            </div>
        </>
    )
}