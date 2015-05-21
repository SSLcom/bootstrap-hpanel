$(window).resize(function() {
    sameAsParent();
});

$(window).load(function(){
    sameAsParent();
});

function sameAsParent(){
    $(".sph").each(function(){
        $(this).css("min-height", '');
    });
    if ($(window).width() > 752) {
        $(".sph").each(function(){
            $(this).css("min-height", $(this).parent().height());
        });
    }
}