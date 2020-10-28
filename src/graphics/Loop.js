export default class Loop {
  constructor(x,y, width, height, ctx){
    this._x = x;
    this._y = y;
    this._width = width;
    this._height = height;
    this._ctx = ctx;
  }
  translate (x,y){
    this._x = x;
    this._y = y;
  }
  get width(){
    return this._width;
  }
  get height(){
    return this._height;
  }
  draw(){
    let ctx = this._ctx;
    ctx.save();
    ctx.translate(this._x, this._y);
    ctx.fillRect(25, 25, this._width, this._height);
    ctx.clearRect(45, 45, this._width * .6, this._height * .6);
    ctx.strokeRect(50, 50, this._width * .5, this._height * .5);
    ctx.restore();
  }
}



/*export default class Loop {
  constructor(x,y,ctx){
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
}*/
