import { ui } from "./ui/layaMaxUI";
export default class LoadingDialog extends ui.dialog.LoadingDialogUI {
    // private progress = '0'

    constructor() {
        super()
        // this.width = 1380;
        // this.height = 640;
        // this.autoDestroyAtClosed = true
        this.isPopupCenter = true
        // this.pos(0, 0)
    }

    onOpened() {
        // this.changeProgressValue(0)    
    }

    public changeProgressValue(nber: number) {
        // if (!this.progress) {
        //     Laya.timer.once(200, this, this.changeProgressValue)
        //     return
        // }
        // const num = Math.ceil(nber * 100) + "%"
        // this.progress.text = num;
    }

    public updateTip(tip: string) {
        // this.progress.text = tip
    }


    private onClick() {
        this.close()
    }
}