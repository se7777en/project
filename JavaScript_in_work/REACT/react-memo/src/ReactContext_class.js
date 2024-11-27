import { useState, Component, createContext } from 'react';
import { Container } from 'react-bootstrap';


const dataContext = createContext({
    mail: 'name@example.com',
    text: 'some text'
});

const { Provider } = dataContext;


const Form = (props) => {
    console.log('render1');
    return (
        <Container>
            <form className="w-50 border mt-5 p-3 m-auto">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
                    <InputComponent />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea readOnly value={props.text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </form>
        </Container>
    )
}

class InputComponent extends Component {
    static contextType = dataContext;
    render() {
        return (
            // <Consumer>
            //     {
            //         value => {
            //             return (
            //                 <input readOnly 
            //                 value={value.mail} 
            //                 type="email" 
            //                 className='form-control' 
            //                 placeholder='name@example.com' />
            //             )
            //         }
            //     }
            // </Consumer>


            <input readOnly
                value={this.context.mail}
                type="email"
                className='form-control'
                placeholder='name@example.com' />
        )
    }
}






function App() {
    const [data, setData] = useState({
        mail: 'name@example.com',
        text: 'some text'
    });

    return (
        <Provider value={data}>
            <Form text={data.text} />
            <button
                onClick={() => setData({
                    mail: 'second@example.com',
                    text: 'some text1'
                })}>
                Click me
            </button>
        </Provider>
    );
}

export default App;
