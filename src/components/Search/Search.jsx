import React, { useState } from "react";

export default function Search() {
  const [value, setValue] = useState("");

  const handleInput = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("search: ", value);
  };

  //dummy data
  let data = ["aaa", "aab", "aac", "abb", "bbb", "bba", "ccc"];

  return (
    <form className="formyform" onSubmit={handleSubmit}>
      <div className="searchbar">
        <input
          className="searchbar__input"
          type="text"
          onChange={handleInput}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleSubmit(event);
            }
          }}
          placeholder="Search Products"
          value={value}
        />
        {data
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
            <div
              className="searchbar__suggestion"
              onClick={() => setValue(item)}
              key={item}
              style={{ cursor: "pointer" }}
            >
              {item}
            </div>
          ))}
      </div>
    </form>
  );
}
