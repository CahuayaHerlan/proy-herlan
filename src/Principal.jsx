import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Table, List } from 'reactstrap';

import "./Uno.css"
import Carrusel from './Carrusel';
import Accordeon from './Accordeon';

function Uno()
{
    return(
        <div className='hijo1'>
            <div className='cont1'>
                <b><h2>Introduccion</h2></b>
                <h5><p><i>Descubre la riqueza de la gastronomía boliviana a través de sus sabores únicos</i></p></h5>
            </div>

            <div className='cont2'>
                <Carrusel></Carrusel>
            </div>

            <div className='cont3'>
                <Card
                className="my-2"
                style={{
                    width: '25rem'
                }}
                >
                <CardBody>
                    <CardTitle tag="h5">
                    <b>Bienvenidos a la Gastronomía Boliviana</b>
                    </CardTitle>
                    <CardText>
                    La cocina de Bolivia es un reflejo de su rica diversidad cultural y geográfica. Desde el Altiplano hasta los Valles y el Oriente, cada región ofrece sabores 
                    únicos que combinan tradiciones indígenas, influencias europeas y africanas. Ingredientes como la papa, el maíz, la quinua y el charque son fundamentales en 
                    los platos típicos que definen la identidad de cada comunidad. La gastronomía boliviana no solo es un deleite para el paladar, sino también un medio para 
                    entender la historia y la cultura del país. Descubre los sabores auténticos de Bolivia a través de sus mercados, festividades y platos tradicionales.
                    </CardText>
                </CardBody>

                </Card>
            </div>

            <div className='cont4'>
                <Accordeon></Accordeon>
            </div>

        </div>
    )
};

// export default Uno

import Modal2 from './Modal_2';
function Dos()
{
    return(
        <div className='hijo2'>
            <div className='cont1'>
            <h2><b>Platos en cada Departamento</b></h2>
                <p><b>Los platos tipicos de cada departamento tienen sus propios trucos, ya sea en el sabor o tecnicas gastronomas dentro del mismo, aunque se podria mencionar que
                    pese a ser de cierta manera distintos, muchas veces se comparten ingredientes, es interesante como en la cocina todo puede cambiar con algun metodo diferente
                    de algun modo</b></p>
            </div>

            <div className='cont2'>
            <Table>
            <thead>
                <tr>
                <th>
                    #
                </th>
                <th>
                    Departamento
                </th>
                <th>
                    Comida Tipica
                </th>
                <th>
                    Ingredientes
                </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">
                    1
                </th>
                <td>
                    La Paz
                </td>
                <td>
                    Plato Paceño
                </td>
                <td>
                    Chuño, choclo, queso, carne de res y habas.
                </td>
                </tr>
                <tr>
                <th scope="row">
                    2
                </th>
                <td>
                    Cochabamba
                </td>
                <td>
                    Piquemacho
                </td>
                <td>
                    Trozos de carne de res, salchichas, papas fritas, huevos y salsa picante.
                </td>
                </tr>
                <tr>

                <th scope="row">
                    3
                </th>
                <td>
                    Santa Cruz
                </td>
                <td>
                    Majadito
                </td>
                <td>
                    Arroz cocido con charque o pollo, plátano frito y huevo
                </td>
                </tr>

                <tr>
                <th scope="row">
                    4
                </th>
                <td>
                    Potosi
                </td>
                <td>
                K’ala Phurka
                </td>
                <td>
                Sopa espesa de maíz con carne y piedra volcánica caliente                
                </td>
                </tr>

                <tr>
                <th scope="row">
                    5
                </th>
                <td>
                    Oruro
                </td>
                <td>
                    Charquekan
                </td>
                <td>
                    Charque desmenuzado con mote, papa, huevo y ají.                
                    </td>
                </tr>
                <tr>
                <th scope="row">
                    6
                </th>
                <td>
                    Chuquisaca
                </td>
                <td>
                    Mondongo
                </td>
                <td>
                    Carne de cerdo en salsa de ají con mote y chuño.
                </td>
                </tr>

                <tr>
                <th scope="row">
                    7
                </th>
                <td>
                    Tarija
                </td>
                <td>
                    Saice
                </td>
                <td>
                    Carne molida en salsa picante con arroz y papas.
                </td>
                </tr>

                <tr>
                <th scope="row">
                    8
                </th>
                <td>
                    Beni
                </td>
                <td>
                    Patarasca
                </td>
                <td>
                    Pescado cocido en hojas de plátano con especias.
                </td>
                </tr>

                <tr>
                <th scope="row">
                    9
                </th>
                <td>
                    Pando
                </td>
                <td>
                    Sudado de Pescado
                </td>
                <td>
                    Caldo espeso de pescado con plátano y arroz.
                </td>
                </tr>
            </tbody>
            </Table>
            </div>

            <div>
                <Modal2></Modal2>
            </div>

        </div>
    )
};
// export default Dos

