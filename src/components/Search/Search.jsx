import React from "react";
import { useState } from "react";

export default function Search() {
    const [value, setValue] = useState("");

    const handleInput = (event) => {
        setValue(event.target.value);
    };

    const onSearch = (term) => {
        setValue(term);
        console.log("search: ", term);
    };

    let data = ["aaa", "aab", "aac", "abb", "bbb", "bba", "ccc"];

    return (
        <>
            <div>
                <input
                    type="text"
                    onChange={handleInput}
                    placeholder="placeholding"
                    value={value}
                ></input>
                <button onClick={() => onSearch(value)}>search</button>

                <div>
                    {value !== "" &&
                        data
                            .filter((item) => {
                                const searchTerm = value.toLowerCase();
                                const arrItem = item.toLowerCase();

                                return (
                                    searchTerm &&
                                    arrItem.startsWith(searchTerm) &&
                                    arrItem !== searchTerm
                                );
                            })
                            .map((item) => (
                                <div onClick={() => onSearch(item)} key={item}>
                                    {item}
                                </div>
                            ))}
                </div>
            </div>
        </>
    );
}
