import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
// import './App.css';


// const f = (a) => {
//     return (b) => {
//         console.log(a + b);
//     }
// }

// f(5)(2);
////////////////////////////

// const f = (a) => {
//     return class exdends Component {
//         render() {
//             return <h1>Hellow</h1>
//         }
//     }
// }  HOC komponent visshego poryadka hi order component HOC (Higher-Order Component) 
////////////////////////////////////////

const withSlider = (BaseComponent, getData) => {  // prixodit component i funkciya i nachinaetsya hook s with
    // v komponent BaseComponent peredaetsya logika iz HOC 
    return (props) => {
        const [slide, setSlide] = useState(0);
        const [autoplay, setAutoplay] = useState(false)

        useEffect(() => {
            setSlide(getData());
        }, [])

        function changeSlide(i) {
            setSlide(slide => slide + i);
        }

        return <BaseComponent
            {...props}
            slide={slide}
            changeSlide={changeSlide}
            autoplay={autoplay}
            setAutoplay={setAutoplay}
        />
    }
}



const getDataFromFirstFetch = () => { return 10 }; 
const getDataFromSecondFetch = () => { return 20 };

const SliderFirst = (props) => {
    console.log(props.name); // mojno perezat props zashet operatora spread v HOC
    return (
        <Container>
            <div className="slider w-50 m-auto">
                <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
                <div className="text-center mt-5">Active slide {props.slide}</div>
                <div className="buttons mt-3">
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => props.changeSlide(-1)}>-1</button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => props.changeSlide(1)}>+1</button>
                </div>
            </div>
        </Container>
    )
}

const SliderSecond = (props) => {
    return (
        <Container>
            <div className="slider w-50 m-auto">
                <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
                <div className="text-center mt-5">Active slide {props.slide} <br />{props.autoplay ? 'auto' : null} </div>
                <div className="buttons mt-3">
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => props.changeSlide(-1)}>-1</button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => props.changeSlide(1)}>+1</button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => props.setAutoplay(autoplay => !props.autoplay)}>toggle autoplay</button>
                </div>
            </div>
        </Container>
    )
}

const SliderWithFirstFetch = withSlider(SliderFirst, getDataFromFirstFetch);
const SliderWithSecondFetch = withSlider(SliderSecond, getDataFromSecondFetch);



///////////////////////////////////////////////////////////////////////////////////////////////
// dobavlyaem k hellow dopolnitelnoe povedenie ne trogaya ego vnutrenosti sdes toje
// ponadobyatsya komponenti visshego poryadka HOC

const withLogger = WrappedComponet => props => {
    useEffect(() => {
        console.log('first render');
    }, [])
    return <WrappedComponet {...props} />
}

const Hello = ({ text }) => {
    // console.log(text);
    return (
        <h1>Hellow</h1>
    )
}

const HellowWithLogger = withLogger(Hello);
///////////////////////////////////////////////////////////////////////////////////////////////



function App() {
    return (
        <>
            <HellowWithLogger /> {/* v nego toje mojno peredavat propsi kotorie doidut do komponenta Hellow */}
            <SliderWithFirstFetch name={'name'} />
            <SliderWithSecondFetch />
        </>
    );
}

export default App;

// vinosim chast logiki komponenta no i dobovlyat kakuuto dopolnitelnuu logiku
// chem bolshe propsov net smisla ispolzovat komponent visshego poryadka
// esli mojno vinesti logiku s neskolkix komponentov i ispolzovat dlya kajdogo komponenta to mojno