import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import './App.scss';
import Cart from './components/Cart';
import NavBar from './components/NavBar';
import ProductDetails from './components/ProductDetails';
import Products from './components/Products'
function App() {
  return (
   <div className="app">
     <NavBar/>
     <div className="sections">
       <Route path="/" exact render={(props)=>(<Products {...props}/>)}/> 
       <Route path="/productdetails/:id" exact render={(props)=>(<ProductDetails {...props}/>)}/> 
       <Route path="/cart" exact render={(props)=>(<Cart {...props}/>)}/> 
       
     </div>
   </div>
  );
}

export default App;
