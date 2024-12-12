import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

function Accordeon_5(props) {
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
        <h5><strong>Bebidas Tipicas de Bolivia</strong></h5>
        <p><b><i>Las bebidas bolivianas son refrescantes y llenas de sabor. Algunas de las más populares incluyen:</i></b></p>
      <Accordion flush open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">Api</AccordionHeader>
          <AccordionBody accordionId="1">
            <p><b><i>Una bebida caliente hecha a base de maíz morado, canela y clavo de olor. Se suele servir con pastel de choclo o buñuelos.</i></b></p>
          </AccordionBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader targetId="2">Chicha</AccordionHeader>
          <AccordionBody accordionId="2">
            <p><b><i>Una bebida fermentada hecha a base de maíz, yuca o frutas. Existen diferentes variedades de chicha, cada una con su sabor único.</i></b></p>
          </AccordionBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader targetId="3">Singani</AccordionHeader>
          <AccordionBody accordionId="3">
            <p><b><i>Un aguardiente de uva blanco, considerado el destilado nacional de Bolivia. Se utiliza para preparar cócteles como el Singani Sour.</i></b></p>
          </AccordionBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader targetId="4">Mate de Coca</AccordionHeader>
          <AccordionBody accordionId="4">
            <p><b><i>Una infusión hecha con hojas de coca, que se consume por sus propiedades energizantes y para combatir el mal de altura.</i></b></p>
          </AccordionBody>
        </AccordionItem>

      </Accordion>
    </div>
  );
}

export default Accordeon_5;