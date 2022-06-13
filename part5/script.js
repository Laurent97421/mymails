//Count messages
let messagesCount = $('p').length;
$('#count').text(messagesCount);

//Detect click + Remove function - Link to body
$("body").on("click", '.trash', function () {
    $(this).parent().remove();
    var messagesCount = $('p').length;
    $('#count').text(messagesCount);
})

//Detect + Add Message click
$('#btn-add').click(function () {
    var message = $('#add-message').val();
    $("body").append(`
<div class="row">
<img class="avatar" src="./images/avatar-1.jpg">
<div>
<h6>Eric Dupont</h6>
<p>`+ message + `</p>
</div>
<img class="trash"src="./images/trash.png">
</div>`
    );
    //Update count
    $('#count').text($('p').length);
    //Reset Input
    $('#add-message').val("");
})

//Search function
$('#btn-search').click(function () {
    $('h6').each(function () {
        if ($("#search-message").val() != $(this).text()) {
            $(this).parent().parent().fadeOut();
        } else {
            $(this).parent().parent().show();
        }
    })
    //Reset Input
    $("#search-message").val("");
})
