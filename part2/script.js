// On affiche le nombre de msg présent sur la page
document.getElementById('nombre').textContent = document.getElementsByClassName('row').length


// On fait en sorte que le msg se supprime quand on clique sur la poubelle
for (var i = 0; i < document.getElementsByClassName('trash').length; i++) {
    document.getElementsByClassName('trash')[i].addEventListener("click",
        function () {
            this.parentNode.remove();
            document.getElementById('nombre').textContent = document.getElementsByClassName('row').length;
        }
    )
}




