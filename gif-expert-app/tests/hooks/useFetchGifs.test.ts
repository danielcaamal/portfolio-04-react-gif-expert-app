import React from 'react';
import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";
import '@testing-library/jest-dom';
import 'whatwg-fetch';

describe('useFetchGifs', () => {

    test('should return the initial state', () => {
        const { result } = renderHook(() => useFetchGifs('One Punch'));
        const { images, isLoading } = result.current;
        expect(images).toEqual([]);
        expect(isLoading).toBeTruthy();
    });

    test('should return an array of images and loading in false', async () => {
        const { result } = renderHook(() => useFetchGifs('One Punch'));
        await waitFor(
            () => {
                const { images, isLoading } = result.current;
                expect(images.length).toBe(10);
                expect(isLoading).toBeFalsy();
            },
        );
        const { images, isLoading } = result.current;
        expect(images.length).toBe(10);
        expect(isLoading).toBeFalsy();
    });
});