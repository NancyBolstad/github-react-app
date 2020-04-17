import * as React from 'react';
import Typography from '../Typography';
import { FooterWrapper, FooterContent } from './styles';

export interface Props {}

export const Footer: React.FC<Props> = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <a
          href="
        https://developer.github.com/v3/"
          title="Go to Github Developer Page"
          aria-label="Go to Github Developer Page"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Typography
            variant="b2"
            element="h6"
            content="Developed with TypeScript, React and Github API"
            isPrimaryColor
          />
        </a>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
