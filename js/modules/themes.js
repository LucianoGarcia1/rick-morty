const btnThemes = document.querySelector(".thema");

export default function light(){
    document.body.classList.toggle("light");
}
btnThemes.addEventListener("click", light);