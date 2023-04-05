import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GiphInterface } from "../interfaces/GiphInterface";

export const useFetchGifs = (category: string) => {

    const [images, setImages] = useState<GiphInterface[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        var imgs = await getGifs(category);
        setImages(imgs);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, [category])

    return {
        images,
        isLoading
    }
}