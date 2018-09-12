$(function() {
    $("#img1").attr({ src: function() {
        return "https://via.placeholder.com/450x350?text=This works!";
    } });
    
    //$('img').attr(
    //{src: "https://via.placeholder.com/150x250/eee/ff00ff",
    //alt:"Image name", heigt: '150px', width: '150px'}
    //);
    
    $('.highlight').attr("style", "color: red");
})

