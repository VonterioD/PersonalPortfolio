// Project text objects
let ballAvoid = {
    overview: `<p>This is my very first personal project (outside of a classroom) that I created near the end of my freshman year in college. I first started to code because I always liked video games, and the first language I picked up was Java during my high school years. I had my first official coding class in my senior year of high school, and one of my classes in my first semester was Java as well. So, I finally felt like it was time to build something on my own from scratch. I took a simple tutorial on how to move a ball on a screen, and then turned it into my own small game.</p>`,

    details: `<p>The user is a Cyan circle and the goal of the game is to survive as long as they possibly can without getting hit by green circles (balls) on the screen. Since this was my first project, this was not entirely used with vanilla Java, but I decided to use a small library called LibGDX. This made rendering of shapes a bit easier, and other game attributes such as adding music and images. The final score is determined by the length of time the user stays alive, they have only 4 collissions with other balls before the game is over. This can be shown by the health bar. To make things a tad bit difficult, the balls will multiply, scale (bigger and smaller), and change speed at random time intervals. This will keep the user on it's toes. The game is not completely finished, I would still want to add a final score screen for the user to see, and also random pickups so the user can slow down the speed of the balls and/or subtract a certain amount of them from the screen.</p>`,

    takeAway: `<p>This was my first solo personal project ever, so almost everything I did was either a new concept or enhanced my overall understanding of concepts. I would say the biggest learning points was understand Object Oriented Principles in Java, and getting a better understanding of how a game flows (rendering, creating of elements, textures, music, images).</p>`
};

let matrixAlgo = {
    overview: `<p>This was probably the toughest project that I was assigned in college. This was in my junior year Algorithms class, and this group project was to focus on the whole idea of memoization in recursion problems. This is a technique used to speed up programs by storing results of expensive function calls. The purpose of this project was to use C++ and take in information from a text file, with the first two numbers on line one being the row and columns and the rest being the actual matrix, and to get the maximum score and the path obtained to get that.</p>`,

    details: `<p>The scores are calculated by traveling the matrix column by column, until the end is reached. The drawback to keep in mind is that depending on which row you choose in the next column will determine if your score gets a penalty. The first two rows (rOld, rNew) you start is the top row. For example, if you start with row 3 in column 1 of the matrix, there will be a penalty of 4, since 3 is 2 more than max(1, 1). If you then move to row 2 in column 2, there would be no penalty because 2 is between 1 and 3. If you then moved to row 7, there would be a penalty of 8 because 7 is 4 more than the max of 2 and 3. A visual can be shown in the picture. Many people in the class, and my group were stuck for the longest, but after countless hours trying to figure it out at home and even at work and little guidance from the professor, I was able to crack the code. I brought my findings back to my group and then got to work. We ended up having to use a 3D map with the dimensions being the (oldRow, newRow, column).</p> 

    <p>We had to initally store sentinel values (default values) in this map, which were then used for checking later in the algorithm to determine whether or not to proceed algorithm calculation. If the value is not the sentinel the algorithm traces through all the options reursively in order to find each maximum score for each position in the matrix. The base cases are the final column in the matrix, so you cannot calculate the maximum score of a position until the column that comes after it is filled in with its max scores. Once the maximum score is calculated for a position it is stored in the 3D map for easier lookup when that same position is called later to get the best path and score. There is are two final calls in the main file, which will call a function to obtain the max score, and another that will return the path used to obtain that score, and will output both to an output txt file.</p>`,

    takeAway: `<p>The main idea of this project, is learning how to break down a recursion problem effectively and figure out its base cases and then store those answers in a memoized data structure in order to speed up the process when the process is needed again. My contribution was creating the memoized structure, implementing the recursion algorithm to return both the maximum score and final path. Definitely got more experience with maiking dynamic vectors in C++, which required a ton of pointer allocation, and a better grasp on the concept of recursion.</p>`
};

