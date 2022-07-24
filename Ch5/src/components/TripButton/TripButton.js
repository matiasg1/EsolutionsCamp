import React, { useContext } from "react";
import { createUseStyles } from "react-jss";
import { TripContext } from "../TripMaker/TripMaker";

const useStyles = createUseStyles({
  wrapper: {
    display: "flex",
    justifyContent: "right",
    margin: "0 20px 10px 20px",
  },

  button: {
    color: "#fff",
    height: "37px",
    width: "100px",
    background:
      "linear-gradient(to right, rgb(30, 68, 230) 0%, rgb(30, 68, 230)  50%, rgb(30, 68, 230) 100%)",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  cancelButton: {
    display: "flex",
    justifyContent: "right",
    margin: "480px 40px 0 0",
  },
});

export default function TripButton({ type, name }) {
  const classes = useStyles();
  const { setPlaces, places } = useContext(TripContext);

  const cancelPlace = () => {
    const lastPlace = places[places.length - 1];

    if (lastPlace === "Tilcara, Jujuy" || lastPlace === "La cumbre, Cordoba") {
      console.clear();
      console.log(
        `Su reserva fue cancelada.`
      );
      places.pop();
      setPlaces(places);
    
    } else {
      console.clear();
      console.log("No es posible realizar la cancelacion, por favor contacta al soporte");
    }
  };

  const buttonSelected = (type, name) => {
    switch (type) {
      case "PROMO":
        console.clear();
        setPlaces(name);
        break;

      case "RESERVAR":
        setPlaces(name);
        console.clear();
        console.log(`Su reserva fue realizada, por favor verifique su email".`);
        break;

      case "COMPRAR":
        setPlaces(name);
        console.clear();
        console.log(`Su compra se realizo con exito".`);
        break;

      case "CANCELAR":
        cancelPlace();
        break;

      
    }
  };

  return (
    <div
      className={type !== "CANCELAR" ? classes.wrapper : classes.cancelButton}
    >
      <button
        className={classes.button}
        onClick={() => buttonSelected(type, name)}
      >
        {type}
      </button>
    </div>
  );
}
