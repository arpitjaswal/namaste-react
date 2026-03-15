


export const WithLabel = (RestaurantCard,r)=>{
    console.log(r)
    return <RestaurantCard  name={r['info'].name} location={r['info'].locality} 
                    avgRating={r['info'].avgRating}
                        promoted={true}
                    totalRatingsString = {r['info'].totalRatingsString} 
                imageurl={r['info'].cloudinaryImageId}/>
}