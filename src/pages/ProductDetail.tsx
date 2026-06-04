import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Badge, Image } from 'react-bootstrap';
import { IProduct } from '../interfaces/IProduct';
import { UserService } from '../services/UserService';
import proizvod1 from '../images/proizvod1.png';

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<IProduct | null>(null);
  const [currentUserEmail, setCurrentUserEmail] = useState<string | null>(null);
  const [currentUserName, setCurrentUserName] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    const service = new UserService();
    const users = service.getUsers();
    const allProducts = users.flatMap((user) => user.products || []);
    const id = productId ? parseInt(productId, 10) : NaN;
    const found = allProducts.find((item) => item.id === id) || null;
    setProduct(found);

    const userStr = localStorage.getItem('user');
    if (userStr) {
      const user = JSON.parse(userStr);
      setCurrentUserEmail(user.email || null);
      const foundUser = users.find((u) => u.email === user.email);
      if (foundUser) {
        setCurrentUserName(foundUser.name);
      }
    }
  }, [productId]);

  return (
    <div className="page-background page-pregled">
      <Container className="mt-4">
        {currentUserEmail && (
          <div className="mb-4">
            <p className="mb-1">Prijavljen korisnik: <strong>{currentUserName || currentUserEmail}</strong></p>
            <p className="text-muted mb-0">Email: {currentUserEmail}</p>
          </div>
        )}
        {product ? (
          <>
            <Row className="mb-4">
              <Col>
                <h2>Detalji o proizvodu</h2>
                <p className="text-muted">Informacije o odabranom viskiju</p>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col md={12}>
                <div className="p-4 bg-light rounded" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
                  <Row>
                    <Col md={4} className="mb-3 mb-md-0 d-flex align-items-center justify-content-center">
                      <Image src={proizvod1} alt={product.name} fluid rounded />
                    </Col>
                    <Col md={8}>
                      <h3>{product.name}</h3>
                  <p>
                    <strong>Poreklo:</strong> <Badge bg="info">{product.category}</Badge>
                  </p>
                  <p>
                    <strong>Cena:</strong> {product.price.toLocaleString('sr-RS')} din
                  </p>
                  <p>
                    <strong>Geografsko poreklo:</strong> Viski iz regije <Badge bg="info">{product.category}</Badge> ima jedinstvene karakteristike oblikovane lokalnom klimom, vrstom vode i tradicijom destilacije. Svaki region doprosi sa specifičnim ukusom i aromom koji ga razlikuju od ostalih.
                  </p>
                  <p>
                    <strong>Note ukusa:</strong> Svaki viski sadrži kompleksne arome sa kombinacijom voćnih, začinskih i drvenih nota. U noslu dominira miris fermentisanog zrna, voća i često drveta od bačve. Na nepcu, oslunja se bogat ukus sa sladkim, pikantnim ili dimnim karakteristikama, ovisno od regije porekla.
                  </p>
                  <p>
                    <strong>Preporučeni način posluženja:</strong> Viskije se najbolje uživaju čist, blago ohlađen, ili sa nekoliko kocki leda. Dodajte malo vode da otvorite arome i ublažite alkoholnu temperaturu. Konzumirajte sporо i sa razmakom između gutljaja kako biste u potpunosti doživeli sve note. Za hladnije veče, probajte malo zagrejanu čašu.
                  </p>
                  <p>
                    <strong>Preporučena kombinacija:</strong> Viski se odličko kombinuje sa dimljenom ribom, tvrdom, kpravim hlebom ili delikatnim desertima sa tamnijom čokoladom. Izbjegavajte masno jezivica jer mogu da preplače arome.
                  </p>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </>
        ) : (
          <Row className="mb-4">
            <Col>
              <div className="p-4 bg-light rounded" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
                <h2>Proizvod nije pronađen</h2>
                <p>Vratite se na stranicu pregleda i izaberite validan proizvod.</p>
              </div>
            </Col>
          </Row>
        )}
        <Row>
          <Col>
            <Button onClick={() => navigate('/pregled')} variant="secondary">
              Nazad na pregled
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetail;
