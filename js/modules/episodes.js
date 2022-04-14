export default function episodes(){

    EpisodiosRick()

    // CONTAINER
    const append = document.querySelector(".caixa");

    // FUNÇÃO DO FILHO DO CONTAINER
    const AppendPai = (pai, filho) =>{
        return pai.appendChild(filho);
    }

    // FUNÇÃO PARA CRIAR TAGS
    const createTag = (tag, conteudo) =>{
        const elemento = document.createElement(tag);
        elemento.innerText = conteudo;
        return elemento;
    }

    // FUNÇÃO PARA COLOCAR AS TAGS
    const createPai = (subtag, subclasse, conteudo, episodeo, lancamento) =>{
        const app = document.createElement(subtag);
        app.classList.add(subclasse);
        app.appendChild(conteudo);
        app.appendChild(episodeo);
        app.appendChild(lancamento)
        return app;
    }

    // API
    async function EpisodiosRick(next, names){

        let url = `https://rickandmortyapi.com/api/episode?page=${next}`;

        const requireEps = await fetch(url,{})
        .then(respo => respo.json())
        .then((data) =>{

            const episodios = data.results;
            episodios.forEach((e) => {
                // CRIAR TAGS
                let epsName = e.name;
                let TagName = createTag("h2", epsName);

                let dataLanca = e.air_date;
                let TagDate = createTag("h3", dataLanca);

                // LIMPANDO TEXTOS
                let ep = e.episode.replace("S", "T").replace("E", "Ep")

                let Tagep = createTag("h3", `${ep}`);

                let Tagbox = createPai("div", "box", TagName, Tagep, TagDate);

                AppendPai(append, Tagbox);
            });

        }).catch((erro) =>{
            console.log("Error")
        })
    }

    // NEXT EPS
    const btnNext = document.querySelector(".next");
    let count = Number(2)
    const proximo = ()=>{
        EpisodiosRick(count ++)
    }
    btnNext.addEventListener("click", proximo);
    
}