# beers-and-bites

This project is designed for craft beer and cider enthusiasts! Offering beermaker recipes along with food pairing options for each dish. Also, includes a Breweries, Cideries, and Craft Beer Bottle Shop locator for tasters and brew makers.

__App Overview__

To search for breweries, user will input either name, address, city or zip code into the search bar located at the top of the page, when not collapsed. 

Clicking on the "Beers and Pairings" button will generate a random beer as well as provide the beer's tagline, image, beer description, brew tips, and various food pairing options.

The recipe search will generate a recipe based on user search request and submitting said request using the "Recipe Search" button.

Finally, a random joke is generated when user submits a request using the "Trivia" button.

__DEMO__

For demo, visit http://beers_and_bites.surge.sh/  

__APIs__

Punk API - https://api.punkapi.com/v2/beers/random 

jService- http://jservice.io/api/random 

Open Brewery DB- https://api.openbrewerydb.org/

TacoFancy- http://taco-randomizer.herokuapp.com/

__HTML Setup and Layout__
1. HTML Boilerplate
2. Header
   - [x ] Incorporated Google Text Font into site. Link to Google Text Fonts [fonts.google.com] (https://fonts.google.com/specimen/Montserrat+Subrayada?query=monts), (https://fonts.google.com/specimen/Architects+Daughter?query=architect) (https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap) (https://fonts.googleapis.com/css2?family=Montserrat+Alternates&display=swap)(https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap)
   -  [ x] Embedded video (https://s3-us-west-2.amazonaws.com/converterpoint-22/encodings/b70f2f576411f990130ec944c67306bb.mp4) with a poster image (https://i.imgur.com/WYYD4yL.png)- both retrieved from Canva 
   - [x ] Incorporate CSS and Script lines
   - [ x] Title: "Beers & Bites", add beer and hamburger emojis to title
3. Body
   - [ x] Div id = "container"
        * Set div tag with id="container" 
        * Set 4 div tags inside of "frames" for each frame
        * Set the header of each frame to h2
   - [x ] Div id = "nav" 
        * Set div tag with id ="nav"
        * Set 1 button tags inside of "nav" for each button on the navigation bar
        * Search 
   - [ x] Link to Bootstrap- navigation bar 

__JavaScript Setup and Layout__
1. Variables
   - [x ] beerFood
2. Cached Element Reference
   - [ x] Establish cached element reference
        * Each of the 4 buttons
        * Container
        * Navigation Bar
3. Event Listeners
    - [x ] Establish event listeners
        * Each of the 4 buttons
        * Each of the 4 containers
        * Navigation Bar
        * Search in navigation (Brewery Search) and the recipe search
4. Functions
   - [ x] Create functions to fetch requested APIs
   - [ x] Render function results on screen in the desired areas

__CSS Setup and Layout__
Objective- Design a app that is clean yet functional.
1. Body
   - [ x ] Setup a flex display
   - [ x ] Set background color gradient to top- resemble a beer
   - [ x ] Center body 
2.  Header
    - [ x ] Set text to Montserrat Subrayada
    - [ x ] Set font to #a63c06
    - [ x ] Set text size 50px
    - [ x ] Add image under the title
3. Nav Bar /Footer
   - [ x] Set background color to #EEBA0B
   - [ x] Set font color to #710000
   - [ x] Set text to Architect's Daughter
   - [ x] Shadow box
4. Buttons : Hover
   - [x ] Set color to black 
5. Container
   - [ x] Setup grid
   - [x ] Setup text to Architect's Daughter
6. Container - H2
   - [ x] Set H2 text to Montserrat Subrayada


__Wireframe__

![Wireframe](https://i.imgur.com/Z7a2scE.png)



__Final__


![DemoImage](https://i.imgur.com/NL9Q8Ve.png)

![DemoImage](https://i.imgur.com/tZfTp7L.png)