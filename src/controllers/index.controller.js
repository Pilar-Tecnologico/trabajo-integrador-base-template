async function getIndex(req, res, next){
    res.json({
        msj: "Este es el indexController"
      });
}

module.exports = {
    getIndex
}