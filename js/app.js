
/*-----------------------Cached Element Reference -------*/
//Navivation Bar
const homeBtn = document.getElementById('homeBtn') //home button to return to body
const beerBtn = document.getElementById('beerBtn') //beerpairingbtn triggers random search in "Beer & Pairings" frame and "Recipes" triggered based on pairings (beer & pairings fetch) results
const recipesBtn = document.getElementById('foodRecipesBtn') // generate random recipes (fetched from recipes)
const brewerySearchBtn = document.getElementById('brewerysearchBtn') //generate brewery's close by based on location of user
const searchButton = document.getElementById('searchBtn') //parses information inuptted by the user to fetch from the beer & pairings site or recipes  and displays them in the correct frame
const searchInput = document.getElementById('searchInput') //user type in request and generate information in the beer pairing frame and automatically triggers a recipe || searches for recipes section 

console.log(beerBtn)
console.log(recipesBtn)

//Container Frames

const search = document.querySelectorAll('containerDiv.p')
const foodtrivia = document.querySelector('.foodtriviabtn') //button fetchs food trivia questions from trivia api


/*-------------------------Variables-------------------*/
const txtSearch = []

/*--------------------Event Listener----------------*/
// Beer & Pairings Button
const randomBeerInfo =document.querySelector('container.p')

beerBtn.addEventListener('click', search =>{
    
const getBeerPairings = function (evt){
    evt.preventDefault()

 fetch("https://api.punkapi.com/v2/beers/random")
    .then((response) => response.json())
    .then((data)=> {
        console.log(data)
    const beerItems = () =>{
        const name = data[0].name
        const tagline = data[0].tagline
        const description =data[0].description
        const {ingredients} = data[0] //ingredients is an object and the following are objects within an object
        const malt = ingredients.malt 
        const hops = ingredients.hops
        const food_pairing =data[0].food_pairing
        const brewers_tips = data [0].brewers_tips

        randomBeerInfo.innerHTML= {name, tagline, description, malt, hops, food_pairing, brewers_tips}
        descriptionBP.innerHTML = describe
    }
    })
}
getBeerPairings(search)
})


//         let brewData ={}
//         brewData["detail"]=data.detail
//         txtSearch.push(brewData)
//         console.log(brewData)
//     })
//     .catch ((error) =>{
//         console.log(error)
//     }) 
// })
// //Brewery Search Button

// brewerySearchBtn.addEventListener('click', ()=>{
//     fetch("https://api.openbrewerydb.org/breweries")
//     .then((response) =>{
//         return response.json()
//     })
//     .then((data)=>{
//         let brewData ={}
//         brewData["detail"]=data.detail
//         txtSearch.push(brewData)
//         console.log(brewData)
//     })
//     .catch ((error) =>{
//         console.log(error)
//     }) 
// })


   


// let recipeData = fetch("http://www.recipepuppy.com/api/")
// let pairingsData=fetch(`https://api.punkapi.com/v2/beers`)
// let triviaData = fetch("http://jservice.io/popular/49")
// let allButtons //navigivation buttons 

// const information = []


// //promises beerPairingsBtn recipesBtn


// /*----------------------Event Handlers------------------*/
// //Navigation Bar- Click for all element on the navigaton bar



// /*----------------------Event Listeners ----------------*/
// //Trivia-
// foodtrivia.addEventListener('click', ()=>{
//     fetch(triviaData)
//     .then((response =>{
//         return response.json()
//     })
//     .then((json=>{
//         console.log(json)
//     })
//     .catch(err => console.log('Request Failed', err))


//         let info ={}
//         info["questions"]= data.inform
//         information.push(info)
//         render()
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// })






// brewerySearchBtn.addEventListener('click', ()=>{
//     fetch(breweryData)
//     .then ((response) =>{
//        return response.json()   
//         })
//     .then((data)=>{
//         let info = {}
//         info ["name"] = `Brewery Name: ${data.name}`
//         info ["street"] = data.street
//         info ["city", "state", "postal_code"] = `${data.city}, ${data.state} ${data.postal_code}` 
//         info ["website"] = data.website
//         information.push(info)
//         render()
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// })



// function render(){
//     container.innerHTML= ""
//     information.forEach((inform)=>{
//         appendDiv(info["question"])
//     })
// }

//Use to FETCH APIs
// fetch("https://api.punkapi.com/v2/beers/random")
// .then((response) => response.json())
// .then((data)=> {
//     console.log(data)
//     const name = data[0].name
//     console.log(name)
//     const tagline = data[0].tagline
//     console.log(tagline)
//     const description =data[0].description
//     console.log(description)
//     const {ingredients} = data[0] //ingredients is an object and the following are objects within an object
//     const malt = ingredients.malt 
//     console.log(malt)
//     const hops = ingredients.hops
//     console.log(hops)
//     const food_pairing =data[0].food_pairing
//     console.log(food_pairing)
//     const brewers_tips = data [0].brewers_tips
//     console.log(brewers_tips)
  
// })