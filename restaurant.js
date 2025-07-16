// import {useState,useEffect} from "react";
// import RestCard from "./RestCard";
// export default function Restaurant()
// {
//     const [data,setData]=useState([])

    

//     useEffect(()=>{
//         async function fetchData()
//     {
//         const proxyServer = "https://cors-anywhere.herokuapp.com/"
//         const swiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true";
//         const response = await fetch(proxyServer+swiggyAPI);
//         const data = await response.json();
//         setData(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//     }
//         fetchData();
//     },[])

//     console.log(data);
//     return (<div className="w-screen h-full flex flex-wrap gap-1 items-center justify-center p-4 ">
//            {
//                 data?.map((restInfo)=><RestCard key={restInfo?.info?.id} restInfo={restInfo}></RestCard>)
//             }

//     </div>
//     )
// }

import { useEffect, useState } from "react";
import RestCard from "./RestCard";
// import Shimmer from "./Shimmer";

export default function Restaurant() {
    const [RestData, setRestData] = useState([]);

    useEffect(() => {
        async function fetchData() {
        const proxyServer = "https://cors-anywhere.herokuapp.com/"
        const swiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true";
        const response = await fetch(proxyServer+swiggyAPI);
        const data = await response.json();
        setRestData(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }

        fetchData();
    }, []);

    // Optional shimmer or loading fallback
    // if (RestData.length === 0 && !error) return <Shimmer />;

    // if (error) return <p className="text-center text-red-600">{error}</p>;

    return (
        <div className="flex justify-center items-center min-h-screen w-full">
        <div className="flex flex-wrap justify-center items-center gap-3 mt-20">
          {RestData.map((restInfo) => (
            <RestCard key={restInfo?.info?.id} restInfo={restInfo} />
          ))}
        </div>
      </div>
      
    );
}
