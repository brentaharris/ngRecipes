export interface Recipe {
  id: number
  name: string
  description: string
  tags?: string[]
}



export const RECIPES: Recipe[] = [
    {
        id: 1,
        name: 'Recipe 1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptatem natus odio dolorum nam reiciendis fugit velit dolores in inventore? Soluta dicta accusantium nostrum saepe.',
        tags: ['Breakfast', 'Easy']
      },
      {
        id: 2,
        name: 'Recipe 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptatem natus odio dolorum nam reiciendis fugit velit dolores in inventore? Soluta dicta accusantium nostrum saepe.',
        tags: ['Dinner', '30 minutes']
      }
]