import Carrusel3 from './Carrusel3';
function Tres()
{
    return(
        <div className='hijo3'>
            <div>
                <h2>Mercados Populares: Un Viaje a los Sabores de Bolivia</h2>
            </div>

            <div>
                <Carrusel3></Carrusel3>
            </div>

            <div>
            <Table>
            <thead>
                <tr>
                <th>
                    #
                </th>
                <th>
                    Departamento
                </th>
                <th>
                    Mercado
                </th>
                <th>
                    Descripcion
                </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">
                    1
                </th>
                <td>
                    La paz
                </td>
                <td>
                Mercado de las Brujas
                </td>
                <td>
                    Aunque es famoso por sus rituales y productos esotéricos, también ofrece una gran variedad de alimentos andinos, como quinoa, papas nativas, hierbas medicinales y carnes exóticas.
                </td>
                </tr>

                <tr>
                <th scope="row">
                    2
                </th>
                <td>
                    Cochabamba
                </td>
                <td>
                Mercado Central
                </td>
                <td>
                    Un laberinto de puestos donde encontrarás todos los ingredientes necesarios para preparar un delicioso silpancho o un majadito. Además de frutas, verduras y carnes, podrás encontrar productos artesanales y especias.
                </td>
                </tr>

                <tr>
                <th scope="row">
                    3
                </th>
                <td>
                    Santa Cruz
                </td>
                <td>
                Mercado Central Abasto
                </td>
                <td>
                    El mercado más grande de la ciudad, donde se puede encontrar una amplia variedad de productos, desde frutas tropicales hasta carnes exóticas como el majás.
                </td>
                </tr>

                <tr>
                <th scope="row">
                    4
                </th>
                <td>
                    Oruro
                </td>
                <td>
                    Mercado Central
                </td>
                <td>
                    El mercado central de Oruro es conocido por sus productos andinos, como la quinua, la oca y la papa.
                </td>
                </tr>

                <tr>
                <th scope="row">
                    5
                </th>
                <td>
                    Potosi
                </td>
                <td>
                Mercado Central
                </td>
                <td>
                    En Potosí, el mercado central ofrece una gran variedad de productos locales, como el charque, la quinoa y las habas.tter
                </td>
                </tr>

                <tr>
                <th scope="row">
                    6
                </th>
                <td>
                    Tarija
                </td>
                <td>
                Mercado Central                
                </td>
                <td>
                    El mercado central de Tarija es famoso por sus productos agrícolas, como el vino, el aceite de oliva y las frutas.
                </td>
                </tr>

                <tr>
                <th scope="row">
                    7
                </th>
                <td>
                    Beni y Pando
                </td>
                <td>
                Mercado Central                
                </td>
                <td>
                    En estos departamentos, los mercados se caracterizan por la abundancia de productos de la selva, como la yuca, el plátano, el pescado y la carne de monte.
                </td>
                </tr>

                <tr>
                <th scope="row">
                    8
                </th>
                <td>
                    Chuquisaca
                </td>
                <td>
                Mercado Central                
                </td>
                <td>
                Este es uno de los mercados más grandes y conocidos de la ciudad. Ofrece una amplia variedad de productos frescos, carnes, quesos, frutas, verduras y productos 
                artesanales. Además, cuenta con varios comedores populares donde puedes degustar platos típicos de la región.
                </td>
                </tr>

            </tbody>
            </Table>
            </div>

        </div>        
)
};
// export default Tres

import "./cartilla.css"
import "./cuatro.css"
import Accordeon4 from './Accordeon4';
import Carrusel4 from './Carrusel4';

