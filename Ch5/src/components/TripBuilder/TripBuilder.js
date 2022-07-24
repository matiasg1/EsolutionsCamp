import React from "react";
import TripItem from "../TripItem/TripItem";
import { createUseStyles } from "react-jss";
import TripButton from "../TripButton/TripButton";

const useStyles = createUseStyles({
  wrapper: {
    marginTop: 100,
    marginBottom: 100,
  },
  cards: {
    display: "flex",
    flexWrap: "wrap",
    padding: [10, 50],
    justifyContent: "center",
  },
});

const places = [
  {
    image: "img01.jpg",
    name: "Termas de Rio Hondo, Santiago del Estero",
    text: "En epocas del MotoGP 2022, aproveche esta increible oferta en un All Inclusive para asistir a un evento que dara mucho que hablar!",
    price: "$48000",
    typeButton: "PROMO",
  },
  {
    image: "img02.jpg",
    name: "Tilcara, Jujuy",
    text: "El destino elegido por la mayoria de los Argentinos en epoca de carnaval sin duda, no te quedes afuera de esta maravillosa celebracion",
    price: "$20000",
    typeButton: "RESERVAR",
  },
  {
    image: "img03.jpg",
    name: "La Cumbre, Cordoba",
    text: "Una Ciudad con un sinfín de lugares y destinos para conocer y disfrutar de las experiencias más diversas. Te invitamos a conocer La Cumbre de una manera diferente.",
    price: "$60000",
    typeButton: "COMPRAR",
  },
];

export default function TripBuilder() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
     
      
      <div className={classes.cards}>
        {places.map((places) => (
          <TripItem
            key={places.name}
            image={__dirname + "images/" + places.image}
            name={places.name}
            text={places.text}
            price={places.price}
            typeButton={places.typeButton}
          />
        ))}
        <TripButton type="CANCELAR" />
      </div>
    </div>
  );
}
