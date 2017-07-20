$(document).ready(function() {

    //Показать управление страницами и активировать первую ссылку
    $("#active").show();
    $("#active a:first").addClass("active");

    //Определяется размер изображений, вращение изображений
    var imageWidth = $("#overflow").width();
    var imageSum = $(".image img").size();
    // var imageReelWidth = imageWidth * imageSum;

    //Настройка изображения под новый размер
    // $(".image").css({'width' : imageReelWidth});

    //Функции слайдера и страничной навигации
    rotate = function(){
        var triggerID = $active.attr("rel") - 1; //Получаем количество
        var image_reelPosition = triggerID * imageWidth; //Определяем расстояние между изображениями

        $("#active a").removeClass('active'); //Удаляются все активные классы
        $active.addClass('active'); //Добавляем класс - active (the $active is declared in the rotateSwitch function)

        //Слайдер Анимация
        $("#slides .image").animate({
            left: -image_reelPosition
        }, 500 );
    };

    //Вращение и синхронизация событий
    rotateSwitch = function(){
        play = setInterval(function(){ //Устанавливаем таймер - это будет повторяться каждые 7 секунд
            $active = $('#active a.active').next();
            if ( $active.length === 0) { //Если навигация достигает конца...
                $active = $('#active a:first'); //возвращаемся к первому
            }
        rotate(); //Запускаем слайдер и страничную навигацию
        }, 5000); //Таймер скорости в миллисекундах (7 секунд)
    };

    rotateSwitch(); //Выполняем функцию запуск

    //При наведении
    $(".image article").hover(function() {
        clearInterval(play); //Останавливаем вращение
    }, function() {
        rotateSwitch(); //Продолжаем вращение
    });

    //При нажатии
    $("#active a").click(function() {
        $active = $(this); //Останавливаем вращение
        //Сброс таймера
        clearInterval(play); //Останавливаем вращение
        rotate(); //Запускаем вращения
        rotateSwitch(); //Продолжаем вращение
        return false; //Не допускаем перехода по ссылке
    });

});

