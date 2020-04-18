import styled from 'styled-components';
import createFontStyles from '../../util/createFontStyles';

const StyledTable = styled.table`
  border-collapse: collapse;
  margin: 3rem auto;
`;

const TableHeader = styled.th`
  padding: ${props => props.theme.spacing.xs}rem 0;
  height: 3.25rem;
  text-align: center;
  background-color: ${props => props.theme.colors.secondary};
  color: white;
  ${props => createFontStyles(props.theme.fonts.h3)};
`;

const TableRow = styled.tr`
  ${props => createFontStyles(props.theme.fonts.b3)};

  &:nth-child(even) {
    background-color: ${props => props.theme.colors.surface};
  }

  &:hover {
    opacity: 0.8;
  }
`;

const TableDataCell = styled.td`
  text-align: center;
  height: 100%;
  min-height: 6.25rem;
  padding: ${props => props.theme.spacing.s}rem;
`;

export { StyledTable, TableHeader, TableRow, TableDataCell };
