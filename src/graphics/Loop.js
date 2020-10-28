
export default class Loop {
  constructor(x,y, ctx){
    this._x = x;
    this._y = y;
    this._ctx = ctx;
  }
  translate (x,y){
    this._x = x;
    this._y = y;
  }
  draw(){
    let ctx = this._ctx;
    ctx.save();
    ctx.translate(this._x, this._y);

    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
    ctx.restore();
  }
}
