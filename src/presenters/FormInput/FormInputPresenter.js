import { action, makeAutoObservable } from "mobx";

export default class FormInputPresenter {
    error = null;
    value = '';

    constructor({ validator }) {
        this.validator = validator;
        this.knownErrors = new Map([]);

        makeAutoObservable(this);
    }

    get isValid() {
        return !this.knownErrors.get(this.trimmedValue) && !!this.validator(this.trimmedValue)
    }

    get trimmedValue() {
        return this.value.trim()
    }

    onChange = (event) => {
        this.error = '';

        this.value = event.target.value;
    }

    onBlur = () => {
        this.validate();
    }

    clear = () => {
        this.value = '';
    }
    
    validate = action("ValidateInput", () => {
        if (! this.isValid) {
            this.knownErrors.set(this.trimmedValue, true)

            this.error = 'Your input has an invalid value';

            return false;
        }

        return true;
    })
}