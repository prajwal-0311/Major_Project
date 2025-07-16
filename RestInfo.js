export default function RestInfo({data})
{
    
     return (
         <>
        <div className="flex w-full justify-between mb-2 pb-2">
          <div className="w-[70%]">
            <p className="text-2xl text-gray-700 font-semibold mb-1">{data?.name}</p>
            <p className="text-xl">{"₹"+ ("defaultPrice" in data ? data?.defaultPrice/100:data?.price/100)}</p>
            <span className="text-green-700">{data?.ratings?.aggregatedRating?.rating}</span>
            <span>{"("+data?.ratings?.aggregatedRating?.ratingCountV2+")"}</span>
            <p>
                {data?.description}
            </p>    
          </div>
          <div className="w-[20%] relative">
            <img className="w-full h-36 object-cover rounded-3xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+data.imageId}></img>
            <button className="absolute bottom-1 left-20 rounded-xl text-2xl text-green-600 px-6 py-2 shadow-md border border-white bg-white">ADD</button>
          </div>
        </div>
        <hr className="mb-6 mt-2"></hr>
    </>)
}