var click_togle_menu_button = false, speed_togle_menu = 600, page_defoult="C", version_app = "Al-0.0.3";

$(document).ready(function(){
    activate_button_menu_t(page_defoult)
    $('.header .ver').empty("").append("ver.: "+version_app)
    $('.menu').toggle()
    $('.icon_menu_togle_button').click(function(){
        if(!click_togle_menu_button){
            click_togle_menu_button=true;
            $('.menu').slideDown(speed_togle_menu);
        }else{
            click_togle_menu_button=false;
            $('.menu').slideUp(speed_togle_menu);
        }
    })
    $('.content').click(function(){
        click_togle_menu_button=false;
        $('.menu').slideUp(speed_togle_menu);
    })
})

function activate_button_menu_t(page){
    if(page=="C"){
        $('.menu .gallary').removeClass("is_activate_button_menu").addClass("button");
        $('.menu .about').removeClass("is_activate_button_menu").addClass("button");
        $('.menu .catalog').removeClass("button").addClass("is_activate_button_menu");
        $('.content .gallary').css("display", 'none');
        $('.content .about').css("display", 'none');
        $('.content .catalog').css("display", 'block');
    }else if(page=="G"){
        $('.menu .gallary').removeClass("button").addClass("is_activate_button_menu");
        $('.menu .about').removeClass("is_activate_button_menu").addClass("button");
        $('.menu .catalog').removeClass("is_activate_button_menu").addClass("button");
        $('.content .gallary').css("display", 'block');
        $('.content .about').css("display", 'none');
        $('.content .catalog').css("display", 'none');
    }else if(page=="A"){
        $('.menu .gallary').removeClass("is_activate_button_menu").addClass("button");
        $('.menu .about').removeClass("button").addClass("is_activate_button_menu");
        $('.menu .catalog').removeClass("is_activate_button_menu").addClass("button");
        $('.content .gallary').css("display", 'none');
        $('.content .about').css("display", 'block');
        $('.content .catalog').css("display", 'none');
    }
}