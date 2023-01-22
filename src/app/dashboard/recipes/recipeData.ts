export interface Recipe {
  id: number
  name: string
  description: string
  ingredients: string[]
  cookTime?: string
  tags?: string[]
  directions: string
}



export const RECIPES: Recipe[] = [
    {
        id: 1,
        name: 'Recipe 1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptatem natus odio dolorum nam reiciendis fugit velit dolores in inventore? Soluta dicta accusantium nostrum saepe.',
        ingredients: ['Cheese', 'Eggs', 'Bacon'],
        cookTime: '15 minutes',
        tags: ['Breakfast', 'Easy'],
        directions: 'In one bowl, combine the Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptatem natus odio dolorum nam reiciendis fugit velit dolores in inventore? Soluta dicta accusantium nostrum saepe.'
    },
    {
        id: 2,
        name: 'Recipe 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptatem natus odio dolorum nam reiciendis fugit velit dolores in inventore? Soluta dicta accusantium nostrum saepe.',
        ingredients: ['Ground Turkey', 'Tomato', 'Lettuce', 'pickles'],
        cookTime: '30 minutes',
        tags: ['Dinner', '30 minutes'],
        directions: 'In one bowl, combine the Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptatem natus odio dolorum nam reiciendis fugit velit dolores in inventore? Soluta dicta accusantium nostrum saepe.'
    }
]