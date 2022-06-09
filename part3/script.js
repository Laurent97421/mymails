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

document.getElementById('btn-add').addEventListener('click', addButton);

function addButton() {

    // Detection du clic
    console.log('clic')

    // On stocke le message qu'on a ecrit
    var newMail = document.getElementById('new-message').value

    //  on crée un nouvel element div
    var newDiv = document.createElement("div")
    // on ajoute le div au body
    document.body.appendChild(newDiv)
    // on donne la class row a notre div
    newDiv.classList.add("row")

    // on cree un element avec l'image de l'avatar
    var newAvatar = document.createElement("img")
    newAvatar.src = "./images/avatar-1.jpg"
    // on ajoute img au div
    newDiv.appendChild(newAvatar)
    // on donne la meme classe qu'aux autres images
    newAvatar.classList.add("avatar")

    //////////////////////////////////////////////
    // on cree la div qui va regrouper nom et msg
    newDiv2 = document.createElement("div")
    newDiv.appendChild(newDiv2)

    // on cree un element avec le prenom
    var newName = document.createElement('h6')
    // on donne le nom
    newName.textContent = "Gerard TroisParDieu";

    // on ajoute le nom au div cree
    newDiv2.appendChild(newName)

    // on lui donne du contenu, le message ecrit
    var newContent = document.createElement('p')
    newContent.textContent = newMail


    // on ajoute le noeud texte au nouveau div cree
    newDiv2.appendChild(newContent)
    /////////////////////////////////////////////

    // on cree un element contenant la trash
    var newTrash = document.createElement("img")
    newTrash.src = "./images/trash.png"
    // on donne la classe a trash
    newTrash.classList.add("trash")
    // on ajoute la trash au div de class row
    newDiv.appendChild(newTrash)

    /////////////////////////////////////////////////////////////////////////////////////////////
    // on efface l'input de texte à chaque fois qu'on clic sur le button
    document.getElementById('new-message').value = ""

    // on met à jour le compteur
    document.getElementById("count").textContent = countMessages.length;

    // on supprime l'element au clic sur la trash
    let trash = document.getElementsByClassName("trash");
    for (var i = 0; i < trash.length; i++) {
        trash[i].addEventListener('click', trashClick);
    }

}
