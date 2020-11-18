// JavaScript Document

$.fn.hoverImage = function(options) {
  // options
  options = Object.assign({
    suffix: '-active',
    self: true,
  }, options);
  // replace images on hover
  $(this).each(function(){
    const srcNormal = $(this).attr('src');
    const srcActive = srcNormal.replace(/(.*)\./, '$1' + options.suffix + '.');
    const href = $(this).parent('a').attr('href');
    const url = location.href;
    // preload
    $('<img>').attr('src', srcActive);
    // switch image
    if (options.self && url.includes(href)) {
      // self page
      $(this).attr('src', srcActive);
    } else {
      // hover
      $(this).hover(function(){
        $(this).attr('src', srcActive);
      }, function(){
        $(this).attr('src', srcNormal);
      });
    }
  });
	return this;
}

// Initial target class
$(function() {
  $('.hover-image').hoverImage();
});

