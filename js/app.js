// document.addEventListener('DOMContentLoaded', ()=>{
  /*-------------Variables----------------*/
  const beer= []
  let str = "Too many request. Please try again later"

  /*------------Cached Element References------*/
  const beerPairBtn = document.getElementById('beerPairBtn')
  const brewerySearch = document.getElementById('brewerysearchBtn')
  

//Beer & Pairings
    fetch("https://api.punkapi.com/v2/beers/random")
    .then((response)=>console.log(response.json()))


//Brewery Search
    fetch("https://api.openbrewerydb.org/breweries/search?query=dog")
    .then ((response)=> console.log(response.json()))












    // beerBtn.addEventListener('click', ()=> {
    //     fetch("https://api.punkapi.com/v2/beers/random")
    //        .then((response) => {
    //            console.log(response.json())
    //            return response.json.text
    //        })
    //        .then((data =>{
    //            console.log(data.json())
    //            document.getElementById('beerpairings')
    //        }
       
           // let beerItems = () => {
           //     const name = data[0].name
           //     const tagline = data[0].tagline
           //     const description = data[0].description
           //     const { ingredients } = data[0] //ingredients is an object and the following are objects within an object
           //     const malt = ingredients.malt
           //     const hops = ingredients.hops
           //     const food_pairing = data[0].food_pairing
           //     const brewers_tips = data[0].brewers_tips
               
           //     randomBeerInfo.innerHTML=parseInt[name, tagline, description, malt, hops, food_pairing, brewers_tips]}

//     }

// }