let frisbeeApp = {
    overview: `<p>I took an independent study project class in the summer before my senior year in college. This is an oppurtunity for a student to dive in and learn about or create something in a field that they have not been exposed to in standard courses. I was always a part of the Ultimate Frisbee club during college and there was an app that teams would use to track statistics - Ultianalytics. I always wanted to create a mobile app, and loved the sport of ultimate, so this was the perfect time to dive in and try to recreate that app and get experience at the same time.</p>`,

    details: `<p>The easiest part of Android Studio was creating visual layouts on the screen. The buttons and layouts created are pretty self explanatory, so I believe that any user would be able to guide themselves around the app without a tutorial. On the basic side of things, a user can create any numbers of teams, on each team add any number of players, and once they are ready they can start adding opponent games to a specific team. Once they list out the details of the opponent and score limit, they can then select the players that are going to play the current point. From there they can keep track of statistics such as drops, catches, throwaways, D's, etc. They continue to do this until a point is scored and the process repeats until the the game is over.</p>`,

    takeAway: `<p>This was the first time I ever used Android Studio so it was a huge learning curve. Learning how to link buttons on the screen to the code, and set listener events when things are clicked was the very first thing to understand. From here you need to learn how information is retained or passed from screen to screen. This can be a headache depending on the data being sent, might need to serialize. The hardest thing to grasp, was the database structure SQLLite. I never had experience with databases so this was aggravating at times. From this experience, I got some experience with queries to the database, and updating it based on different events. Some additions I would have to go back and add are updating the app, so when the game is over, the database updates so the user can't go back and play it. Also expanding the database, so for each team all the statistics can be broken down and sorted by game, or individual to each player. Lastly, I would implement a more stylish user interface and make the user interface be completely responsive when device screen sizes change.</p>`
};

let huckIt = {
    overview: `<p>I have been going off and on for about a year (junior - senior year in college) with getting into Web Development. I knew about basic HTML and CSS concepts, but did not dive in deeper than that. Once I got into the groove with my classes in my senior year,  I noticed I had more free time than ever due to everything being online and activities being cancelled due to COVID-19. This is when I started to dive deeper into web development concepts, learning from Udemy courses that I have bought in the past, and watching YouTube tutorials. After finishing the majority of HTML, CSS, and Javascript on Udemy, I finally decided to build my first personal responsive site.</p>`,

    details: `<p>This is a site that uses pure HTML, CSS, and JS (lightbox library is used for image gallery) and is meant to introduce people to the sport of Ultimate Frisbee. If you have not realized, I like the sport a lot. The title Huck It, just comes from a term that is used in the community when they want to throw the frisbee really far. Overall it is a simple structure of a site, the home page is the main splash page where a user can immediately learn more, or scroll down and look at exciting pictures of the sport. There is a fixed transparent like nav bar, and there also text like links at the bottom that can do the same thing. The other pages go over the rules, show videos, and have a place to be contacted (like to mention the contact page has form validation to check all the fields). Most importantly the site is responsive, so if a user wants to be on a mobile device, the screen with still look appealing to the eyes.</p>`,

    takeAway: `<p>I got to really jump in and learn how to tackle different appearence problems on my own. Following tutorials and courses, everything is supposed to work with little issue. So, doing this stretched my mind to solve any mishaps that were to come up. The most important lesson I learned was how to make the page responsive. This site specifically I used only flexbox to align my divs and sections the way I wanted, I now feel very comfortable with it now. Like I mentioned earlier, I do have that final contact page, but it currently does not do anything more than erase the data when submit is clicked. When I get more experienced with the server-side of development I plan to come back and make that page fully functional. I have basic Php fundamental knowledge, but not enough to implement this part of the site. I have Express/Node, and MongoDB Udemy courses on standby that I plan to get into soon.</p>`
};

