import { observer } from "mobx-react-lite";
import useToastPresenter from "../../presenters/Toast/useToastPresenter";
import './Toast.css';

const Toast = () => {
    const presenter = useToastPresenter();

    if (presenter && ! presenter.currentAlert) {
        return <></>
    }

    return presenter && (
        <div className={`toast toast--${presenter.type} ${presenter.closing ? 'toast--closing' : ''}`}>
            <div className="toast__container">
                <span>{presenter.message}</span>

                <button className="toast__close-button" onClick={presenter.onClose}>X</button>
            </div>
        </div>
    )
}

export default observer(Toast);