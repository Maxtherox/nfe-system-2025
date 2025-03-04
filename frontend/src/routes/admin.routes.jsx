import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';


export function AdminRoutes() {
  return (
    <Routes>
             <Route  path="/" element={<Home />}/>   
             <Route  path="/clients" element={<Clients />}/>   
             <Route  path="/newclients" element={<NewClients/>}/>   
             <Route  path="/EditClients" element={<EditClients/>}/>   
             <Route  path="/products" element={<Products/>}/>   
             <Route  path="/newproducts" element={<NewProducts/>}/>   
             <Route  path="/nfes" element={<Nfes/>}/>   
             <Route  path="/newnfe" element={<NewNfe/>}/>   
    </Routes>
  );
}