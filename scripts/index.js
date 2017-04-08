const click_icon = document.querySelector("#click_icon"),
    nav_element = document.querySelector('#nav_header'),
    ul_element = document.querySelector("#menu"),
    open_nav_img = "open_nav_img",
    closed = "",
    close_nav_img = "close_nav_img";

click_icon.addEventListener("click", function(event) {
    switch(ul_element.className){
        case open_nav_img:
            click_icon.className = closed;
            ul_element.className = closed;
            break;
        case "":
            click_icon.className = close_nav_img;
            ul_element.className = open_nav_img;
            break;
        default:
            click_icon.className = closed;
            ul_element.className = closed;
    }
    event.preventDefault();
}, false);

document.addEventListener('click', (event) => {
    let isClickInside = nav_element.contains(event.target);
    if (!isClickInside && ul_element.className === open_nav_img) {
        ul_element.className = "";
        click_icon.className = "";
    }
});

/*class navMenu{
    constructor(click_icon, nav_element, ul_element){
        this.click_icon = click_icon;
        this.nav_element = nav_element;
        this.ul_element = ul_element;

        click_icon.addEventListener("click", function(event){
            switch(ul_element.className){
                case "open":
                    click_icon.className = "";
                    ul_element.className = "";
                    break;
                case "":
                    click_icon.className = "open_click";
                    ul_element.className = "open";
                    break;
                default:
                    click_icon.className = "";
                    ul_element.className = "";
            }
            event.preventDefault();
        },false);
    }
}*/
