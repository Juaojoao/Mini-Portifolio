//passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML.
const abas = document.querySelectorAll(".aba");

//passo 2 - dar um jeito de identificar o clique no elemento da aba.
abas.forEach(aba => {
    aba.addEventListener("click", function() {

        // parar propagalção
        if(aba.classList.contains("selecionado")){
            return;
        }

        seletorDeAbas(aba);
        monstarInformacoesDaBarra(aba);
        
        
    })
})

function seletorDeAbas(aba){
    // passo 3 - quando o usuário clicar, desmarcar a aba selecionada.
    const abaSelecionada = document.querySelector(".aba.selecionado");

    abaSelecionada.classList.remove("selecionado");

    //passo 4 - marcar a aba clicada como selecionado.
    aba.classList.add("selecionado");
}

function monstarInformacoesDaBarra(aba){
    //passo 5 - esconder o conteúdo anterior.
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");
    //passo 6 - mostrar o conteúdo da aba selecionada.
    const idInformacao = `informacao-${aba.id}`

    const informacaoASerMostrada = document.getElementById(idInformacao)
    informacaoASerMostrada.classList.add("selecionado");

}