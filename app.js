var request = new XMLHttpRequest();
        request.open('GET', 'https://nikkajayme.github.io/crescendo_test_1/data.json', true)
        request.onload = function () {

            const app = document.getElementById('root');
            const container = document.createElement('div');
            
            container.setAttribute('class', 'container')

            app.appendChild(container)
            //here
            var data = JSON.parse(this.response)

            if (request.status >= 200 && request.status < 400) {
                data.recipes.forEach((recipes) => {
                    const card = document.createElement('div')
                    card.setAttribute('class', 'card')

                    const recipe = document.createElement('div')
                    recipe.setAttribute('class', 'recipe')

                    const h1 = document.createElement('h1')
                    h1.textContent = recipes.title

                    const p = document.createElement('p')
                    p.textContent = recipes.description

                    const info = document.createElement('div')
                    info.setAttribute('class', 'info')

                    const col_1 = document.createElement('div')
                    col_1.setAttribute('class', 'col-1')

                    const recipeImg = document.createElement('img')
                    recipeImg.src = "public" + recipes.images.small
                    
                    const ingred = document.createElement('ul')
                    ingred.setAttribute('class', 'ingredients')

                    recipes.ingredients.forEach((ingredients) => {
                            const ingredient = document.createElement('li')
                            ingredient.setAttribute('class', 'ingredient')
                            
                                const amount = document.createElement('span')
                                amount.setAttribute('class', 'amount')
                                amount.textContent = ingredients.amount

                                const meas = document.createElement('span')
                                meas.textContent = " " + ingredients.measurement

                                const name = document.createElement('span')
                                name.textContent = " " + ingredients.name

                            ingredient.appendChild(amount)
                            ingredient.appendChild(meas)
                            ingredient.appendChild(name)

                            ingred.appendChild(ingredient)
                            
                        });

                    const quickInfo = document.createElement('div')
                    quickInfo.setAttribute('class', 'quick-info')
                        
                    const serv = document.createElement('p')
                    serv.textContent = "servings: " + recipes.servings

                    const prep = document.createElement('p')
                    prep.textContent = "prep time: " + recipes.prepTime

                    const cook = document.createElement('p')
                    cook.textContent = "cook time: " + recipes.cookTime

                    const col_2 = document.createElement('div')
                    col_2.setAttribute('class', 'col-2')

                    card.appendChild(recipe)

                        recipe.appendChild(h1)
                        recipe.appendChild(p)

                    card.appendChild(info)

                        info.appendChild(col_1)

                            col_1.appendChild(recipeImg)
                            col_1.appendChild(ingred)

                        info.appendChild(col_2)

                            col_2.appendChild(quickInfo)

                                quickInfo.appendChild(serv)
                                quickInfo.appendChild(prep)
                                quickInfo.appendChild(cook)

                    const direct = document.createElement('ol')
                    direct.setAttribute('class', 'directions')

                    recipes.directions.forEach((directions) => {
                            const direction = document.createElement('div')
                            direction.setAttribute('class', 'ingredient')
                            
                                const instruction = document.createElement('li')
                                instruction.setAttribute('class', 'instruction')
                                instruction.textContent = directions.instructions

                            direct.appendChild(instruction)

                            col_2.appendChild(direct)
                            
                        });

                    container.appendChild(card)
                })
            } else {
                const errorMessage = document.createElement('marquee')
                errorMessage.textContent = `Desert might take longer than expected...`
                app.appendChild(errorMessage)
            }

            

            
        }
        request.send()




