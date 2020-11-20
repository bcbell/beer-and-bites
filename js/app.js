/*-------------Variables----------------*/
  const beers= []

  /*------------Cached Element References------*/
 //Buttons
  const beerPairBtn = document.getElementById('beerPairBtn')
  const brewerySearch = document.getElementById('brewerysearchBtn')
  const searchBtn =document.getElementById('searchBtn')
  const searchByText = document.getElementById('pairings')
 
/*----------------Event Listeners------------*/
//Beer & Pairings 
beerPairBtn.addEventListener('click', ()=>{

fetch("https://api.punkapi.com/v2/beers/random")
    .then (function(response){
        return response.json()
    })
    .then (data => {
        console.log(data)//change to return
           for(beer in beers){ //loops through the property of an object
           const name = data[0].name
           console.log(name)
           const tagline= data[0].tagline
           console.log(tagline)
            const description = data[0].description
            console.log(description)
            const image_url = data[0].image_url
            console.log (image_url)
            const {ingredients} = data[0] //ingredients is an object and the following are objects within an object
            const malt = ingredients.malt
            console.log(malt)
            const hops = ingredients.hops
            console.log(hops)
            const food_pairing = data[0].food_pairing
            console.log(food_pairing)
            const brewers_tips = data[0].brewers_tips
            console.log(brewers_tips)
            
             
        document.getElementById('beerPair').innerHTML += beers
            }
        })
     })
//Beer & Food Search  (Text Search)

searchBtn.addEventListener('click', ()=>{
let searchText = searchByText.value
    const url = `https://api.punkapi.com/v2/beers?foods=${searchText}`
    console.log(url)
    fetch (url)
        .then (function(response){
            return response.json()
        })
        .then (data => {
            console.log(data)//change to return
               for(beer in beers){ //loops through the property of an object
               const name = data.name
               console.log(name)
               const tagline= data.tagline
               console.log(tagline)
                const description = data.description
                console.log(description)
                const image_url = data.image_url
                console.log (image_url)
                const {ingredients} = data //ingredients is an object and the following are objects within an object
                const malt = ingredients.malt
                console.log(malt)
                const hops = ingredients.hops
                console.log(hops)
                const food_pairing = data.food_pairing
                console.log(food_pairing)
                const brewers_tips = data.brewers_tips
                console.log(brewers_tips)
                
                 
            document.getElementById('beerPair').innerHTML += beers
                }
            })
         })

//Brewery Search

brewerysearchBtn.addEventListener('click', ()=>{

    fetch("https://api.openbrewerydb.org/breweries/")
        .then (function(response){
            return response.json()
        })
        .then (data => {
            console.log(data)//change to return
               for(beer in beers){ //loops through the property of an object
                const name = data.name
                console.log(name)
                 const type = data.brewery_type
                 console.log(type)
                 const street =data.street
                 console.log(street) 
                 const city = data.city
                 console.log (city)
                 const state= data.state
                 console.log(state)
                 const zip= data.postal_code
                 console.log(zip)
                 const country= data.country
                 console.log(country) 
                 const phone= data.phone
                 console.log(phone)
                 const website= data.website_url
                 console.log(website)
                
                 
            document.getElementById('beerPair').innerHTML += beers
               }      
    
            })
         })
    
        