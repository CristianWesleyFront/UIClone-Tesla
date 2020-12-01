import React from 'react';

import { Container } from './styles';

interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {
  modelName: string;
  onverlayNode: React.ReactNode
}

const ModelSection: React.FC<Props> = ({
  modelName, onverlayNode, children, ...props
}) => {
  return (
    <Container {...props}>
      {children}
    </Container>
  );
};

export default ModelSection;
