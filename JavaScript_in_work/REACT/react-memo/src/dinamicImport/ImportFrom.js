import React from 'react';

function App() {

    console.log('OK');

    // dinamicheski import
    const importedFunc = () => {
        import('./someFunc').then(obj => obj.logger()).catch();
    }

    const importedFunc1 = () => {
        import('./someFunc').then(obj => obj.default());
    }

    const importedFunc2 = async () => {
        const { logger,logger2 } = await import('./someFunc');
        logger();
        logger2();
    }


    return (
        <>
            <h1 className="title">Dimamic import</h1>
            <button onClick={importedFunc}>Click</button>
            <button onClick={importedFunc1}>Click1</button>
            <button onClick={importedFunc2}>click2</button>
        </>
    );
}

export default App;