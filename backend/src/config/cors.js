module.exports = function(req, res,next){
    res.header('Acess-Control-Allow-Origin','*')
    res.header('Acess-Control-Allow-Methods', 'GET,POST, OPTIONS, PATCH,PUT,DELETE')
    res.header('Acess-Control-Allow-Headers', 'Origin, X-Requested-Width, Content-type, Accept')
    next()
}