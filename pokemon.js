


// fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
//     .then(response => {
        
//         if (!response.ok){
//             throw new Error("Could not find the pokemon")
//         }

//         return response.json();
//     })
//     .then(data => console.log(data))
//     .catch(error => console.error(error))


const pokemonName = document.getElementById('pokemonName');
const pokemonId = document.getElementById('pokemonId');
const pokemonType = document.getElementById('pokemonType');
const pokemonHeight = document.getElementById('pokemonHeight');
const pokemonWeight = document.getElementById('pokemonWeight');
const imgElement = document.getElementById('pokemonSprite');
    
document.querySelectorAll('p').forEach(element => {
    element.style.display = 'none';
})


async function fetchData(){
    
    try{
        
        const pokemon = document.getElementById('pokemon').value.trim().toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        
        if (!response.ok){
            throw new Error("Could not find the pokemon")
        }
        
        const data = await response.json();

        //Selecting Values
        const name = data['name'].charAt(0).toUpperCase() + data['name'].slice(1);
        const id = data['id'];
        const height = data['height'];
        const weight = data['weight'];
        const pokemonSprite = data['sprites']['other']['official-artwork']['front_default'];
        const types = data['types'];
        // const abilities = data['abilities']
        
        
        //Assigning values
        pokemonName.textContent = `Name: ${name}`;
        pokemonId.textContent = `ID: ${id}`;
        
        if (types.length==1){
            let type1 = types[0]['type']['name'].charAt(0).toUpperCase() + types[0]['type']['name'].slice(1)
            pokemonType.textContent = `Type: ${type1}`;
        }

        else if (types.length==2){
            let type1 = types[0]['type']['name'].charAt(0).toUpperCase() + types[0]['type']['name'].slice(1)
            let type2 = types[1]['type']['name'].charAt(0).toUpperCase() + types[1]['type']['name'].slice(1)

            pokemonType.textContent = `Type: ${type1}, ${type2} `;
        }

        pokemonHeight.textContent = `Height: ${height/10}m`;
        pokemonWeight.textContent = `Weight: ${weight/10}kg`;
        imgElement.src = pokemonSprite;
        imgElement.style.display = 'inline-block';

        document.querySelectorAll('p').forEach(element => {
            element.style.display = 'block';
        })

    }

    catch(error){
        console.error(error);
    }

}
