//Count messages
var messagesCount = $('p').length;
$('#count').text(messagesCount);

//Detect click
$('.trash').click(
    function () {
        $(this).parent().remove();
        var messagesCount = $('p').length;
        $('#count').text(messagesCount);
    }
);


$('#btn-add').click(
    function () {
        $('body').append(`
        </div>
        <div class="row">
        <img class="avatar" src="./images/avatar-1.jpg">
        <div>
        <h6>Noel Paganelli</h6>
        <p> Lorem Ipsum  </p>
        </div>
        <img class="trash" src="./images/trash.png">
         </div>
         `)

        $('#add-message').val("")
        var messagesCount = $('p').length;
        $('#count').text(messagesCount);

        $('.trash').click(
            function () {
                $(this).parent().remove();
                var messagesCount = $('p').length;
                $('#count').text(messagesCount);
            }
        );
    }
);

// Quand on appuie sur le bouton recherche
// premiere boucle qui parcours les messages un a un
// deuxieme boucle qui parcours le contenu d'un message
// si il y a un match entre ce qu'on a ecrit et une partie du message
// on supprime tous les messages ne contenant pas ce qu'on a écrit et on laisse les autres


// ou
// quand on appuie sur le bouton recherche
// on recupere le msg et on le stock dans une variable regexp
// premiere boucle qui parcours les msg
// deuxiement boucle qui parcours le contenu des msg
// si regexp de ce qu'on a ecrit match avec un contenu de msg
// on supprime tout ceux qui regexp.match == false