///testing controller

class Controller {
    static profilUser (req, res) {
        res.render('halamanUser')
    }
    static add (req, res) {
        res.send(req.body)
    }
    static addHandler (req, res) {
        res.send(req.body)
    }
    static edit (req, res) {
        res.send(req.body)
    }
    static editHandler (req, res) {
        res.send(req.body)
    }
    static delete (req, res) {
        res.send(req.body)
    }
}

module.exports = Controller