import { makeAutoObservable } from "mobx";

export default class ToastPresenter {
    closing = false;

    constructor({ alertMessagesService }) {
        this.alertMessagesService = alertMessagesService;

        makeAutoObservable(this);
    }

    get currentAlert() {
        return this.alertMessagesService.currentAlert;
    }

    get message() {
        return this.currentAlert.message;
    }

    get type() {
        return this.currentAlert.type;
    }

    onClose = () => {
        this.closing = true;

        setTimeout(() => {
            this.alertMessagesService.hideMessage();

            this.closing = false;
        }, 500)
    }
}