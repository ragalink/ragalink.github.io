(function(){

    StartMenu();

    function StartMenu(){

        var Tag = document.querySelector("#Tag");
        Tag.addEventListener("click", OpenTag);
    
    }

    function OpenTag(){
        location.href  = "https://www.instagram.com/ragaburger/";
    }

}())