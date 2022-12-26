const postData = async (url, data) => {
    const res = await fetch(url, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });

    return await res.json();
};


//const GetResource = async (url) => 
async function GetResource(url){
    const res = await fetch(url);

    if (!res.ok) { // u fetcha est OK - eto esli vse normalno i status - poluchaem status
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
}

export {postData};
export {GetResource};