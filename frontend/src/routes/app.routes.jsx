import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Clients } from "../pages/Clientes";
import { NewClients } from "../pages/NewClients";
import { EditClients } from "../pages/EditClients";
import { EditProducts } from "../pages/EditProducts";
import { Products } from "../pages/Products";
import { Companies } from "../pages/Companies";
import { NewProducts } from "../pages/NewProducts";
import { NewCompanies } from "../pages/NewCompanies";
import { Nfes } from "../pages/Nfes";
import { NewNfe } from "../pages/NewNfe";
import { EditNfe } from "../pages/EditNfe";
import { EditCompanies } from "../pages/EditCompanies";

export function AppRoutes(){
    return(
        <Routes>
             <Route  path="/" element={<Home />}/>   
             <Route  path="/clients" element={<Clients />}/>   
             <Route  path="/newclients" element={<NewClients/>}/>   
             <Route  path="/EditClients" element={<EditClients/>}/>   
             <Route  path="/products" element={<Products/>}/>   
             <Route  path="/companies" element={<Companies/>}/>   
             <Route  path="/newproducts" element={<NewProducts/>}/>   
             <Route  path="/nfes" element={<Nfes/>}/>   
             <Route  path="/newnfe" element={<NewNfe/>}/>   
             <Route  path="/newcompanies" element={<NewCompanies/>}/>   
             <Route  path="/editclients/:id" element={<EditClients/>}/>   
             <Route  path="/editproducts/:id" element={<EditProducts/>}/>   
             <Route  path="/editnfe/:id" element={<EditNfe/>}/>   
             <Route  path="/editcompanies/:id" element={<EditCompanies/>}/>   
        </Routes>
    )
}