import Event = Laya.Event;
import Sprite = Laya.Sprite;
import Handler = Laya.Handler;
import Text = Laya.Text;
import Tween = Laya.Tween;
import HTTP from "./http";
var level = '0';

var that;

export default class bg extends Laya.Sprite {
    private endContainer;
    private imgContainer;

    private rankTxt;
    private buttonAgain;
    private buttonNext;
    constructor(thats){
        super();
        that = thats;
        // level = window.localStorage.getItem('level')||'0';
        this.initEnd();
    }

    initEnd () {
        this.endContainer = new Sprite();
        Laya.SoundManager.playMusic("sound/end.mp3", 1);
        var bgCon = new Sprite();
        // bgCon.graphics.drawRect(0, 0, 1008, 640, '#000');
        bgCon.graphics.drawRect(0, 0, that.height, that.width, '#000');
        bgCon.alpha = 0.8;
        this.endContainer.addChild(bgCon);

        this.imgContainer = new Sprite();
        this.imgContainer.loadImage("res/imgs/sg.png");
        // this.imgContainer.width = 810*scale;
        // this.imgContainer.height = 470*scale;
        // this.imgContainer.x = 145*scale;
        this.imgContainer.width = 812;
        this.imgContainer.height = 469;
        this.imgContainer.x = 108;
        this.imgContainer.y = 0;
        this.endContainer.addChild(this.imgContainer);

        var end = new Sprite();
        end.loadImage("res/imgs/end.png");
        end.width = 367;
        end.height = 100;
        end.x = 330;
        end.y = 302;
        this.endContainer.addChild(end);

        var endTxt = new Text();
        endTxt.fontSize = 40;
        endTxt.x = 416;
        endTxt.y = 325;
        endTxt.width = 213;
        endTxt.align = "center";
        endTxt.color = '#FFFFFF';
        endTxt.bold = true;
        endTxt.text = '继续努力!'
        this.endContainer.addChild(endTxt);

        this.endContainer.visible = false;
        this.addChild(this.endContainer);
    }

    showEndPanel (scoreObj, letterTotal) {
        //接口
        var data = {
            score : scoreObj.totalScore
        }
        var http = new HTTP;
        http.post('userInfo',data);


        var star1 = new Sprite();
        scoreObj.totalScore != 0?star1.loadImage("res/imgs/starON.png"):star1.loadImage("res/imgs/starOFF.png");
        star1.width = 121;
        star1.height = 117;
        star1.x = 270;
        star1.y = 162;
        this.endContainer.addChild(star1);

        var star2 = new Sprite();
        scoreObj.totalScore > 50?star2.loadImage("res/imgs/starON.png"):star2.loadImage("res/imgs/starOFF.png");        
        star2.width = 121;
        star2.height = 117;
        star2.x = 453;
        star2.y = 114;
        this.endContainer.addChild(star2);

        var star3 = new Sprite();
        scoreObj.totalScore > 100?star3.loadImage("res/imgs/starON.png"):star3.loadImage("res/imgs/starOFF.png");        
        star3.width = 121;
        star3.height = 117;
        star3.x = 656;
        star3.y = 162;
        this.endContainer.addChild(star3);

        this.buttonAgain = new Sprite();
        this.buttonAgain.loadImage("res/imgs/buttonAgain.png");
        this.buttonAgain.width = 243;
        this.buttonAgain.height = 81;
        this.buttonAgain.x = 243;
        this.buttonAgain.y = 483;
        this.buttonAgain.scaleX = 0;
        this.buttonAgain.mouseEnabled = true;
        this.buttonAgain.on(Event.MOUSE_OVER, this, function () {
            this.buttonAgain.graphics.clear();
        });
        this.buttonAgain.on(Event.MOUSE_OUT, this, function () {
            this.buttonAgain.graphics.clear();
        });
        this.buttonAgain.on(Event.CLICK, this, function () {
            window.location.reload();
        });
        this.endContainer.addChild(this.buttonAgain);
        Tween.to(this.buttonAgain, {scaleX: 1}, 200);

        var _that = this;
        this.buttonNext = new Sprite();
        this.buttonNext.loadImage("res/imgs/buttonNext.png");
        this.buttonNext.width = 243;
        this.buttonNext.height = 81;
        this.buttonNext.x = 540;
        this.buttonNext.y = 484;
        this.buttonNext.scaleX = 0;
        this.buttonNext.mouseEnabled = true;
        this.buttonNext.on(Event.MOUSE_OVER, this, function () {
            this.buttonNext.graphics.clear();
        });
        this.buttonNext.on(Event.MOUSE_OUT, this, function () {
            this.buttonNext.graphics.clear();
        });
        this.buttonNext.on(Event.CLICK, this, function () {
            if(level == '0'){
                window.localStorage.setItem('level','1')
            }
            if(level == '1'){
                window.localStorage.setItem('level','2')
            }
            if(level == '2'){
                window.localStorage.setItem('level','0')
            }
            that.GameManager();
            this.alpha = 0;
            setTimeout(() => {
                _that.buttonNext.off(Event.CLICK, _that, function () {})
            }, 500);
            // window.location.reload();
        });
        this.endContainer.addChild(this.buttonNext);
        Tween.to(this.buttonNext, {scaleX: 1}, 200);
        this.endContainer.visible = true;

        var againTxt = new Text();
        againTxt.fontSize = 26;
        againTxt.x = 200;
        againTxt.y = 510;
        againTxt.width = 284;
        againTxt.align = "center"
        againTxt.font = 'Charcoal CY';
        againTxt.color = '#000000';
        againTxt.bold = true;
        againTxt.text = '再学一次'
        this.endContainer.addChild(againTxt);
        var nextTxt = new Text();
        nextTxt.fontSize = 26;
        nextTxt.x = 500;
        nextTxt.y = 510;
        nextTxt.width = 284;
        nextTxt.align = "center"
        nextTxt.font = 'Charcoal CY';
        nextTxt.color = '#000000';
        nextTxt.bold = true;
        nextTxt.text = '下一章节'
        this.endContainer.addChild(nextTxt);
    }
}