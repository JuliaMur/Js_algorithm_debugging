/* 7. Check the code below, fix the bug and complete withMetrics to make the final console.log
print out the expect result */

const createRecipe = (name, instructions, time = null, calories = null) => {
    return {
        name,
        instructions,
        time,
        calories,
        printInstructions() {
            console.log(`Instructions for ${this.name}:`)
            console.log(`${this.instructions} for ${this.time} seconds. Contain ${this.calories} calories`)
        }
    }
}

const withMetrics = (time, calories) => {
    return (recipe) => {
        return createRecipe(recipe.name, recipe.instructions, time, calories)
    }
}

const pancakeRecipe = withMetrics(30, 200)(createRecipe('Pancakes', 'Mix flour, eggs, and milk. Cook on a griddle.'))
/** Expected result
 * Instructions for Pancakes:
 * Mix flour, eggs, and milk. Cook on a griddle.for 30 seconds. Contain 200 calories
 */
pancakeRecipe.printInstructions()