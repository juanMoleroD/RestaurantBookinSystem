class Request {

    async get(url) {
        const response = await fetch(url);
        return response.json();
    }

    post(url, payload) {
        return fetch(url, {
            method: "POST",
            headers: {"Content-type": "application/json" },
            body: JSON.stringify(payload)
        });
    }

}

export default Request;