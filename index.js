document.addEventListener("DOMContentLoaded", function () {
    // Your JavaScript code here
    var inputForca = document.querySelectorAll(".force .barrinha");
    var inputDext = document.querySelectorAll(".dext .barrinha");
    var inputDefesa = document.querySelectorAll(".defense .barrinha");
    var inputVelocidade = document.querySelectorAll(".speed .barrinha");
    var imagemForca = document.querySelectorAll("img.forca");
    var imagemDestreza = document.querySelectorAll("img.destreza");
    var imagemDefesa = document.querySelectorAll("img.defesa");
    var imagemVelocidade = document.querySelectorAll("img.velocidade");
    
    // Define an array containing pairs of input and image elements
    var statPairs = [
        { inputs: inputForca, images: imagemForca },
        { inputs: inputDext, images: imagemDestreza },
        { inputs: inputDefesa, images: imagemDefesa },
        { inputs: inputVelocidade, images: imagemVelocidade }
    ];
    
    // Loop through each pair and attach the event listener
    statPairs.forEach(function(pair) {
        pair.inputs.forEach(function(input, index) {
            input.addEventListener("input", function() {
                var valor = input.value;
                pair.images[index].src = "imagens/stat_bar/" + valor + ".png";
            });
        });
    });
    

    console.log("DOM loaded");

    //// ABRIR SELEÇAO DE ARMA
    var selecao = document.querySelector(".selecionarArmas");

    var arma1 = document.querySelectorAll(".a1");
    var arma2 = document.querySelectorAll(".a2");
    var botaoFechar = document.querySelector(".x img")

    function abrirFecharSelecao(event) {

        if (event.target.parentNode.classList.contains("arma")) {
            if (document.querySelector(".trocarImagem") == null) {
                selecao.classList.remove("fechado");
                selecao.classList.add("aberto");
                event.target.classList.add("trocarImagem")
            }

            else if (document.querySelector(".trocarImagem") != null && document.querySelector(".trocarImagem") != event.target) {

                console.log(document.querySelector(".trocarImagem"))
                console.log(event.target)

                document.querySelector(".trocarImagem").classList.remove("trocarImagem");
                event.target.classList.add("trocarImagem")

            }

            else if (event.target.classList.contains("trocarImagem") && selecao.classList.contains("aberto")) {
                selecao.classList.remove("aberto");
                selecao.classList.add("fechado");
                event.target.classList.remove("trocarImagem")
            }
        }

        else if (event.target.parentNode.classList.contains("x")) {
            document.querySelector(".trocarImagem").classList.remove("trocarImagem");
            selecao.classList.remove("aberto")
            selecao.classList.add("fechado")
        }
    }

    arma1.forEach(function(arma) {
        arma.addEventListener('click', abrirFecharSelecao);
    });
    arma2.forEach(function(arma) {
        arma.addEventListener('click', abrirFecharSelecao);
    });
    botaoFechar.addEventListener('click', abrirFecharSelecao)

    //// TROCAR IMAGEM DA ARMA
    var opcoes = document.querySelectorAll('.opcao');

    opcoes.forEach(function (opcao) {
        opcao.addEventListener('click', opcaoClicked);
    });

    function opcaoClicked(event) {
        // Get the image element inside the clicked "opcao" element
        var imgElement = event.currentTarget.querySelector('img');
        var selecionado = document.querySelector(".trocarImagem");

        selecionado.src = imgElement.src
    }


    //// ESCOLHER PERSONAGENS

    var personagens = document.querySelectorAll(".personagem");
    var proximo = document.querySelector("#setinhaProximo")
    var anterior = document.querySelector("#setinhaAnterior")
    let ativo = 1;

    function carregarExibicao(){

        selecao.classList.remove("aberto");
        selecao.classList.add("fechado");
        if(document.querySelector(".trocarImagem") != null) {
            document.querySelector(".trocarImagem").classList.remove("trocarImagem")
        }

        let stt = 0;
        personagens[ativo].style.transform = `none`
        personagens[ativo].style.zIndex = 1;
        personagens[ativo].style.filter = 'none'

        for (var i = ativo+1;i < personagens.length;i++) {
            stt++;
            personagens[i].style.transform = `translateX(${400*stt}px) translateY(${100*stt}px)  scale(${1 - 0.1*stt}) perspective(16px)`
            personagens[i].style.zIndex = -stt;
            personagens[i].style.filter = 'blur(1px)'
        }

        stt = 0;

        for (var i = ativo - 1;i >= 0; i--) {
            stt++;
            personagens[i].style.transform = `translateX(${-400*stt}px) translateY(${100*stt}px)  scale(${1 - 0.1*stt}) perspective(16px)`
            personagens[i].style.zIndex = -stt;
            personagens[i].style.filter = 'blur(1px)'
        }
    }
    carregarExibicao();
    
    proximo.onclick = function() {
        ativo = ativo + 1 < personagens.length ? ativo + 1 : ativo;
        carregarExibicao(); // Call carregarExibicao again to update the display
    }
    anterior.onclick = function() {
        ativo = ativo - 1 < personagens.length ? ativo - 1 : ativo;
        carregarExibicao(); // Call carregarExibicao again to update the display
    }
})
