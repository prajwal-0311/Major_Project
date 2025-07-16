import FoodData from "../Utils/FoodData"

function Foodoption ()
{
    return (<div className="flex max-h-[50vh] max-w-[100vw] overflow-x-scroll justify-center m-2 p-2 px-[10vw] flex-nowrap">    
        {
          FoodData.map(val => (
            <div key={val.id} className="max-w-[20vw] max-h-[20vw] flex-shrink-0 mx-2">
              <a href={val.action.link}>
                <img 
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${val.imageId}`} 
                  alt={val.name || "Food item"} 
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </a>
            </div>
          ))
        }
      </div>
      )
}

export default Foodoption