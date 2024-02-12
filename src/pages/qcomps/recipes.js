export const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: new Set(['tomatoes', 'cucumber', 'onion', 'olives', 'feta'])
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: new Set(['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple'])
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: new Set(['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini'])
}];

export default function RecipeList() {
  const ingredients = recipes.map(ingredient =>
      <li key={ingredient.id}>
        {ingredient.name}
        <ul>
        <li>
          {Array.from(ingredient.ingredients).map((ing) =>
          <li key={ing.length}>
            {ing}
          </li>)}
        </li>
        </ul>
      </li>);
  return (
    <div>
      <h1>Recipes</h1>
      {ingredients}
    </div>
  );
}