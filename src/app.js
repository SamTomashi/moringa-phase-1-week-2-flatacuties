let chartacters = []

document.addEventListener("DOMContentLoaded", function(){
    getCharcters()
})


function getCharcters(){
    fetch("https://my-json-server.typicode.com/SamTomashi/moringa-phase-1-week-2-flatacuties/characters", {
        method: "GET",
        headers:{
            "Content-Type":  "application/json"
        }
    }).then(data => data.json())
    .then( response => {
        chartacters = [...response]
        displayCharacters(response)
    })
}

function displayCharacters(characters) {
    const characterbar = document.querySelector("#character-bar")
    for(character of characters){
        const span = document.createElement("span"); //create an element for each character
        span.innerText = character.name;
        span.setAttribute("id", character.id)

        span.addEventListener("click", (event)=>{
            const character = getCharacterById(characters, parseInt(event.target.id));
            diaplayCharacterDetails(character)

        })

        characterbar.appendChild(span);

    }
}
function diaplayCharacterDetails(character){
    const image = document.querySelector("#image");
    image.src = character.image
    // console.log(image.src)
}

function getCharacterById(characters, id){
    return characters.find((character)=>{ 
        return character.id === id
    })
}