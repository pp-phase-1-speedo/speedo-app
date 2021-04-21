///testing controller

class Controller {
    static testing (req, res) {
        res.send(req.body)
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