let weddingSite = {
    overview: `<p>This is my second personal website, made about a week after my first one. This is a website centered around the marriage between my fiance' and I. So yes, this is us and all pictures belong to me, but shot by our photgrapher. We already had a website made using Wedding Wire's tools (Link to that one here). However, I decided to recreate it and get some more practice on my own. This site, like my last, uses pure HTML, CSS, and JS. The only external libraries used are Font-Awesome for some icons, and Lightbox for the image gallery.</p>`,

    details: `<p>Like mentioned above, this a wedding website. So this goes into detail of how my fiance' and I became to be, with great photos to accompany all the text. The concept of the site came from the original Wedding Wire site, but I changed some details that can be noticable when looking at them side by side. I might be biased but I like my version a bit more, seems more vibrant and eye-catching. Of course, the site is fully responsive. I used mainly flexbox for alignment, except for the image gallery I got more experience with grid display. The home and photos page are the main attractions of the site, but there is also the event so everyone can be updated of what is going on, accomoadations for our guests, and links to the different retailers that we are registered at.</p>`,

    takeAway: `<p>I feel very comfortable with going about ways to align items on the page exactly how I want them to be. Dealing with the grid was different but definitely useful, I plan to use that more in sites for the general structure or again with photos. The most tedious part was creating the hamburger menu and sidebar. The browser was being difficult, and not hiding the element, or not showing the element on command. Once I had the nav bars and footer created, that was my general structure for all my pages. Then it was copy and paste, and change the main content area. If there is one thing I would change, is that I would make a separate utilities stylesheet. I notieced I kept copying and pasting styles to each individual page's css file. This way I could make my own psuedo-framework in a sense and it would be more practical. Then each css file would have their own styles pertaining to that specific page. </p>`
};

const overViewBtns = document.querySelectorAll(".overview");
const detailBtns = document.querySelectorAll(".details");
const takeAwayBtns = document.querySelectorAll(".take-away");

const aboutLink =  document.getElementById("about-link");
const projectLink =  document.getElementById("project-link");
const resumeLink =  document.getElementById("resume-link");
const contactLink =  document.getElementById("contact-link");

const aboutSection = document.getElementById("about-me");
const projectSection = document.getElementById("projects");
const resumeSection = document.getElementById("resume");
const contactSection = document.getElementById("contact");

const navBar = document.getElementById("navbar");
const navExtender = document.getElementById("extend-nav");
const workBtn = document.getElementById("see-work");

//Scroll event for navbar opacity
document.addEventListener("scroll", () => {
    if (window.scrollY < 675){
        navBar.style.opacity = 1;
        return;
    }

    else {
        navBar.style.opacity = .9;
    }
});

//Window event for sudden screen change
window.addEventListener("resize", () => {
    if (screen.width <= 768){
        navBar.classList.add("minimize");
        return;
    } 
    
    else {
        navBar.classList.remove("minimize");
    }
})

//Extend Nav Event - SLIGHT BUG NEED TO FIX DELAYED A TICK
navExtender.addEventListener("click", (extender) => {

    //toggle extended
    extender.target.classList.toggle("extended");

    //If extender is facing down/ has extended class then extend the nav. Else keep it mini
    if (extender.target.classList.contains("extended")){
        navBar.classList.add("minimize");
    }

    else {
        navBar.classList.remove("minimize");
    }
    
});

//Project button listeners
overViewBtns.forEach((button) => {

    //Add click event to all overview buttons
    button.addEventListener("click", (e) => {
        
        //Get parent element's children
        let objectHolder = e.target.parentElement.parentElement.children

        //Convert to array for iteration
        let projectObject = Array.from(objectHolder);

        //Get the project name
        let projectName = e.target.parentElement.parentElement.id;

        //Div that holds the project text
        let textDiv;

        //Search through the elements of the project object to get the text div
        //When found assign to var
        for (child of projectObject){
            if (child.classList.contains("project-text")){
                textDiv = child;
                break;
            }
        }

        //Figure out what project name button was clicked under, and fill div with appropiate text
        switch (projectName){
            case "ball-avoid":
                textDiv.innerHTML = ballAvoid.overview;
                break;
            case "matrix-algo":
                textDiv.innerHTML = matrixAlgo.overview;
                break;
            case "frisbee-app":
                textDiv.innerHTML = frisbeeApp.overview;
                break;
            case "huck-it":
                textDiv.innerHTML = huckIt.overview;
                break;
            case "wedding-site":
                textDiv.innerHTML = weddingSite.overview;
                break;
        }
    });
});

