import "./ProductItem.scss";
import brand from "../../assets/images/brand.png";
import shirt from "../../assets/images/shirt.jpg";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ProductItem({ props }) {
  const params = useParams();
  const id = params.id;
  const [item, setItem] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:5050/api/product/${id}`).then((res) => {
      setItem(res.data);
    });
  });

  return (
    <>
      <div className="page">
        <div className="prod">
          <div className="prod__img">
            <img className="prod__img--image" src={item.img}></img>
          </div>
          <div className="prod__details">
            <h2 className="prod__name">{item.name}</h2>
            <h4 className="prod__details">{item.description}</h4>
            <h3 className="prod__price">{item.price}</h3>
            <img className="prod__avail" src={brand}></img>
            <img className="prod__avail" src={brand}></img>
            <img className="prod__avail" src={brand}></img>
          </div>
          <div className="prod__similar">
            <h3 className="prod__details">
              Similar Product with a High Eco Rating
            </h3>
            {/* temp images */}
            <img className="prod__simg" src={shirt} alt="" />
            <img className="prod__simg" src={shirt} alt="" />
          </div>
        </div>
        <div className="eco">
          <div className="eco__rating">
            <div className="eco__head">
              <h2 className="eco__title">Eco Rating</h2>
              <p className="eco__bubble">Eco-Friendly packaging</p>
              <p className="eco__bubble">Sustainable Materials</p>
            </div>
            <div className="graphs">
              <div className="graphs__sect">
                <p className="graphs__title">Carbon Emissions</p>
                <p className="graphs__bubble"></p>
              </div>
              <div className="graphs__sect">
                <p className="graphs__title">Recyclability</p>
                <p className="graphs__bubble"></p>
              </div>
              <div className="graphs__sect">
                <p className="graphs__title">Energy Consumption</p>
                <p className="graphs__bubble"></p>
              </div>
              <div className="graphs__sect">
                <p className="graphs__title">Sustainable Materials</p>
                <p className="graphs__bubble"></p>
              </div>
            </div>
          </div>
          <div className="score">
            <div className="score__bubble">
              <p className="score__score">{item.eco_rating}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
