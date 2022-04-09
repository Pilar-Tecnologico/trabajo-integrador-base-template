const axios = require('axios').default;
const config = require('config');
const {hostname, apikey} = config.get('services.nasa');

async function getManifest(req, res){
    //COMPLETE WITH YOUR CODE
};

module.exports = {getManifest};