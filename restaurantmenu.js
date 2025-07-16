import MenuCard from "./MenuCard"
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Link } from "react-router";
export default function RestaurantMenu() {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [selected,setselected]=useState(null);

    useEffect(() => {
        async function fetchData() {
            const proxyServer = "https://cors-anywhere.herokuapp.com/"
            const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
            const response = await fetch(proxyServer+swiggyAPI);
            const data = await response.json();
            const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
            const filterData = tempData.filter((items)=> 'title' in items?.card?.card);
            setData(filterData);
        }

        fetchData();
    }, []);
    return (
        <div>
            <div className="w-[80%] mx-auto mt-20 mb-20">
          <Link to={`/city/delhi/${id}/search`}>
          <p className="w-full text-center py-4 rounded-4xl bg-gray-200 text-2xl">Search for Dishes</p>
          </Link>
        </div> 
    <button className={`px-4 py-2 m-4 rounded ${selected === 'veg' ? 'bg-green-500' : 'bg-blue-500'}`} onClick={()=>setselected(selected==='veg'?null:'veg')}>Veg</button>
    <button className={`px-4 py-2 m-4 rounded ${selected === 'non-veg' ? 'bg-green-500' : 'bg-blue-500'}`} onClick={()=>setselected(selected==='non-veg'?null:'non-veg')}>Non-Veg</button>
        <div className="p-4">
            {
                data?.map(val=>{return (<MenuCard key={val?.card?.card?.title} menuitems={val?.card?.card} selected={selected}/>)})
            }
        </div>
        </div>
    );
}
