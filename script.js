import React from "react";
import ReactDOM from "react-dom/client";
import "./script.css"

//restaurant card
const RestaurantCard = ({name,location,imageurl})=>{

    return <div id="restaurant-item" >
        <img style={{borderRadius:"12px"}} width="100" height="100" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+imageurl}></img>
        <h3>{name}</h3>
        <h4>{location}</h4>
        <button style={{margin:"10px", padding:"10px",fontFamily:"monospace",backgroundColor:"gray",color:"white",border:"2px red solid",cursor:"pointer"}}>Browse Dishes</button>
    </div>
}

const Header = ()=>{
    return <div id="header-container" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div style={{width:"10vw",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <img id="logo" style={{width:"100px",height:"50 px",borderRadius:"80px"}} src="https://images.unsplash.com/photo-1640812570037-ea415861315b"></img>
        </div>
        <div style={{width:"90vw"}}>
            <ul style={{listStyleType:"none",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-evenly"}}>
                <li className="nav-item">
                    Home
                </li>
                <li className="nav-item">
                    About Us
                </li>
                <li className="nav-item">
                    Cart
                </li>
                <li className="nav-item">
                    Contact Us
                </li>
            </ul>
        </div>
    </div>
}

const Body = ()=>{
    const restaurants= [
                                    {
                                        "info": {
                                            "id": "342669",
                                            "name": "Blue Tokai Coffee Roasters",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/24/e1a42ea8-f9e3-4552-9192-3395baa9f213_342669.JPG",
                                            "locality": "Khan Market",
                                            "areaName": "Khan Market",
                                            "costForTwo": "₹600 for two",
                                            "cuisines": [
                                                "Cafe",
                                                "Coffee",
                                                "Beverages"
                                            ],
                                            "avgRating": 4.7,
                                            "parentId": "2682",
                                            "avgRatingString": "4.7",
                                            "totalRatingsString": "1.0K+",
                                            "sla": {
                                                "deliveryTime": 30,
                                                "lastMileTravel": 4.7,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "30-35 mins",
                                                "lastMileTravelString": "4.7 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-02-27 23:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "newg.png",
                                                        "description": "Gourmet"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "aggregatedDiscountInfoV2": {},
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Gourmet",
                                                                    "imageId": "newg.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "4.3",
                                                    "ratingCount": "749"
                                                },
                                                "source": "GOOGLE",
                                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-1bfafeb8-2dbb-4c83-805f-bdd70eb1eb86"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/delhi/blue-tokai-coffee-roasters-khan-market-rest342669",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "279866",
                                            "name": "Ghar ka Khana by EatFit",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/13/6b6c632b-fa1e-4765-87c4-b90c614ea540_279866.JPG",
                                            "locality": "BHAGAT SINGH MARKET",
                                            "areaName": "GOLE MARKET",
                                            "costForTwo": "₹250 for two",
                                            "cuisines": [
                                                "North Indian",
                                                "Home Food",
                                                "Healthy Food",
                                                "Indian",
                                                "Punjabi",
                                                "South Indian",
                                                "Rajasthani",
                                                "Maharashtrian",
                                                "Snacks",
                                                "Desserts"
                                            ],
                                            "avgRating": 4,
                                            "parentId": "422576",
                                            "avgRatingString": "4.0",
                                            "totalRatingsString": "3.2K+",
                                            "sla": {
                                                "deliveryTime": 27,
                                                "lastMileTravel": 2.4,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "25-30 mins",
                                                "lastMileTravelString": "2.4 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-02-27 23:45:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "android/static-assets/icons/big_rx.png",
                                                        "description": "bolt!"
                                                    },
                                                    {
                                                        "imageId": "High%20Protein/rx%20tag%205.png",
                                                        "description": "High Protein"
                                                    },
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "bolt!",
                                                                    "imageId": "android/static-assets/icons/big_rx.png"
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "High Protein",
                                                                    "imageId": "High%20Protein/rx%20tag%205.png"
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "60% OFF",
                                                "subHeader": "UPTO ₹120"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-1bfafeb8-2dbb-4c83-805f-bdd70eb1eb86"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/delhi/ghar-ka-khana-by-eatfit-bhagat-singh-market-gole-market-rest279866",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "90566",
                                            "name": "Chaayos Chai+Snacks=Relax",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/2ce18342-6c04-4ebc-9725-788819ddaa56_90566.JPG",
                                            "locality": "Connaught Place",
                                            "areaName": "Connaught Place",
                                            "costForTwo": "₹250 for two",
                                            "cuisines": [
                                                "Beverages",
                                                "Chaat",
                                                "Snacks",
                                                "Bakery",
                                                "Street Food",
                                                "healthy",
                                                "Home Food",
                                                "Maharashtrian",
                                                "Italian",
                                                "Desserts"
                                            ],
                                            "avgRating": 4.6,
                                            "parentId": "281782",
                                            "avgRatingString": "4.6",
                                            "totalRatingsString": "9.2K+",
                                            "sla": {
                                                "deliveryTime": 14,
                                                "lastMileTravel": 0.1,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "10-15 mins",
                                                "lastMileTravelString": "0.1 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-02-27 23:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "android/static-assets/icons/big_rx.png",
                                                        "description": "bolt!"
                                                    },
                                                    {
                                                        "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                                                        "description": "Delivery!"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "bolt!",
                                                                    "imageId": "android/static-assets/icons/big_rx.png"
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹199"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "4.1",
                                                    "ratingCount": "506"
                                                },
                                                "source": "GOOGLE",
                                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-1bfafeb8-2dbb-4c83-805f-bdd70eb1eb86"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/delhi/chaayos-chai-snacks-relax-connaught-place-rest90566",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "25169",
                                            "name": "Subway",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/33ea9b71-9535-472c-a260-d02060354feb_25169.jpg",
                                            "locality": "Karol Bagh , Old Rajinder Nagar, Connaught place",
                                            "areaName": "Old Rajinder Nagar , Connaught place, Karol Bagh",
                                            "costForTwo": "₹350 for two",
                                            "cuisines": [
                                                "sandwich",
                                                "Salads",
                                                "wrap",
                                                "Healthy Food"
                                            ],
                                            "avgRating": 4.4,
                                            "parentId": "2",
                                            "avgRatingString": "4.4",
                                            "totalRatingsString": "55K+",
                                            "sla": {
                                                "deliveryTime": 21,
                                                "lastMileTravel": 4.8,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "20-25 mins",
                                                "lastMileTravelString": "4.8 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-02-27 23:59:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "High%20Protein/rx%20tag%205.png",
                                                        "description": "High Protein"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "High Protein",
                                                                    "imageId": "High%20Protein/rx%20tag%205.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "40% OFF",
                                                "subHeader": "UPTO ₹80"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-1bfafeb8-2dbb-4c83-805f-bdd70eb1eb86"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/delhi/subway-karol-bagh-old-rajinder-nagar-connaught-place-old-rajinder-nagar-connaught-place-karol-bagh-rest25169",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "526516",
                                            "name": "Salad Days",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/14/da84a0d0-52b6-4349-98cf-188f86e6a403_526516.jpg",
                                            "locality": "Gole Market",
                                            "areaName": "Gole Market",
                                            "costForTwo": "₹600 for two",
                                            "cuisines": [
                                                "Salads"
                                            ],
                                            "avgRating": 4.6,
                                            "parentId": "796",
                                            "avgRatingString": "4.6",
                                            "totalRatingsString": "5.2K+",
                                            "sla": {
                                                "deliveryTime": 21,
                                                "lastMileTravel": 2.4,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "20-25 mins",
                                                "lastMileTravelString": "2.4 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-02-27 23:59:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "android/static-assets/icons/big_rx.png",
                                                        "description": "bolt!"
                                                    },
                                                    {
                                                        "imageId": "High%20Protein/rx%20tag%205.png",
                                                        "description": "High Protein"
                                                    },
                                                    {
                                                        "imageId": "Ratnesh_Badges/Rx_Awards_2025/Healthy.png",
                                                        "description": "Delivery!"
                                                    },
                                                    {
                                                        "imageId": "newg.png",
                                                        "description": "Gourmet"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "bolt!",
                                                                    "imageId": "android/static-assets/icons/big_rx.png"
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "High Protein",
                                                                    "imageId": "High%20Protein/rx%20tag%205.png"
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Ratnesh_Badges/Rx_Awards_2025/Healthy.png"
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "Gourmet",
                                                                    "imageId": "newg.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "20% OFF",
                                                "subHeader": "UPTO ₹50"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "4.5",
                                                    "ratingCount": "77"
                                                },
                                                "source": "GOOGLE",
                                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-1bfafeb8-2dbb-4c83-805f-bdd70eb1eb86"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/delhi/salad-days-gole-market-rest526516",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "558793",
                                            "name": "HRX by EatFit",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/4/38aa81fa-fd2e-4fe1-86d3-ab5e1ceefd99_558793.JPG",
                                            "locality": "BHAGAT SINGH MARKET",
                                            "areaName": "GOLE MARKET",
                                            "costForTwo": "₹450 for two",
                                            "cuisines": [
                                                "Healthy Food",
                                                "Salads",
                                                "Burgers"
                                            ],
                                            "avgRating": 4.5,
                                            "parentId": "624615",
                                            "avgRatingString": "4.5",
                                            "totalRatingsString": "557",
                                            "sla": {
                                                "deliveryTime": 21,
                                                "lastMileTravel": 2.4,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "20-25 mins",
                                                "lastMileTravelString": "2.4 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-02-27 23:45:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "High%20Protein/rx%20tag%205.png",
                                                        "description": "High Protein"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "High Protein",
                                                                    "imageId": "High%20Protein/rx%20tag%205.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "65% OFF",
                                                "subHeader": "UPTO ₹125"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-1bfafeb8-2dbb-4c83-805f-bdd70eb1eb86"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/delhi/hrx-by-eatfit-bhagat-singh-market-gole-market-rest558793",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "411450",
                                            "name": "KFC",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/8/90366864-61f7-448d-94b0-84aca4d608c3_411450.JPG",
                                            "locality": "Paharganj",
                                            "areaName": "Paharganj",
                                            "costForTwo": "₹400 for two",
                                            "cuisines": [
                                                "Burgers",
                                                "Fast Food",
                                                "Rolls & Wraps"
                                            ],
                                            "avgRating": 4.3,
                                            "parentId": "547",
                                            "avgRatingString": "4.3",
                                            "totalRatingsString": "3.3K+",
                                            "sla": {
                                                "deliveryTime": 28,
                                                "lastMileTravel": 2,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "25-30 mins",
                                                "lastMileTravelString": "2.0 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-02-28 05:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "android/static-assets/icons/big_rx.png",
                                                        "description": "bolt!"
                                                    },
                                                    {
                                                        "imageId": "Rxawards/_CATEGORY-Burger.png",
                                                        "description": "Delivery!"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "bolt!",
                                                                    "imageId": "android/static-assets/icons/big_rx.png"
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "50% OFF",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "4.6",
                                                    "ratingCount": "2.3K+"
                                                },
                                                "source": "GOOGLE",
                                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-1bfafeb8-2dbb-4c83-805f-bdd70eb1eb86"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/delhi/kfc-paharganj-rest411450",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "500574",
                                            "name": "Suchali's Artisan Bakehouse",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/24/018fc754-8b27-4d07-a82e-21b21323a8ef_500574.JPG",
                                            "locality": "Khan Market",
                                            "areaName": "Khan Market",
                                            "costForTwo": "₹600 for two",
                                            "cuisines": [
                                                "Bakery",
                                                "Desserts",
                                                "Beverages"
                                            ],
                                            "avgRating": 4.8,
                                            "parentId": "196351",
                                            "avgRatingString": "4.8",
                                            "totalRatingsString": "304",
                                            "sla": {
                                                "deliveryTime": 30,
                                                "lastMileTravel": 4.7,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "25-30 mins",
                                                "lastMileTravelString": "4.7 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-02-27 23:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "newg.png",
                                                        "description": "Gourmet"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "aggregatedDiscountInfoV2": {},
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Gourmet",
                                                                    "imageId": "newg.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-1bfafeb8-2dbb-4c83-805f-bdd70eb1eb86"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/delhi/suchalis-artisan-bakehouse-khan-market-rest500574",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "601181",
                                            "name": "Tim Hortons",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/14/89c6484d-7789-4120-9459-45abd4d5ce14_601181.JPG",
                                            "locality": "S Block",
                                            "areaName": "Green Park",
                                            "costForTwo": "₹400 for two",
                                            "cuisines": [
                                                "Coffee",
                                                "Beverages",
                                                "Cafe",
                                                "Desserts",
                                                "sandwich",
                                                "Fast Food"
                                            ],
                                            "avgRating": 4.6,
                                            "parentId": "420703",
                                            "avgRatingString": "4.6",
                                            "totalRatingsString": "2.0K+",
                                            "sla": {
                                                "deliveryTime": 30,
                                                "lastMileTravel": 9.4,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "25-30 mins",
                                                "lastMileTravelString": "9.4 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-02-27 07:59:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "₹125 OFF",
                                                "subHeader": "ABOVE ₹449",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "4.6",
                                                    "ratingCount": "852"
                                                },
                                                "source": "GOOGLE",
                                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-1bfafeb8-2dbb-4c83-805f-bdd70eb1eb86"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/delhi/tim-hortons-s-block-green-park-rest601181",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "218676",
                                            "name": "Chai Point",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/7/6177ff4a-413b-4ca5-99df-3fb905a8c302_218676.JPG",
                                            "locality": "Connaught Place",
                                            "areaName": "Connaught Place",
                                            "costForTwo": "₹150 for two",
                                            "cuisines": [
                                                "Bakery",
                                                "Beverages",
                                                "Maharashtrian",
                                                "Snacks",
                                                "Street Food",
                                                "South Indian",
                                                "Punjabi",
                                                "Chaat",
                                                "Indian",
                                                "American"
                                            ],
                                            "avgRating": 4.4,
                                            "parentId": "1607",
                                            "avgRatingString": "4.4",
                                            "totalRatingsString": "8.5K+",
                                            "sla": {
                                                "deliveryTime": 16,
                                                "lastMileTravel": 1.1,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "15-20 mins",
                                                "lastMileTravelString": "1.1 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-02-28 05:29:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "android/static-assets/icons/big_rx.png",
                                                        "description": "bolt!"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "bolt!",
                                                                    "imageId": "android/static-assets/icons/big_rx.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹49"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "4.3",
                                                    "ratingCount": "1.3K+"
                                                },
                                                "source": "GOOGLE",
                                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-1bfafeb8-2dbb-4c83-805f-bdd70eb1eb86"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/delhi/chai-point-connaught-place-rest218676",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "443497",
                                            "name": "EatFit",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/21/b47888b9-3ae1-4a24-b1fe-b7cff15effe7_443497.JPG",
                                            "locality": "BHAGAT SINGH MARKET",
                                            "areaName": "GOLE MARKET",
                                            "costForTwo": "₹270 for two",
                                            "cuisines": [
                                                "North Indian",
                                                "Healthy Food",
                                                "Thalis"
                                            ],
                                            "avgRating": 4.4,
                                            "parentId": "76139",
                                            "avgRatingString": "4.4",
                                            "totalRatingsString": "3.3K+",
                                            "sla": {
                                                "deliveryTime": 20,
                                                "lastMileTravel": 2.4,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "20-25 mins",
                                                "lastMileTravelString": "2.4 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-02-27 23:45:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "android/static-assets/icons/big_rx.png",
                                                        "description": "bolt!"
                                                    },
                                                    {
                                                        "imageId": "High%20Protein/rx%20tag%205.png",
                                                        "description": "High Protein"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "bolt!",
                                                                    "imageId": "android/static-assets/icons/big_rx.png"
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "High Protein",
                                                                    "imageId": "High%20Protein/rx%20tag%205.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "60% OFF",
                                                "subHeader": "UPTO ₹120"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-1bfafeb8-2dbb-4c83-805f-bdd70eb1eb86"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/delhi/eatfit-bhagat-singh-market-gole-market-rest443497",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "258198",
                                            "name": "Great Indian Khichdi by EatFit",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/21/ccf38632-c4c4-429d-aa85-e28f28f9234a_258198.JPG",
                                            "locality": "BHAGAT SINGH MARKET",
                                            "areaName": "GOLE MARKET",
                                            "costForTwo": "₹200 for two",
                                            "cuisines": [
                                                "Home Food",
                                                "Indian",
                                                "North Indian",
                                                "Healthy Food",
                                                "Snacks",
                                                "Desserts",
                                                "Rajasthani",
                                                "South Indian",
                                                "Maharashtrian",
                                                "Sweets"
                                            ],
                                            "avgRating": 4.3,
                                            "veg": true,
                                            "parentId": "319582",
                                            "avgRatingString": "4.3",
                                            "totalRatingsString": "5.5K+",
                                            "sla": {
                                                "deliveryTime": 19,
                                                "lastMileTravel": 2.4,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "15-20 mins",
                                                "lastMileTravelString": "2.4 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-02-27 23:45:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "android/static-assets/icons/big_rx.png",
                                                        "description": "bolt!"
                                                    },
                                                    {
                                                        "imageId": "High%20Protein/rx%20tag%205.png",
                                                        "description": "High Protein"
                                                    },
                                                    {
                                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                        "description": "pureveg"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "bolt!",
                                                                    "imageId": "android/static-assets/icons/big_rx.png"
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "High Protein",
                                                                    "imageId": "High%20Protein/rx%20tag%205.png"
                                                                }
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "description": "pureveg",
                                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹49"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-1bfafeb8-2dbb-4c83-805f-bdd70eb1eb86"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/delhi/great-indian-khichdi-by-eatfit-bhagat-singh-market-gole-market-rest258198",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "17858",
                                            "name": "Cafe Coffee Day",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/21/e04e2bbb-3cb0-4d59-b4e1-6e149d1d5bdb_17858.JPG",
                                            "locality": "Rajinder Nagar",
                                            "areaName": "Rajinder Nagar",
                                            "costForTwo": "₹400 for two",
                                            "cuisines": [
                                                "Beverages",
                                                "Cafe",
                                                "Snacks",
                                                "Desserts",
                                                "Burgers",
                                                "Ice Cream",
                                                "Bakery",
                                                "Fast Food"
                                            ],
                                            "avgRating": 4.7,
                                            "parentId": "1",
                                            "avgRatingString": "4.7",
                                            "totalRatingsString": "7.2K+",
                                            "sla": {
                                                "deliveryTime": 31,
                                                "lastMileTravel": 5.7,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "30-40 mins",
                                                "lastMileTravelString": "5.7 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-03-06 00:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                                                        "description": "Delivery!"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "40% OFF",
                                                "subHeader": "UPTO ₹80"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "3.9",
                                                    "ratingCount": "960"
                                                },
                                                "source": "GOOGLE",
                                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-1bfafeb8-2dbb-4c83-805f-bdd70eb1eb86"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/delhi/cafe-coffee-day-rajinder-nagar-rest17858",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "626148",
                                            "name": "La Pino'z Pizza",
                                            "cloudinaryImageId": "ezjogwtzx40ko0wlat5l",
                                            "locality": "Salt Lake",
                                            "areaName": "Karol Bagh",
                                            "costForTwo": "₹400 for two",
                                            "cuisines": [
                                                "Pizzas",
                                                "Pastas",
                                                "Italian",
                                                "Desserts",
                                                "Beverages"
                                            ],
                                            "avgRating": 4.2,
                                            "parentId": "4961",
                                            "avgRatingString": "4.2",
                                            "totalRatingsString": "12K+",
                                            "sla": {
                                                "deliveryTime": 31,
                                                "lastMileTravel": 4.6,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "30-35 mins",
                                                "lastMileTravelString": "4.6 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-03-06 00:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "50% OFF",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "3.7",
                                                    "ratingCount": "769"
                                                },
                                                "source": "GOOGLE",
                                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-1bfafeb8-2dbb-4c83-805f-bdd70eb1eb86"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/delhi/la-pinoz-pizza-salt-lake-karol-bagh-rest626148",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "234095",
                                            "name": "McDonald's",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/e5f856ce-55b4-4430-8d2d-1380f2cb622d_234095.JPG",
                                            "locality": "Saytam Cinema Complex",
                                            "areaName": "Nehru Place",
                                            "costForTwo": "₹400 for two",
                                            "cuisines": [
                                                "American"
                                            ],
                                            "avgRating": 4.5,
                                            "parentId": "630",
                                            "avgRatingString": "4.5",
                                            "totalRatingsString": "18K+",
                                            "sla": {
                                                "deliveryTime": 47,
                                                "lastMileTravel": 12.4,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "45-50 mins",
                                                "lastMileTravelString": "12.4 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-02-27 07:45:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹49"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "4.2",
                                                    "ratingCount": "8.3K+"
                                                },
                                                "source": "GOOGLE",
                                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-1bfafeb8-2dbb-4c83-805f-bdd70eb1eb86"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/delhi/mcdonalds-saytam-cinema-complex-nehru-place-rest234095",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "393375",
                                            "name": "Sandburgs",
                                            "cloudinaryImageId": "2732975759c408a91b735ee18a6cbe2d",
                                            "locality": "Zamrudpur",
                                            "areaName": "Greater Kailash 1",
                                            "costForTwo": "₹500 for two",
                                            "cuisines": [
                                                "Burgers",
                                                "American",
                                                "Pastas",
                                                "Salads"
                                            ],
                                            "avgRating": 4.6,
                                            "parentId": "446963",
                                            "avgRatingString": "4.6",
                                            "totalRatingsString": "3.9K+",
                                            "sla": {
                                                "deliveryTime": 45,
                                                "lastMileTravel": 10.6,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "40-45 mins",
                                                "lastMileTravelString": "10.6 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-02-28 04:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "newg.png",
                                                        "description": "Gourmet"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Gourmet",
                                                                    "imageId": "newg.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "20% OFF",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-1bfafeb8-2dbb-4c83-805f-bdd70eb1eb86"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/delhi/sandburgs-zamrudpur-greater-kailash-1-rest393375",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "18579",
                                            "name": "Bille Di Hatti ",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/29/820f254e-83a0-45ec-8742-9f4e984eebc9_18579.jpg",
                                            "locality": "Kamla Nagar",
                                            "areaName": "Kamla Nagar",
                                            "costForTwo": "₹100 for two",
                                            "cuisines": [
                                                "Street Food",
                                                "Snacks",
                                                "North Indian"
                                            ],
                                            "avgRating": 4.4,
                                            "veg": true,
                                            "parentId": "4639",
                                            "avgRatingString": "4.4",
                                            "totalRatingsString": "44K+",
                                            "sla": {
                                                "deliveryTime": 41,
                                                "lastMileTravel": 7.9,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "40-45 mins",
                                                "lastMileTravelString": "7.9 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-02-27 18:30:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "₹200 OFF",
                                                "subHeader": "ABOVE ₹549",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "4.0",
                                                    "ratingCount": "4.9K+"
                                                },
                                                "source": "GOOGLE",
                                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-1bfafeb8-2dbb-4c83-805f-bdd70eb1eb86"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/delhi/bille-di-hatti-kamla-nagar-rest18579",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "370153",
                                            "name": "Falhari - A Fruitful Habit",
                                            "cloudinaryImageId": "jom4nthurqv5zdbunsfw",
                                            "locality": "Mahendru Enclave",
                                            "areaName": "Model Town 2",
                                            "costForTwo": "₹250 for two",
                                            "cuisines": [
                                                "Healthy Food",
                                                "Salads",
                                                "Juices"
                                            ],
                                            "avgRating": 4.3,
                                            "veg": true,
                                            "parentId": "13818",
                                            "avgRatingString": "4.3",
                                            "totalRatingsString": "3.6K+",
                                            "sla": {
                                                "deliveryTime": 46,
                                                "lastMileTravel": 9.8,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "45-55 mins",
                                                "lastMileTravelString": "9.8 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-02-28 03:00:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "60% OFF",
                                                "subHeader": "UPTO ₹120"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-1bfafeb8-2dbb-4c83-805f-bdd70eb1eb86"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/delhi/falhari-a-fruitful-habit-mahendru-enclave-model-town-2-rest370153",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "21314",
                                            "name": "Barista Coffee",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/10/c9043320-9cef-4cfc-9f25-3e115e4ef3b3_21314.JPG",
                                            "locality": "Basant Lok",
                                            "areaName": "Vasant Vihar",
                                            "costForTwo": "₹350 for two",
                                            "cuisines": [
                                                "Beverages",
                                                "Snacks",
                                                "Desserts"
                                            ],
                                            "avgRating": 4.6,
                                            "parentId": "416281",
                                            "avgRatingString": "4.6",
                                            "totalRatingsString": "1.6K+",
                                            "sla": {
                                                "deliveryTime": 51,
                                                "lastMileTravel": 13.9,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "50-60 mins",
                                                "lastMileTravelString": "13.9 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-02-27 23:45:00",
                                                "opened": true
                                            },
                                            "badges": {},
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {},
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "ITEMS",
                                                "subHeader": "AT ₹69"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "4.3",
                                                    "ratingCount": "65"
                                                },
                                                "source": "GOOGLE",
                                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-1bfafeb8-2dbb-4c83-805f-bdd70eb1eb86"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/delhi/barista-coffee-basant-lok-vasant-vihar-rest21314",
                                            "type": "WEBLINK"
                                        }
                                    },
                                    {
                                        "info": {
                                            "id": "799264",
                                            "name": "Seoul Burgers & Shakes",
                                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/7/6cc2437b-c3e2-45c3-9407-c113d777f882_799264.jpg",
                                            "locality": "Rajouri Garden",
                                            "areaName": "West",
                                            "costForTwo": "₹200 for two",
                                            "cuisines": [
                                                "Burger",
                                                "Bubble Tea",
                                                "Fast Food",
                                                "Beverages",
                                                "Juice and shake"
                                            ],
                                            "avgRating": 4.5,
                                            "parentId": "588706",
                                            "avgRatingString": "4.5",
                                            "totalRatingsString": "847",
                                            "sla": {
                                                "deliveryTime": 54,
                                                "lastMileTravel": 11.5,
                                                "serviceability": "SERVICEABLE",
                                                "slaString": "50-60 mins",
                                                "lastMileTravelString": "11.5 km",
                                                "iconType": "ICON_TYPE_EMPTY"
                                            },
                                            "availability": {
                                                "nextCloseTime": "2026-03-06 00:00:00",
                                                "opened": true
                                            },
                                            "badges": {
                                                "imageBadges": [
                                                    {
                                                        "imageId": "Ratnesh_Badges/Rx_Awards_2025/Global%20Flavours.png",
                                                        "description": "Delivery!"
                                                    }
                                                ]
                                            },
                                            "isOpen": true,
                                            "type": "F",
                                            "badgesV2": {
                                                "entityBadges": {
                                                    "imageBased": {
                                                        "badgeObject": [
                                                            {
                                                                "attributes": {
                                                                    "description": "Delivery!",
                                                                    "imageId": "Ratnesh_Badges/Rx_Awards_2025/Global%20Flavours.png"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    "textBased": {},
                                                    "textExtendedBadges": {}
                                                }
                                            },
                                            "aggregatedDiscountInfoV3": {
                                                "header": "₹100 OFF",
                                                "subHeader": "ABOVE ₹399",
                                                "discountTag": "FLAT DEAL"
                                            },
                                            "differentiatedUi": {
                                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                "differentiatedUiMediaDetails": {
                                                    "lottie": {},
                                                    "video": {}
                                                }
                                            },
                                            "reviewsSummary": {},
                                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                            "restaurantOfferPresentationInfo": {},
                                            "externalRatings": {
                                                "aggregatedRating": {
                                                    "rating": "--"
                                                }
                                            },
                                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                                        },
                                        "analytics": {
                                            "context": "seo-data-1bfafeb8-2dbb-4c83-805f-bdd70eb1eb86"
                                        },
                                        "cta": {
                                            "link": "https://www.swiggy.com/city/delhi/seoul-burgers-and-shakes-rajouri-garden-west-rest799264",
                                            "type": "WEBLINK"
                                        }
                                    }
                                ]
    return <div id="body-container" >
        {
            restaurants.map(r=>{
                return <div id="restaurant-cards" key={r['info'].id}>
                    <RestaurantCard  name={r['info'].name} location={r['info'].locality} 
                imageurl={r['info'].cloudinaryImageId}/>
                </div>
            })
        }
    </div>
}

const AppLayout = ()=>{
    return <div>
    <Header/>
    <Body/>
    </div>
}


//root of the application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)


