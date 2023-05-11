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

    let count = 0;
    let joke;
    let punchline = "<br>";
    document.getElementById("punchline").innerHTML = punchline;

    let prevNum = -1;
    for (let i = 0; i < 15; i++) {
        setTimeout(function() { // asynchronous function
            let num = Math.floor(Math.random() * jokes.size);
            while (prevNum === num) {
                num = Math.floor(Math.random() * jokes.size);
            }
            jokes.forEach(function(value, key) {
                if (count === num) {
                    joke = key;
                }
                count++;
            });
            document.getElementById("joke").innerHTML = joke;
            count = 0;
            prevNum = num;
        }, i * 50);
    }

    let randomNum = Math.floor(Math.random() * jokes.size);
    jokes.forEach(function(value, key) {
        if (count === randomNum) {
            joke = key;
            punchline = value;
        }
        count++;
    });

    document.getElementById("joke").innerHTML = joke;
    setTimeout(function() {
        document.getElementById("punchline").innerHTML = punchline;
    }, 5000);
}

// when window is first loaded
window.onload = function() {
    randomJoke();
    sidebarState();
}