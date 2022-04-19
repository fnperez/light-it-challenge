import { action, makeObservable, observable } from "mobx";

export default class AppPresenter {
    form = {
        firstName: {
            type: 'text',
            required: true,
            placeholder: 'Your name',
            label: 'Name',
            ref: (ref) => {
                this.form.firstName.inputRef = ref
            }
        },
        lastName: {
            type: 'text',
            required: true,
            placeholder: 'Your last name',
            label: 'Last name',
            ref: (ref) => {
                this.form.lastName.inputRef = ref
            }
        },
        email: {
            type: 'email',
            required: true,
            placeholder: 'Your email',
            label: 'Email',
            ref: (ref) => {
                this.form.email.inputRef = ref
            }
        },
        imageLink: {
            type: 'url',
            required: false,
            placeholder: 'Your image link',
            label: 'Image CDN link',
            ref: (ref) => {
                this.form.imageLink.inputRef = ref
            }
        }
    };

    sending = false;

    constructor({ alertMessagesService }) {
        this.alertMessagesService = alertMessagesService;

        makeObservable(this, {
            sending: observable
        });
    }

    get buttonLabel() {
        return this.sending ? 'Submitting' : 'Submit';
    }
    
    get isValid() {
        // It fires validation in all the inputs and if any is invalid then the whole validation fails;

        let allValid = true;

        Object
            .values(this.form)
            .forEach(input => {
                if (! input.inputRef.validate()) {
                    allValid = false;
                }
            })

        return allValid;
    }

    submit() {
        return new Promise((resolver, reject) => {
            setTimeout(() => {
                if (Math.random() >= .5) {
                    reject();

                    return;
                }
                resolver();
            }, 2000);
        })
    }

    clearForm() {
        Object
            .values(this.form)
            .forEach(input => {
                input.inputRef.clear();
            })
    }

    onSubmit = action("SubmitStarted", () => {
        this.alertMessagesService.hideMessage();

        if (this.isValid) {
            this.sending = true;

            this.submit()
                .then(() => {
                    this.clearForm();

                    this.alertMessagesService.showSuccessMessage('Your contact was sent successfully.');
                })
                .catch(() => {
                    this.alertMessagesService.showErrorMessage('Something went wrong, please try later.');
                })
                .finally(action("SendingFinished", () => {
                    this.sending = false;
                }))
        }
    })
}