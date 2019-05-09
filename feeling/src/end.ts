import Event = Laya.Event;
import Sprite = Laya.Sprite;
import Animation = Laya.Animation;
import Text = Laya.Text;
import Tween = Laya.Tween;

// import http from "./http";
var level = '0';
var that,LoadingDialog;
var centers,endshow;
export default class end extends Laya.Sprite {
    private endContainer;
    private imgContainer;
    private endshow
    private buttonAgain;
    private buttonNext;

    constructor(thats,LoadingDialog){
        that = thats;
        LoadingDialog = LoadingDialog;
        super();
        level = that.typeLVL;
        // level = laya.net.LocalStorage.getItem('typeLVL')||'type1';
        this.initEnd();
    }

    initEnd () {
        this.endContainer = new Sprite();
        Laya.SoundManager.playMusic("sound/end.mp3", 1);
        var bgCon = new Sprite();
        bgCon.graphics.drawRect(0, 0, 1380, 640, '#000');
        bgCon.alpha = 0.8;
        this.endContainer.addChild(bgCon);
        centers = new Sprite();
        centers.width = 1008;
        centers.height = 640;
        centers.pivot(504,0);
        centers.pos(504,0);
        this.endContainer.addChild(centers);
        // this.imgContainer = new Sprite();
        // this.imgContainer.loadImage("res/imgs/sg.png");
        // this.imgContainer.width = 953;
        // this.imgContainer.height = 550;
        // this.imgContainer.pivot(476.5,50);
        // this.imgContainer.pos(504,20);
        // centers.addChild(this.imgContainer);

        // var end = new Sprite();
        // end.loadImage("res/imgs/end.png");
        // end.width = 433;
        // end.height = 120;
        // end.pivot(216.5,0);
        // end.pos(504,300);
        // centers.addChild(end);
        // endTxt = new Text();
        // endTxt.fontSize = 40;
        // endTxt.width = 433;
        // endTxt.y = 30;
        // endTxt.align = "center"
        // endTxt.color = '#FFFFFF';
        // endTxt.bold = true;
        // endTxt.text = '继续努力!'
        // end.addChild(endTxt);

        this.endContainer.visible = false;
        this.addChild(this.endContainer);
    }

