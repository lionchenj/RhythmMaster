import Event = Laya.Event;
import Sprite = Laya.Sprite;
import Handler = Laya.Handler;
import Text = Laya.Text;
import Tween = Laya.Tween;
import http from "./http";

export default class bg extends Laya.Sprite {
    private endContainer;
    private imgContainer;

    private rankTxt;
    private buttonAgain;
    private buttonNext;
    constructor(){
        super();
        this.initBg();
    }

    initBg () {
        this.endContainer = new Sprite();
        Laya.SoundManager.playMusic("sound/end.mp3", 1);
        var bgCon = new Sprite();
        bgCon.graphics.drawRect(0, 0, 1008, 640, '#000');
        bgCon.alpha = 0.8;
        this.endContainer.addChild(bgCon);

        this.imgContainer = new Sprite();
        this.imgContainer.loadImage("res/imgs/sg.png");
        this.imgContainer.x = 30;
        this.imgContainer.y = -100;
        this.endContainer.addChild(this.imgContainer);

        var end = new Sprite();
        end.loadImage("res/imgs/end.png");
        end.x = 271.5;
        end.y = 250;
        this.endContainer.addChild(end);

        var endTxt = new Text();
        endTxt.fontSize = 40;
        endTxt.x = 300;
        endTxt.y = 280;
        endTxt.width = 383;
        endTxt.align = "center"
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
        var http = new http;
        http.post('userInfo',data);


        var star1 = new Sprite();
        scoreObj.totalScore != 0?star1.loadImage("res/imgs/starON.png"):star1.loadImage("res/imgs/starOFF.png");
        star1.width = 150;
        star1.height = 150;
        star1.x = 195;
        star1.y = 100;
        this.endContainer.addChild(star1);

        var star2 = new Sprite();
        scoreObj.totalScore > 50?star2.loadImage("res/imgs/starON.png"):star2.loadImage("res/imgs/starOFF.png");        
        star2.width = 150;
        star2.height = 150;
        star2.x = 405;
        star2.y = 50;
        this.endContainer.addChild(star2);

        var star3 = new Sprite();
        scoreObj.totalScore > 100?star3.loadImage("res/imgs/starON.png"):star3.loadImage("res/imgs/starOFF.png");        
        star3.width = 150;
        star3.height = 150;
        star3.x = 615;
        star3.y = 100;
        this.endContainer.addChild(star3);

        this.buttonAgain = new Sprite();
        this.buttonAgain.loadImage("res/imgs/buttonAgain.png");
        this.buttonAgain.x = 180;
        this.buttonAgain.y = 460;
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

        this.buttonNext = new Sprite();
        this.buttonNext.loadImage("res/imgs/buttonNext.png");
        this.buttonNext.x = 512;
        this.buttonNext.y = 460;
        this.buttonNext.scaleX = 0;
        this.buttonNext.mouseEnabled = true;
        this.buttonNext.on(Event.MOUSE_OVER, this, function () {
            this.buttonNext.graphics.clear();
        });
        this.buttonNext.on(Event.MOUSE_OUT, this, function () {
            this.buttonNext.graphics.clear();
        });
        this.buttonNext.on(Event.CLICK, this, function () {
        });
        this.endContainer.addChild(this.buttonNext);
        Tween.to(this.buttonNext, {scaleX: 1}, 200);
        this.endContainer.visible = true;

        var againTxt = new Text();
        againTxt.fontSize = 34;
        againTxt.x = 150;
        againTxt.y = 485;
        againTxt.width = 284;
        againTxt.align = "center"
        againTxt.font = 'Charcoal CY';
        againTxt.color = '#000000';
        againTxt.bold = true;
        againTxt.text = '再学一次'
        this.endContainer.addChild(againTxt);
        var nextTxt = new Text();
        nextTxt.fontSize = 34;
        nextTxt.x = 482;
        nextTxt.y = 485;
        nextTxt.width = 284;
        nextTxt.align = "center"
        nextTxt.font = 'Charcoal CY';
        nextTxt.color = '#000000';
        nextTxt.bold = true;
        nextTxt.text = '下一章节'
        this.endContainer.addChild(nextTxt);
    }
}