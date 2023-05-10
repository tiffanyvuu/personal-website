console.log("hello world!")

/* ========================= SIDEBAR ========================= */

function openSidebar() {
    document.getElementById("sidebar").style.display = "block";
    document.getElementById("sidebar-arrow-left").style.display = "block";
    document.getElementById("sidebar-arrow-right").style.display = "none";
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("sidebar", "opened");
    }
}

function closeSidebar() {
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("sidebar-arrow-left").style.display = "none";
    document.getElementById("sidebar-arrow-right").style.display = "block";
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("sidebar", "closed");
    }
}

function sidebarState() {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.getItem("sidebar") === "opened") {
            openSidebar();
        }
        else {
            closeSidebar();
        }
    }
}

window.onload = function() {
    sidebarState();
}