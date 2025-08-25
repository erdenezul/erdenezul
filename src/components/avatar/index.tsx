import type React from 'react';

import profileImage from '../../assets/zulaa.jpg';
import styled, { keyframes } from 'styled-components';

import type { AvatarProps } from './typedefs';

/**
 * Avatar component
 * @param aos {Default: "flip-left"}
 * @param aosDuration {Default: "1000"}
 * @returns
 */
const Component: React.FC<AvatarProps> = ({
  aos = 'flip-left',
  aosDuration = '1000'
}) => {
  return (
    <Container
      className="image avatarImg"
      data-aos={aos}
      data-aos-duration={aosDuration}
    >
      <ProfileImage src={profileImage} />
    </Container>
  );
};

/**
 * Blob-morphing effect
 */
const morph = keyframes`
  0% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
  50% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
  }
  100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
`;

const Container = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  overflow: hidden;

  /* Blob styling */
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  animation: ${morph} 8s ease-in-out infinite 1s;
  box-shadow: inset 0 0 0 9px rgba(255, 255, 255, 0.3);
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  /* Keep image clipped inside blob */
  display: block;
`;

export default Component;
