import React,{useState} from 'react'
import './style.css';
// import Dates from '../UI/'
import DatesLand from '../UI/dateslan.JPG'
import Pan from '../UI/panlogo.png'
import Roll from '../UI/springroll.JPG'
import Sam from '../UI/samosay.JPG'
import  {getItems} from '../Admin/index'
import Cart from './carts'
import {Link } from "react-router-dom";


export default function Items () {
  const ITEMS='/items'
  const CART='/cart'
  let [page,setPage]=useState(ITEMS)

  let [cart,setCart]=useState([])
  
  
  var cartitems={
    'name':"",
    'price':0,
    'day':"",
    "quantity":0
  }
  let b=[Pan,Roll,Sam,DatesLand,Roll,Sam,Roll,Sam]
    var a=getItems()
    console.log("zxcvb",a)
    var quantity=1
    const AddtoCart = (i) =>{
      var index=-1
      const checkele=()=>{
        if(cart.length!=0){
        for(var aa=0; aa<cart.length; aa++){
          // console.log(cart[aa],"for chrck")}
          
        if(i.name==cart[aa].name){

        index=aa
        console.log("Me idhar aya hon with",cart[aa].name,index)
        }}
      }
      return index

      }
      var a=checkele()
      // end of checkele
    // var a=checkele()
    //   console.log(i,a,"frrom add to cart")
      var month=['Jan',"Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"]
        var d = new Date();
        var date=(d.getUTCDate()+ month[d.getMonth()]+d.getFullYear())
        var price=i['price']

      cartitems.name=i['name']
      cartitems.price=price
      cartitems.day=date
      cartitems.quantity=quantity
      cartitems.id=i['id']
      console.log(index,"index")
      var cartt=[]
    if(cart.length==0 ){
      console.log("Khali hon")
      setCart([...cart,cartitems])
    }
    else{
      if(index!=-1){
        var a=checkele()
        console.log("idhar aya hon if dos")
      console.log(i,a,"frrom add to cart")
      // const nc=[...cart]
      var update
      update=cart[a]
      update.quantity+=1
      update.price+=i['price']
      // setCart(update)
      }
      else{
        console.log("last else")
        setCart([...cart,cartitems])
      }
      // nc[a].quantity+=1

      // setCart(nc)
      // console.log(nc)

    }
    console.log(cart)

      
    }

    
    const navigateto=(nextpage)=>{
      console.log(page,'page')
      setPage(nextpage)


    }
    const p=(e)=>{
      e.preventDefault()
      console.log(e)

    }
   
    return (
      <div>
        { page===ITEMS ? (
        <div className='a' >
          
        
        <div className="header">
        <nav className="navbar navbar-light bg-light">
  <div className="container">
    <a className="navbar-brand" href="#" >
      <img src={Pan} alt="" width="60" height="48" />KHANA PAKANA
    </a>
    <a href="#" className="btn btn-primary" onClick={()=>navigateto(CART)}>Place Your Order</a>
    
    

  </div>
</nav>
        </div>
         
        <div className="landinghead">
            <div className="landimg">
              
           
            <div className="landtext">
                <h3>Fresh Delicate Sweet Dates For Ramzan At Your Doorstep</h3>

            </div>
            </div>
        </div>
        <div className="container">
        <h3>What We Are Offering</h3>
                <div className="row">
                  
        {a.length ? a.map((v,i)=>(
            
                    <div className="col-sm-4" key={i}>
                        <div className="card" style={{width: "18rem"}}>
                            <img src={b[i] }alt="" className="card-img-top"/>
                            <div className="card-body"><h5 className="card-title">{v['name']}</h5>
                            <p className='card-text'>{v['desc']} Price:{v['price']}</p></div>
                            <a href="#" className="btn btn-primary"key={i} onClick={()=>AddtoCart(v)}>Add To Cart</a>
                        </div>
                    </div>
                
        )) : <h3>Cooking</h3>}
        </div>
        </div>
        {/* cards */}
        <div className="container">
            {/* for dates */}
            <div className="row">
                <div className="col-sm-4">
                    
                    {/* 1st */}
                    <div className="card" style={{width: "18rem"}}>
  <img src={DatesLand} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Chicken Roll</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary" onClick={p}>Order Now</a>
  </div>
</div>
</div>
{/* 2nd */}
<div className="col-sm-4">
<div className="card" style={{width: "18rem"}}>
  <img src={DatesLand}class="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Samosay</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Order Now</a>
  </div>
</div>
</div>

{/* 3rd */}
<div className="col-sm-4">
<div className="card" style={{width: "18rem"}}>
  <img src={DatesLand} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Spring Roll</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Order Now</a>
  </div>
</div>
                </div>
            </div>







             {/* for roll */}
            <div className="row">
                <div className="col-sm-4">
                    {/* 1st */}
                    <div className="card" style={{width: "18rem"}}>
  <img src={Roll} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Chicken Roll</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Order Now</a>
  </div>
</div>
</div>
{/* 2nd */}
<div className="col-sm-4">
<div className="card" style={{width: "18rem"}}>
  <img src={Sam}class="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Samosay</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Order Now</a>
  </div>
</div>
</div>

{/* 3rd */}
<div className="col-sm-4">
<div className="card" style={{width: "18rem"}}>
  <img src={Roll} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Spring Roll</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Order Now</a>
  </div>
</div>
                </div>
            </div>
        </div>
        
  
        </div> ) : <Cart cart={cart} setcart={()=>setCart}></Cart> }

        </div>
    )


}

