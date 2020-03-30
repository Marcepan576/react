
const express = require('express');

const router = express.Router();

module.exports = ({
    connection,
}) => {

    router.all('/article/:slug', async (req, res) => {

        const slug = req.params.slug;

        await new Promise(res => setTimeout(res, 2000));

        return res.json({
            extra: 'it worked',
            slug,
        })
    });


    router.get('/mysql', async (req, res) => {
    
        const result = await connection.raw(`
            (SELECT CONCAT('row 1, col a: ', NOW()) AS a, CONCAT('row 1, col b: ', NOW()) AS b)
            union
            (SELECT CONCAT('row 2, col a: ', NOW()) AS a, CONCAT('row 2, col b: ', NOW()) AS b)
        `);

        res.json({
            result,
        });
    });

    return router;
}


