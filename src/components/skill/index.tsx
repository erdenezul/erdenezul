import type React from 'react';

import styled from 'styled-components';

import { type SkillProps, skillIconMap } from './typedefs';

const Component: React.FC<SkillProps> = ({ skill }) => {
  const SkillIconComponent = skillIconMap[skill];
  return (
    <Container>
      <SkillIcon>
        <SkillIconComponent size={20} />
      </SkillIcon>
      <SkillName>{skill}</SkillName>
    </Container>
  );
};

export default Component;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  padding: 8px 24px;
  background: #1c1c1c;
  border: 1px solid #262626;
  border-radius: 8px;
`;

const SkillName = styled.span`
  color: #efefef;
`;

const SkillIcon = styled.div``;
