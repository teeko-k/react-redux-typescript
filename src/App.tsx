import React from 'react';

import GlobalStyles from './GlobalStyles';
import { AppHeading, Container, Paragraph } from './AppStyles';

export default function App(): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <Container>
        <AppHeading>Hello World!</AppHeading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque porro
          facere commodi voluptatum. Laboriosam minima odio numquam iste ullam
          asperiores odit deleniti similique dolor neque atque inventore fugit
          nihil nostrum ipsa, culpa, ab natus voluptas repudiandae impedit velit
          placeat. Fugiat dolore hic explicabo, provident repellendus laudantium
          voluptas fugit omnis iusto?
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
          aliquid beatae nam expedita aliquam, enim officia. Dignissimos
          excepturi quaerat consectetur?
        </Paragraph>
      </Container>
    </>
  );
}
