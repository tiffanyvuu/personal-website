console.log("hello world!")

/* ========================= SIDEBAR ========================= */

// using session storage instead of local storage so that sidebar defaults to normal setting when window is closed

function openSidebar() {
    document.getElementById("sidebar").style.display = "block";
    document.getElementById("sidebar-arrow-left").style.display = "block";
    document.getElementById("sidebar-arrow-right").style.display = "none";
    // saves current state of sidebar
    if (typeof(sessionStorage) !== "undefined") {
        sessionStorage.setItem("sidebarState", "opened");
    }
}

function closeSidebar() {
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("sidebar-arrow-left").style.display = "none";
    document.getElementById("sidebar-arrow-right").style.display = "block";
    // saves current state of sidebar
    if (typeof(sessionStorage) !== "undefined") {
        sessionStorage.setItem("sidebarState", "closed");
    }
}

function expand(id) {
    // document.getElementById("element").style.display === "block" will not work since property was declared in stylesheet and not inline html
    // must use window.getComputedStyle(elements[0]).getPropertyValue("display") === "none"

    if (id === "experience-expand") {
        let elements = document.getElementsByClassName("experience-sublink"); // getElementsByClassName returns an array-like object
        if (sessionStorage.getItem("experienceState") === "closed") {
            for (let i = 0; i < elements.length; i++) {
                elements[i].style.display = "block";
            }
            if (typeof(sessionStorage) !== "undefined") {
                sessionStorage.setItem("experienceState", "opened");
            }
        }
        else if (sessionStorage.getItem("experienceState") === "opened") {
            for (let i = 0; i < elements.length; i++) {
                elements[i].style.display = "none";
            }
            if (typeof(sessionStorage) !== "undefined") {
                sessionStorage.setItem("experienceState", "closed");
            }
        }
    }
    else if (id === "projects-expand") {
        let elements = document.getElementsByClassName("projects-sublink"); // getElementsByClassName returns an array-like object
        if (sessionStorage.getItem("projectsState") === "closed") {
            for (let i = 0; i < elements.length; i++) {
                elements[i].style.display = "block";
            }
            if (typeof(sessionStorage) !== "undefined") {
                sessionStorage.setItem("projectsState", "opened");
            }
        }
        else if (sessionStorage.getItem("projectsState") === "opened") {
            for (let i = 0; i < elements.length; i++) {
                elements[i].style.display = "none";
            }
            if (typeof(sessionStorage) !== "undefined") {
                sessionStorage.setItem("projectsState", "closed");
            }
        }
    }
}

// allows sidebar to stay in current state when switching pages so sidebar doesn't keep closing when user is browsing pages
function sidebarState() {
    if (typeof(sessionStorage) !== "undefined") {
        if (sessionStorage.getItem("sidebarState") === "opened") {
            openSidebar();
        }
        else if (sessionStorage.getItem("sidebarState") === "closed") {
            closeSidebar();
        }

        if (sessionStorage.getItem("experienceState") === null) {
            sessionStorage.setItem("experienceState", "closed");
        }
        if (sessionStorage.getItem("projectsState") === null) {
            sessionStorage.setItem("projectsState", "closed");
        }

        // expand state
        let elementsExperience = document.getElementsByClassName("experience-sublink");
        if (sessionStorage.getItem("experienceState") === "closed") {
            for (let i = 0; i < elementsExperience.length; i++) {
                elementsExperience[i].style.display = "none";
            }
        }
        else if (sessionStorage.getItem("experienceState") === "opened") {
            for (let i = 0; i < elementsExperience.length; i++) {
                elementsExperience[i].style.display = "block";
            }
        }
        let elementsProjects = document.getElementsByClassName("projects-sublink");
        if (sessionStorage.getItem("projectsState") === "closed") {
            for (let i = 0; i < elementsProjects.length; i++) {
                elementsProjects[i].style.display = "none";
            }
        }
        else if (sessionStorage.getItem("projectsState") === "opened") {
            for (let i = 0; i < elementsProjects.length; i++) {
                elementsProjects[i].style.display = "block";
            }
        }
    }
}

/* ========================= JOKE ========================= */

