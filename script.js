console.log("hello world!")

/* ========================= SIDEBAR ========================= */

function openSidebar() {
    document.getElementById("sidebar").style.display = "block";
    document.getElementById("sidebar-arrow-left").style.display = "block";
    document.getElementById("sidebar-arrow-right").style.display = "none";
    if (typeof(localStorage) !== "undefined") {
        localStorage.setItem("sidebarStatus", "opened");
    }
}

function closeSidebar() {
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("sidebar-arrow-left").style.display = "none";
    document.getElementById("sidebar-arrow-right").style.display = "block";
    if (typeof(localStorage) !== "undefined") {
        localStorage.setItem("sidebarStatus", "closed");
    }
}

function sidebarState() {
    if (typeof(localStorage) !== "undefined") {
        if (localStorage.getItem("sidebarStatus") === "opened") {
            openSidebar();
        }
        else if (localStorage.getItem("sidebarStatus") === "closed") {
            closeSidebar();
        }
    }
}

window.onload = function() {
    sidebarState();
}