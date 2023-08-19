import styles from './Board.module.scss';

import { Board } from '../../../models/Board';

import { CellComponent } from '../../Cell';

import { Cell } from '../../../models/Cell';

import { FC, useEffect, useState } from 'react';

interface IBoardProps {
  board: Board;
  setBoard: (board: Board) => void;
}

export const BoardComponent: FC<IBoardProps> = ({ board, setBoard }) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  const click = (cell: Cell) => {
    if (
      selectedCell &&
      selectedCell !== cell &&
      selectedCell.figure?.canMove(cell)
    ) {
      selectedCell.moveFigure(cell);
      setSelectedCell(null);
    } else {
      setSelectedCell(cell);
    }
  };
  const availableCells = () => {
    board.availableCells(selectedCell);
    updateBoard();
  };

  const updateBoard = () => {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  };

  useEffect(() => {
    availableCells();
  }, [selectedCell]);

  return (
    <div className={styles.board}>
      {board.cells.map((row) => (
        <>
          {row.map((cell) => (
            <CellComponent
              click={click}
              selected={
                cell.x === selectedCell?.x && cell.y === selectedCell?.y
              }
              cell={cell}
              key={cell.id}
            />
          ))}
        </>
      ))}
    </div>
  );
};
