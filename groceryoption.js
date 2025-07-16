import Grocery from "../Utils/Grocery"
export default function Groceryoption(){
    return (<div >                
        <h2 className="font-bold m-3 p-3 italic text-2xl px-[5vw]">Shop Grocceries on InstaMart</h2>
        <div className="flex flex-wrap container max-h-[40vh] max-w-[100vw] overflow-x-auto m-2 p-2 gap-[2vw] justify-center object-cover px-[10vw]">
        {
            Grocery.map(val=>{
                return (<div key={val.id} className="max-w-[12vw] max-h-[12vw] flex flex-col justify-center items-center my-[2vw]">
                    <a href={`${val.action.link}`}><img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${val.imageId}`}></img></a>
                    <h2>{val.action.text}</h2>
                </div>)
            })
        }
        </div>
    </div>)
} 