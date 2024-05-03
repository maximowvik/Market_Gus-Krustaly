var ImagesListInfoCategory = [{"title":"Подарки", "id":0, "image":"gifts.jpg"},
{"title":"Вазы", "id":1, "image":"vases.png"},
{"title":"Рюмки и графины", "id":2, "image":"glasses.png"},
{"title":"Акценты на столе", "id":3, "image":"accents.png"},
{"title":"Шампанское блюдо", "id":4, "image":"champanceDish.png"},
{"title":"Бокалы для напитков", "id":5, "image":"glasssforCognac.png"}]

$(document).ready(function(){
    for(var i = 0; i<ImagesListInfoCategory.length; i++){
        $(".content .catalog .cotegory").append(`<div class='image_category' id='btn' onclick='viewProduct(`+ImagesListInfoCategory[i].id+`)' style="background-image: url('src/img/category/`+ImagesListInfoCategory[i].image+`');"></div>`);
    }
})

function viewProduct(idCategory){
    console.log(idCategory);   
}