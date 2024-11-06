import { useState, PureComponent } from 'react';
import { Container } from 'react-bootstrap';




class Form extends PureComponent {
  render() {
    console.log('render');
    return (
      <Container>
        <form className="w-50 border mt-5 p-3 m-auto">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
            <input value={this.props.mail} type="email" className='form-control' id="exampleFormControlInput1" placeholder="name@example.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
            <textarea value={this.props.text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
        </form>
      </Container>
    )
  }
}

function App() {
  const [data, setData] = useState({
    mail: "name@example.com",
    text: 'some text'
  });

  return (
    <>
      <Form mail={data.mail} text={data.text} />
      <button
        onClick={() => setData({
          mail: "name@example.com",
          text: 'some text'
        })}>
        Click me
      </button>
    </>
  );
}

export default App;