    showEndPanel (scoreObj, letterTotal) {
        //接口
        var data = {
            score : scoreObj.totalScore
        }
        const obj = {
            name:'finishGame',
            data:{
                score:scoreObj.totalScore, // 得分
                perfect:scoreObj.perfect, // perfect 个数
                // great:scoreObj.great, // great 个数
                // right:scoreObj.right, // right 个数
                miss:scoreObj.miss, // miss 个数
                bad:scoreObj.bad, // bad 个数
                obstacle:scoreObj.obstacle, // 点击障碍物个数
            }
          }
        window.parent.postMessage(obj,'*');
        // window.parent.postMessage(JSON.stringify(obj),'*');
        // var http = new http;
        // http.post('userInfo',data);    
        var start = scoreObj.totalScore > 30?scoreObj.totalScore > 65?scoreObj.totalScore > 95?"ani/end3.ani":"ani/end2.ani":"ani/end1.ani":"ani/end0.ani";
        this.endshow = new Animation();
        this.endshow.width = 1008;
        this.endshow.height = 640;
        this.endshow.pivot(504, 0); 
        this.endshow.pos(800, -50);
        this.endshow.play(0, false);  
        this.endshow.loadAnimation(start);
        centers.addChild(this.endshow);
        // var star1 = new Sprite();
        // scoreObj.totalScore > 30?star1.loadImage("res/imgs/starON.png"):star1.loadImage("res/imgs/starOFF.png");
        // star1.width = 120;
        // star1.height = 118;
        // star1.pivot(60,0);
        // star1.pos(504-200,130);
        // centers.addChild(star1);

        // var star2 = new Sprite();
        // scoreObj.totalScore > 65?star2.loadImage("res/imgs/starON.png"):star2.loadImage("res/imgs/starOFF.png");        
        // star2.width = 120;
        // star2.height = 118;
        // star2.pivot(60,0);
        // star2.pos(504,80);
        // centers.addChild(star2);

        // var star3 = new Sprite();
        // scoreObj.totalScore > 95?star3.loadImage("res/imgs/starON.png"):star3.loadImage("res/imgs/starOFF.png");        
        // star3.width = 120;
        // star3.height = 118;
        // star3.pivot(60,0);
        // star3.pos(504+200,130);
        // centers.addChild(star3);

        this.buttonAgain = new Sprite();
        this.buttonAgain.loadImage("res/imgs/buttonAgain.png");
        this.buttonAgain.width = 240;
        this.buttonAgain.height = 90;
        this.buttonAgain.pivot(120,0);
        this.buttonAgain.pos(690-170,460);
        this.buttonAgain.scaleX = 0;
        this.buttonAgain.mouseEnabled = true;
        // this.buttonAgain.on(Event.MOUSE_OVER, this, function () {
        //     this.buttonAgain.graphics.clear();
        // });
        // this.buttonAgain.on(Event.MOUSE_OUT, this, function () {
        //     this.buttonAgain.graphics.clear();
        // });
        this.buttonAgain.on(Event.CLICK, this, function () {
            window.parent.postMessage({name:'endRestartGame',data:{}},'*');
            setTimeout(() => {
                this.buttonAgain.off(Event.CLICK, this, function () {});
                this.buttonNext.off(Event.CLICK, this, function () {});
                this.destroy();
            }, 500);
            Laya.timer.clearAll(that);
            that.GameManager();
        });
        centers.addChild(this.buttonAgain);
        // var againTxt = new Text();
        // againTxt.fontSize = 28;
        // againTxt.width = 240;
        // againTxt.x = -15;
        // againTxt.y = 30;
        // againTxt.align = "center"
        // againTxt.font = 'Charcoal CY';
        // againTxt.color = '#000000';
        // againTxt.bold = true;
        // againTxt.text = '再学一次'
        // this.buttonAgain.addChild(againTxt);
        Tween.to(this.buttonAgain, {scaleX: 1}, 200);

        this.buttonNext = new Sprite();
        this.buttonNext.loadImage("res/imgs/buttonNext.png");
        this.buttonNext.width = 240;
        this.buttonNext.height = 90;
        this.buttonNext.pivot(120,0);
        this.buttonNext.pos(690+170,460);
        this.buttonNext.scaleX = 0;
        this.buttonNext.mouseEnabled = true;
        // this.buttonNext.on(Event.MOUSE_OVER, this, function () {
        //     this.buttonNext.graphics.clear();
        // });
        // this.buttonNext.on(Event.MOUSE_OUT, this, function () {
        //     this.buttonNext.graphics.clear();
        // });
        this.buttonNext.on(Event.CLICK, this, function () {
            window.parent.postMessage({name:'nextChapter',data:{}},'*');
            // if(level == 'type1'){
            //     // laya.net.LocalStorage.setItem('typeLVL','type2')
            //     that.typeLVL = 'type2'
            // }
            // if(level == 'type2'){
            //     // laya.net.LocalStorage.setItem('typeLVL','type3')
            //     that.typeLVL = 'type3'
            // }
            // if(level == 'type3'){
            //     // laya.net.LocalStorage.setItem('typeLVL','type4')
            //     that.typeLVL = 'type4'
            // }
            // if(level == 'type4'){
            //     // laya.net.LocalStorage.setItem('typeLVL','type1')
            //     that.typeLVL = 'type1'
            // }
            Laya.stage.scaleMode = 'showall';
            
            that.loadingDialog.popup(true, false);
            this.alpha = 0;
            that.GameManager();
            setTimeout(() => {
                this.buttonAgain.off(Event.CLICK, this, function () {});
                this.buttonNext.off(Event.CLICK, this, function () {});
                this.destroy();
            }, 500);
        });
        centers.addChild(this.buttonNext);
        // var nextTxt = new Text();
        // nextTxt.fontSize = 28;
        // nextTxt.x = -15;
        // nextTxt.y = 30;
        // nextTxt.width = 240;
        // nextTxt.align = "center"
        // nextTxt.font = 'Charcoal CY';
        // nextTxt.color = '#000000';
        // nextTxt.bold = true;
        // nextTxt.text = '下一章节'
        // this.buttonNext.addChild(nextTxt);
        Tween.to(this.buttonNext, {scaleX: 1}, 200);
        this.endContainer.visible = true;
    }
}