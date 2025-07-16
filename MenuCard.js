import RestInfo from "./RestInfo"
export default function MenuCard({menuitems,selected}){
    console.log(menuitems?.itemCards)
    if(selected==='veg')
    return (<>
        {
            menuitems?.itemCards?.filter(val=>"isVeg" in val?.card?.info).map(val=>{return (<RestInfo key={val?.card?.info?.id} data={val?.card?.info}/>)})
        }
        </>)
    if(selected==='non-veg')
        return (<>
            {
                menuitems?.itemCards?.filter(val=>!("isVeg" in val?.card?.info)).map(val=>{return (<RestInfo key={val?.card?.info?.id} data={val?.card?.info}/>)})
            }
            </>)
            return (<>
                {
                    menuitems?.itemCards?.map(val=>{return (<RestInfo key={val?.card?.info?.id} data={val?.card?.info}/>)})
                }
                </>)
}