import React from 'react';
import { Item } from '../../types/data';
import { StyledTable, TableHeader, TableRow, TableDataCell } from './styles';

type KeyName = keyof Item;

interface Props {
  headerNames: KeyName[];
  rows: Item[];
  sortMethod: (columnName: string) => any;
}

export const Table: React.FunctionComponent<Props> = ({ headerNames, rows, sortMethod }) => {
  const [isSorted, setIsSorted] = React.useState(false);
  return (
    <>
      <StyledTable>
        <thead>
          <TableRow>
            {(headerNames || []).map((headerName, index) => (
              <TableHeader>
                <TableDataCell
                  key={index}
                  onClick={e => {
                    e.preventDefault();
                    setIsSorted(true);
                    sortMethod(headerName);
                  }}
                >
                  {headerName}
                </TableDataCell>
              </TableHeader>
            ))}
          </TableRow>
        </thead>
        <tbody>
          {(rows || []).map((item: Item, index) => (
            <TableRow key={index}>
              {(headerNames || []).map((headerName, index) => (
                <TableDataCell key={index}>{item[headerName]}</TableDataCell>
              ))}
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
    </>
  );
};

export default Table;