function Cuatro()
{
    return(
        <div className='hijo4'>
            <div className='intro'>
                <h2>Festividades Gastronomicas Bolivianas</h2><br />
                <p>Estas festividades son muy curiosas debido a que al ser bolivia un lugar muy diverso, puedes encontrarte con muchas sorpresas entre un departamento a otro
                    pero entre las celebraciones mayromente es algo que compartimos entre todos, claro un departamento lo puede hacer a su manera, y ahi esta lo curioso en que
                    podemos celebrar la misma festividad y cada uno tiene su propio toque, y en lo que mas se diversa es justamente en la gastronomia
                </p>
            </div>

            <div className='card'>
                <img className='img' src="./bolivia.jpg" alt="" />
                <p>Las festividades en Bolivia son una explosión de color, música y, por supuesto, ¡delicados sabores! Muchas de estas celebraciones giran en torno a la 
                   comida, convirtiendo cada evento en una verdadera fiesta para el paladar.</p>
            </div>

            <div className='carr'>
                <Carrusel4></Carrusel4>
            </div>

            <div className='acc'>
                <Accordeon4></Accordeon4>
            </div>

            <div className='tabla'>
                <strong><h5>¿Que hacen que estas festividades sean tan especiales desde el punto gastronomico?</h5></strong>
            <Table striped>
            <thead>
                <tr>
                <th>
                    #
                </th>
                <th>
                    Razon
                </th>
                <th>
                    Descripcion
                </th>
                
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">
                    1
                </th>
                <td>
                Platos tradicionales
                </td>
                <td>
                Durante estas celebraciones se preparan platos típicos que se transmiten de generación en generación, preservando así las tradiciones culinarias de cada región.
                </td>
                </tr>

                <tr>
                <th scope="row">
                    2
                </th>
                <td>
                Ofrendas
                </td>
                <td>
                Muchos de los platos preparados durante las festividades se ofrecen a los dioses o a los santos como una muestra de agradecimiento.
                </td>
                </tr>

                <tr>
                <th scope="row">
                    3
                </th>
                <td>
                Comunidad
                </td>
                <td>
                Las festividades gastronómicas son una oportunidad para reunirse con familiares y amigos y compartir una comida en comunidad.
                </td>
                </tr>

                <tr>
                <th scope="row">
                    4
                </th>
                <td>
                Experiencia sensorial
                </td>
                <td>
                La comida es solo una parte de la experiencia. Los colores, los aromas y los sabores se combinan para crear una experiencia sensorial única.
                </td>

                </tr>
            </tbody>
            </Table>
            </div>
        </div>
    )
};
// export default Cuatro

import Accordeon5 from './Accordeon5';
import Accordeon_5 from './Accordeon_5';
import Carrusel5 from './Carrusel5';
import Carrusel_5 from './Carrusel_5';
import "./Cinco.css"

function Cinco()
{
    return(
        <div className='hijo5'>
            <div className='uno'>
                <h2>Postres Tipicos de Bolvia</h2>
                <p>La gastronomía boliviana no solo destaca por sus platos principales, sino también por una amplia variedad de postres y bebidas que deleitan el paladar. 
                    Estas delicias dulces son el resultado de una mezcla de influencias indígenas, españolas y otras culturas, dando como resultado una oferta gastronómica única 
                    y diversa.</p>
            </div>

            <div className='dos'>
                <Accordeon5 />
            </div>

            <div className='tres'>
                <Accordeon_5 />
            </div>

            <div className='cuatro'>
                <Carrusel5 />
            </div>

            <div className='cinco'>
                <Carrusel_5 />
            </div>
        </div>
    )
};
// export default Cinco

import "./cartilla6.css"
import "./seis.css"

