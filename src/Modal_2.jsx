import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function Modal2(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Mas...
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Resetarios</ModalHeader>
        <ModalBody>
          <p>La tabla mostrada son solo uno de muchos platos o ingredientes que se suele usar
          en el ambito gastronomico tipico de Bolivia, es tan extenso que no cabria en poder dar una
          receta completa de cada plato que tiene para ofrecer Bolivia</p><br/>

          <p>Las comidas típicas de Bolivia tienen influencias de la cocina española e indígena, con una combinación de diferentes ingredientes. Los platos de este país se 
          caracterizan por su rica diversidad, basada en productos agrícolas locales como la papa, por ejemplo.</p><br/> 

          <p>Para ayudarte con esta lista gastronómica, en este artículo enlazado podras ver mas a detalle dichos platos</p><br/>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            <a href="https://www.eabolivia.com/platos-tipicos-de-bolivia.html#google_vignette">Platos de Bolivia</a>
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Modal2;