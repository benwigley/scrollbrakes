// Prevent the window from scrolling when the details
// pane is being scrolled
(function($) {
  $.fn.scrollbrakes = function() {
    $(this).bind('mousewheel DOMMouseScroll', function(e) {
      var this_div = $(this);
      var delta         = e.originalEvent.wheelDelta || -e.originalEvent.detail;
      var scrollTop     = this_div.get(0).scrollTop;
      var scrollHeight  = this_div.get(0).scrollHeight;
      var outerHeight   = this_div.outerHeight();

      console.log('scrollTop, scrollHeight, outerHeight', scrollTop, scrollHeight, outerHeight);

      console.log('delta', delta);

      if (scrollHeight <= outerHeight) {
        // No scroll bar present, scroll window normally
        return;
      }
      else if (scrollTop <= 0) { // Scrollbar has reached the top
        if (delta > 0) {
          e.preventDefault();
        }
      }
      else if ((scrollHeight - scrollTop) <= (outerHeight + 1)) { // Scrollbar has reached the bottom
        if (delta < 0) {
          e.preventDefault();
        }
      }
    });
    return this;
  };
})(window.jQuery);
