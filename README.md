# Interactive News Globe (ING)
Interactive News Globe (ING) is a web application that provides users with access to news content based on countries, allowing them to explore top news stories from around the world through an interactive visual globe. ING promotes discovery and understanding by enabling users to interact with news in innovative ways, gaining insights from both geographical and geopolitical perspectives. Most of the news content will be based on top news from the NewsAPI. It allows users to gain more information from the geological location and geopolitical location view too. It also allows users to interact with news from a different perspective by having users interact with the globe in ways that promote discoveries on part of the planet we are not familiar with.

![Screenshot 2024-04-23 213825](https://github.com/cis3296s24/prj--04-interactive-news-globe/assets/143616140/554ad1ed-0abd-4b30-a3c5-53098716f8d9)

## Table of Contents
- [How to Run](#how-to-run)
- [How to Contribute](#how-to-contribute)
- [Special Thanks to](#special-thanks-to)
- [API/Software Used](#apisoftware-used)


# How to run
Clone this project, make sure that you run the latest version of npm.
When done cloning the project, run this command:
```
npm install  
```
This allows to install the packages needed (Craco, Resium, Cesium) Then cd into server and run
```
node server.js
```
Finally, in a separate terminal npm start to run the project
```
npm start  
```

When you're ready to publish changes to GitHub Pages, run:
```
npm run deploy 
```
To see the current deployment of the project, click [Here](https://cis3296s24.github.io/prj--04-interactive-news-globe/).

# How to contribute
## Step 1
Fork the repository.
## Step 2
Create a new branch in this format:
(name)-(feature)-(version(optional))
When a new branch is created, work on the feature you will work on.
## Step 3
For every small logic that works make sure to add and commit. You can commit without pushing, you push to the remote repository until you think you are completely done with the project and is available for review.
## Step 4
Have at least two people review the code by making a pull request. When two contributors have approved, the code should be able to push to the main. Assign one contributor as a moderator, and one as a key inspector, this will be explained later.
Reco:
Have one reviewer be the moderator (mod), this is the role that not just reviews but makes sure that everything is in order of how the reviewing process should work. This means that the mod makes sure that the key inspector  has reviewed and run the code to make sure it works as it should. The key inspector not only reviews the code, but has to manually go to the contributor's branch, run the code, and make sure it works as the contributor that did the pull request intended to work. The rest can just look at the code and see if there could be improvements in the code.

# Special Thanks to
Aidan
Jared
Seth
Declan

# API/Software Used
- React.JS
- CesiumJS
- Resium
- NewsAPI
