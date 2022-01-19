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
    for(let ingredientIndex = 0; ingredientIndex < 2; ingredientIndex++){
      let ingredient = recipe['ingredients'][ingredientIndex];
      console.log(`ingredient is ${ingredient}`);
  //check ingredient 1 
      if(ingredient === bakeryA[ingredientIndex]){
        // console.log(`${ingredient} matches ${bakeryA[ingredientIndex]}`);
        inA = true;
      } else if (ingredient === bakeryB[ingredientIndex]){
        // console.log(`${ingredient} matches ${bakeryB[ingredientIndex]}`);
        inB = true;
      } 
      //ingredient not found, move to the next recipe
 
    //if inA and inB - you have a match!
      console.log(`inA is ${inA}`);
      console.log(`inB is ${inB}`);
    }
    }




chooseRecipe(bakeryA, bakeryB, recipes);