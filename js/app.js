/*-------------Variables----------------*/
  const beer= []
  let str = ""

  /*------------Cached Element References------*/
 //Buttons
  const beerPairBtn = document.getElementById('beerPairBtn')
  const brewerySearch = document.getElementById('brewerysearchBtn')
  //Areas
  const breweryLocatorInfo=document.getElementById('brewerylocator')
  

//Beer & Pairings
    fetch("https://api.punkapi.com/v2/beers/random")
    .then (function(response){
        console.log (response.json())
    })
    .then (data => {
        console.log(data)//change to return
        for(beerFood in data){
            const beerPairings= new Array(data[beerFood].name, data[beerFood].tagline, data[beerFood].description, data[beerFood].ingredients, data[beerFood].food_pairing, data[beerFood].brewers_tips)
            showMeBeer(beerPairings)
        }
        beerPairings.innerHTML= str
     })


//Brewery Search
    fetch("https://api.openbrewerydb.org/breweries/search?query=dog")
    .then (function(response){
        console.log (response.json())
    })
    .then (data => {
        console.log(data) // change to return
       for(beer in data){
           const beerLocator= new Array(data[beer].name, data[beer].brewery_type,data[data].street, data[beer].city,data[beer].state, data[beer].postal.code, data[beer].country, data[beer].phone,data[beer].website_url)
           showMeBeer(beerLocator)
       }
       breweryLocatorInfo.innerHTML= str
    })

    function showMeBeer(beer){
        console.log(beer)
    }












   
