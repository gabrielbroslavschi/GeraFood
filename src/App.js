import "./App.css";
import geraFoodLogo from "./images/GerafoodLogo.png";
import React, { useState } from "react";
import receitas from "./jsons/receitas.json";

function App() {
  const [isChecked, setIsChecked] = useState(true);

  const [vegan, setVegan] = useState(false);
  const [vegetarian, setVegetarian] = useState(false);

  const [image, setImage] = useState(
    "https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg"
  );
  const [nameRecive, setNameRecive] = useState("Receitas");
  const [ingredients, setIngredients] = useState([]);
  const [preparation, setPreparation] = useState([]);

  const backgroundColorLighModeOn = {
    backgroundColor: "#F3F2F9",
  };

  const backgroundColorLighModeOff = {
    backgroundColor: "#2E2E2E",
    color: "#fff",
  };

  const backgroundColorBodyLighModeOn = {
    backgroundColor: "#F3F2F9",
  };

  const backgroundColorBodyLighModeOff = {
    backgroundColor: "#434343",
    color: "#fff",
  };

  const buttonsRandomFilterLighModeOn = {
    backgroundColor: "#F3F2F9",
  };

  const buttonsRandomFilterLighModeOff = {
    backgroundColor: "#4E4E4E",
    color: "#fff",
  };

  const lighModeCorlorOn = {
    color: "#FF5C00",
  };

  const lighModeCorlorOff = {
    background: "linear-gradient(91deg, #24FF00, #00FFD1, #00FFD1)",
    "background-clip": "text",
    "-webkit-background-clip": "text",
    "-moz-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    "-moz-text-fill-color": "transparent",
  };

  const colorButtonLightModeOn = {
    background: "#FF5C00",
    border: "none",
    color: "white",
  };

  const colorButtonLightModeOff = {
    background: "linear-gradient(91deg, #24FF00, #00FFD1, #00FFD1)",
    color: "#000",
    border: "none",
  };

  const colorButtonFilterLightModeOff = {
    background: "linear-gradient(91deg, #24FF00, #00FFD1, #00FFD1)",
  };

  const handleSwitchChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSwitchChangeVegan = (event) => {
    setVegan(event.target.checked);
  };

  const handleSwitchChangeVegetarian = (event) => {
    setVegetarian(event.target.checked);
  };

  function setSets(obj) {
    setImage(obj.imagem);
    setNameRecive(obj.nome);
    setIngredients(obj.ingredientes);
    setPreparation(obj.Preparo);
  }

  function filterValidator(obj) {
    if (vegan && vegetarian && (obj.vegano || obj.vegetariano)) {
      return obj;
    } else if (vegetarian && obj.vegetariano) {
      return obj;
    } else if (vegan && obj.vegano) {
      return obj;
    } else {
      return 0;
    }
  }

  function objetoAleatorio(array) {
    const indiceAleatorio = Math.floor(Math.random() * array.length);
    let validator;
    console.log(array[indiceAleatorio]);

    if (array[indiceAleatorio].nome === nameRecive) {
      objetoAleatorio(receitas.data);
    } else {
      if (vegan || vegetarian) {
        console.log("entrei no vega/vegetariuan");
        validator = filterValidator(array[indiceAleatorio]);
        console.log("settei o validador =>", validator);
      }

      if (validator !== 0) {
        setSets(array[indiceAleatorio]);
      } else {
        console.log("entrei aqui entrei");
        objetoAleatorio(receitas.data);
      }
    }
  }

  const generateRecipe = () => {
    objetoAleatorio(receitas.data);
  };

  return (
    <div className="App">
      <div
        className="header"
        style={
          isChecked === true
            ? backgroundColorLighModeOn
            : backgroundColorLighModeOff
        }
      >
        <img src={geraFoodLogo} alt={geraFoodLogo} className="Logo"></img>
        <div className="SobreGabrielDevLight">
          <p>Light Mode</p>
          <div className="LighMode">
            <input
              className="lighModeButton"
              type="checkbox"
              name="switch"
              id="switch"
              checked={isChecked}
              onChange={handleSwitchChange}
            ></input>
          </div>
        </div>
      </div>
      <div
        className="body"
        style={
          isChecked === true
            ? backgroundColorBodyLighModeOn
            : backgroundColorBodyLighModeOff
        }
      >
        <div className="buttonsRandom">
          <button
            className="buttonClickRanom"
            style={
              isChecked === true
                ? colorButtonLightModeOn
                : colorButtonLightModeOff
            }
            onClick={generateRecipe}
          >
            Gerar Receita
          </button>
          <div
            className="buttonsRandomFilter"
            style={
              isChecked === true
                ? buttonsRandomFilterLighModeOn
                : buttonsRandomFilterLighModeOff
            }
          >
            <div className="Filter">
              <div>Vegetariano</div>
              <div>
                <input
                  className="filterButtons"
                  type="checkbox"
                  name="switch"
                  id="switch"
                  style={
                    vegetarian === true && isChecked === false
                      ? colorButtonFilterLightModeOff
                      : {}
                  }
                  checked={vegetarian}
                  onChange={handleSwitchChangeVegetarian}
                />
              </div>
            </div>

            <div className="Filter">
              <div>Vegano</div>
              <div>
                <input
                  className="filterButtons"
                  type="checkbox"
                  name="switch"
                  id="switch"
                  style={
                    vegan === true && isChecked === false
                      ? colorButtonFilterLightModeOff
                      : {}
                  }
                  checked={vegan}
                  onChange={handleSwitchChangeVegan}
                ></input>
              </div>
            </div>
          </div>
        </div>
        <div className="recipeRandom">
          <div className="recipeRandomTitle">
            <div
              className="recipeTitle"
              style={isChecked === true ? lighModeCorlorOn : lighModeCorlorOff}
            >
              {nameRecive}
            </div>
          </div>
          <div className="recipeRandomInfo">
            <div className="recipeRandomInfoImage">
              <div className="recipeRandomInfoImagePresents">
                <img className="recipeImage" alt="" src={image} />
              </div>
              <div
                className="recipeTitle"
                style={
                  isChecked === true ? lighModeCorlorOn : lighModeCorlorOff
                }
              >
                Ingredientes
              </div>
              <div className="recipeIngredients">
                {ingredients !== "" ? (
                  <ul>
                    {ingredients.map((ingrediente, index) => (
                      <li key={index}>{ingrediente}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>

            <div className="recipeRandomInfoForm">
              <div className="recipeIngredients">
                {preparation !== "" ? (
                  <ul>
                    {preparation.map((ingrediente, index) => (
                      <li key={index}>{ingrediente}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="footer"
        style={
          isChecked === true
            ? backgroundColorLighModeOn
            : backgroundColorLighModeOff
        }
      >
        <div className="footerInfo">
          <ul>
            <li>Telefone/WhatsApp: (11) 95302-5797</li>
            <li>E-mail: gabrielbroslavschidacosta@gmail.com</li>
            <li>Site Matriz: gabrielbroslavschideveloper.netlify.app</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
