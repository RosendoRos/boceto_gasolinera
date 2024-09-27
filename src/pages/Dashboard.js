// src/pages/Dashboard.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend } from 'recharts';
import { Navbar, Nav } from 'react-bootstrap'; // Importando componentes de Bootstrap para el menú
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar estilos de Bootstrap

const data = [
  { name: 'Enero', uv: 4000, pv: 2400, amt: 2400, tv: 2500, sd: 4000, pd: 3200 },
  { name: 'Febrero', uv: 3000, pv: 1398, amt: 2210, tv: 2400, sd: 3000, pd: 2300 },
  { name: 'Marzo', uv: 2000, pv: 9800, amt: 2290, tv: 4000, sd: 2500, pd: 2200 },
  { name: 'Abril', uv: 2780, pv: 3908, amt: 2000, tv: 3000, sd: 3500, pd: 2000 },
  { name: 'Mayo', uv: 1890, pv: 4800, amt: 2181, tv: 3020, sd: 3200, pd: 1200 },
  { name: 'Junio', uv: 2390, pv: 3800, amt: 2500, tv: 4000, sd: 1500, pd: 1300 },
  { name: 'Julio', uv: 1500, pv: 4700, tv: 2400, sd: 2300, pd: 2300 },
  { name: 'Agosto', uv: 1200, pv: 4600, tv: 3009, sd: 4000, pd: 4000 },
  { name: 'Septiembre', uv: 1400, pv: 4200, tv: 4000, sd: 3000, pd: 3000 },
  { name: 'Octubre', uv: 1400, pv: 4300, tv: 3000, sd: 3200, pd: 5000 },
  { name: 'Noviembre', uv: 1300, pv: 4500, tv: 5000, sd: 4000, pd: 4300 },
  { name: 'Diciembre', uv: 2000, pv: 3000, tv: 6000, sd: 3000, pd: 3000 }
];

const ChartContainer = ({ title, children }) => (
  <div style={{ marginBottom: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
    <h4 style={{ textAlign: 'center', padding: '10px', color: '#333' }}>{title}</h4>
    <ResponsiveContainer width="100%" height={300}>
      {children}
    </ResponsiveContainer>
  </div>
);

const Dashboard = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
      {/* Menú de navegación */}
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Mi Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Características</Nav.Link>
            <Nav.Link href="#pricing">Precios</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <h2 style={{ color: '#333', textAlign: 'center', margin: '20px 0' }}>Gráficas de Datos</h2>
      
      {/* Gráfica 1 */}
      <ChartContainer title="Gráfica de UV y PV">
        <LineChart data={data} margin={{ top: 50, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="name" tick={{ fill: '#333' }} />
          <YAxis tick={{ fill: '#333' }} />
          <Tooltip contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #ccc' }} />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={3} dot={{ r: 5 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeWidth={3} dot={{ r: 5 }} />
        </LineChart>
      </ChartContainer>

      {/* Gráfica 2 */}
      <ChartContainer title="Gráfica de TV, SD y PD">
        <LineChart data={data} margin={{ top: 50, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="name" tick={{ fill: '#333' }} />
          <YAxis tick={{ fill: '#333' }} />
          <Tooltip contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #ccc' }} />
          <Legend />
          <Line type="monotone" dataKey="tv" stroke="#ff7300" strokeWidth={3} dot={{ r: 5 }} />
          <Line type="monotone" dataKey="sd" stroke="#ff0080" strokeWidth={3} dot={{ r: 5 }} />
          <Line type="monotone" dataKey="pd" stroke="#03bb85" strokeWidth={3} dot={{ r: 5 }} />
        </LineChart>
      </ChartContainer>

    </div>
  );
};

export default Dashboard;
