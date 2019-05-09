var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//预声明
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.perfect = "res/imgs/perfect.png";
    Constants.type1_bg = "res/imgs/type1/wbg.png";
    Constants.type1_1 = "res/imgs/type1/1.png";
    Constants.type1_2 = "res/imgs/type1/2.png";
    Constants.type1_m1 = "res/imgs/type1/m1.png";
    Constants.type1_m2 = "res/imgs/type1/m2.png";
    Constants.type1_m3 = "res/imgs/type1/m3.png";
    Constants.type1_m4 = "res/imgs/type1/m4.png";
    Constants.type2_bg = "res/imgs/type2/wbg.png";
    Constants.type2_1 = "res/imgs/type2/1.png";
    Constants.type2_2 = "res/imgs/type2/2.png";
    Constants.type2_m1 = "res/imgs/type2/m1.png";
    Constants.type2_m2 = "res/imgs/type2/m2.png";
    Constants.type2_m3 = "res/imgs/type2/m3.png";
    Constants.type2_m4 = "res/imgs/type2/m4.png";
    Constants.type3_bg = "res/imgs/type3/wbg.png";
    Constants.type3_1 = "res/imgs/type3/1.png";
    Constants.type3_2 = "res/imgs/type3/2.png";
    Constants.type3_m1 = "res/imgs/type3/m1.png";
    Constants.type3_m2 = "res/imgs/type3/m2.png";
    Constants.type3_m3 = "res/imgs/type3/m3.png";
    Constants.type3_m4 = "res/imgs/type3/m4.png";
    Constants.type4_bg = "res/imgs/type4/wbg.png";
    Constants.type4_1 = "res/imgs/type4/1.png";
    Constants.type4_2 = "res/imgs/type4/2.png";
    Constants.type4_m1 = "res/imgs/type4/m1.png";
    Constants.type4_m2 = "res/imgs/type4/m2.png";
    Constants.type4_m3 = "res/imgs/type4/m3.png";
    Constants.type4_m4 = "res/imgs/type4/m4.png";
    Constants.bad = "res/imgs/bad.png";
    Constants.bg1 = "bg/1.png";
    Constants.bg2 = "bg/2.png";
    Constants.bg3 = "bg/3.png";
    Constants.bg4 = "bg/4.png";
    Constants.bg5 = "bg/5.png";
    Constants.bg6 = "bg/6.png";
    Constants.bg7 = "bg/7.png";
    Constants.bg8 = "bg/8.png";
    Constants.bg9 = "bg/9.png";
    Constants.bg10 = "bg/10.png";
    Constants.bg11 = "bg/11.png";
    Constants.bg12 = "bg/12.png";
    Constants.bg13 = "bg/13.png";
    Constants.bg14 = "bg/14.png";
    Constants.bg15 = "bg/15.png";
    Constants.bg16 = "bg/16.png";
    Constants.bg17 = "bg/17.png";
    Constants.bg18 = "bg/18.png";
    Constants.bg19 = "bg/19.png";
    Constants.bg20 = "bg/20.png";
    Constants.bg21 = "bg/21.png";
    Constants.bg22 = "bg/22.png";
    Constants.bg23 = "bg/23.png";
    Constants.bg24 = "bg/24.png";
    Constants.bg25 = "bg/25.png";
    Constants.bg26 = "bg/26.png";
    Constants.bg27 = "bg/27.png";
    Constants.bg28 = "bg/28.png";
    Constants.bg29 = "bg/29.png";
    Constants.bg30 = "bg/30.png";
    Constants.bg31 = "bg/31.png";
    Constants.bg32 = "bg/32.png";
    Constants.bg33 = "bg/33.png";
    Constants.bg34 = "bg/34.png";
    Constants.bg35 = "bg/35.png";
    Constants.buttonAgain = "res/imgs/buttonAgain.png";
    Constants.buttonNext = "res/imgs/buttonNext.png";
    Constants.buttonStart = "res/imgs/buttonStart.png";
    Constants.energy = "res/imgs/type1/1.png";
    Constants.obstacle = "res/imgs/type1/2.png";
    Constants.miss = "res/imgs/miss.png";
    Constants.restart = "res/imgs/restart.png";
    Constants.sg = "res/imgs/sg.png";
    Constants.starOFF = "res/imgs/starOFF.png";
    Constants.starON = "res/imgs/starON.png";
    Constants.time = "res/imgs/time.png";
    Constants.topBan = "res/imgs/topBan.png";
    Constants.badbul = "res/atlas/ship/bad/bul.png";
    Constants.badgre = "res/atlas/ship/bad/gre.png";
    Constants.badred = "res/atlas/ship/bad/red.png";
    Constants.badyel = "res/atlas/ship/bad/yel.png";
    Constants.okbul = "res/atlas/ship/ok/bul.png";
    Constants.okgre = "res/atlas/ship/ok/gre.png";
    Constants.okred = "res/atlas/ship/ok/red.png";
    Constants.okyel = "res/atlas/ship/ok/yel.png";
    Constants.gobul = "res/atlas/ship/go/bul.png";
    Constants.gogre = "res/atlas/ship/go/gre.png";
    Constants.gored = "res/atlas/ship/go/red.png";
    Constants.goyel = "res/atlas/ship/go/yel.png";
    Constants.shopbul = "res/atlas/ship/shop/bul.png";
    Constants.shopgre = "res/atlas/ship/shop/gre.png";
    Constants.shopred = "res/atlas/ship/shop/red.png";
    Constants.shopyel = "res/atlas/ship/shop/yel.png";
    Constants.sound0 = "sound/321.mp3";
    Constants.sound1 = "sound/button.mp3";
    Constants.sound2 = "sound/beat.mp3";
    Constants.sound3 = "sound/end.mp3";
    Constants.sound4 = "sound/bad.mp3";
    Constants.CountDown1 = "res/imgs/CountDown1.png";
    Constants.CountDown2 = "res/imgs/CountDown2.png";
    Constants.CountDown3 = "res/imgs/CountDown3.png";
    Constants.ready = "res/imgs/ready.png";
    Constants.go = "res/imgs/GO.png";
    Constants.long = "res/atlas/long.png";
    Constants.loadbg = "load/bg.png";
    Constants.load = "res/atlas/load.png";
    Constants.load1 = "res/atlas/load1.png";
    Constants.test = "res/atlas/ship.png";
    Constants.longSWF = "res/atlas/long/longSWF.png";
    Constants.longSWF1 = "res/atlas/long/longSWF1.png";
    Constants.longSWF2 = "res/atlas/long/longSWF2.png";
    Constants.longSWF3 = "res/atlas/long/longSWF3.png";
    Constants.end0 = "res/atlas/end/0.png";
    Constants.end1 = "res/atlas/end/1.png";
    Constants.end2 = "res/atlas/end/2.png";
    Constants.end3 = "res/atlas/end/3.png";
    Constants.end001 = "res/atlas/end/00.png";
    Constants.end002 = "res/atlas/end/001.png";
    return Constants;
}());
exports.default = Constants;

},{}],2:[function(require,module,exports){
"use strict";
/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
Object.defineProperty(exports, "__esModule", { value: true });
/*
* 游戏初始化配置;
*/
var GameConfig = /** @class */ (function () {
    function GameConfig() {
    }
    GameConfig.init = function () {
        var reg = Laya.ClassUtils.regClass;
    };
    GameConfig.width = 1380;
    GameConfig.height = 640;
    GameConfig.scaleMode = "showall";
    GameConfig.screenMode = "horizontal";
    GameConfig.alignV = "middle";
    GameConfig.alignH = "center";
    GameConfig.startScene = "dialog/LoadingDialog.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    return GameConfig;
}());
exports.default = GameConfig;
GameConfig.init();

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var layaMaxUI_1 = require("./ui/layaMaxUI");
var LoadingDialog = /** @class */ (function (_super) {
    __extends(LoadingDialog, _super);
    // private progress = '0'
    function LoadingDialog() {
        var _this = _super.call(this) || this;
        // this.width = 1380;
        // this.height = 640;
        // this.autoDestroyAtClosed = true
        _this.isPopupCenter = true;
        return _this;
        // this.pos(0, 0)
    }
    LoadingDialog.prototype.onOpened = function () {
        // this.changeProgressValue(0)    
    };
    LoadingDialog.prototype.changeProgressValue = function (nber) {
        // if (!this.progress) {
        //     Laya.timer.once(200, this, this.changeProgressValue)
        //     return
        // }
        // const num = Math.ceil(nber * 100) + "%"
        // this.progress.text = num;
    };
    LoadingDialog.prototype.updateTip = function (tip) {
        // this.progress.text = tip
    };
    LoadingDialog.prototype.onClick = function () {
        this.close();
    };
    return LoadingDialog;
}(layaMaxUI_1.ui.dialog.LoadingDialogUI));
exports.default = LoadingDialog;

},{"./ui/layaMaxUI":11}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameConfig_1 = require("./GameConfig");
var Ease = Laya.Ease;
var Handler = Laya.Handler;
var SoundManager = Laya.SoundManager;
var Sprite = Laya.Sprite;
var Tween = Laya.Tween;
var LoadingDialog_1 = require("./LoadingDialog");
var Constants_1 = require("./Constants");
var bg_1 = require("./bg");
var tips_1 = require("./tips");
var ship_1 = require("./ship");
var end_1 = require("./end");
var thing_1 = require("./thing");
var _this, gamePanel, iIndex = 0, mouseR = 0, thingList = [], isPause = false, shipRoad = 100, shipWidth = 200, roads = 0, percent, Beats0, Beats1, Beats2, bgx;
var Road_1 = require("./Road");
var Main = /** @class */ (function () {
    function Main() {
        this.roadArr = []; //四条路数组
        this.wordsArr = Beats0; //单词数组
        this.letterTotal = 0;
        this.letterObjArr = [];
        this.currLetter = { letter: '' }; //当前字母
        this.screenLetterBoxArr = []; //在屏幕中的字母数组
        this.letterV = 3000; //全程时间
        this.typeLVL = 'type1';
        this.start321 = "sound/321.mp3";
        this.end = "sound/end.mp3";
        this.removeLetter = function (letter) {
            var letterBox = this.screenLetterBoxArr.splice(this.screenLetterBoxArr.indexOf(letter), 1)[0];
            // letterBox.destroyMe();
            letterBox.removeSelf();
            letterBox.destroy(true);
        };
        this.onClickDown = function (index) {
            var letter;
            var isCollision = false;
            for (var i = 0; i < this.screenLetterBoxArr.length; i++) {
                letter = this.screenLetterBoxArr[i];
                if (letter.isOver == false && letter.guidao == index) {
                    if (letter.y < 480) {
                        break;
                    }
                    else if (letter.y >= 480 && letter.y < 600) {
                        if (letter.wordObj.letter == '2') {
                            this.onKeyDownLetter(letter, true, -1);
                        }
                        else {
                            this.onKeyDownLetter(letter, true, 20);
                        }
                        break;
                    }
                    break;
                }
                else {
                }
            }
        };
        this.onKeyDownLetter = function (letter, isPipei, score) {
            if (isPipei) {
                if (score == -1) {
                    if (this.typeLVL == 'type1') {
                        this.shipContainer.bandship(letter.guidao);
                    }
                }
                else {
                    if (this.typeLVL == 'type1') {
                        this.shipContainer.okship(letter.guidao);
                    }
                }
                this.tipsManager.showPlayTip(score);
                letter.pipei(score);
                letter.moveTweenUpdate.run();
            }
            else {
                if (letter.wordObj.letter != '2') {
                    this.tipsManager.showPlayTip(0);
                    letter.bupipei();
                }
            }
        };
        _this = this;
        window.onload = function () {
            window.parent.postMessage({ name: 'fetchQuestions', data: {} }, '*');
            window.addEventListener('message', _this.post, false);
            window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function () {
                setTimeout(function () {
                    if (window.orientation === 180 || window.orientation === 0) {
                        // if(window.innerHeight>700||window.innerWidth>700 && window.innerWidth>window.innerHeight){
                        // }else{
                        // Laya.stage.width = 1008;
                        // if(_this.endManager) _this.endManager.pos(Laya.stage.width/2,0);
                        // if(gamePanel) gamePanel.x = Laya.stage.width/2;
                        // Laya.stage.screenMode = GameConfig.screenMode;
                        // }
                        Laya.stage.scaleMode = 'exactfit';
                    }
                    if (window.orientation === 90 || window.orientation === -90) {
                        // Laya.stage.width = 1380;
                        // if(_this.endManager) _this.endManager.pos(Laya.stage.width/2,0);
                        // if(gamePanel) gamePanel.x = Laya.stage.width/2;
                        // Laya.stage.screenMode = GameConfig.screenMode;
                        Laya.stage.scaleMode = 'showall';
                    }
                }, 500);
            }, false);
        };
        //根据IDE设置初始化引擎	
        Laya.init(GameConfig_1.default.width, GameConfig_1.default.height, Laya["WebGL"]);
        Laya["Physics"] && Laya["Physics"].enable();
        Laya["DebugPanel"] && Laya["DebugPanel"].enable();
        Laya.stage.scaleMode = '';
        Laya.stage.scaleMode = GameConfig_1.default.scaleMode;
        Laya.stage.screenMode = GameConfig_1.default.screenMode;
        Laya.stage.alignH = GameConfig_1.default.alignH;
        Laya.stage.alignV = GameConfig_1.default.alignV;
        Laya.stage.width = window.innerHeight > 700 || window.innerWidth > 700 && window.innerWidth > window.innerHeight ? 1380 : 1008;
        //兼容微信不支持加载scene后缀场景
        Laya.URL.exportSceneToJson = GameConfig_1.default.exportSceneToJson;
        //打开调试面板（通过IDE设置调试模式，或者url地址增加debug=true参数，均可打开调试面板）
        if (GameConfig_1.default.debug || Laya.Utils.getQueryString("debug") == "true")
            Laya.enableDebugPanel();
        if (GameConfig_1.default.physicsDebug && Laya["PhysicsDebugDraw"])
            Laya["PhysicsDebugDraw"].enable();
        if (GameConfig_1.default.stat)
            Laya.Stat.show();
        Laya.alertGlobalError = true;
        Laya.stage.bgColor = "white";
        UIConfig.popupBgAlpha = 1;
        UIConfig.closeDialogOnSide = false;
        UIConfig.popupBgColor = "#ffffff";
        SoundManager.setSoundVolume(0);
        SoundManager.playSound(this.end, 1);
        SoundManager.playSound(this.start321, 1);
        //预加载
        this.loadProgessAssets();
        //激活资源版本控制，version.json由IDE发布功能自动生成，如果没有也不影响后续流程
        Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
    }
    Main.prototype.onVersionLoaded = function () {
        //激活大小图映射，加载小图的时候，如果发现小图在大图合集里面，则优先加载大图合集，而不是小图
        Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
    };
    Main.prototype.loadProgessAssets = function () {
        Laya.loader.load(["res/atlas/load.atlas", "load/bg.png"], Laya.Handler.create(this, this.onProgressAssetsLoaded));
    };
    Main.prototype.onConfigLoaded = function () {
        //加载IDE指定的场景
        GameConfig_1.default.startScene && Laya.Scene.open(GameConfig_1.default.startScene);
    };
    //预加载
    Main.prototype.loadOtherAssets = function () {
        var that = this;
        var assets = [];
        for (var i = 0; i < 532; i++) {
            assets.push({
                url: that.data.musicUrl,
                type: Laya.Loader.SOUND
            });
        }
        assets.push({
            url: that.data.musicUrl,
            type: Laya.Loader.SOUND
        });
        assets.push({
            url: that.data.explainAudioUrl,
            type: Laya.Loader.SOUND
        });
        assets.push({
            url: Constants_1.default.type1_1,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.type1_2,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.type1_bg,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.type1_m1,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.type1_m2,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.type1_m3,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.type1_m4,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.type2_1,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.type2_2,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.type2_bg,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.type2_m1,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.type2_m2,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.type2_m3,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.type2_m4,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.type3_1,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.type3_2,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.type3_bg,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.type3_m1,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.type3_m2,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.type3_m3,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.type3_m4,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.type4_1,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.type4_2,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.type4_bg,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.type4_m1,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.type4_m2,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.type4_m3,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.type4_m4,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.CountDown1,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.sound0,
            type: Laya.Loader.SOUND
        });
        assets.push({
            url: Constants_1.default.sound1,
            type: Laya.Loader.SOUND
        });
        assets.push({
            url: Constants_1.default.sound2,
            type: Laya.Loader.SOUND
        });
        assets.push({
            url: Constants_1.default.sound3,
            type: Laya.Loader.SOUND
        });
        assets.push({
            url: Constants_1.default.sound4,
            type: Laya.Loader.SOUND
        });
        assets.push({
            url: Constants_1.default.test,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.CountDown1,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.CountDown2,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.CountDown3,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.ready,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.go,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.perfect,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bad,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.buttonAgain,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.buttonNext,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.buttonStart,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.energy,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.miss,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.obstacle,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.restart,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.sg,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.badbul,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.badgre,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.badred,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.badyel,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.gobul,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.gogre,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.gored,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.goyel,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.okbul,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.okgre,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.okred,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.okyel,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.shopbul,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.shopgre,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.shopred,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.shopyel,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.starOFF,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.starON,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.time,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.topBan,
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
            url: "res/atlas/ship.atlas",
            type: Laya.Loader.ATLAS
        });
        assets.push({
            url: Constants_1.default.bg1,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg2,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg3,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg4,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg5,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg6,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg7,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg8,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg9,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg10,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg11,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg12,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg13,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg14,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg15,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg16,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg17,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg18,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg19,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg20,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg21,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg22,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg23,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg24,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg25,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg26,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg27,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg28,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg29,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg30,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg31,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg32,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg33,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg34,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.bg35,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.long,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.load,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.loadbg,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: "res/atlas/load.atlas",
            type: Laya.Loader.ATLAS
        });
        assets.push({
            url: "res/atlas/long/longSWF.atlas",
            type: Laya.Loader.ATLAS
        });
        assets.push({
            url: Constants_1.default.longSWF,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.longSWF1,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.longSWF2,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.longSWF3,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: "res/atlas/end/0.atlas",
            type: Laya.Loader.ATLAS
        });
        assets.push({
            url: "res/atlas/end/1.atlas",
            type: Laya.Loader.ATLAS
        });
        assets.push({
            url: "res/atlas/end/2.atlas",
            type: Laya.Loader.ATLAS
        });
        assets.push({
            url: "res/atlas/end/3.atlas",
            type: Laya.Loader.ATLAS
        });
        assets.push({
            url: "res/atlas/end/00.atlas",
            type: Laya.Loader.ATLAS
        });
        assets.push({
            url: Constants_1.default.end0,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.end001,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.end002,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.end1,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.end2,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.end3,
            type: Laya.Loader.IMAGE
        });
        // 预加载资源
        Laya.loader.load(assets, Laya.Handler.create(this, this.onAssetsLoaded), Laya.Handler.create(this, this.onAssetsLoading, null, false));
        Laya.loader.on(Laya.Event.ERROR, this, this.onError);
    };
    // 必需先加载进度条资源才能显示进度条
    Main.prototype.onProgressAssetsLoaded = function () {
        var _this_1 = this;
        // 显示进度条
        // 显示进度条
        this.loadingDialog = new LoadingDialog_1.default();
        // this.loadingDialog.width = 640;
        // this.loadingDialog.height = 640;
        // this.loadingDialog.popup(true, false);
        setTimeout(function () {
            _this_1.loadOtherAssets();
        }, 500);
    };
    Main.prototype.onAssetsLoading = function (progress) {
        // this.loadingDialog.changeProgressValue(progress);
    };
    Main.prototype.onAssetsLoaded = function () {
        window.parent.postMessage({ name: 'fetchQuestions', data: {} }, '*');
        this.GameManager();
    };
    Main.prototype.onError = function (err) {
        console.log("加载失败: " + err);
        // this.loadingDialog.updateTip("加载失败: " + err)
    };
    Main.prototype.GameManager = function () {
        var _this_1 = this;
        setTimeout(function () {
            LoadingDialog_1.default.closeAll();
            Laya.stage.scaleMode = window.innerWidth > window.innerHeight ? 'showall' : 'exactfit';
            _this_1.heightAll = 690;
            Laya.stage.removeChild(_this_1.bgManager);
            Laya.stage.removeChild(gamePanel);
            Laya.stage.removeChild(_this_1.buttonwidth);
            Laya.stage.removeChild(_this_1.tipsManager);
            Laya.stage.removeChild(_this_1.endManager);
            _this_1.letterTotal = 0;
            _this_1.letterObjArr = [];
            _this_1.currLetter = { letter: '' }; //当前字母
            iIndex = 0;
            thingList = [];
            _this_1.wordsArr = [];
            _this_1.screenLetterBoxArr = [];
            _this_1.letterV = 3000; //全程时间
            _this_1.gouziLength = '';
            _this_1.bg = new Sprite();
            _this_1.bg.width = 1380;
            _this_1.bg.height = 640;
            _this_1.bg.pivot(Laya.stage.width / 2, 0);
            _this_1.bg.x = _this_1.heightAll;
            _this_1.bg.loadImage('res/imgs/' + _this_1.typeLVL + '/wbg.png');
            Laya.stage.addChild(_this_1.bg);
            gamePanel = new Sprite();
            gamePanel.width = 1008;
            gamePanel.height = 640;
            gamePanel.pivot(504, 0);
            gamePanel.x = Laya.stage.width / 2;
            Laya.stage.addChild(gamePanel);
            if (_this_1.typeLVL == 'type1') {
                _this_1.bgManager = new bg_1.default();
                gamePanel.addChild(_this_1.bgManager);
            }
            _this_1.thingRoad = new Sprite();
            _this_1.thingRoad.while = 1008;
            _this_1.thingRoad.height = 640;
            _this_1.thingRoad.pivot(504, 0);
            _this_1.thingRoad.x = 300;
            gamePanel.addChild(_this_1.thingRoad);
            _this_1.buttonwidth = new Sprite();
            _this_1.buttonwidth.while = 1008;
            _this_1.buttonwidth.height = 152;
            _this_1.buttonwidth.pivot(504, 488);
            _this_1.buttonwidth.x = 504;
            _this_1.buttonwidth.loadImage("res/imgs/buttonWidth.png");
            gamePanel.addChild(_this_1.buttonwidth);
            _this_1.shipContainer = new ship_1.default(_this_1);
            _this_1.shipContainer.height = 178;
            _this_1.shipContainer.width = 1008;
            _this_1.shipContainer.y = 600;
            gamePanel.addChild(_this_1.shipContainer);
            _this_1.tipsManager = new tips_1.default(_this_1, gamePanel);
            _this_1.tipsManager.width = 1008;
            _this_1.tipsManager.pivot(504, 0);
            _this_1.tipsManager.x = 504;
            gamePanel.addChild(_this_1.tipsManager);
            _this_1.wordsArr = Beats0;
            _this_1.gouziLength = _this_1.wordsArr.filter(function (item) {
                return item.thing == '1';
            }).length;
            _this_1.initLetterObjArr();
            _this_1.initGame();
        }, 2000);
    };
    //鼠标移动事件
    // onMouseMove(): void {
    // 	// console.log("onMouseMove(Y：", Laya.stage.mouseY, ";  x：", Laya.stage.mouseX, '）');
    // 	// console.log("Laya", Laya.stage);
    // }
    Main.prototype.initLetterObjArr = function () {
        for (var i = 0; i < this.wordsArr.length; i++) {
            var linArr = [];
            var line = this.wordsArr[i].thing;
            var time = this.wordsArr[i].time;
            for (var j = 0; j < line.length; j++) {
                linArr.push({ letter: line[j], status: 0, position: [i, j], isShow: false, time: this.letterV, times: time, next: 0 });
                if (line[j] != ' ') {
                    this.letterTotal++;
                }
            }
            this.letterObjArr.push(linArr);
        }
    };
    Main.prototype.initGame = function () {
        this.tipsManager.on("Start_Game_Event", this, this.startGame);
        this.tipsManager.on("End_Game_Event", this, this.endGame);
    };
    Main.prototype.startGame = function () {
        window.parent.postMessage({ name: 'startGame', data: {} }, '*');
        this.playMusic();
        this.startWordArr();
        if (this.typeLVL == 'type1') {
            this.shipContainer.goship();
        }
    };
    Main.prototype.endGame = function () {
        this.endManager = new end_1.default(this, LoadingDialog_1.default);
        this.endManager.width = 1380;
        this.endManager.height = 640;
        this.endManager.pivot(690, 0);
        this.endManager.pos(Laya.stage.width / 2, 0);
        window.parent.postMessage({ name: 'finishGame', data: {} }, '*');
        Laya.stage.addChild(this.endManager);
        var obj = this.tipsManager.getScore();
        this.endManager.showEndPanel(obj, this.letterTotal);
    };
    Main.prototype.playMusic = function () {
        SoundManager.autoStopMusic = false;
        SoundManager.playMusic(this.data.musicUrl, 1);
        SoundManager.setSoundVolume(1);
    };
    Main.prototype.startWordArr = function () {
        this.roadArr = [];
        for (var i = 0; i < 4; i++) {
            var oneRoadSprite = new Sprite();
            oneRoadSprite.width = 200;
            oneRoadSprite.height = 640;
            oneRoadSprite.name = 'road' + i;
            this.roadArr.push(oneRoadSprite);
            this.thingRoad.addChild(oneRoadSprite);
        }
        this.letterObjArr.map(function (data) {
            var thisRoad = 0;
            do {
                thisRoad = parseInt(Math.random() * 4 + "");
            } while (roads == thisRoad);
            roads = thisRoad;
            data[0]['road'] = roads;
        });
        iIndex = 0;
        this.nextTimeout();
    };
    Main.prototype.nextTimeout = function () {
        var _this = this;
        do {
            if (_this.letterObjArr[iIndex]) {
                _this.currLetter = _this.letterObjArr[iIndex][0];
                _this.letterObjArr[iIndex][0].next = 2;
                _this.letterObjArr[iIndex + 1] ? _this.letterObjArr[iIndex + 1][0].next = 1 : '';
            }
            else {
                var lastLine = _this.letterObjArr[_this.letterObjArr.length - 1];
                _this.currLetter = lastLine[lastLine.length - 1];
                Laya.timer.clearAll(this);
                // clearInterval(timeoutId);
                return;
            }
        } while (!_this.currLetter || _this.currLetter.letter == " ");
        var letterBox = new thing_1.default(_this, _this.currLetter);
        letterBox.name = 'x' + _this.getRandomColor();
        thingList.push(letterBox);
        _this.appendOneLetter(letterBox);
        Laya.timer.loop(_this.letterObjArr[iIndex][0].times, this, this.nextTimeout);
        iIndex++;
    };
    Main.prototype.getRandomColor = function () {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    };
    //设置速度
    Main.prototype.appendOneLetter = function (letterBox) {
        var _this = this;
        this.screenLetterBoxArr.push(letterBox);
        var randomIndex = letterBox.wordObj.road;
        letterBox.guidao = randomIndex;
        if (letterBox.wordObj.isShow) {
            letterBox.x = letterBox.wordObj.start.x + (this.heightAll);
            letterBox.y = letterBox.wordObj.start.y;
            letterBox.scaleX = letterBox.wordObj.start.scaleX;
            letterBox.scaleY = letterBox.wordObj.start.scaleY;
        }
        else {
            letterBox.x = Road_1.fourRoadPosition[randomIndex].start.x + (this.heightAll);
            letterBox.y = Road_1.fourRoadPosition[randomIndex].start.y;
            letterBox.scaleX = Road_1.fourRoadPosition[randomIndex].start.scaleX;
            letterBox.scaleY = Road_1.fourRoadPosition[randomIndex].start.scaleY;
        }
        this.roadArr[randomIndex].addChild(letterBox);
        var handler = new Handler(letterBox, function () {
            if (!isPause) {
                this.setStatus(-1);
                if (this.wordObj.letter != '2') {
                    _this.tipsManager.showPlayTip(0);
                }
            }
            _this.removeLetter(this);
        });
        var moveUpdateHandler = new Handler(letterBox, function () {
            var oneRoad = _this.roadArr[this.guidao];
            for (var i = 0; i < oneRoad.numChildren; i++) {
                var letter = oneRoad.getChildAt(i);
                if (letter instanceof thing_1.default && letter.isOver == false) {
                    if (letter.y != 640 && !isPause) {
                        this.setStart({
                            x: letter.x,
                            y: letter.y,
                            scaleX: letter.scaleX,
                            scaleY: letter.scaleY,
                        });
                        percent = letter.y / 640;
                        percent = (100 - Math.floor(percent * 100)) / 100;
                        this.setTime(percent);
                        this.setPercent(percent);
                        this.setShow();
                    }
                }
            }
        });
        letterBox.moveTween = Tween.to(letterBox, { x: (Road_1.fourRoadPosition[randomIndex].end.x + (this.heightAll)), y: 640 }, letterBox.wordObj.time, Ease.linearNone, handler);
        letterBox.moveTween.update = moveUpdateHandler;
        letterBox.moveTweenUpdate = moveUpdateHandler; //因为最后会给letter做Tween.clearAll(); 所以需要预留句柄做最后清除轨道痕迹回调
        letterBox.alphaTween = Tween.to(letterBox, { alpha: 1 }, letterBox.wordObj.time * 0.2);
        letterBox.on('UILetterBox_Remove_Event', this, this.removeLetter);
    };
    Main.prototype.post = function (event) {
        var data = event.data;
        if (data.data != undefined && data.data.length > 0) {
            data = event.data;
        }
        else {
            data = { "name": "castQuestions", "data": [
                    { questionId: 2101,
                        title: "跟随节奏",
                        payload: {
                            explainAudioUrl: "https://muses-online.fbcontent.cn/muses-lesson/music/audio/%E6%B8%B8%E6%88%8F%E9%9F%B3%E9%A2%91/%E8%8A%B1%E6%A0%97%E9%BC%A0%E6%B8%B8%E6%88%8F%E9%9F%B3%E9%A2%91/%E8%8A%B1%E6%A0%97%E9%BC%A0%E6%B8%B8%E6%88%8F2%E8%A7%A3%E8%AF%B4.mp3",
                            musicUrl: "https://muses-online.fbcontent.cn/muses-lesson/music/audio/%E6%B8%B8%E6%88%8F%E9%9F%B3%E9%A2%91/%E8%8A%B1%E6%A0%97%E9%BC%A0%E6%B8%B8%E6%88%8F%E9%9F%B3%E9%A2%91/%E8%8A%B1%E6%A0%97%E9%BC%A0%E5%88%9D%E7%BA%A7%E9%9F%B3%E9%A2%91.mp3",
                            musicDuration: 532930,
                            skinType: 1,
                            objects: [
                                { size: 1, startTime: 6500, endTime: 7500, obstacle: false },
                                { size: 1, startTime: 7500, endTime: 8500, obstacle: false },
                                { size: 1, startTime: 8600, endTime: 9600, obstacle: false },
                                { size: 1, startTime: 9600, endTime: 10600, obstacle: false },
                                { size: 1, startTime: 10700, endTime: 11700, obstacle: false },
                                { size: 1, startTime: 11800, endTime: 12800, obstacle: false },
                                { size: 1, startTime: 12900, endTime: 13900, obstacle: false },
                                { size: 1, startTime: 14000, endTime: 15000, obstacle: false },
                                { size: 1, startTime: 15100, endTime: 16100, obstacle: false },
                                { size: 1, startTime: 16200, endTime: 17200, obstacle: false },
                                { size: 1, startTime: 17200, endTime: 18200, obstacle: false },
                                { size: 1, startTime: 18300, endTime: 19300, obstacle: false },
                                { size: 1, startTime: 19400, endTime: 20400, obstacle: false },
                                { size: 1, startTime: 20400, endTime: 21400, obstacle: false },
                                { size: 1, startTime: 21500, endTime: 22500, obstacle: false },
                                { size: 1, startTime: 22500, endTime: 23500, obstacle: false },
                                { size: 1, startTime: 23600, endTime: 24600, obstacle: false },
                                { size: 1, startTime: 24700, endTime: 25700, obstacle: false },
                                { size: 1, startTime: 25700, endTime: 26700, obstacle: false },
                                { size: 1, startTime: 26800, endTime: 27800, obstacle: false },
                                { size: 1, startTime: 27800, endTime: 28800, obstacle: false },
                                { size: 1, startTime: 28800, endTime: 29800, obstacle: false },
                                { size: 1, startTime: 29900, endTime: 30900, obstacle: false },
                                { size: 1, startTime: 31000, endTime: 32000, obstacle: false },
                                { size: 1, startTime: 32100, endTime: 33100, obstacle: false },
                                { size: 1, startTime: 33100, endTime: 34100, obstacle: false },
                                { size: 1, startTime: 34200, endTime: 35200, obstacle: false },
                                { size: 1, startTime: 35300, endTime: 36300, obstacle: false },
                                { size: 1, startTime: 36400, endTime: 37400, obstacle: false },
                                { size: 1, startTime: 37500, endTime: 38500, obstacle: false },
                                { size: 1, startTime: 38600, endTime: 39600, obstacle: false },
                                { size: 1, startTime: 39600, endTime: 40600, obstacle: false },
                                { size: 1, startTime: 40800, endTime: 41800, obstacle: false },
                                { size: 1, startTime: 41800, endTime: 42800, obstacle: false },
                                { size: 1, startTime: 42900, endTime: 43900, obstacle: false },
                                { size: 1, startTime: 44000, endTime: 45000, obstacle: false },
                                { size: 1, startTime: 45100, endTime: 46100, obstacle: false },
                                { size: 1, startTime: 46100, endTime: 47100, obstacle: false },
                                { size: 1, startTime: 47100, endTime: 48100, obstacle: false },
                                { size: 1, startTime: 13200, endTime: 14200, obstacle: true },
                                { size: 1, startTime: 24000, endTime: 25000, obstacle: true },
                                { size: 1, startTime: 30000, endTime: 31000, obstacle: true },
                                { size: 1, startTime: 38900, endTime: 39900, obstacle: true },
                                { size: 1, startTime: 43000, endTime: 44000, obstacle: true }
                            ],
                            type: 107102
                        },
                        type: 107102
                    }
                ]
            };
        }
        this.typeLVL = 'type' + data.data[0].payload.skinType;
        var change, datas = data.data[0].payload.objects;
        for (var i_1 = datas.length - 1; i_1 >= 0; i_1--) {
            for (var j = 0; j < i_1; j++) {
                if (datas[j + 1].startTime < datas[j].startTime) {
                    change = datas[j + 1];
                    datas[j + 1] = datas[j];
                    datas[j] = change;
                }
            }
        }
        ;
        _this.data = data.data[0].payload;
        var list = datas;
        this.letterV = list[0].endTime - list[0].startTime;
        var Beats = [{ time: list[0].startTime, thing: list[0].obstacle ? '2' : '1' }];
        for (var i = 0; i < list.length; i++) {
            if (list[i + 1]) {
                var time = list[i + 1].startTime - list[i].startTime;
                Beats.push({ time: time, thing: list[i + 1].obstacle ? '2' : '1' });
            }
        }
        Beats0 = Beats;
    };
    return Main;
}());
//激活启动类
new Main();

},{"./Constants":1,"./GameConfig":2,"./LoadingDialog":3,"./Road":5,"./bg":6,"./end":7,"./ship":8,"./thing":9,"./tips":10}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bgx = 0;
exports.fourRoadPosition = [
    {
        start: {
            x: -150,
            y: 0,
            scaleX: 2,
            scaleY: 2,
        },
        end: {
            x: -320,
            y: 640,
            scaleX: 2,
            scaleY: 2,
        }
    }, {
        start: {
            x: -50,
            y: 0,
            scaleX: 2,
            scaleY: 2,
        },
        end: {
            x: -110,
            y: 640,
            scaleX: 2,
            scaleY: 2,
        }
    }, {
        start: {
            x: 50,
            y: 0,
            scaleX: 2,
            scaleY: 2,
        },
        end: {
            x: 90,
            y: 640,
            scaleX: 2,
            scaleY: 2,
        }
    }, {
        start: {
            x: 150,
            y: 0,
            scaleX: 2,
            scaleY: 2,
        },
        end: {
            x: 300,
            y: 640,
            scaleX: 2,
            scaleY: 2
        }
    }
];
exports.Beats0 = [
    { time: 2156, thing: "1" },
    { time: 2133, thing: "1" },
    { time: 2246, thing: "1" },
    { time: 2127, thing: "1" },
    { time: 2099, thing: "1" },
    { time: 2171, thing: "1" },
    { time: 2118, thing: "1" },
    { time: 2087, thing: "1" },
    { time: 2180, thing: "1" },
    { time: 2039, thing: "1" },
    { time: 2115, thing: "1" },
    { time: 2158, thing: "1" },
    { time: 2173, thing: "1" },
    { time: 2174, thing: "1" },
    { time: 2171, thing: "1" },
    { time: 2145, thing: "1" },
    { time: 2206, thing: "1" },
    { time: 2125, thing: "1" },
    { time: 2124, thing: "1" },
    { time: 2138, thing: "1" },
];
exports.Beats1 = [
    { time: 1189, thing: "1" },
    { time: 948, thing: "1" },
    { time: 1117, thing: "1" },
    { time: 1061, thing: "1" },
    { time: 1109, thing: "1" },
    { time: 1101, thing: "1" },
    { time: 1042, thing: "1" },
    { time: 1076, thing: "1" },
    { time: 1061, thing: "1" },
    { time: 1103, thing: "1" },
    { time: 1035, thing: "1" },
    { time: 1099, thing: "1" },
    { time: 1024, thing: "1" },
    { time: 1061, thing: "1" },
    { time: 1040, thing: "1" },
    { time: 1059, thing: "1" },
    { time: 1090, thing: "1" },
    { time: 1074, thing: "1" },
    { time: 1061, thing: "1" },
    { time: 1040, thing: "1" },
    { time: 991, thing: "1" },
    { time: 1147, thing: "1" },
    { time: 1025, thing: "1" },
    { time: 1077, thing: "1" },
    { time: 1013, thing: "1" },
    { time: 1200, thing: "1" },
    { time: 1094, thing: "1" },
    { time: 1078, thing: "1" },
    { time: 1077, thing: "1" },
    { time: 1038, thing: "1" },
    { time: 1119, thing: "1" },
    { time: 1035, thing: "1" },
    { time: 1185, thing: "1" },
    { time: 1109, thing: "1" },
    { time: 1003, thing: "1" },
    { time: 1025, thing: "1" },
    { time: 1065, thing: "1" },
    { time: 1139, thing: "1" },
    { time: 998, thing: "1" },
    { time: 1122, thing: "1" },
    { time: 1056, thing: "1" },
];
exports.Beats2 = [
    { time: 1095, thing: "1" },
    { time: 1102, thing: "1" },
    { time: 1130, thing: "1" },
    { time: 1014, thing: "1" },
    { time: 1119, thing: "1" },
    { time: 1080, thing: "1" },
    { time: 1058, thing: "1" },
    { time: 1068, thing: "1" },
    { time: 362, thing: "2" },
    { time: 262, thing: "1" },
    { time: 520, thing: "1" },
    { time: 520, thing: "1" },
    { time: 557, thing: "1" },
    { time: 543, thing: "1" },
    { time: 517, thing: "1" },
    { time: 524, thing: "1" },
    { time: 525, thing: "1" },
    { time: 540, thing: "1" },
    { time: 530, thing: "1" },
    { time: 502, thing: "1" },
    { time: 534, thing: "1" },
    { time: 522, thing: "1" },
    { time: 557, thing: "1" },
    { time: 563, thing: "1" },
    { time: 534, thing: "1" },
    { time: 531, thing: "1" },
    { time: 362, thing: "2" },
    { time: 232, thing: "1" },
    { time: 520, thing: "1" },
    { time: 592, thing: "1" },
    { time: 516, thing: "1" },
    { time: 466, thing: "1" },
    { time: 532, thing: "1" },
    { time: 491, thing: "1" },
    { time: 528, thing: "1" },
    { time: 500, thing: "1" },
    { time: 525, thing: "1" },
    { time: 510, thing: "1" },
    { time: 576, thing: "1" },
    { time: 548, thing: "1" },
    { time: 523, thing: "1" },
    { time: 545, thing: "1" },
    { time: 569, thing: "1" },
    { time: 493, thing: "1" },
    { time: 577, thing: "1" },
    { time: 518, thing: "1" },
    { time: 604, thing: "1" },
    { time: 485, thing: "1" },
    { time: 579, thing: "1" },
    { time: 515, thing: "1" },
    { time: 362, thing: "2" },
    { time: 250, thing: "1" },
    { time: 537, thing: "1" },
    { time: 547, thing: "1" },
    { time: 480, thing: "1" },
    { time: 601, thing: "1" },
    { time: 521, thing: "1" },
    { time: 584, thing: "1" },
    { time: 527, thing: "1" },
    { time: 499, thing: "1" },
    { time: 569, thing: "1" },
    { time: 551, thing: "1" },
    { time: 566, thing: "1" },
    { time: 557, thing: "1" },
    { time: 527, thing: "1" },
    { time: 362, thing: "2" },
    { time: 181, thing: "1" },
    { time: 561, thing: "1" },
    { time: 498, thing: "1" },
    { time: 529, thing: "1" },
    { time: 571, thing: "1" },
    { time: 495, thing: "1" },
    { time: 558, thing: "1" },
    { time: 557, thing: "1" },
    { time: 362, thing: "2" },
    { time: 246, thing: "1" },
    { time: 473, thing: "1" },
    { time: 522, thing: "1" },
    { time: 534, thing: "1" },
    { time: 572, thing: "1" },
    { time: 541, thing: "1" },
    { time: 580, thing: "1" },
    { time: 490, thing: "1" },
    { time: 555, thing: "1" }
];

},{}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bg = /** @class */ (function (_super) {
    __extends(bg, _super);
    function bg() {
        var _this = _super.call(this) || this;
        _this.initBg();
        return _this;
    }
    bg.prototype.initBg = function () {
        var bgContainer = new Laya.Animation();
        bgContainer.loadAnimation("ani/bg.ani");
        bgContainer.width = 1008;
        bgContainer.height = 640;
        bgContainer.pivot(0, 0);
        bgContainer.pos(504, Laya.stage.height / 2);
        bgContainer.play(1, true);
        this.addChild(bgContainer);
        setTimeout(function () {
        }, 50);
    };
    return bg;
}(Laya.Sprite));
exports.default = bg;

},{}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Event = Laya.Event;
var Sprite = Laya.Sprite;
var Animation = Laya.Animation;
var Tween = Laya.Tween;
// import http from "./http";
var level = '0';
var that, LoadingDialog;
var centers, endshow;
var end = /** @class */ (function (_super) {
    __extends(end, _super);
    function end(thats, LoadingDialog) {
        var _this = this;
        that = thats;
        LoadingDialog = LoadingDialog;
        _this = _super.call(this) || this;
        level = that.typeLVL;
        // level = laya.net.LocalStorage.getItem('typeLVL')||'type1';
        _this.initEnd();
        return _this;
    }
    end.prototype.initEnd = function () {
        this.endContainer = new Sprite();
        Laya.SoundManager.playMusic("sound/end.mp3", 1);
        var bgCon = new Sprite();
        bgCon.graphics.drawRect(0, 0, 1380, 640, '#000');
        bgCon.alpha = 0.8;
        this.endContainer.addChild(bgCon);
        centers = new Sprite();
        centers.width = 1008;
        centers.height = 640;
        centers.pivot(504, 0);
        centers.pos(504, 0);
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
    };
    end.prototype.showEndPanel = function (scoreObj, letterTotal) {
        //接口
        var data = {
            score: scoreObj.totalScore
        };
        var obj = {
            name: 'finishGame',
            data: {
                score: scoreObj.totalScore,
                perfect: scoreObj.perfect,
                // great:scoreObj.great, // great 个数
                // right:scoreObj.right, // right 个数
                miss: scoreObj.miss,
                bad: scoreObj.bad,
                obstacle: scoreObj.obstacle,
            }
        };
        window.parent.postMessage(obj, '*');
        // window.parent.postMessage(JSON.stringify(obj),'*');
        // var http = new http;
        // http.post('userInfo',data);    
        var start = scoreObj.totalScore > 30 ? scoreObj.totalScore > 65 ? scoreObj.totalScore > 95 ? "ani/end3.ani" : "ani/end2.ani" : "ani/end1.ani" : "ani/end0.ani";
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
        this.buttonAgain.pivot(120, 0);
        this.buttonAgain.pos(690 - 170, 460);
        this.buttonAgain.scaleX = 0;
        this.buttonAgain.mouseEnabled = true;
        // this.buttonAgain.on(Event.MOUSE_OVER, this, function () {
        //     this.buttonAgain.graphics.clear();
        // });
        // this.buttonAgain.on(Event.MOUSE_OUT, this, function () {
        //     this.buttonAgain.graphics.clear();
        // });
        this.buttonAgain.on(Event.CLICK, this, function () {
            var _this = this;
            window.parent.postMessage({ name: 'endRestartGame', data: {} }, '*');
            setTimeout(function () {
                _this.buttonAgain.off(Event.CLICK, _this, function () { });
                _this.buttonNext.off(Event.CLICK, _this, function () { });
                _this.destroy();
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
        Tween.to(this.buttonAgain, { scaleX: 1 }, 200);
        this.buttonNext = new Sprite();
        this.buttonNext.loadImage("res/imgs/buttonNext.png");
        this.buttonNext.width = 240;
        this.buttonNext.height = 90;
        this.buttonNext.pivot(120, 0);
        this.buttonNext.pos(690 + 170, 460);
        this.buttonNext.scaleX = 0;
        this.buttonNext.mouseEnabled = true;
        // this.buttonNext.on(Event.MOUSE_OVER, this, function () {
        //     this.buttonNext.graphics.clear();
        // });
        // this.buttonNext.on(Event.MOUSE_OUT, this, function () {
        //     this.buttonNext.graphics.clear();
        // });
        this.buttonNext.on(Event.CLICK, this, function () {
            var _this = this;
            window.parent.postMessage({ name: 'nextChapter', data: {} }, '*');
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
            setTimeout(function () {
                _this.buttonAgain.off(Event.CLICK, _this, function () { });
                _this.buttonNext.off(Event.CLICK, _this, function () { });
                _this.destroy();
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
        Tween.to(this.buttonNext, { scaleX: 1 }, 200);
        this.endContainer.visible = true;
    };
    return end;
}(Laya.Sprite));
exports.default = end;

},{}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animation = Laya.Animation;
var Sprite = Laya.Sprite;
var Event = Laya.Event;
var shipW = 200, that, padding = 0;
var ship = /** @class */ (function (_super) {
    __extends(ship, _super);
    function ship(thats) {
        var _this = _super.call(this) || this;
        // private ship = [new Animation(),new Animation(),new Animation(),new Animation()];
        _this.ship = [];
        that = thats;
        _this.ship =
            that.typeLVL == 'type1' ?
                [new Animation(), new Animation(), new Animation(), new Animation()] :
                [new Sprite(), new Sprite(), new Sprite(), new Sprite()];
        _this.init();
        return _this;
    }
    ship.prototype.init = function () {
        padding = 504;
        this.ship1 = new Sprite();
        this.ship2 = new Sprite();
        this.ship3 = new Sprite();
        this.ship4 = new Sprite();
        this.ship1.size(200, 200);
        this.ship2.size(200, 200);
        this.ship3.size(200, 200);
        this.ship4.size(200, 200);
        this.ship1.pivot(100, 100);
        this.ship2.pivot(100, 100);
        this.ship3.pivot(100, 100);
        this.ship4.pivot(100, 100);
        // this.ship1.graphics.drawRect(0, 0, 200, 200, '#fff');
        // this.ship2.graphics.drawRect(0, 0, 200, 200, '#000');
        // this.ship3.graphics.drawRect(0, 0, 200, 200, '#eee');
        // this.ship4.graphics.drawRect(0, 0, 200, 200, '#fff');
        if (that.typeLVL == 'type1') {
            this.ship1.pos(padding - 300, -50);
            this.ship2.pos(padding - 100, -50);
            this.ship3.pos(padding + 100, -50);
            this.ship4.pos(padding + 300, -50);
            this.ship[0] = new Animation();
            this.ship[0].x = 100;
            this.ship[0].y = 100;
            this.ship[0].loadAnimation("ani/stopship0.ani");
            this.ship[0].play(1, true);
            this.ship[1] = new Animation();
            this.ship[1].x = 100;
            this.ship[1].y = 100;
            this.ship[1].loadAnimation("ani/stopship1.ani");
            this.ship[1].play(1, true);
            this.ship[2] = new Animation();
            this.ship[2].x = 100;
            this.ship[2].y = 100;
            this.ship[2].loadAnimation("ani/stopship2.ani");
            this.ship[2].play(1, true);
            this.ship[3] = new Animation();
            this.ship[3].x = 100;
            this.ship[3].y = 100;
            this.ship[3].loadAnimation("ani/stopship3.ani");
            this.ship[3].play(1, true);
        }
        else {
            this.ship1.pos(padding - 300, -15);
            this.ship2.pos(padding - 100, -15);
            this.ship3.pos(padding + 100, -15);
            this.ship4.pos(padding + 300, -15);
            this.ship[0] = new Sprite();
            this.ship[0].pos(0, 0);
            this.ship[0].loadImage('res/imgs/' + that.typeLVL + '/m1.png');
            this.ship[1] = new Sprite();
            this.ship[1].loadImage('res/imgs/' + that.typeLVL + '/m2.png');
            this.ship[2] = new Sprite();
            this.ship[2].loadImage('res/imgs/' + that.typeLVL + '/m3.png');
            this.ship[3] = new Sprite();
            this.ship[3].loadImage('res/imgs/' + that.typeLVL + '/m4.png');
        }
        this.ship1.addChild(this.ship[0]);
        this.ship2.addChild(this.ship[1]);
        this.ship3.addChild(this.ship[2]);
        this.ship4.addChild(this.ship[3]);
        this.ship1.on(Event.CLICK, this, function () {
            that.onClickDown(0);
            console.log('0');
        });
        this.ship2.on(Event.CLICK, this, function () {
            that.onClickDown(1);
            console.log('1');
        });
        this.ship3.on(Event.CLICK, this, function () {
            that.onClickDown(2);
            console.log('2');
        });
        this.ship4.on(Event.CLICK, this, function () {
            that.onClickDown(3);
            console.log('3');
        });
        this.addChild(this.ship1);
        this.addChild(this.ship2);
        this.addChild(this.ship3);
        this.addChild(this.ship4);
    };
    ship.prototype.goship = function () {
        this.ship[0].loadAnimation("ani/goship0.ani");
        this.ship[1].loadAnimation("ani/goship1.ani");
        this.ship[2].loadAnimation("ani/goship2.ani");
        this.ship[3].loadAnimation("ani/goship3.ani");
    };
    ship.prototype.okship = function (index) {
        var ani = new Laya.Animation();
        ani.loadAnimation("ani/okship" + index + ".ani");
        ani.y = -30;
        this.ship[index].addChild(ani);
        ani.play(1, false);
        setTimeout(function () {
            ani.removeSelf();
        }, 400);
    };
    ship.prototype.bandship = function (index) {
        var ani = new Laya.Animation();
        ani.loadAnimation("ani/bandship" + index + ".ani");
        ani.scaleX = 1.1,
            ani.scaleY = 1.1,
            this.ship[index].addChild(ani);
        ani.play(1, false);
        setTimeout(function () {
            ani.removeSelf();
        }, 400);
    };
    return ship;
}(Laya.Sprite));
exports.default = ship;

},{}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Handler = Laya.Handler;
var Sprite = Laya.Sprite;
var Tween = Laya.Tween;
var that;
var thing = /** @class */ (function (_super) {
    __extends(thing, _super);
    function thing(thats, wordObj) {
        var _this = _super.call(this) || this;
        that = thats;
        _this.wordObj = wordObj;
        _this.isOver = false; //是否已经排除
        _this.zimuCon = new Sprite();
        _this.addChild(_this.zimuCon);
        _this.addenergyImg();
        return _this;
    }
    thing.prototype.addenergyImg = function () {
        var imgSprite = new Sprite();
        imgSprite.loadImage('res/imgs/' + that.typeLVL + '/' + this.wordObj.letter.toLowerCase() + '.png');
        imgSprite.scaleX = 0.45;
        imgSprite.scaleY = 0.45;
        if (that.typeLVL == 'type1') {
            imgSprite.pivot(57, 94);
        }
        if (that.typeLVL == 'type2') {
            imgSprite.pivot(62, 124);
        }
        if (that.typeLVL == 'type3') {
            imgSprite.pivot(58, 126);
        }
        if (that.typeLVL == 'type4') {
            imgSprite.pivot(70, 68);
        }
        this.zimuCon.addChild(imgSprite);
    };
    thing.prototype.xiaoshi = function () {
        Tween.clearAll(this);
        this.isOver = true;
        Tween.to(this, { alpha: 0 }, 500, null, new Handler(this, function () {
            this.event('UIenergyBox_Remove_Event', [this]);
        }));
    };
    thing.prototype.setStatus = function (status) {
        this.wordObj.status = status;
    };
    thing.prototype.setStart = function (start) {
        this.wordObj.start = start;
    };
    thing.prototype.setTime = function (time) {
        this.wordObj.time = 3000 * time;
    };
    thing.prototype.setShow = function () {
        this.wordObj.isShow = true;
    };
    thing.prototype.setPercent = function (percent) {
        this.wordObj.percent = percent;
    };
    thing.prototype.bupipei = function (score) {
        this.wordObj.status = -1;
        this.xiaoshi();
    };
    thing.prototype.pipei = function () {
        this.wordObj.status = 1;
        this.xiaoshi();
    };
    thing.prototype.shitou = function () {
        this.wordObj.status = 1;
        this.xiaoshi();
    };
    return thing;
}(Laya.Sprite));
exports.default = thing;

},{}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sprite = Laya.Sprite;
var Event = Laya.Event;
var Handler = Laya.Handler;
var TimeLine = Laya.TimeLine;
var Text = Laya.Text;
var Tween = Laya.Tween;
var Animation = Laya.Animation;
var Sound321 = Laya.SoundManager;
var that, timeLine, is321 = true, isclick = false;
var tips = /** @class */ (function (_super) {
    __extends(tips, _super);
    function tips(thats, gamePanel) {
        var _this = _super.call(this) || this;
        _this.allScore = 0;
        _this.countDown = 0;
        _this.countDown2 = 60;
        _this.scoreObj = {
            perfect: 0,
            good: 0,
            right: 0,
            miss: 0,
            bad: 0,
            obstacle: 0,
            totalScore: 0
        };
        _this.gamePanel = gamePanel;
        that = thats;
        _this.countDown2 = parseInt((thats.data.musicDuration / 1000).toString());
        // this.countDown2 = 2;
        _this.initTips();
        return _this;
    }
    tips.prototype.initTips = function () {
        this.badTip = new Sprite();
        this.badTip.loadImage("res/imgs/bad.png");
        this.badTip.alpha = 0;
        this.badTip.width = 510;
        this.badTip.height = 222;
        this.badTip.pivot(255, 111);
        this.badTip.pos(504, Laya.stage.height / 2 - 20);
        this.addChild(this.badTip);
        this.missTip = new Sprite();
        this.missTip.loadImage("res/imgs/miss.png");
        this.missTip.alpha = 0;
        this.missTip.width = 510;
        this.missTip.height = 222;
        this.missTip.pivot(255, 111);
        this.missTip.pos(504, Laya.stage.height / 2 - 20);
        this.addChild(this.missTip);
        // this.rightTip = new Sprite();
        // this.rightTip.loadImage("res/imgs/right.png");
        // this.rightTip.alpha = 0;
        // this.rightTip.pivot(60, 30);
        // this.rightTip.pos(504, (Laya.stage.height) / 2);
        // this.addChild(this.rightTip);
        // this.greatTip = new Sprite();
        // this.greatTip.loadImage("res/imgs/great.png");
        // this.greatTip.alpha = 0;
        // this.greatTip.pivot(70, 30);
        // this.greatTip.pos(504, (Laya.stage.height) / 2);
        // this.addChild(this.greatTip);
        this.perfectTip = new Sprite();
        this.perfectTip.loadImage("res/imgs/perfect.png");
        this.perfectTip.alpha = 0;
        this.perfectTip.width = 510;
        this.perfectTip.height = 222;
        this.perfectTip.pivot(255, 111);
        this.perfectTip.pos(504, Laya.stage.height / 2 - 20);
        this.addChild(this.perfectTip);
        this.topBanTip = new Sprite();
        this.topBanTip.loadImage("res/imgs/topBan.png");
        this.topBanTip.width = 320;
        this.topBanTip.height = 145;
        this.topBanTip.pivot(160, 0);
        this.topBanTip.pos(504, 0);
        this.addChild(this.topBanTip);
        this.titleTxt = new Text();
        this.titleTxt.fontSize = 34;
        this.titleTxt.color = "#FFFFFF";
        this.titleTxt.width = 320;
        this.titleTxt.y = 85;
        this.titleTxt.align = 'center';
        this.titleTxt.text = "跟随节奏";
        this.topBanTip.addChild(this.titleTxt);
        this.startGoTip = new Sprite();
        this.startGoTip.loadImage("res/imgs/buttonStart.png");
        this.startGoTip.width = 240;
        this.startGoTip.height = 80;
        this.startGoTip.pivot(120, 0);
        this.startGoTip.pos(504, 280);
        this.addChild(this.startGoTip);
        this.startGoTip.on(Event.MOUSE_DOWN, this, this.startGo);
        // this.startGoTxt = new Text();
        // this.startGoTxt.fontSize = 27;
        // this.startGoTxt.color = "#000000";
        // this.startGoTxt.width = 240;
        // this.startGoTxt.y = 26;
        // this.startGoTxt.align = 'center';
        // this.startGoTxt.text = "开始游戏";
        // this.startGoTip.addChild(this.startGoTxt);
        this.ready3Tip = new Sprite();
        this.ready3Tip.loadImage("res/imgs/CountDown3.png");
        this.ready3Tip.alpha = 0;
        this.ready3Tip.pivot(45, 0);
        this.ready3Tip.height = 135;
        this.ready3Tip.pos(504, Laya.stage.height / 2 - 120);
        this.addChild(this.ready3Tip);
        this.ready2Tip = new Sprite();
        this.ready2Tip.loadImage("res/imgs/CountDown2.png");
        this.ready2Tip.alpha = 0;
        this.ready2Tip.pivot(46.5, 0);
        this.ready2Tip.height = 135;
        this.ready2Tip.pos(504, Laya.stage.height / 2 - 120);
        this.addChild(this.ready2Tip);
        this.ready1Tip = new Sprite();
        this.ready1Tip.loadImage("res/imgs/CountDown1.png");
        this.ready1Tip.alpha = 0;
        this.ready1Tip.pivot(33.5, 0);
        this.ready1Tip.height = 135;
        this.ready1Tip.pos(504, Laya.stage.height / 2 - 120);
        this.addChild(this.ready1Tip);
        this.readyTip = new Sprite();
        this.readyTip.loadImage("res/imgs/ready.png");
        this.readyTip.alpha = 0;
        this.readyTip.pivot(150, 0);
        this.readyTip.height = 135;
        this.readyTip.pos(504, Laya.stage.height / 2 - 120);
        this.addChild(this.readyTip);
        this.readyGoTip = new Sprite();
        this.readyGoTip.loadImage("res/imgs/GO.png");
        this.readyGoTip.alpha = 0;
        this.readyGoTip.pivot(150, 0);
        this.readyGoTip.height = 135;
        this.readyGoTip.pos(504, Laya.stage.height / 2 - 120);
        this.addChild(this.readyGoTip);
        // this.scoreTxt = new Text();
        // this.scoreTxt.font = "Impact";
        // this.scoreTxt.fontSize = 70;
        // this.scoreTxt.color = "#21D4A1";
        // this.scoreTxt.width = 1380;
        // this.scoreTxt.pivot(25, 0); 
        // this.scoreTxt.pos(504, 20);
        // this.scoreTxt.alpha = 0;
        // this.scoreTxt.text = this.scoreObj.totalScore.toString();
        // this.addChild(this.scoreTxt);
    };
    tips.prototype.setCountDown = function () {
        Laya.timer.loop(1000, this, countDownHandler);
        function countDownHandler() {
            if (this.countDown == (this.countDown2 - 5)) {
                this.restartTip.destroy();
            }
            this.countDown++;
            var count = parseInt((this.countDown / 60 % 60).toString());
            var count2 = parseInt((this.countDown2 / 60 % 60).toString());
            var time = "0" + (count == 0 ? "0" : count) + ":" + (this.countDown - count * 60 < 0 ? (this.countDown < 10 ? "0" + this.countDown : this.countDown) : (this.countDown - count * 60 < 10 ? "0" + (this.countDown - count * 60) : (this.countDown - count * 60))) + "/" + "0" + (count2 == 0 ? "0" : count2) + ":" + (this.countDown2 - count2 * 60 < 0 ? (this.countDown2 < 10 ? "0" + this.countDown2 : this.countDown2) : (this.countDown2 - count2 * 60 < 10 ? "0" + (this.countDown2 - count2 * 60) : (this.countDown2 - count2 * 60)));
            this.countDownTxt.text = time;
            if (this.countDown == this.countDown2) {
                Laya.timer.clear(this, countDownHandler);
                this.event("End_Game_Event");
            }
        }
    };
    tips.prototype.play = function (e) {
        e.stopPropagation();
        this.event("Play_Game_Event");
    };
    tips.prototype.stop = function (e) {
        e.stopPropagation();
        this.event("Stop_Game_Event");
    };
    tips.prototype.restart = function (e) {
        if (isclick) {
            return;
        }
        isclick = true;
        window.parent.postMessage({ name: 'ingRestartGame', data: {} }, '*');
        Laya.timer.clearAll(this);
        if (timeLine && is321) {
            timeLine.off(Event.COMPLETE, this, function () { });
            timeLine.pause();
            timeLine.destroy();
        }
        is321 = true;
        Laya.SoundManager.stopAll();
        for (var _i = 0, _a = that.screenLetterBoxArr; _i < _a.length; _i++) {
            var i = _a[_i];
            i.moveTween.pause();
            i.destroy();
        }
        Laya.timer.clearAll(that);
        this.gamePanel.destroy();
        setTimeout(function () {
            that.GameManager();
        }, 500);
    };
    tips.prototype.setScore = function (addScore) {
        this.scoreObj.totalScore += addScore;
        // this.scoreTxt.text = parseInt((this.scoreObj.totalScore).toFixed(1)).toString();
    };
    tips.prototype.getScore = function () {
        return this.scoreObj;
    };
    tips.prototype.showPlayTip = function (addScore) {
        var dangeScore = 0;
        this.scoreObj.obstacle++;
        if (addScore == 20) {
            Laya.SoundManager.playSound("sound/beat.mp3", 1);
            this.scoreObj.perfect++;
            dangeScore = parseFloat((100 / that.gouziLength).toFixed(1));
            this.showTip(this.perfectTip);
        }
        else if (addScore == 10) {
            this.scoreObj.good++;
            dangeScore = parseFloat(((100 / that.gouziLength) * 0.8).toFixed(1));
            this.showTip(this.greatTip);
        }
        else if (addScore == 5) {
            this.scoreObj.right++;
            dangeScore = parseFloat(((100 / that.gouziLength) * 0.5).toFixed(1));
            this.showTip(this.rightTip);
        }
        else if (addScore == 0) {
            Laya.SoundManager.playSound("sound/button.mp3", 1);
            this.scoreObj.miss++;
            this.showTip(this.missTip);
        }
        else if (addScore == -1) {
            Laya.SoundManager.playSound("sound/bad.mp3", 1);
            this.scoreObj.bad++;
            this.showTip(this.badTip);
        }
        this.setScore(dangeScore);
    };
    tips.prototype.showTip = function (newTip) {
        if (this.lastTip) {
            Tween.clearAll(this.lastTip);
            this.lastTip.alpha = 0;
            this.lastTip.scaleX = 0.4;
            this.lastTip.scaleY = 0.4;
        }
        var handler = new Handler(this.lastTip, function () {
            Tween.to(newTip, { alpha: 0, }, 100, null, null, 250);
        });
        newTip.scaleX = 0.4;
        newTip.scaleY = 0.4;
        newTip.y = (Laya.stage.height) / 2;
        newTip.alpha = 0;
        Tween.to(newTip, { alpha: 1, scaleX: 1, scaleY: 1 }, 400, null, handler);
        this.lastTip = newTip;
    };
    tips.prototype.startGo = function (e) {
        isclick = false;
        e.stopPropagation();
        this.topBanTip.alpha = 0;
        this.titleTxt.alpha = 0;
        this.startGoTip.alpha = 0;
        this.topBanTip.y = 1000;
        this.startGoTip.y = 1000;
        var _that = this;
        this.long = new Animation();
        // this.long.loadAnimation("ani/"+that.typeLVL+".ani");
        this.long.loadAnimation("ani/type1.ani");
        this.long.width = 1008;
        this.long.height = 640;
        this.long.pivot(504, 0);
        this.long.pos(504, 0);
        this.long.play(0, false);
        setTimeout(function () {
            Laya.SoundManager.playMusic(that.data.explainAudioUrl, 1, handler);
            _that.long.loadAnimation("ani/type11.ani");
            _that.long.width = 1008;
            _that.long.height = 640;
            _that.long.pivot(504, 0);
            _that.long.pos(504, 0);
            // _that.long.loadAnimation("ani/"+that.typeLVL+"1.ani");
            _that.long.play(0, true);
        }, 3370);
        this.addChild(this.long);
        var handler = new Handler(this, function () {
            _that.long.destroy();
            this.readyGO();
        });
    };
    tips.prototype.readyGO = function () {
        this.timeTip = new Sprite();
        this.timeTip.loadImage("res/imgs/time.png");
        this.timeTip.width = 250;
        this.timeTip.height = 55;
        this.timeTip.pos(504 + 100, 32);
        this.addChild(this.timeTip);
        this.countDownTxt = new Text();
        this.countDownTxt.width = 250;
        this.countDownTxt.fontSize = 22;
        this.countDownTxt.color = "#FFFFFF";
        this.countDownTxt.alpha = 1;
        this.countDownTxt.y = 19;
        this.countDownTxt.x = 95;
        var count2 = parseInt((this.countDown2 / 60 % 60).toString());
        var time = "00:00/" + "0" + (count2 == 0 ? "0" : count2) + ":" + (this.countDown2 - count2 * 60 < 0 ? (this.countDown2 < 10 ? "0" + this.countDown2 : this.countDown2) : (this.countDown2 - count2 * 60 < 10 ? "0" + (this.countDown2 - count2 * 60) : (this.countDown2 - count2 * 60)));
        this.countDownTxt.text = time;
        this.timeTip.addChild(this.countDownTxt);
        this.scoreObj.totalScore = 0;
        this.restartTip = new Sprite();
        this.restartTip.loadImage("res/imgs/restart.png");
        this.restartTip.alpha = 1;
        this.restartTip.width = 60;
        this.restartTip.height = 60;
        this.restartTip.pos(504 + 405, 34);
        this.addChild(this.restartTip);
        timeLine = new TimeLine();
        Sound321.autoStopMusic = true;
        Sound321.soundVolume = 3;
        Sound321.playMusic("sound/321.mp3", 1);
        timeLine.addLabel("ready3", 0).to(this.ready3Tip, { scaleX: 1, scaleY: 1, alpha: 1 }, 500, null, 0)
            .addLabel("ready3", 0).to(this.ready3Tip, { alpha: 0 }, 500, null, 0)
            .addLabel("ready2", 0).to(this.ready2Tip, { scaleX: 1, scaleY: 1, alpha: 1 }, 500, null, 0)
            .addLabel("ready2", 0).to(this.ready2Tip, { alpha: 0 }, 500, null, 0)
            .addLabel("ready1", 0).to(this.ready1Tip, { scaleX: 1, scaleY: 1, alpha: 1 }, 500, null, 0)
            .addLabel("ready1", 0).to(this.ready1Tip, { alpha: 0 }, 500, null, 0)
            .addLabel("ready", 0).to(this.readyTip, { scaleX: 1, scaleY: 1, alpha: 1 }, 500, null, 0)
            .addLabel("ready", 0).to(this.readyTip, { alpha: 0 }, 500, null, 0)
            .addLabel("readyGO", 0).to(this.readyGoTip, { scaleX: 1, scaleY: 1, alpha: 1 }, 500, null, 0)
            .addLabel("readyGO", 0).to(this.readyGoTip, { alpha: 0 }, 500, null, 0);
        timeLine.play(0, false);
        timeLine.on(Event.LABEL, this, onLabel);
        timeLine.on(Event.COMPLETE, this, onComplete);
        function onLabel(label) {
            if (label == "readyOut") {
                timeLine.pause();
                setTimeout(function () {
                    timeLine.resume();
                }, 500);
            }
        }
        function onComplete() {
            this.restartTip.on(Event.MOUSE_DOWN, this, this.restart);
            timeLine.destroy();
            is321 = false;
            this.setCountDown();
            this.event("Start_Game_Event");
        }
    };
    return tips;
}(Laya.Sprite));
exports.default = tips;

},{}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dialog = Laya.Dialog;
var REG = Laya.ClassUtils.regClass;
var ui;
(function (ui) {
    var dialog;
    (function (dialog) {
        var LoadingDialogUI = /** @class */ (function (_super) {
            __extends(LoadingDialogUI, _super);
            function LoadingDialogUI() {
                return _super.call(this) || this;
            }
            LoadingDialogUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(LoadingDialogUI.uiView);
            };
            LoadingDialogUI.uiView = { "type": "Dialog", "props": { "width": 640, "height": 640, "autoDestroyAtClosed": false }, "compId": 2, "child": [{ "type": "Animation", "props": { "y": 320, "x": 504, "source": "ani/load.ani", "rotation": -90, "pivotY": 0, "pivotX": 0, "autoPlay": true }, "compId": 10 }], "loadList": ["ani/load.ani"], "loadList3D": [] };
            return LoadingDialogUI;
        }(Dialog));
        dialog.LoadingDialogUI = LoadingDialogUI;
        REG("ui.dialog.LoadingDialogUI", LoadingDialogUI);
    })(dialog = ui.dialog || (ui.dialog = {}));
})(ui = exports.ui || (exports.ui = {}));

},{}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9MYXlhQWlySURFX2JldGEuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsInNyYy9Db25zdGFudHMudHMiLCJzcmMvR2FtZUNvbmZpZy50cyIsInNyYy9Mb2FkaW5nRGlhbG9nLnRzIiwic3JjL01haW4udHMiLCJzcmMvUm9hZC50cyIsInNyYy9iZy50cyIsInNyYy9lbmQudHMiLCJzcmMvc2hpcC50cyIsInNyYy90aGluZy50cyIsInNyYy90aXBzLnRzIiwic3JjL3VpL2xheWFNYXhVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNWQSxLQUFLO0FBQ0w7SUFBQTtJQThIQSxDQUFDO0lBN0hVLGlCQUFPLEdBQUcsc0JBQXNCLENBQUE7SUFDaEMsa0JBQVEsR0FBRyx3QkFBd0IsQ0FBQTtJQUNuQyxpQkFBTyxHQUFHLHNCQUFzQixDQUFBO0lBQ2hDLGlCQUFPLEdBQUcsc0JBQXNCLENBQUE7SUFDaEMsa0JBQVEsR0FBRyx1QkFBdUIsQ0FBQTtJQUNsQyxrQkFBUSxHQUFHLHVCQUF1QixDQUFBO0lBQ2xDLGtCQUFRLEdBQUcsdUJBQXVCLENBQUE7SUFDbEMsa0JBQVEsR0FBRyx1QkFBdUIsQ0FBQTtJQUNsQyxrQkFBUSxHQUFHLHdCQUF3QixDQUFBO0lBQ25DLGlCQUFPLEdBQUcsc0JBQXNCLENBQUE7SUFDaEMsaUJBQU8sR0FBRyxzQkFBc0IsQ0FBQTtJQUNoQyxrQkFBUSxHQUFHLHVCQUF1QixDQUFBO0lBQ2xDLGtCQUFRLEdBQUcsdUJBQXVCLENBQUE7SUFDbEMsa0JBQVEsR0FBRyx1QkFBdUIsQ0FBQTtJQUNsQyxrQkFBUSxHQUFHLHVCQUF1QixDQUFBO0lBQ2xDLGtCQUFRLEdBQUcsd0JBQXdCLENBQUE7SUFDbkMsaUJBQU8sR0FBRyxzQkFBc0IsQ0FBQTtJQUNoQyxpQkFBTyxHQUFHLHNCQUFzQixDQUFBO0lBQ2hDLGtCQUFRLEdBQUcsdUJBQXVCLENBQUE7SUFDbEMsa0JBQVEsR0FBRyx1QkFBdUIsQ0FBQTtJQUNsQyxrQkFBUSxHQUFHLHVCQUF1QixDQUFBO0lBQ2xDLGtCQUFRLEdBQUcsdUJBQXVCLENBQUE7SUFDbEMsa0JBQVEsR0FBRyx3QkFBd0IsQ0FBQTtJQUNuQyxpQkFBTyxHQUFHLHNCQUFzQixDQUFBO0lBQ2hDLGlCQUFPLEdBQUcsc0JBQXNCLENBQUE7SUFDaEMsa0JBQVEsR0FBRyx1QkFBdUIsQ0FBQTtJQUNsQyxrQkFBUSxHQUFHLHVCQUF1QixDQUFBO0lBQ2xDLGtCQUFRLEdBQUcsdUJBQXVCLENBQUE7SUFDbEMsa0JBQVEsR0FBRyx1QkFBdUIsQ0FBQTtJQUNsQyxhQUFHLEdBQUcsa0JBQWtCLENBQUE7SUFDeEIsYUFBRyxHQUFHLFVBQVUsQ0FBQTtJQUNoQixhQUFHLEdBQUcsVUFBVSxDQUFBO0lBQ2hCLGFBQUcsR0FBRyxVQUFVLENBQUE7SUFDaEIsYUFBRyxHQUFHLFVBQVUsQ0FBQTtJQUNoQixhQUFHLEdBQUcsVUFBVSxDQUFBO0lBQ2hCLGFBQUcsR0FBRyxVQUFVLENBQUE7SUFDaEIsYUFBRyxHQUFHLFVBQVUsQ0FBQTtJQUNoQixhQUFHLEdBQUcsVUFBVSxDQUFBO0lBQ2hCLGFBQUcsR0FBRyxVQUFVLENBQUE7SUFDaEIsY0FBSSxHQUFHLFdBQVcsQ0FBQTtJQUNsQixjQUFJLEdBQUcsV0FBVyxDQUFBO0lBQ2xCLGNBQUksR0FBRyxXQUFXLENBQUE7SUFDbEIsY0FBSSxHQUFHLFdBQVcsQ0FBQTtJQUNsQixjQUFJLEdBQUcsV0FBVyxDQUFBO0lBQ2xCLGNBQUksR0FBRyxXQUFXLENBQUE7SUFDbEIsY0FBSSxHQUFHLFdBQVcsQ0FBQTtJQUNsQixjQUFJLEdBQUcsV0FBVyxDQUFBO0lBQ2xCLGNBQUksR0FBRyxXQUFXLENBQUE7SUFDbEIsY0FBSSxHQUFHLFdBQVcsQ0FBQTtJQUNsQixjQUFJLEdBQUcsV0FBVyxDQUFBO0lBQ2xCLGNBQUksR0FBRyxXQUFXLENBQUE7SUFDbEIsY0FBSSxHQUFHLFdBQVcsQ0FBQTtJQUNsQixjQUFJLEdBQUcsV0FBVyxDQUFBO0lBQ2xCLGNBQUksR0FBRyxXQUFXLENBQUE7SUFDbEIsY0FBSSxHQUFHLFdBQVcsQ0FBQTtJQUNsQixjQUFJLEdBQUcsV0FBVyxDQUFBO0lBQ2xCLGNBQUksR0FBRyxXQUFXLENBQUE7SUFDbEIsY0FBSSxHQUFHLFdBQVcsQ0FBQTtJQUNsQixjQUFJLEdBQUcsV0FBVyxDQUFBO0lBQ2xCLGNBQUksR0FBRyxXQUFXLENBQUE7SUFDbEIsY0FBSSxHQUFHLFdBQVcsQ0FBQTtJQUNsQixjQUFJLEdBQUcsV0FBVyxDQUFBO0lBQ2xCLGNBQUksR0FBRyxXQUFXLENBQUE7SUFDbEIsY0FBSSxHQUFHLFdBQVcsQ0FBQTtJQUNsQixjQUFJLEdBQUcsV0FBVyxDQUFBO0lBQ2xCLHFCQUFXLEdBQUcsMEJBQTBCLENBQUE7SUFDeEMsb0JBQVUsR0FBRyx5QkFBeUIsQ0FBQTtJQUN0QyxxQkFBVyxHQUFHLDBCQUEwQixDQUFBO0lBQ3hDLGdCQUFNLEdBQUcsc0JBQXNCLENBQUE7SUFDL0Isa0JBQVEsR0FBRyxzQkFBc0IsQ0FBQTtJQUNqQyxjQUFJLEdBQUcsbUJBQW1CLENBQUE7SUFDMUIsaUJBQU8sR0FBRyxzQkFBc0IsQ0FBQTtJQUNoQyxZQUFFLEdBQUcsaUJBQWlCLENBQUE7SUFDdEIsaUJBQU8sR0FBRyxzQkFBc0IsQ0FBQTtJQUNoQyxnQkFBTSxHQUFHLHFCQUFxQixDQUFBO0lBQzlCLGNBQUksR0FBRyxtQkFBbUIsQ0FBQTtJQUMxQixnQkFBTSxHQUFHLHFCQUFxQixDQUFBO0lBRTlCLGdCQUFNLEdBQUcsNEJBQTRCLENBQUE7SUFDckMsZ0JBQU0sR0FBRyw0QkFBNEIsQ0FBQTtJQUNyQyxnQkFBTSxHQUFHLDRCQUE0QixDQUFBO0lBQ3JDLGdCQUFNLEdBQUcsNEJBQTRCLENBQUE7SUFFckMsZUFBSyxHQUFHLDJCQUEyQixDQUFBO0lBQ25DLGVBQUssR0FBRywyQkFBMkIsQ0FBQTtJQUNuQyxlQUFLLEdBQUcsMkJBQTJCLENBQUE7SUFDbkMsZUFBSyxHQUFHLDJCQUEyQixDQUFBO0lBRW5DLGVBQUssR0FBRywyQkFBMkIsQ0FBQTtJQUNuQyxlQUFLLEdBQUcsMkJBQTJCLENBQUE7SUFDbkMsZUFBSyxHQUFHLDJCQUEyQixDQUFBO0lBQ25DLGVBQUssR0FBRywyQkFBMkIsQ0FBQTtJQUVuQyxpQkFBTyxHQUFHLDZCQUE2QixDQUFBO0lBQ3ZDLGlCQUFPLEdBQUcsNkJBQTZCLENBQUE7SUFDdkMsaUJBQU8sR0FBRyw2QkFBNkIsQ0FBQTtJQUN2QyxpQkFBTyxHQUFHLDZCQUE2QixDQUFBO0lBRXZDLGdCQUFNLEdBQUcsZUFBZSxDQUFBO0lBQ3hCLGdCQUFNLEdBQUcsa0JBQWtCLENBQUE7SUFDM0IsZ0JBQU0sR0FBRyxnQkFBZ0IsQ0FBQTtJQUN6QixnQkFBTSxHQUFHLGVBQWUsQ0FBQTtJQUN4QixnQkFBTSxHQUFHLGVBQWUsQ0FBQTtJQUN4QixvQkFBVSxHQUFHLHlCQUF5QixDQUFBO0lBQ3RDLG9CQUFVLEdBQUcseUJBQXlCLENBQUE7SUFDdEMsb0JBQVUsR0FBRyx5QkFBeUIsQ0FBQTtJQUN0QyxlQUFLLEdBQUcsb0JBQW9CLENBQUE7SUFDNUIsWUFBRSxHQUFHLGlCQUFpQixDQUFBO0lBQ3RCLGNBQUksR0FBRyxvQkFBb0IsQ0FBQTtJQUMzQixnQkFBTSxHQUFHLGFBQWEsQ0FBQTtJQUN0QixjQUFJLEdBQUcsb0JBQW9CLENBQUE7SUFDM0IsZUFBSyxHQUFHLHFCQUFxQixDQUFBO0lBQzdCLGNBQUksR0FBRyxvQkFBb0IsQ0FBQTtJQUMzQixpQkFBTyxHQUFHLDRCQUE0QixDQUFBO0lBQ3RDLGtCQUFRLEdBQUcsNkJBQTZCLENBQUE7SUFDeEMsa0JBQVEsR0FBRyw2QkFBNkIsQ0FBQTtJQUN4QyxrQkFBUSxHQUFHLDZCQUE2QixDQUFBO0lBRXhDLGNBQUksR0FBRyxxQkFBcUIsQ0FBQTtJQUM1QixjQUFJLEdBQUcscUJBQXFCLENBQUE7SUFDNUIsY0FBSSxHQUFHLHFCQUFxQixDQUFBO0lBQzVCLGNBQUksR0FBRyxxQkFBcUIsQ0FBQTtJQUM1QixnQkFBTSxHQUFHLHNCQUFzQixDQUFBO0lBQy9CLGdCQUFNLEdBQUcsdUJBQXVCLENBQUE7SUFFM0MsZ0JBQUM7Q0E5SEQsQUE4SEMsSUFBQTtrQkE5SG9CLFNBQVM7Ozs7QUNEOUIsZ0dBQWdHOztBQUVoRzs7RUFFRTtBQUNGO0lBYUk7SUFBYyxDQUFDO0lBQ1IsZUFBSSxHQUFYO1FBQ0ksSUFBSSxHQUFHLEdBQWEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7SUFFakQsQ0FBQztJQWhCTSxnQkFBSyxHQUFRLElBQUksQ0FBQztJQUNsQixpQkFBTSxHQUFRLEdBQUcsQ0FBQztJQUNsQixvQkFBUyxHQUFRLFNBQVMsQ0FBQztJQUMzQixxQkFBVSxHQUFRLFlBQVksQ0FBQztJQUMvQixpQkFBTSxHQUFRLFFBQVEsQ0FBQztJQUN2QixpQkFBTSxHQUFRLFFBQVEsQ0FBQztJQUN2QixxQkFBVSxHQUFLLDRCQUE0QixDQUFDO0lBQzVDLG9CQUFTLEdBQVEsRUFBRSxDQUFDO0lBQ3BCLGdCQUFLLEdBQVMsS0FBSyxDQUFDO0lBQ3BCLGVBQUksR0FBUyxLQUFLLENBQUM7SUFDbkIsdUJBQVksR0FBUyxLQUFLLENBQUM7SUFDM0IsNEJBQWlCLEdBQVMsSUFBSSxDQUFDO0lBTTFDLGlCQUFDO0NBbEJELEFBa0JDLElBQUE7a0JBbEJvQixVQUFVO0FBbUIvQixVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7Ozs7O0FDeEJsQiw0Q0FBb0M7QUFDcEM7SUFBMkMsaUNBQXlCO0lBQ2hFLHlCQUF5QjtJQUV6QjtRQUFBLFlBQ0ksaUJBQU8sU0FNVjtRQUxHLHFCQUFxQjtRQUNyQixxQkFBcUI7UUFDckIsa0NBQWtDO1FBQ2xDLEtBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFBOztRQUN6QixpQkFBaUI7SUFDckIsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDSSxrQ0FBa0M7SUFDdEMsQ0FBQztJQUVNLDJDQUFtQixHQUExQixVQUEyQixJQUFZO1FBQ25DLHdCQUF3QjtRQUN4QiwyREFBMkQ7UUFDM0QsYUFBYTtRQUNiLElBQUk7UUFDSiwwQ0FBMEM7UUFDMUMsNEJBQTRCO0lBQ2hDLENBQUM7SUFFTSxpQ0FBUyxHQUFoQixVQUFpQixHQUFXO1FBQ3hCLDJCQUEyQjtJQUMvQixDQUFDO0lBR08sK0JBQU8sR0FBZjtRQUNJLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUNoQixDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQWpDQSxBQWlDQyxDQWpDMEMsY0FBRSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEdBaUNuRTs7Ozs7O0FDbENELDJDQUFzQztBQUN0QyxJQUFPLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQ3hCLElBQU8sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDOUIsSUFBTyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztBQUN4QyxJQUFPLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBRTVCLElBQU8sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDMUIsaURBQTRDO0FBQzVDLHlDQUFvQztBQUNwQywyQkFBc0I7QUFDdEIsK0JBQTBCO0FBQzFCLCtCQUEwQjtBQUMxQiw2QkFBd0I7QUFDeEIsaUNBQTRCO0FBRTVCLElBQUksS0FBSyxFQUFDLFNBQVMsRUFDZixNQUFNLEdBQUcsQ0FBQyxFQUNWLE1BQU0sR0FBRyxDQUFDLEVBQ1YsU0FBUyxHQUFHLEVBQUUsRUFDZCxPQUFPLEdBQUcsS0FBSyxFQUNmLFFBQVEsR0FBRyxHQUFHLEVBQ2QsU0FBUyxHQUFHLEdBQUcsRUFDZixLQUFLLEdBQUcsQ0FBQyxFQUNULE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFDNUIsR0FBRyxDQUFDO0FBRVIsK0JBQXdDO0FBRXhDO0lBMkJDO1FBbEJXLFlBQU8sR0FBRyxFQUFFLENBQUMsQ0FBQSxPQUFPO1FBQ3ZCLGFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQSxNQUFNO1FBQ3JCLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLGVBQVUsR0FBRyxFQUFDLE1BQU0sRUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFBLE1BQU07UUFDL0IsdUJBQWtCLEdBQUcsRUFBRSxDQUFDLENBQUEsV0FBVztRQUNuQyxZQUFPLEdBQUcsSUFBSSxDQUFDLENBQUEsTUFBTTtRQU9yQixZQUFPLEdBQUcsT0FBTyxDQUFDO1FBRWxCLGFBQVEsR0FBRyxlQUFlLENBQUE7UUFDMUIsUUFBRyxHQUFHLGVBQWUsQ0FBQTtRQTQ1QjdCLGlCQUFZLEdBQUcsVUFBVSxNQUFNO1lBQzNCLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5Rix5QkFBeUI7WUFDekIsU0FBUyxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3ZCLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFBO1FBRUQsZ0JBQVcsR0FBRyxVQUFVLEtBQUs7WUFDekIsSUFBSSxNQUFNLENBQUM7WUFDWCxJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDeEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3JELE1BQU0sR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BDLElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxLQUFLLElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxLQUFLLEVBQUU7b0JBQ2xELElBQUksTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUU7d0JBQ2hCLE1BQU07cUJBQ1Q7eUJBQU0sSUFBSSxNQUFNLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRTt3QkFDMUMsSUFBRyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxHQUFHLEVBQUM7NEJBQzVCLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUMxQzs2QkFBTTs0QkFDSCxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7eUJBQzFDO3dCQUNELE1BQU07cUJBQ1Q7b0JBQ0QsTUFBTTtpQkFDVDtxQkFBTTtpQkFDTjthQUNKO1FBQ0wsQ0FBQyxDQUFBO1FBRUQsb0JBQWUsR0FBRyxVQUFVLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSztZQUM5QyxJQUFJLE9BQU8sRUFBRTtnQkFDVCxJQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsRUFBQztvQkFDWCxJQUFHLElBQUksQ0FBQyxPQUFPLElBQUksT0FBTyxFQUFDO3dCQUN2QixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7cUJBQzlDO2lCQUNKO3FCQUFJO29CQUNELElBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxPQUFPLEVBQUM7d0JBQ3ZCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztxQkFDNUM7aUJBQ0o7Z0JBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3BDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3BCLE1BQU0sQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFLENBQUM7YUFDaEM7aUJBQU07Z0JBQ0gsSUFBRyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxHQUFHLEVBQUM7b0JBQzVCLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNoQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7aUJBQ3BCO2FBQ0o7UUFDTCxDQUFDLENBQUE7UUExOEJHLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDYixNQUFNLENBQUMsTUFBTSxHQUFHO1lBQ1osTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBQyxJQUFJLEVBQUMsZ0JBQWdCLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQzlELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUMsS0FBSyxDQUFDLElBQUksRUFBQyxLQUFLLENBQUMsQ0FBQztZQUNwRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFO2dCQUN0RixVQUFVLENBQUM7b0JBQ1AsSUFBSSxNQUFNLENBQUMsV0FBVyxLQUFLLEdBQUcsSUFBSSxNQUFNLENBQUMsV0FBVyxLQUFLLENBQUMsRUFBRTt3QkFDeEQsNkZBQTZGO3dCQUU3RixTQUFTO3dCQUNULDJCQUEyQjt3QkFDM0IsbUVBQW1FO3dCQUNuRSxrREFBa0Q7d0JBQ2xELGlEQUFpRDt3QkFDakQsSUFBSTt3QkFDSixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUM7cUJBQ3JDO29CQUNELElBQUksTUFBTSxDQUFDLFdBQVcsS0FBSyxFQUFFLElBQUksTUFBTSxDQUFDLFdBQVcsS0FBSyxDQUFDLEVBQUUsRUFBRTt3QkFDekQsMkJBQTJCO3dCQUMzQixtRUFBbUU7d0JBQ25FLGtEQUFrRDt3QkFDbEQsaURBQWlEO3dCQUNqRCxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7cUJBQ3BDO2dCQUNMLENBQUMsRUFBQyxHQUFHLENBQUMsQ0FBQTtZQUNWLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNkLENBQUMsQ0FBQztRQUNGLGVBQWU7UUFFckIsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBVSxDQUFDLEtBQUssRUFBRSxvQkFBVSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzVDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLG9CQUFVLENBQUMsU0FBUyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLG9CQUFVLENBQUMsVUFBVSxDQUFDO1FBQzlDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLG9CQUFVLENBQUMsTUFBTSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLG9CQUFVLENBQUMsTUFBTSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxXQUFXLEdBQUMsR0FBRyxJQUFFLE1BQU0sQ0FBQyxVQUFVLEdBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxVQUFVLEdBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQSxDQUFDLENBQUEsSUFBSSxDQUFBLENBQUMsQ0FBQSxJQUFJLENBQUM7UUFDekgsb0JBQW9CO1FBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsb0JBQVUsQ0FBQyxpQkFBaUIsQ0FBQztRQUUxRCxvREFBb0Q7UUFDcEQsSUFBSSxvQkFBVSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxNQUFNO1lBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDOUYsSUFBSSxvQkFBVSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUM7WUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMzRixJQUFJLG9CQUFVLENBQUMsSUFBSTtZQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7UUFDNUIsUUFBUSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUE7UUFDekIsUUFBUSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQTtRQUM1QixRQUFRLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQTtRQUVqQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9CLFlBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNwQyxZQUFZLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDekMsS0FBSztRQUNYLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO1FBQ3hCLGdEQUFnRDtRQUNoRCxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDckksQ0FBQztJQUVELDhCQUFlLEdBQWY7UUFDQywrQ0FBK0M7UUFDL0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDakcsQ0FBQztJQUNFLGdDQUFpQixHQUFqQjtRQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsc0JBQXNCLEVBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUE7SUFDakgsQ0FBQztJQUNELDZCQUFjLEdBQWQ7UUFDQyxZQUFZO1FBQ1osb0JBQVUsQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsb0JBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBQ0QsS0FBSztJQUNSLDhCQUFlLEdBQWY7UUFDTyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBTSxNQUFNLEdBQWUsRUFBRSxDQUFBO1FBQzdCLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxHQUFHLEVBQUMsQ0FBQyxFQUFFLEVBQUM7WUFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRO2dCQUN2QixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO2FBQzFCLENBQUMsQ0FBQTtTQUNYO1FBQ0ssTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlO1lBQzlCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxPQUFPO1lBQ3RCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxPQUFPO1lBQ3RCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxPQUFPO1lBQ3RCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxPQUFPO1lBQ3RCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxPQUFPO1lBQ3RCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxPQUFPO1lBQ3RCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxPQUFPO1lBQ3RCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxPQUFPO1lBQ3RCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxVQUFVO1lBQ3pCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxNQUFNO1lBQ3JCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxNQUFNO1lBQ3JCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxNQUFNO1lBQ3JCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxNQUFNO1lBQ3JCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxNQUFNO1lBQ3JCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxJQUFJO1lBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxVQUFVO1lBQ3pCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxVQUFVO1lBQ3pCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxVQUFVO1lBQ3pCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxLQUFLO1lBQ3BCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxFQUFFO1lBQ2pCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFBO1FBQ1IsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNGLEdBQUcsRUFBRSxtQkFBUyxDQUFDLE9BQU87WUFDdEIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztTQUMxQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1IsR0FBRyxFQUFFLG1CQUFTLENBQUMsR0FBRztZQUNsQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzFCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDUixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxXQUFXO1lBQzFCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNSLEdBQUcsRUFBRSxtQkFBUyxDQUFDLFVBQVU7WUFDekIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztTQUMxQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1IsR0FBRyxFQUFFLG1CQUFTLENBQUMsV0FBVztZQUMxQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzFCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDUixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxNQUFNO1lBQ3JCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNSLEdBQUcsRUFBRSxtQkFBUyxDQUFDLElBQUk7WUFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztTQUMxQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1IsR0FBRyxFQUFFLG1CQUFTLENBQUMsUUFBUTtZQUN2QixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzFCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDUixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxPQUFPO1lBQ3RCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNSLEdBQUcsRUFBRSxtQkFBUyxDQUFDLEVBQUU7WUFDakIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztTQUMxQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1IsR0FBRyxFQUFFLG1CQUFTLENBQUMsTUFBTTtZQUNyQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzFCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDUixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxNQUFNO1lBQ3JCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNSLEdBQUcsRUFBRSxtQkFBUyxDQUFDLE1BQU07WUFDckIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztTQUMxQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1IsR0FBRyxFQUFFLG1CQUFTLENBQUMsTUFBTTtZQUNyQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzFCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDUixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxLQUFLO1lBQ3BCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNSLEdBQUcsRUFBRSxtQkFBUyxDQUFDLEtBQUs7WUFDcEIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztTQUMxQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1IsR0FBRyxFQUFFLG1CQUFTLENBQUMsS0FBSztZQUNwQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzFCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDUixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxLQUFLO1lBQ3BCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNSLEdBQUcsRUFBRSxtQkFBUyxDQUFDLEtBQUs7WUFDcEIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztTQUMxQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1IsR0FBRyxFQUFFLG1CQUFTLENBQUMsS0FBSztZQUNwQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzFCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDUixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxLQUFLO1lBQ3BCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNSLEdBQUcsRUFBRSxtQkFBUyxDQUFDLEtBQUs7WUFDcEIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztTQUMxQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1IsR0FBRyxFQUFFLG1CQUFTLENBQUMsT0FBTztZQUN0QixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzFCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDUixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxPQUFPO1lBQ3RCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNSLEdBQUcsRUFBRSxtQkFBUyxDQUFDLE9BQU87WUFDdEIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztTQUMxQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1IsR0FBRyxFQUFFLG1CQUFTLENBQUMsT0FBTztZQUN0QixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzFCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDUixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxPQUFPO1lBQ3RCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNSLEdBQUcsRUFBRSxtQkFBUyxDQUFDLE1BQU07WUFDckIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztTQUMxQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1IsR0FBRyxFQUFFLG1CQUFTLENBQUMsSUFBSTtZQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzFCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDUixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxNQUFNO1lBQ3JCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsOEJBQThCO1lBQ25DLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsOEJBQThCO1lBQ25DLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsOEJBQThCO1lBQ25DLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsOEJBQThCO1lBQ25DLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFDO1FBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNYLEdBQUcsRUFBRSw2QkFBNkI7WUFDbEMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztTQUNqQixDQUFDLENBQUM7UUFDVCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1gsR0FBRyxFQUFFLDZCQUE2QjtZQUNsQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQ2pCLENBQUMsQ0FBQztRQUNULE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDWCxHQUFHLEVBQUUsNkJBQTZCO1lBQ2xDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFDO1FBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNYLEdBQUcsRUFBRSw2QkFBNkI7WUFDbEMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztTQUNqQixDQUFDLENBQUM7UUFDVCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1gsR0FBRyxFQUFFLDZCQUE2QjtZQUNsQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQ2pCLENBQUMsQ0FBQztRQUNULE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDWCxHQUFHLEVBQUUsNkJBQTZCO1lBQ2xDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFDO1FBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNYLEdBQUcsRUFBRSw2QkFBNkI7WUFDbEMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztTQUNqQixDQUFDLENBQUM7UUFDVCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1gsR0FBRyxFQUFFLDZCQUE2QjtZQUNsQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQ2pCLENBQUMsQ0FBQztRQUNULE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDWCxHQUFHLEVBQUUsK0JBQStCO1lBQ3BDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFDO1FBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNYLEdBQUcsRUFBRSwrQkFBK0I7WUFDcEMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztTQUNqQixDQUFDLENBQUM7UUFDVCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1gsR0FBRyxFQUFFLCtCQUErQjtZQUNwQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQ2pCLENBQUMsQ0FBQztRQUNULE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDWCxHQUFHLEVBQUUsK0JBQStCO1lBQ3BDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDakIsQ0FBQyxDQUFDO1FBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNYLEdBQUcsRUFBRSxzQkFBc0I7WUFDM0IsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztTQUNqQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1IsR0FBRyxFQUFFLG1CQUFTLENBQUMsR0FBRztZQUNsQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzFCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDUixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxHQUFHO1lBQ2xCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNSLEdBQUcsRUFBRSxtQkFBUyxDQUFDLEdBQUc7WUFDbEIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztTQUMxQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1IsR0FBRyxFQUFFLG1CQUFTLENBQUMsR0FBRztZQUNsQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzFCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDUixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxHQUFHO1lBQ2xCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNSLEdBQUcsRUFBRSxtQkFBUyxDQUFDLEdBQUc7WUFDbEIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztTQUMxQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1IsR0FBRyxFQUFFLG1CQUFTLENBQUMsR0FBRztZQUNsQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzFCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDUixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxHQUFHO1lBQ2xCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNSLEdBQUcsRUFBRSxtQkFBUyxDQUFDLEdBQUc7WUFDbEIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztTQUMxQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1IsR0FBRyxFQUFFLG1CQUFTLENBQUMsSUFBSTtZQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzFCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDUixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxJQUFJO1lBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNSLEdBQUcsRUFBRSxtQkFBUyxDQUFDLElBQUk7WUFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztTQUMxQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1IsR0FBRyxFQUFFLG1CQUFTLENBQUMsSUFBSTtZQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzFCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDUixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxJQUFJO1lBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNSLEdBQUcsRUFBRSxtQkFBUyxDQUFDLElBQUk7WUFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztTQUMxQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1IsR0FBRyxFQUFFLG1CQUFTLENBQUMsSUFBSTtZQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzFCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDUixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxJQUFJO1lBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNSLEdBQUcsRUFBRSxtQkFBUyxDQUFDLElBQUk7WUFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztTQUMxQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1IsR0FBRyxFQUFFLG1CQUFTLENBQUMsSUFBSTtZQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzFCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDUixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxJQUFJO1lBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNSLEdBQUcsRUFBRSxtQkFBUyxDQUFDLElBQUk7WUFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztTQUMxQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1IsR0FBRyxFQUFFLG1CQUFTLENBQUMsSUFBSTtZQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzFCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDUixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxJQUFJO1lBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNSLEdBQUcsRUFBRSxtQkFBUyxDQUFDLElBQUk7WUFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztTQUMxQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1IsR0FBRyxFQUFFLG1CQUFTLENBQUMsSUFBSTtZQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzFCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDUixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxJQUFJO1lBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNSLEdBQUcsRUFBRSxtQkFBUyxDQUFDLElBQUk7WUFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztTQUMxQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1IsR0FBRyxFQUFFLG1CQUFTLENBQUMsSUFBSTtZQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzFCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDUixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxJQUFJO1lBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNSLEdBQUcsRUFBRSxtQkFBUyxDQUFDLElBQUk7WUFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztTQUMxQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1IsR0FBRyxFQUFFLG1CQUFTLENBQUMsSUFBSTtZQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzFCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDUixHQUFHLEVBQUUsbUJBQVMsQ0FBQyxJQUFJO1lBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDMUIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNSLEdBQUcsRUFBRSxtQkFBUyxDQUFDLElBQUk7WUFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztTQUMxQixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1IsR0FBRyxFQUFFLG1CQUFTLENBQUMsSUFBSTtZQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzFCLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FB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T0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO2dDQUM1RCxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7Z0NBQzVELEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtnQ0FDNUQsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO2dDQUM3RCxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7Z0NBQzlELEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtnQ0FDOUQsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO2dDQUM5RCxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7Z0NBQzlELEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtnQ0FDOUQsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO2dDQUM5RCxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7Z0NBQzlELEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtnQ0FDOUQsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO2dDQUM5RCxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7Z0NBQzlELEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtnQ0FDOUQsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO2dDQUM5RCxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7Z0NBQzlELEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtnQ0FDOUQsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO2dDQUM5RCxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7Z0NBQzlELEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtnQ0FDOUQsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO2dDQUM5RCxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7Z0NBQzlELEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtnQ0FDOUQsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO2dDQUM5RCxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7Z0NBQzlELEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtnQ0FDOUQsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO2dDQUM5RCxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7Z0NBQzlELEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtnQ0FDOUQsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO2dDQUM5RCxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7Z0NBQzlELEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtnQ0FDOUQsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO2dDQUM5RCxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7Z0NBQzlELEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtnQ0FDOUQsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO2dDQUM5RCxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7Z0NBQzlELEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtnQ0FDOUQsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtB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QUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxDQUFDO1lBQ0osTUFBTSxFQUFFLENBQUM7WUFDVCxNQUFNLEVBQUUsQ0FBQztTQUNaO1FBQ0QsR0FBRyxFQUFFO1lBQ0QsQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLE1BQU0sRUFBRSxDQUFDO1lBQ1QsTUFBTSxFQUFFLENBQUM7U0FDWjtLQUNKO0NBQ0osQ0FBQztBQUNXLFFBQUEsTUFBTSxHQUFHO0lBQ2xCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0NBQzdCLENBQUE7QUFDWSxRQUFBLE1BQU0sR0FBRztJQUNsQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUN6QixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUMxQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtDQUM3QixDQUFBO0FBQ1ksUUFBQSxNQUFNLEdBQUc7SUFDbEIsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDMUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDMUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDMUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDMUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDMUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDMUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDMUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDMUIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDekIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFB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Q0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztZQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztZQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztZQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzlCO2FBQUk7WUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUMsSUFBSSxDQUFDLE9BQU8sR0FBQyxTQUFTLENBQUMsQ0FBQztZQUMzRCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7WUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFDLElBQUksQ0FBQyxPQUFPLEdBQUMsU0FBUyxDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBQyxJQUFJLENBQUMsT0FBTyxHQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzNELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUMsSUFBSSxDQUFDLE9BQU8sR0FBQyxTQUFTLENBQUMsQ0FBQztTQUM5RDtRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVsQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFDLElBQUksRUFBQztZQUMzQixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDcEIsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFDLElBQUksRUFBQztZQUMzQixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDcEIsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFDLElBQUksRUFBQztZQUMzQixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDcEIsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFDLElBQUksRUFBQztZQUMzQixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDcEIsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUU5QixDQUFDO0lBQ0QscUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELHFCQUFNLEdBQU4sVUFBTyxLQUFLO1FBQ1IsSUFBSSxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDL0IsR0FBRyxDQUFDLGFBQWEsQ0FBQyxZQUFZLEdBQUMsS0FBSyxHQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvQixHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQztRQUNsQixVQUFVLENBQUM7WUFDUCxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUE7UUFDcEIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUNELHVCQUFRLEdBQVIsVUFBUyxLQUFLO1FBQ1YsSUFBSSxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDL0IsR0FBRyxDQUFDLGFBQWEsQ0FBQyxjQUFjLEdBQUMsS0FBSyxHQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLEdBQUcsQ0FBQyxNQUFNLEdBQUUsR0FBRztZQUNmLEdBQUcsQ0FBQyxNQUFNLEdBQUUsR0FBRztZQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xCLFVBQVUsQ0FBQztZQUNQLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtRQUNwQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDWixDQUFDO0lBQ0wsV0FBQztBQUFELENBdElBLEFBc0lDLENBdElpQyxJQUFJLENBQUMsTUFBTSxHQXNJNUM7Ozs7OztBQzFJRCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0FBQzNCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDekIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztBQUN2QixJQUFJLElBQUksQ0FBQztBQUNUO0lBQW1DLHlCQUFXO0lBSzFDLGVBQVksS0FBSyxFQUFDLE9BQU87UUFBekIsWUFDSSxpQkFBTyxTQU9WO1FBTkcsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUNiLEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUEsUUFBUTtRQUM1QixLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7UUFDNUIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUIsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDOztJQUN4QixDQUFDO0lBRUQsNEJBQVksR0FBWjtRQUNJLElBQUksU0FBUyxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7UUFDN0IsU0FBUyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUMsSUFBSSxDQUFDLE9BQU8sR0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLEdBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0YsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDeEIsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBRyxJQUFJLENBQUMsT0FBTyxJQUFJLE9BQU8sRUFBQztZQUN2QixTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBQyxFQUFFLENBQUMsQ0FBQztTQUMxQjtRQUNELElBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxPQUFPLEVBQUM7WUFDdkIsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUMsR0FBRyxDQUFDLENBQUM7U0FDM0I7UUFDRCxJQUFHLElBQUksQ0FBQyxPQUFPLElBQUksT0FBTyxFQUFDO1lBQ3ZCLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzNCO1FBQ0QsSUFBRyxJQUFJLENBQUMsT0FBTyxJQUFJLE9BQU8sRUFBQztZQUN2QixTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBQyxFQUFFLENBQUMsQ0FBQztTQUMxQjtRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCx1QkFBTyxHQUFQO1FBQ0ksS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFDLEtBQUssRUFBRSxDQUFDLEVBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksT0FBTyxDQUFDLElBQUksRUFBRTtZQUNwRCxJQUFJLENBQUMsS0FBSyxDQUFDLDBCQUEwQixFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNuRCxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQztJQUVELHlCQUFTLEdBQVQsVUFBVyxNQUFNO1FBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ2pDLENBQUM7SUFDRCx3QkFBUSxHQUFSLFVBQVUsS0FBSztRQUNYLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBQ0QsdUJBQU8sR0FBUCxVQUFTLElBQUk7UUFDVCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUMsSUFBSSxDQUFDO0lBQ2xDLENBQUM7SUFDRCx1QkFBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQy9CLENBQUM7SUFDRCwwQkFBVSxHQUFWLFVBQVksT0FBTztRQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUNuQyxDQUFDO0lBQ0QsdUJBQU8sR0FBUCxVQUFTLEtBQUs7UUFDVixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELHFCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFFeEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFDRCxzQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBQ0wsWUFBQztBQUFELENBeEVBLEFBd0VDLENBeEVrQyxJQUFJLENBQUMsTUFBTSxHQXdFN0M7Ozs7OztBQzVFRCxJQUFPLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQzVCLElBQU8sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDMUIsSUFBTyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUM5QixJQUFPLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0FBQ2hDLElBQU8sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDeEIsSUFBTyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztBQUMxQixJQUFPLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO0FBQ2xDLElBQU8sUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7QUFDcEMsSUFBSSxJQUFJLEVBQUMsUUFBUSxFQUFDLEtBQUssR0FBRyxJQUFJLEVBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztBQUMvQztJQUFrQyx3QkFBVztJQTJDekMsY0FBWSxLQUFLLEVBQUMsU0FBUztRQUEzQixZQUNJLGlCQUFPLFNBTVY7UUF2Qk8sY0FBUSxHQUFHLENBQUMsQ0FBQztRQUliLGVBQVMsR0FBRyxDQUFDLENBQUM7UUFDZCxnQkFBVSxHQUFHLEVBQUUsQ0FBQztRQUVoQixjQUFRLEdBQUc7WUFDZixPQUFPLEVBQUUsQ0FBQztZQUNWLElBQUksRUFBRSxDQUFDO1lBQ1AsS0FBSyxFQUFFLENBQUM7WUFDUixJQUFJLEVBQUUsQ0FBQztZQUNQLEdBQUcsRUFBRSxDQUFDO1lBQ04sUUFBUSxFQUFFLENBQUM7WUFDWCxVQUFVLEVBQUUsQ0FBQztTQUNoQixDQUFDO1FBR0UsS0FBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxHQUFHLEtBQUssQ0FBQTtRQUNaLEtBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN6RSx1QkFBdUI7UUFDdkIsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDOztJQUNwQixDQUFDO0lBRUQsdUJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUUsQ0FBQyxHQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTNCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUUsQ0FBQyxHQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTVCLGdDQUFnQztRQUNoQyxpREFBaUQ7UUFDakQsMkJBQTJCO1FBQzNCLCtCQUErQjtRQUMvQixtREFBbUQ7UUFDbkQsZ0NBQWdDO1FBRWhDLGdDQUFnQztRQUNoQyxpREFBaUQ7UUFDakQsMkJBQTJCO1FBQzNCLCtCQUErQjtRQUMvQixtREFBbUQ7UUFDbkQsZ0NBQWdDO1FBRWhDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQzdCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRS9CLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztRQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztRQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7UUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXZDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDeEQsZ0NBQWdDO1FBQ2hDLGlDQUFpQztRQUNqQyxxQ0FBcUM7UUFDckMsK0JBQStCO1FBQy9CLDBCQUEwQjtRQUMxQixvQ0FBb0M7UUFDcEMsaUNBQWlDO1FBQ2pDLDZDQUE2QztRQUU3QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUMsQ0FBQyxHQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBQyxDQUFDLEdBQUMsR0FBRyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFDLENBQUMsR0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUMsQ0FBQyxHQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQzdCLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBQyxDQUFDLEdBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFJL0IsOEJBQThCO1FBQzlCLGlDQUFpQztRQUNqQywrQkFBK0I7UUFDL0IsbUNBQW1DO1FBQ25DLDhCQUE4QjtRQUM5QiwrQkFBK0I7UUFDL0IsOEJBQThCO1FBQzlCLDJCQUEyQjtRQUMzQiw0REFBNEQ7UUFDNUQsZ0NBQWdDO0lBQ3BDLENBQUM7SUFFRCwyQkFBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBRTlDO1lBQ0ksSUFBRyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBQyxDQUFDLENBQUMsRUFBQztnQkFDckMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUM3QjtZQUNELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNqQixJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFDLEVBQUUsR0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO1lBQ3ZELElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUMsRUFBRSxHQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7WUFDekQsSUFBSSxJQUFJLEdBQUcsR0FBRyxHQUFDLENBQUMsS0FBSyxJQUFFLENBQUMsQ0FBQSxDQUFDLENBQUEsR0FBRyxDQUFBLENBQUMsQ0FBQSxLQUFLLENBQUMsR0FBQyxHQUFHLEdBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFDLEtBQUssR0FBQyxFQUFFLEdBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUMsRUFBRSxDQUFBLENBQUMsQ0FBQSxHQUFHLEdBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQSxDQUFDLENBQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBLENBQUMsQ0FBQSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUMsS0FBSyxHQUFDLEVBQUUsR0FBQyxFQUFFLENBQUEsQ0FBQyxDQUFBLEdBQUcsR0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUMsS0FBSyxHQUFDLEVBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUMsS0FBSyxHQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFDLENBQUMsTUFB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QyxNQUFNLEdBQUMsRUFBRSxHQUFDLENBQUMsQ0FBQSxDQUFDLENBQUEsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFDLEVBQUUsQ0FBQSxDQUFDLENBQUEsR0FBRyxHQUFDLElBQUksQ0FBQyxVQUFVLENBQUEsQ0FBQyxDQUFBLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQSxDQUFDLENBQUEsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFDLE1BQU0sR0FBQyxFQUFFLEdBQUMsRUFBRSxDQUFBLENBQUMsQ0FBQSxHQUFHLEdBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFDLE1BQU0sR0FBQyxFQUFFLENBQUMsQ0FBQSxDQUFDLENBQUEsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFDLE1BQU0sR0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDcE8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvQixRQUFRLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztRQUMxQixRQUFRLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUM5QixRQUFRLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUN6QixRQUFRLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUN0QyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7YUFDeEYsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFDLEtBQUssRUFBRSxDQUFDLEVBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQzthQUNsRSxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQzthQUN4RixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2FBQ2xFLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVB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QUMsT0FBTyxFQUFDLEdBQUcsRUFBQyxRQUFRLEVBQUMsR0FBRyxFQUFDLHFCQUFxQixFQUFDLEtBQUssRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsV0FBVyxFQUFDLE9BQU8sRUFBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxRQUFRLEVBQUMsY0FBYyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUUsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLElBQUksRUFBQyxFQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLGNBQWMsQ0FBQyxFQUFDLFlBQVksRUFBQyxFQUFFLEVBQUMsQ0FBQztZQU16VCxzQkFBQztTQVBELEFBT0MsQ0FQb0MsTUFBTSxHQU8xQztRQVBZLHNCQUFlLGtCQU8zQixDQUFBO1FBQ0QsR0FBRyxDQUFDLDJCQUEyQixFQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3JELENBQUMsRUFWZ0IsTUFBTSxHQUFOLFNBQU0sS0FBTixTQUFNLFFBVXRCO0FBQUQsQ0FBQyxFQVZhLEVBQUUsR0FBRixVQUFFLEtBQUYsVUFBRSxRQVVmIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8v6aKE5aOw5piOXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25zdGFudHMge1xuICAgIHN0YXRpYyBwZXJmZWN0ID0gXCJyZXMvaW1ncy9wZXJmZWN0LnBuZ1wiXG4gICAgc3RhdGljIHR5cGUxX2JnID0gXCJyZXMvaW1ncy90eXBlMS93YmcucG5nXCJcbiAgICBzdGF0aWMgdHlwZTFfMSA9IFwicmVzL2ltZ3MvdHlwZTEvMS5wbmdcIlxuICAgIHN0YXRpYyB0eXBlMV8yID0gXCJyZXMvaW1ncy90eXBlMS8yLnBuZ1wiXG4gICAgc3RhdGljIHR5cGUxX20xID0gXCJyZXMvaW1ncy90eXBlMS9tMS5wbmdcIlxuICAgIHN0YXRpYyB0eXBlMV9tMiA9IFwicmVzL2ltZ3MvdHlwZTEvbTIucG5nXCJcbiAgICBzdGF0aWMgdHlwZTFfbTMgPSBcInJlcy9pbWdzL3R5cGUxL20zLnBuZ1wiXG4gICAgc3RhdGljIHR5cGUxX200ID0gXCJyZXMvaW1ncy90eXBlMS9tNC5wbmdcIlxuICAgIHN0YXRpYyB0eXBlMl9iZyA9IFwicmVzL2ltZ3MvdHlwZTIvd2JnLnBuZ1wiXG4gICAgc3RhdGljIHR5cGUyXzEgPSBcInJlcy9pbWdzL3R5cGUyLzEucG5nXCJcbiAgICBzdGF0aWMgdHlwZTJfMiA9IFwicmVzL2ltZ3MvdHlwZTIvMi5wbmdcIlxuICAgIHN0YXRpYyB0eXBlMl9tMSA9IFwicmVzL2ltZ3MvdHlwZTIvbTEucG5nXCJcbiAgICBzdGF0aWMgdHlwZTJfbTIgPSBcInJlcy9pbWdzL3R5cGUyL20yLnBuZ1wiXG4gICAgc3RhdGljIHR5cGUyX20zID0gXCJyZXMvaW1ncy90eXBlMi9tMy5wbmdcIlxuICAgIHN0YXRpYyB0eXBlMl9tNCA9IFwicmVzL2ltZ3MvdHlwZTIvbTQucG5nXCJcbiAgICBzdGF0aWMgdHlwZTNfYmcgPSBcInJlcy9pbWdzL3R5cGUzL3diZy5wbmdcIlxuICAgIHN0YXRpYyB0eXBlM18xID0gXCJyZXMvaW1ncy90eXBlMy8xLnBuZ1wiXG4gICAgc3RhdGljIHR5cGUzXzIgPSBcInJlcy9pbWdzL3R5cGUzLzIucG5nXCJcbiAgICBzdGF0aWMgdHlwZTNfbTEgPSBcInJlcy9pbWdzL3R5cGUzL20xLnBuZ1wiXG4gICAgc3RhdGljIHR5cGUzX20yID0gXCJyZXMvaW1ncy90eXBlMy9tMi5wbmdcIlxuICAgIHN0YXRpYyB0eXBlM19tMyA9IFwicmVzL2ltZ3MvdHlwZTMvbTMucG5nXCJcbiAgICBzdGF0aWMgdHlwZTNfbTQgPSBcInJlcy9pbWdzL3R5cGUzL200LnBuZ1wiXG4gICAgc3RhdGljIHR5cGU0X2JnID0gXCJyZXMvaW1ncy90eXBlNC93YmcucG5nXCJcbiAgICBzdGF0aWMgdHlwZTRfMSA9IFwicmVzL2ltZ3MvdHlwZTQvMS5wbmdcIlxuICAgIHN0YXRpYyB0eXBlNF8yID0gXCJyZXMvaW1ncy90eXBlNC8yLnBuZ1wiXG4gICAgc3RhdGljIHR5cGU0X20xID0gXCJyZXMvaW1ncy90eXBlNC9tMS5wbmdcIlxuICAgIHN0YXRpYyB0eXBlNF9tMiA9IFwicmVzL2ltZ3MvdHlwZTQvbTIucG5nXCJcbiAgICBzdGF0aWMgdHlwZTRfbTMgPSBcInJlcy9pbWdzL3R5cGU0L20zLnBuZ1wiXG4gICAgc3RhdGljIHR5cGU0X200ID0gXCJyZXMvaW1ncy90eXBlNC9tNC5wbmdcIlxuICAgIHN0YXRpYyBiYWQgPSBcInJlcy9pbWdzL2JhZC5wbmdcIlxuICAgIHN0YXRpYyBiZzEgPSBcImJnLzEucG5nXCJcbiAgICBzdGF0aWMgYmcyID0gXCJiZy8yLnBuZ1wiXG4gICAgc3RhdGljIGJnMyA9IFwiYmcvMy5wbmdcIlxuICAgIHN0YXRpYyBiZzQgPSBcImJnLzQucG5nXCJcbiAgICBzdGF0aWMgYmc1ID0gXCJiZy81LnBuZ1wiXG4gICAgc3RhdGljIGJnNiA9IFwiYmcvNi5wbmdcIlxuICAgIHN0YXRpYyBiZzcgPSBcImJnLzcucG5nXCJcbiAgICBzdGF0aWMgYmc4ID0gXCJiZy84LnBuZ1wiXG4gICAgc3RhdGljIGJnOSA9IFwiYmcvOS5wbmdcIlxuICAgIHN0YXRpYyBiZzEwID0gXCJiZy8xMC5wbmdcIlxuICAgIHN0YXRpYyBiZzExID0gXCJiZy8xMS5wbmdcIlxuICAgIHN0YXRpYyBiZzEyID0gXCJiZy8xMi5wbmdcIlxuICAgIHN0YXRpYyBiZzEzID0gXCJiZy8xMy5wbmdcIlxuICAgIHN0YXRpYyBiZzE0ID0gXCJiZy8xNC5wbmdcIlxuICAgIHN0YXRpYyBiZzE1ID0gXCJiZy8xNS5wbmdcIlxuICAgIHN0YXRpYyBiZzE2ID0gXCJiZy8xNi5wbmdcIlxuICAgIHN0YXRpYyBiZzE3ID0gXCJiZy8xNy5wbmdcIlxuICAgIHN0YXRpYyBiZzE4ID0gXCJiZy8xOC5wbmdcIlxuICAgIHN0YXRpYyBiZzE5ID0gXCJiZy8xOS5wbmdcIlxuICAgIHN0YXRpYyBiZzIwID0gXCJiZy8yMC5wbmdcIlxuICAgIHN0YXRpYyBiZzIxID0gXCJiZy8yMS5wbmdcIlxuICAgIHN0YXRpYyBiZzIyID0gXCJiZy8yMi5wbmdcIlxuICAgIHN0YXRpYyBiZzIzID0gXCJiZy8yMy5wbmdcIlxuICAgIHN0YXRpYyBiZzI0ID0gXCJiZy8yNC5wbmdcIlxuICAgIHN0YXRpYyBiZzI1ID0gXCJiZy8yNS5wbmdcIlxuICAgIHN0YXRpYyBiZzI2ID0gXCJiZy8yNi5wbmdcIlxuICAgIHN0YXRpYyBiZzI3ID0gXCJiZy8yNy5wbmdcIlxuICAgIHN0YXRpYyBiZzI4ID0gXCJiZy8yOC5wbmdcIlxuICAgIHN0YXRpYyBiZzI5ID0gXCJiZy8yOS5wbmdcIlxuICAgIHN0YXRpYyBiZzMwID0gXCJiZy8zMC5wbmdcIlxuICAgIHN0YXRpYyBiZzMxID0gXCJiZy8zMS5wbmdcIlxuICAgIHN0YXRpYyBiZzMyID0gXCJiZy8zMi5wbmdcIlxuICAgIHN0YXRpYyBiZzMzID0gXCJiZy8zMy5wbmdcIlxuICAgIHN0YXRpYyBiZzM0ID0gXCJiZy8zNC5wbmdcIlxuICAgIHN0YXRpYyBiZzM1ID0gXCJiZy8zNS5wbmdcIlxuICAgIHN0YXRpYyBidXR0b25BZ2FpbiA9IFwicmVzL2ltZ3MvYnV0dG9uQWdhaW4ucG5nXCJcbiAgICBzdGF0aWMgYnV0dG9uTmV4dCA9IFwicmVzL2ltZ3MvYnV0dG9uTmV4dC5wbmdcIlxuICAgIHN0YXRpYyBidXR0b25TdGFydCA9IFwicmVzL2ltZ3MvYnV0dG9uU3RhcnQucG5nXCJcbiAgICBzdGF0aWMgZW5lcmd5ID0gXCJyZXMvaW1ncy90eXBlMS8xLnBuZ1wiXG4gICAgc3RhdGljIG9ic3RhY2xlID0gXCJyZXMvaW1ncy90eXBlMS8yLnBuZ1wiXG4gICAgc3RhdGljIG1pc3MgPSBcInJlcy9pbWdzL21pc3MucG5nXCJcbiAgICBzdGF0aWMgcmVzdGFydCA9IFwicmVzL2ltZ3MvcmVzdGFydC5wbmdcIlxuICAgIHN0YXRpYyBzZyA9IFwicmVzL2ltZ3Mvc2cucG5nXCJcbiAgICBzdGF0aWMgc3Rhck9GRiA9IFwicmVzL2ltZ3Mvc3Rhck9GRi5wbmdcIlxuICAgIHN0YXRpYyBzdGFyT04gPSBcInJlcy9pbWdzL3N0YXJPTi5wbmdcIlxuICAgIHN0YXRpYyB0aW1lID0gXCJyZXMvaW1ncy90aW1lLnBuZ1wiXG4gICAgc3RhdGljIHRvcEJhbiA9IFwicmVzL2ltZ3MvdG9wQmFuLnBuZ1wiXG5cbiAgICBzdGF0aWMgYmFkYnVsID0gXCJyZXMvYXRsYXMvc2hpcC9iYWQvYnVsLnBuZ1wiXG4gICAgc3RhdGljIGJhZGdyZSA9IFwicmVzL2F0bGFzL3NoaXAvYmFkL2dyZS5wbmdcIlxuICAgIHN0YXRpYyBiYWRyZWQgPSBcInJlcy9hdGxhcy9zaGlwL2JhZC9yZWQucG5nXCJcbiAgICBzdGF0aWMgYmFkeWVsID0gXCJyZXMvYXRsYXMvc2hpcC9iYWQveWVsLnBuZ1wiXG5cbiAgICBzdGF0aWMgb2tidWwgPSBcInJlcy9hdGxhcy9zaGlwL29rL2J1bC5wbmdcIlxuICAgIHN0YXRpYyBva2dyZSA9IFwicmVzL2F0bGFzL3NoaXAvb2svZ3JlLnBuZ1wiXG4gICAgc3RhdGljIG9rcmVkID0gXCJyZXMvYXRsYXMvc2hpcC9vay9yZWQucG5nXCJcbiAgICBzdGF0aWMgb2t5ZWwgPSBcInJlcy9hdGxhcy9zaGlwL29rL3llbC5wbmdcIlxuXG4gICAgc3RhdGljIGdvYnVsID0gXCJyZXMvYXRsYXMvc2hpcC9nby9idWwucG5nXCJcbiAgICBzdGF0aWMgZ29ncmUgPSBcInJlcy9hdGxhcy9zaGlwL2dvL2dyZS5wbmdcIlxuICAgIHN0YXRpYyBnb3JlZCA9IFwicmVzL2F0bGFzL3NoaXAvZ28vcmVkLnBuZ1wiXG4gICAgc3RhdGljIGdveWVsID0gXCJyZXMvYXRsYXMvc2hpcC9nby95ZWwucG5nXCJcblxuICAgIHN0YXRpYyBzaG9wYnVsID0gXCJyZXMvYXRsYXMvc2hpcC9zaG9wL2J1bC5wbmdcIlxuICAgIHN0YXRpYyBzaG9wZ3JlID0gXCJyZXMvYXRsYXMvc2hpcC9zaG9wL2dyZS5wbmdcIlxuICAgIHN0YXRpYyBzaG9wcmVkID0gXCJyZXMvYXRsYXMvc2hpcC9zaG9wL3JlZC5wbmdcIlxuICAgIHN0YXRpYyBzaG9weWVsID0gXCJyZXMvYXRsYXMvc2hpcC9zaG9wL3llbC5wbmdcIlxuXG4gICAgc3RhdGljIHNvdW5kMCA9IFwic291bmQvMzIxLm1wM1wiXG4gICAgc3RhdGljIHNvdW5kMSA9IFwic291bmQvYnV0dG9uLm1wM1wiXG4gICAgc3RhdGljIHNvdW5kMiA9IFwic291bmQvYmVhdC5tcDNcIlxuICAgIHN0YXRpYyBzb3VuZDMgPSBcInNvdW5kL2VuZC5tcDNcIlxuICAgIHN0YXRpYyBzb3VuZDQgPSBcInNvdW5kL2JhZC5tcDNcIlxuICAgIHN0YXRpYyBDb3VudERvd24xID0gXCJyZXMvaW1ncy9Db3VudERvd24xLnBuZ1wiXG4gICAgc3RhdGljIENvdW50RG93bjIgPSBcInJlcy9pbWdzL0NvdW50RG93bjIucG5nXCJcbiAgICBzdGF0aWMgQ291bnREb3duMyA9IFwicmVzL2ltZ3MvQ291bnREb3duMy5wbmdcIlxuICAgIHN0YXRpYyByZWFkeSA9IFwicmVzL2ltZ3MvcmVhZHkucG5nXCJcbiAgICBzdGF0aWMgZ28gPSBcInJlcy9pbWdzL0dPLnBuZ1wiXG4gICAgc3RhdGljIGxvbmcgPSBcInJlcy9hdGxhcy9sb25nLnBuZ1wiXG4gICAgc3RhdGljIGxvYWRiZyA9IFwibG9hZC9iZy5wbmdcIlxuICAgIHN0YXRpYyBsb2FkID0gXCJyZXMvYXRsYXMvbG9hZC5wbmdcIlxuICAgIHN0YXRpYyBsb2FkMSA9IFwicmVzL2F0bGFzL2xvYWQxLnBuZ1wiXG4gICAgc3RhdGljIHRlc3QgPSBcInJlcy9hdGxhcy9zaGlwLnBuZ1wiXG4gICAgc3RhdGljIGxvbmdTV0YgPSBcInJlcy9hdGxhcy9sb25nL2xvbmdTV0YucG5nXCJcbiAgICBzdGF0aWMgbG9uZ1NXRjEgPSBcInJlcy9hdGxhcy9sb25nL2xvbmdTV0YxLnBuZ1wiXG4gICAgc3RhdGljIGxvbmdTV0YyID0gXCJyZXMvYXRsYXMvbG9uZy9sb25nU1dGMi5wbmdcIlxuICAgIHN0YXRpYyBsb25nU1dGMyA9IFwicmVzL2F0bGFzL2xvbmcvbG9uZ1NXRjMucG5nXCJcblxuICAgIHN0YXRpYyBlbmQwID0gXCJyZXMvYXRsYXMvZW5kLzAucG5nXCJcbiAgICBzdGF0aWMgZW5kMSA9IFwicmVzL2F0bGFzL2VuZC8xLnBuZ1wiXG4gICAgc3RhdGljIGVuZDIgPSBcInJlcy9hdGxhcy9lbmQvMi5wbmdcIlxuICAgIHN0YXRpYyBlbmQzID0gXCJyZXMvYXRsYXMvZW5kLzMucG5nXCJcbiAgICBzdGF0aWMgZW5kMDAxID0gXCJyZXMvYXRsYXMvZW5kLzAwLnBuZ1wiXG4gICAgc3RhdGljIGVuZDAwMiA9IFwicmVzL2F0bGFzL2VuZC8wMDEucG5nXCJcblxufSIsIi8qKlRoaXMgY2xhc3MgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgTGF5YUFpcklERSwgcGxlYXNlIGRvIG5vdCBtYWtlIGFueSBtb2RpZmljYXRpb25zLiAqL1xyXG5cclxuLypcclxuKiDmuLjmiI/liJ3lp4vljJbphY3nva47XHJcbiovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVDb25maWd7XHJcbiAgICBzdGF0aWMgd2lkdGg6bnVtYmVyPTEzODA7XHJcbiAgICBzdGF0aWMgaGVpZ2h0Om51bWJlcj02NDA7XHJcbiAgICBzdGF0aWMgc2NhbGVNb2RlOnN0cmluZz1cInNob3dhbGxcIjtcclxuICAgIHN0YXRpYyBzY3JlZW5Nb2RlOnN0cmluZz1cImhvcml6b250YWxcIjtcclxuICAgIHN0YXRpYyBhbGlnblY6c3RyaW5nPVwibWlkZGxlXCI7XHJcbiAgICBzdGF0aWMgYWxpZ25IOnN0cmluZz1cImNlbnRlclwiO1xyXG4gICAgc3RhdGljIHN0YXJ0U2NlbmU6YW55PVwiZGlhbG9nL0xvYWRpbmdEaWFsb2cuc2NlbmVcIjtcclxuICAgIHN0YXRpYyBzY2VuZVJvb3Q6c3RyaW5nPVwiXCI7XHJcbiAgICBzdGF0aWMgZGVidWc6Ym9vbGVhbj1mYWxzZTtcclxuICAgIHN0YXRpYyBzdGF0OmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgcGh5c2ljc0RlYnVnOmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgZXhwb3J0U2NlbmVUb0pzb246Ym9vbGVhbj10cnVlO1xyXG4gICAgY29uc3RydWN0b3IoKXt9XHJcbiAgICBzdGF0aWMgaW5pdCgpe1xyXG4gICAgICAgIHZhciByZWc6IEZ1bmN0aW9uID0gTGF5YS5DbGFzc1V0aWxzLnJlZ0NsYXNzO1xyXG5cclxuICAgIH1cclxufVxyXG5HYW1lQ29uZmlnLmluaXQoKTsiLCJpbXBvcnQgeyB1aSB9IGZyb20gXCIuL3VpL2xheWFNYXhVSVwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZGluZ0RpYWxvZyBleHRlbmRzIHVpLmRpYWxvZy5Mb2FkaW5nRGlhbG9nVUkge1xuICAgIC8vIHByaXZhdGUgcHJvZ3Jlc3MgPSAnMCdcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIC8vIHRoaXMud2lkdGggPSAxMzgwO1xuICAgICAgICAvLyB0aGlzLmhlaWdodCA9IDY0MDtcbiAgICAgICAgLy8gdGhpcy5hdXRvRGVzdHJveUF0Q2xvc2VkID0gdHJ1ZVxuICAgICAgICB0aGlzLmlzUG9wdXBDZW50ZXIgPSB0cnVlXG4gICAgICAgIC8vIHRoaXMucG9zKDAsIDApXG4gICAgfVxuXG4gICAgb25PcGVuZWQoKSB7XG4gICAgICAgIC8vIHRoaXMuY2hhbmdlUHJvZ3Jlc3NWYWx1ZSgwKSAgICBcbiAgICB9XG5cbiAgICBwdWJsaWMgY2hhbmdlUHJvZ3Jlc3NWYWx1ZShuYmVyOiBudW1iZXIpIHtcbiAgICAgICAgLy8gaWYgKCF0aGlzLnByb2dyZXNzKSB7XG4gICAgICAgIC8vICAgICBMYXlhLnRpbWVyLm9uY2UoMjAwLCB0aGlzLCB0aGlzLmNoYW5nZVByb2dyZXNzVmFsdWUpXG4gICAgICAgIC8vICAgICByZXR1cm5cbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBjb25zdCBudW0gPSBNYXRoLmNlaWwobmJlciAqIDEwMCkgKyBcIiVcIlxuICAgICAgICAvLyB0aGlzLnByb2dyZXNzLnRleHQgPSBudW07XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZVRpcCh0aXA6IHN0cmluZykge1xuICAgICAgICAvLyB0aGlzLnByb2dyZXNzLnRleHQgPSB0aXBcbiAgICB9XG5cblxuICAgIHByaXZhdGUgb25DbGljaygpIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpXG4gICAgfVxufSIsImltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuL0dhbWVDb25maWdcIjtcclxuaW1wb3J0IEVhc2UgPSBMYXlhLkVhc2U7XHJcbmltcG9ydCBIYW5kbGVyID0gTGF5YS5IYW5kbGVyO1xyXG5pbXBvcnQgU291bmRNYW5hZ2VyID0gTGF5YS5Tb3VuZE1hbmFnZXI7XHJcbmltcG9ydCBTcHJpdGUgPSBMYXlhLlNwcml0ZTtcclxuaW1wb3J0IFN0YWdlID0gTGF5YS5TdGFnZTtcclxuaW1wb3J0IFR3ZWVuID0gTGF5YS5Ud2VlbjtcclxuaW1wb3J0IExvYWRpbmdEaWFsb2cgZnJvbSBcIi4vTG9hZGluZ0RpYWxvZ1wiO1xyXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xyXG5pbXBvcnQgQmcgZnJvbSBcIi4vYmdcIjtcclxuaW1wb3J0IFRpcHMgZnJvbSBcIi4vdGlwc1wiO1xyXG5pbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwXCI7XHJcbmltcG9ydCBFbmQgZnJvbSBcIi4vZW5kXCI7XHJcbmltcG9ydCBUaGluZyBmcm9tIFwiLi90aGluZ1wiO1xyXG5cclxubGV0IF90aGlzLGdhbWVQYW5lbCxcclxuICAgIGlJbmRleCA9IDAsXHJcbiAgICBtb3VzZVIgPSAwLFxyXG4gICAgdGhpbmdMaXN0ID0gW10sXHJcbiAgICBpc1BhdXNlID0gZmFsc2UsXHJcbiAgICBzaGlwUm9hZCA9IDEwMCxcclxuICAgIHNoaXBXaWR0aCA9IDIwMCxcclxuICAgIHJvYWRzID0gMCxcclxuICAgIHBlcmNlbnQsQmVhdHMwLEJlYXRzMSxCZWF0czIsXHJcbiAgICBiZ3g7XHJcbiAgICBcclxuaW1wb3J0IHtmb3VyUm9hZFBvc2l0aW9ufSBmcm9tIFwiLi9Sb2FkXCI7XHJcblxyXG5jbGFzcyBNYWluIHtcclxuICAgIHByaXZhdGUgbG9hZGluZ0RpYWxvZzogTG9hZGluZ0RpYWxvZztcclxuXHRwcml2YXRlIGJnTWFuYWdlcjsvL+a4uOaIj+S4u+iDjOaZr1xyXG4gICAgcHJpdmF0ZSBlbmRNYW5hZ2VyOy8v57uT5p2f5a655ZmoXHJcbiAgICBwcml2YXRlIHNoaXBDb250YWluZXI7Ly/oiLnnp7vliqjlrrnlmahcclxuICAgIHByaXZhdGUgYnV0dG9ud2lkdGg7XHJcbiAgICBwcml2YXRlIGdhbWVQYW5lbDsvL+a4uOaIj+WMuuWuueWZqFxyXG4gICAgcHJpdmF0ZSB0aGluZ1JvYWQ7Ly/mvILmtYHnianlrrnlmahcclxuICAgIHByaXZhdGUgdGlwc01hbmFnZXI7Ly/mj5DnpLrlrrnlmajvvIjlsYLnuqfmnIDpq5jvvIlcclxuICAgIHByaXZhdGUgcm9hZEFyciA9IFtdOy8v5Zub5p2h6Lev5pWw57uEXHJcblx0cHJpdmF0ZSB3b3Jkc0FyciA9IEJlYXRzMDsvL+WNleivjeaVsOe7hFxyXG4gICAgcHJpdmF0ZSBsZXR0ZXJUb3RhbCA9IDA7XHJcbiAgICBwcml2YXRlIGxldHRlck9iakFyciA9IFtdO1xyXG4gICAgcHJpdmF0ZSBjdXJyTGV0dGVyID0ge2xldHRlcjonJ307Ly/lvZPliY3lrZfmr41cclxuICAgIHByaXZhdGUgc2NyZWVuTGV0dGVyQm94QXJyID0gW107Ly/lnKjlsY/luZXkuK3nmoTlrZfmr43mlbDnu4RcclxuICAgIHByaXZhdGUgbGV0dGVyViA9IDMwMDA7Ly/lhajnqIvml7bpl7RcclxuICAgIHByaXZhdGUgY29uc29sZTogTGF5YS5UZXh0O1xyXG4gICAgcHJpdmF0ZSBnb3V6aUxlbmd0aDtcclxuICAgIHByaXZhdGUgaHR0cDtcclxuICAgIHByaXZhdGUgZGF0YTtcclxuICAgIHByaXZhdGUgeDtcclxuICAgIHByaXZhdGUgYmc7XHJcbiAgICBwcml2YXRlIHR5cGVMVkwgPSAndHlwZTEnO1xyXG4gICAgcHJpdmF0ZSBoZWlnaHRBbGw7XHJcbiAgICBwcml2YXRlIHN0YXJ0MzIxID0gXCJzb3VuZC8zMjEubXAzXCJcclxuICAgIHByaXZhdGUgZW5kID0gXCJzb3VuZC9lbmQubXAzXCJcclxuICAgIFxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIF90aGlzID0gdGhpcztcclxuICAgICAgICB3aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKHtuYW1lOidmZXRjaFF1ZXN0aW9ucycsZGF0YTp7fX0sJyonKVxyXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsX3RoaXMucG9zdCxmYWxzZSk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib25vcmllbnRhdGlvbmNoYW5nZVwiIGluIHdpbmRvdyA/IFwib3JpZW50YXRpb25jaGFuZ2VcIiA6IFwicmVzaXplXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5vcmllbnRhdGlvbiA9PT0gMTgwIHx8IHdpbmRvdy5vcmllbnRhdGlvbiA9PT0gMCkgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYod2luZG93LmlubmVySGVpZ2h0PjcwMHx8d2luZG93LmlubmVyV2lkdGg+NzAwICYmIHdpbmRvdy5pbm5lcldpZHRoPndpbmRvdy5pbm5lckhlaWdodCl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTGF5YS5zdGFnZS53aWR0aCA9IDEwMDg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmKF90aGlzLmVuZE1hbmFnZXIpIF90aGlzLmVuZE1hbmFnZXIucG9zKExheWEuc3RhZ2Uud2lkdGgvMiwwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYoZ2FtZVBhbmVsKSBnYW1lUGFuZWwueCA9IExheWEuc3RhZ2Uud2lkdGgvMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTGF5YS5zdGFnZS5zY3JlZW5Nb2RlID0gR2FtZUNvbmZpZy5zY3JlZW5Nb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExheWEuc3RhZ2Uuc2NhbGVNb2RlID0gJ2V4YWN0Zml0JztcclxuICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cub3JpZW50YXRpb24gPT09IDkwIHx8IHdpbmRvdy5vcmllbnRhdGlvbiA9PT0gLTkwICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIExheWEuc3RhZ2Uud2lkdGggPSAxMzgwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZihfdGhpcy5lbmRNYW5hZ2VyKSBfdGhpcy5lbmRNYW5hZ2VyLnBvcyhMYXlhLnN0YWdlLndpZHRoLzIsMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmKGdhbWVQYW5lbCkgZ2FtZVBhbmVsLnggPSBMYXlhLnN0YWdlLndpZHRoLzI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIExheWEuc3RhZ2Uuc2NyZWVuTW9kZSA9IEdhbWVDb25maWcuc2NyZWVuTW9kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS5zdGFnZS5zY2FsZU1vZGUgPSAnc2hvd2FsbCc7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgIH0sNTAwKVxyXG4gICAgICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvL+agueaNrklEReiuvue9ruWIneWni+WMluW8leaTjlx0XHJcbiAgICAgICAgXHJcblx0XHRMYXlhLmluaXQoR2FtZUNvbmZpZy53aWR0aCwgR2FtZUNvbmZpZy5oZWlnaHQsIExheWFbXCJXZWJHTFwiXSk7XHJcblx0XHRMYXlhW1wiUGh5c2ljc1wiXSAmJiBMYXlhW1wiUGh5c2ljc1wiXS5lbmFibGUoKTtcclxuXHRcdExheWFbXCJEZWJ1Z1BhbmVsXCJdICYmIExheWFbXCJEZWJ1Z1BhbmVsXCJdLmVuYWJsZSgpO1xyXG5cdFx0TGF5YS5zdGFnZS5zY2FsZU1vZGUgPSAnJztcclxuXHRcdExheWEuc3RhZ2Uuc2NhbGVNb2RlID0gR2FtZUNvbmZpZy5zY2FsZU1vZGU7XHJcbiAgICAgICAgTGF5YS5zdGFnZS5zY3JlZW5Nb2RlID0gR2FtZUNvbmZpZy5zY3JlZW5Nb2RlO1xyXG4gICAgICAgIExheWEuc3RhZ2UuYWxpZ25IID0gR2FtZUNvbmZpZy5hbGlnbkg7XHJcbiAgICAgICAgTGF5YS5zdGFnZS5hbGlnblYgPSBHYW1lQ29uZmlnLmFsaWduVjtcclxuICAgICAgICBMYXlhLnN0YWdlLndpZHRoID0gd2luZG93LmlubmVySGVpZ2h0PjcwMHx8d2luZG93LmlubmVyV2lkdGg+NzAwICYmIHdpbmRvdy5pbm5lcldpZHRoPndpbmRvdy5pbm5lckhlaWdodD8xMzgwOjEwMDg7XHJcblx0XHQvL+WFvOWuueW+ruS/oeS4jeaUr+aMgeWKoOi9vXNjZW5l5ZCO57yA5Zy65pmvXHJcblx0XHRMYXlhLlVSTC5leHBvcnRTY2VuZVRvSnNvbiA9IEdhbWVDb25maWcuZXhwb3J0U2NlbmVUb0pzb247XHJcblxyXG5cdFx0Ly/miZPlvIDosIPor5XpnaLmnb/vvIjpgJrov4dJREXorr7nva7osIPor5XmqKHlvI/vvIzmiJbogIV1cmzlnLDlnYDlop7liqBkZWJ1Zz10cnVl5Y+C5pWw77yM5Z2H5Y+v5omT5byA6LCD6K+V6Z2i5p2/77yJXHJcblx0XHRpZiAoR2FtZUNvbmZpZy5kZWJ1ZyB8fCBMYXlhLlV0aWxzLmdldFF1ZXJ5U3RyaW5nKFwiZGVidWdcIikgPT0gXCJ0cnVlXCIpIExheWEuZW5hYmxlRGVidWdQYW5lbCgpO1xyXG5cdFx0aWYgKEdhbWVDb25maWcucGh5c2ljc0RlYnVnICYmIExheWFbXCJQaHlzaWNzRGVidWdEcmF3XCJdKSBMYXlhW1wiUGh5c2ljc0RlYnVnRHJhd1wiXS5lbmFibGUoKTtcclxuXHRcdGlmIChHYW1lQ29uZmlnLnN0YXQpIExheWEuU3RhdC5zaG93KCk7XHJcbiAgICAgICAgTGF5YS5hbGVydEdsb2JhbEVycm9yID0gdHJ1ZTtcclxuXHRcdExheWEuc3RhZ2UuYmdDb2xvciA9IFwid2hpdGVcIlxyXG5cdFx0VUlDb25maWcucG9wdXBCZ0FscGhhID0gMVxyXG5cdFx0VUlDb25maWcuY2xvc2VEaWFsb2dPblNpZGUgPSBmYWxzZVxyXG4gICAgICAgIFVJQ29uZmlnLnBvcHVwQmdDb2xvciA9IFwiI2ZmZmZmZlwiXHJcblxyXG4gICAgICAgIFNvdW5kTWFuYWdlci5zZXRTb3VuZFZvbHVtZSgwKTtcclxuICAgICAgICBTb3VuZE1hbmFnZXIucGxheVNvdW5kKHRoaXMuZW5kLCAxKTtcclxuICAgICAgICBTb3VuZE1hbmFnZXIucGxheVNvdW5kKHRoaXMuc3RhcnQzMjEsIDEpO1xyXG4gICAgICAgIC8v6aKE5Yqg6L29XHJcblx0XHR0aGlzLmxvYWRQcm9nZXNzQXNzZXRzKClcclxuXHRcdC8v5r+A5rS76LWE5rqQ54mI5pys5o6n5Yi277yMdmVyc2lvbi5qc29u55SxSURF5Y+R5biD5Yqf6IO96Ieq5Yqo55Sf5oiQ77yM5aaC5p6c5rKh5pyJ5Lmf5LiN5b2x5ZON5ZCO57ut5rWB56iLXHJcblx0XHRMYXlhLlJlc291cmNlVmVyc2lvbi5lbmFibGUoXCJ2ZXJzaW9uLmpzb25cIiwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uVmVyc2lvbkxvYWRlZCksIExheWEuUmVzb3VyY2VWZXJzaW9uLkZJTEVOQU1FX1ZFUlNJT04pO1xyXG5cdH1cclxuXHJcblx0b25WZXJzaW9uTG9hZGVkKCk6IHZvaWQge1xyXG5cdFx0Ly/mv4DmtLvlpKflsI/lm77mmKDlsITvvIzliqDovb3lsI/lm77nmoTml7blgJnvvIzlpoLmnpzlj5HnjrDlsI/lm77lnKjlpKflm77lkIjpm4bph4zpnaLvvIzliJnkvJjlhYjliqDovb3lpKflm77lkIjpm4bvvIzogIzkuI3mmK/lsI/lm75cclxuXHRcdExheWEuQXRsYXNJbmZvTWFuYWdlci5lbmFibGUoXCJmaWxlY29uZmlnLmpzb25cIiwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uQ29uZmlnTG9hZGVkKSk7XHJcblx0fVxyXG4gICAgbG9hZFByb2dlc3NBc3NldHMoKTogdm9pZCB7XHJcblx0XHRMYXlhLmxvYWRlci5sb2FkKFtcInJlcy9hdGxhcy9sb2FkLmF0bGFzXCIsXCJsb2FkL2JnLnBuZ1wiXSwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uUHJvZ3Jlc3NBc3NldHNMb2FkZWQpKVxyXG5cdH1cclxuXHRvbkNvbmZpZ0xvYWRlZCgpOiB2b2lkIHtcclxuXHRcdC8v5Yqg6L29SURF5oyH5a6a55qE5Zy65pmvXHJcblx0XHRHYW1lQ29uZmlnLnN0YXJ0U2NlbmUgJiYgTGF5YS5TY2VuZS5vcGVuKEdhbWVDb25maWcuc3RhcnRTY2VuZSk7XHJcbiAgICB9XHJcbiAgICAvL+mihOWKoOi9vVxyXG5cdGxvYWRPdGhlckFzc2V0cygpOiB2b2lkIHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgY29uc3QgYXNzZXRzOiBBcnJheTxhbnk+ID0gW11cclxuICAgICAgICBmb3IobGV0IGk9MDtpPDUzMjtpKyspe1xyXG5cdFx0XHRhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IHRoYXQuZGF0YS5tdXNpY1VybCxcclxuICAgICAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLlNPVU5EXHJcbiAgICAgICAgICAgIH0pXHJcblx0XHR9XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IHRoYXQuZGF0YS5tdXNpY1VybCxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuU09VTkRcclxuICAgICAgICB9KVxyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiB0aGF0LmRhdGEuZXhwbGFpbkF1ZGlvVXJsLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5TT1VORFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy50eXBlMV8xLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy50eXBlMV8yLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy50eXBlMV9iZyxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KVxyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMudHlwZTFfbTEsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLnR5cGUxX20yLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy50eXBlMV9tMyxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KVxyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMudHlwZTFfbTQsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLnR5cGUyXzEsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLnR5cGUyXzIsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLnR5cGUyX2JnLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy50eXBlMl9tMSxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KVxyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMudHlwZTJfbTIsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLnR5cGUyX20zLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy50eXBlMl9tNCxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KVxyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMudHlwZTNfMSxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KVxyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMudHlwZTNfMixcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KVxyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMudHlwZTNfYmcsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLnR5cGUzX20xLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy50eXBlM19tMixcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KVxyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMudHlwZTNfbTMsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLnR5cGUzX200LFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy50eXBlNF8xLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy50eXBlNF8yLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy50eXBlNF9iZyxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KVxyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMudHlwZTRfbTEsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLnR5cGU0X20yLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy50eXBlNF9tMyxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KVxyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMudHlwZTRfbTQsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLkNvdW50RG93bjEsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLnNvdW5kMCxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuU09VTkRcclxuICAgICAgICB9KVxyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMuc291bmQxLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5TT1VORFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy5zb3VuZDIsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLlNPVU5EXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLnNvdW5kMyxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuU09VTkRcclxuICAgICAgICB9KVxyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMuc291bmQ0LFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5TT1VORFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy50ZXN0LFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy5Db3VudERvd24xLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy5Db3VudERvd24yLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy5Db3VudERvd24zLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy5yZWFkeSxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KVxyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMuZ28sXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSlcclxuXHRcdGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMucGVyZmVjdCxcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogQ29uc3RhbnRzLmJhZCxcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogQ29uc3RhbnRzLmJ1dHRvbkFnYWluLFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMuYnV0dG9uTmV4dCxcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogQ29uc3RhbnRzLmJ1dHRvblN0YXJ0LFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMuZW5lcmd5LFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMubWlzcyxcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogQ29uc3RhbnRzLm9ic3RhY2xlLFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMucmVzdGFydCxcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogQ29uc3RhbnRzLnNnLFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMuYmFkYnVsLFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMuYmFkZ3JlLFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMuYmFkcmVkLFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMuYmFkeWVsLFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMuZ29idWwsXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5nb2dyZSxcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogQ29uc3RhbnRzLmdvcmVkLFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMuZ295ZWwsXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5va2J1bCxcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogQ29uc3RhbnRzLm9rZ3JlLFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMub2tyZWQsXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5va3llbCxcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogQ29uc3RhbnRzLnNob3BidWwsXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5zaG9wZ3JlLFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMuc2hvcHJlZCxcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogQ29uc3RhbnRzLnNob3B5ZWwsXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5zdGFyT0ZGLFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMuc3Rhck9OLFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMudGltZSxcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogQ29uc3RhbnRzLnRvcEJhbixcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogXCJyZXMvYXRsYXMvc2hpcC9iYWQvYnVsLmF0bGFzXCIsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLkFUTEFTXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IFwicmVzL2F0bGFzL3NoaXAvYmFkL2dyZS5hdGxhc1wiLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5BVExBU1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBcInJlcy9hdGxhcy9zaGlwL2JhZC9yZWQuYXRsYXNcIixcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuQVRMQVNcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogXCJyZXMvYXRsYXMvc2hpcC9iYWQveWVsLmF0bGFzXCIsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLkFUTEFTXHJcbiAgICAgICAgfSk7XHJcblx0XHRhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogXCJyZXMvYXRsYXMvc2hpcC9nby9idWwuYXRsYXNcIixcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuQVRMQVNcclxuICAgICAgICB9KTtcclxuXHRcdGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBcInJlcy9hdGxhcy9zaGlwL2dvL2dyZS5hdGxhc1wiLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5BVExBU1xyXG4gICAgICAgIH0pO1xyXG5cdFx0YXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IFwicmVzL2F0bGFzL3NoaXAvZ28vcmVkLmF0bGFzXCIsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLkFUTEFTXHJcbiAgICAgICAgfSk7XHJcblx0XHRhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogXCJyZXMvYXRsYXMvc2hpcC9nby95ZWwuYXRsYXNcIixcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuQVRMQVNcclxuICAgICAgICB9KTtcclxuXHRcdGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBcInJlcy9hdGxhcy9zaGlwL29rL2J1bC5hdGxhc1wiLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5BVExBU1xyXG4gICAgICAgIH0pO1xyXG5cdFx0YXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IFwicmVzL2F0bGFzL3NoaXAvb2svZ3JlLmF0bGFzXCIsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLkFUTEFTXHJcbiAgICAgICAgfSk7XHJcblx0XHRhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogXCJyZXMvYXRsYXMvc2hpcC9vay9yZWQuYXRsYXNcIixcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuQVRMQVNcclxuICAgICAgICB9KTtcclxuXHRcdGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBcInJlcy9hdGxhcy9zaGlwL29rL3llbC5hdGxhc1wiLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5BVExBU1xyXG4gICAgICAgIH0pO1xyXG5cdFx0YXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IFwicmVzL2F0bGFzL3NoaXAvc2hvcC9idWwuYXRsYXNcIixcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuQVRMQVNcclxuICAgICAgICB9KTtcclxuXHRcdGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBcInJlcy9hdGxhcy9zaGlwL3Nob3AvZ3JlLmF0bGFzXCIsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLkFUTEFTXHJcbiAgICAgICAgfSk7XHJcblx0XHRhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogXCJyZXMvYXRsYXMvc2hpcC9zaG9wL3JlZC5hdGxhc1wiLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5BVExBU1xyXG4gICAgICAgIH0pO1xyXG5cdFx0YXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IFwicmVzL2F0bGFzL3NoaXAvc2hvcC95ZWwuYXRsYXNcIixcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuQVRMQVNcclxuICAgICAgICB9KTtcclxuXHRcdGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBcInJlcy9hdGxhcy9zaGlwLmF0bGFzXCIsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLkFUTEFTXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5iZzEsXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5iZzIsXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5iZzMsXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5iZzQsXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5iZzUsXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5iZzYsXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5iZzcsXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5iZzgsXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5iZzksXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5iZzEwLFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMuYmcxMSxcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogQ29uc3RhbnRzLmJnMTIsXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5iZzEzLFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMuYmcxNCxcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogQ29uc3RhbnRzLmJnMTUsXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5iZzE2LFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMuYmcxNyxcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogQ29uc3RhbnRzLmJnMTgsXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5iZzE5LFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMuYmcyMCxcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogQ29uc3RhbnRzLmJnMjEsXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5iZzIyLFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMuYmcyMyxcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogQ29uc3RhbnRzLmJnMjQsXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5iZzI1LFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMuYmcyNixcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogQ29uc3RhbnRzLmJnMjcsXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5iZzI4LFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMuYmcyOSxcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogQ29uc3RhbnRzLmJnMzAsXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5iZzMxLFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMuYmczMixcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHVybDogQ29uc3RhbnRzLmJnMzMsXHJcbiAgICAgICAgICAgIHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IENvbnN0YW50cy5iZzM0LFxyXG4gICAgICAgICAgICB0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiBDb25zdGFudHMuYmczNSxcclxuICAgICAgICAgICAgdHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLmxvbmcsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLmxvYWQsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLmxvYWRiZyxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KVxyXG5cdFx0YXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IFwicmVzL2F0bGFzL2xvYWQuYXRsYXNcIixcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuQVRMQVNcclxuICAgICAgICB9KTtcclxuXHRcdGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBcInJlcy9hdGxhcy9sb25nL2xvbmdTV0YuYXRsYXNcIixcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuQVRMQVNcclxuICAgICAgICB9KTtcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLmxvbmdTV0YsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLmxvbmdTV0YxLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy5sb25nU1dGMixcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KVxyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMubG9uZ1NXRjMsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSlcclxuXHRcdGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBcInJlcy9hdGxhcy9lbmQvMC5hdGxhc1wiLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5BVExBU1xyXG4gICAgICAgIH0pO1xyXG5cdFx0YXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IFwicmVzL2F0bGFzL2VuZC8xLmF0bGFzXCIsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLkFUTEFTXHJcbiAgICAgICAgfSk7XHJcblx0XHRhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogXCJyZXMvYXRsYXMvZW5kLzIuYXRsYXNcIixcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuQVRMQVNcclxuICAgICAgICB9KTtcclxuXHRcdGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBcInJlcy9hdGxhcy9lbmQvMy5hdGxhc1wiLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5BVExBU1xyXG4gICAgICAgIH0pO1xyXG5cdFx0YXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IFwicmVzL2F0bGFzL2VuZC8wMC5hdGxhc1wiLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5BVExBU1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMuZW5kMCxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuICAgICAgICB9KVxyXG4gICAgICAgIGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMuZW5kMDAxLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy5lbmQwMDIsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLmVuZDEsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLmVuZDIsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLmVuZDMsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICAvLyDpooTliqDovb3otYTmupBcclxuXHRcdExheWEubG9hZGVyLmxvYWQoYXNzZXRzLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25Bc3NldHNMb2FkZWQpLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25Bc3NldHNMb2FkaW5nLCBudWxsLCBmYWxzZSkpO1xyXG5cdFx0TGF5YS5sb2FkZXIub24oTGF5YS5FdmVudC5FUlJPUiwgdGhpcywgdGhpcy5vbkVycm9yKVxyXG5cdH1cclxuICAgIC8vIOW/hemcgOWFiOWKoOi9vei/m+W6puadoei1hOa6kOaJjeiDveaYvuekuui/m+W6puadoVxyXG5cdG9uUHJvZ3Jlc3NBc3NldHNMb2FkZWQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8g5pi+56S66L+b5bqm5p2hXHJcbiAgICAgICAgLy8g5pi+56S66L+b5bqm5p2hXHJcbiAgICAgICAgdGhpcy5sb2FkaW5nRGlhbG9nID0gbmV3IExvYWRpbmdEaWFsb2coKTtcclxuICAgICAgICAvLyB0aGlzLmxvYWRpbmdEaWFsb2cud2lkdGggPSA2NDA7XHJcbiAgICAgICAgLy8gdGhpcy5sb2FkaW5nRGlhbG9nLmhlaWdodCA9IDY0MDtcclxuXHRcdC8vIHRoaXMubG9hZGluZ0RpYWxvZy5wb3B1cCh0cnVlLCBmYWxzZSk7XHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0dGhpcy5sb2FkT3RoZXJBc3NldHMoKTtcclxuXHRcdH0sIDUwMCk7XHJcblx0fVxyXG4gICAgb25Bc3NldHNMb2FkaW5nKHByb2dyZXNzOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICAvLyB0aGlzLmxvYWRpbmdEaWFsb2cuY2hhbmdlUHJvZ3Jlc3NWYWx1ZShwcm9ncmVzcyk7XHJcbiAgICB9XHJcbiAgICBvbkFzc2V0c0xvYWRlZCgpOiB2b2lkIHsgXHJcbiAgICAgICAgd2luZG93LnBhcmVudC5wb3N0TWVzc2FnZSh7bmFtZTonZmV0Y2hRdWVzdGlvbnMnLGRhdGE6e319LCcqJylcclxuICAgICAgICB0aGlzLkdhbWVNYW5hZ2VyKClcclxuICAgIH1cclxuXHRvbkVycm9yKGVycjogc3RyaW5nKTogdm9pZCB7XHJcblx0XHRjb25zb2xlLmxvZyhcIuWKoOi9veWksei0pTogXCIgKyBlcnIpO1xyXG5cdFx0Ly8gdGhpcy5sb2FkaW5nRGlhbG9nLnVwZGF0ZVRpcChcIuWKoOi9veWksei0pTogXCIgKyBlcnIpXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdEdhbWVNYW5hZ2VyKCk6IHZvaWQge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBMb2FkaW5nRGlhbG9nLmNsb3NlQWxsKCk7XHJcbiAgICAgICAgICAgIExheWEuc3RhZ2Uuc2NhbGVNb2RlID0gd2luZG93LmlubmVyV2lkdGg+d2luZG93LmlubmVySGVpZ2h0PydzaG93YWxsJzonZXhhY3RmaXQnO1xyXG4gICAgICAgICAgICB0aGlzLmhlaWdodEFsbCA9IDY5MDtcclxuICAgICAgICAgICAgTGF5YS5zdGFnZS5yZW1vdmVDaGlsZCh0aGlzLmJnTWFuYWdlcik7XHJcbiAgICAgICAgICAgIExheWEuc3RhZ2UucmVtb3ZlQ2hpbGQoZ2FtZVBhbmVsKTtcclxuICAgICAgICAgICAgTGF5YS5zdGFnZS5yZW1vdmVDaGlsZCh0aGlzLmJ1dHRvbndpZHRoKTtcclxuICAgICAgICAgICAgTGF5YS5zdGFnZS5yZW1vdmVDaGlsZCh0aGlzLnRpcHNNYW5hZ2VyKTtcclxuICAgICAgICAgICAgTGF5YS5zdGFnZS5yZW1vdmVDaGlsZCh0aGlzLmVuZE1hbmFnZXIpO1xyXG4gICAgICAgICAgICB0aGlzLmxldHRlclRvdGFsID0gMDtcclxuICAgICAgICAgICAgdGhpcy5sZXR0ZXJPYmpBcnIgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyTGV0dGVyID0ge2xldHRlcjonJ307Ly/lvZPliY3lrZfmr41cclxuICAgICAgICAgICAgaUluZGV4ID0gMDtcclxuICAgICAgICAgICAgdGhpbmdMaXN0ID0gW107XHJcbiAgICAgICAgICAgIHRoaXMud29yZHNBcnIgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5zY3JlZW5MZXR0ZXJCb3hBcnIgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5sZXR0ZXJWID0gMzAwMDsvL+WFqOeoi+aXtumXtFxyXG4gICAgICAgICAgICB0aGlzLmdvdXppTGVuZ3RoID0gJyc7XHJcbiAgICAgICAgICAgIHRoaXMuYmcgPSBuZXcgU3ByaXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYmcud2lkdGggPSAxMzgwO1xyXG4gICAgICAgICAgICB0aGlzLmJnLmhlaWdodCA9IDY0MDtcclxuICAgICAgICAgICAgdGhpcy5iZy5waXZvdChMYXlhLnN0YWdlLndpZHRoLzIsMCk7XHJcbiAgICAgICAgICAgIHRoaXMuYmcueCA9IHRoaXMuaGVpZ2h0QWxsO1xyXG4gICAgICAgICAgICB0aGlzLmJnLmxvYWRJbWFnZSgncmVzL2ltZ3MvJyt0aGlzLnR5cGVMVkwrJy93YmcucG5nJyk7XHJcbiAgICAgICAgICAgIExheWEuc3RhZ2UuYWRkQ2hpbGQodGhpcy5iZyk7XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgZ2FtZVBhbmVsID0gbmV3IFNwcml0ZSgpO1xyXG4gICAgICAgICAgICBnYW1lUGFuZWwud2lkdGggPSAxMDA4O1xyXG4gICAgICAgICAgICBnYW1lUGFuZWwuaGVpZ2h0ID0gNjQwO1xyXG4gICAgICAgICAgICBnYW1lUGFuZWwucGl2b3QoNTA0LDApO1xyXG4gICAgICAgICAgICBnYW1lUGFuZWwueCA9IExheWEuc3RhZ2Uud2lkdGgvMjtcclxuICAgICAgICAgICAgTGF5YS5zdGFnZS5hZGRDaGlsZChnYW1lUGFuZWwpO1xyXG4gICAgICAgICAgICBpZih0aGlzLnR5cGVMVkwgPT0gJ3R5cGUxJyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJnTWFuYWdlciA9IG5ldyBCZygpO1xyXG4gICAgICAgICAgICAgICAgZ2FtZVBhbmVsLmFkZENoaWxkKHRoaXMuYmdNYW5hZ2VyKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy50aGluZ1JvYWQgPSBuZXcgU3ByaXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMudGhpbmdSb2FkLndoaWxlID0gMTAwODtcclxuICAgICAgICAgICAgdGhpcy50aGluZ1JvYWQuaGVpZ2h0ID0gNjQwO1xyXG4gICAgICAgICAgICB0aGlzLnRoaW5nUm9hZC5waXZvdCg1MDQsMCk7XHJcbiAgICAgICAgICAgIHRoaXMudGhpbmdSb2FkLnggPSAzMDA7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGdhbWVQYW5lbC5hZGRDaGlsZCh0aGlzLnRoaW5nUm9hZCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbndpZHRoID0gbmV3IFNwcml0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbndpZHRoLndoaWxlID0gMTAwODtcclxuICAgICAgICAgICAgdGhpcy5idXR0b253aWR0aC5oZWlnaHQgPSAxNTI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9ud2lkdGgucGl2b3QoNTA0LDQ4OCk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9ud2lkdGgueCA9IDUwNDsgICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5idXR0b253aWR0aC5sb2FkSW1hZ2UoXCJyZXMvaW1ncy9idXR0b25XaWR0aC5wbmdcIik7XHJcbiAgICAgICAgICAgIGdhbWVQYW5lbC5hZGRDaGlsZCh0aGlzLmJ1dHRvbndpZHRoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2hpcENvbnRhaW5lciA9IG5ldyBTaGlwKHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLnNoaXBDb250YWluZXIuaGVpZ2h0ID0gMTc4O1xyXG4gICAgICAgICAgICB0aGlzLnNoaXBDb250YWluZXIud2lkdGggPSAxMDA4O1xyXG4gICAgICAgICAgICB0aGlzLnNoaXBDb250YWluZXIueSA9IDYwMFxyXG4gICAgICAgICAgICBnYW1lUGFuZWwuYWRkQ2hpbGQodGhpcy5zaGlwQ29udGFpbmVyKTsgICBcclxuXHJcbiAgICAgICAgICAgIHRoaXMudGlwc01hbmFnZXIgPSBuZXcgVGlwcyh0aGlzLGdhbWVQYW5lbCk7XHJcbiAgICAgICAgICAgIHRoaXMudGlwc01hbmFnZXIud2lkdGggPSAxMDA4O1xyXG4gICAgICAgICAgICB0aGlzLnRpcHNNYW5hZ2VyLnBpdm90KDUwNCwwKTtcclxuICAgICAgICAgICAgdGhpcy50aXBzTWFuYWdlci54ID0gNTA0O1xyXG4gICAgICAgICAgICBnYW1lUGFuZWwuYWRkQ2hpbGQodGhpcy50aXBzTWFuYWdlcik7XHJcbiAgICAgICAgICAgIHRoaXMud29yZHNBcnIgPSBCZWF0czA7XHJcbiAgICAgICAgICAgIHRoaXMuZ291emlMZW5ndGggPSB0aGlzLndvcmRzQXJyLmZpbHRlcihpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLnRoaW5nID09ICcxJztcclxuICAgICAgICAgICAgfSkubGVuZ3RoO1xyXG4gICAgICAgICAgICB0aGlzLmluaXRMZXR0ZXJPYmpBcnIoKTtcclxuICAgICAgICAgICAgdGhpcy5pbml0R2FtZSgpO1xyXG4gICAgICAgIH0sIDIwMDApOyAgXHJcbiAgICB9XHJcbiAgICAvL+m8oOagh+enu+WKqOS6i+S7tlxyXG5cdC8vIG9uTW91c2VNb3ZlKCk6IHZvaWQge1xyXG5cdC8vIFx0Ly8gY29uc29sZS5sb2coXCJvbk1vdXNlTW92ZShZ77yaXCIsIExheWEuc3RhZ2UubW91c2VZLCBcIjsgIHjvvJpcIiwgTGF5YS5zdGFnZS5tb3VzZVgsICfvvIknKTtcclxuXHQvLyBcdC8vIGNvbnNvbGUubG9nKFwiTGF5YVwiLCBMYXlhLnN0YWdlKTtcclxuXHQvLyB9XHJcbiAgICBpbml0TGV0dGVyT2JqQXJyICgpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMud29yZHNBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGxpbkFyciA9IFtdO1xyXG4gICAgICAgICAgICB2YXIgbGluZSA9IHRoaXMud29yZHNBcnJbaV0udGhpbmc7XHJcbiAgICAgICAgICAgIHZhciB0aW1lID0gdGhpcy53b3Jkc0FycltpXS50aW1lO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGxpbmUubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGxpbkFyci5wdXNoKHtsZXR0ZXI6IGxpbmVbal0sIHN0YXR1czogMCwgcG9zaXRpb246IFtpLCBqXSxpc1Nob3c6ZmFsc2UsdGltZTp0aGlzLmxldHRlclYsdGltZXM6dGltZSxuZXh0OjB9KTtcclxuICAgICAgICAgICAgICAgIGlmKGxpbmVbal0gIT0gJyAnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZXR0ZXJUb3RhbCsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubGV0dGVyT2JqQXJyLnB1c2gobGluQXJyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdEdhbWUgKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudGlwc01hbmFnZXIub24oXCJTdGFydF9HYW1lX0V2ZW50XCIsIHRoaXMsIHRoaXMuc3RhcnRHYW1lKTtcclxuICAgICAgICB0aGlzLnRpcHNNYW5hZ2VyLm9uKFwiRW5kX0dhbWVfRXZlbnRcIiwgdGhpcywgdGhpcy5lbmRHYW1lKTtcclxuICAgIH1cclxuICAgIHN0YXJ0R2FtZSAoKTogdm9pZCB7XHJcbiAgICAgICAgd2luZG93LnBhcmVudC5wb3N0TWVzc2FnZSh7bmFtZTonc3RhcnRHYW1lJyxkYXRhOnt9fSwnKicpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucGxheU11c2ljKCk7XHJcbiAgICAgICAgdGhpcy5zdGFydFdvcmRBcnIoKTtcclxuICAgICAgICBpZih0aGlzLnR5cGVMVkwgPT0gJ3R5cGUxJyl7XHJcbiAgICAgICAgICAgIHRoaXMuc2hpcENvbnRhaW5lci5nb3NoaXAoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZW5kR2FtZSAoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lbmRNYW5hZ2VyID0gbmV3IEVuZCh0aGlzLExvYWRpbmdEaWFsb2cpOyAgXHJcbiAgICAgICAgdGhpcy5lbmRNYW5hZ2VyLndpZHRoID0gMTM4MDtcclxuICAgICAgICB0aGlzLmVuZE1hbmFnZXIuaGVpZ2h0ID0gNjQwOyAgXHJcbiAgICAgICAgdGhpcy5lbmRNYW5hZ2VyLnBpdm90KDY5MCwwKTtcclxuICAgICAgICB0aGlzLmVuZE1hbmFnZXIucG9zKExheWEuc3RhZ2Uud2lkdGgvMiwwKTtcclxuICAgICAgICB3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKHtuYW1lOidmaW5pc2hHYW1lJyxkYXRhOnt9fSwnKicpO1xyXG4gICAgXHRMYXlhLnN0YWdlLmFkZENoaWxkKHRoaXMuZW5kTWFuYWdlcik7XHJcbiAgICAgICAgdmFyIG9iaiA9IHRoaXMudGlwc01hbmFnZXIuZ2V0U2NvcmUoKTtcclxuICAgICAgICB0aGlzLmVuZE1hbmFnZXIuc2hvd0VuZFBhbmVsKG9iaiwgdGhpcy5sZXR0ZXJUb3RhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheU11c2ljICgpOiB2b2lkIHtcclxuICAgICAgICBTb3VuZE1hbmFnZXIuYXV0b1N0b3BNdXNpYyA9IGZhbHNlO1xyXG4gICAgICAgIFNvdW5kTWFuYWdlci5wbGF5TXVzaWModGhpcy5kYXRhLm11c2ljVXJsLCAxKTtcclxuICAgICAgICBTb3VuZE1hbmFnZXIuc2V0U291bmRWb2x1bWUoMSk7ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBzdGFydFdvcmRBcnIgKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucm9hZEFyciA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBvbmVSb2FkU3ByaXRlID0gbmV3IFNwcml0ZSgpO1xyXG4gICAgICAgICAgICBvbmVSb2FkU3ByaXRlLndpZHRoID0gMjAwO1xyXG4gICAgICAgICAgICBvbmVSb2FkU3ByaXRlLmhlaWdodCA9IDY0MDtcclxuICAgICAgICAgICAgb25lUm9hZFNwcml0ZS5uYW1lID0gJ3JvYWQnICsgaTtcclxuICAgICAgICAgICAgdGhpcy5yb2FkQXJyLnB1c2gob25lUm9hZFNwcml0ZSk7XHJcbiAgICAgICAgICAgIHRoaXMudGhpbmdSb2FkLmFkZENoaWxkKG9uZVJvYWRTcHJpdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxldHRlck9iakFyci5tYXAoZGF0YT0+e1xyXG4gICAgICAgICAgICBsZXQgdGhpc1JvYWQgPSAwXHJcbiAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgIHRoaXNSb2FkID0gcGFyc2VJbnQoTWF0aC5yYW5kb20oKSo0K1wiXCIpO1xyXG4gICAgICAgICAgICB9IHdoaWxlIChyb2FkcyA9PSB0aGlzUm9hZClcclxuICAgICAgICAgICAgcm9hZHMgPSB0aGlzUm9hZDtcclxuICAgICAgICAgICAgZGF0YVswXVsncm9hZCddID0gcm9hZHNcclxuICAgICAgICB9KVxyXG4gICAgICAgIGlJbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5uZXh0VGltZW91dCgpO1xyXG4gICAgfVxyXG4gICAgbmV4dFRpbWVvdXQoKSB7XHJcbiAgICAgICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5sZXR0ZXJPYmpBcnJbaUluZGV4XSkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuY3VyckxldHRlciA9IF90aGlzLmxldHRlck9iakFycltpSW5kZXhdWzBdO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMubGV0dGVyT2JqQXJyW2lJbmRleF1bMF0ubmV4dCA9IDI7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5sZXR0ZXJPYmpBcnJbaUluZGV4KzFdP190aGlzLmxldHRlck9iakFycltpSW5kZXgrMV1bMF0ubmV4dCA9IDE6Jyc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGFzdExpbmUgPSBfdGhpcy5sZXR0ZXJPYmpBcnJbX3RoaXMubGV0dGVyT2JqQXJyLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuY3VyckxldHRlciA9IGxhc3RMaW5lW2xhc3RMaW5lLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICAgICAgTGF5YS50aW1lci5jbGVhckFsbCh0aGlzKVxyXG4gICAgICAgICAgICAgICAgLy8gY2xlYXJJbnRlcnZhbCh0aW1lb3V0SWQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSB3aGlsZSAoIV90aGlzLmN1cnJMZXR0ZXIgfHwgX3RoaXMuY3VyckxldHRlci5sZXR0ZXIgPT0gXCIgXCIpO1xyXG5cclxuICAgICAgICB2YXIgbGV0dGVyQm94ID0gbmV3IFRoaW5nKF90aGlzLF90aGlzLmN1cnJMZXR0ZXIpO1xyXG4gICAgICAgIGxldHRlckJveC5uYW1lID0gJ3gnICsgX3RoaXMuZ2V0UmFuZG9tQ29sb3IoKTtcclxuICAgICAgICB0aGluZ0xpc3QucHVzaChsZXR0ZXJCb3gpXHJcbiAgICAgICAgX3RoaXMuYXBwZW5kT25lTGV0dGVyKGxldHRlckJveCk7XHJcbiAgICAgICAgTGF5YS50aW1lci5sb29wKCBfdGhpcy5sZXR0ZXJPYmpBcnJbaUluZGV4XVswXS50aW1lcyx0aGlzLHRoaXMubmV4dFRpbWVvdXQpO1xyXG4gICAgICAgIGlJbmRleCsrOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgfVxyXG4gICAgZ2V0UmFuZG9tQ29sb3IgKCk6YW55IHtcclxuICAgICAgICByZXR1cm4gJyMnICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTY3NzcyMTUpLnRvU3RyaW5nKDE2KTtcclxuICAgIH1cclxuXHQvL+iuvue9rumAn+W6plxyXG4gICAgYXBwZW5kT25lTGV0dGVyIChsZXR0ZXJCb3gpIHtcclxuICAgICAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLnNjcmVlbkxldHRlckJveEFyci5wdXNoKGxldHRlckJveCk7XHJcbiAgICAgICAgdmFyIHJhbmRvbUluZGV4ID0gbGV0dGVyQm94LndvcmRPYmoucm9hZDtcclxuXHRcdGxldHRlckJveC5ndWlkYW8gPSByYW5kb21JbmRleDtcclxuXHRcdGlmKGxldHRlckJveC53b3JkT2JqLmlzU2hvdyl7XHJcbiAgICAgICAgICAgIGxldHRlckJveC54ID0gbGV0dGVyQm94LndvcmRPYmouc3RhcnQueCsodGhpcy5oZWlnaHRBbGwpO1xyXG4gICAgICAgICAgICBsZXR0ZXJCb3gueSA9IGxldHRlckJveC53b3JkT2JqLnN0YXJ0Lnk7XHJcbiAgICAgICAgICAgIGxldHRlckJveC5zY2FsZVggPSBsZXR0ZXJCb3gud29yZE9iai5zdGFydC5zY2FsZVg7XHJcbiAgICAgICAgICAgIGxldHRlckJveC5zY2FsZVkgPSBsZXR0ZXJCb3gud29yZE9iai5zdGFydC5zY2FsZVk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0dGVyQm94LnggPSBmb3VyUm9hZFBvc2l0aW9uW3JhbmRvbUluZGV4XS5zdGFydC54Kyh0aGlzLmhlaWdodEFsbCk7XHJcbiAgICAgICAgICAgIGxldHRlckJveC55ID0gZm91clJvYWRQb3NpdGlvbltyYW5kb21JbmRleF0uc3RhcnQueTtcclxuICAgICAgICAgICAgbGV0dGVyQm94LnNjYWxlWCA9IGZvdXJSb2FkUG9zaXRpb25bcmFuZG9tSW5kZXhdLnN0YXJ0LnNjYWxlWDtcclxuICAgICAgICAgICAgbGV0dGVyQm94LnNjYWxlWSA9IGZvdXJSb2FkUG9zaXRpb25bcmFuZG9tSW5kZXhdLnN0YXJ0LnNjYWxlWTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yb2FkQXJyW3JhbmRvbUluZGV4XS5hZGRDaGlsZChsZXR0ZXJCb3gpO1xyXG4gICAgICAgIHZhciBoYW5kbGVyID0gbmV3IEhhbmRsZXIobGV0dGVyQm94LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmKCFpc1BhdXNlKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKC0xKTtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMud29yZE9iai5sZXR0ZXIgIT0gJzInKXtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy50aXBzTWFuYWdlci5zaG93UGxheVRpcCgwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfdGhpcy5yZW1vdmVMZXR0ZXIodGhpcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIG1vdmVVcGRhdGVIYW5kbGVyID0gbmV3IEhhbmRsZXIobGV0dGVyQm94LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBvbmVSb2FkID0gX3RoaXMucm9hZEFyclt0aGlzLmd1aWRhb107XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb25lUm9hZC5udW1DaGlsZHJlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGV0dGVyID0gb25lUm9hZC5nZXRDaGlsZEF0KGkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxldHRlciBpbnN0YW5jZW9mIFRoaW5nICYmIGxldHRlci5pc092ZXIgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihsZXR0ZXIueSAhPSA2NDAgJiYgIWlzUGF1c2Upe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXJ0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IGxldHRlci54LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IGxldHRlci55LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlWDogbGV0dGVyLnNjYWxlWCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZVk6IGxldHRlci5zY2FsZVksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVyY2VudCA9IGxldHRlci55LzY0MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVyY2VudCA9ICgxMDAgLSBNYXRoLmZsb29yKHBlcmNlbnQgKiAxMDApKSAvIDEwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFRpbWUocGVyY2VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0UGVyY2VudChwZXJjZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldHRlckJveC5tb3ZlVHdlZW4gPSBUd2Vlbi50byhsZXR0ZXJCb3gsIHt4Oihmb3VyUm9hZFBvc2l0aW9uW3JhbmRvbUluZGV4XS5lbmQueCsodGhpcy5oZWlnaHRBbGwpKSx5OjY0MH0sIGxldHRlckJveC53b3JkT2JqLnRpbWUsIEVhc2UubGluZWFyTm9uZSwgaGFuZGxlcik7XHJcbiAgICAgICAgbGV0dGVyQm94Lm1vdmVUd2Vlbi51cGRhdGUgPSBtb3ZlVXBkYXRlSGFuZGxlcjtcclxuICAgICAgICBsZXR0ZXJCb3gubW92ZVR3ZWVuVXBkYXRlID0gbW92ZVVwZGF0ZUhhbmRsZXI7Ly/lm6DkuLrmnIDlkI7kvJrnu5lsZXR0ZXLlgZpUd2Vlbi5jbGVhckFsbCgpOyDmiYDku6XpnIDopoHpooTnlZnlj6Xmn4TlgZrmnIDlkI7muIXpmaTovajpgZPnl5Xov7nlm57osINcclxuXHJcbiAgICAgICAgbGV0dGVyQm94LmFscGhhVHdlZW4gPSBUd2Vlbi50byhsZXR0ZXJCb3gsIHthbHBoYTogMX0sIGxldHRlckJveC53b3JkT2JqLnRpbWUgKiAwLjIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldHRlckJveC5vbignVUlMZXR0ZXJCb3hfUmVtb3ZlX0V2ZW50JywgdGhpcywgdGhpcy5yZW1vdmVMZXR0ZXIpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZW1vdmVMZXR0ZXIgPSBmdW5jdGlvbiAobGV0dGVyKSB7XHJcbiAgICAgICAgdmFyIGxldHRlckJveCA9IHRoaXMuc2NyZWVuTGV0dGVyQm94QXJyLnNwbGljZSh0aGlzLnNjcmVlbkxldHRlckJveEFyci5pbmRleE9mKGxldHRlciksIDEpWzBdO1xyXG4gICAgICAgIC8vIGxldHRlckJveC5kZXN0cm95TWUoKTtcclxuICAgICAgICBsZXR0ZXJCb3gucmVtb3ZlU2VsZigpO1xyXG4gICAgICAgIGxldHRlckJveC5kZXN0cm95KHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2tEb3duID0gZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgdmFyIGxldHRlcjtcclxuICAgICAgICBsZXQgaXNDb2xsaXNpb24gPSBmYWxzZTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2NyZWVuTGV0dGVyQm94QXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldHRlciA9IHRoaXMuc2NyZWVuTGV0dGVyQm94QXJyW2ldO1xyXG4gICAgICAgICAgICBpZiAobGV0dGVyLmlzT3ZlciA9PSBmYWxzZSAmJiBsZXR0ZXIuZ3VpZGFvID09IGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobGV0dGVyLnkgPCA0ODApIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobGV0dGVyLnkgPj0gNDgwICYmIGxldHRlci55IDwgNjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYobGV0dGVyLndvcmRPYmoubGV0dGVyID09ICcyJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25LZXlEb3duTGV0dGVyKGxldHRlciwgdHJ1ZSwgLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25LZXlEb3duTGV0dGVyKGxldHRlciwgdHJ1ZSwgMjApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uS2V5RG93bkxldHRlciA9IGZ1bmN0aW9uIChsZXR0ZXIsIGlzUGlwZWksIHNjb3JlKSB7XHJcbiAgICAgICAgaWYgKGlzUGlwZWkpIHtcclxuICAgICAgICAgICAgaWYoc2NvcmUgPT0gLTEpe1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy50eXBlTFZMID09ICd0eXBlMScpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpcENvbnRhaW5lci5iYW5kc2hpcChsZXR0ZXIuZ3VpZGFvKTtcclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy50eXBlTFZMID09ICd0eXBlMScpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpcENvbnRhaW5lci5va3NoaXAobGV0dGVyLmd1aWRhbyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy50aXBzTWFuYWdlci5zaG93UGxheVRpcChzY29yZSk7XHJcbiAgICAgICAgICAgIGxldHRlci5waXBlaShzY29yZSk7XHJcbiAgICAgICAgICAgIGxldHRlci5tb3ZlVHdlZW5VcGRhdGUucnVuKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYobGV0dGVyLndvcmRPYmoubGV0dGVyICE9ICcyJyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpcHNNYW5hZ2VyLnNob3dQbGF5VGlwKDApO1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLmJ1cGlwZWkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHBvc3QoZXZlbnQpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IGV2ZW50LmRhdGE7XHJcbiAgICAgICAgaWYoZGF0YS5kYXRhIT11bmRlZmluZWQgJiYgZGF0YS5kYXRhLmxlbmd0aD4wKXtcclxuICAgICAgICAgICAgZGF0YSA9IGV2ZW50LmRhdGE7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGRhdGEgPSB7IFwibmFtZVwiOiBcImNhc3RRdWVzdGlvbnNcIiwgXCJkYXRhXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtxdWVzdGlvbklkOiAyMTAxLFxyXG4gICAgICAgICAgICB0aXRsZTogXCLot5/pmo/oioLlpY9cIixcclxuICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgIGV4cGxhaW5BdWRpb1VybDogXCJodHRwczovL211c2VzLW9ubGluZS5mYmNvbnRlbnQuY24vbXVzZXMtbGVzc29uL211c2ljL2F1ZGlvLyVFNiVCOCVCOCVFNiU4OCU4RiVFOSU5RiVCMyVFOSVBMiU5MS8lRTglOEElQjElRTYlQTAlOTclRTklQkMlQTAlRTYlQjglQjglRTYlODglOEYlRTklOUYlQjMlRTklQTIlOTEvJUU4JThBJUIxJUU2JUEwJTk3JUU5JUJDJUEwJUU2JUI4JUI4JUU2JTg4JThGMiVFOCVBNyVBMyVFOCVBRiVCNC5tcDNcIixcclxuICAgICAgICAgICAgICBtdXNpY1VybDogXCJodHRwczovL211c2VzLW9ubGluZS5mYmNvbnRlbnQuY24vbXVzZXMtbGVzc29uL211c2ljL2F1ZGlvLyVFNiVCOCVCOCVFNiU4OCU4RiVFOSU5RiVCMyVFOSVBMiU5MS8lRTglOEElQjElRTYlQTAlOTclRTklQkMlQTAlRTYlQjglQjglRTYlODglOEYlRTklOUYlQjMlRTklQTIlOTEvJUU4JThBJUIxJUU2JUEwJTk3JUU5JUJDJUEwJUU1JTg4JTlEJUU3JUJBJUE3JUU5JTlGJUIzJUU5JUEyJTkxLm1wM1wiLFxyXG4gICAgICAgICAgICAgIG11c2ljRHVyYXRpb246IDUzMjkzMCxcclxuICAgICAgICAgICAgICBza2luVHlwZTogMSxcclxuICAgICAgICAgICAgICBvYmplY3RzOiBbXHJcbiAgICAgICAgICAgICAgICB7IHNpemU6IDEsIHN0YXJ0VGltZTogNjUwMCwgZW5kVGltZTogNzUwMCwgb2JzdGFjbGU6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICB7IHNpemU6IDEsIHN0YXJ0VGltZTogNzUwMCwgZW5kVGltZTogODUwMCwgb2JzdGFjbGU6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICB7IHNpemU6IDEsIHN0YXJ0VGltZTogODYwMCwgZW5kVGltZTogOTYwMCwgb2JzdGFjbGU6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICB7IHNpemU6IDEsIHN0YXJ0VGltZTogOTYwMCwgZW5kVGltZTogMTA2MDAsIG9ic3RhY2xlOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgeyBzaXplOiAxLCBzdGFydFRpbWU6IDEwNzAwLCBlbmRUaW1lOiAxMTcwMCwgb2JzdGFjbGU6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICB7IHNpemU6IDEsIHN0YXJ0VGltZTogMTE4MDAsIGVuZFRpbWU6IDEyODAwLCBvYnN0YWNsZTogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIHsgc2l6ZTogMSwgc3RhcnRUaW1lOiAxMjkwMCwgZW5kVGltZTogMTM5MDAsIG9ic3RhY2xlOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgeyBzaXplOiAxLCBzdGFydFRpbWU6IDE0MDAwLCBlbmRUaW1lOiAxNTAwMCwgb2JzdGFjbGU6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICB7IHNpemU6IDEsIHN0YXJ0VGltZTogMTUxMDAsIGVuZFRpbWU6IDE2MTAwLCBvYnN0YWNsZTogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIHsgc2l6ZTogMSwgc3RhcnRUaW1lOiAxNjIwMCwgZW5kVGltZTogMTcyMDAsIG9ic3RhY2xlOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgeyBzaXplOiAxLCBzdGFydFRpbWU6IDE3MjAwLCBlbmRUaW1lOiAxODIwMCwgb2JzdGFjbGU6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICB7IHNpemU6IDEsIHN0YXJ0VGltZTogMTgzMDAsIGVuZFRpbWU6IDE5MzAwLCBvYnN0YWNsZTogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIHsgc2l6ZTogMSwgc3RhcnRUaW1lOiAxOTQwMCwgZW5kVGltZTogMjA0MDAsIG9ic3RhY2xlOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgeyBzaXplOiAxLCBzdGFydFRpbWU6IDIwNDAwLCBlbmRUaW1lOiAyMTQwMCwgb2JzdGFjbGU6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICB7IHNpemU6IDEsIHN0YXJ0VGltZTogMjE1MDAsIGVuZFRpbWU6IDIyNTAwLCBvYnN0YWNsZTogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIHsgc2l6ZTogMSwgc3RhcnRUaW1lOiAyMjUwMCwgZW5kVGltZTogMjM1MDAsIG9ic3RhY2xlOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgeyBzaXplOiAxLCBzdGFydFRpbWU6IDIzNjAwLCBlbmRUaW1lOiAyNDYwMCwgb2JzdGFjbGU6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICB7IHNpemU6IDEsIHN0YXJ0VGltZTogMjQ3MDAsIGVuZFRpbWU6IDI1NzAwLCBvYnN0YWNsZTogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIHsgc2l6ZTogMSwgc3RhcnRUaW1lOiAyNTcwMCwgZW5kVGltZTogMjY3MDAsIG9ic3RhY2xlOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgeyBzaXplOiAxLCBzdGFydFRpbWU6IDI2ODAwLCBlbmRUaW1lOiAyNzgwMCwgb2JzdGFjbGU6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICB7IHNpemU6IDEsIHN0YXJ0VGltZTogMjc4MDAsIGVuZFRpbWU6IDI4ODAwLCBvYnN0YWNsZTogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIHsgc2l6ZTogMSwgc3RhcnRUaW1lOiAyODgwMCwgZW5kVGltZTogMjk4MDAsIG9ic3RhY2xlOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgeyBzaXplOiAxLCBzdGFydFRpbWU6IDI5OTAwLCBlbmRUaW1lOiAzMDkwMCwgb2JzdGFjbGU6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICB7IHNpemU6IDEsIHN0YXJ0VGltZTogMzEwMDAsIGVuZFRpbWU6IDMyMDAwLCBvYnN0YWNsZTogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIHsgc2l6ZTogMSwgc3RhcnRUaW1lOiAzMjEwMCwgZW5kVGltZTogMzMxMDAsIG9ic3RhY2xlOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgeyBzaXplOiAxLCBzdGFydFRpbWU6IDMzMTAwLCBlbmRUaW1lOiAzNDEwMCwgb2JzdGFjbGU6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICB7IHNpemU6IDEsIHN0YXJ0VGltZTogMzQyMDAsIGVuZFRpbWU6IDM1MjAwLCBvYnN0YWNsZTogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIHsgc2l6ZTogMSwgc3RhcnRUaW1lOiAzNTMwMCwgZW5kVGltZTogMzYzMDAsIG9ic3RhY2xlOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgeyBzaXplOiAxLCBzdGFydFRpbWU6IDM2NDAwLCBlbmRUaW1lOiAzNzQwMCwgb2JzdGFjbGU6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICB7IHNpemU6IDEsIHN0YXJ0VGltZTogMzc1MDAsIGVuZFRpbWU6IDM4NTAwLCBvYnN0YWNsZTogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIHsgc2l6ZTogMSwgc3RhcnRUaW1lOiAzODYwMCwgZW5kVGltZTogMzk2MDAsIG9ic3RhY2xlOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgeyBzaXplOiAxLCBzdGFydFRpbWU6IDM5NjAwLCBlbmRUaW1lOiA0MDYwMCwgb2JzdGFjbGU6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICB7IHNpemU6IDEsIHN0YXJ0VGltZTogNDA4MDAsIGVuZFRpbWU6IDQxODAwLCBvYnN0YWNsZTogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIHsgc2l6ZTogMSwgc3RhcnRUaW1lOiA0MTgwMCwgZW5kVGltZTogNDI4MDAsIG9ic3RhY2xlOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgeyBzaXplOiAxLCBzdGFydFRpbWU6IDQyOTAwLCBlbmRUaW1lOiA0MzkwMCwgb2JzdGFjbGU6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICB7IHNpemU6IDEsIHN0YXJ0VGltZTogNDQwMDAsIGVuZFRpbWU6IDQ1MDAwLCBvYnN0YWNsZTogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIHsgc2l6ZTogMSwgc3RhcnRUaW1lOiA0NTEwMCwgZW5kVGltZTogNDYxMDAsIG9ic3RhY2xlOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgeyBzaXplOiAxLCBzdGFydFRpbWU6IDQ2MTAwLCBlbmRUaW1lOiA0NzEwMCwgb2JzdGFjbGU6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICB7IHNpemU6IDEsIHN0YXJ0VGltZTogNDcxMDAsIGVuZFRpbWU6IDQ4MTAwLCBvYnN0YWNsZTogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIHsgc2l6ZTogMSwgc3RhcnRUaW1lOiAxMzIwMCwgZW5kVGltZTogMTQyMDAsIG9ic3RhY2xlOiB0cnVlIH0sXHJcbiAgICAgICAgICAgICAgICB7IHNpemU6IDEsIHN0YXJ0VGltZTogMjQwMDAsIGVuZFRpbWU6IDI1MDAwLCBvYnN0YWNsZTogdHJ1ZSB9LFxyXG4gICAgICAgICAgICAgICAgeyBzaXplOiAxLCBzdGFydFRpbWU6IDMwMDAwLCBlbmRUaW1lOiAzMTAwMCwgb2JzdGFjbGU6IHRydWUgfSxcclxuICAgICAgICAgICAgICAgIHsgc2l6ZTogMSwgc3RhcnRUaW1lOiAzODkwMCwgZW5kVGltZTogMzk5MDAsIG9ic3RhY2xlOiB0cnVlIH0sXHJcbiAgICAgICAgICAgICAgICB7IHNpemU6IDEsIHN0YXJ0VGltZTogNDMwMDAsIGVuZFRpbWU6IDQ0MDAwLCBvYnN0YWNsZTogdHJ1ZSB9XHJcbiAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICB0eXBlOiAxMDcxMDJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdHlwZTogMTA3MTAyXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0gXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnR5cGVMVkwgPSAndHlwZScrZGF0YS5kYXRhWzBdLnBheWxvYWQuc2tpblR5cGU7XHJcbiAgICAgICAgbGV0IGNoYW5nZSxkYXRhcyA9IGRhdGEuZGF0YVswXS5wYXlsb2FkLm9iamVjdHM7XHJcbiAgICAgICAgZm9yKGxldCBpPWRhdGFzLmxlbmd0aC0xO2k+PTA7aS0tKXtcclxuICAgICAgICAgICAgZm9yKGxldCBqPTA7ajxpO2orKyl7XHJcbiAgICAgICAgICAgICAgICBpZihkYXRhc1tqKzFdLnN0YXJ0VGltZTxkYXRhc1tqXS5zdGFydFRpbWUpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZT1kYXRhc1tqKzFdO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFzW2orMV09ZGF0YXNbal07XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YXNbal09Y2hhbmdlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIF90aGlzLmRhdGEgPSBkYXRhLmRhdGFbMF0ucGF5bG9hZDtcclxuICAgICAgICBsZXQgbGlzdCA9IGRhdGFzO1xyXG4gICAgICAgIHRoaXMubGV0dGVyViA9IGxpc3RbMF0uZW5kVGltZSAtIGxpc3RbMF0uc3RhcnRUaW1lO1xyXG4gICAgICAgIGxldCBCZWF0cyA9IFt7IHRpbWU6IGxpc3RbMF0uc3RhcnRUaW1lLCB0aGluZzogbGlzdFswXS5vYnN0YWNsZT8nMic6JzEnIH1dO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7aSA8IGxpc3QubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGlmKGxpc3RbaSsxXSl7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGltZSA9IGxpc3RbaSsxXS5zdGFydFRpbWUgLSBsaXN0W2ldLnN0YXJ0VGltZTtcclxuICAgICAgICAgICAgICAgIEJlYXRzLnB1c2goeyB0aW1lOiB0aW1lLCB0aGluZzogbGlzdFtpKzFdLm9ic3RhY2xlPycyJzonMScgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBCZWF0czAgPSBCZWF0cztcclxuICAgIH1cclxufVxyXG4vL+a/gOa0u+WQr+WKqOexu1xyXG5uZXcgTWFpbigpO1xyXG4iLCJ2YXIgYmd4ID0gMDtcbmV4cG9ydCBjb25zdCBmb3VyUm9hZFBvc2l0aW9uID0gW1xuICAgIHtcbiAgICAgICAgc3RhcnQ6IHtcbiAgICAgICAgICAgIHg6IC0xNTAsXG4gICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgc2NhbGVYOiAyLFxuICAgICAgICAgICAgc2NhbGVZOiAyLFxuICAgICAgICB9LFxuICAgICAgICBlbmQ6IHtcbiAgICAgICAgICAgIHg6IC0zMjAsXG4gICAgICAgICAgICB5OiA2NDAsXG4gICAgICAgICAgICBzY2FsZVg6IDIsXG4gICAgICAgICAgICBzY2FsZVk6IDIsXG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIHN0YXJ0OiB7XG4gICAgICAgICAgICB4OiAtNTAsXG4gICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgc2NhbGVYOiAyLFxuICAgICAgICAgICAgc2NhbGVZOiAyLFxuICAgICAgICB9LFxuICAgICAgICBlbmQ6IHtcbiAgICAgICAgICAgIHg6IC0xMTAsXG4gICAgICAgICAgICB5OiA2NDAsXG4gICAgICAgICAgICBzY2FsZVg6IDIsXG4gICAgICAgICAgICBzY2FsZVk6IDIsXG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIHN0YXJ0OiB7XG4gICAgICAgICAgICB4OiA1MCxcbiAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICBzY2FsZVg6IDIsXG4gICAgICAgICAgICBzY2FsZVk6IDIsXG4gICAgICAgIH0sXG4gICAgICAgIGVuZDoge1xuICAgICAgICAgICAgeDogOTAsXG4gICAgICAgICAgICB5OiA2NDAsXG4gICAgICAgICAgICBzY2FsZVg6IDIsXG4gICAgICAgICAgICBzY2FsZVk6IDIsXG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIHN0YXJ0OiB7XG4gICAgICAgICAgICB4OiAxNTAsXG4gICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgc2NhbGVYOiAyLFxuICAgICAgICAgICAgc2NhbGVZOiAyLFxuICAgICAgICB9LFxuICAgICAgICBlbmQ6IHtcbiAgICAgICAgICAgIHg6IDMwMCxcbiAgICAgICAgICAgIHk6IDY0MCxcbiAgICAgICAgICAgIHNjYWxlWDogMixcbiAgICAgICAgICAgIHNjYWxlWTogMlxuICAgICAgICB9XG4gICAgfVxuXTtcbmV4cG9ydCBjb25zdCBCZWF0czAgPSBbXG4gICAgeyB0aW1lOiAyMTU2LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDIxMzMsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMjI0NiwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAyMTI3LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDIwOTksIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMjE3MSwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAyMTE4LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDIwODcsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMjE4MCwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAyMDM5LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDIxMTUsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMjE1OCwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAyMTczLCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDIxNzQsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMjE3MSwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAyMTQ1LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDIyMDYsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMjEyNSwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAyMTI0LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDIxMzgsIHRoaW5nOiBcIjFcIiB9LFxuXVxuZXhwb3J0IGNvbnN0IEJlYXRzMSA9IFtcbiAgICB7IHRpbWU6IDExODksIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogOTQ4LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDExMTcsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMTA2MSwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAxMTA5LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDExMDEsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMTA0MiwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAxMDc2LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDEwNjEsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMTEwMywgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAxMDM1LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDEwOTksIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMTAyNCwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAxMDYxLCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDEwNDAsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMTA1OSwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAxMDkwLCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDEwNzQsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMTA2MSwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAxMDQwLCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDk5MSwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAxMTQ3LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDEwMjUsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMTA3NywgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAxMDEzLCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDEyMDAsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMTA5NCwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAxMDc4LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDEwNzcsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMTAzOCwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAxMTE5LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDEwMzUsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMTE4NSwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAxMTA5LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDEwMDMsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMTAyNSwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAxMDY1LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDExMzksIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogOTk4LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDExMjIsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMTA1NiwgdGhpbmc6IFwiMVwiIH0sXG5dXG5leHBvcnQgY29uc3QgQmVhdHMyID0gW1xuICAgIHsgdGltZTogMTA5NSwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAxMTAyLCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDExMzAsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMTAxNCwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAxMTE5LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDEwODAsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogMTA1OCwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiAxMDY4LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDM2MiwgdGhpbmc6IFwiMlwiIH0sXG4gICAgeyB0aW1lOiAyNjIsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNTIwLCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDUyMCwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA1NTcsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNTQzLCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDUxNywgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA1MjQsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNTI1LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDU0MCwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA1MzAsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNTAyLCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDUzNCwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA1MjIsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNTU3LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDU2MywgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA1MzQsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNTMxLCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDM2MiwgdGhpbmc6IFwiMlwiIH0sXG4gICAgeyB0aW1lOiAyMzIsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNTIwLCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDU5MiwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA1MTYsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNDY2LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDUzMiwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA0OTEsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNTI4LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDUwMCwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA1MjUsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNTEwLCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDU3NiwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA1NDgsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNTIzLCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDU0NSwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA1NjksIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNDkzLCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDU3NywgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA1MTgsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNjA0LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDQ4NSwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA1NzksIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNTE1LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDM2MiwgdGhpbmc6IFwiMlwiIH0sXG4gICAgeyB0aW1lOiAyNTAsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNTM3LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDU0NywgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA0ODAsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNjAxLCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDUyMSwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA1ODQsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNTI3LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDQ5OSwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA1NjksIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNTUxLCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDU2NiwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA1NTcsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNTI3LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDM2MiwgdGhpbmc6IFwiMlwiIH0sXG4gICAgeyB0aW1lOiAxODEsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNTYxLCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDQ5OCwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA1MjksIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNTcxLCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDQ5NSwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA1NTgsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNTU3LCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDM2MiwgdGhpbmc6IFwiMlwiIH0sXG4gICAgeyB0aW1lOiAyNDYsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNDczLCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDUyMiwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA1MzQsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNTcyLCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDU0MSwgdGhpbmc6IFwiMVwiIH0sXG4gICAgeyB0aW1lOiA1ODAsIHRoaW5nOiBcIjFcIiB9LFxuICAgIHsgdGltZTogNDkwLCB0aGluZzogXCIxXCIgfSxcbiAgICB7IHRpbWU6IDU1NSwgdGhpbmc6IFwiMVwiIH1cbl0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBiZyBleHRlbmRzIExheWEuU3ByaXRlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLmluaXRCZygpXG4gICAgfVxuICAgIFxuICAgIGluaXRCZygpOnZvaWQge1xuICAgICAgICBcbiAgICAgICAgdmFyIGJnQ29udGFpbmVyID0gbmV3IExheWEuQW5pbWF0aW9uKCk7XG4gICAgICAgIGJnQ29udGFpbmVyLmxvYWRBbmltYXRpb24oXCJhbmkvYmcuYW5pXCIpO1xuICAgICAgICBiZ0NvbnRhaW5lci53aWR0aCA9IDEwMDg7XG4gICAgICAgIGJnQ29udGFpbmVyLmhlaWdodCA9IDY0MDtcbiAgICAgICAgYmdDb250YWluZXIucGl2b3QoMCwwKVxuICAgICAgICBiZ0NvbnRhaW5lci5wb3MoNTA0LExheWEuc3RhZ2UuaGVpZ2h0LzIpO1xuICAgICAgICBiZ0NvbnRhaW5lci5wbGF5KDEsdHJ1ZSk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQoYmdDb250YWluZXIpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgfSwgNTApO1xuICAgIH1cbn0iLCJpbXBvcnQgRXZlbnQgPSBMYXlhLkV2ZW50O1xuaW1wb3J0IFNwcml0ZSA9IExheWEuU3ByaXRlO1xuaW1wb3J0IEFuaW1hdGlvbiA9IExheWEuQW5pbWF0aW9uO1xuaW1wb3J0IFRleHQgPSBMYXlhLlRleHQ7XG5pbXBvcnQgVHdlZW4gPSBMYXlhLlR3ZWVuO1xuXG4vLyBpbXBvcnQgaHR0cCBmcm9tIFwiLi9odHRwXCI7XG52YXIgbGV2ZWwgPSAnMCc7XG52YXIgdGhhdCxMb2FkaW5nRGlhbG9nO1xudmFyIGNlbnRlcnMsZW5kc2hvdztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGVuZCBleHRlbmRzIExheWEuU3ByaXRlIHtcbiAgICBwcml2YXRlIGVuZENvbnRhaW5lcjtcbiAgICBwcml2YXRlIGltZ0NvbnRhaW5lcjtcbiAgICBwcml2YXRlIGVuZHNob3dcbiAgICBwcml2YXRlIGJ1dHRvbkFnYWluO1xuICAgIHByaXZhdGUgYnV0dG9uTmV4dDtcblxuICAgIGNvbnN0cnVjdG9yKHRoYXRzLExvYWRpbmdEaWFsb2cpe1xuICAgICAgICB0aGF0ID0gdGhhdHM7XG4gICAgICAgIExvYWRpbmdEaWFsb2cgPSBMb2FkaW5nRGlhbG9nO1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBsZXZlbCA9IHRoYXQudHlwZUxWTDtcbiAgICAgICAgLy8gbGV2ZWwgPSBsYXlhLm5ldC5Mb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndHlwZUxWTCcpfHwndHlwZTEnO1xuICAgICAgICB0aGlzLmluaXRFbmQoKTtcbiAgICB9XG5cbiAgICBpbml0RW5kICgpIHtcbiAgICAgICAgdGhpcy5lbmRDb250YWluZXIgPSBuZXcgU3ByaXRlKCk7XG4gICAgICAgIExheWEuU291bmRNYW5hZ2VyLnBsYXlNdXNpYyhcInNvdW5kL2VuZC5tcDNcIiwgMSk7XG4gICAgICAgIHZhciBiZ0NvbiA9IG5ldyBTcHJpdGUoKTtcbiAgICAgICAgYmdDb24uZ3JhcGhpY3MuZHJhd1JlY3QoMCwgMCwgMTM4MCwgNjQwLCAnIzAwMCcpO1xuICAgICAgICBiZ0Nvbi5hbHBoYSA9IDAuODtcbiAgICAgICAgdGhpcy5lbmRDb250YWluZXIuYWRkQ2hpbGQoYmdDb24pO1xuICAgICAgICBjZW50ZXJzID0gbmV3IFNwcml0ZSgpO1xuICAgICAgICBjZW50ZXJzLndpZHRoID0gMTAwODtcbiAgICAgICAgY2VudGVycy5oZWlnaHQgPSA2NDA7XG4gICAgICAgIGNlbnRlcnMucGl2b3QoNTA0LDApO1xuICAgICAgICBjZW50ZXJzLnBvcyg1MDQsMCk7XG4gICAgICAgIHRoaXMuZW5kQ29udGFpbmVyLmFkZENoaWxkKGNlbnRlcnMpO1xuICAgICAgICAvLyB0aGlzLmltZ0NvbnRhaW5lciA9IG5ldyBTcHJpdGUoKTtcbiAgICAgICAgLy8gdGhpcy5pbWdDb250YWluZXIubG9hZEltYWdlKFwicmVzL2ltZ3Mvc2cucG5nXCIpO1xuICAgICAgICAvLyB0aGlzLmltZ0NvbnRhaW5lci53aWR0aCA9IDk1MztcbiAgICAgICAgLy8gdGhpcy5pbWdDb250YWluZXIuaGVpZ2h0ID0gNTUwO1xuICAgICAgICAvLyB0aGlzLmltZ0NvbnRhaW5lci5waXZvdCg0NzYuNSw1MCk7XG4gICAgICAgIC8vIHRoaXMuaW1nQ29udGFpbmVyLnBvcyg1MDQsMjApO1xuICAgICAgICAvLyBjZW50ZXJzLmFkZENoaWxkKHRoaXMuaW1nQ29udGFpbmVyKTtcblxuICAgICAgICAvLyB2YXIgZW5kID0gbmV3IFNwcml0ZSgpO1xuICAgICAgICAvLyBlbmQubG9hZEltYWdlKFwicmVzL2ltZ3MvZW5kLnBuZ1wiKTtcbiAgICAgICAgLy8gZW5kLndpZHRoID0gNDMzO1xuICAgICAgICAvLyBlbmQuaGVpZ2h0ID0gMTIwO1xuICAgICAgICAvLyBlbmQucGl2b3QoMjE2LjUsMCk7XG4gICAgICAgIC8vIGVuZC5wb3MoNTA0LDMwMCk7XG4gICAgICAgIC8vIGNlbnRlcnMuYWRkQ2hpbGQoZW5kKTtcbiAgICAgICAgLy8gZW5kVHh0ID0gbmV3IFRleHQoKTtcbiAgICAgICAgLy8gZW5kVHh0LmZvbnRTaXplID0gNDA7XG4gICAgICAgIC8vIGVuZFR4dC53aWR0aCA9IDQzMztcbiAgICAgICAgLy8gZW5kVHh0LnkgPSAzMDtcbiAgICAgICAgLy8gZW5kVHh0LmFsaWduID0gXCJjZW50ZXJcIlxuICAgICAgICAvLyBlbmRUeHQuY29sb3IgPSAnI0ZGRkZGRic7XG4gICAgICAgIC8vIGVuZFR4dC5ib2xkID0gdHJ1ZTtcbiAgICAgICAgLy8gZW5kVHh0LnRleHQgPSAn57un57ut5Yqq5YqbISdcbiAgICAgICAgLy8gZW5kLmFkZENoaWxkKGVuZFR4dCk7XG5cbiAgICAgICAgdGhpcy5lbmRDb250YWluZXIudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuZW5kQ29udGFpbmVyKTtcbiAgICB9XG5cbiAgICBzaG93RW5kUGFuZWwgKHNjb3JlT2JqLCBsZXR0ZXJUb3RhbCkge1xuICAgICAgICAvL+aOpeWPo1xuICAgICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgICAgIHNjb3JlIDogc2NvcmVPYmoudG90YWxTY29yZVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgICAgIG5hbWU6J2ZpbmlzaEdhbWUnLFxuICAgICAgICAgICAgZGF0YTp7XG4gICAgICAgICAgICAgICAgc2NvcmU6c2NvcmVPYmoudG90YWxTY29yZSwgLy8g5b6X5YiGXG4gICAgICAgICAgICAgICAgcGVyZmVjdDpzY29yZU9iai5wZXJmZWN0LCAvLyBwZXJmZWN0IOS4quaVsFxuICAgICAgICAgICAgICAgIC8vIGdyZWF0OnNjb3JlT2JqLmdyZWF0LCAvLyBncmVhdCDkuKrmlbBcbiAgICAgICAgICAgICAgICAvLyByaWdodDpzY29yZU9iai5yaWdodCwgLy8gcmlnaHQg5Liq5pWwXG4gICAgICAgICAgICAgICAgbWlzczpzY29yZU9iai5taXNzLCAvLyBtaXNzIOS4quaVsFxuICAgICAgICAgICAgICAgIGJhZDpzY29yZU9iai5iYWQsIC8vIGJhZCDkuKrmlbBcbiAgICAgICAgICAgICAgICBvYnN0YWNsZTpzY29yZU9iai5vYnN0YWNsZSwgLy8g54K55Ye76Zqc56KN54mp5Liq5pWwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKG9iaiwnKicpO1xuICAgICAgICAvLyB3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKEpTT04uc3RyaW5naWZ5KG9iaiksJyonKTtcbiAgICAgICAgLy8gdmFyIGh0dHAgPSBuZXcgaHR0cDtcbiAgICAgICAgLy8gaHR0cC5wb3N0KCd1c2VySW5mbycsZGF0YSk7ICAgIFxuICAgICAgICB2YXIgc3RhcnQgPSBzY29yZU9iai50b3RhbFNjb3JlID4gMzA/c2NvcmVPYmoudG90YWxTY29yZSA+IDY1P3Njb3JlT2JqLnRvdGFsU2NvcmUgPiA5NT9cImFuaS9lbmQzLmFuaVwiOlwiYW5pL2VuZDIuYW5pXCI6XCJhbmkvZW5kMS5hbmlcIjpcImFuaS9lbmQwLmFuaVwiO1xuICAgICAgICB0aGlzLmVuZHNob3cgPSBuZXcgQW5pbWF0aW9uKCk7XG4gICAgICAgIHRoaXMuZW5kc2hvdy53aWR0aCA9IDEwMDg7XG4gICAgICAgIHRoaXMuZW5kc2hvdy5oZWlnaHQgPSA2NDA7XG4gICAgICAgIHRoaXMuZW5kc2hvdy5waXZvdCg1MDQsIDApOyBcbiAgICAgICAgdGhpcy5lbmRzaG93LnBvcyg4MDAsIC01MCk7XG4gICAgICAgIHRoaXMuZW5kc2hvdy5wbGF5KDAsIGZhbHNlKTsgIFxuICAgICAgICB0aGlzLmVuZHNob3cubG9hZEFuaW1hdGlvbihzdGFydCk7XG4gICAgICAgIGNlbnRlcnMuYWRkQ2hpbGQodGhpcy5lbmRzaG93KTtcbiAgICAgICAgLy8gdmFyIHN0YXIxID0gbmV3IFNwcml0ZSgpO1xuICAgICAgICAvLyBzY29yZU9iai50b3RhbFNjb3JlID4gMzA/c3RhcjEubG9hZEltYWdlKFwicmVzL2ltZ3Mvc3Rhck9OLnBuZ1wiKTpzdGFyMS5sb2FkSW1hZ2UoXCJyZXMvaW1ncy9zdGFyT0ZGLnBuZ1wiKTtcbiAgICAgICAgLy8gc3RhcjEud2lkdGggPSAxMjA7XG4gICAgICAgIC8vIHN0YXIxLmhlaWdodCA9IDExODtcbiAgICAgICAgLy8gc3RhcjEucGl2b3QoNjAsMCk7XG4gICAgICAgIC8vIHN0YXIxLnBvcyg1MDQtMjAwLDEzMCk7XG4gICAgICAgIC8vIGNlbnRlcnMuYWRkQ2hpbGQoc3RhcjEpO1xuXG4gICAgICAgIC8vIHZhciBzdGFyMiA9IG5ldyBTcHJpdGUoKTtcbiAgICAgICAgLy8gc2NvcmVPYmoudG90YWxTY29yZSA+IDY1P3N0YXIyLmxvYWRJbWFnZShcInJlcy9pbWdzL3N0YXJPTi5wbmdcIik6c3RhcjIubG9hZEltYWdlKFwicmVzL2ltZ3Mvc3Rhck9GRi5wbmdcIik7ICAgICAgICBcbiAgICAgICAgLy8gc3RhcjIud2lkdGggPSAxMjA7XG4gICAgICAgIC8vIHN0YXIyLmhlaWdodCA9IDExODtcbiAgICAgICAgLy8gc3RhcjIucGl2b3QoNjAsMCk7XG4gICAgICAgIC8vIHN0YXIyLnBvcyg1MDQsODApO1xuICAgICAgICAvLyBjZW50ZXJzLmFkZENoaWxkKHN0YXIyKTtcblxuICAgICAgICAvLyB2YXIgc3RhcjMgPSBuZXcgU3ByaXRlKCk7XG4gICAgICAgIC8vIHNjb3JlT2JqLnRvdGFsU2NvcmUgPiA5NT9zdGFyMy5sb2FkSW1hZ2UoXCJyZXMvaW1ncy9zdGFyT04ucG5nXCIpOnN0YXIzLmxvYWRJbWFnZShcInJlcy9pbWdzL3N0YXJPRkYucG5nXCIpOyAgICAgICAgXG4gICAgICAgIC8vIHN0YXIzLndpZHRoID0gMTIwO1xuICAgICAgICAvLyBzdGFyMy5oZWlnaHQgPSAxMTg7XG4gICAgICAgIC8vIHN0YXIzLnBpdm90KDYwLDApO1xuICAgICAgICAvLyBzdGFyMy5wb3MoNTA0KzIwMCwxMzApO1xuICAgICAgICAvLyBjZW50ZXJzLmFkZENoaWxkKHN0YXIzKTtcblxuICAgICAgICB0aGlzLmJ1dHRvbkFnYWluID0gbmV3IFNwcml0ZSgpO1xuICAgICAgICB0aGlzLmJ1dHRvbkFnYWluLmxvYWRJbWFnZShcInJlcy9pbWdzL2J1dHRvbkFnYWluLnBuZ1wiKTtcbiAgICAgICAgdGhpcy5idXR0b25BZ2Fpbi53aWR0aCA9IDI0MDtcbiAgICAgICAgdGhpcy5idXR0b25BZ2Fpbi5oZWlnaHQgPSA5MDtcbiAgICAgICAgdGhpcy5idXR0b25BZ2Fpbi5waXZvdCgxMjAsMCk7XG4gICAgICAgIHRoaXMuYnV0dG9uQWdhaW4ucG9zKDY5MC0xNzAsNDYwKTtcbiAgICAgICAgdGhpcy5idXR0b25BZ2Fpbi5zY2FsZVggPSAwO1xuICAgICAgICB0aGlzLmJ1dHRvbkFnYWluLm1vdXNlRW5hYmxlZCA9IHRydWU7XG4gICAgICAgIC8vIHRoaXMuYnV0dG9uQWdhaW4ub24oRXZlbnQuTU9VU0VfT1ZFUiwgdGhpcywgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyAgICAgdGhpcy5idXR0b25BZ2Fpbi5ncmFwaGljcy5jbGVhcigpO1xuICAgICAgICAvLyB9KTtcbiAgICAgICAgLy8gdGhpcy5idXR0b25BZ2Fpbi5vbihFdmVudC5NT1VTRV9PVVQsIHRoaXMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gICAgIHRoaXMuYnV0dG9uQWdhaW4uZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgLy8gfSk7XG4gICAgICAgIHRoaXMuYnV0dG9uQWdhaW4ub24oRXZlbnQuQ0xJQ0ssIHRoaXMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2Uoe25hbWU6J2VuZFJlc3RhcnRHYW1lJyxkYXRhOnt9fSwnKicpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b25BZ2Fpbi5vZmYoRXZlbnQuQ0xJQ0ssIHRoaXMsIGZ1bmN0aW9uICgpIHt9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbk5leHQub2ZmKEV2ZW50LkNMSUNLLCB0aGlzLCBmdW5jdGlvbiAoKSB7fSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgICAgTGF5YS50aW1lci5jbGVhckFsbCh0aGF0KTtcbiAgICAgICAgICAgIHRoYXQuR2FtZU1hbmFnZXIoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNlbnRlcnMuYWRkQ2hpbGQodGhpcy5idXR0b25BZ2Fpbik7XG4gICAgICAgIC8vIHZhciBhZ2FpblR4dCA9IG5ldyBUZXh0KCk7XG4gICAgICAgIC8vIGFnYWluVHh0LmZvbnRTaXplID0gMjg7XG4gICAgICAgIC8vIGFnYWluVHh0LndpZHRoID0gMjQwO1xuICAgICAgICAvLyBhZ2FpblR4dC54ID0gLTE1O1xuICAgICAgICAvLyBhZ2FpblR4dC55ID0gMzA7XG4gICAgICAgIC8vIGFnYWluVHh0LmFsaWduID0gXCJjZW50ZXJcIlxuICAgICAgICAvLyBhZ2FpblR4dC5mb250ID0gJ0NoYXJjb2FsIENZJztcbiAgICAgICAgLy8gYWdhaW5UeHQuY29sb3IgPSAnIzAwMDAwMCc7XG4gICAgICAgIC8vIGFnYWluVHh0LmJvbGQgPSB0cnVlO1xuICAgICAgICAvLyBhZ2FpblR4dC50ZXh0ID0gJ+WGjeWtpuS4gOasoSdcbiAgICAgICAgLy8gdGhpcy5idXR0b25BZ2Fpbi5hZGRDaGlsZChhZ2FpblR4dCk7XG4gICAgICAgIFR3ZWVuLnRvKHRoaXMuYnV0dG9uQWdhaW4sIHtzY2FsZVg6IDF9LCAyMDApO1xuXG4gICAgICAgIHRoaXMuYnV0dG9uTmV4dCA9IG5ldyBTcHJpdGUoKTtcbiAgICAgICAgdGhpcy5idXR0b25OZXh0LmxvYWRJbWFnZShcInJlcy9pbWdzL2J1dHRvbk5leHQucG5nXCIpO1xuICAgICAgICB0aGlzLmJ1dHRvbk5leHQud2lkdGggPSAyNDA7XG4gICAgICAgIHRoaXMuYnV0dG9uTmV4dC5oZWlnaHQgPSA5MDtcbiAgICAgICAgdGhpcy5idXR0b25OZXh0LnBpdm90KDEyMCwwKTtcbiAgICAgICAgdGhpcy5idXR0b25OZXh0LnBvcyg2OTArMTcwLDQ2MCk7XG4gICAgICAgIHRoaXMuYnV0dG9uTmV4dC5zY2FsZVggPSAwO1xuICAgICAgICB0aGlzLmJ1dHRvbk5leHQubW91c2VFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgLy8gdGhpcy5idXR0b25OZXh0Lm9uKEV2ZW50Lk1PVVNFX09WRVIsIHRoaXMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gICAgIHRoaXMuYnV0dG9uTmV4dC5ncmFwaGljcy5jbGVhcigpO1xuICAgICAgICAvLyB9KTtcbiAgICAgICAgLy8gdGhpcy5idXR0b25OZXh0Lm9uKEV2ZW50Lk1PVVNFX09VVCwgdGhpcywgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyAgICAgdGhpcy5idXR0b25OZXh0LmdyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgIC8vIH0pO1xuICAgICAgICB0aGlzLmJ1dHRvbk5leHQub24oRXZlbnQuQ0xJQ0ssIHRoaXMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2Uoe25hbWU6J25leHRDaGFwdGVyJyxkYXRhOnt9fSwnKicpO1xuICAgICAgICAgICAgLy8gaWYobGV2ZWwgPT0gJ3R5cGUxJyl7XG4gICAgICAgICAgICAvLyAgICAgLy8gbGF5YS5uZXQuTG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3R5cGVMVkwnLCd0eXBlMicpXG4gICAgICAgICAgICAvLyAgICAgdGhhdC50eXBlTFZMID0gJ3R5cGUyJ1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gaWYobGV2ZWwgPT0gJ3R5cGUyJyl7XG4gICAgICAgICAgICAvLyAgICAgLy8gbGF5YS5uZXQuTG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3R5cGVMVkwnLCd0eXBlMycpXG4gICAgICAgICAgICAvLyAgICAgdGhhdC50eXBlTFZMID0gJ3R5cGUzJ1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gaWYobGV2ZWwgPT0gJ3R5cGUzJyl7XG4gICAgICAgICAgICAvLyAgICAgLy8gbGF5YS5uZXQuTG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3R5cGVMVkwnLCd0eXBlNCcpXG4gICAgICAgICAgICAvLyAgICAgdGhhdC50eXBlTFZMID0gJ3R5cGU0J1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gaWYobGV2ZWwgPT0gJ3R5cGU0Jyl7XG4gICAgICAgICAgICAvLyAgICAgLy8gbGF5YS5uZXQuTG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3R5cGVMVkwnLCd0eXBlMScpXG4gICAgICAgICAgICAvLyAgICAgdGhhdC50eXBlTFZMID0gJ3R5cGUxJ1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgTGF5YS5zdGFnZS5zY2FsZU1vZGUgPSAnc2hvd2FsbCc7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoYXQubG9hZGluZ0RpYWxvZy5wb3B1cCh0cnVlLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLmFscGhhID0gMDtcbiAgICAgICAgICAgIHRoYXQuR2FtZU1hbmFnZXIoKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uQWdhaW4ub2ZmKEV2ZW50LkNMSUNLLCB0aGlzLCBmdW5jdGlvbiAoKSB7fSk7XG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b25OZXh0Lm9mZihFdmVudC5DTElDSywgdGhpcywgZnVuY3Rpb24gKCkge30pO1xuICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNlbnRlcnMuYWRkQ2hpbGQodGhpcy5idXR0b25OZXh0KTtcbiAgICAgICAgLy8gdmFyIG5leHRUeHQgPSBuZXcgVGV4dCgpO1xuICAgICAgICAvLyBuZXh0VHh0LmZvbnRTaXplID0gMjg7XG4gICAgICAgIC8vIG5leHRUeHQueCA9IC0xNTtcbiAgICAgICAgLy8gbmV4dFR4dC55ID0gMzA7XG4gICAgICAgIC8vIG5leHRUeHQud2lkdGggPSAyNDA7XG4gICAgICAgIC8vIG5leHRUeHQuYWxpZ24gPSBcImNlbnRlclwiXG4gICAgICAgIC8vIG5leHRUeHQuZm9udCA9ICdDaGFyY29hbCBDWSc7XG4gICAgICAgIC8vIG5leHRUeHQuY29sb3IgPSAnIzAwMDAwMCc7XG4gICAgICAgIC8vIG5leHRUeHQuYm9sZCA9IHRydWU7XG4gICAgICAgIC8vIG5leHRUeHQudGV4dCA9ICfkuIvkuIDnq6DoioInXG4gICAgICAgIC8vIHRoaXMuYnV0dG9uTmV4dC5hZGRDaGlsZChuZXh0VHh0KTtcbiAgICAgICAgVHdlZW4udG8odGhpcy5idXR0b25OZXh0LCB7c2NhbGVYOiAxfSwgMjAwKTtcbiAgICAgICAgdGhpcy5lbmRDb250YWluZXIudmlzaWJsZSA9IHRydWU7XG4gICAgfVxufSIsImltcG9ydCBBbmltYXRpb24gPSBMYXlhLkFuaW1hdGlvbjtcbmltcG9ydCBTcHJpdGUgPSBMYXlhLlNwcml0ZTtcbmltcG9ydCBFdmVudCA9IExheWEuRXZlbnQ7XG5sZXQgc2hpcFcgPSAyMDAsdGhhdCxwYWRkaW5nID0gMDtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHNoaXAgZXh0ZW5kcyBMYXlhLlNwcml0ZSB7XG4gICAgcHJpdmF0ZSBzaGlwQmc7XG4gICAgLy8gcHJpdmF0ZSBzaGlwID0gW25ldyBBbmltYXRpb24oKSxuZXcgQW5pbWF0aW9uKCksbmV3IEFuaW1hdGlvbigpLG5ldyBBbmltYXRpb24oKV07XG4gICAgcHJpdmF0ZSBzaGlwID0gW107XG4gICAgcHJpdmF0ZSBzaGlwMTtcbiAgICBwcml2YXRlIHNoaXAyO1xuICAgIHByaXZhdGUgc2hpcDM7XG4gICAgcHJpdmF0ZSBzaGlwNDtcblxuXG4gICAgY29uc3RydWN0b3IodGhhdHMpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGF0ID0gdGhhdHNcbiAgICAgICAgdGhpcy5zaGlwID0gXG4gICAgICAgICAgICB0aGF0LnR5cGVMVkwgPT0gJ3R5cGUxJz9cbiAgICAgICAgICAgIFtuZXcgQW5pbWF0aW9uKCksbmV3IEFuaW1hdGlvbigpLG5ldyBBbmltYXRpb24oKSxuZXcgQW5pbWF0aW9uKCldOlxuICAgICAgICAgICAgW25ldyBTcHJpdGUoKSxuZXcgU3ByaXRlKCksbmV3IFNwcml0ZSgpLG5ldyBTcHJpdGUoKV07XG4gICAgICAgIHRoaXMuaW5pdCgpXG4gICAgfVxuXG4gICAgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgcGFkZGluZyA9IDUwNDtcbiAgICAgICAgdGhpcy5zaGlwMSA9IG5ldyBTcHJpdGUoKTtcbiAgICAgICAgdGhpcy5zaGlwMiA9IG5ldyBTcHJpdGUoKTtcbiAgICAgICAgdGhpcy5zaGlwMyA9IG5ldyBTcHJpdGUoKTtcbiAgICAgICAgdGhpcy5zaGlwNCA9IG5ldyBTcHJpdGUoKTtcbiAgICAgICAgdGhpcy5zaGlwMS5zaXplKDIwMCwgMjAwKTtcbiAgICAgICAgdGhpcy5zaGlwMi5zaXplKDIwMCwgMjAwKTtcbiAgICAgICAgdGhpcy5zaGlwMy5zaXplKDIwMCwgMjAwKTtcbiAgICAgICAgdGhpcy5zaGlwNC5zaXplKDIwMCwgMjAwKTtcbiAgICAgICAgdGhpcy5zaGlwMS5waXZvdCgxMDAsIDEwMCk7XG4gICAgICAgIHRoaXMuc2hpcDIucGl2b3QoMTAwLCAxMDApO1xuICAgICAgICB0aGlzLnNoaXAzLnBpdm90KDEwMCwgMTAwKTtcbiAgICAgICAgdGhpcy5zaGlwNC5waXZvdCgxMDAsIDEwMCk7XG4gICAgICAgIC8vIHRoaXMuc2hpcDEuZ3JhcGhpY3MuZHJhd1JlY3QoMCwgMCwgMjAwLCAyMDAsICcjZmZmJyk7XG4gICAgICAgIC8vIHRoaXMuc2hpcDIuZ3JhcGhpY3MuZHJhd1JlY3QoMCwgMCwgMjAwLCAyMDAsICcjMDAwJyk7XG4gICAgICAgIC8vIHRoaXMuc2hpcDMuZ3JhcGhpY3MuZHJhd1JlY3QoMCwgMCwgMjAwLCAyMDAsICcjZWVlJyk7XG4gICAgICAgIC8vIHRoaXMuc2hpcDQuZ3JhcGhpY3MuZHJhd1JlY3QoMCwgMCwgMjAwLCAyMDAsICcjZmZmJyk7XG4gICAgICAgIFxuICAgICAgICBpZiAodGhhdC50eXBlTFZMID09ICd0eXBlMScpIHtcbiAgICAgICAgICAgIHRoaXMuc2hpcDEucG9zKHBhZGRpbmctMzAwLCAtNTApO1xuICAgICAgICAgICAgdGhpcy5zaGlwMi5wb3MocGFkZGluZy0xMDAsIC01MCk7XG4gICAgICAgICAgICB0aGlzLnNoaXAzLnBvcyhwYWRkaW5nKzEwMCwgLTUwKTtcbiAgICAgICAgICAgIHRoaXMuc2hpcDQucG9zKHBhZGRpbmcrMzAwLCAtNTApO1xuICAgICAgICAgICAgdGhpcy5zaGlwWzBdID0gbmV3IEFuaW1hdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5zaGlwWzBdLnggPSAxMDA7XG4gICAgICAgICAgICB0aGlzLnNoaXBbMF0ueSA9IDEwMDtcbiAgICAgICAgICAgIHRoaXMuc2hpcFswXS5sb2FkQW5pbWF0aW9uKFwiYW5pL3N0b3BzaGlwMC5hbmlcIik7XG4gICAgICAgICAgICB0aGlzLnNoaXBbMF0ucGxheSgxLCB0cnVlKTsgXG4gICAgICAgICAgICB0aGlzLnNoaXBbMV0gPSBuZXcgQW5pbWF0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLnNoaXBbMV0ueCA9IDEwMDtcbiAgICAgICAgICAgIHRoaXMuc2hpcFsxXS55ID0gMTAwO1xuICAgICAgICAgICAgdGhpcy5zaGlwWzFdLmxvYWRBbmltYXRpb24oXCJhbmkvc3RvcHNoaXAxLmFuaVwiKTtcbiAgICAgICAgICAgIHRoaXMuc2hpcFsxXS5wbGF5KDEsIHRydWUpOyAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnNoaXBbMl0gPSBuZXcgQW5pbWF0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLnNoaXBbMl0ueCA9IDEwMDtcbiAgICAgICAgICAgIHRoaXMuc2hpcFsyXS55ID0gMTAwO1xuICAgICAgICAgICAgdGhpcy5zaGlwWzJdLmxvYWRBbmltYXRpb24oXCJhbmkvc3RvcHNoaXAyLmFuaVwiKTtcbiAgICAgICAgICAgIHRoaXMuc2hpcFsyXS5wbGF5KDEsIHRydWUpOyBcbiAgICAgICAgICAgIHRoaXMuc2hpcFszXSA9IG5ldyBBbmltYXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMuc2hpcFszXS54ID0gMTAwO1xuICAgICAgICAgICAgdGhpcy5zaGlwWzNdLnkgPSAxMDA7XG4gICAgICAgICAgICB0aGlzLnNoaXBbM10ubG9hZEFuaW1hdGlvbihcImFuaS9zdG9wc2hpcDMuYW5pXCIpO1xuICAgICAgICAgICAgdGhpcy5zaGlwWzNdLnBsYXkoMSwgdHJ1ZSk7ICAgICAgICBcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLnNoaXAxLnBvcyhwYWRkaW5nLTMwMCwgLTE1KTtcbiAgICAgICAgICAgIHRoaXMuc2hpcDIucG9zKHBhZGRpbmctMTAwLCAtMTUpO1xuICAgICAgICAgICAgdGhpcy5zaGlwMy5wb3MocGFkZGluZysxMDAsIC0xNSk7XG4gICAgICAgICAgICB0aGlzLnNoaXA0LnBvcyhwYWRkaW5nKzMwMCwgLTE1KTtcbiAgICAgICAgICAgIHRoaXMuc2hpcFswXSA9IG5ldyBTcHJpdGUoKTtcbiAgICAgICAgICAgIHRoaXMuc2hpcFswXS5wb3MoMCwwKTtcbiAgICAgICAgICAgIHRoaXMuc2hpcFswXS5sb2FkSW1hZ2UoJ3Jlcy9pbWdzLycrdGhhdC50eXBlTFZMKycvbTEucG5nJyk7XG4gICAgICAgICAgICB0aGlzLnNoaXBbMV0gPSBuZXcgU3ByaXRlKCk7XG4gICAgICAgICAgICB0aGlzLnNoaXBbMV0ubG9hZEltYWdlKCdyZXMvaW1ncy8nK3RoYXQudHlwZUxWTCsnL20yLnBuZycpO1xuICAgICAgICAgICAgdGhpcy5zaGlwWzJdID0gbmV3IFNwcml0ZSgpO1xuICAgICAgICAgICAgdGhpcy5zaGlwWzJdLmxvYWRJbWFnZSgncmVzL2ltZ3MvJyt0aGF0LnR5cGVMVkwrJy9tMy5wbmcnKTtcbiAgICAgICAgICAgIHRoaXMuc2hpcFszXSA9IG5ldyBTcHJpdGUoKTtcbiAgICAgICAgICAgIHRoaXMuc2hpcFszXS5sb2FkSW1hZ2UoJ3Jlcy9pbWdzLycrdGhhdC50eXBlTFZMKycvbTQucG5nJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zaGlwMS5hZGRDaGlsZCh0aGlzLnNoaXBbMF0pO1xuICAgICAgICB0aGlzLnNoaXAyLmFkZENoaWxkKHRoaXMuc2hpcFsxXSk7XG4gICAgICAgIHRoaXMuc2hpcDMuYWRkQ2hpbGQodGhpcy5zaGlwWzJdKTtcbiAgICAgICAgdGhpcy5zaGlwNC5hZGRDaGlsZCh0aGlzLnNoaXBbM10pO1xuXG4gICAgICAgIHRoaXMuc2hpcDEub24oRXZlbnQuQ0xJQ0ssdGhpcyxmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGF0Lm9uQ2xpY2tEb3duKDApO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJzAnKVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLnNoaXAyLm9uKEV2ZW50LkNMSUNLLHRoaXMsZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhhdC5vbkNsaWNrRG93bigxKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCcxJylcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5zaGlwMy5vbihFdmVudC5DTElDSyx0aGlzLGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoYXQub25DbGlja0Rvd24oMik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnMicpXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuc2hpcDQub24oRXZlbnQuQ0xJQ0ssdGhpcyxmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGF0Lm9uQ2xpY2tEb3duKDMpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJzMnKVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuc2hpcDEpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuc2hpcDIpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuc2hpcDMpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuc2hpcDQpO1xuXG4gICAgfVxuICAgIGdvc2hpcCgpOnZvaWR7ICAgICAgXG4gICAgICAgIHRoaXMuc2hpcFswXS5sb2FkQW5pbWF0aW9uKFwiYW5pL2dvc2hpcDAuYW5pXCIpO1xuICAgICAgICB0aGlzLnNoaXBbMV0ubG9hZEFuaW1hdGlvbihcImFuaS9nb3NoaXAxLmFuaVwiKTtcbiAgICAgICAgdGhpcy5zaGlwWzJdLmxvYWRBbmltYXRpb24oXCJhbmkvZ29zaGlwMi5hbmlcIik7XG4gICAgICAgIHRoaXMuc2hpcFszXS5sb2FkQW5pbWF0aW9uKFwiYW5pL2dvc2hpcDMuYW5pXCIpO1xuICAgIH1cblxuICAgIG9rc2hpcChpbmRleCk6dm9pZHtcbiAgICAgICAgdmFyIGFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpO1xuICAgICAgICBhbmkubG9hZEFuaW1hdGlvbihcImFuaS9va3NoaXBcIitpbmRleCtcIi5hbmlcIik7XG4gICAgICAgIGFuaS55ID0gLTMwO1xuICAgICAgICB0aGlzLnNoaXBbaW5kZXhdLmFkZENoaWxkKGFuaSk7XG4gICAgICAgIGFuaS5wbGF5KDEsZmFsc2UpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGFuaS5yZW1vdmVTZWxmKClcbiAgICAgICAgfSwgNDAwKTtcbiAgICB9XG4gICAgYmFuZHNoaXAoaW5kZXgpOnZvaWR7XG4gICAgICAgIHZhciBhbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKTtcbiAgICAgICAgYW5pLmxvYWRBbmltYXRpb24oXCJhbmkvYmFuZHNoaXBcIitpbmRleCtcIi5hbmlcIik7XG4gICAgICAgIGFuaS5zY2FsZVg9IDEuMSxcbiAgICAgICAgYW5pLnNjYWxlWT0gMS4xLFxuICAgICAgICB0aGlzLnNoaXBbaW5kZXhdLmFkZENoaWxkKGFuaSk7XG4gICAgICAgIGFuaS5wbGF5KDEsZmFsc2UpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGFuaS5yZW1vdmVTZWxmKClcbiAgICAgICAgfSwgNDAwKTtcbiAgICB9XG59IiwidmFyIEhhbmRsZXIgPSBMYXlhLkhhbmRsZXI7XG52YXIgU3ByaXRlID0gTGF5YS5TcHJpdGU7XG52YXIgVHdlZW4gPSBMYXlhLlR3ZWVuO1xudmFyIHRoYXQ7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyB0aGluZyBleHRlbmRzIExheWEuU3ByaXRlIHtcbiAgICBwcml2YXRlIHdvcmRPYmo7XG4gICAgcHVibGljIGlzT3ZlcjtcbiAgICBwcml2YXRlIHppbXVDb247XG4gICAgXG4gICAgY29uc3RydWN0b3IodGhhdHMsd29yZE9iaikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGF0ID0gdGhhdHM7XG4gICAgICAgIHRoaXMud29yZE9iaiA9IHdvcmRPYmo7XG4gICAgICAgIHRoaXMuaXNPdmVyID0gZmFsc2U7Ly/mmK/lkKblt7Lnu4/mjpLpmaRcbiAgICAgICAgdGhpcy56aW11Q29uID0gbmV3IFNwcml0ZSgpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuemltdUNvbik7XG4gICAgICAgIHRoaXMuYWRkZW5lcmd5SW1nKCk7XG4gICAgfVxuXG4gICAgYWRkZW5lcmd5SW1nICgpOnZvaWQge1xuICAgICAgICB2YXIgaW1nU3ByaXRlID0gbmV3IFNwcml0ZSgpO1xuICAgICAgICBpbWdTcHJpdGUubG9hZEltYWdlKCdyZXMvaW1ncy8nK3RoYXQudHlwZUxWTCsnLycrdGhpcy53b3JkT2JqLmxldHRlci50b0xvd2VyQ2FzZSgpKycucG5nJyk7XG4gICAgICAgIGltZ1Nwcml0ZS5zY2FsZVggPSAwLjQ1O1xuICAgICAgICBpbWdTcHJpdGUuc2NhbGVZID0gMC40NTtcbiAgICAgICAgaWYodGhhdC50eXBlTFZMID09ICd0eXBlMScpe1xuICAgICAgICAgICAgaW1nU3ByaXRlLnBpdm90KDU3LDk0KTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGF0LnR5cGVMVkwgPT0gJ3R5cGUyJyl7XG4gICAgICAgICAgICBpbWdTcHJpdGUucGl2b3QoNjIsMTI0KTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGF0LnR5cGVMVkwgPT0gJ3R5cGUzJyl7XG4gICAgICAgICAgICBpbWdTcHJpdGUucGl2b3QoNTgsMTI2KTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGF0LnR5cGVMVkwgPT0gJ3R5cGU0Jyl7XG4gICAgICAgICAgICBpbWdTcHJpdGUucGl2b3QoNzAsNjgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuemltdUNvbi5hZGRDaGlsZChpbWdTcHJpdGUpO1xuICAgIH1cblxuICAgIHhpYW9zaGkgKCk6dm9pZCB7XG4gICAgICAgIFR3ZWVuLmNsZWFyQWxsKHRoaXMpO1xuICAgICAgICB0aGlzLmlzT3ZlciA9IHRydWU7XG4gICAgICAgIFR3ZWVuLnRvKHRoaXMsIHthbHBoYTogMH0sIDUwMCwgbnVsbCwgbmV3IEhhbmRsZXIodGhpcywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5ldmVudCgnVUllbmVyZ3lCb3hfUmVtb3ZlX0V2ZW50JywgW3RoaXNdKTtcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIHNldFN0YXR1cyAoc3RhdHVzKTp2b2lkIHtcbiAgICAgICAgdGhpcy53b3JkT2JqLnN0YXR1cyA9IHN0YXR1cztcbiAgICB9XG4gICAgc2V0U3RhcnQgKHN0YXJ0KTp2b2lkIHtcbiAgICAgICAgdGhpcy53b3JkT2JqLnN0YXJ0ID0gc3RhcnQ7XG4gICAgfVxuICAgIHNldFRpbWUgKHRpbWUpOnZvaWQge1xuICAgICAgICB0aGlzLndvcmRPYmoudGltZSA9IDMwMDAqdGltZTtcbiAgICB9XG4gICAgc2V0U2hvdyAoKTp2b2lkIHtcbiAgICAgICAgdGhpcy53b3JkT2JqLmlzU2hvdyA9IHRydWU7XG4gICAgfVxuICAgIHNldFBlcmNlbnQgKHBlcmNlbnQpOnZvaWQge1xuICAgICAgICB0aGlzLndvcmRPYmoucGVyY2VudCA9IHBlcmNlbnQ7XG4gICAgfVxuICAgIGJ1cGlwZWkgKHNjb3JlKTp2b2lkIHtcbiAgICAgICAgdGhpcy53b3JkT2JqLnN0YXR1cyA9IC0xO1xuICAgICAgICB0aGlzLnhpYW9zaGkoKTtcbiAgICB9XG5cbiAgICBwaXBlaSAoKTp2b2lkIHtcbiAgICAgICAgdGhpcy53b3JkT2JqLnN0YXR1cyA9IDE7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnhpYW9zaGkoKTtcbiAgICB9XG4gICAgc2hpdG91ICgpOnZvaWQge1xuICAgICAgICB0aGlzLndvcmRPYmouc3RhdHVzID0gMTtcbiAgICAgICAgdGhpcy54aWFvc2hpKCk7XG4gICAgfVxufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIiwiaW1wb3J0IFNwcml0ZSA9IExheWEuU3ByaXRlO1xuaW1wb3J0IEV2ZW50ID0gTGF5YS5FdmVudDtcbmltcG9ydCBIYW5kbGVyID0gTGF5YS5IYW5kbGVyO1xuaW1wb3J0IFRpbWVMaW5lID0gTGF5YS5UaW1lTGluZTtcbmltcG9ydCBUZXh0ID0gTGF5YS5UZXh0O1xuaW1wb3J0IFR3ZWVuID0gTGF5YS5Ud2VlbjtcbmltcG9ydCBBbmltYXRpb24gPSBMYXlhLkFuaW1hdGlvbjtcbmltcG9ydCBTb3VuZDMyMSA9IExheWEuU291bmRNYW5hZ2VyO1xudmFyIHRoYXQsdGltZUxpbmUsaXMzMjEgPSB0cnVlLGlzY2xpY2sgPSBmYWxzZTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHRpcHMgZXh0ZW5kcyBMYXlhLlNwcml0ZSB7XG5cblxuICAgIHByaXZhdGUgcGVyZmVjdFRpcDpMYXlhLlNwcml0ZTtcbiAgICBwcml2YXRlIGdyZWF0VGlwOkxheWEuU3ByaXRlO1xuICAgIHByaXZhdGUgcmlnaHRUaXA6TGF5YS5TcHJpdGU7XG4gICAgcHJpdmF0ZSBtaXNzVGlwOkxheWEuU3ByaXRlO1xuICAgIHByaXZhdGUgYmFkVGlwOkxheWEuU3ByaXRlO1xuICAgIHByaXZhdGUgbG9uZzpMYXlhLkFuaW1hdGlvbjtcblxuICAgIHByaXZhdGUgdGltZVRpcDpMYXlhLlNwcml0ZTtcbiAgICBwcml2YXRlIHJlc3RhcnRUaXA6TGF5YS5TcHJpdGU7XG4gICAgcHJpdmF0ZSB0b3BCYW5UaXA6TGF5YS5TcHJpdGU7XG4gICAgcHJpdmF0ZSB0aXRsZVR4dDpMYXlhLlRleHQ7XG4gICAgcHJpdmF0ZSBzdGFydEdvVGlwOkxheWEuU3ByaXRlO1xuICAgIHByaXZhdGUgc3RhcnRHb1R4dDpMYXlhLlRleHQ7XG4gICAgXG5cbiAgICBwcml2YXRlIHJlYWR5MVRpcDpMYXlhLlNwcml0ZTtcbiAgICBwcml2YXRlIHJlYWR5MlRpcDpMYXlhLlNwcml0ZTtcbiAgICBwcml2YXRlIHJlYWR5M1RpcDpMYXlhLlNwcml0ZTtcbiAgICBwcml2YXRlIHJlYWR5VGlwOkxheWEuU3ByaXRlO1xuICAgIHByaXZhdGUgcmVhZHlHb1RpcDpMYXlhLlNwcml0ZTtcbiAgICBwcml2YXRlIGNvdW50RG93blR4dDpMYXlhLlRleHQ7Ly/lgJLorqHml7bmlofmnKxcblxuICAgIHByaXZhdGUgc2NvcmVUeHQ7XG5cbiAgICBwcml2YXRlIGFsbFNjb3JlID0gMDtcbiAgICBwcml2YXRlIGdhbWVQYW5lbDtcbiAgICBwcml2YXRlIGxhc3RUaXA7XG5cbiAgICBwcml2YXRlIGNvdW50RG93biA9IDA7XG4gICAgcHJpdmF0ZSBjb3VudERvd24yID0gNjA7XG5cbiAgICBwcml2YXRlIHNjb3JlT2JqID0ge1xuICAgICAgICBwZXJmZWN0OiAwLFxuICAgICAgICBnb29kOiAwLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgbWlzczogMCxcbiAgICAgICAgYmFkOiAwLFxuICAgICAgICBvYnN0YWNsZTogMCxcbiAgICAgICAgdG90YWxTY29yZTogMFxuICAgIH07XG4gICAgY29uc3RydWN0b3IodGhhdHMsZ2FtZVBhbmVsKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy5nYW1lUGFuZWwgPSBnYW1lUGFuZWw7XG4gICAgICAgIHRoYXQgPSB0aGF0c1xuICAgICAgICB0aGlzLmNvdW50RG93bjIgPSBwYXJzZUludCgodGhhdHMuZGF0YS5tdXNpY0R1cmF0aW9uIC8gMTAwMCkudG9TdHJpbmcoKSk7XG4gICAgICAgIC8vIHRoaXMuY291bnREb3duMiA9IDI7XG4gICAgICAgIHRoaXMuaW5pdFRpcHMoKTtcbiAgICB9XG5cbiAgICBpbml0VGlwcyAoKSA6dm9pZCB7XG4gICAgICAgIHRoaXMuYmFkVGlwID0gbmV3IFNwcml0ZSgpO1xuICAgICAgICB0aGlzLmJhZFRpcC5sb2FkSW1hZ2UoXCJyZXMvaW1ncy9iYWQucG5nXCIpO1xuICAgICAgICB0aGlzLmJhZFRpcC5hbHBoYSA9IDA7XG4gICAgICAgIHRoaXMuYmFkVGlwLndpZHRoID0gNTEwO1xuICAgICAgICB0aGlzLmJhZFRpcC5oZWlnaHQgPSAyMjI7XG4gICAgICAgIHRoaXMuYmFkVGlwLnBpdm90KDI1NSwgMTExKTtcbiAgICAgICAgdGhpcy5iYWRUaXAucG9zKDUwNCwgTGF5YS5zdGFnZS5oZWlnaHQvIDItMjApO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuYmFkVGlwKTtcblxuICAgICAgICB0aGlzLm1pc3NUaXAgPSBuZXcgU3ByaXRlKCk7XG4gICAgICAgIHRoaXMubWlzc1RpcC5sb2FkSW1hZ2UoXCJyZXMvaW1ncy9taXNzLnBuZ1wiKTtcbiAgICAgICAgdGhpcy5taXNzVGlwLmFscGhhID0gMDtcbiAgICAgICAgdGhpcy5taXNzVGlwLndpZHRoID0gNTEwO1xuICAgICAgICB0aGlzLm1pc3NUaXAuaGVpZ2h0ID0gMjIyO1xuICAgICAgICB0aGlzLm1pc3NUaXAucGl2b3QoMjU1LCAxMTEpO1xuICAgICAgICB0aGlzLm1pc3NUaXAucG9zKDUwNCwgTGF5YS5zdGFnZS5oZWlnaHQvIDItMjApO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMubWlzc1RpcCk7XG5cbiAgICAgICAgLy8gdGhpcy5yaWdodFRpcCA9IG5ldyBTcHJpdGUoKTtcbiAgICAgICAgLy8gdGhpcy5yaWdodFRpcC5sb2FkSW1hZ2UoXCJyZXMvaW1ncy9yaWdodC5wbmdcIik7XG4gICAgICAgIC8vIHRoaXMucmlnaHRUaXAuYWxwaGEgPSAwO1xuICAgICAgICAvLyB0aGlzLnJpZ2h0VGlwLnBpdm90KDYwLCAzMCk7XG4gICAgICAgIC8vIHRoaXMucmlnaHRUaXAucG9zKDUwNCwgKExheWEuc3RhZ2UuaGVpZ2h0KSAvIDIpO1xuICAgICAgICAvLyB0aGlzLmFkZENoaWxkKHRoaXMucmlnaHRUaXApO1xuXG4gICAgICAgIC8vIHRoaXMuZ3JlYXRUaXAgPSBuZXcgU3ByaXRlKCk7XG4gICAgICAgIC8vIHRoaXMuZ3JlYXRUaXAubG9hZEltYWdlKFwicmVzL2ltZ3MvZ3JlYXQucG5nXCIpO1xuICAgICAgICAvLyB0aGlzLmdyZWF0VGlwLmFscGhhID0gMDtcbiAgICAgICAgLy8gdGhpcy5ncmVhdFRpcC5waXZvdCg3MCwgMzApO1xuICAgICAgICAvLyB0aGlzLmdyZWF0VGlwLnBvcyg1MDQsIChMYXlhLnN0YWdlLmhlaWdodCkgLyAyKTtcbiAgICAgICAgLy8gdGhpcy5hZGRDaGlsZCh0aGlzLmdyZWF0VGlwKTtcblxuICAgICAgICB0aGlzLnBlcmZlY3RUaXAgPSBuZXcgU3ByaXRlKCk7XG4gICAgICAgIHRoaXMucGVyZmVjdFRpcC5sb2FkSW1hZ2UoXCJyZXMvaW1ncy9wZXJmZWN0LnBuZ1wiKTtcbiAgICAgICAgdGhpcy5wZXJmZWN0VGlwLmFscGhhID0gMDtcbiAgICAgICAgdGhpcy5wZXJmZWN0VGlwLndpZHRoID0gNTEwO1xuICAgICAgICB0aGlzLnBlcmZlY3RUaXAuaGVpZ2h0ID0gMjIyO1xuICAgICAgICB0aGlzLnBlcmZlY3RUaXAucGl2b3QoMjU1LCAxMTEpO1xuICAgICAgICB0aGlzLnBlcmZlY3RUaXAucG9zKDUwNCwgTGF5YS5zdGFnZS5oZWlnaHQgLyAyLTIwKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLnBlcmZlY3RUaXApO1xuXG4gICAgICAgIHRoaXMudG9wQmFuVGlwID0gbmV3IFNwcml0ZSgpO1xuICAgICAgICB0aGlzLnRvcEJhblRpcC5sb2FkSW1hZ2UoXCJyZXMvaW1ncy90b3BCYW4ucG5nXCIpO1xuICAgICAgICB0aGlzLnRvcEJhblRpcC53aWR0aCA9IDMyMDtcbiAgICAgICAgdGhpcy50b3BCYW5UaXAuaGVpZ2h0ID0gMTQ1O1xuICAgICAgICB0aGlzLnRvcEJhblRpcC5waXZvdCgxNjAsIDApOyBcbiAgICAgICAgdGhpcy50b3BCYW5UaXAucG9zKDUwNCwgMCk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy50b3BCYW5UaXApO1xuICAgICAgICB0aGlzLnRpdGxlVHh0ID0gbmV3IFRleHQoKTtcbiAgICAgICAgdGhpcy50aXRsZVR4dC5mb250U2l6ZSA9IDM0O1xuICAgICAgICB0aGlzLnRpdGxlVHh0LmNvbG9yID0gXCIjRkZGRkZGXCI7XG4gICAgICAgIHRoaXMudGl0bGVUeHQud2lkdGggPSAzMjA7XG4gICAgICAgIHRoaXMudGl0bGVUeHQueSA9IDg1O1xuICAgICAgICB0aGlzLnRpdGxlVHh0LmFsaWduID0gJ2NlbnRlcic7XG4gICAgICAgIHRoaXMudGl0bGVUeHQudGV4dCA9IFwi6Lef6ZqP6IqC5aWPXCI7XG4gICAgICAgIHRoaXMudG9wQmFuVGlwLmFkZENoaWxkKHRoaXMudGl0bGVUeHQpO1xuXG4gICAgICAgIHRoaXMuc3RhcnRHb1RpcCA9IG5ldyBTcHJpdGUoKTtcbiAgICAgICAgdGhpcy5zdGFydEdvVGlwLmxvYWRJbWFnZShcInJlcy9pbWdzL2J1dHRvblN0YXJ0LnBuZ1wiKTtcbiAgICAgICAgdGhpcy5zdGFydEdvVGlwLndpZHRoID0gMjQwO1xuICAgICAgICB0aGlzLnN0YXJ0R29UaXAuaGVpZ2h0ID0gODA7XG4gICAgICAgIHRoaXMuc3RhcnRHb1RpcC5waXZvdCgxMjAsIDApOyBcbiAgICAgICAgdGhpcy5zdGFydEdvVGlwLnBvcyg1MDQsIDI4MCk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5zdGFydEdvVGlwKTtcbiAgICAgICAgdGhpcy5zdGFydEdvVGlwLm9uKEV2ZW50Lk1PVVNFX0RPV04sIHRoaXMsIHRoaXMuc3RhcnRHbylcbiAgICAgICAgLy8gdGhpcy5zdGFydEdvVHh0ID0gbmV3IFRleHQoKTtcbiAgICAgICAgLy8gdGhpcy5zdGFydEdvVHh0LmZvbnRTaXplID0gMjc7XG4gICAgICAgIC8vIHRoaXMuc3RhcnRHb1R4dC5jb2xvciA9IFwiIzAwMDAwMFwiO1xuICAgICAgICAvLyB0aGlzLnN0YXJ0R29UeHQud2lkdGggPSAyNDA7XG4gICAgICAgIC8vIHRoaXMuc3RhcnRHb1R4dC55ID0gMjY7XG4gICAgICAgIC8vIHRoaXMuc3RhcnRHb1R4dC5hbGlnbiA9ICdjZW50ZXInO1xuICAgICAgICAvLyB0aGlzLnN0YXJ0R29UeHQudGV4dCA9IFwi5byA5aeL5ri45oiPXCI7XG4gICAgICAgIC8vIHRoaXMuc3RhcnRHb1RpcC5hZGRDaGlsZCh0aGlzLnN0YXJ0R29UeHQpO1xuXG4gICAgICAgIHRoaXMucmVhZHkzVGlwID0gbmV3IFNwcml0ZSgpO1xuICAgICAgICB0aGlzLnJlYWR5M1RpcC5sb2FkSW1hZ2UoXCJyZXMvaW1ncy9Db3VudERvd24zLnBuZ1wiKTtcbiAgICAgICAgdGhpcy5yZWFkeTNUaXAuYWxwaGEgPSAwO1xuICAgICAgICB0aGlzLnJlYWR5M1RpcC5waXZvdCg0NSwgMCk7IFxuICAgICAgICB0aGlzLnJlYWR5M1RpcC5oZWlnaHQgPSAxMzU7XG4gICAgICAgIHRoaXMucmVhZHkzVGlwLnBvcyg1MDQsIExheWEuc3RhZ2UuaGVpZ2h0LzItMTIwKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLnJlYWR5M1RpcCk7XG4gICAgICAgIHRoaXMucmVhZHkyVGlwID0gbmV3IFNwcml0ZSgpO1xuICAgICAgICB0aGlzLnJlYWR5MlRpcC5sb2FkSW1hZ2UoXCJyZXMvaW1ncy9Db3VudERvd24yLnBuZ1wiKTtcbiAgICAgICAgdGhpcy5yZWFkeTJUaXAuYWxwaGEgPSAwO1xuICAgICAgICB0aGlzLnJlYWR5MlRpcC5waXZvdCg0Ni41LCAwKTsgXG4gICAgICAgIHRoaXMucmVhZHkyVGlwLmhlaWdodCA9IDEzNTtcbiAgICAgICAgdGhpcy5yZWFkeTJUaXAucG9zKDUwNCwgTGF5YS5zdGFnZS5oZWlnaHQvMi0xMjApO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMucmVhZHkyVGlwKTtcbiAgICAgICAgdGhpcy5yZWFkeTFUaXAgPSBuZXcgU3ByaXRlKCk7XG4gICAgICAgIHRoaXMucmVhZHkxVGlwLmxvYWRJbWFnZShcInJlcy9pbWdzL0NvdW50RG93bjEucG5nXCIpO1xuICAgICAgICB0aGlzLnJlYWR5MVRpcC5hbHBoYSA9IDA7XG4gICAgICAgIHRoaXMucmVhZHkxVGlwLnBpdm90KDMzLjUsIDApOyBcbiAgICAgICAgdGhpcy5yZWFkeTFUaXAuaGVpZ2h0ID0gMTM1O1xuICAgICAgICB0aGlzLnJlYWR5MVRpcC5wb3MoNTA0LCBMYXlhLnN0YWdlLmhlaWdodC8yLTEyMCk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5yZWFkeTFUaXApO1xuICAgICAgICB0aGlzLnJlYWR5VGlwID0gbmV3IFNwcml0ZSgpO1xuICAgICAgICB0aGlzLnJlYWR5VGlwLmxvYWRJbWFnZShcInJlcy9pbWdzL3JlYWR5LnBuZ1wiKTtcbiAgICAgICAgdGhpcy5yZWFkeVRpcC5hbHBoYSA9IDA7XG4gICAgICAgIHRoaXMucmVhZHlUaXAucGl2b3QoMTUwLCAwKTsgXG4gICAgICAgIHRoaXMucmVhZHlUaXAuaGVpZ2h0ID0gMTM1O1xuICAgICAgICB0aGlzLnJlYWR5VGlwLnBvcyg1MDQsIExheWEuc3RhZ2UuaGVpZ2h0LzItMTIwKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLnJlYWR5VGlwKTtcbiAgICAgICAgdGhpcy5yZWFkeUdvVGlwID0gbmV3IFNwcml0ZSgpO1xuICAgICAgICB0aGlzLnJlYWR5R29UaXAubG9hZEltYWdlKFwicmVzL2ltZ3MvR08ucG5nXCIpO1xuICAgICAgICB0aGlzLnJlYWR5R29UaXAuYWxwaGEgPSAwO1xuICAgICAgICB0aGlzLnJlYWR5R29UaXAucGl2b3QoMTUwLCAwKTsgXG4gICAgICAgIHRoaXMucmVhZHlHb1RpcC5oZWlnaHQgPSAxMzU7XG4gICAgICAgIHRoaXMucmVhZHlHb1RpcC5wb3MoNTA0LCBMYXlhLnN0YWdlLmhlaWdodC8yLTEyMCk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5yZWFkeUdvVGlwKTtcblxuXG4gICAgICAgIFxuICAgICAgICAvLyB0aGlzLnNjb3JlVHh0ID0gbmV3IFRleHQoKTtcbiAgICAgICAgLy8gdGhpcy5zY29yZVR4dC5mb250ID0gXCJJbXBhY3RcIjtcbiAgICAgICAgLy8gdGhpcy5zY29yZVR4dC5mb250U2l6ZSA9IDcwO1xuICAgICAgICAvLyB0aGlzLnNjb3JlVHh0LmNvbG9yID0gXCIjMjFENEExXCI7XG4gICAgICAgIC8vIHRoaXMuc2NvcmVUeHQud2lkdGggPSAxMzgwO1xuICAgICAgICAvLyB0aGlzLnNjb3JlVHh0LnBpdm90KDI1LCAwKTsgXG4gICAgICAgIC8vIHRoaXMuc2NvcmVUeHQucG9zKDUwNCwgMjApO1xuICAgICAgICAvLyB0aGlzLnNjb3JlVHh0LmFscGhhID0gMDtcbiAgICAgICAgLy8gdGhpcy5zY29yZVR4dC50ZXh0ID0gdGhpcy5zY29yZU9iai50b3RhbFNjb3JlLnRvU3RyaW5nKCk7XG4gICAgICAgIC8vIHRoaXMuYWRkQ2hpbGQodGhpcy5zY29yZVR4dCk7XG4gICAgfVxuXG4gICAgc2V0Q291bnREb3duICgpIDp2b2lkIHtcbiAgICAgICAgTGF5YS50aW1lci5sb29wKDEwMDAsIHRoaXMsIGNvdW50RG93bkhhbmRsZXIpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGNvdW50RG93bkhhbmRsZXIoKSB7XG4gICAgICAgICAgICBpZih0aGlzLmNvdW50RG93biA9PSAodGhpcy5jb3VudERvd24yLTUpKXtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3RhcnRUaXAuZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jb3VudERvd24rKztcbiAgICAgICAgICAgIGxldCBjb3VudCA9IHBhcnNlSW50KCh0aGlzLmNvdW50RG93bi82MCU2MCkudG9TdHJpbmcoKSlcbiAgICAgICAgICAgIGxldCBjb3VudDIgPSBwYXJzZUludCgodGhpcy5jb3VudERvd24yLzYwJTYwKS50b1N0cmluZygpKVxuICAgICAgICAgICAgbGV0IHRpbWUgPSBcIjBcIisoY291bnQ9PTA/XCIwXCI6Y291bnQpK1wiOlwiKyh0aGlzLmNvdW50RG93bi1jb3VudCo2MDwwPyh0aGlzLmNvdW50RG93bjwxMD9cIjBcIit0aGlzLmNvdW50RG93bjp0aGlzLmNvdW50RG93bik6KHRoaXMuY291bnREb3duLWNvdW50KjYwPDEwP1wiMFwiKyh0aGlzLmNvdW50RG93bi1jb3VudCo2MCk6KHRoaXMuY291bnREb3duLWNvdW50KjYwKSkpK1wiL1wiK1wiMFwiKyhjb3VudDI9PTA/XCIwXCI6Y291bnQyKStcIjpcIisodGhpcy5jb3VudERvd24yLWNvdW50Mio2MDwwPyh0aGlzLmNvdW50RG93bjI8MTA/XCIwXCIrdGhpcy5jb3VudERvd24yOnRoaXMuY291bnREb3duMik6KHRoaXMuY291bnREb3duMi1jb3VudDIqNjA8MTA/XCIwXCIrKHRoaXMuY291bnREb3duMi1jb3VudDIqNjApOih0aGlzLmNvdW50RG93bjItY291bnQyKjYwKSkpXG4gICAgICAgICAgICB0aGlzLmNvdW50RG93blR4dC50ZXh0ID0gdGltZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvdW50RG93biA9PSB0aGlzLmNvdW50RG93bjIpIHtcbiAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLmNsZWFyKHRoaXMsIGNvdW50RG93bkhhbmRsZXIpO1xuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnQoXCJFbmRfR2FtZV9FdmVudFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBsYXkgKGU6IEV2ZW50KTp2b2lke1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLmV2ZW50KFwiUGxheV9HYW1lX0V2ZW50XCIpOyBcbiAgICAgICAgXG4gICAgfVxuICAgIHN0b3AgKGU6IEV2ZW50KTp2b2lke1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLmV2ZW50KFwiU3RvcF9HYW1lX0V2ZW50XCIpO1xuICAgIH1cbiAgICByZXN0YXJ0IChlOiBFdmVudCk6dm9pZHtcbiAgICAgICAgaWYoaXNjbGljayl7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaXNjbGljayA9IHRydWU7XG4gICAgICAgIHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2Uoe25hbWU6J2luZ1Jlc3RhcnRHYW1lJyxkYXRhOnt9fSwnKicpO1xuICAgICAgICBMYXlhLnRpbWVyLmNsZWFyQWxsKHRoaXMpO1xuICAgICAgICBpZih0aW1lTGluZSYmaXMzMjEpe1xuICAgICAgICAgICAgdGltZUxpbmUub2ZmKEV2ZW50LkNPTVBMRVRFLCB0aGlzLCAoKT0+e30pO1xuICAgICAgICAgICAgdGltZUxpbmUucGF1c2UoKTtcbiAgICAgICAgICAgIHRpbWVMaW5lLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgICBpczMyMSA9IHRydWU7ICAgICAgICBcbiAgICAgICAgTGF5YS5Tb3VuZE1hbmFnZXIuc3RvcEFsbCgpO1xuICAgICAgICBmb3IobGV0IGkgb2YgdGhhdC5zY3JlZW5MZXR0ZXJCb3hBcnIpe1xuICAgICAgICAgICAgaS5tb3ZlVHdlZW4ucGF1c2UoKTtcbiAgICAgICAgICAgIGkuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICAgIExheWEudGltZXIuY2xlYXJBbGwodGhhdCk7XG4gICAgICAgIHRoaXMuZ2FtZVBhbmVsLmRlc3Ryb3koKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGF0LkdhbWVNYW5hZ2VyKCk7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgfVxuICAgIHNldFNjb3JlIChhZGRTY29yZSkgOnZvaWQge1xuICAgICAgICB0aGlzLnNjb3JlT2JqLnRvdGFsU2NvcmUgKz0gYWRkU2NvcmU7XG4gICAgICAgIC8vIHRoaXMuc2NvcmVUeHQudGV4dCA9IHBhcnNlSW50KCh0aGlzLnNjb3JlT2JqLnRvdGFsU2NvcmUpLnRvRml4ZWQoMSkpLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIFxuICAgIGdldFNjb3JlICgpIDphbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY29yZU9iajtcbiAgICB9XG5cbiAgICBzaG93UGxheVRpcCAoYWRkU2NvcmUpOnZvaWQge1xuICAgICAgICB2YXIgZGFuZ2VTY29yZTpudW1iZXIgPSAwO1xuICAgICAgICB0aGlzLnNjb3JlT2JqLm9ic3RhY2xlKys7XG4gICAgICAgIGlmIChhZGRTY29yZSA9PSAyMCkge1xuICAgICAgICAgICAgTGF5YS5Tb3VuZE1hbmFnZXIucGxheVNvdW5kKFwic291bmQvYmVhdC5tcDNcIiwgMSk7XG4gICAgICAgICAgICB0aGlzLnNjb3JlT2JqLnBlcmZlY3QrKztcbiAgICAgICAgICAgIGRhbmdlU2NvcmUgPSBwYXJzZUZsb2F0KCgxMDAvdGhhdC5nb3V6aUxlbmd0aCkudG9GaXhlZCgxKSlcbiAgICAgICAgICAgIHRoaXMuc2hvd1RpcCh0aGlzLnBlcmZlY3RUaXApO1xuICAgICAgICB9IGVsc2UgaWYgKGFkZFNjb3JlID09IDEwKSB7XG4gICAgICAgICAgICB0aGlzLnNjb3JlT2JqLmdvb2QrKztcbiAgICAgICAgICAgIGRhbmdlU2NvcmUgPSBwYXJzZUZsb2F0KCgoMTAwL3RoYXQuZ291emlMZW5ndGgpKjAuOCkudG9GaXhlZCgxKSlcbiAgICAgICAgICAgIHRoaXMuc2hvd1RpcCh0aGlzLmdyZWF0VGlwKTtcbiAgICAgICAgfSBlbHNlIGlmIChhZGRTY29yZSA9PSA1KSB7XG4gICAgICAgICAgICB0aGlzLnNjb3JlT2JqLnJpZ2h0Kys7XG4gICAgICAgICAgICBkYW5nZVNjb3JlID0gcGFyc2VGbG9hdCgoKDEwMC90aGF0LmdvdXppTGVuZ3RoKSowLjUpLnRvRml4ZWQoMSkpXG4gICAgICAgICAgICB0aGlzLnNob3dUaXAodGhpcy5yaWdodFRpcCk7XG4gICAgICAgIH0gZWxzZSBpZiAoYWRkU2NvcmUgPT0gMCkge1xuICAgICAgICAgICAgTGF5YS5Tb3VuZE1hbmFnZXIucGxheVNvdW5kKFwic291bmQvYnV0dG9uLm1wM1wiLCAxKTtcbiAgICAgICAgICAgIHRoaXMuc2NvcmVPYmoubWlzcysrO1xuICAgICAgICAgICAgdGhpcy5zaG93VGlwKHRoaXMubWlzc1RpcCk7XG4gICAgICAgIH0gZWxzZSBpZiAoYWRkU2NvcmUgPT0gLTEpIHtcbiAgICAgICAgICAgIExheWEuU291bmRNYW5hZ2VyLnBsYXlTb3VuZChcInNvdW5kL2JhZC5tcDNcIiwgMSk7XG4gICAgICAgICAgICB0aGlzLnNjb3JlT2JqLmJhZCsrO1xuICAgICAgICAgICAgdGhpcy5zaG93VGlwKHRoaXMuYmFkVGlwKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFNjb3JlKGRhbmdlU2NvcmUpO1xuICAgIH1cblxuICAgIHNob3dUaXAgKG5ld1RpcCk6dm9pZCB7XG5cbiAgICAgICAgaWYgKHRoaXMubGFzdFRpcCkge1xuICAgICAgICAgICAgVHdlZW4uY2xlYXJBbGwodGhpcy5sYXN0VGlwKVxuICAgICAgICAgICAgdGhpcy5sYXN0VGlwLmFscGhhID0gMDtcbiAgICAgICAgICAgIHRoaXMubGFzdFRpcC5zY2FsZVggPSAwLjQ7XG4gICAgICAgICAgICB0aGlzLmxhc3RUaXAuc2NhbGVZID0gMC40O1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGhhbmRsZXIgPSBuZXcgSGFuZGxlcih0aGlzLmxhc3RUaXAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIFR3ZWVuLnRvKG5ld1RpcCwge2FscGhhOiAwLH0sIDEwMCwgbnVsbCwgbnVsbCwgMjUwKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbmV3VGlwLnNjYWxlWCA9IDAuNDtcbiAgICAgICAgbmV3VGlwLnNjYWxlWSA9IDAuNDtcbiAgICAgICAgbmV3VGlwLnkgPSAoTGF5YS5zdGFnZS5oZWlnaHQpIC8gMjtcbiAgICAgICAgbmV3VGlwLmFscGhhID0gMDtcbiAgICAgICAgVHdlZW4udG8obmV3VGlwLCB7YWxwaGE6IDEsIHNjYWxlWDogMSwgc2NhbGVZOiAxfSwgNDAwLCBudWxsLCBoYW5kbGVyKTtcbiAgICAgICAgdGhpcy5sYXN0VGlwID0gbmV3VGlwO1xuXG4gICAgfVxuICAgIHN0YXJ0R28gKGU6RXZlbnQpOiB2b2lkIHtcbiAgICAgICAgaXNjbGljayA9IGZhbHNlO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpOyAgICAgICAgXG4gICAgICAgIHRoaXMudG9wQmFuVGlwLmFscGhhID0gMDtcbiAgICAgICAgdGhpcy50aXRsZVR4dC5hbHBoYSA9IDA7XG4gICAgICAgIHRoaXMuc3RhcnRHb1RpcC5hbHBoYSA9IDA7XG4gICAgICAgIHRoaXMudG9wQmFuVGlwLnkgPSAxMDAwO1xuICAgICAgICB0aGlzLnN0YXJ0R29UaXAueSA9IDEwMDA7XG4gICAgICAgIGxldCBfdGhhdCA9IHRoaXM7XG4gICAgICAgIHRoaXMubG9uZyA9IG5ldyBBbmltYXRpb24oKTtcbiAgICAgICAgLy8gdGhpcy5sb25nLmxvYWRBbmltYXRpb24oXCJhbmkvXCIrdGhhdC50eXBlTFZMK1wiLmFuaVwiKTtcbiAgICAgICAgdGhpcy5sb25nLmxvYWRBbmltYXRpb24oXCJhbmkvdHlwZTEuYW5pXCIpO1xuICAgICAgICB0aGlzLmxvbmcud2lkdGggPSAxMDA4O1xuICAgICAgICB0aGlzLmxvbmcuaGVpZ2h0ID0gNjQwO1xuICAgICAgICB0aGlzLmxvbmcucGl2b3QoNTA0LCAwKTsgXG4gICAgICAgIHRoaXMubG9uZy5wb3MoNTA0LCAwKTtcbiAgICAgICAgdGhpcy5sb25nLnBsYXkoMCwgZmFsc2UpOyAgICAgXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgTGF5YS5Tb3VuZE1hbmFnZXIucGxheU11c2ljKHRoYXQuZGF0YS5leHBsYWluQXVkaW9VcmwsIDEsaGFuZGxlcilcbiAgICAgICAgICAgIF90aGF0LmxvbmcubG9hZEFuaW1hdGlvbihcImFuaS90eXBlMTEuYW5pXCIpO1xuICAgICAgICAgICAgX3RoYXQubG9uZy53aWR0aCA9IDEwMDg7XG4gICAgICAgICAgICBfdGhhdC5sb25nLmhlaWdodCA9IDY0MDtcbiAgICAgICAgICAgIF90aGF0LmxvbmcucGl2b3QoNTA0LCAwKTsgXG4gICAgICAgICAgICBfdGhhdC5sb25nLnBvcyg1MDQsIDApO1xuICAgICAgICAgICAgLy8gX3RoYXQubG9uZy5sb2FkQW5pbWF0aW9uKFwiYW5pL1wiK3RoYXQudHlwZUxWTCtcIjEuYW5pXCIpO1xuICAgICAgICAgICAgX3RoYXQubG9uZy5wbGF5KDAsIHRydWUpOyAgXG4gICAgICAgIH0sIDMzNzApOyAgIFxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMubG9uZyk7XG4gICAgICAgIHZhciBoYW5kbGVyID0gbmV3IEhhbmRsZXIodGhpcywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoYXQubG9uZy5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLnJlYWR5R08oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlYWR5R08gKCk6dm9pZCB7XG4gICAgICAgIHRoaXMudGltZVRpcCA9IG5ldyBTcHJpdGUoKTtcbiAgICAgICAgdGhpcy50aW1lVGlwLmxvYWRJbWFnZShcInJlcy9pbWdzL3RpbWUucG5nXCIpO1xuICAgICAgICB0aGlzLnRpbWVUaXAud2lkdGggPSAyNTA7XG4gICAgICAgIHRoaXMudGltZVRpcC5oZWlnaHQgPSA1NTtcbiAgICAgICAgdGhpcy50aW1lVGlwLnBvcyg1MDQrMTAwLCAzMik7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy50aW1lVGlwKTtcbiAgICAgICAgdGhpcy5jb3VudERvd25UeHQgPSBuZXcgVGV4dCgpO1xuICAgICAgICB0aGlzLmNvdW50RG93blR4dC53aWR0aCA9IDI1MDtcbiAgICAgICAgdGhpcy5jb3VudERvd25UeHQuZm9udFNpemUgPSAyMjtcbiAgICAgICAgdGhpcy5jb3VudERvd25UeHQuY29sb3IgPSBcIiNGRkZGRkZcIjtcbiAgICAgICAgdGhpcy5jb3VudERvd25UeHQuYWxwaGEgPSAxO1xuICAgICAgICB0aGlzLmNvdW50RG93blR4dC55ID0gMTk7XG4gICAgICAgIHRoaXMuY291bnREb3duVHh0LnggPSA5NTtcbiAgICAgICAgbGV0IGNvdW50MiA9IHBhcnNlSW50KCh0aGlzLmNvdW50RG93bjIvNjAlNjApLnRvU3RyaW5nKCkpXG4gICAgICAgIGxldCB0aW1lID0gXCIwMDowMC9cIitcIjBcIisoY291bnQyPT0wP1wiMFwiOmNvdW50MikrXCI6XCIrKHRoaXMuY291bnREb3duMi1jb3VudDIqNjA8MD8odGhpcy5jb3VudERvd24yPDEwP1wiMFwiK3RoaXMuY291bnREb3duMjp0aGlzLmNvdW50RG93bjIpOih0aGlzLmNvdW50RG93bjItY291bnQyKjYwPDEwP1wiMFwiKyh0aGlzLmNvdW50RG93bjItY291bnQyKjYwKToodGhpcy5jb3VudERvd24yLWNvdW50Mio2MCkpKVxuICAgICAgICB0aGlzLmNvdW50RG93blR4dC50ZXh0ID0gdGltZTtcbiAgICAgICAgdGhpcy50aW1lVGlwLmFkZENoaWxkKHRoaXMuY291bnREb3duVHh0KTtcbiAgICAgICAgdGhpcy5zY29yZU9iai50b3RhbFNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5yZXN0YXJ0VGlwID0gbmV3IFNwcml0ZSgpO1xuICAgICAgICB0aGlzLnJlc3RhcnRUaXAubG9hZEltYWdlKFwicmVzL2ltZ3MvcmVzdGFydC5wbmdcIik7XG4gICAgICAgIHRoaXMucmVzdGFydFRpcC5hbHBoYSA9IDE7XG4gICAgICAgIHRoaXMucmVzdGFydFRpcC53aWR0aCA9IDYwO1xuICAgICAgICB0aGlzLnJlc3RhcnRUaXAuaGVpZ2h0ID0gNjA7XG4gICAgICAgIHRoaXMucmVzdGFydFRpcC5wb3MoNTA0KzQwNSwgMzQpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMucmVzdGFydFRpcCk7XG4gICAgICAgIHRpbWVMaW5lID0gbmV3IFRpbWVMaW5lKCk7XG4gICAgICAgIFNvdW5kMzIxLmF1dG9TdG9wTXVzaWMgPSB0cnVlO1xuICAgICAgICBTb3VuZDMyMS5zb3VuZFZvbHVtZSA9IDM7XG4gICAgICAgIFNvdW5kMzIxLnBsYXlNdXNpYyhcInNvdW5kLzMyMS5tcDNcIiwgMSlcbiAgICAgICAgdGltZUxpbmUuYWRkTGFiZWwoXCJyZWFkeTNcIiwgMCkudG8odGhpcy5yZWFkeTNUaXAsIHtzY2FsZVg6IDEsIHNjYWxlWTogMSwgYWxwaGE6IDF9LCA1MDAsIG51bGwsIDApXG4gICAgICAgICAgICAgICAgLmFkZExhYmVsKFwicmVhZHkzXCIsIDApLnRvKHRoaXMucmVhZHkzVGlwLCB7YWxwaGE6IDB9LCA1MDAsIG51bGwsIDApXG4gICAgICAgICAgICAgICAgLmFkZExhYmVsKFwicmVhZHkyXCIsIDApLnRvKHRoaXMucmVhZHkyVGlwLCB7c2NhbGVYOiAxLCBzY2FsZVk6IDEsIGFscGhhOiAxfSwgNTAwLCBudWxsLCAwKVxuICAgICAgICAgICAgICAgIC5hZGRMYWJlbChcInJlYWR5MlwiLCAwKS50byh0aGlzLnJlYWR5MlRpcCwge2FscGhhOiAwfSwgNTAwLCBudWxsLCAwKVxuICAgICAgICAgICAgICAgIC5hZGRMYWJlbChcInJlYWR5MVwiLCAwKS50byh0aGlzLnJlYWR5MVRpcCwge3NjYWxlWDogMSwgc2NhbGVZOiAxLCBhbHBoYTogMX0sIDUwMCwgbnVsbCwgMClcbiAgICAgICAgICAgICAgICAuYWRkTGFiZWwoXCJyZWFkeTFcIiwgMCkudG8odGhpcy5yZWFkeTFUaXAsIHthbHBoYTogMH0sIDUwMCwgbnVsbCwgMClcbiAgICAgICAgICAgICAgICAuYWRkTGFiZWwoXCJyZWFkeVwiLCAwKS50byh0aGlzLnJlYWR5VGlwLCB7c2NhbGVYOiAxLCBzY2FsZVk6IDEsIGFscGhhOiAxfSwgNTAwLCBudWxsLCAwKVxuICAgICAgICAgICAgICAgIC5hZGRMYWJlbChcInJlYWR5XCIsIDApLnRvKHRoaXMucmVhZHlUaXAsIHthbHBoYTogMH0sIDUwMCwgbnVsbCwgMClcbiAgICAgICAgICAgICAgICAuYWRkTGFiZWwoXCJyZWFkeUdPXCIsIDApLnRvKHRoaXMucmVhZHlHb1RpcCwge3NjYWxlWDogMSwgc2NhbGVZOiAxLCBhbHBoYTogMX0sIDUwMCwgbnVsbCwgMClcbiAgICAgICAgICAgICAgICAuYWRkTGFiZWwoXCJyZWFkeUdPXCIsIDApLnRvKHRoaXMucmVhZHlHb1RpcCwge2FscGhhOiAwfSwgNTAwLCBudWxsLCAwKVxuICAgICAgICB0aW1lTGluZS5wbGF5KDAsIGZhbHNlKTtcbiAgICAgICAgdGltZUxpbmUub24oRXZlbnQuTEFCRUwsIHRoaXMsIG9uTGFiZWwpO1xuICAgICAgICB0aW1lTGluZS5vbihFdmVudC5DT01QTEVURSwgdGhpcywgb25Db21wbGV0ZSk7XG5cbiAgICAgICAgZnVuY3Rpb24gb25MYWJlbChsYWJlbCkge1xuICAgICAgICAgICAgaWYgKGxhYmVsID09IFwicmVhZHlPdXRcIikge1xuICAgICAgICAgICAgICAgIHRpbWVMaW5lLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVMaW5lLnJlc3VtZSgpO1xuICAgICAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBvbkNvbXBsZXRlKCkge1xuICAgICAgICAgICAgdGhpcy5yZXN0YXJ0VGlwLm9uKEV2ZW50Lk1PVVNFX0RPV04sIHRoaXMsIHRoaXMucmVzdGFydClcbiAgICAgICAgICAgICAgICB0aW1lTGluZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgaXMzMjEgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldENvdW50RG93bigpO1xuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnQoXCJTdGFydF9HYW1lX0V2ZW50XCIpO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG59IiwiLyoqVGhpcyBjbGFzcyBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBMYXlhQWlySURFLCBwbGVhc2UgZG8gbm90IG1ha2UgYW55IG1vZGlmaWNhdGlvbnMuICovXG5pbXBvcnQgVmlldz1MYXlhLlZpZXc7XHJcbmltcG9ydCBEaWFsb2c9TGF5YS5EaWFsb2c7XHJcbmltcG9ydCBTY2VuZT1MYXlhLlNjZW5lO1xudmFyIFJFRzogRnVuY3Rpb24gPSBMYXlhLkNsYXNzVXRpbHMucmVnQ2xhc3M7XG5leHBvcnQgbW9kdWxlIHVpLmRpYWxvZyB7XHJcbiAgICBleHBvcnQgY2xhc3MgTG9hZGluZ0RpYWxvZ1VJIGV4dGVuZHMgRGlhbG9nIHtcclxuICAgICAgICBwdWJsaWMgc3RhdGljICB1aVZpZXc6YW55ID17XCJ0eXBlXCI6XCJEaWFsb2dcIixcInByb3BzXCI6e1wid2lkdGhcIjo2NDAsXCJoZWlnaHRcIjo2NDAsXCJhdXRvRGVzdHJveUF0Q2xvc2VkXCI6ZmFsc2V9LFwiY29tcElkXCI6MixcImNoaWxkXCI6W3tcInR5cGVcIjpcIkFuaW1hdGlvblwiLFwicHJvcHNcIjp7XCJ5XCI6MzIwLFwieFwiOjUwNCxcInNvdXJjZVwiOlwiYW5pL2xvYWQuYW5pXCIsXCJyb3RhdGlvblwiOi05MCxcInBpdm90WVwiOjAsXCJwaXZvdFhcIjowLFwiYXV0b1BsYXlcIjp0cnVlfSxcImNvbXBJZFwiOjEwfV0sXCJsb2FkTGlzdFwiOltcImFuaS9sb2FkLmFuaVwiXSxcImxvYWRMaXN0M0RcIjpbXX07XHJcbiAgICAgICAgY29uc3RydWN0b3IoKXsgc3VwZXIoKX1cclxuICAgICAgICBjcmVhdGVDaGlsZHJlbigpOnZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVZpZXcoTG9hZGluZ0RpYWxvZ1VJLnVpVmlldyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUkVHKFwidWkuZGlhbG9nLkxvYWRpbmdEaWFsb2dVSVwiLExvYWRpbmdEaWFsb2dVSSk7XHJcbn1cciJdfQ==
