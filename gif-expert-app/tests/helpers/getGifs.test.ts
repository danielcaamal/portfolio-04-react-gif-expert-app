import * as GetGifs from '../../src/helpers/getGifs';
import 'whatwg-fetch';

describe('getGifs Fetch', () => {
    test('should return 10 elements', async () => {
        const gifs = await GetGifs.getGifs('One Punch');
        expect(gifs.length).toBe(10);
        expect(gifs[0]).toEqual(
            expect.objectContaining({
                id: expect.any(String),
                title: expect.any(String),
                url: expect.any(String),
            })
        )
    });

    test('should return 0 elements', async () => {
        const gifs = await GetGifs.getGifs('');
        expect(gifs.length).toBe(0);
    });
});