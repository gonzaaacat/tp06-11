import resultados from "./resultados.js"


const preguntitas = document.getElementById("preguntas")


let html =''


resultados.preguntas.forEach((pregunta)=>{
    console.log(pregunta)
    html += `
    <li>
                <p>Pregunta 1: ¿Cuántos titulos Internacionales tiene Belgrano de Córdoba?</p>
                <ul>
                    <li><input type="radio" name="q1" value="A"> 3</li>
                    <li><input type="radio" name="q1" value="B"> 4</li>
                    <li><input type="radio" name="q1" value="C"> 0</li>
                    <li><input type="radio" name="q1" value="D"> 1</li>
                </ul>
            </li> 
    `
}) 

    
preguntitas.innerHTML = html
     
    
