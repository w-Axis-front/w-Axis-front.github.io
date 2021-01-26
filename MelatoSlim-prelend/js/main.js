document.addEventListener('DOMContentLoaded', function(){
    var date = new Date();
    var month = date.setMonth(date.getMonth() + 4);
    date = new Date(month);
    month = date.getMonth();
    if(month < 10){
        document.getElementById("month").innerHTML = "0" + month;
    }
    else{
        document.getElementById("month").innerHTML = month;
    }
})

