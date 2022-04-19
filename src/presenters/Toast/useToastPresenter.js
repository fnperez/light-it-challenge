import { useEffect, useState } from "react"
import AlertMessagesService from "../../services/AlertMessagesService";
import ToastPresenter from "./ToastPresenter";

const useToastPresenter = () => {
    const [ presenterInstance, setPresenterInstance ] = useState(null);

    useEffect(() => {
        const alertMessagesService = AlertMessagesService.shared();

        const presenter = new ToastPresenter({
            alertMessagesService
        });

        setPresenterInstance(presenter);
    }, [])

    return presenterInstance;
}

export default useToastPresenter;