function Seis()
{
    return(
        <div className='hijo6'>
            <div className='seis'>
                <h2>La Influencia Cultural en la Cocina Boliviana</h2>
                <p><b><i>La cocina boliviana es un rico mosaico de sabores y tradiciones que refleja la diversidad cultural del país. A lo largo de su historia, Bolivia ha sido 
                influenciada por diversas culturas, las cuales han dejado su huella en la gastronomía.</i></b></p>
            </div>

            <div className='siete'>
                <strong><h4><u>Principales influencias culturales en la cocina boliviana</u></h4></strong>
                <List>
                    <li>
                        <strong>Culturas precolombinas</strong>
                        <i><p style={{ fontFamily:'cursive' }}> Las culturas indígenas de Bolivia, como los aymaras y los quechuas, aportaron una gran variedad de ingredientes y técnicas culinarias. 
                            Muchos de los platos tradicionales bolivianos tienen sus raíces en estas culturas, como la quinoa, la papa y la llama.</p></i>
                    </li>
                    <li>
                        <strong>Influencia española</strong>
                        <i><p style={{fontFamily:'cursive'}}>La colonización española introdujo nuevos ingredientes, técnicas culinarias y utensilios. La carne de cerdo, el trigo, 
                            el arroz y el azúcar se convirtieron en elementos fundamentales de la cocina boliviana.</p></i>
                    </li>
                    <li>
                        <strong>Influencia africana</strong>
                        <i><p style={{fontFamily:'cursive'}}>Los esclavos africanos traídos a América introdujeron nuevos ingredientes y técnicas culinarias, como el ají y el plátano. 
                            Su influencia se nota especialmente en la costa boliviana.</p></i>
                    </li>
                    <li>
                        <strong>Influencia asiática</strong>
                        <i><p style={{fontFamily:'cursive'}}>En los últimos años, la influencia asiática, especialmente la china, ha sido cada vez más evidente en la gastronomía boliviana. 
                            Se pueden encontrar numerosos restaurantes chinos en las principales ciudades y algunos platos fusiones entre la cocina boliviana y la china.</p></i>
                    </li>
                </List>
            </div>

            <div className='ocho'>
                <div className='card'>
                    <img className='img' src="./gastronomia.jpg" alt="" />
                    <p>Las festividades en Bolivia son una explosión de color, música y  por supuesto, ¡delicados sabores! Muchas de estas celebraciones giran en torno a la 
                    comida, convirtiendo cada evento en una verdadera fiesta para el paladar.</p>
                </div>
            </div>

            <div className='nueve'>
                <strong><u><h4>¿Cómo se manifiesta esta influencia cultural en la cocina boliviana?</h4></u></strong>
                <List>
                    <li>
                        <strong>Ingredientes</strong>
                        <i><p style={{fontFamily:'cursive'}}>La cocina boliviana utiliza una amplia variedad de ingredientes, desde los productos nativos como la quinoa y la papa, 
                            hasta ingredientes introducidos por los españoles, como el trigo y el arroz.</p></i>
                    </li>

                    <li>
                        <strong>Técnicas culinarias</strong>
                        <i><p style={{fontFamily:'cursive'}}>Las técnicas culinarias bolivianas son una mezcla de técnicas indígenas y españolas. Por ejemplo, el horneado, el 
                            asado y el guisado son técnicas muy comunes.</p></i>
                    </li>

                    <li>
                        <strong>Sabor</strong>
                        <i><p style={{fontFamily:'cursive'}}>La cocina boliviana se caracteriza por sus sabores intensos y especiados. El ají es uno de los ingredientes más 
                            utilizados, aportando un toque picante a muchos platos.</p></i>
                    </li>

                    <li>
                        <strong>Platos</strong>
                        <i><p style={{fontFamily:'cursive'}}> La diversidad cultural de Bolivia se refleja en la gran variedad de platos que existen, desde los platos más 
                            tradicionales hasta los platos fusión.</p></i>
                    </li>
                </List>
            </div>

            
        </div>
    )
};
// export default Seis

import "./Principal.css";
function Principal() {
    return (
        <div className='padre'>
            <h1>Platos Tipicos de Bolivia</h1> 
            <ul className='menu'>
                <li><Link to="/"> Introduccion </Link></li>
                <li><Link to="/dos"> Platos Tipicos </Link></li>
                <li><Link to="/tres"> Mercados </Link></li>
                <li><Link to="/cuatro"> Festividades</Link></li>
                <li><Link to="/cinco"> Postres Tipicos</Link></li>
                <li><Link to="/seis"> Influencia Cultural</Link></li>
            </ul>

            <Routes>
                <Route path='/' element={< Uno />}></Route>
                <Route path='/dos' element={< Dos />}></Route>
                <Route path='/tres' element={< Tres />}></Route>
                <Route path='/cuatro' element={< Cuatro />}></Route>
                <Route path='/cinco' element={< Cinco />}></Route>
                <Route path='/seis' element={< Seis />}></Route>
            </Routes>

            <div className='pie'>
                <p>2024 Platos Típicos de Bolivia. Realizado por: Cahuaya Ticona Herlan Kory</p>
            </div>

        </div>
        
  )
};

export default Principal;