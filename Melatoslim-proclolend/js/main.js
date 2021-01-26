document.addEventListener('DOMContentLoaded', function(){
    var date = new Date();
    const curDay = date.getDate();
    var day = date.setDate(date.getDate() - 2);
    var yestDate = new Date(day);
    if((date.getDate() < 10) && (date.getMonth() < 10)){
        document.getElementById("yest").innerHTML = "0" + yestDate.getDate() + ".0" + (date.getMonth() + 1) + "." + date.getFullYear();
        document.getElementById("current-date").innerHTML = "0" + curDay + ".0" + (date.getMonth() + 1) + "." + date.getFullYear();
    }
    else if((date.getDate() < 10) && (date.getMonth() > 10)){
        document.getElementById("yest").innerHTML = "0" + yestDate.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
        document.getElementById("current-date").innerHTML = "0" + curDay + "." + (date.getMonth() + 1) + "." + date.getFullYear();
    }
    else if((date.getDate() > 10) && (date.getMonth() < 10)){
        document.getElementById("yest").innerHTML = yestDate.getDate() + ".0" + (date.getMonth() + 1) + "." + date.getFullYear();
        document.getElementById("current-date").innerHTML = curDay + ".0" + (date.getMonth() + 1) + "." + date.getFullYear();
    }
    else{
        document.getElementById("yest").innerHTML = yestDate.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
        document.getElementById("current-date").innerHTML = curDay + "." + (date.getMonth() + 1) + "." + date.getFullYear();
    }
    var month = date.setMonth(date.getMonth() + 4);
    date = new Date(month);
    month = date.getMonth();
    if(month < 10){
        document.getElementById("month").innerHTML = "0" + month;
    }
    else{
        document.getElementById("month").innerHTML = month;
    }
    Timer();
})

function Timer() {
    function e(e) {
      var i = t(new Date(e).getHours()),
        o = t(new Date(e).getMinutes()),
        n = t(new Date(e).getSeconds());
      s.each(function () {
        $(this).find(".hours").text(i), $(this).find(".minutes").text(o), $(this).find(".seconds").text(n)
      })
    }
  
    function t(e) {
      return e >= 10 ? e : "0" + e
    }
  
    function i() {
      a == r ? clearInterval(d) : (a -= 1e3, e(a))
    }
  
    function o() {
      d = setInterval(i, 1e3)
    }
    var s = $(".timer"),
      n = new Date,
      r = 60 * n.getTimezoneOffset() * 1e3,
      l = new Date((new Date).getTime() + 864e5);
    l.setHours(0), l.setMinutes(0), l.setSeconds(0);
    var a = l - n + r;
    i(), o();
    var d
}
//for landing
$('a[href^="#"]').click(function(e) {
    e.preventDefault();

    var target = this.hash,
        $target = $(target);

    $('html, body').stop().animate({
        scrollTop: $target.offset().top
    }, 600);
});
