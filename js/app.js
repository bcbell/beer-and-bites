/*-------------Variables----------------*/
  var beers= []

  let firstAPICallBP = fetch("https://api.punkapi.com/v2/beers/random")
  let secondAPICallBrew = fetch("https://api.openbrewerydb.org/breweries/")

  
  
 
  /*------------Cached Element References------*/
 //Buttons
  const beerPairBtn = document.getElementById('beerPairBtn')
  const brewerySearch = document.getElementById('brewerySearchBtn')
  const searchBtn =document.getElementById('searchBtn')
  const searchByText = document.getElementById('pairings')
 
  let displayBP= document.getElementById('displayBP')
/*--------------Functions---------------*/
function renderHTML (firstAPIResponse, secondAPIResponse){
    document.querySelector('container').innerHTML=`<p>${firstAPIResponse.info} : ${secondAPIResponse}</p>`
}

// function reneder(beer){

//     document.getElementById('container').innerHTML= `<p>${beer}</p>`
// }

  /*----------------Event Listeners------------*/
//Beer & Pairings 
beerPairBtn.addEventListener('click', ()=>{
fetch("https://api.punkapi.com/v2/beers/random")
    .then (function(response){
        return response.json()
    })
    .then (data => {
        console.log (data)//change to return
           for(beers in data){ //loops through the property of an object
           const name = data[beers].name
           console.log(name)
           const tagline= data[beers].tagline
           console.log(tagline)
            const description = data[beers].description
            console.log(description)
            const image_url = data[beers].image_url
            console.log (image_url)
            const ingredients = data[beers].ingredients //ingredients is an object and the following are objects within an object
            const malt = ingredients.malt
            console.log(malt)
            const hops = ingredients.hops
            console.log(hops)
            const food_pairing = data[beers].food_pairing
            console.log(food_pairing)
            const brewers_tips = data[beers].brewers_tips
            console.log(brewers_tips)
          
           displayBP.innerHTML = `<p><h3> Name: ${name}</h3> "${tagline}" </p>, <p> Beer Description:${description}</p>,<p>Food Pairing Options: ${food_pairing}</p>, <p> Brew Tips: ${brewers_tips} </p>`   
        }

    })   
        .catch((err)=>{
            console.log(err)
        })
    })

//Brewery Search

brewerySearchBtn.addEventListener('click', ()=>{

    fetch("https://api.openbrewerydb.org/breweries/")
        .then (function(response){
            return response.json()
        })
        .then (data => {
            console.log(data)//change to return
            for(beers in data){ 
                const name = data[beers].name
                console.log(name)
                 const type = data[beers].brewery_type
                 console.log(type)
                 const street =data[beers].street
                 console.log(street) 
                 const city = data[beers].city
                 console.log (city)
                 const state= data[beers].state
                 console.log(state)
                 const zip= data[beers].postal_code
                 console.log(zip)
                 const country= data[beers].country
                 console.log(country) 
                 const phone= data[beers].phone
                 console.log(phone)
                 const website= data[beers].website_url
                 console.log(website)
             
            }
            render(beers)
        })
                .catch((err)=>{
                    console.log(err)
                })
})

//----Search Bar Request----//
                     
    searchBtn.addEventListener('click', ()=>{
        const url1 = `https://api.punkapi.com/v2/beers?foods`
        const url2 = `https://api.openbrewerydb.org/breweries/search?query=dog`

        Promise.all([url1, url2])
             .then(values => Promise.all(values.map(function (value) {
                     return value.json()
                 })))
             .then(finalVals =>{
                 let url1 = finalVals[0];
                let url2 = finalVals[1];
             renderHTML(url1, url2)
             
             })
            
            })
    
        
          