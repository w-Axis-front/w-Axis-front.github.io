!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){"use strict";
/*! npm.im/object-fit-images 3.2.4 */var i="bfred-it:object-fit-images",o=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,r="undefined"==typeof Image?{style:{"object-position":1}}:new Image,s="object-fit"in r.style,c="object-position"in r.style,a="background-size"in r.style,l="string"==typeof r.currentSrc,u=r.getAttribute,f=r.setAttribute,d=!1;function p(t,e,n){var i="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+(e||1)+"' height='"+(n||0)+"'%3E%3C/svg%3E";u.call(t,"src")!==i&&f.call(t,"src",i)}function g(t,e){t.naturalWidth?e(t):setTimeout(g,100,t,e)}function m(t){var e=function(t){for(var e,n=getComputedStyle(t).fontFamily,i={};null!==(e=o.exec(n));)i[e[1]]=e[2];return i}(t),n=t[i];if(e["object-fit"]=e["object-fit"]||"fill",!n.img){if("fill"===e["object-fit"])return;if(!n.skipTest&&s&&!e["object-position"])return}if(!n.img){n.img=new Image(t.width,t.height),n.img.srcset=u.call(t,"data-ofi-srcset")||t.srcset,n.img.src=u.call(t,"data-ofi-src")||t.src,f.call(t,"data-ofi-src",t.src),t.srcset&&f.call(t,"data-ofi-srcset",t.srcset),p(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{!function(t){var e={get:function(e){return t[i].img[e||"src"]},set:function(e,n){return t[i].img[n||"src"]=e,f.call(t,"data-ofi-"+n,e),m(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}!function(t){if(t.srcset&&!l&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}(n.img),t.style.backgroundImage='url("'+(n.img.currentSrc||n.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=e["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(e["object-fit"])?g(n.img,(function(){n.img.naturalWidth>t.width||n.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"})):t.style.backgroundSize=e["object-fit"].replace("none","auto").replace("fill","100% 100%"),g(n.img,(function(e){p(t,e.naturalWidth,e.naturalHeight)}))}function b(t,e){var n=!d&&!t;if(e=e||{},t=t||"img",c&&!e.skipTest||!a)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var o=0;o<t.length;o++)t[o][i]=t[o][i]||{skipTest:e.skipTest},m(t[o]);n&&(document.body.addEventListener("load",(function(t){"IMG"===t.target.tagName&&b(t.target,{skipTest:e.skipTest})}),!0),d=!0,t="img"),e.watchMQ&&window.addEventListener("resize",b.bind(null,t,{skipTest:e.skipTest}))}b.supportsObjectFit=s,b.supportsObjectPosition=c,function(){function t(t,e){return t[i]&&t[i].img&&("src"===e||"srcset"===e)?t[i].img:t}c||(HTMLImageElement.prototype.getAttribute=function(e){return u.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,n){return f.call(t(this,e),e,String(n))})}(),t.exports=b},function(t,e,n){t.exports=n(2)},function(t,e,n){"use strict";n.r(e);var i=n(0),o=n.n(i);$((function(){o()()})),$('a[href^="#"]').click((function(t){t.preventDefault();var e=this.hash,n=$(e);$("html, body").stop().animate({scrollTop:n.offset().top},600)})),$(".single-item").slick({fade:!0,dots:!0,appendDots:$(".slide-block-wrap")}),$(".single-item").on("beforeChange",(function(t,e,n,i){$("#currentSlide").html("0"+(i+1)),$(".active-text").fadeOut(50),$(".active-text").removeClass("active-text"),$("#text"+i).fadeIn(400,"linear"),$("#text"+i).addClass("active-text")})),$(".photo-rew-slider").slick({slidesToShow:3,slidesToScroll:1,centerMode:!0,asNavFor:".text-rew-slider",focusOnSelect:!0,speed:200}),$(".text-rew-slider").slick({arrows:!1,asNavFor:".photo-rew-slider"}),$(".photo-rew-slider").on("afterChange",(function(t,e,n,i){$("#rew-counter").html("0"+(n+1))})),$(".burger-menu").on("click",(function(){$(".menu").toggleClass("open-menu"),$("html,body").css("overflow","hidden")})),$(".close-menu").on("click",(function(){$(".menu").removeClass("open-menu"),$("html,body").css("overflow","auto")})),$(".add-comment").click((function(t){t.preventDefault(),$("#myOverlay").fadeIn(297,(function(){$(".popup").css("display","block").animate({opacity:1},198)})),$("html,body").css("overflow","hidden")})),$(".close-popup, #myOverlay").click((function(){$(".popup").animate({opacity:0},198,(function(){$(this).css("display","none"),$("#myOverlay").fadeOut(297)})),$("html,body").css("overflow","auto")}));var r=!0,s=!0;function c(){var t=$(window).scrollTop(),e=$(window).height();if(r){var n=$(".sick-animation:nth-of-type(1)").offset().top,i=$(".sick-animation:nth-of-type(1)").outerHeight();n>=t&&n+i<=e+t&&($(".sick-animation").addClass("animate-scale"),r=!1)}if(s){n=$("#botBottle").offset().top,i=$("#botBottle").outerHeight();(n>=t&&n+(i-100)<=e+t||n<=t&&t-n<=100)&&($("#botBottle").addClass("animate__animated animate__slideInRight"),s=!1)}$(window).scrollTop()>$(".buy.static").offset().top+$(".buy.static").outerHeight()&&t+e<$("footer").offset().top?($(".buy.fixed").css("opacity","1"),$(".buy.fixed").css("pointer-events","auto")):($(".buy.fixed").css("opacity","0"),$(".buy.fixed").css("pointer-events","none"))}$(window).scroll((function(){c()})),$(document).ready((function(){c()}))}]);