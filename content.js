import { Link } from "react-router"; // ✅ use 'react-router-dom' instead of 'react-router'

export default function Content() {
    return (
        <div className="bg-gradient-to-b from-orange-100 to-white w-screen h-full overflow-hidden">
            {/* Top Section */}
            <div className="relative w-full h-[80vh] flex flex-col justify-center items-center text-center px-6">
                <div className="max-w-[60%] text-white font-bold text-5xl z-10">
                    Order food & groceries. Discover best restaurants. Swiggy it!
                </div>

                {/* Inputs */}
                <div className="flex flex-wrap justify-center mt-6 z-10">
                    <input 
                        type="text" 
                        placeholder="Delhi, India" 
                        className="m-2 bg-white w-[250px] rounded-xl h-[50px] pl-5 shadow-md" 
                    />
                    <input 
                        type="text" 
                        placeholder="Search for restaurant, item or more" 
                        className="m-2 bg-white w-[300px] rounded-xl h-[50px] pl-5 shadow-md" 
                    />
                </div>

                {/* Side Images */}
                <img 
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" 
                    className="absolute max-w-[20%] top-0 left-0 object-contain" 
                    alt="Veggies"
                />
                <img 
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" 
                    className="absolute max-w-[20%] top-0 right-0 object-contain" 
                    alt="Sushi"
                />
            </div>

            {/* Bottom Section with Category Tiles */}
            <div className="flex justify-center items-center gap-4 flex-wrap px-10 py-10">
            <Link to="/restaurants">
                    <img 
                        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/fa01e85b-3057-482d-9523-5289722b1df2_Food4BU.png" 
                        alt="Food"
                        className="w-[200px] h-auto rounded-lg shadow hover:scale-105 transition"
                    />
                </Link><Link to="/restaurants">
                    <img 
                        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/fa01e85b-3057-482d-9523-5289722b1df2_Food4BU.png" 
                        alt="Food"
                        className="w-[200px] h-auto rounded-lg shadow hover:scale-105 transition"
                    />
                </Link>

                <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
                    <img 
                        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/fa01e85b-3057-482d-9523-5289722b1df2_Food4BU.png" 
                        alt="Instamart"
                        className="w-[200px] h-auto rounded-lg shadow hover:scale-105 transition"
                    />
                </a>

                <a href="https://www.swiggy.com/dineout">
                    <img 
                        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/76c30e5a-8adb-4795-bf5b-fa64e9e9e1d3_DO4BU.png" 
                        alt="Dineout"
                        className="w-[200px] h-auto rounded-lg shadow hover:scale-105 transition"
                    />
                </a>

                <a href="https://www.swiggy.com/genie">
                    <img 
                        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/31/14033c0b-8907-420b-b72a-d26cfa68dc7b_Genie4BU.png" 
                        alt="Genie"
                        className="w-[200px] h-auto rounded-lg shadow hover:scale-105 transition"
                    />
                </a>
            </div>
        </div>
    );
}
