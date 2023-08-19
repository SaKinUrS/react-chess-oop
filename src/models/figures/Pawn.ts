import blackPawn from './../../assets/black-pawn.png';
import whitePawn from './../../assets/white-pawn.png';

import { Figure, FigureName } from './Figure';

import { Cell } from '../Cell';
import { Colors } from '../Colors';
export class Pawn extends Figure{
  constructor(color: Colors, cell: Cell){
    super(color, cell);
    this.icon = color === Colors.WHITE ? whitePawn : blackPawn;
    this.name = FigureName.PAWN;
  }

  isFirstStep : boolean = true;

  canMove(target: Cell): boolean {
    if(!super.canMove(target)){
      return false;
    }
    const direction = this.cell.figure?.color === Colors.BLACK ? 1 : -1;
    const firstStepDirection = this.cell.figure?.color === Colors.BLACK ? 2 : -2;

    // eslint-disable-next-line max-len
    if((target.y === this.cell.y + direction || this.isFirstStep && (target.y === this.cell.y + firstStepDirection)) && target.x === this.cell.x && this.cell.board.getCells(target.x, target.y).isEmpty()){
      return true;
    }
    // eslint-disable-next-line max-len
    if(target.y === this.cell.y + direction && (target.x === this.cell.x + 1 || target.x === this.cell.x - 1) && this.cell.isEnemy(target)){
      return true;
    }

    return false;
  }

  moveFigure(target: Cell): void {
    super.moveFigure(target);
    this.isFirstStep = false;
  }
}