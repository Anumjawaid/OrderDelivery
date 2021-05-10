import React from 'react'
// import {BrowserRouter as Router,Route} from 'react-router-dom'
import {BrowserRouter as Router ,Route} from 'react-router-dom'
import Items from '../components/Items/itemsdisplay'
import {Admin}  from '../components/Admin/index'
import Cart from '../components/Items/carts'
class AppRouter extends React.Component{
    render(){
        return(
            <Router>
                <Route path='/admin' component={Admin}></Route>
                <Route exactpath='/items' component={Items}></Route>
                {/* <Route path='/order' component={Order}></Route> */}
                <Route path='/cart' component={Cart}></Route>

            </Router>
        )
    }

}

export default AppRouter;