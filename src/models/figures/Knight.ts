import blackKnight from './../../assets/black-knight.png';
import whiteKnight from './../../assets/white-knight.png';

import { Figure, FigureName } from './Figure';

import { Cell } from '../Cell';
import { Colors } from '../Colors';

export class Knight extends Figure{
  constructor(color: Colors, cell: Cell){
    super(color, cell);
    this.icon = color === Colors.WHITE ? whiteKnight : blackKnight;
    this.name = FigureName.KNIGHT;
  }

  canMove(target: Cell): boolean {
    if(!super.canMove(target)){
      return false;
    }
    const dx = Math.abs(this.cell.x - target.x);
    const dy = Math.abs(this.cell.y - target.y);
    return (dx === 1 && dy === 2 ) || (dx === 2 && dy === 1);
  }
}