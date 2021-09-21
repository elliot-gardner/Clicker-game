# Portfolio Project - Clicky Game
## Purpose

A tap the screen as many times as you can within a specified period of time game.

This Website was created for the purpose of having fun when there is an idle moment available. It was built using the knowledge gained from the HTML, CSS, User Centric Design, JavaScript Fundamentals and Interactive Frontend Development modules. A full list of technologies used can be found in the technologies section of this document.

The live website can be found [here](https://elliot-gardner.github.io/Clicker-game/index.html)

## Clicker Game Responsive Website
![Screenshot 2021-09-21 at 09 02 22](https://user-images.githubusercontent.com/81585599/134153435-635dfad7-0062-4d63-a572-39ce908c5537.png)


The game has very few style elements implemented and so it is very responsive.

*** 
## User Experience (UX)
### User stories

As a user, I want to easily understand the main purpose of the site.
As a user, I want to the game to be self explanatory
As a user, I want to be able to start a game when I am ready.
As a user, I want to know how many points I scored.
As a user, I want to see my scores increase as I interact with the game.
As a user, I want a way to start a new game when the current game has ended.

#### Wireframes
Wireframes created using figma  are uploaded to the assets folder - [View](https://github.com/elliot-gardner/Clicker-game/tree/main/wireframes)

### Design
The design is very basic, with a focus on playability rather than complicated graphics. Typography is the standard Helvetica/Arial depending on the user’s operating system. 

##### Return to [top]

## Features
The game is functional, tracking clicks within the window and counting them.

### Future features
Future features I hope to implement are:

Until this point, I have not been able to implement the look of the project shown in the wireframes, I would like to deliver this, especially only allowing the user to submit a score along with a name.

Saving to server rather than local storage, allowing other users to compete against each other. 

I would also like to implement a gradient in the background that changes slightly with each tap/click on the screen.

##### Return to [top]

## Technologies
### Languages used
* HTML5
	* This project uses HTML5 as the main language for content and structure of the Website.
* CSS3/Bootstrap
	* This project uses CSS3 through Bootsrap for button styling
* Javascript
	* Javascript makes the game work, the whole game is programmed using Javascript.

### Frameworks, Libraries & Programs used
* [GitHub](https://github.com/)
	* GitHub is the hosting site used to store the source code for the Website and [Git Pages](https://pages.github.com/) is used for the deployment of the live site.
* [GitPod](https://gitpod.io/)
	* GitPod is used as version control software to commit and push code to the GitHub repository where the source code is stored.
* [Google Chrome Developer Tools](https://developers.google.com/web/tools/chrome-devtools)
	* Google chrome developer tools are used to inspect page elements and help debug issues with the javascript functionality.
* [Am I Responsive?](http://ami.responsivedesign.is/)
	* Used to generate the screenshots for responsive design.
* [Figma](https://www.figma.com/)
	* Figma is a wireframe creation application that is used to create the wireframes to aim for.
	
##### Return to [top]

## Testing

### Validation
The W3C Markup Validator and JSHint will be used to validate the code. 
-   [W3C Markup Validator](https://validator.w3.org/nu/#textarea) 
-   [JSHint](https://jshint.com/)

#### Fixed warnings and errors
JSHint gave warnings about missing semicolons which I fixed. It also stated that some of my variables were being defined in line with ES6, as ES6 has been released since 2015, I am not too concerned with browser compatibility.

W3C Markup Validator warned me that I was redundantly using ’type=“text/javascript” when using the script tag. I therefore fixed this.
The validator also flagged that I had a stray closing tag for my form, which I removed.

I did not use the CSS validator tool as I did not create any custom CSS for this application, I relied only on the button styles from Bootstrap.

### User stories testing
I have shared this game with a number of my friends using a variety of different devices, they report that it works. They are able to save their scores and access the leaderboard to see the saved scores after navigating away from the page.

### Further Testing 	
I tested the game extensively through the development process. Actually, if you open the console while playing it, you will see the console.log messages that I left in to check whether the functions/actions were being recognised.				

##### Return to [top]

## Deployment
### GitHub Pages

The project was deployed to GitHub Pages through the below steps:

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/elliot-gardner/Clicker-game)
2. Click the "Setting" button "Settings" Button.
3. In the left menu, scroll down to "Pages".
4. Under "Source", click the dropdown and select "Branch: master", then click "Save".
5. Once deployed, the now published site [link](https://elliot-gardner.github.io/Clicker-game/) is found in the "Pages" section.

##### Return to [top]

## Credits

### Code
In order to get the save score functionality working, I relied on a tutorial by James Q Quick Called - 
Build a Quiz App (8) - Save High Scores in Local Storage
##### Return to [top]


