var w = 200;
var h = 200;
var backgroundColor = 0;
var slider;

function setup() {
  createCanvas(w, h);
  background(backgroundColor);

  var button = createButton('Toggle Background Color!'); //ボタンの生成
  button.position(10, 10);  // 位置の調整 ★Canvasに対する相対位置ではなく、ブラウザのクライアント領域に対する相対位置
  button.mousePressed(changeBGC);  //ボタンを押したとき実行する関数の登録

  sel = createSelect();
  sel.position(10, 36);
  sel.option('rect');
  sel.option('circle');
  sel.option('line');
  sel.changed(selectForm);

  // スライダー ※スライダーの変化イベントは取れない
  slider = createSlider(0, 255, 0);//0:最小値、255:最大値、0:初期値
  slider.position(10, h - 30);
}

function draw() {
//   background(backgroundColor);
  noStroke();
  if(mouseIsPressed){
    // スライダーの値を色として円を描画
    fill(slider.value());
    ellipse(mouseX, mouseY, 10);
  }
}

function changeBGC(){
  backgroundColor = 255 - backgroundColor;
  background(backgroundColor);
}

function selectForm() {
  background(backgroundColor);
  fill(255 - backgroundColor);
  stroke(255 - backgroundColor);

  var form = sel.value();
  if(form === "rect"){
    rect(50, 50, 100, 100);
  }else if(form === "circle"){
    ellipse(100,100,50);
  }else if(form === "line"){
    line(40, 20, 180, 180);
  }
}

function sliderChanged(){
  backgroundColor(slider.value());
}