detailBtns.forEach((button) => {

    //Add click event to all detail buttons
    button.addEventListener("click", (e) => {
        
        //Get parent element's children
        let objectHolder = e.target.parentElement.parentElement.children

        //Convert to array for iteration
        let projectObject = Array.from(objectHolder);

        //Get the project name
        let projectName = e.target.parentElement.parentElement.id;

        //Div that holds the project text
        let textDiv;

        //Search through the elements of the project object to get the text div
        //When found assign to var
        for (child of projectObject){
            if (child.classList.contains("project-text")){
                textDiv = child;
                break;
            }
        }

        //Figure out what project name button was clicked under, and fill div with appropiate text
        switch (projectName){
            case "ball-avoid":
                textDiv.innerHTML = ballAvoid.details;
                break;
            case "matrix-algo":
                textDiv.innerHTML = matrixAlgo.details;
                break;
            case "frisbee-app":
                textDiv.innerHTML = frisbeeApp.details;
                break;
            case "huck-it":
                textDiv.innerHTML = huckIt.details;
                break;
            case "wedding-site":
                textDiv.innerHTML = weddingSite.details;
                break;
        }
    });
});

takeAwayBtns.forEach((button) => {

    //Add click event to all Take Away buttons
    button.addEventListener("click", (e) => {
        
        //Get parent element's children
        let objectHolder = e.target.parentElement.parentElement.children

        //Convert to array for iteration
        let projectObject = Array.from(objectHolder);

        //Get the project name
        let projectName = e.target.parentElement.parentElement.id;

        //Div that holds the project text
        let textDiv;

        //Search through the elements of the project object to get the text div
        //When found assign to var
        for (child of projectObject){
            if (child.classList.contains("project-text")){
                textDiv = child;
                break;
            }
        }

        //Figure out what project name button was clicked under, and fill div with appropiate text
        switch (projectName){
            case "ball-avoid":
                textDiv.innerHTML = ballAvoid.takeAway;
                break;
            case "matrix-algo":
                textDiv.innerHTML = matrixAlgo.takeAway;
                break;
            case "frisbee-app":
                textDiv.innerHTML = frisbeeApp.takeAway;
                break;
            case "huck-it":
                textDiv.innerHTML = huckIt.takeAway;
                break;
            case "wedding-site":
                textDiv.innerHTML = weddingSite.takeAway;
                break;
        }
    });
});


//Nav Link Listeners - Smooth Section Scrolling
aboutLink.addEventListener("click", (e) => {
    e.preventDefault();

    aboutSection.scrollIntoView({behavior:"smooth", block:"start", inline:"start"});
});

projectLink.addEventListener("click", (e) => {
    e.preventDefault();

    projectSection.scrollIntoView({behavior:"smooth", block:"start", inline:"start"});
});

resumeLink.addEventListener("click", (e) => {
    e.preventDefault();

    resumeSection.scrollIntoView({behavior:"smooth", block:"start", inline:"start"});
});

contactLink.addEventListener("click", (e) => {
    e.preventDefault();

    contactSection.scrollIntoView({behavior:"smooth", block:"start", inline:"start"});
});

// Smooth scroll for see work button
workBtn.addEventListener("click", (e) => {
    e.preventDefault();

    projectSection.scrollIntoView({behavior:"smooth", block:"start", inline:"start"});
})