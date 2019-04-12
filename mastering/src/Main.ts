import GameConfig from "./GameConfig";
import Ease = Laya.Ease;
import Event = Laya.Event;
import Handler = Laya.Handler;
import SoundManager = Laya.SoundManager;
import Sprite = Laya.Sprite;
import Stage = Laya.Stage;
import Tween = Laya.Tween;
import Constants from "./Constants";
import Bg from "./bg";
import car from "./car";
import Tips from "./tips";
import End from "./end";
import Thing from "./thing";
var i = 0,
    shipXY = 462,
    shipIndex = 2,
    thingList = [],
    isPause = false,
    shipRoad = 0,
    gameWidth = 900,
    percent;
var gameLevel = '0';
    
// var _;

import {fourRoadPosition,Beats0,Beats1,Beats2} from "./Road";

class Main {
	private bgManager;//游戏主背景
    private scoreManager;//分数容器
    private endManager;//结束容器
    private gameContainer;//游戏容器
    private car;//车
    private gamePanel;//游戏区容器
    private tipsManager;//提示容器（层级最高）
    private roadArr = [];//四条路数组
    // private pressBgArr = [];//四个按键闪光数组
	private roadPressBgArr = [];//四个按键闪光数组
	
    private wordsArr = Beats0;//单词数组
    private letterTotal = 0;
    private letterObjArr = [];
    private currLetter = {letter:''};//当前字母

    private screenLetterBoxArr = [];//在屏幕中的字母数组

    private bgMusicChannel;//背景音乐实例

	private i = 0;
    private j = 0;//数组下标

    private width;
    private height;


    private letterV = 3000;//全程时间
    private letterNum = 0;
	constructor() {
        var w = Laya.Browser.width;
        var w_q = w/640;
        var h = Laya.Browser.height/w_q;
        this.height = h;
        this.width = GameConfig.height;
        //根据IDE设置初始化引擎		
        if (window["Laya3D"]) Laya3D.init(h, GameConfig.height);
		else Laya.init(h, GameConfig.height, Laya["WebGL"]);
		// if (window["Laya3D"]) Laya3D.init(GameConfig.width, GameConfig.height);
		// else Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
		Laya["Physics"] && Laya["Physics"].enable();
		Laya["DebugPanel"] && Laya["DebugPanel"].enable();
        Laya.stage.scaleMode = GameConfig.scaleMode;
        // Laya.stage.scaleMode = "showall";
		Laya.stage.screenMode = GameConfig.screenMode;
		//兼容微信不支持加载scene后缀场景
		Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;

		//打开调试面板（通过IDE设置调试模式，或者url地址增加debug=true参数，均可打开调试面板）
		if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true") Laya.enableDebugPanel();
		if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"]) Laya["PhysicsDebugDraw"].enable();
		if (GameConfig.stat) Laya.Stat.show();
		Laya.alertGlobalError = true;

        //预加载
		this.loadProgessAssets()
		//激活资源版本控制，version.json由IDE发布功能自动生成，如果没有也不影响后续流程
		Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
	}

