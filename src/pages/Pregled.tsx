// src/pages/Pregled.tsx
import React, { useState, useEffect } from 'react';
import { Container, Table, Badge, Form, Button, Row, Col, Pagination } from 'react-bootstrap';
import { IUser } from '../interfaces/IUser';
import { IProduct } from '../interfaces/IProduct';

// Jedna jednostavna klasa koja se koristi za dobavljanje podataka
class UserService {
  getUsers(): IUser[] {
    // Simulacija podataka sa markama viskija i njihovim poreklom
    return [
      { 
        id: 1, 
        email: 'pera@example.com', 
        name: 'Pera Perić',
        products: [
          // Škotska
          { id: 101, name: 'Johnnie Walker Black Label', category: 'Škotska', price: 3500, userId: 1 },
          { id: 102, name: 'Macallan 12 Years Old', category: 'Škotska', price: 6500, userId: 1 },
          { id: 103, name: 'Glenmorangie Original', category: 'Škotska', price: 4200, userId: 1 },
          { id: 104, name: 'Glenfiddich 12', category: 'Škotska', price: 5000, userId: 1 },
          { id: 105, name: 'Dalmore King Alexander', category: 'Škotska', price: 7500, userId: 1 },
          { id: 106, name: 'Talisker 10 Years', category: 'Škotska', price: 5200, userId: 1 },
          { id: 107, name: 'Highland Park 18', category: 'Škotska', price: 8500, userId: 1 },
          { id: 108, name: 'Oban 14', category: 'Škotska', price: 6200, userId: 1 },
          { id: 109, name: 'Balvenie DoubleWood', category: 'Škotska', price: 5800, userId: 1 },
          { id: 110, name: 'Craigellachie 13', category: 'Škotska', price: 4800, userId: 1 },
          { id: 111, name: 'Edradour 10', category: 'Škotska', price: 5400, userId: 1 },
          { id: 112, name: 'Ardmore Traditional', category: 'Škotska', price: 3800, userId: 1 },
          { id: 113, name: 'Glenkinchie 12', category: 'Škotska', price: 4500, userId: 1 },
          { id: 114, name: 'Royal Salute 21', category: 'Škotska', price: 9200, userId: 1 },
          { id: 115, name: 'Chivas Regal 12', category: 'Škotska', price: 3900, userId: 1 },
          // USA
          { id: 116, name: 'Jack Daniel\'s Tennessee', category: 'USA', price: 3800, userId: 1 },
          { id: 117, name: 'Jim Beam', category: 'USA', price: 2900, userId: 1 },
          { id: 118, name: 'Maker\'s Mark', category: 'USA', price: 4500, userId: 1 },
          { id: 119, name: 'Woodford Reserve', category: 'USA', price: 5100, userId: 1 },
          { id: 120, name: 'Four Roses Small Batch', category: 'USA', price: 4200, userId: 1 },
          // Irska
          { id: 121, name: 'Jameson Irish', category: 'Irska', price: 3200, userId: 1 },
          { id: 122, name: 'Bushmills Original', category: 'Irska', price: 3000, userId: 1 },
          { id: 123, name: 'Tullamore Dew', category: 'Irska', price: 2800, userId: 1 },
          { id: 124, name: 'Midleton Very Rare', category: 'Irska', price: 12000, userId: 1 },
          { id: 125, name: 'Redbreast 12', category: 'Irska', price: 5500, userId: 1 },
        ]
      },
      { 
        id: 2, 
        email: 'mika@example.com', 
        name: 'Mika Mikić',
        products: [
          // Kanada
          { id: 201, name: 'Crown Royal', category: 'Kanada', price: 4200, userId: 2 },
          { id: 202, name: 'Canadian Club', category: 'Kanada', price: 2500, userId: 2 },
          { id: 203, name: 'Seagram\'s VO', category: 'Kanada', price: 3100, userId: 2 },
          { id: 204, name: 'Forty Creek Barrel Select', category: 'Kanada', price: 4800, userId: 2 },
          // Japanska
          { id: 205, name: 'Yamazaki 12', category: 'Japan', price: 8500, userId: 2 },
          { id: 206, name: 'Hibiki Harmony', category: 'Japan', price: 7200, userId: 2 },
          { id: 207, name: 'Nikka From The Barrel', category: 'Japan', price: 4900, userId: 2 },
          { id: 208, name: 'Hakushu 12', category: 'Japan', price: 7800, userId: 2 },
          // Francuska
          { id: 209, name: 'Macallan Rare Cask', category: 'Francuska', price: 18000, userId: 2 },
          { id: 210, name: 'Cognac Hennessy XO', category: 'Francuska', price: 25000, userId: 2 },
          { id: 211, name: 'Remy Martin VSOP', category: 'Francuska', price: 8200, userId: 2 },
          { id: 212, name: 'Armagnac Baron De Sigognac', category: 'Francuska', price: 5600, userId: 2 },
          // Indija
          { id: 213, name: 'Amrut Fusion', category: 'Indija', price: 4500, userId: 2 },
          { id: 214, name: 'Paul John Brilliance', category: 'Indija', price: 5200, userId: 2 },
          { id: 215, name: 'Rampur Indian Single Malt', category: 'Indija', price: 4800, userId: 2 },
          // Švedska
          { id: 216, name: 'Mackmyra Preludium', category: 'Švedska', price: 6500, userId: 2 },
          { id: 217, name: 'Box Smoked', category: 'Švedska', price: 7200, userId: 2 },
          // Australija
          { id: 218, name: 'Sullivans Cove Double Cask', category: 'Australija', price: 8900, userId: 2 },
          { id: 219, name: 'Nant Distillery Single Malt', category: 'Australija', price: 6800, userId: 2 },
          { id: 220, name: 'Starward New World', category: 'Australija', price: 4600, userId: 2 },
        ]
      },
      { 
        id: 3, 
        email: 'zika@example.com', 
        name: 'Žika Žikić',
        products: [
          // Škotska - Pera
          { id: 301, name: 'Balvenie DoubleWood', category: 'Škotska', price: 5800, userId: 3 },
          { id: 302, name: 'Talisker 10 Years Old', category: 'Škotska', price: 5200, userId: 3 },
          { id: 303, name: 'Lagavulin 16', category: 'Škotska', price: 9500, userId: 3 },
          { id: 304, name: 'Laphroaig 10', category: 'Škotska', price: 4900, userId: 3 },
          { id: 305, name: 'Springbank 15', category: 'Škotska', price: 8200, userId: 3 },
          // Irska
          { id: 306, name: 'Jameson Irish', category: 'Irska', price: 3200, userId: 3 },
          { id: 307, name: 'Powers John\'s Lane', category: 'Irska', price: 5900, userId: 3 },
          { id: 308, name: 'Spot Teeling Single Pot Still', category: 'Irska', price: 4700, userId: 3 },
          // Vels
          { id: 309, name: 'Penderyn Single Malt', category: 'Vels', price: 5400, userId: 3 },
          { id: 310, name: 'Glenfarclas 25', category: 'Vels', price: 7800, userId: 3 },
          // Tai
          { id: 311, name: 'Mekhong Thai Whisky', category: 'Tajland', price: 2500, userId: 3 },
          { id: 312, name: 'Singha Whisky', category: 'Tajland', price: 2800, userId: 3 },
          // Južna Koreja
          { id: 313, name: 'Kavalan Classic', category: 'Južna Koreja', price: 3500, userId: 3 },
          { id: 314, name: 'Kavalan Concertmaster', category: 'Južna Koreja', price: 4800, userId: 3 },
          // Njemačka
          { id: 315, name: 'Speyburn Bradan Orach', category: 'Njemačka', price: 5200, userId: 3 },
          // Španija
          { id: 316, name: 'DYC Single Malt', category: 'Španija', price: 4100, userId: 3 },
          { id: 317, name: 'Whisky Español Gran Reserva', category: 'Španija', price: 6200, userId: 3 },
          // Novi Zeland
          { id: 318, name: 'The Singleton of Dufftown', category: 'Novi Zeland', price: 4500, userId: 3 },
          { id: 319, name: 'Glenmorangie Signet', category: 'Novi Zeland', price: 9800, userId: 3 },
          { id: 320, name: 'Ardbeg Uigeadail', category: 'Novi Zeland', price: 6500, userId: 3 },
          { id: 321, name: 'Bowmore 15', category: 'Novi Zeland', price: 6800, userId: 3 },
          { id: 322, name: 'Talisker Distillers Edition', category: 'Novi Zeland', price: 7200, userId: 3 },
          { id: 323, name: 'Highland Park 30', category: 'Novi Zeland', price: 15000, userId: 3 },
          { id: 324, name: 'Isle of Jura Superstition', category: 'Novi Zeland', price: 5600, userId: 3 },
          { id: 325, name: 'Clynelish 14', category: 'Novi Zeland', price: 5300, userId: 3 },
        ]
      },
    ];
  }
}

