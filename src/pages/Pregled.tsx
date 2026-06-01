// src/pages/Pregled.tsx
import React, { useState, useEffect } from 'react';
import { Container, Table, Badge } from 'react-bootstrap';
import { IUser } from '../interfaces/IUser';

// Jedna jednostavna klasa koja se koristi za dobavljanje podataka
class UserService {
  getUsers(): IUser[] {
    // Simulacija podataka
    return [
      { id: 1, email: 'pera@example.com', name: 'Pera Perić' },
      { id: 2, email: 'mika@example.com', name: 'Mika Mikić' },
      { id: 3, email: 'zika@example.com', name: 'Žika Žikić' },
    ];
  }
}

const Pregled: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [currentUser, setCurrentUser] = useState<string | null>(null);

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
    }
  }, []);

  return (
    <Container className="mt-4">
      <h2>Pregled korisnika</h2>
      {currentUser && <p>Trenutno prijavljen: <strong>{currentUser}</strong></p>}
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Ime</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td><Badge bg="primary">Aktivan</Badge></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Pregled;
