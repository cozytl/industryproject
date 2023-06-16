import "./Search.scss";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Search() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const handleInput = (event) => {
    setValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!value) {
      return;
    } else {
      navigate("/products");
    }
  };

  let data = [
    "black t-shirts",
    "black t-shirts 3-pack",
    "black t-shirts variety pack",
    "shirts",
    "jeans",
    "dresses",
    "hoodies",
    "shorts",
    "sweaters",
    "skirts",
    "leggings",
    "jackets",
    "boots",
    "blazers",
    "cardigans",
    "suits",
    "sweatshirts",
    "pants",
    "coats",
    "activewear",
    "swimwear",
    "underwear",
    "socks",
    "hats",
    "scarves",
    "gloves",
    "belts",
    "shoes",
    "sandals",
    "sneakers",
    "apron",
    "earmuffs",
    "flannel",
    "kimono",
    "mittens",
    "nightgown",
    "overalls",
    "pajamas",
    "raincoat",
    "uniform",
    "vest",
    "windbreaker",
    "yoga pants",
    "zip-up hoodie",
  ];
  return (
    <form className="formyform" onSubmit={handleSubmit}>
      <div className="searchbar">
        <input
          className="searchbar__input"
          type="text"
          onChange={handleInput}
          // onClick={()=> handleSubmit()}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleSubmit(event);
            }
          }}
          placeholder="Search Products"
          value={value}
        />
        <div className="search__results">
          {value ? (
            <div className=" searchbar__suggestion searchbar__suggestion--type">
              Apparel
            </div>
          ) : (
            ""
          )}
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
                onClick={() => {
                  setValue(item);
                  navigate("/products");
                }}
                key={item}
                style={{ cursor: "pointer" }}
              >
                {item}
              </div>
            ))}
        </div>
      </div>
    </form>
  );
}