	onVersionLoaded(): void {
		//激活大小图映射，加载小图的时候，如果发现小图在大图合集里面，则优先加载大图合集，而不是小图
		Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
	}
    loadProgessAssets(): void {
		Laya.loader.load(["res/atlas/comp.atlas"], Laya.Handler.create(this, this.onProgressAssetsLoaded))
	}
	onConfigLoaded(): void {
		//加载IDE指定的场景
		GameConfig.startScene && Laya.Scene.open(GameConfig.startScene);
    }
    //预加载
	loadOtherAssets(): void {
        const assets: Array<any> = []
        assets.push({
			url: Constants.sound0,
			type: Laya.Loader.SOUND
        })
        assets.push({
			url: Constants.sound1,
			type: Laya.Loader.SOUND
        })
        assets.push({
			url: Constants.sound2,
			type: Laya.Loader.SOUND
        })
        assets.push({
			url: Constants.sound3,
			type: Laya.Loader.SOUND
        })
        assets.push({
			url: Constants.sound4,
			type: Laya.Loader.SOUND
        })
		assets.push({
            url: Constants.perfect,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.again,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bad,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.buttonAgain,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.buttonNext,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.buttonStart,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.buttonW,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.buttonY,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.chippy,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.great,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.miss,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.next,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.gesture,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.snail,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.syrup,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.car,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.CountDown1,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.CountDown2,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.CountDown3,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.ready,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.go,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.lawn,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.lawnON,
            type: Laya.Loader.IMAGE
        });
        
        assets.push({
            url: Constants.jumpbtn,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.jumpbtnON,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.play,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.restart,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.right,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.sg,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.ship,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.starOFF,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.starON,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.stop,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.time,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.topBan,
            type: Laya.Loader.IMAGE
        });
		assets.push({
			url: "res/atlas/ship.atlas",
			type: Laya.Loader.ATLAS
        });
        assets.push({
            url: Constants.bg,
            type: Laya.Loader.IMAGE
        });
		// 预加载资源
		Laya.loader.load(assets, Laya.Handler.create(this, this.GameManager), Laya.Handler.create(this, this.onAssetsLoading, null, false));
		Laya.loader.on(Laya.Event.ERROR, this, this.onError)
	}
    // 必需先加载进度条资源才能显示进度条
	onProgressAssetsLoaded(): void {
		// 显示进度条
		this.loadOtherAssets();
	}
    onAssetsLoading(progress: number): void {
		console.log(progress);
	}
	onError(err: string): void {
		console.log("加载失败: " + err);
	}



	GameManager(): void {
        Laya.stage.scaleMode = Stage.SCALE_SHOWALL;
        this.bgManager = new Bg();
    	Laya.stage.addChild(this.bgManager);

        this.car = new car();
        Laya.stage.addChild(this.car);
        this.initLetterObjArr();
        
        this.tipsManager = new Tips(this);
        Laya.stage.addChild(this.tipsManager);
        this.tipsManager.jump(true);
        
        this.gameContainer = new Sprite();
        this.gameContainer.y = 0;
        Laya.stage.addChild(this.gameContainer);

        this.gamePanel = new Sprite();
        this.gamePanel.width = gameWidth;
        this.gamePanel.height = 640;
        this.gamePanel.x = 100;
        this.gameContainer.addChild(this.gamePanel);
        
        // Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
		// Laya.stage.on(Laya.Event.MOUSE_DOWN, this, (e)=>{
        //     this.onClickDown(e)
        // });
        gameLevel = window.localStorage.getItem('level')||'0';
        if(gameLevel == '1'){
            this.wordsArr = Beats1
        }
        if(gameLevel == '2'){
            this.wordsArr = Beats2
        }
        this.initGame();
    }
    //鼠标移动事件
	// onMouseMove(): void {
	// 	// console.log("onMouseMove(Y：", Laya.stage.mouseY, ";  x：", Laya.stage.mouseX, '）');
	// 	// console.log("Laya", Laya.stage);
	// }
    initLetterObjArr (): void {
        for (var i = 0; i < this.wordsArr.length; i++) {
            var linArr = [];
            var line = this.wordsArr[i].thing;
            var time = this.wordsArr[i].time;
            for (var j = 0; j < line.length; j++) {
                linArr.push({letter: line[j], status: 0, position: [i, j],isShow:false,time:this.letterV,times:time,next:0});
                if(line[j] != ' ') {
                    this.letterTotal++;
                }
            }
            this.letterObjArr.push(linArr);
        }
    }

