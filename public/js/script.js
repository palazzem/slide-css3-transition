$(function () {
    var sliding = startClientX = startPixelOffset = pixelOffset = currentSlide = 0,
        slideCount = $('.slide').length,
        _html = $('html');

    // Cross platform listeners
    _html.live('mousedown touchstart', slideStart);
    _html.live('mouseup touchend', slideEnd);
    _html.live('mousemove touchmove', slide);

    function slideStart(event) {
        // If is a touch event, use just the first touch property (i.e. the first finger)
        if (event.originalEvent.touches) {
            event = event.originalEvent.touches[0];
        }

        // Check if user is not sliding yet and store X position
        if (sliding == 0) {
            sliding = 1;
            startClientX = event.clientX;
        }
    }

    function slide(event) {
        event.preventDefault();

        // Same as above
        if (event.originalEvent.touches) {
            event = event.originalEvent.touches[0];
        }

        // Store how much user has moved
        var deltaSlide = event.clientX - startClientX;

        // This is the case when the user move the slide for the "first time"
        if (sliding == 1 && deltaSlide != 0) {
            sliding = 2;
            startPixelOffset = pixelOffset;
        }

        // The user is already moving
        if (sliding == 2) {
            // For every X movement, move of one pixel
            var touchPixelRatio = 1;

            // If I am on the first slide or the last, move on pixel for every 3 (Apple's rubber-band)
            if ((currentSlide == 0 && event.clientX > startClientX) || (currentSlide == slideCount - 1 && event.clientX < startClientX)) {
                touchPixelRatio = 3;
            }

            // Calculate how many pixel are needed to offset active slide
            pixelOffset = startPixelOffset + deltaSlide / touchPixelRatio;
            $('#slides').css('-webkit-transform', 'translate3d(' + pixelOffset + 'px,0,0)').removeClass();
        }
    }

    function slideEnd(event) {
        if (sliding == 2) {
            sliding = 0;
            currentSlide = pixelOffset < startPixelOffset ? currentSlide + 1 : currentSlide - 1;
            currentSlide = Math.min(Math.max(currentSlide, 0), slideCount - 1);
            pixelOffset = currentSlide * -$('body').width();
            $('#temp').remove();
            $('<style id="temp">#slides.animate{-webkit-transform:translate3d(' + pixelOffset + 'px,0,0)}</style>').appendTo('head');
            $('#slides').addClass('animate').css('-webkit-transform', '');
        }
    }
});