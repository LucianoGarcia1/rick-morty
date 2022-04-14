const preLoad = document.querySelector(".pre-carregamento")

export default function preCarregamento(){
    preLoad.style.opacity = "1";

    setTimeout(() => {
        preLoad.style.opacity = "0";
        preLoad.style.display = "none";
    }, 4000);
}