
import React, { useState, useEffect } from 'react';

import fetchJson from './fetchJson';

export default (props = {}) => {

    const {
        match = {},
    } = props;

    const {
        params = {},
    } = match;

    const {
        slug,
    } = params;

    const [ article, setArticle ] = useState(false);

    useEffect(() => {

        (async function () {

            const json = await fetchJson('/api/article/' + slug, {
                delay: 5000,
            });

            setArticle(json);

        }());
    }, []);

    if (article === false) {

        return <div>
            Article loading...
        </div>
    }

    return (
        <div>Loaded :)
            <pre>{JSON.stringify(article, null, 4)}</pre>
        </div>
    );
}