import { GiphInterface, GiphyInterface } from "../interfaces";

export const getGifs = async (category: string) => {
    let api_url = new URL('https://api.giphy.com/v1/gifs/search');
    api_url.searchParams.set('api_key', 'BRs6LUcCnOhBmaPxD6IWpeeAtEYUUmUV')
    api_url.searchParams.set('q', category)
    api_url.searchParams.set('limit', '10')

    const response = await fetch(api_url.toString());
    if (!response.ok) throw new Error(response.statusText);
    const { data } = await response.json();
    const gifs: GiphInterface[] = data.map((img: GiphyInterface) => ({
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
    }));

    return gifs;
}