import { useContext } from 'react';
import dataContext from './Context';
const InputComponent = () => {

    const context = useContext(dataContext);

    return (
        <input readOnly
            value={context.mail}
            type="email"
            className='form-control'
            placeholder='name@example.com'
            onFocus={context.forceChangeMail}
            />
    )
}

export default InputComponent;