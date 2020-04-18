import * as React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Button from '.';

const Wrapper = styled.div`
  padding: 1rem;
  background-color: ${props => props.theme.colors.background};
  > * {
    margin: 1rem 0;
  }
`;

storiesOf('Component/Button', module)
  .add('Primary', () => (
    <Wrapper>
      <Button size="large" variant="primary">
        Large
      </Button>
      <Button size="medium" variant="primary">
        Medium
      </Button>
      <Button size="small" variant="primary">
        Small
      </Button>
    </Wrapper>
  ))
  .add('Secondary', () => (
    <Wrapper>
      <Button size="large" variant="secondary">
        Large
      </Button>
      <Button size="medium" variant="secondary">
        Medium
      </Button>
      <Button size="small" variant="secondary">
        Small
      </Button>
    </Wrapper>
  ));
