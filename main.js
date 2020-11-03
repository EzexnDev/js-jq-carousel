
function nextImg(){
    var activeEl = $('img.active,i.active')
            activeEl.removeClass('active')
            var nextEl = activeEl.next()
            if (activeEl.hasClass('last')) {
                nextEl = $('img.first, i.first'); 
            }
            nextEl.addClass('active') 
}

function previousImg(){
    var activeEl = $('img.active,i.active')
            activeEl.removeClass('active')
            var prevEl = activeEl.prev()
            if (activeEl.hasClass('first')) {
                prevEl = $('img.last, i.last'); 
            }
            prevEl.addClass('active') 
}






$(document).ready(function () {

    // Right Arrow per andare avanti
    $(document).keydown(function (e) { 
        if(e.keyCode == 39) {
            nextImg()
        }
    });
    
    // Left Arrow per tornare indietro 
    $(document).keydown(function (key) { 
        if(key.keyCode == 37) {
            previousImg()
        }
    });

    //ON Click

    $('.next').click(
        function () {
            nextImg()
        }
    )

    
    $('.prev').on('click', function () {
        previousImg()
    })

});