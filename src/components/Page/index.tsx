import React from 'react';
import DefaultOverlayContent from '../DefaultOverlayContent';
import {ModelSection, ModelsWrapper} from '../Model'

import { Container } from './styles';

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {
            [
              'Model One',
              'Model Two',
              'Model Three',
              'Model Four',
              'Model Five',
              'Model Six',
              'Model Seven',
            ].map(e => (
              <ModelSection 
                key={e}
                className="colored"
                modelName={e}
                onverlayNode={
                  <DefaultOverlayContent 
                    label={e}
                    description="Order Online for delivery"
                  />
                }
                />
              ))}
        </div>
      </ModelsWrapper>
    </Container>
  );
}

export default Page;