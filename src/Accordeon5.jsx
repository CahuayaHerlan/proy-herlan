import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

function Accordeon5(props) {
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
        <h5><strong>Postres Tipicos de Bolivia</strong></h5>
        <p><b><i>Los postres bolivianos son conocidos por su sabor intenso y sus ingredientes naturales. Algunos de los más populares incluyen:</i></b></p>
      <Accordion flush open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">Buñuelos</AccordionHeader>
          <AccordionBody accordionId="1">
          <p><b><i>Pequeñas bolas de masa fritas, espolvoreadas con azúcar y canela. Son ideales para acompañar una taza de café o chocolate caliente.</i></b></p>
          </AccordionBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader targetId="2">Humintas</AccordionHeader>
          <AccordionBody accordionId="2">
            <p><b><i>Tamales dulces hechos a base de maíz, queso y pasas. Se envuelven en hojas de choclo y se cocinan al vapor.</i></b></p>
          </AccordionBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader targetId="3">Pastel de Choclo</AccordionHeader>
          <AccordionBody accordionId="3">
            <p><b><i>Un postre tradicional boliviano hecho a base de choclo, queso, pasas y azúcar. Se hornea en un molde y se sirve caliente o frío.</i></b></p>
          </AccordionBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader targetId="4">Cuñapé</AccordionHeader>
          <AccordionBody accordionId="4">
          <p><i><b>Panecillos suaves y esponjosos hechos a base de yuca y queso. Son perfectos para acompañar una taza de mate.</b></i></p>
          </AccordionBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader targetId="5">Rosquetes</AccordionHeader>
          <AccordionBody accordionId="5">
          <p><b><i>Pequeñas galletas crujientes hechas a base de harina, huevo y azúcar. Se espolvorean con azúcar y se suelen servir en ocasiones especiales.</i></b></p>
          </AccordionBody>
        </AccordionItem>

      </Accordion>
    </div>
  );
}

export default Accordeon5;