$(window).resize(function() {
    $(".sph").each(function(){
        $(this).css("min-height", $(this).parent().height());
    });
});