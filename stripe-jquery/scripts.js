$(document).ready(function () {
    var closeDropdownTimeout;

    startCloseTimeout = function () {
        closeDropdownTimeout = setTimeout(() => closeDropdown(), 50);
    }

    var stopCloseTimeout = function () {
        clearTimeout(closeDropdownTimeout);
    }

    var openDropdown = function (element) {
        var data = $(element).attr("data-dropdown")
        var offset = $(element).offset();
        var liWidth = $(element).width();
        var height = $(`.dropdown__container__group[data-dropdown='${data}']`).height();
        var width = $(`.dropdown__container__group[data-dropdown='${data}']`).width();

        var position = Math.round(Math.max(offset.left + liWidth / 2 - width / 2, 10));

        
        $(".dropdown__background").css("height", height)
        $(".dropdown__background").css("width", width)
        $(".dropdown").css("transform", `translateX(${position}px)`);

        $(".dropdown__container__group").removeClass("active")
        $(".dropdown").addClass("active")
        $(`.dropdown__container__group[data-dropdown='${data}']`).addClass("active")
    }

    var closeDropdown = function () {
        $(".dropdown__container__group").removeClass("active")
        $(".dropdown").removeClass("active")
    }


    $("nav>ul li").each(function () {
        $(this).hover(
            function () {
                stopCloseTimeout();
                openDropdown($(this));
            }, function () {
                startCloseTimeout()
            })
    })


    $(".dropdown__container__group").each(function () {
        $(this).hover(
            function () {
                stopCloseTimeout()
            }, function () {
                startCloseTimeout()
            }
        )
    })
});