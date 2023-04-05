import { useState } from 'react';


export const AddCategory = ({
    onNewCategory = (newCategory: string) => {},
    // setCategories 
}) => {

    const [inputValue, setInputValue] = useState<string>("");

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inputValue.trim().length <= 1) return;
        // setCategories((cat:string[]) => ([...cat, inputValue]));
        onNewCategory(inputValue);
        setInputValue("");
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Search a Gif"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}