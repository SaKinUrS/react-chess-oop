import icon from './../../assets/black-bishop.png';

import { Cell } from '../Cell';
import { Colors } from '../Colors';
export enum FigureName {
  FIGURE = '',
  KING = 'king',
  QUEEN = 'queen',
  ROOK = 'rook',
  BISHOP = 'bishop',
  KNIGHT = 'knight',
  PAWN = 'pawn'
}

export class Figure {
  color: Colors;
  icon: typeof icon| null;
  cell: Cell;
  name: FigureName;
  id: number;


  constructor(color: Colors, cell:Cell){
    this.color = color;
    this.cell = cell;
    this.cell.figure = this;
    this.icon = null;
    this.name = FigureName.FIGURE;
    this.id = Math.random();
  }

  canMove(target: Cell) : boolean{
    if(target.figure?.color === this.color){
      return false;
    }
    if(target.figure?.name === FigureName.KING){
      return false;
    }
    return true;
  }
  
  moveFigure(target:Cell){}
}