/*--------------------Variables----------------*/
  let beers= []
  

  /*------------Cached Element References------*/
 //Buttons
  const beerPairBtn = document.getElementById('beerPairBtn') //Beers & Pairings Button
  const brewerySearch = document.getElementById('brewerySearchBtn')//Brewery Button
  const triviaBtn = document.getElementById('triviaBtn')//Trivia Question/Answer Button
  const recipeSearchBtn = document.getElementById('recipeSearchBtn')

  //Search Bars
  const searchByText = document.getElementById('brewSearch') //Brewey Search Bar
  const searchRecipes= document.getElementById('recipeForm')
 
  //Container
  let displayBP= document.getElementById('displayBP') //Beer & Pairings Container
  let displayT = document.getElementById('trivia')//Trivia Container
  let displayR =document.getElementById('displayRecipes')

  let displayBLContainer =document.getElementById("brewerylocator")
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
            const tagline= data[beers].tagline
            const description = data[beers].description
            const image_url = data[beers].image_url
            const ingredients = data[beers].ingredients //ingredients is an object and the following are objects within an object
            const malt = ingredients.malt
            const hops = ingredients.hops
            const food_pairing = data[beers].food_pairing
            const brewers_tips = data[beers].brewers_tips
        
          
           displayBP.innerHTML = `<p><h5 class= "name"> ${name}</h5></p>
                <h4 class= "tagline"> ${tagline} </h4></p>
                <img class= "beerImage" src="${image_url}"/>
                <p class= "beerDes"><h4 class="beerDesTitle"> Beer Description:</h4>${description}</p><p class= "brewT"><h4 class ="brewTips"> Brew Tips:</h4> ${brewers_tips}</p><p class ="foodOptions"><h4 class ="foodOptionsTitle">Food Pairing Options:</h4><h5 class= "food"> ${food_pairing}</h5></p>`   
        }

    })   
        .catch((err)=>{
            console.log(err)
        })
    })


//Trivia Question/Answer Button
triviaBtn.addEventListener('click', ()=>{
    fetch('http://jservice.io/api/random')
    .then (function(response){
        return (response.json())
    })
    .then (data => {
        console.log(data)//change to return
        for(beers in data){  
            const question =data[beers].question
            const answer= data[beers].answer
           
            displayT.innerHTML=`<p class= "question"><h3 class= questionAnswer> Question:</h3></p>
                <p>${question}</p><p class= "question"><h3 class= questionAnswer> Answer:</h3></p><p class= "trivia_answer">${answer}</p>`
            }  
})   
            .catch((err)=>{
                console.log(err)
            })
        })
  
//Brewery Search

brewerySearchBtn.addEventListener('click', (evt)=>{
    evt.preventDefault()
    let txtSearch = searchByText.value

    fetch(`https://api.openbrewerydb.org/breweries/search?query=${txtSearch}`)
        .then (function(response){
            return response.json()
        })
        .then (data => {
            console.log(data)//change to return
            for(beers in data){ 
                 const name = data[beers].name
                 const type = data[beers].brewery_type
                 const street =data[beers].street
                 const city = data[beers].city
                 const state= data[beers].state
                 const zip= data[beers].postal_code
                 const country= data[beers].country
                 const phone= data[beers].phone
                 const website= data[beers].website_url
                 
        
                
                 displayBP.innerHTML =`<p><h4>${name}</h4></p><p>Address: ${street}</p><p>${city}, 
                    ${state} ${zip} ${country}</p><p>Phone: ${phone}</p><p>Website : ${website}</p>`
               
                 
            }
        })
                .catch((error)=>{
                    console.log('Error', error)
                })
})

//Recipe Search

recipeSearchBtn.addEventListener('click', (evt)=>{
    evt.preventDefault()
    let recipeResults = searchRecipes.value
    fetch(`http://taco-randomizer.herokuapp.com/random/?full-taco=${recipeResults}`)
        .then (function(response){
            return response.json()
        })
        .then (data => {
            console.log(data)//change to return
            for(beers in data){ 
                const {base_layer} = data.base_layer
                const name = data.name
                const recipe = data.recipe
                const url =data.url
               
                

                displayR.innerHTML =`<p><h4>${name}</h4></p><p id= "recipeInfo"><h5><ul>${recipe}</ul></h5>
                    </p><p id= "url"><p>For the complete recipe, visit :</p><p> ${url}</p>`        
                    
                }
            })     
                .catch((error)=>{
                    console.error('Error:', error)
                })
})




        
        
        