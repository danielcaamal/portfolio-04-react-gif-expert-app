
import { GiphInterface } from "../interfaces";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category } : { category: string }) => {

    const {images, isLoading} = useFetchGifs(category);
    
    return (
        <>
            <h3 id="gif-grid-title">{category}</h3>
            {isLoading && (<h2 id="gif-grid-loading">Loading...</h2>)}
            <div className="card-grid" id="gif-grid-card">
                {images.map((image: GiphInterface) => (
                    <GifItem 
                        key={image.id}
                        {...image}
                    />
                ))}
            </div>
        </>
    )       
}