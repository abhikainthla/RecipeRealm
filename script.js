const btn = document.getElementById("btn");
btn.addEventListener('click', () => {
    const container = document.getElementById("container");
    const query = document.getElementById("query").value;
    const url= "https://api.api-ninjas.com/v1/recipe?query=" + query;
    fetch(url, {
        method: 'GET',
        headers: { 'X-Api-Key': 'k4dkNLr9n/E+dbQvxAgAoQ==rTw5aofmyw2FRP20'},
    })
    .catch(err => console.log(err))
    .then((response) => response.json())
    .then((data) => {
        container.innerHTML = "";
        if (data.length == 0) {
            alert("No Recipe found");
            return;
        }
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            const card = document.createElement('div');
            card.setAttribute("class", "card");
            const title = document.createElement('h1');
            title.setAttribute("class", "title");
            title.innerText = element.title;
            card.append(title);
            const ingredients = document.createElement('span');
            ingredients.setAttribute("class", "ingredients");
            ingredients.innerText = "Ingredients: ";
            card.appendChild(ingredients);
            const ingredientsList = document.createElement('ul');
            ingredientsList.setAttribute("class", "ingredientlist");
            const str = element.ingredients;
            let arrIng = str.split("|");
            for (let i = 0; i < arrIng.length; i++) {
                const li = document.createElement('li')
                li.appendChild(document.createTextNode(arrIng[i]))
                ingredientsList.appendChild(li)
            }
            card.appendChild(ingredientsList);
            const steps = document.createElement('span');
            steps.setAttribute("class", "ingredients");
            steps.innerText = "Instructions: ";
            card.appendChild(steps);
            const instruction = document.createElement('p');
            instruction.setAttribute("class", "instruction");
            instruction.innerText = element.instructions;
            card.appendChild(instruction);
        
            const servings = document.createElement('span');
            servings.innerText = "Servings: " + element.servings;
            card.appendChild(servings);
        
            container.append(card);
        }
        
    })
})