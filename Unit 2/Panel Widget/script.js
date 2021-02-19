$(function(){
    $('.tabs-panels .tabs li').on('click', function(){
        let $panel = $(this).closest('.tabs-panels');
        $panel.find('.tabs li.active').removeClass('active');
        $(this).addClass('active');

        // Find the panel to show
        let panelToShow = $(this).attr('rel');

        // Hide current panel
        $panel.find('.panel.active').slideUp(300, showNextPanel);

        // Show next panel
        function showNextPanel() {
            $(this).removeClass('active');
            $(`#${panelToShow}`).slideDown(300, function(){
                $(this).addClass('active');
            });
        }
    });
});