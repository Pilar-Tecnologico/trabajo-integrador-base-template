const Club = require("./models/clubes.model");
const validator = require("validator");
const multer = require('multer');

//GET clubes
async function getClubesService(){
    try {
        const response = await Club.find({}).exec();
        return {
            data: response,
            status: "success"
        }

    } catch (error) {
        return (
            console.error(error)
        )
    }
}

//GET by id
async function getByIdService(id){
    try {
        const idClub = await Club.findById(id);
        return idClub;

    } catch (error) {
        return (
            console.error(error)
        )
    }
}

//POST club
async function saveClubService(data){
    try {
        const club = new Club(data);

        const valid_name = !validator.isEmpty(data.name);
        const valid_rating = !validator.isEmpty(data.rating);
        const valid_image = !validator.isEmpty(data.image);
        const valid_coordinates = !validator.isEmpty(data.coordinates);

        if(!valid_image || !valid_name || !valid_rating || !valid_coordinates){
            throw new Error("No se pueden validar datos");
        }

        club.save((error, saveData) =>{
            if(error || !saveData){
                console.log("No se puede GUARDAR datos");
            }else{
                console.log("Se GUARDO correctamente el dato");
            }
        });

        return club;

    } catch (error) {
        return res.status(400).json({
            status: "error",
            mesaje: "Faltan datos para validar"
        });
    }
}

//DELETE club
async function deleteClubService(id){
    try {
        const idClub = await Club.findOneAndDelete({_id: id});
        console.log("Se BORRO correctamente el dato");

        return {
            data: idClub,
            status: "success"
        }
    } catch (error) {
        return (
            console.error(error)
        )
    }
}

//UPLOAD image
//storage route
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './images/articles');
    },

    filename: (req, file, cb) => {
        cb(null, "article" + file.originalname);
    }
});

const upload = multer({storage: storage});

//upload
async function uploadImageService(){
    try {
        
        return "UPLOAD SUCCES";

    } catch (error) {
        return res.status(400).json({
            status: "error",
            mesaje: "Faltan datos para validar"
        });
    }
}

module.exports = {
    getClubesService, getByIdService, saveClubService, deleteClubService, uploadImageService, upload
}