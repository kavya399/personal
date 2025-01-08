var tablinks = document.getElementsByClassName("tab-links");
var tabcontants = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    
    for(tablinks of tablinks){
        tablinks.classList.remove("active-link");
    }
    for(tabcontents of tabcontents){
        tabcontants.classList.remove("active-tab");
    
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
} 
