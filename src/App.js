import { Container } from '@mui/material';
import './App.css';
import Content from './components/Content';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Container maxWidth='xl'>
        <Content />
      </Container>

    </>
  );
}

export default App;
