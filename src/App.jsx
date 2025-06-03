import { Route, Routes } from "react-router-dom"
import AuthLayout from "./components/auth/layout"

import Authlogin from "./pages/auth/login"
import AdminLayout from "./components/admin-view/layout"
import AdminDashboard from "./pages/admin-views/dashboard"
import AdminProducts from "./pages/admin-views/products"
import AdminOrders from "./pages/admin-views/orders"
import AdminFeatures from "./pages/admin-views/features"
import ShoppingLayout from "./components/shopping-view/layout"
import NotFound from "./pages/not-found"
import ShoppingHome from "./pages/shopping-view/home"
import ShoppingListing from "./pages/shopping-view/listing"
import ShoppingCheckout from "./pages/shopping-view/checkout"
import ShoppingAccount from "./pages/shopping-view/account"
import CheckAuth from "./components/common/check-auth"
import UnauthPage from "./pages/unauth-page"
import Authregister from "./pages/auth/register"
import { useSelector } from "react-redux"






function App(){
  

  const {user,isAuthenticated}=useSelector(state=>state.auth)
return (

  <div className="flex flex-col overflow-hidden bg-orange">

        {/* Routes */}
       
<Routes>

  <Route  path="/auth" element={
    
    <CheckAuth 
    isAuthenticated={isAuthenticated} user={user}><AuthLayout/>
    </CheckAuth>
    }>



<Route path="login"  element={<Authlogin/>}/>
<Route path="register"  element={<Authregister/>}/>
  </Route>
  

  <Route path="/admin" element={<CheckAuth    isAuthenticated={isAuthenticated} user={user}><AdminLayout/></CheckAuth>}>
    <Route path="dashboard"  element={<AdminDashboard/>}/>
    <Route path="products" element={<AdminProducts/>}/>
    <Route path="orders"  element={<AdminOrders/>}/>
    <Route path="features"  element={<AdminFeatures/>}/>
    
    </Route>

    <Route  path="/shop" 
      element={<CheckAuth  isAutenticated={isAuthenticated} user={user}><ShoppingLayout/></CheckAuth>}>
        
        <Route path="home" element={<ShoppingHome/>}/> 
        
        <Route path="listing" element={<ShoppingListing/>}/>
        <Route path="checkout"  element={<ShoppingCheckout/>}/>
        <Route path="account"  element={<ShoppingAccount/>}/>
        
        
        </Route>
     
      <Route path="/unauth-page"  element={<UnauthPage/>}/>
      <Route path="*"  element={<NotFound/>}/>
  


</Routes>


  </div>
)

}

export default App