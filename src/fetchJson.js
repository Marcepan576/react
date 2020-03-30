
const reg = /^https?:\/\//;

export default async (url, options = {}) => {

    const port = window.location.port;

    if ( ! reg.test(url) && port === '3000') {

        url = 'http://localhost:8080' + url;

        // options.mode = 'cors';
    }

    options.headers = {
        "Content-Type": 'application/json; charset=utf-8',
        ...options.headers
    };

    if (typeof options.body !== 'string') {

        options.body = JSON.stringify(options.body || {}, null, 4);
    }

    options.method = options.method || 'POST';

    // console.log({
    //     url,
    //     options,
    // })

    const {
        delay,
        ...rest
    } = options;

    options = rest;

    const res = await fetch(url, options);

    if (Number.isInteger(delay) && delay > 0) {

        await new Promise(res => setTimeout(res, delay));
    }

    return res.json();
}