export interface GiphyInterface {
    id: string;
    title: string;
    images?: {
        downsized_medium: {
            url: string;
        }
    }
}