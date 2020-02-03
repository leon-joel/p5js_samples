
var w = 300;
var h = 300;
function setup() {
  createCanvas(w, h);  // キャンバス(描画領域)の生成
  background(100);
}

function draw() {
  background(100, 3); // 薄ーい色（すごく透明度の高い色）で塗り重ねていくこと
  
  // マウスの軌跡を描画する
  small_circle(mouseX, mouseY, 10, 10);
}

// マウスクリックしたら呼び出される
function mouseClicked(){
  footprint(mouseX, mouseY, 50, 50);
}

function footprint(x, y, w, h){
  var l = x - w / 2;
  var t = y - h / 2;
  fill(color(255,200,200)); //ピンク色に塗りつぶす
  noStroke();               //境界線は描かない 

  // 中央の円
  ellipse(x,y,w*0.5,h * 0.45);

  // 中央少し下の円
  ellipse(x, y + h * 0.15, w * 0.8, h* 0.5);
  
  // 一番左の円
  ellipse(l + w * 0.1, t + h * 0.3, w /5, h/3);
  
  //一番右の円
  ellipse(l + w * 0.9, t + h * 0.3, w /5, h/3);
  
  // 左から2番目の円
  ellipse(l + w * 0.35, t + h * 0.1, w /4, h/3);
  
  // 左から3番目の円
  ellipse(l + w * 0.65, t + h * 0.1, w /4, h/3);
}

function small_circle(x, y, w, h){
  var l = x - w / 2;
  var t = y - h / 2;

  noStroke();               //境界線は描かない 
  fill(0);
  ellipse(l, t, w, h);
}