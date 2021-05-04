        $(document).ready(function() {
            $("#loadButtons").attr("data-toggle", "buttons");
            $('#mycarousel').carousel({
                interval: 2000
            });
            $('#carouselButton').click(function() {
                if ($('#carouselButton').children('span').hasClass('fa-pause')) {
                    $('#mycarousel').carousel('pause');
                    $('#carouselButton').children('span').removeClass('fa-pause');
                    $('#carouselButton').children('span').addClass('fa-play');
                } else {
                    $('#mycarousel').carousel('cycle');
                    $('#carouselButton').children('span').removeClass('fa-play');
                    $('#carouselButton').children('span').addClass('fa-pause');
                }

            });

            /*$('#mycarousel').carousel({
                interval: 2000
            });
            $('#carousel-pause').click(function() {

                $('#mycarousel').carousel('pause');
            });
            $('#carousel-play').click(function() {

                $('#mycarousel').carousel('cycle');
            });*/
        });

        //data-toggle="buttons"
        /* $(document).on("load", function() {
             //alert('assas');
             $("#loadButtons").attr("data-toggle", "buttons");
         })*/

        //data-toggle="modal" data-target="#reservationModal"
        //data-toggle="modal" data-target="#loginModal"

        $("#loginLink").on("click", function() {
            $("#loginLink").attr("data-toggle", "modal");
            $("#loginLink").attr("data-target", "#loginModal");
        });

        $("#reservationButtonLink").on("click", function() {
            $("#reservationButtonLink").attr("data-toggle", "modal");
            $("#reservationButtonLink").attr("data-target", "#reservationModal");
        });

        $("#quitModal").on("click", function() {
            $("#quitModal").attr("data-dismiss", "modal");
        });



        $("#cancelModal").on("click", function() {
            $("#cancelModal").attr("data-dismiss", "modal");
        });

        $("#quitreservationModal").on("click", function() {
            $("#quitreservationModal").attr("data-dismiss", "modal");
        });