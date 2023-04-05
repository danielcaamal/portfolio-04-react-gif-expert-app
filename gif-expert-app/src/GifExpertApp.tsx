import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories]  = useState<string[]>(['One Punch'])

    const onAddCategory = (newCategory: string) => {
        if (categories.includes(newCategory)) return;
        setCategories((cat:string[]) => ([...cat, newCategory]));
    }

    return (
        <>
            {/* Title */}
            <h1>GifExpertApp</h1>
            {/* Input */}   
            <AddCategory 
                // setCategories={setCategories}
                onNewCategory={onAddCategory}
            />

            {/* List of GifItems */}
            {categories.map((category, index) => (
                <GifGrid 
                    key={category}
                    category={category}
                />
            ))}
                {/* GifItem */}
        </>
    )
}