let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];


const chooseRecipe = (a, b, r) => {
  let count = r.length;
  let result = "";
//loop through recipes 
for(let recipeIndex = 0; recipeIndex < count; recipeIndex++){
  let recipe = r[recipeIndex];
//check bakery A
  for(let ingredIndex = 0; ingredIndex < recipe['ingredients'].length; ingredIndex++){
    // console.log(recipe['ingredients'][ingredIndex]);
    if(recipe['ingredients'][ingredIndex] === a[ingredIndex]){
      result = recipe.name; 
     console.log(`bakery A got a match!`);
    } else {
      result = "you can't make that recipe!";
    }
  }
//check bakery b
for(let ingredIndex = 0; ingredIndex < recipe['ingredients'].length; ingredIndex++){
  // console.log(recipe['ingredients'][ingredIndex]);
  if(recipe['ingredients'][ingredIndex] === b[ingredIndex]){
    result = recipe.name; 
   console.log(`you got a match!`);
  }
}
// console.log(result);
}
}

  chooseRecipe(bakeryA, bakeryB, recipes);

//arr A loop -> when a match is found, add it to result and go to arrB
//if no match is found in arrA, skip to the next recipe
//if a match is found, check recipe against Arr B ** add name to result
//if no match is found, skip to the next recipe
// if a match is found, add it to result and return result

