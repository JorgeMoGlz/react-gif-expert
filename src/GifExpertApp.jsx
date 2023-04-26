import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One Punch']);
    
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        // console.log(newCategory)
        // setCategories(cat => [...categories, "Valorant"])
        setCategories([newCategory, ...categories])
    }

    return(
        <>
            {/* Título */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                onNewCategory={(value) => onAddCategory(value)}
            />

            {/* Listado de gif */}
            {
                categories.map( (category) => (
                    <GifGrid 
                    key={category} 
                    category={category}/>
                    ))
                }
                
            

        </>
    )
}