const Pregled: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [currentUserId, setCurrentUserId] = useState<number | null>(null);
  const [userProducts, setUserProducts] = useState<IProduct[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<IProduct[]>([]);
  
  // Paginacija
  const [currentPageAllProducts, setCurrentPageAllProducts] = useState(1);
  const [currentPageSearchResults, setCurrentPageSearchResults] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    // Upotreba klase
    const service = new UserService();
    const data = service.getUsers();
    setUsers(data);

    // Čitanje iz localStorage (funkcionalnost)
    const userStr = localStorage.getItem('user');
    if (userStr) {
      const user = JSON.parse(userStr);
      setCurrentUser(user.email);

      // Pronalaženje trenutnog korisnika i njegovih proizvoda
      const foundUser = data.find(u => u.email === user.email);
      if (foundUser) {
        setCurrentUserId(foundUser.id);
        setUserProducts(foundUser.products || []);
      }
    }
  }, []);

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      setSearchResults([]);
      return;
    }

    const results = userProducts.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
    setCurrentPageSearchResults(1); // Reset na prvu stranicu
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    setSearchResults([]);
    setCurrentPageSearchResults(1);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // Paginacija za sve proizvode
  const totalPagesAllProducts = Math.ceil(userProducts.length / itemsPerPage);
  const startIndexAll = (currentPageAllProducts - 1) * itemsPerPage;
  const paginatedAllProducts = userProducts.slice(startIndexAll, startIndexAll + itemsPerPage);

  // Paginacija za rezultate pretrage
  const totalPagesSearchResults = Math.ceil(searchResults.length / itemsPerPage);
  const startIndexSearch = (currentPageSearchResults - 1) * itemsPerPage;
  const paginatedSearchResults = searchResults.slice(startIndexSearch, startIndexSearch + itemsPerPage);

  const renderPagination = (currentPage: number, totalPages: number, onPageChange: (page: number) => void) => {
    if (totalPages <= 1) return null;

    const items = [];
    const maxPagesToShow = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    if (startPage > 1) {
      items.push(
        <Pagination.First key="first" onClick={() => onPageChange(1)} />,
        <Pagination.Prev key="prev" onClick={() => onPageChange(Math.max(1, currentPage - 1))} />
      );
    }

    for (let i = startPage; i <= endPage; i++) {
      items.push(
        <Pagination.Item key={i} active={i === currentPage} onClick={() => onPageChange(i)}>
          {i}
        </Pagination.Item>
      );
    }

    if (endPage < totalPages) {
      items.push(
        <Pagination.Next key="next" onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))} />,
        <Pagination.Last key="last" onClick={() => onPageChange(totalPages)} />
      );
    }

    return <Pagination className="justify-content-center mt-3">{items}</Pagination>;
  };

  return (
    <div className="page-background page-pregled">
      <Container className="mt-4">
        <h2>Pregled viskija</h2>
      {currentUser && <p className="mb-4">Trenutno prijavljen: <strong>{currentUser}</strong></p>}

      <Row className="mb-4 d-flex align-items-end gap-2">
        <Col md={6}>
          <Form.Group className="mb-0">
            <Form.Label>Pretraži viskije</Form.Label>
            <Form.Control
              type="text"
              placeholder="Unesite naziv ili poreklo viskija..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </Form.Group>
        </Col>
        <Col md="auto">
          <Button variant="success" onClick={handleSearch}>
            Pretraži
          </Button>
        </Col>
        <Col md="auto">
          <Button variant="secondary" onClick={handleClearSearch}>
            Očisti
          </Button>
        </Col>
      </Row>

      {searchResults.length > 0 && (
        <div>
          <h4>Rezultati pretrage - Viskiji ({searchResults.length})</h4>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Naziv</th>
                <th>Poreklo</th>
                <th>Cena (din)</th>
              </tr>
            </thead>
            <tbody>
              {paginatedSearchResults.map(product => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td><Badge bg="info">{product.category}</Badge></td>
                  <td>{product.price.toLocaleString('sr-RS')}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          {renderPagination(currentPageSearchResults, totalPagesSearchResults, setCurrentPageSearchResults)}
        </div>
      )}

      {searchResults.length === 0 && searchTerm !== '' && (
        <div className="alert alert-warning mt-3">
          Nema pronađenih viskija koji odgovaraju pretrazi.
        </div>
      )}

      <h4 className="mt-5">Svi vaši viskiji ({userProducts.length})</h4>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Naziv</th>
            <th>Poreklo</th>
            <th>Cena (din)</th>
          </tr>
        </thead>
        <tbody>
          {paginatedAllProducts.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td><Badge bg="success">{product.category}</Badge></td>
              <td>{product.price.toLocaleString('sr-RS')}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {renderPagination(currentPageAllProducts, totalPagesAllProducts, setCurrentPageAllProducts)}
      </Container>
    </div>
  );
};

export default Pregled;
