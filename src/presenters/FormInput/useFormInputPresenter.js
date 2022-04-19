import { useEffect, useState } from "react"
import FormInputPresenter from "./FormInputPresenter";
import { validator as validatorHelper } from "../../helpers/validators";

const useFormInputPresenter = ({ required, type }) => {
    const [presenterInstance, setPresenterInstance] = useState(null);

    useEffect(() => {
        const validator = validatorHelper({ required, type });

        const presenter = new FormInputPresenter({ validator });

        setPresenterInstance(presenter);
    }, [ required, type ]);

    return presenterInstance;
}

export default useFormInputPresenter;