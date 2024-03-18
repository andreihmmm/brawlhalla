document.addEventListener("DOMContentLoaded", function () {
    // Your JavaScript code here
    inputForca = document.querySelector(".force .barrinha")
    inputDext = document.querySelector(".dext .barrinha")
    inputDefesa = document.querySelector(".defense .barrinha")
    inputVelocidade = document.querySelector(".speed .barrinha")
    var imagemForca = document.querySelector("img.forca")
    var imagemDestreza = document.querySelector("img.destreza")
    var imagemDefesa = document.querySelector("img.defesa")
    var imagemVelocidade = document.querySelector("img.velocidade")

    inputForca.addEventListener("input", function () {
        var valor = inputForca.value
        imagemForca.src = "imagens/stat_bar/" + valor + ".png";
    });
    inputDext.addEventListener("input", function () {
        var valor = inputDext.value
        imagemDestreza.src = "imagens/stat_bar/" + valor + ".png";
    });
    inputDefesa.addEventListener("input", function () {
        var valor = inputDefesa.value
        imagemDefesa.src = "imagens/stat_bar/" + valor + ".png";
    });
    inputVelocidade.addEventListener("input", function () {
        var valor = inputVelocidade.value
        imagemVelocidade.src = "imagens/stat_bar/" + valor + ".png";
    });

    console.log("DOM loaded");

    //// ABRIR SELEÇAO DE ARMA
    var selecao = document.querySelector(".selecionarArmas");

    var arma1 = document.querySelector(".a1");
    var arma2 = document.querySelector(".a2");
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

    arma1.addEventListener('click', abrirFecharSelecao);
    arma2.addEventListener('click', abrirFecharSelecao);
    botaoFechar.addEventListener('click', abrirFecharSelecao)

    //// TROCAR IMAGEM 
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
})
