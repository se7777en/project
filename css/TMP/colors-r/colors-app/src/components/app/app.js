import Header from '../color-header/color-header';
import HeaderOps from '../color-header-ops/color-header-ops';

import ColorOne from '../color-one/color-one';
 import ColorTwo from '../color-two/color-two';
 import ColorThree from '../color-three/color-three';
 import ColorFour from '../color-four/color-four';
 import ColorFive from '../color-five/color-five';

function App() {
    return (
        <div className="wrapper">
            <Header />
            <HeaderOps />

            <div className="main">
                <ColorOne />
                <ColorTwo />
                <ColorThree />
                <ColorFour />
                <ColorFive />
            </div>
        </div>
    );
}

export default App;