/*
 * TravisFavicon - v0.1.0 - 2012-10-16
 * https://github.com/manuelvanrijn/travis-favicon
 * Copyright (c) 2012 Manuel van Rijn
 * Licensed MIT, GPL
 * 
 * Usage:
 *   TravisCIFavicon("username", "project-name");
 */

var TravisFavicon = function(username, project) {
  var getTag = function() {
    var links = document.getElementsByTagName('link');

    for(var i=0, len=links.length; i < len; i++) {
      if ((links[i].getAttribute('rel') || '').match(/\bicon\b/)) {
        return links[i];
      }
    }
    return false;
  };

  var drawIcon = function(data) {
    var status = data.last_build_result;
    var canvas = document.createElement('canvas');
    canvas.width = 16;canvas.height = 16;
    var ctx = canvas.getContext('2d');
    switch(status) {
      case 0:
        ctx.fillStyle = '#77D819';
        break;
      case 1:
        ctx.fillStyle = '#CE3C35';
        break;
      default:
        ctx.fillStyle = '#E8DA3B';
    }
    ctx.fillRect(0, 0, 128, 128);

    var link = getTag();
    if(link === false) {
      link = document.createElement('link');
      document.getElementsByTagName('head')[0].appendChild(link);
    }

    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = canvas.toDataURL("image/x-icon");
  };

  var init = function(username, project) {
    // make the callback available
    window.travisFaviconCallback = drawIcon;
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://secure.travis-ci.org/' + username + '/' + project + '.json?callback=travisFaviconCallback';
    head.appendChild(script);
  };

  init(username, project);
};
