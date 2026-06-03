// src/pages/Pregled.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Table, Badge, Form, Button, Row, Col, Pagination } from 'react-bootstrap';
import { IUser } from '../interfaces/IUser';
import { IProduct } from '../interfaces/IProduct';
import { UserService } from '../services/UserService';

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

  const navigate = useNavigate();

  useEffect(() => {
    const service = new UserService();
    const data = service.getUsers();
    setUsers(data);

    const userStr = localStorage.getItem('user');
    if (userStr) {
      const user = JSON.parse(userStr);
      setCurrentUser(user.email);

      const foundUser = data.find(u => u.email === user.email);
      if (foundUser) {
        setCurrentUserId(foundUser.id);
        setUserProducts(foundUser.products || []);
      }
    }
  }, []);

  const handleProductClick = (productId: number) => {
    navigate(`/pregled/${productId}`);
  };

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

  const currentUserName = users.find((user) => user.id === currentUserId)?.name || '';

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
        {currentUser && (
          <div className="mb-4">
            <p className="mb-1">Prijavljen korisnik: <strong>{currentUserName || currentUser}</strong></p>
            <p className="text-muted mb-0">Email: {currentUser}</p>
          </div>
        )}

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
                <tr key={product.id} onClick={() => handleProductClick(product.id)} style={{ cursor: 'pointer' }}>
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
