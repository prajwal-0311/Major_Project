import Header from "./header"
import Content from "./content"
import Foodoption from "./foodoption"
import Groceryoption from "./groceryoption"
import DineDataOption from "./DineData";

export default function Home(){
    return (
        <div>
        <div className="bg-[#ff5200] ">
        <Header/>
        <Content/>
        </div>    
        <Foodoption/>
        <Groceryoption/>
        <DineDataOption/>
    </div>
    )
}