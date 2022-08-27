const d = document
let puntos_para_a = 0
let puntos_para_b = 0
let btn_play = d.querySelector("#btn_play")
//let btn_stop = d.querySelector("#btn_stop")
let cards_b = d.querySelectorAll("#cards-b")
let puntos_a = d.querySelector("#puntos-a")
let puntos_b = d.querySelector("#puntos-b")
let imgs = ["paper.png" , "scissors.png" , "stone.png"]
let img_a = null
btn_play.addEventListener("click" , e => {
    intervalo = setInterval(repetir_img , 100)

    function repetir_img (){
        let cards_a = d.querySelector("#cards-a")
        img_a = Math.floor(Math.random()*3)
        cards_a.innerHTML = `<img src=./fotos-proyecto-dos/${[imgs[img_a]]}>`
        //console.log(imgs[img_a])
        //console.log(img_a)    
    }

}) 

/*btn_stop.addEventListener("click" , e =>{
    clearInterval(intervalo)
})*/

cards_b.forEach(el => {
    el.addEventListener("click" , e =>{
        clearInterval(intervalo)

        if(img_a === 0 && el.dataset.name === "piedra"){
            puntos_para_a += 1
            puntos_a.innerHTML = `${puntos_para_a}`
        }else if (img_a === 1 && el.dataset.name === "papel"){
            puntos_para_a += 1
            puntos_a.innerHTML = `${puntos_para_a}`
        }else if (img_a === 2 && el.dataset.name === "tijeras"){
            puntos_para_a += 1
            puntos_a.innerHTML = `${puntos_para_a}`
        }else if (img_a === 0 && el.dataset.name === "papel"){
            console.log("empate")
        }else if (img_a === 1 && el.dataset.name === "tijeras"){
            console.log("empate")
        }else if (img_a === 2 && el.dataset.name === "piedra"){
            console.log("Empate")
        }else {
            puntos_para_b += 1
            puntos_b.innerHTML = `${puntos_para_b}`
        }
        
        
    })
})