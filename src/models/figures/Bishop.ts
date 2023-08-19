import blackBishop from './../../assets/black-bishop.png';
import whiteBishop from './../../assets/white-bishop.png';

import { Figure, FigureName } from './Figure';

import { Cell } from '../Cell';
import { Colors } from '../Colors';
export class Bishop extends Figure{
  constructor(color: Colors, cell: Cell){
    super(color, cell);
    this.icon = color === Colors.WHITE ? whiteBishop : blackBishop;
    this.name = FigureName.BISHOP;
  }

  canMove(target: Cell): boolean {
    if(!super.canMove(target)){
      return false;
    }
    if(this.cell.isEmptyDiagonal(target)){
      return true;
    }
    return false;
  }
}