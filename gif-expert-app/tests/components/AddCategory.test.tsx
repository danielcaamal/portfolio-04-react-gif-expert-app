import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';
import '@testing-library/jest-dom';

describe('AddCategory component', () => {

    const inputValue = 'Test category';

    test('renders correctly', () => {
        const { getByPlaceholderText } = render(<AddCategory />);
        expect(getByPlaceholderText('Search a Gif')).toBeInTheDocument();
    });

    test('calls onNewCategory with input value on form submit', () => {
        const onNewCategoryMock = jest.fn();
        const { container } = render(<AddCategory onNewCategory={onNewCategoryMock} />)
        const input = container.querySelector('#add-category-input') as HTMLInputElement;
        const form = container.querySelector('#add-category-form') as HTMLFormElement;
        fireEvent.change(input, { target: { value: inputValue } });
        fireEvent.submit(form);
        expect(onNewCategoryMock).toHaveBeenCalledWith(inputValue);
    });

    test('does not call onNewCategory when input value is empty', () => {
        const onNewCategoryMock = jest.fn();
        const { container } = render(<AddCategory onNewCategory={onNewCategoryMock} />);
        const form = container.querySelector('#add-category-form') as HTMLFormElement;
        fireEvent.submit(form);
        expect(onNewCategoryMock).not.toHaveBeenCalled();
    });

    test('clears input value on form submit', () => {
        const onNewCategoryMock = jest.fn();
        const { container } = render(<AddCategory onNewCategory={onNewCategoryMock} />)
        const input = container.querySelector('#add-category-input') as HTMLInputElement;
        const form = container.querySelector('#add-category-form') as HTMLFormElement;
        fireEvent.change(input, { target: { value: inputValue } });
        fireEvent.submit(form);
        expect(input.value).toBe('');
    });
});
