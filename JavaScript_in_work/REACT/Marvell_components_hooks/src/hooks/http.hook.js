// kastomnie xuki ispolzuut hooki reakta
<<<<<<< HEAD
import { useState, useCallback } from "react";
=======
import { useState, useCallBack } from "react";
>>>>>>> 80c569597 (-ajavascript_in_work)

export const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

<<<<<<< HEAD
    const request = useCallback(async (url, method = 'GET', body = null, headers = { 'Content-Type': 'application/json' }) => {
=======
    const request = useCallBack(async (url, method = 'GET', body = 'null', headers = { 'Content-Type': 'application/json' }) => {
>>>>>>> 80c569597 (-ajavascript_in_work)
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

<<<<<<< HEAD
    const clearError = useCallback(() => {
=======
    const clearError = useCallBack(() => {
>>>>>>> 80c569597 (-ajavascript_in_work)
        setError(null)
    }, []);


    return { loading, request, error, clearError }
}
