var listImages = ['fujery', 'fujery1', 'grafines', 'kuvshines', 'pack', 'pack1', 'stakan', 'stakan1', 'stopka', 'stopka1', 'shtof', 'shtof1', 'shtof2'];
var image_position = 0;
$(document).ready(function(){

    for(var i=0; i<listImages.length; i++){
        $(".content .gallary .images").append(`<div class='img `+listImages[i]+`' onclick='viewImages(`+i+`);' style="background-image: url('src/img/gallary/`+listImages[i]+`.jpg');"></div>`);
    }

    $('.content .gallary .popup_image_view .button_close').click(function(){
        $('.content .gallary .popup_image_view').css('display', 'none');
    })

    $('.content .gallary .popup_image_view .content .button_group .next_button').click(function(){
        if(image_position<listImages.length-1){
            viewImages(image_position+=1);
        }else{
            viewImages(image_position=0);
        }
    })

    $('.content .gallary .popup_image_view .content .button_group .back_button').click(function(){
        if(image_position!=0){
            viewImages(image_position-=1);
        }else{
            viewImages(image_position=listImages.length-1);
        }
    })
})

function viewImages(image){
    image_position = image;
    $('.content .gallary .popup_image_view .content .image_position').empty().append((image + 1)+" из "+listImages.length)
    $('.content .gallary .popup_image_view .content').css('background-image', 'url("src/img/gallary/'+listImages[image]+'.jpg")')
    $('.content .gallary .popup_image_view').css('display', 'block');
}

