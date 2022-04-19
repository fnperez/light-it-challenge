import { makeAutoObservable } from 'mobx';

let sharedInstance;

const ALERT_TYPE_ERROR = 'error';
const ALERT_TYPE_SUCCESS = 'success';

export default class AlertMessagesService {
	constructor() {
		this.currentAlert = null;

		makeAutoObservable( this );
	}

	static shared = () => {
		if ( sharedInstance ) { return sharedInstance; }

		sharedInstance = new AlertMessagesService();
		return sharedInstance;
	}

	showMessage = ( {
		type, message, autoHideIn = null
	} ) => {
		this.currentAlert = { type, message };

		if ( autoHideIn ) {
			setTimeout( this.hideMessage, autoHideIn );
		}
	}

	showSuccessMessage = message => this.showMessage( {
		type: ALERT_TYPE_SUCCESS, message
	} )

	showErrorMessage = message => this.showMessage( {
		type: ALERT_TYPE_ERROR, message
	} )

	hideMessage = () => {
		this.currentAlert = null;
	}
}
