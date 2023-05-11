console.log("hello world!")

/* ========================= SIDEBAR ========================= */

// using session storage instead of local storage so that
// sidebar defaults to normal setting when window is closed

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

// allows sidebar to stay in current state when switching pages 
// so sidebar doesn't keep closing when user is browsing pages
function sidebarState() {
    if (typeof(sessionStorage) !== "undefined") {
        if (sessionStorage.getItem("sidebarState") === "opened") {
            openSidebar();
        }
        else if (sessionStorage.getItem("sidebarState") === "closed") {
            closeSidebar();
        }
    }
}

/* ========================= JOKE ========================= */

function randomJoke() {
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
    jokes.set("What do spanish programmers code in?", "Sí++!");
    jokes.set("Why do programmers like dark mode?", "Because light attracts bugs!");
    jokes.set("What kind of dogs do programmers have?", "Comptuer labs!");
    jokes.set("Why do programmers always mix up Halloween and Christmas?", "Because Oct 31 equals Dec 25!");
    jokes.set("What does a programmer's ghost say?", "Bool!");
    jokes.set("Why are C programmers never invited to parties?", "They have no class!");

    let count = 0;
    let joke;
    let punchline = "<br>";
    document.getElementById("punchline").innerHTML = punchline;

    let prevNum = -1;
    for (let i = 0; i < 25; i++) {
        setTimeout(function() {
            let num = Math.floor(Math.random() * jokes.size);
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
        }, i * 50);
    }
    setTimeout(function() {
        document.getElementById("punchline").innerHTML = punchline;
    }, 5000);
}
// setTimeout() is an asynchronous function

// when window is first loaded
window.onload = function() {
    sidebarState();
    if (window.location.href.indexOf("index.html") > -1 || window.location.href.indexOf("") > -1) {
        randomJoke();
    }
}