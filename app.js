import React from "react";
import ReactDOM from "react-dom/client";
import { Route,Link,BrowserRouter,Routes } from "react-router";
import Home from "./components/Home";
import Restaurant from "./components/restaurant";
import RestaurantMenu from "./components/restaurantmenu";
import SearchFood from "./Components/SearchFood";
function Main()
{
    return(<BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/restaurants" element={<Restaurant/>}></Route>
            <Route path="/city/delhi/:id" element={<RestaurantMenu/>}></Route>
            <Route path="/city/delhi/:id/search" element={<SearchFood></SearchFood>}></Route>
        </Routes>
    </BrowserRouter>) 
}
ReactDOM.createRoot(document.querySelector('body')).render(<Main/>)