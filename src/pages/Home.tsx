// src/pages/Home.tsx
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import pozadina2 from '../images/pozadina2.png';
import pozadina3 from '../images/pozadina3.png';
import zdravlje from '../images/zdravlje.png';

const Home: React.FC = () => {
  return (
    <div className="page-background page-home">
      <Container className="mt-4">
        {/* Glavni naslov */}
        <Row className="mb-5">
          <Col className="text-center">
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2D5016' }}>
              Dobrodošli na sajt ČISTA KAP
            </h1>
          </Col>
        </Row>

        {/* Red 1: Slika pozadina2 (levo) + tekst o viskiju (desno) */}
        <Row className="mb-5 align-items-center">
          <Col md={6} className="mb-3 mb-md-0">
            <Image src={pozadina2} alt="Whiskey production" fluid rounded style={{ borderRadius: '25%' }} />
          </Col>
          <Col md={6}>
            <div className="p-4 bg-light rounded" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '25%' }}>
              <h3 style={{ color: '#2D5016' }}>Šta je viski?</h3>
              <p>
                Viski (eng. whiskey) je destilisani alkoholni napиtak koji se proizvodi fermentacijom
                zrna, a zatim destilacijom i dozrevanjem u hrastovim bačvama. Poznat je po bogatom
                ukusu, kompleksnim aromama i glatkom završetku. Svaki viski ima svojstvene karakteristike
                zavisno od vrste korišćenog zrna, vode, klimatskih uslova i dužine dozrevanja.
              </p>
              <p>
                ČISTA KAP predstavlja selekciju najfinih viskija sa različitih delova sveta, od
                tradicionalnih škotskih do modernih japanskih i industrijskih viskija.
              </p>
            </div>
          </Col>
        </Row>

        {/* Red 2: Tekst o istoriji i geografiji (levo) + slika pozadina3 (desno) */}
        <Row className="mb-5 align-items-center">
          <Col md={6}>
            <div className="p-4 bg-light rounded" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '25%' }}>
              <h3 style={{ color: '#2D5016' }}>Istorija i geografija</h3>
              <p>
                <strong>Škotska (13. vek)</strong> - Колевка modernog viskija, poznata po Speyside i Islay malts.<br/>
                <strong>Irska (12. vek)</strong> - Pionir destilacije sa blagim i voćnim karakteristikama.<br/>
                <strong>SAD (19. vek)</strong> - Bourbon iz Kentaкиja, od kukuruza sa toplim začinskim notama.<br/>
                <strong>Kanada (19. vek)</strong> - Blendirani viskiji sa glatkim, lako pitkim profilima.<br/>
                <strong>Japan (1923)</strong> - Moderna proizvodnja inspirisana škotskom tradicijom, svetski priznato.<br/>
                <strong>Indija (1982)</strong> - Brzo rastući sektor sa jedinstvenim tropskim aromama.<br/>
              </p>
              <p>
                Svaki region ima sopstvene standarde, zrna i tehnike destilacije koje oblikuju
                karakter i ukus viskija. Ovo je priča o mestima koja su viski učinila svetskim fenomnom.
              </p>
            </div>
          </Col>
          <Col md={6} className="mb-3 mb-md-0">
            <Image src={pozadina3} alt="World map whiskey regions" fluid rounded style={{ borderRadius: '25%' }} />
          </Col>
        </Row>

        {/* Red 3: Slika (levo) + tekst o zdravlju (desno) */}
        <Row className="mb-5 align-items-center">
          <Col md={6} className="mb-3 mb-md-0">
            <Image src={zdravlje} alt="Health consciousness" fluid rounded style={{ borderRadius: '25%' }} />
          </Col>
          <Col md={6}>
            <div className="p-4 bg-light rounded" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '25%' }}>
              <h3 style={{ color: '#2D5016' }}>Zdravlje i odgovorno konzumiranje</h3>
              <p>
                Viski, kao sve alkoholne pиće, treba konzumirati odgovorno i umeren. Opšte preporuke
                zdravstvenih autoriteta su:
              </p>
              <ul>
                <li><strong>Merena konzumacija:</strong> do 30ml dnevno za muškarce, 20ml za žene</li>
                <li><strong>Bez rutine:</strong> nekoliko dana bez konzumacije svake nedelje</li>
                <li><strong>Sa hranom:</strong> nikada na praznom stomaku</li>
                <li><strong>Hidratacija:</strong> pijte vodu između čaša</li>
                <li><strong>Zdravljenje:</strong> izbegavajte ako ste trudni, dojite ili imate probleme sa alkoholom</li>
              </ul>
              <p>
                Cilj nam je da vas upoznamo sa bogativom tradicijom viskija uz puno poštovanja prema
                zdravlju i odgovornom konzumiranju.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
