let click_icon = document.querySelector("#click_icon"),
    nav_element = document.querySelector('#nav_header'),
    ul_element = document.querySelector("#menu");

click_icon.addEventListener("click", function(event) {
    switch(ul_element.className){
        case "open":
            click_icon.className = "";
            ul_element.className = "";
            console.log("closed");
            break;
        case "":
            click_icon.className = "open_click";
            ul_element.className = "open";
            console.log("open");
            break;
        default:
            click_icon.className = "";
            ul_element.className = "";
            console.log("closed");
    }
    event.preventDefault();
}, false);

document.addEventListener('click', (event) => {
    let isClickInside = nav_element.contains(event.target);
    if (!isClickInside && ul_element.className === "open") {
        ul_element.className = "";
        click_icon.className = "";
    }
});