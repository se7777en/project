// kastomnie xuki ispolzuut hooki reakta
import { useState, useCallBack } from "react";

export const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = useCallBack(async (url, method = 'GET', body = 'null', headers = { 'Content-Type': 'application/json' }) => {
        setLoading(true);

        try {
            const responce = await fetch(url, { method, body, headers });

            if (!responce.ok) {
                throw new Error(`Could not fetch ${url}, status: ${responce.status}`);
            }

            const data = await responce.json();
            setLoading(false);
            return data;

        } catch (e) {
            setLoading(false);
            setError(e.message);
            throw e;
        }

    }, []);

    const clearError = useCallBack(() => {
        setError(null)
    }, []);


    return { loading, request, error, clearError }
}
