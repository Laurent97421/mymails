//Count messages
let countMessages = document.getElementsByTagName('p');
document.getElementById("count").textContent = countMessages.length;

//Detect click
let trash = document.getElementsByClassName("trash");
for (var i = 0; i < trash.length; i++) {
    trash[i].addEventListener('click', trashClick);
}

//Remove function
function trashClick() {
    this.parentNode.remove();
    document.getElementById("count").textContent = countMessages.length;
}
