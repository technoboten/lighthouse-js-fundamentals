bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

const chooseRecipe = (bakeryA, bakeryB, recipes) => {
  //find recipe 1
  let recipe = {};
  //loop through recipes
    for(let recipeIndex = 0; recipeIndex < recipes.length; recipeIndex++){
      console.log(`recipe loop ${recipeIndex}`);
      let recipe = recipes[recipeIndex];
      checkIngredients(recipe);
    }
    //checkIngredients(recipe)
}

const checkIngredients = (recipe) => {
  let inA = false;
  let inB = false;
  let ingredient = recipe['ingredients'][0];
  console.log(`ingredient is ${ingredient}`);
  //check ingredient against arrA 
    for(let ingredientIndex = 0; ingredientIndex < 2; ingredientIndex++){
      if(ingredient === bakeryA[ingredientIndex]){
        console.log(`${ingredient} matches ${bakeryA[ingredientIndex]}`);
        inA = true;
      } else if (ingredient === bakeryB[ingredientIndex]){
        console.log(`${ingredient} matches ${bakeryB[ingredientIndex]}`);
      }
      
    }
    
  //if a match is found set inA to true
    //else if no match, check against b
      //if a match is found, set inB to true
  // console.log(`${ingredient} in A: ${inA}`);
  // console.log(`${ingredient} in B: ${inB}`);
}

chooseRecipe(bakeryA, bakeryB, recipes);