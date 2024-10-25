// kastomnie xuki ispolzuut hooki reakta
<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useCallback } from "react";
=======
import { useState, useCallBack } from "react";
>>>>>>> 80c569597 (-ajavascript_in_work)
=======
import { useState, useCallback } from "react";
>>>>>>> 9e18b2bd5 (-acastom__hooks)

export const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

<<<<<<< HEAD
<<<<<<< HEAD
    const request = useCallback(async (url, method = 'GET', body = null, headers = { 'Content-Type': 'application/json' }) => {
=======
    const request = useCallBack(async (url, method = 'GET', body = 'null', headers = { 'Content-Type': 'application/json' }) => {
>>>>>>> 80c569597 (-ajavascript_in_work)
=======
    const request = useCallback(async (url, method = 'GET', body = null, headers = { 'Content-Type': 'application/json' }) => {
>>>>>>> 9e18b2bd5 (-acastom__hooks)
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
<<<<<<< HEAD
    const clearError = useCallback(() => {
=======
    const clearError = useCallBack(() => {
>>>>>>> 80c569597 (-ajavascript_in_work)
=======
    const clearError = useCallback(() => {
>>>>>>> 9e18b2bd5 (-acastom__hooks)
        setError(null)
    }, []);


    return { loading, request, error, clearError }
}
