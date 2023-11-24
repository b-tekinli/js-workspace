var ball = document.querySelector("#ball");
var leftSide = true;

ball.addEventListener('click', changeTheme);

function changeTheme() {
    if(leftSide) {
        ball.style.left = "40px";
        ball.style.backgroundColor = "#111111";
        leftSide = false;
        document.querySelector(".mode").style.backgroundColor = "#ffffff";
        document.querySelector("body").style.backgroundColor = "#111111";
    }
    else {
        ball.style.left = "5px";
        ball.style.backgroundColor = "#ffffff";
        leftSide = true;
        document.querySelector(".mode").style.backgroundColor = "#111111";
        document.querySelector("body").style.backgroundColor = "#ffffff";
    }
}
