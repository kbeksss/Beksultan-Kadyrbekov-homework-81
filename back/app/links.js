const express = require('express');
const nanoid = require('nanoid');
const router = express.Router();


const Link = require('../models/Link');

router.post('/links', async (req, res) => {
    const linkData = req.body;

    linkData.shortLink = nanoid(6);

    try{
        const link = new Link(linkData);
        await link.save();
        res.send(linkData.shortLink);
    } catch(e) {
        res.status(400).send(e);
    }
});

router.get('/:shortLink', async (req, res) => {
    try{
        const originalLink = await Link.findOne({shortLink: req.params.shortLink});
        res.status(301).redirect(originalLink.link);
    } catch(e) {
        res.status(404).send(e);
    }

});


module.exports = router;
