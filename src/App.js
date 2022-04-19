import { observer } from 'mobx-react-lite';
import './App.css';
import FormInput from './components/FormInput/FormInput';
import SubmitButton from './components/SubmitButton/SubmitButton';
import Toast from './components/Toast/Toast';
import useAppPresenter from './presenters/App/useAppPresenter';

function App() {
  const presenter = useAppPresenter();

  return presenter && (
    <div className='container'>
      <Toast />
      
      <div className='container--inline'>
        <FormInput 
          {...presenter.form.firstName}
          className='formInput__input--separated'
        />

        <FormInput 
          {...presenter.form.lastName}
        />
      </div>

      <FormInput 
        {...presenter.form.email}
      />
      <FormInput 
        {...presenter.form.imageLink}
      />

      <SubmitButton
        label={presenter.buttonLabel}
        sending={presenter.sending}
        onSubmit={presenter.onSubmit}
      />
    </div>
  );
}

export default observer(App);
