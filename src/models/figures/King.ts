import blackKing from './../../assets/black-king.png';
import whiteKing from './../../assets/white-king.png';

import { Figure, FigureName } from './Figure';

import { Cell } from '../Cell';
import { Colors } from '../Colors';
export class King extends Figure{
  constructor(color: Colors, cell: Cell){
    super(color, cell);
    this.icon = color === Colors.WHITE ? whiteKing : blackKing;
    this.name = FigureName.KING;
  }

  canMove(target: Cell): boolean {
    if(!super.canMove(target)){
      return false;
    }

    return true;
  }
}