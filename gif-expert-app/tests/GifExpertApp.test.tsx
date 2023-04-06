import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'whatwg-fetch';
import { GifExpertApp } from '../src/GifExpertApp';

describe('GifExpertApp component', () => {

    test('renders correctly', () => {
        const { container } = render(<GifExpertApp />);
        expect(container).toBeInTheDocument();
    });

    test('should show the test category title', () => {
        const { container } = render(<GifExpertApp />);
        expect(container.querySelector('#gif-expert-app-title')?.textContent).toBe('GifExpertApp');
    });

    test('should add a new category', () => {
        const { container } = render(<GifExpertApp />);
        const input = container.querySelector('#add-category-input') as HTMLInputElement;
        const form = container.querySelector('#add-category-form') as HTMLFormElement;
        fireEvent.change(input, { target: { value: 'Dragon Ball' } });
        fireEvent.submit(form);

        expect(container.querySelector('#gif-expert-app-title')?.textContent).toBe('GifExpertApp');
    });

    test('should not add a new category when is repeated', () => {
        const { container } = render(<GifExpertApp />);
        const input = container.querySelector('#add-category-input') as HTMLInputElement;
        const form = container.querySelector('#add-category-form') as HTMLFormElement;
        fireEvent.change(input, { target: { value: 'One Punch' } });
        fireEvent.submit(form);

        expect(container.querySelector('#gif-expert-app-title')?.textContent).toBe('GifExpertApp');
    });
});