import Event = Laya.Event;
import Sprite = Laya.Sprite;
import Text = Laya.Text;
import Tween = Laya.Tween;
// import http from "./http";
var level = '0';
var scale = 0.8533333; 
var that;
export default class end extends Laya.Sprite {
    private endContainer;
    private imgContainer;

    private buttonAgain;
    private buttonNext;

    constructor(thats){
        that = thats;
        super();
        level = window.localStorage.getItem('level')||'0';
        this.initEnd();
    }

    initEnd () {
        this.endContainer = new Sprite();
        Laya.SoundManager.playMusic("sound/end.mp3", 1);
        var bgCon = new Sprite();
        bgCon.graphics.drawRect(0, 0, 1008, 640, '#000');
        bgCon.alpha = 0.8;
        this.endContainer.addChild(bgCon);

        this.imgContainer = new Sprite();
        this.imgContainer.loadImage("res/imgs/sg.png");
        this.imgContainer.width = 810*scale;
        this.imgContainer.height = 470*scale;
        this.imgContainer.x = 145;
        this.imgContainer.y = 20;
        this.endContainer.addChild(this.imgContainer);

        var end = new Sprite();
        end.loadImage("res/imgs/end.png");
        end.width = 367;
        end.height = 100;
        end.x = 310;
        end.y = 270;
        this.endContainer.addChild(end);

        var endTxt = new Text();
        endTxt.fontSize = 34;
        endTxt.x = 370;
        endTxt.y = 300;
        endTxt.width = 250;
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
        const obj = {
            name:'FinalScore',
            data:{
                score:scoreObj.totalScore, // 得分
                perfect:scoreObj.perfect, // perfect 个数
                great:scoreObj.great, // great 个数
                right:scoreObj.right, // right 个数
                miss:scoreObj.miss, // miss 个数
                bad:scoreObj.bad, // bad 个数
                obstacle:scoreObj.obstacle, // 点击障碍物个数
            }
          }
        that.http.source.postMessage(JSON.stringify(obj),that.http.origin);
        // var http = new http;
        // http.post('userInfo',data);     
        var star1 = new Sprite();
        scoreObj.totalScore > 30?star1.loadImage("res/imgs/starON.png"):star1.loadImage("res/imgs/starOFF.png");
        star1.width = 120;
        star1.height = 118;
        star1.x = 225;
        star1.y = 100;
        this.endContainer.addChild(star1);

        var star2 = new Sprite();
        scoreObj.totalScore > 65?star2.loadImage("res/imgs/starON.png"):star2.loadImage("res/imgs/starOFF.png");        
        star2.width = 120;
        star2.height = 118;
        star2.x = 435;
        star2.y = 50;
        this.endContainer.addChild(star2);

        var star3 = new Sprite();
        scoreObj.totalScore > 95?star3.loadImage("res/imgs/starON.png"):star3.loadImage("res/imgs/starOFF.png");        
        star3.width = 120;
        star3.height = 118;
        star3.x = 645;
        star3.y = 100;
        this.endContainer.addChild(star3);

        this.buttonAgain = new Sprite();
        this.buttonAgain.loadImage("res/imgs/buttonAgain.png");
        this.buttonAgain.width = 240;
        this.buttonAgain.height = 90;
        this.buttonAgain.x = 210;
        this.buttonAgain.y = 460;
        this.buttonAgain.scaleX = 0;
        this.buttonAgain.mouseEnabled = true;
        // this.buttonAgain.on(Event.MOUSE_OVER, this, function () {
        //     this.buttonAgain.graphics.clear();
        // });
        // this.buttonAgain.on(Event.MOUSE_OUT, this, function () {
        //     this.buttonAgain.graphics.clear();
        // });
        this.buttonAgain.on(Event.CLICK, this, function () {
            window.addEventListener('message',function(event) {
                event.source.postMessage(JSON.stringify({name:'endRestartGame',data:{}}),event.origin);
          },false);
          setTimeout(() => {
            this.buttonAgain.off(Event.CLICK, this, function () {})
        }, 500);
            window.location.reload();
        });
        this.endContainer.addChild(this.buttonAgain);
        Tween.to(this.buttonAgain, {scaleX: 1}, 200);

        this.buttonNext = new Sprite();
        this.buttonNext.loadImage("res/imgs/buttonNext.png");
        this.buttonNext.width = 240;
        this.buttonNext.height = 90;
        this.buttonNext.x = 542;
        this.buttonNext.y = 460;
        this.buttonNext.scaleX = 0;
        this.buttonNext.mouseEnabled = true;
        // this.buttonNext.on(Event.MOUSE_OVER, this, function () {
        //     this.buttonNext.graphics.clear();
        // });
        // this.buttonNext.on(Event.MOUSE_OUT, this, function () {
        //     this.buttonNext.graphics.clear();
        // });
        this.buttonNext.on(Event.CLICK, this, function () {
            window.addEventListener('message',function(event) {
                event.source.postMessage(JSON.stringify({name:'nextChapter',data:{}}),event.origin);
          },false);
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
                this.buttonNext.off(Event.CLICK, this, function () {})
            }, 500);
        });
        this.endContainer.addChild(this.buttonNext);
        Tween.to(this.buttonNext, {scaleX: 1}, 200);
        this.endContainer.visible = true;

        var againTxt = new Text();
        againTxt.fontSize = 28;
        againTxt.x = 170;
        againTxt.y = 490;
        againTxt.width = 284;
        againTxt.align = "center"
        againTxt.font = 'Charcoal CY';
        againTxt.color = '#000000';
        againTxt.bold = true;
        againTxt.text = '再学一次'
        this.endContainer.addChild(againTxt);
        var nextTxt = new Text();
        nextTxt.fontSize = 28;
        nextTxt.x = 500;
        nextTxt.y = 490;
        nextTxt.width = 284;
        nextTxt.align = "center"
        nextTxt.font = 'Charcoal CY';
        nextTxt.color = '#000000';
        nextTxt.bold = true;
        nextTxt.text = '下一章节'
        this.endContainer.addChild(nextTxt);
    }
}