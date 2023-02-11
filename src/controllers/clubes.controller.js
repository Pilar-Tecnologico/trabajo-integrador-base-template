const clubConfig = require('config').get('services.clubes');
const { getClubesService, 
    getByIdService, 
    saveClubService, 
    deleteClubService,
    uploadImageService 
} = require('../services/clubes.service');

//GET clubes
async function getClubes(req, res, next){
    try {
        const response = await getClubesService();
        res.json(response);

    } catch (error) {
        next(error);
    }
}

//GET by id
async function getById(req, res, next){
    try {
        const {id} = req.params;
        const response = await getByIdService(id);
        res.json(response);

    } catch (error) {
        next(error);
    }
}

//POST
async function postClub(req, res, next){
    try {
        const response = req.body;
        const club = await saveClubService(response);
        res.json(club); 

    } catch (error) {
        next(error);
    }
}

//DELETE
async function deleteClub(req, res, next){
    try {
        const {id} = req.params;
        const response = await deleteClubService(id);
        res.json(response);

    } catch (error) {
        next(error);
    }
}

//UPLOAD image
async function uploadImage(req, res, next){
    try {
        const response = await uploadImageService();
        res.json(response);
    } catch (error) {
        next(error);
    }
}


module.exports = {
    getClubes, getById, postClub, deleteClub, uploadImage
}