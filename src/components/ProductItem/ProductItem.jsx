import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import "./ProductItem.scss";
import shirt1 from "../../assets/images/shirt1.png";
import shirt2 from "../../assets/images/shirt2.png";
import icon1 from "../../assets/images/icons/icon1.svg";
import icon2 from "../../assets/images/icons/icon2.svg";
import icon3 from "../../assets/images/icons/icon3.svg";

export default function ProductItem() {
  const params = useParams();
  const id = params.id;
  const [item, setItem] = useState();

  useEffect(() => {
    axios.get(`http://localhost:5050/api/products/${id}`).then((res) => {
      console.log(res.data);
      setItem(res.data);
    });
  }, []);

  if (!item) {
    return <div>Loading...</div>;
  }

  const sentences = item.description.split(". ");

  return (
    <>
      <div className="page">
        <div className="prod">
          <div className="prod__img">
            <img className="prod__img--image" src={item.img} alt="" />
          </div>
          <div className="prod__detail">
            <h2 className="prod__name">{item.name}</h2>
            {sentences.map((sentence, index) => (
              <h4 className="prod__details" key={index}>
                {sentence}
              </h4>
            ))}
            <h3 className="prod__price">{item.price_range}</h3>
            <div className="prod__brands">
              <p>Available on</p>
              <div className="prod__flex-container">
                <div className="prod__avail-container">
                  <img className="prod__avail" src={icon2}></img>
                </div>
                <div className="prod__avail-container">
                  <img className="prod__avail" src={icon3}></img>
                </div>

                <div className="prod__avail-container">
                  <img className="prod__avail" src={icon1}></img>
                </div>
              </div>
            </div>
          </div>
          <div className="prod__similar">
            <h3 className="prod__sdetails">
              Similar Product with a High Eco Rating
            </h3>
            {/* temp images */}
            <div className="prod__simg">
              <img className="prod__suggest" src={shirt1} alt="" />
              <img className="prod__suggest" src={shirt2} alt="" />
            </div>
          </div>
        </div>
        <div className="info">
          <div className="eco">
            <div className="eco__head">
              <h2 className="eco__title">Eco Rating</h2>
              <div className="eco__cont">
                <p className="eco__bubble">Eco-Friendly packaging</p>
                <p className="eco__bubble">Sustainable Materials</p>
              </div>
            </div>

            <div className="graphs">
              <div className="graphs__sect">
                <p className="graphs__title">Carbon Emissions</p>
                <div className="graphs__meter">
                  <div className="graphs__bubble1"></div>
                </div>
              </div>
              <div className="graphs__sect">
                <p className="graphs__title">Recyclability</p>
                <div className="graphs__meter">
                  <p className="graphs__bubble2"></p>
                </div>
              </div>
              <div className="graphs__sect">
                <p className="graphs__title">Energy Consumption</p>
                <div className="graphs__meter">
                  <p className="graphs__bubble3"></p>
                </div>
              </div>
              <div className="graphs__sect">
                <p className="graphs__title">Sustainable Materials</p>
                <div className="graphs__meter">
                  <p className="graphs__bubble4"></p>
                </div>
              </div>
            </div>
          </div>

          <div className="score">
            <div className="score__bubble">
              <p className="score__score">
                <span className="rating">{item.eco_rating}</span>/100
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
