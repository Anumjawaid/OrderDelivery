import React,{useState} from 'react'
import './style.css';
// import Dates from '../UI/'
import DatesLand from '../UI/dateslan.JPG'
import Pan from '../UI/panlogo.png'
import Roll from '../UI/springroll.JPG'
import Sam from '../UI/samosay.JPG'
import  {getItems} from '../Admin/index'
import Cart from './carts'
import Footer from './footer'
import cartim from '../UI/cart.png'
import {Link } from "react-router-dom";
import Land from '../UI/landimg.png'


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
      

    }
    console.log(cart)

      
    }
    

    
    const navigateto=(nextpage)=>{
      console.log(page,'page')
      setPage(nextpage)


    }
    
   
    return (
      <div>
        { page===ITEMS ? (
          <div className='totalstart'>
        <div className='a' >
           <div className="header">
        <nav className="navbar">
 
    <a className="navbar-brand" href="#" >
      <img src={Pan} alt="" width="60" height="48" />KHANA PAKANA
    </a>
    <p className="cartimage"> <img src={cartim} width='30px' />Items <span style={{color:'brown' ,fontSize:'20px'}}>{cart.length}</span></p>
</nav>
        </div>
         
        <div className="landinghead">
        <div className="landtext">
                <h2>Frozen Food Delivery In Pakistan </h2>
                <p>We Deliver Fresh,Delicious Mouth Tempting Food At Your Door Step</p>

            </div>
            <div className="landimg">
              
           
            
            </div>
        </div>
        </div>
        <div className="orderplace">
    <a href="#" className="btn btn-primary placeorder" onClick={()=>navigateto(CART)}>Place Your Order</a>
          
        </div>

        {/*  */}
        <div className="ab">
        <div className="container ">
        <h3 className='headcont'>What We Are Offering</h3>
                <div className="row">
                  
        {a.length ? a.map((v,i)=>(
            
                    <div className="col-sm-4" key={i}>
                        <div className="card item" style={{width: "18rem"}}>
                            <img src={b[i] }alt="" className="card-img-top" width='30%' height='150px'/>
                            <div className="card-body">
                              <h5 className="card-title">{v['name']}</h5>
                            <p className='card-text'>DESCRIPTION:{v['desc']} <br></br>PRICE:{v['price']}</p>
                            </div>
                            <a href="#" className="btn btn-primary addcart"key={i} onClick={()=>AddtoCart(v)}>Add To Cart</a>
                        </div>
                    </div>
                    
        
                
        )) : 
        
        <div><h3>Cooking</h3>
        <a href="#" className="btn btn-primary">Click Here To Start Cooking Foods</a>
        </div>

        
        
        }

        {/*  */}
        


        </div>
        </div>
        
        </div>
        <Footer />


        </div>

        
        
           







         
        
  
         )
        
        
         : <Cart cart={cart} setCart={setCart}></Cart> }

        
        
        {/* end of function */}

        </div>
    )


}

