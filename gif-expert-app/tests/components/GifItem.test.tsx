import React from 'react';
import { render } from "@testing-library/react";
import { GifItem } from '../../src/components/GifItem';

describe('GifItem', () => {
    const url = 'https://test.com/';
    const title = 'test';
    const id = '123';

    test('should match with snapshot', () => {
        const { container } = render(<GifItem
            id={id}
            title={title}
            url={url}
        />);
        expect(container).toMatchSnapshot();
    });

    test('should show the image with an url and alt send', () => {
        const { container } = render(<GifItem
            id={id}
            title={title}
            url={url}
        />);
        const { src, alt } = container.querySelector('#gif-item-img') as HTMLImageElement;
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('should show the title send', () => {
        const { container } = render(<GifItem
            id={id}
            title={title}
            url={url}
        />);
        expect(container.querySelector('#gif-item-title')?.textContent).toBe(title);
    });
});