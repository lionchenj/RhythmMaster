/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import View=Laya.View;
import Dialog=Laya.Dialog;
import Scene=Laya.Scene;
var REG: Function = Laya.ClassUtils.regClass;
export module ui.dialog {
    export class LoadingDialogUI extends Dialog {
        public static  uiView:any ={"type":"Dialog","props":{"width":640,"height":640,"autoDestroyAtClosed":false},"compId":2,"child":[{"type":"Animation","props":{"y":320,"x":504,"source":"ani/load.ani","rotation":-90,"pivotY":0,"pivotX":0,"autoPlay":true},"compId":10}],"loadList":["ani/load.ani"],"loadList3D":[]};
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.createView(LoadingDialogUI.uiView);
        }
    }
    REG("ui.dialog.LoadingDialogUI",LoadingDialogUI);
}