    initGame (): void {
        this.tipsManager.on("Start_Game_Event", this, this.startGame);
        this.tipsManager.on("Stop_Game_Event", this, this.stopGame);
        this.tipsManager.on("Play_Game_Event", this, this.playGame);
        this.tipsManager.on("End_Game_Event", this, this.endGame);
    }
    stopGame (): void {
        isPause = true;
        Laya.timer.pause();  
        this.tipsManager.stopTip.alpha = 0;
        this.tipsManager.stopTip.y = 1000;
        this.tipsManager.playTip.alpha = 1;
        let tt = 0;
        for(let L of thingList){
            L.removeSelf()
        }
        for (let I = 0; I < this.letterObjArr.length; I++) {
            if(this.letterObjArr[I][0].next == 2 && this.letterObjArr[I+1] && this.letterObjArr[I+1][0].next == 2){
                this.letterObjArr[I+1][0].times = 100;
                this.letterObjArr[I][0].times = 100;
            }
            if(this.letterObjArr[I][0].next == 2 && this.letterObjArr[I+1] && this.letterObjArr[I+1][0].next == 1){
                this.letterObjArr[I+1][0].times = this.letterObjArr[I+1][0].times*this.letterObjArr[I][0].percent;
            }
            if(this.letterObjArr[I][0].status != -1 && this.letterObjArr[I][0].isShow){
                tt = tt + 1
            }
        }
        this.letterObjArr.map(data => {
            
        })
        i = (i - tt) < 0 ? 0 : i - tt;
    }
    playGame (): void {
        // this.nextTimeout();
        Laya.timer.resume();            
        this.tipsManager.playTip.alpha = 0;
        this.tipsManager.stopTip.y = 200;                
        this.tipsManager.stopTip.alpha = 1;
    }
    startGame (): void {
        this.playMusic();
        this.startWordArr();
    }

    endGame (): void {
        this.endManager = new End(this);
    	Laya.stage.addChild(this.endManager);
        this.tipsManager.countComboTotalScore();
        var obj = this.tipsManager.getScore();
        this.endManager.showEndPanel(obj, this.letterTotal);
    }

    playMusic (): void {
        SoundManager.autoStopMusic = false;
        console.log('ChipmunkFleet')        
        SoundManager.playMusic("sound/ChipmunkFleet.mp3", 1);
        // this.bgMusicChannel = SoundManager.playMusic("res/sounds/game1.mp3", 0);
    }

