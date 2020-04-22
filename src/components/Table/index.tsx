import React from 'react';
import { Item } from '../../types/data';
import { StyledTable, TableHeader, TableRow, TableDataCell, RemovableRow } from './styles';

type KeyName = keyof Item;

interface Props {
  headerNames: KeyName[];
  rows: Item[];
}

export const Table: React.FunctionComponent<Props> = ({ headerNames, rows }) => {
  const [removed, setRemoved] = React.useState<number[]>([]);

  return (
    <>
      <StyledTable>
        <thead>
          <TableRow>
            {(headerNames || []).map((headerName, index) => (
              <TableHeader>
                <TableDataCell key={index}>{headerName}</TableDataCell>
              </TableHeader>
            ))}
            <TableHeader>Delete</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {(rows || []).map((item: Item, index) => (
            <RemovableRow key={index} hidden={removed.includes(item.id)}>
              {(headerNames || []).map((headerName, index) => (
                <TableDataCell key={index}>{item[headerName]}</TableDataCell>
              ))}
              <TableDataCell key={index}>
                <button
                  onClick={e => {
                    e.preventDefault();
                    setRemoved([...removed, item.id]);
                  }}
                >
                  Delete
                </button>
              </TableDataCell>
            </RemovableRow>
          ))}
        </tbody>
      </StyledTable>
    </>
  );
};

export default Table;
