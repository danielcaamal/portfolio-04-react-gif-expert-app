import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { GifGrid } from '../../src/components/GifGrid';
import 'whatwg-fetch';
import * as UseFetchGifs from '../../src/hooks/useFetchGifs';

describe('GiftGrid component', () => {
    const category = 'Test category';

    test('should show the test loading', () => {
        const spy = jest.spyOn(UseFetchGifs, 'useFetchGifs');
        spy.mockReturnValue({
            images: [],
            isLoading: true,
        })
        const { container } = render(<GifGrid category={category} />);
        expect(container.querySelector('#gif-grid-loading')?.textContent).toBe('Loading...');
    });

    test('should show the test category title', () => {
        const spy = jest.spyOn(UseFetchGifs, 'useFetchGifs');
        spy.mockReturnValue({
            images: [],
            isLoading: true,
        })
        const { container } = render(<GifGrid category={category} />);
        expect(container.querySelector('#gif-grid-title')?.textContent).toBe(category);
    });

    test('should show the test items', () => {
        const spy = jest.spyOn(UseFetchGifs, 'useFetchGifs');
        spy.mockReturnValue({
            images: [
                {
                    id: 'test-id',
                    title: 'test-title',
                    url: 'test-url',
                },
                {
                    id: 'test-id-2',
                    title: 'test-title-2',
                    url: 'test-url-2',
                }
            ],
            isLoading: false,
        })
        const { container } = render(<GifGrid category={category} />);
        expect(container.querySelectorAll('img').length).toBe(2);
    });
})