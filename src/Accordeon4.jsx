import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

function Accordeon4(props) {
  const [open, setOpen] = useState('');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div>
      <Accordion flush open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">Alasita</AccordionHeader>
          <AccordionBody accordionId="1">
            <p>Celebrada cada 24 de enero, esta festividad aymara conmemora el año nuevo andino. Durante la Alasita se venden miniaturas de todo tipo, incluyendo alimentos, 
                como una forma de atraer la abundancia y la prosperidad, entre estos alimentos puedes encontrar las brochetas con anticucho o las de algodon, tambien las mazanas acarameladas.</p>
          </AccordionBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader targetId="2">Carnaval</AccordionHeader>
          <AccordionBody accordionId="2">
            <p>El Carnaval boliviano es una de las celebraciones más coloridas y animadas de Sudamérica. Durante esta festividad se preparan una gran variedad de platos típicos, 
                como el sillpancho, el pique a lo macho y las salteñas.</p>
          </AccordionBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader targetId="3">Corpus Christi</AccordionHeader>
          <AccordionBody accordionId="3">
          <p>Celebrada 60 días después del Domingo de Resurrección, esta festividad religiosa se caracteriza por la elaboración de altares adornados con frutas, pan y otros alimentos 
          que en cierto casos incluso pueden tener cierto significado para los muertos.</p>
          </AccordionBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader targetId="4">Fiesta de San Juan</AccordionHeader>
          <AccordionBody accordionId="4">
          <p>Celebrada el 24 de junio, esta festividad pagana tiene raíces andinas y europeas. Durante la fiesta de San Juan se realizan fogatas y se preparan platos típicos como el api y el pastel 
          de choclo.</p>
          </AccordionBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader targetId="5">Fiesta de la Virgen de Urkupiña</AccordionHeader>
          <AccordionBody accordionId="5">
            <p>Una de las festividades religiosas más importantes de Bolivia, celebrada en agosto en la ciudad de Quillacollo. Durante esta festividad se preparan una gran variedad 
               de platos típicos, como el lechón, el chancho al horno y el picante de pollo.</p>
          </AccordionBody>
        </AccordionItem>

      </Accordion>
    </div>
  );
}

export default Accordeon4;