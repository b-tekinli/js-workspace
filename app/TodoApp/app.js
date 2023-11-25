var input = document.querySelector('#add');
var btn = document.querySelector('#btn');
var list = document.querySelector('#list');
var del = document.querySelectorAll('.delete');

btn.addEventListener('click', btnClick);
list.addEventListener('click', listClick);

del.forEach(function(button) {
    button.addEventListener('click', function() {
        var listItem = this.parentNode;
        listItem.parentNode.removeChild(listItem);
    });
});

function btnClick() {
    var txt = input.value;

    if (txt == "") {
        alert("You must write something!");
    }
    else {
        li = document.createElement("li");
        li.classList.add("element-group__list__item");
        li.innerHTML = txt;

        var delBtn = document.createElement("button");
        delBtn.classList.add("delete");
        delBtn.textContent = "Delete";

        delBtn.addEventListener('click', function() {
            var listItem = this.parentNode;
            listItem.parentNode.removeChild(listItem);
        });

        li.appendChild(delBtn);
        list.insertBefore(li, list.firstChild);
        
        input.value = "";
    }
}

function listClick(e) {
    if (e.target.tagName == "LI") {
        e.target.classList.toggle("checked");
    }
}
