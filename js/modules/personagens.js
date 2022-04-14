export default function Api (){

    Characters() 

    //   CONTAINER
    const btnNext = document.querySelector(".next");
    const container = document.querySelector(".container");

    // FUNÇÃO DO FILHO DO CONTAINER
    const append = (pai, filho) =>{
        return pai.appendChild(filho);
    }

    // FUNÇÃO PARA CRIAR TAGS
    const createTag = (tag, conteudo) =>{
        const elemento = document.createElement(tag);
        elemento.src = conteudo;
        elemento.innerText = conteudo;
        elemento.innerText = conteudo;
        return elemento;
   }

    // FUNÇÃO PARA COLOCAR AS TAGS
    const createPai = (subtag, subclasse, conteudo) =>{
        const app = document.createElement(subtag);
        app.classList.add(subclasse);
        app.appendChild(conteudo);
        return app;
    }

    // FUNÇÃO DO FILHA DA FUNÇÃO ACIMA
    const createsubPai = (subtag, subclasse, name, gender, alive, origin) =>{
        const app = document.createElement(subtag);
        app.classList.add(subclasse);
        app.appendChild(name);
        app.appendChild(gender);
        app.appendChild(alive);
        app.appendChild(origin);
        return app;
    }
    
    // API
   async function Characters(pages, names){
        let url = `https://rickandmortyapi.com/api/character/?page=${pages}`;

        const requirePersonagens = await fetch(url, {})
        .then(respo => respo.json())
        .then((data) => {

            const banco = data.results;

            banco.forEach((datas) => {

                // CRIAR TAGS
                const imagens = datas.image;
                let tagImg = createTag("img", imagens);

                const nomes = datas.name;
                let tagName = createTag("h2", nomes);

                const genero = datas.gender.toLowerCase();
                let tagGenero = createTag("span", genero);
                let h3 = createTag("h3", "Gender:");

                const alive = datas.status.toLowerCase();
                let tagAlive = createTag("span", alive)

                let Alive = createTag("h3", "Status:")

                const origem = datas.origin.name;
                let tagOrigin = createTag("span", origem);

                let origi = createTag("h3", "Origin:")


                let singleDiv = createsubPai("div", "single", tagName, h3, Alive, origi);
                const TagPai = createPai("div", "box", tagImg);

                append(TagPai, singleDiv);
                append(container, TagPai);
                append(h3, tagGenero);
                append(Alive, tagAlive);
                append(origi, tagOrigin);
            })

        }).catch((erro) =>{
            console.log("Error");
        })
    }

    // SEARCH 
        const btnSearch = document.querySelector(".pesquisar");

        function search (){

            const input = document.querySelector(".achar");

            if(input.value === ""){
                alert("erro preencha o campo")
            }else{

                btnNext.classList.add("desactive");

                
                async function buscar(names){

                    let subUrl = `https://rickandmortyapi.com/api/character/?name=${names}`;

                    container.innerHTML = "";

                    const requireName = await fetch(subUrl, {})
                    .then(response => response.json())
                    .then((data) =>{

                        const personagens = data.results;

                        personagens.forEach((item) =>{

                            const img = item.image;
                            let tagSubImg = createTag("img", img);

                            const title = item.name;
                            let createTitle = createTag("h2", title);

                            const generoSub = item.gender.toLowerCase();
                            let spanG = createTag("span", generoSub);

                            let Sh3 = createTag("h3", "Gender:");
                            
                            const alive = item.status.toLowerCase();
                            let tagAlive = createTag("span", alive);

                            let Alive = createTag("h3", "Status:");

                            const origem = item.origin.name;
                            let tagOrigin = createTag("span", origem);

                            let origi = createTag("h3", "Origin:");

                            let divSingle = createsubPai("div", "single", createTitle, Sh3, Alive, origi);

                            const box2 = createPai("div", "box", tagSubImg);

                            append(container, box2);
                            append(box2, divSingle);
                            append(Sh3, spanG);
                            append(Alive, tagAlive);
                            append(origi, tagOrigin);
                        })

                    })
                    .catch((erro) =>{
                        console.log("Error");
                    })
                }

                buscar(input.value);

            }
        }
        btnSearch.addEventListener("click", search);

    let count = Number(2);
    const next = () =>{
        Characters(count ++)
    }
    btnNext.addEventListener("click", next);
}