 
export const SelectTravelList=[
    {
        id:1,
        title:"Just Me",
        desc:"Solo Traveler",
        icon:'+',
        people:'1 Person'

    },
    {
        id:2,
        title:"Couple",
        desc:"Two Travelers",
        icon:'🥂',
        people:'2 Peoples'
    },
    {
        id:3,
        title:"Family",
        desc:"Group of Adventurers",
        icon:'👪',
        people:'3 to 5 Peoples'
    }
]

export const SelectBudgetList=[
    {
        id:1,
        title:"Cheap",
        desc:"Stay conveniently",
        icon:'💵',
        

    },  
    {   
        id:2,  
        title:"Moderate",
        desc:"Keep on budget",
        icon:'💸',

    },  
    {   
        id:3,  
        title:"Luxury",
        desc:"Luxury trip",
        icon:'💰',

    },  
    
]

export const AI_PROMPT='Generate Travel Plan for Location:{location},for {days} Days for {travelers} with a {budget} budget,give me hotels with accurate hotelName,hotelAddress,price,hotelimageurl,geoCoordinates,rating,description and suggest itinerary with placeName,placeDetails,placeImageUrl,geoCoordinates,ticketpricing,TimetoTravel each of the location for {days} days  with each day plan with best time to visit in JSON format'