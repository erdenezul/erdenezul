import './App.css';

import AOS from 'aos';
import { useEffect } from 'react';
import styled from 'styled-components';

import Avatar from './components/avatar';

import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Container>
      <Avatar />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: 'black';
`;

export default App;
