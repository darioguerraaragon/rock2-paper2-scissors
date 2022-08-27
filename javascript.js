const d = document
let btn_play = d.querySelector("#btn_play")
let btn_stop = d.querySelector("#btn_stop")
let cards_b = d.querySelectorAll("#cards-b")
let puntos_a = d.querySelector("#puntos-a")
let puntos_b = d.querySelector("#puntos-b")
let imgs = ["paper.png" , "scissors.png" , "stone.png"]
btn_play.addEventListener("click" , e => {
    intervalo = setInterval(repetir_img , 100)

    function repetir_img (){
        let cards_a = d.querySelector("#cards-a")
        var img_a = Math.floor(Math.random()*3)
        cards_a.innerHTML = `<img src=./fotos-proyecto-dos/${[imgs[img_a]]}>`
        //console.log(imgs[img_a])
        //console.log(img_a) 
        
        
    }

}) 

btn_stop.addEventListener("click" , e =>{
    clearInterval(intervalo)
})

cards_b.forEach(el => {
    el.addEventListener("click" , e =>{
        clearInterval(intervalo)

        //console.log(el.dataset.name)
        if(img_a === 0 && el.dataset.name === "piedra"){
            console.log("perdiste")
        }else if (img_a === 1 && el.dataset.name === "papel"){
            console.log("perdiste")
        }else if (img_a === 2 && el.dataset.name === "tijera"){
            console.log ("perdiste")
        }else {
            console.log("Ganaste !!")
        }
        
    })
})