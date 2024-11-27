import { useState, useEffect } from 'react';
function useFetch(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then(setData)
            .catch(setError);
    }, [url]);

    return { data, error };
}


function MyComponent() {
    const { data, error } = useFetch('https://api.example.com/data');
    if (error) return <div>Error</div>;
    return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
}

export default MyComponent;


// Что это? Это функции, которые используют встроенные хуки React (например, useState, useEffect) и возвращают значения или функции.
// Как работают? Логику извлекают в отдельный хук, чтобы она могла быть вызвана внутри функциональных компонентов.