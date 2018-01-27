var canvas = document.getElementById('canvas');
var container = document.getElementById('container');
var text;
var sprite;
var fade;

var loaded = false;
var horizont = false;
var videoSprite;
var act_ = false;

var fontsize;
function Init()
{
    var ua = navigator.userAgent;
    if(ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0){
        canvas.addEventListener('touchstart',function(e){
		act_ = true;
		clickact();
	},false);
    }else if(ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0){
        canvas.addEventListener('touchstart',function(e){
		act_ = true;
		clickact();
	},false);
    }else{
	window.onkeydown = function( event ) {
	act_ = true;
	clickact();
	};
    }
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
		// 画面回転時に向きをチェック
window.addEventListener('resize', checkOrientation, false);

stage = new PIXI.Container();
        renderer = PIXI.autoDetectRenderer(
        canvas.width,
        canvas.height,
        {view: canvas},false,true
    );
	loaded = false;
audioLoad();
   			/*var farTexture = PIXI.Texture.fromImage("F-16_June_2008.jpg",false,PIXI.SCALE_MODES.NEAREST);
			farTexture.baseTexture.addListener("loaded",function(){
			farTexture.baseTexture.removeListener("loaded");
			
            sprite = new PIXI.Sprite(farTexture);
			sprite.scale.set(canvas.width/farTexture.width,canvas.height/farTexture.height);
            stage.addChild(sprite);*/

	fade = new PIXI.Graphics();
    fade.beginFill(0xFFFF00,1);
    //bar2.beginFill(0xFF0000,1);
    //bar.drawRect(canvas.width/2-32, canvas.height-8, 250, 8);//x,y,width,height
	//bar2.drawRect(canvas.width/2-32, canvas.height-24,250, 8);//x,y,width,height
    fade.drawRect(0, 0, canvas.width, canvas.height);//x,y,width,height

    //bar.endFill();
	//bar2.endFill();
    fade.endFill();
    
    //stage.addChild(bar);
	//stage.addChild(bar2);
    stage.addChild(fade);//作成した四角をシーンに追加
    
    text = new PIXI.Text("",{fontFamily:'Arial', fontSize:'16pt',fontWeight:'bold', fill:'#FFFFFF'});
	fontsize = 16;
	text.style.fontSize = fontsize;
	text.style.align = 'center';
	//text.style.wordWrap = true;

	stage.addChild(text);

			loaded = true;
			document.getElementById('BInit').style.display = "none";
      //});
//playmp4('testVideo.mp4');
//Start the game loop
    this.enterFrameHandler();
}

function enterFrameHandler()
{
        requestAnimationFrame(() => {
          this.enterFrameHandler()
        });
		if(loaded){
		if(fade.alpha > 0){
		fade.alpha -= 0.01;
		if(fade.alpha < 0)fade.alpha = 0;
		}
		textview();
		if(act_)Act();
		if(act_)act_ = false;
		}
    //Render the stage
    this.renderer.render(this.stage);
}
var String =
[
	"　ゲームprogralを習得するための一番の近道はとにかく沢山progral組む",
	"ことである。B",
	"@　プログラムの参考書にはgagaプログラムの方法なんて何も書かれていない、B",
	"変数、B配列、B関数、Blopp、B条件分岐…Bこれらすべての説明はゲームで何に使うか",
	"なんてどこにも書いていない、Bせいぜいiyayaya題材にした例がある程度である。B",
	"C prorv習うより慣れろなのでプログラムを組むに当たって少しでも知識が",
	"つけば後はそこからは掘り下げ、広げていけば良いわけで,progral参考書を",
	"読んでいて少しでも何か出来るような気がしたらそこでとにかくprogral",
	"nvwnoirnはんをうろうｖろｗろうｂヴぁのべおべぼ",
	"を打ってみることが大事である。"
];
var msgcount = 0;
var count = 0;

function textview()
{
if(count <= String[msgcount].length){
	// テキストフィールドにデータを渡す処理
	text.text = String[msgcount].substring(0, count);
	count++;
	}
}
function getRandomInt(min, max) {
  return Math.floor( Math.random() * (max - min + 1) ) + min;
}
var audio;
function audioLoad()
{
	audio = new Audio("sei_ge_otyawan_gatugatu01.mp3");
	audio.load();
}
function audioPlay()
{
	if (audio.paused) {
	//audio.play();
	}
}
function playmp4(filename)
{
if(videoSprite)stage.removeChild(videoSprite);
var videoTexture = PIXI.Texture.fromVideo(filename);
//var source = videoTexture.baseTexture.source;
videoTexture.baseTexture.addListener("loaded",function(){
videoTexture.baseTexture.removeListener("loaded");
// 画面サイズにリサイズ
 videoSprite = new PIXI.Sprite(videoTexture);
videoSprite.width = renderer.width;
  videoSprite.height = renderer.height;
stage.addChild(videoSprite);
//source.pause();
});
}
function clickact()
{	
	count = 0;
	if(msgcount < String.length)msgcount++;
	if(msgcount == String.length)msgcount = 0;
}

function Act()
{

audioPlay();
}

function checkOrientation() {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
	if(renderer){
	renderer.width = canvas.width;
	renderer.height = canvas.height;
	}
}