$(window).resize(function() {
    hpanelHelper()
});

$(window).load(function(){
    hpanelHelper()
});

function hpanelHelper(){
    $(".hpanel").each(function(){
        $(this).find('[class*="col-"]').css("min-height", '');
    });
    if ($(window).width() > 752) {
        $(".hpanel").each(function(parent){
            $(this).find('[class*="col-"]').each(function() {
                $(this).css("min-height", $(this).parent().height());
            });
            $(this).find('.panel-heading').each(function() {
                $(this).css("min-height", $(this).parent().height());
            });
        });
    }
}