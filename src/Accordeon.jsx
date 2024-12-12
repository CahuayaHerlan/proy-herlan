import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

function Accordeon(props) {
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div>
      <Accordion open={open} toggle={toggle}>

        <AccordionItem>
          <AccordionHeader targetId="1">Diversidad Regional</AccordionHeader>
          <AccordionBody accordionId="1">
                <p>Resaltar cómo la gastronomía de Bolivia varía considerablemente según la región: el Altiplano, los Valles, los Llanos y la región del Oriente. 
                Cada área tiene sus propios ingredientes, platos típicos y tradiciones culinarias.</p>
          </AccordionBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader targetId="2">Influencias Culturales</AccordionHeader>
          <AccordionBody accordionId="2">
            <p>Mencionar las influencias indígenas, europeas y africanas que han dado forma a la cocina boliviana. Los ingredientes nativos como la papa, el maíz y la quinua se 
                mezclan con influencias españolas, africanas y de otros grupos indígenas, creando una cocina única.</p>
          </AccordionBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader targetId="3">Ingredientes Básico</AccordionHeader>
          <AccordionBody accordionId="3">
            <p>Introducir algunos de los ingredientes más importantes que se utilizan en la cocina boliviana, como el maíz, las papas, la quinua, el ají, el charque, entre otros.
                Estos ingredientes en los platos tipicos son justamente lo que se encontraria en Bolivia, o como tal en los mismos departamentos
            </p>
          </AccordionBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader targetId="4">La Cocina como Parte de la Identidad Cultural</AccordionHeader>
          <AccordionBody accordionId="4">
            <p>Explicar cómo la comida no solo es un medio de sustento, sino una parte integral de las celebraciones, festividades y la vida cotidiana en Bolivia. Los platos no 
            solo representan a las regiones, sino también las tradiciones y valores culturales.</p>
          </AccordionBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader targetId="5">Gastronomía en el Turismo</AccordionHeader>
          <AccordionBody accordionId="5">
            <p>Introducir brevemente cómo los turistas pueden experimentar la gastronomía boliviana a través de rutas gastronómicas, mercados, festivales y la comida en los restaurantes tradicionales.</p>
          </AccordionBody>
        </AccordionItem>
      </Accordion>


    </div>
  );
}

export default Accordeon;