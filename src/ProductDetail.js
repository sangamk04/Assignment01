import React from "react"
import {useParams} from "react-router-dom"
import productsData from "./productsData"
import styles from './ProductDetail.module.css';
import recipe from "./RespieData";


function ProductDetail() {
    const {productId} = useParams()
    const thisProduct = productsData.find(prod => prod.id === productId)

    const { id, title, ingredients, instructions } = recipe;
    
    return (
        <div className={styles.ProductDetail}>
           

          <div>
      {recipe.map(recipe => (
        <div key={recipe.id}>
          <h1>{recipe.title}</h1>
          <h3>Ingredients:</h3>
          <ul>
            {recipe.ingredients.map(ingredient => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          <h3>Steps:</h3>
          <ol>
            {recipe.instructions.map(instruction => (
              <li key={instruction}>{instruction}</li>
            ))}
          </ol>
        </div>
      ))}
    </div>
           
        </div>
       
    )
}

export default ProductDetail