$('document').ready(function() {
    $('h2[data-type="vitamin"]').css('background','green');
    $('h2[data-type="proteinbar"]').css('background','orange');
    $('h2[data-type="mineralwater"]').css('background','blue');
});

$('document').ready(function() {
    $(':input[type="checkbox"]').on('click', onMouseClick);
})

function onMouseClick(e) {
    $(':checked');
    console.log( $(':checked').val());
    
}


