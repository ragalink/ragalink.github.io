(function(){

    StartMenu();

    function StartMenu(){

        var Hamburguer = document.querySelector("#Quadro1");
        Hamburguer.addEventListener("click", CardH);
    
        var Pastel = document.querySelector("#Quadro2");
        Pastel.addEventListener("click", CardP);

        var Bebidas = document.querySelector("#Quadro3");
        Bebidas.addEventListener("click", CardB);

    }

    function CardH(){
        window.location.href = "Cardápio_de_Hambúrgueres.html";
    }

    function CardP(){
        window.location.href = "Cardápio_de_Pasteis_e_salgados.html";
    }

    function CardB(){
        window.location.href = "Cardápio_de_Bebidas.html";
    }

}())