import React,{useState} from 'react'
import './style.css';


export default function Cart({cart,setCart}){
    let [ncart,setNcart]=useState()
    ncart=cart

    let [page,setPage]=useState()
    // console.log(cart[0]['name'][0],"from cart")
    // console.log("cart",cart,ncart)
    // ncart.map((v,i)=>(
    //     console.log(v,"asdfgh")

    //    ))
    
   
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

    const deletecart = ()=>{
        setNcart([])
        console.log("delete")
        
        console.log("ncart",ncart,"cart",cart)
        setCart([])
    }
    

    return(
        <div>
            <div className="container main"><h4>Items In Cart</h4>
            <h3>Your Cart Ittems</h3>
            <button onClick={()=>setCart([])} className="btn btn-primary" >Delete Cart</button> 
            <button>Place Your Order</button>
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
