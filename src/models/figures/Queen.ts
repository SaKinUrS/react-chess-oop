import blackQueen from './../../assets/black-queen.png';
import whiteQueen from './../../assets/white-queen.png';

import { Figure, FigureName } from './Figure';

import { Cell } from '../Cell';
import { Colors } from '../Colors';
export class Queen extends Figure{
  constructor(color: Colors, cell: Cell){
    super(color, cell);
    this.icon = color === Colors.WHITE ? whiteQueen : blackQueen;
    this.name = FigureName.QUEEN;
  }


  canMove(target: Cell): boolean {
    if(!super.canMove(target)){
      return false;
    }
    if(this.cell.isEmptyVertical(target)){
      return true;
    }
    if(this.cell.isEmptyHoryzontal(target)){
      return true;
    }
    if(this.cell.isEmptyDiagonal(target)){
      return true;
    }
    return false;
  }
}