import styles from './Cell.module.scss';

import { Cell } from '../../../models/Cell';

import { FC } from 'react';
interface ICellProps {
  cell: Cell;
  selected: boolean;
  click: (cell: Cell) => void;
}

export const CellComponent: FC<ICellProps> = ({ cell, selected, click }) => {
  return (
    <div
      className={`${styles.cell} ${styles[cell.color]} ${
        selected ? styles.selected : ''
      } ${cell.available && cell.figure ? styles.availableCell : ''}`}
      onClick={() => click(cell)}
    >
      {cell.available && !cell.figure && <div className={styles.available} />}
      {cell.figure?.icon && <img src={cell.figure?.icon} />}
    </div>
  );
};