    startWordArr (): void {
        this.roadArr = [];
        for (var i = 0; i < 4; i++) {
            var oneRoadSprite = new Sprite();
            oneRoadSprite.width = 700;
            oneRoadSprite.height = 640;
            oneRoadSprite.x = 0;
            oneRoadSprite.name = 'road' + i;
            this.roadArr.push(oneRoadSprite);
            this.gamePanel.addChild(oneRoadSprite);
        }
        this.letterObjArr.map(data=>{
            data[0]['road'] = 0;
        })
        i = 0;
        this.nextTimeout();
    }
    nextTimeout() {
        let _this = this;        
        do {
            if (_this.letterObjArr[i]) {
                _this.currLetter = _this.letterObjArr[i][0];
                _this.letterObjArr[i][0].next = 2;
                _this.letterObjArr[i+1]?_this.letterObjArr[i+1][0].next = 1:'';
            } else {
                var lastLine = _this.letterObjArr[_this.letterObjArr.length - 1];
                _this.currLetter = lastLine[lastLine.length - 1];
                Laya.timer.clearAll(this)
                // clearInterval(timeoutId);
                return;
            }
        } while (!_this.currLetter || _this.currLetter.letter == " ");

        var letterBox = new Thing(_this.currLetter);
        letterBox.name = 'x' + _this.getRandomColor();
        thingList.push(letterBox)
        _this.appendOneLetter(letterBox);
        Laya.timer.loop( _this.letterObjArr[i][0].times,this,this.nextTimeout);
        i++;                                    
    }
    getRandomColor ():any {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
	//设置速度
    appendOneLetter (letterBox) {
        this.letterNum++;
        let _this = this;

        this.screenLetterBoxArr.push(letterBox);
        var randomIndex = letterBox.wordObj.road;
		letterBox.guidao = randomIndex;
		if(letterBox.wordObj.isShow){
            letterBox.x = letterBox.wordObj.start.x;
            letterBox.y = letterBox.wordObj.start.y;
        } else {
            letterBox.x = fourRoadPosition[randomIndex].start.x;
            letterBox.y = fourRoadPosition[randomIndex].start.y;
        }
        this.roadArr[randomIndex].addChild(letterBox);
        var handler = new Handler(letterBox, function () {
            if(!isPause){
                this.setStatus(-1);
                if(this.wordObj.letter != '2'){
                    _this.tipsManager.showPlayTip(0);
                }
            }
            _this.removeLetter(this);
        });
        var moveUpdateHandler = new Handler(letterBox, function () {
            // var pressBg = this.pressBgArr[this.guidao];
            var oneRoad = _this.roadArr[this.guidao];
            for (var i = 0; i < oneRoad.numChildren; i++) {
                var letter = oneRoad.getChildAt(i);
                if (letter instanceof Thing && letter.isOver == false) {
                    if(letter.y != 640 && !isPause){
                        this.setStart(
                            {
                                x: letter.x,
                                y: letter.y,
                                scaleX: letter.scaleX,
                                scaleY: letter.scaleY,
                            }
                        )
                        percent = letter.y/640;
                        percent = (100 - Math.floor(percent * 100)) / 100
                        this.setTime(percent);
                        this.setPercent(percent);
                        this.setShow();
                    }
                    if (letter.y >= 420 && letterBox.wordObj.letter == 2 && shipIndex == letterBox.guidao) {
                        _this.onKeyDownLetter(letter, true, -1);
                        break;
                    } else {

                    }
                }
            }
        });

        letterBox.moveTween = Tween.to(letterBox, fourRoadPosition[randomIndex].end, letterBox.wordObj.time, Ease.linearNone, handler);
        letterBox.moveTween.update = moveUpdateHandler;
        letterBox.moveTweenUpdate = moveUpdateHandler;//因为最后会给letter做Tween.clearAll(); 所以需要预留句柄做最后清除轨道痕迹回调

        letterBox.alphaTween = Tween.to(letterBox, {alpha: 1}, letterBox.wordObj.time * 0.2);
        
        letterBox.on('UILetterBox_Remove_Event', this, this.removeLetter);
    }
    
    removeLetter = function (letter) {
        var letterBox = this.screenLetterBoxArr.splice(this.screenLetterBoxArr.indexOf(letter), 1)[0];
        // letterBox.destroyMe();
        letterBox.removeSelf();
        letterBox.destroy(true);
    }

    onClickDown = function (e) {
        // SoundManager.playSound("sound/button.mp3", 1);        
        console.log("onStartDrag", Laya.stage.mouseX, Laya.stage.mouseY)
        this.tipsManager.jump(false);
        setTimeout(() => {
            this.tipsManager.jump(true);            
        }, 500);
        var letter;
        for (var i = 0; i < this.screenLetterBoxArr.length; i++) {
            letter = this.screenLetterBoxArr[i];
            if (letter.isOver == false) {
                console.log(letter.x)
                if (letter.x < 555) {
                    console.log('不在范围里 ' + letter.x);
                    // this.onKeyDownLetter(letter, false);
                    break;
                } else if (letter.x >= 644 && letter.x < 676 ) {
                    if(letter.wordObj.letter == '2'){
                        this.onKeyDownLetter(letter, true, -1);
                    } else {
                        this.onKeyDownLetter(letter, true, 20);
                    }
                    break;
                } else if (letter.x >= 612 && letter.x < 705 ) {
                    if(letter.wordObj.letter == '2'){
                        this.onKeyDownLetter(letter, true, -1);
                    } else {
                        this.onKeyDownLetter(letter, true, 10);
                    }
                    break;
                } else if (letter.x >= 555 && letter.x < 777 ) {
                    if(letter.wordObj.letter == '2'){
                        this.onKeyDownLetter(letter, true, -1);
                    } else {
                        this.onKeyDownLetter(letter, true, 5);
                    }
                    break;
                } else {
                    console.log('不在范围里 ' + letter.y);
                }
                break;
            }
        }
    }

    onKeyDownLetter = function (letter, isPipei, score) {
        if (isPipei) {
            if(score == -1){
                SoundManager.playSound("sound/bad.mp3", 1);                
            }else{
                SoundManager.playSound("sound/beat.mp3", 1);
            }
            this.tipsManager.showPlayTip(score);
            letter.pipei(score);
            letter.moveTweenUpdate.run();
        } else {
            if(letter.wordObj.letter != '2'){
                this.tipsManager.showPlayTip(0);
                letter.bupipei();
            }
        }
    }
}
//激活启动类
new Main();
