import GameConfig from "./GameConfig";
import Ease = Laya.Ease;
import Handler = Laya.Handler;
import SoundManager = Laya.SoundManager;
import Sprite = Laya.Sprite;
import Stage = Laya.Stage;
import Tween = Laya.Tween;
import Constants from "./Constants";
import Bg from "./bg";
import Tips from "./tips";
import Ship from "./ship";
import End from "./end";
import Thing from "./thing";
let _this;
var i = 0,
    mouseR = 0,
    gameLevel = '0',
    thingList = [],
    isPause = false,
    shipRoad = 100,
    shipWidth = 200,
    percent;
import {fourRoadPosition,Beats0,Beats1,Beats2} from "./Road";

class Main {
	private bgManager;//游戏主背景
    private endManager;//结束容器
    private gameContainer;//游戏容器
    private shipContainer;//船移动容器
    private buttonwidth;
    private gamePanel;//游戏区容器
    private tipsManager;//提示容器（层级最高）
    private roadArr = [];//四条路数组
	private wordsArr = Beats0;//单词数组
    private letterTotal = 0;s
    private letterObjArr = [];
    private currLetter = {letter:''};//当前字母
    private screenLetterBoxArr = [];//在屏幕中的字母数组
    private letterV = 3000;//全程时间
    private gouziLength;
    private http;
	constructor() {
        _this = this;
        window.onload = function () {
            window.addEventListener('message',_this.post,false);
        };
		//根据IDE设置初始化引擎		
		if (window["Laya3D"]) Laya3D.init(GameConfig.width, GameConfig.height);
		else Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
		Laya["Physics"] && Laya["Physics"].enable();
		Laya["DebugPanel"] && Laya["DebugPanel"].enable();
		Laya.stage.scaleMode = GameConfig.scaleMode;
        Laya.stage.screenMode = GameConfig.screenMode;
        Laya.stage.alignH = GameConfig.alignH;
        Laya.stage.alignV = GameConfig.alignV;
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
        let that = this;
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
			url: Constants.CountDown1,
			type: Laya.Loader.IMAGE
        })
        assets.push({
			url: Constants.CountDown2,
			type: Laya.Loader.IMAGE
        })
        assets.push({
			url: Constants.CountDown3,
			type: Laya.Loader.IMAGE
        })
        assets.push({
			url: Constants.ready,
			type: Laya.Loader.IMAGE
        })
        assets.push({
			url: Constants.go,
			type: Laya.Loader.IMAGE
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
            url: Constants.energy,
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
            url: Constants.obstacle,
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
            url: Constants.badbul,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.badgre,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.badred,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.badyel,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.gobul,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.gogre,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.gored,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.goyel,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.okbul,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.okgre,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.okred,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.okyel,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.shopbul,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.shopgre,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.shopred,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.shopyel,
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
			url: "res/atlas/ship/bad/bul.atlas",
			type: Laya.Loader.ATLAS
        });
		assets.push({
			url: "res/atlas/ship/bad/gre.atlas",
			type: Laya.Loader.ATLAS
        });
		assets.push({
			url: "res/atlas/ship/bad/red.atlas",
			type: Laya.Loader.ATLAS
        });
		assets.push({
			url: "res/atlas/ship/bad/yel.atlas",
			type: Laya.Loader.ATLAS
        });
		assets.push({
			url: "res/atlas/ship/go/bul.atlas",
			type: Laya.Loader.ATLAS
        });
		assets.push({
			url: "res/atlas/ship/go/gre.atlas",
			type: Laya.Loader.ATLAS
        });
		assets.push({
			url: "res/atlas/ship/go/red.atlas",
			type: Laya.Loader.ATLAS
        });
		assets.push({
			url: "res/atlas/ship/go/yel.atlas",
			type: Laya.Loader.ATLAS
        });
		assets.push({
			url: "res/atlas/ship/ok/bul.atlas",
			type: Laya.Loader.ATLAS
        });
		assets.push({
			url: "res/atlas/ship/ok/gre.atlas",
			type: Laya.Loader.ATLAS
        });
		assets.push({
			url: "res/atlas/ship/ok/red.atlas",
			type: Laya.Loader.ATLAS
        });
		assets.push({
			url: "res/atlas/ship/ok/yel.atlas",
			type: Laya.Loader.ATLAS
        });
		assets.push({
			url: "res/atlas/ship/shop/bul.atlas",
			type: Laya.Loader.ATLAS
        });
		assets.push({
			url: "res/atlas/ship/shop/gre.atlas",
			type: Laya.Loader.ATLAS
        });
		assets.push({
			url: "res/atlas/ship/shop/red.atlas",
			type: Laya.Loader.ATLAS
        });
		assets.push({
			url: "res/atlas/ship/shop/yel.atlas",
			type: Laya.Loader.ATLAS
        });
        assets.push({
            url: Constants.bg1,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg2,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg3,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg4,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg5,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg6,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg7,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg8,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg9,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg10,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg11,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg12,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg13,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg14,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg15,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg16,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg17,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg18,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg19,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg20,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg21,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg22,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg23,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg24,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg25,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg26,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg27,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg28,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg29,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg30,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg31,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg32,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg33,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg34,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants.bg35,
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
        // console.log(progress);
        if(progress == 100){
            this.http.source.postMessage(JSON.stringify({name:'fetchQuestions',data:{}}),this.http.origin);
        }
	}
	onError(err: string): void {
		console.log("加载失败: " + err);
	}



	GameManager(): void {
        
        this.bgManager = new Bg();
    	Laya.stage.addChild(this.bgManager);
        
        this.gameContainer = new Sprite();
        Laya.stage.addChild(this.gameContainer);

        this.gamePanel = new Sprite();
        // this.gamePanel.width = gameWidth;
        this.gamePanel.height = 640;
        this.gameContainer.addChild(this.gamePanel);

        this.buttonwidth = new Sprite();
        this.buttonwidth.alpha = 1;
        this.buttonwidth.while = 1008;
        this.buttonwidth.height = 152;
        this.buttonwidth.y = 488;
        this.buttonwidth.x = 0;
        this.buttonwidth.loadImage("res/imgs/buttonWidth.png");
        this.gameContainer.addChild(this.buttonwidth);
        this.shipContainer = new Ship();
        this.shipContainer.height = 178;
        this.shipContainer.y = 600;
        this.gameContainer.addChild(this.shipContainer);

        this.tipsManager = new Tips(this);
        Laya.stage.addChild(this.tipsManager);
        gameLevel = window.localStorage.getItem('level')||'0';
        if(gameLevel == '1'){
            this.wordsArr = Beats1
        }
        if(gameLevel == '2'){
            this.wordsArr = Beats2
        }
        this.gouziLength = this.wordsArr.length;
        this.initLetterObjArr();
        // Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
		Laya.stage.on(Laya.Event.MOUSE_DOWN, this, (e)=>{
            this.onClickDown(e)
        });
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
        this.http.source.postMessage(JSON.stringify({name:'startGame',data:{}}),this.http.origin);
        setTimeout(() => {
            this.playMusic();            
        }, 500);
        this.startWordArr();
        this.shipContainer.goship();
    }

    endGame (): void {
        this.http.source.postMessage(JSON.stringify({name:'finishGame',data:{}}),this.http.origin);
        this.endManager = new End(this);
    	Laya.stage.addChild(this.endManager);
        var obj = this.tipsManager.getScore();
        this.endManager.showEndPanel(obj, this.letterTotal);
    }

    playMusic (): void {
        SoundManager.autoStopMusic = false;
        SoundManager.playMusic("sound/ChipmunkFleet.mp3", 1);
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
        let roads = 0;
        let roads2 = 1;
        this.letterObjArr.map(data=>{
            let thisRoad = 0
            do {
                thisRoad = parseInt(Math.random()*4+"");
            } while (roads == thisRoad || roads2 == thisRoad)
            roads = thisRoad;
            data[0]['road'] = roads
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
        let _this = this;

        this.screenLetterBoxArr.push(letterBox);
        var randomIndex = letterBox.wordObj.road;
		letterBox.guidao = randomIndex;
		if(letterBox.wordObj.isShow){
            letterBox.x = letterBox.wordObj.start.x;
            letterBox.y = letterBox.wordObj.start.y;
            letterBox.scaleX = letterBox.wordObj.start.scaleX;
            letterBox.scaleY = letterBox.wordObj.start.scaleY;
        } else {
            letterBox.x = fourRoadPosition[randomIndex].start.x;
            letterBox.y = fourRoadPosition[randomIndex].start.y;
            letterBox.scaleX = fourRoadPosition[randomIndex].start.scaleX;
            letterBox.scaleY = fourRoadPosition[randomIndex].start.scaleY;
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
        e.stopPropagation();
        // this.shipContainer.onMove(Laya.stage.mouseX)
		// console.log("onStartDrag", Laya.stage.mouseX, Laya.stage.mouseY)
        var letter;
        let isCollision = false;
        let mouseX = Laya.stage.mouseX;
        if(mouseX > shipRoad && mouseX < shipRoad+shipWidth){
            mouseR = 0;
        } 
        if(mouseX > shipRoad+shipWidth && mouseX < shipRoad+shipWidth*2) {
            mouseR = 1;
        };
        if(mouseX > shipRoad+shipWidth*2 && mouseX < shipRoad+shipWidth*3) {
            mouseR = 2;
        };
        if(mouseX > shipRoad+shipWidth*3 && mouseX < shipRoad+shipWidth*4) {
            mouseR = 3;
        };
        for (var i = 0; i < this.screenLetterBoxArr.length; i++) {
            letter = this.screenLetterBoxArr[i];
            if (letter.isOver == false && letter.guidao == mouseR) {
                if (letter.y < 462) {
                    SoundManager.playSound("sound/button.mp3", 1);                    
                    // console.log('不在范围里 ' + letter.y);
                    // this.onKeyDownLetter(letter, false);
                    break;
                } else if (letter.y >= 462 && letter.y < 500) {
                    if(letter.wordObj.letter == '2'){
                        this.onKeyDownLetter(letter, true, -1);
                    } else {
                        SoundManager.playSound("sound/beat.mp3", 1);
                        this.onKeyDownLetter(letter, true, 20);
                    }
                    break;
                } else if (letter.y >= 500 && letter.y < 550) {
                    if(letter.wordObj.letter == '2'){
                        this.onKeyDownLetter(letter, true, -1);
                    } else {
                        this.onKeyDownLetter(letter, true, 10);
                    }
                    break;
                } else if (letter.y >= 550 && letter.y < 600) {
                    if(letter.wordObj.letter == '2'){
                        this.onKeyDownLetter(letter, true, -1);
                    } else {
                        this.onKeyDownLetter(letter, true, 5);
                    }
                    break;
                } else {
                    SoundManager.playSound("sound/button.mp3", 1);
                    // console.log('不在范围里 ' + letter.y);
                }
                break;
            }
        }
    }

    onKeyDownLetter = function (letter, isPipei, score) {
        if (isPipei) {
            if(score == -1){
                SoundManager.playSound("sound/bad.mp3", 1);                
                this.shipContainer.bandship(letter.guidao);
            }else{
                this.shipContainer.okship(letter.guidao);
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
    post(event) {
        _this.http = event;
    }
}
//激活启动类
new Main();
