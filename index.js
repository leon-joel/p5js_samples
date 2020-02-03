var w = 400;
var h = 400;
var c = 255;

// 最初に1回呼び出される
function setup(){
  createCanvas(w, h);
  background(200);
  // noiseSeed(.1);//noise用の初期シード値を固定することも出来る
}
// 1秒に60回呼び出される
function draw(){
  drawing_test();
}
// マウスがクリックされたときに呼び出される
// ・Canvas外でも<body>内であれば反応する
function mouseClicked(){
  c = 255 - c;
}

// マウスドラッグでお絵かき
function drawing_test(){
  noStroke();
  if(mouseIsPressed){
    ellipse(mouseX, mouseY, 10);
  }
}

// マウス位置を取得 ＆ クリックされたら円の色を反転
function mouse_test(){
  background(200);
  // canvas原点からの相対座標
  text("x: " + str(mouseX) + ", y:" + str(mouseY), 10, 170);

  // 円を描画
  fill(c);
  ellipse(w/2,h/2, 100);
}

// ランダム
function random_test(){
  noLoop();
  for(i = 0; i< w; i++){
    var randomHeight = random(0, h);
    line(i, h, i, randomHeight);
  }
}

// パーリンノイズ ～山脈のように変化する値を取り出す
function noise_test(){
  noLoop();
  for(i = 0; i< w; i++){
    // 引数にはシード値と呼ばれるランダムを生成するための数値を渡します。
    // 渡す数値は一つ前に渡した数値より少しい大きい数(0.005から0.03程度)を渡します。 
    var randomHeight = noise(i * 0.02) * h;
    line(i, h, i, randomHeight);
  }
}

// その場回転
function rotate_here(){
  rect(100,100,100,100); //回転前の四角形
  push();
  translate(150, 150);  //表示したい場所へ移動
  rotate(PI / 6);       //原点中心の回転
  rect(-50,-50,100,100);//移動・回転させる図形。中心が原点になるように描く
  pop();
}