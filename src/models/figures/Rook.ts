import blackRook from './../../assets/black-rook.png';
import whiteRook from './../../assets/white-rook.png';

import { Figure, FigureName } from './Figure';

import { Cell } from '../Cell';
import { Colors } from '../Colors';
export class Rook extends Figure{
  constructor(color: Colors, cell: Cell){
    super(color, cell);
    this.icon = color === Colors.WHITE ? whiteRook : blackRook;
    this.name = FigureName.ROOK;
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

    return false;
  }
}