import styled from 'styled-components';

import { Avatar, Social } from '@ez/components';

/**
 * @designMock
 * Avatar       Hi {name} {wave_icon}
 *              Summary
 *              Social Icons
 * @todo
 * 1. Add summary
 * 2. Add name
 */
const Component: React.FC = () => {
  return (
    <Container>
      <Avatar />
      <Introduction>
        <Social />
      </Introduction>
    </Container>
  );
};

export default Component;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 80px;
`;

const Introduction = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;
