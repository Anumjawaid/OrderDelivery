import React,{useState} from 'react'
import Pan from '../UI/panlogo.png'
import cartim from '../UI/cart.png'


import './style.css';


export default function Cart({cart,setCart}){
    let [ncart,setNcart]=useState()
    ncart=cart

    let [page,setPage]=useState()
    
    
   
    const navigateto=(nextpage)=>{
        setPage(nextpage)

    }
    const remove = (i)=>{
        ncart=cart
        console.log("i am working",i)
        // delete cart[i]
        ncart.splice(i,1)
        console.log(ncart)
        // setTimeout(() => {  setCart(cart) }, 2000);
        setNcart([...ncart])
        // setNcart(Object.assign({}, ncart)) this can be used as well as setNcart({...ncart})
// 
    }
    const totalprice=()=>{
        
        var tp=0
        cart.map((v,i)=>(tp+=v['price']))
        console.log(tp)
    }



    return(
        <div>
            <div className="aa">
            <nav className="navbar">
 
 <a className="navbar-brand" href="#" >
   <img src={Pan} alt="" width="60" height="48" />KHANA PAKANA
 </a>
 <p className="cartimage">
      <img src={cartim} width='30px' />Items <span style={{color:'brown' ,fontSize:'20px'}}>{cart.length}</span></p>

</nav>
</div>
            <div className="container main">
                <div className="cartitemhead">
            <h3>Your Cart Items</h3>
            <div className="cartbtn">
            <button onClick={()=>setCart([])} className="btn btn-primary" >Delete Cart</button> 
            <button onClick={totalprice}>Place Your Order</button>
            </div>
            </div>
            {ncart.map((v,i)=>(
                <div className="row">

                    
                    <div className="col-md-12">
                        <div className="card" style={{width: "30rem"}}>
                            {/* <img src={b[i] }alt="" className="card-img-top"/> */}
                            <div className="card-body"><h5 className="card-title">{v['name']}</h5>
                            <p className='card-text'> Price:{v['price']} Quantity {v['quantity']}</p></div>
                            <button key={i}  className="btn btn-primary" onClick={()=>remove(i)}>Remove Item</button>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        

        </div>
    )
}
