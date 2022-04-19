import { observer } from 'mobx-react-lite';
import React, { useImperativeHandle } from 'react';
import useFormInputPresenter from '../../presenters/FormInput/useFormInputPresenter';
import './FormInput.css';

const FormInput = React.forwardRef(({ 
    label,
    className, 
    placeholder,
    type,
    required
}, ref) => {
    const presenter = useFormInputPresenter({ type, required });

    useImperativeHandle(ref, () => ({
        value: () => presenter.value,
        clear: () => presenter.clear(),
        validate: () => presenter.validate()
    }))
    
    return presenter && (
        <div className={`formInput ${className}`}>
            <label className='formInput__label'>{label} {required && (<span className='formInput__required-mark'>*</span>)}</label>
            <input
                ref={ref}
                onChange={presenter.onChange}
                onBlur={presenter.onBlur}
                className={`formInput__input ${presenter.error ? 'formInput__input--error' : ''}`}
                placeholder={placeholder}
                value={presenter.value}
            />
            {presenter.error && (
                <span className='formInput__error'>{presenter.error}</span>
            )}
        </div>
    )
})

export default observer(FormInput);