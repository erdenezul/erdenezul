import type React from 'react';

import { SocialIcon } from 'react-social-icons';
import styled from 'styled-components';

import { socialValues } from './typedefs';

/**
 * Social buttons components
 */
const Component: React.FC = () => {
  return (
    <Container>
      {socialValues.map((socialProps, idx) => (
        <SocialIcon key={`social_icon_${idx}`} {...socialProps} />
      ))}
    </Container>
  );
};

export default Component;

const Container = styled.div`
  display: flex;
  gap: 15px;
`;
