import React, { Suspense } from 'react';

// Динамический импорт компонента
const LazyComponent = React.lazy(() => import('./LazyComp'));

// zagrujaem komponent kogda eto nujno a esli ne zagruzilsya vivodim Загрузка...

function App() {
  return (
    <div>
      <h1>Пример ленивой загрузки</h1>
      <Suspense fallback={<div>Загрузка...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default App;