function randomJoke() {
    // disables button when joke is generating
    let jokeButton = document.getElementById("joke-button");
    jokeButton.style.pointerEvents = "none";

    let jokes = new Map();
    jokes.set("Why are spiders such good computer programmers?", "They know all about the web!");
    jokes.set("What do computers like to eat?", "Chips!");
    jokes.set("Why did the computer get glasses?", "To improve its web sight!");
    jokes.set("Why did the computer cross the road?", "To grab a byte to eat!");
    jokes.set("How do trees get on computers?", "They just log in!");
    jokes.set("Why couldn't the computer take its hat off?", "It has its CAPS LOCK on!");
    jokes.set("Why do app developmers have such high insurance rates?", "They're always crashing!");
    jokes.set("Where did the software developer go?", "He probably ransomware!");
    jokes.set("How does a computer get drunk?", "It takes screenshots!");
    jokes.set("Why was the computer late?", "It had a hard drive!");
    jokes.set("Why did the computer catch a cold?", "It left its Windows open!");
    jokes.set("Why is a computer so smart?", "It listens to its motherboard!");
    jokes.set("Why did the comptuer keep sneezing?", "It had a virus!");
    jokes.set("How do data march?", "In formation!");
    jokes.set("How did the surfer break his computer?", "He tried to surf the web!");
    jokes.set("Why do programmers always run into walls?", "Because they can't C#!");
    jokes.set("What do spanish programmers code in?", "Si++!");
    jokes.set("Why do programmers like dark mode?", "Because light attracts bugs!");
    jokes.set("What kind of dogs do programmers have?", "Comptuer labs!");
    jokes.set("Why do programmers always mix up Halloween and Christmas?", "Because Oct 31 equals Dec 25!");
    jokes.set("What does a programmer's ghost say?", "Bool!");
    jokes.set("Why are C programmers never invited to parties?", "They have no class!");
    jokes.set("What is it called when a programmer vomits at IHOP?", "A Stack Overflow!");
    jokes.set("What do programmers usually wear?", "Whatever is in the dress code!");
    jokes.set("What did Peter Parker major in college?", "Web design!");
    jokes.set("What do you call a group of programmers?", "An assembly!");
    jokes.set("What is it called when two programmers insult each other online?", "Cyber boolean!");
    jokes.set("Why did the programmer quit his job?", "Because he didn't get arrays!");

    if (typeof(sessionStorage) !== "undefined") {
        if (sessionStorage.getItem("initial") === null) {
            sessionStorage.setItem("initial", "true");
        }
        if (sessionStorage.getItem("initial") === "false") {
            let secretJoke = Math.floor(Math.random() * 100);
            if (secretJoke === 0) {
                window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
                return;
            }
        }
        sessionStorage.setItem("initial", "false");
    }

    let count = 0;
    let joke;
    let punchline = "<br>";
    document.getElementById("punchline").innerHTML = punchline;

    let prevNum = -1;
    for (let i = 0; i < 25; i++) {
        setTimeout(function() {
            let num = Math.floor(Math.random() * jokes.size);
            // must be different joke
            while (prevNum === num) {
                num = Math.floor(Math.random() * jokes.size);
            }
            jokes.forEach(function(value, key) {
                if (count === num) {
                    joke = key;
                    punchline = value;
                }
                count++;
            });
            document.getElementById("joke").innerHTML = joke;
            count = 0;
            prevNum = num;
        }, i * 50); // setTimeout() is asynchronous function, so must be multiplied by i
    }
    setTimeout(function() { 
        document.getElementById("punchline").innerHTML = punchline;
        jokeButton.style.pointerEvents = "auto";
    }, 5000);
}

// window.onload = function() {
//     sidebarState();
//     const currentURL = window.location.href;
//     if (currentURL === "https://tiffanyvuu.github.io/personal-website" || currentURL === "https://tiffanyvuu.github.io/personal-website/index.html") {
//         randomJoke();
//     }
// }

window.onload = function() {
    sidebarState();
    // only runs on home page
    if (window.location.href.indexOf("index.html") > -1) {
        randomJoke();
    }
}