$(".find").keyup(function(event){
    if(event.keyCode == 13){
        event.preventDefault();
        window.location.href = "{landing_url}";
    }
});