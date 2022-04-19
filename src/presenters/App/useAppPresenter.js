import { useEffect, useState } from "react"
import AlertMessagesService from "../../services/AlertMessagesService";
import AppPresenter from "./AppPresenter";

const useAppPresenter = () => {
    const [ presenterInstance, setPresenterInstance ] = useState( null );

    useEffect(() => {
        const alertMessagesService = AlertMessagesService.shared();

        const presenter = new AppPresenter({
            alertMessagesService
        });

        setPresenterInstance(presenter);
    }, []);

    return presenterInstance;
}

export default useAppPresenter;