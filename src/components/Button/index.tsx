import { Link } from 'react-router-dom';
import { Button } from './styles';

type Size = 'small' | 'medium' | 'large';
type Variant = 'primary' | 'secondary';

export interface ButtonProps {
  size: Size;
  variant: Variant;
}

const ButtonAnchor = Button.withComponent('a');
const ButtonLink = Button.withComponent(Link);
const ButtonInput = Button.withComponent('input');

export default Button;
export { ButtonAnchor, ButtonLink, ButtonInput };
