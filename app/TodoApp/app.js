var input = document.querySelector('#add');
var btn = document.querySelector('#btn');
var list = document.querySelector('#list');

btn.addEventListener('click', btnClick);
list.addEventListener('click', listClick);

function btnClick() {
    var txt = input.value;

    if (txt == "") {
        alert("You must write something!");
    }
    else {
        li = document.createElement("li");
        li.classList.add("element-group__list__item");
        li.innerHTML = txt;
        list.insertBefore(li, list.childNodes[0]);
        input.value = "";
    }
}

function listClick(e) {
    if (e.target.tagName == "LI") {
        e.target.classList.toggle("checked");
    }
}
