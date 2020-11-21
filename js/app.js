/*-------------Variables----------------*/
  var beers= []

  /*------------Cached Element References------*/
 //Buttons
  const beerPairBtn = document.getElementById('beerPairBtn') //Beers & Pairings Button
  const brewerySearch = document.getElementById('brewerySearchBtn')//Brewery Button
  const triviaBtn = document.getElementById('triviaQuestionBtn')//Trivia Question Button
  const triviaAnswerBtn = document.getElementById('triviaAnswerBtn')

  //Search Bars
  const searchByText = document.getElementById('pairings') //Brewey Search Bar
 
  //Container
  let displayBP= document.getElementById('displayBP') //Beer & Pairings Container
  let displayBL= document.getElementById('beerLocator') //Brewery Locator Container
  let displayT = document.getElementById('trivia')//Trivia Container

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
          
           displayBP.innerHTML = `<p><h5 class= "name"> ${name}</h5></p>
           <h4 class= "tagline"> ${tagline} </h4></p>
           <img class= "beerImage" src="${image_url}"/>
           <p class= "beerDes"><h4 class="beerDesTitle"> Beer Description:</h4>${description}</p>
           <p class= "brewT"><h4 class ="brewTips"> Brew Tips:</h4> ${brewers_tips}</p>
           <p class ="foodOptions"><h4 class ="foodOptionsTitle">Food Pairing Options:</h4><h5 class= "food"> ${food_pairing}</h5></p>`   
        }

    })   
        .catch((err)=>{
            console.log(err)
        })
    })

//Trivia Question Button
triviaBtn.addEventListener('click', ()=>{
    fetch('http://jservice.io/api/clues?category=430')
    .then (function(response){
        return (response.json())
    })
    .then (data => {
        console.log(data)//change to return
        for(beers in data){ 
             const question = data[0].question
             console.log(question)
              
               displayT.innerHTML = `<p><h3> ${question}</h3></p>`
            }  
})   
            .catch((err)=>{
                console.log(err)
            })
        })

//Trivia Answer Button
        triviaAnswerBtn.addEventListener('click', ()=>{
            fetch('http://jservice.io/api/clues?category=430')
            .then (function(response){
                return (response.json())
            })
            .then (data => {
                console.log(data)//change to return
                for(beers in data){ 
                    const answer = data[0].answer
                    console.log(answer)
                 
                     displayT.innerHTML=`<p class= "answer"> ${answer}</p>` 
                    
                    }  
        })   
                    .catch((err)=>{
                        console.log(err)
                    })
                })

            
  
//Brewery Search

brewerySearchBtn.addEventListener('click', ()=>{
    let txtSearch = searchByText.value

    fetch(`https://api.openbrewerydb.org/breweries/search?query=${txtSearch}`)
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
             
                
                displayBL.innerHTML =`<p><h4>${name}</h4></p><p>Address: ${street}</p><p>${city}, ${state} ${zip} ${country}</p><p>Phone: ${phone}</p><p>Website : ${website}</p>`
                
                 
            }
        })
                .catch((err)=>{
                    console.log(err)
                })
})



        
        
        
        