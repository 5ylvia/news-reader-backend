const router = require("express").Router();
const User = require("../models/Users");


router.param("id", (req, res, next, id) => {
    User.findById(id).then((user) => {
        if (!user) {
            res.status(404).send("User not found");
        } else {
             req.user = user;
             return next();
        }
    }).catch(next);
})

router.get("/", (req, res, next) => {
    User.find({})
    .sort({ createdAt: "desc" })
    .then((users) => { 
        return res.status(200).send(users)
    }).catch(next);
})

router.get("/:id", (req, res, next) => {
    const id = req.params.id;
    console.log(`get request for user ${id} received...`)
})


// // The specific endpoint need to be top
// router.get("/fixed-parameter", (req, res, next) => {
//     console.log("Fixed parameter endpoing reached, but gonna do anything. Next");
//     next();
// })

// router.get("/:thing", (req, res, next) => {
//     res.send(req.params.thing)
// })

// router.get("/:thingOne/:thingTwo", (req, res, next) => {
//     res.send({
//         thing_one: req.params.thingOne,
//         thing_two: req.params.thingTwo,
//     })
// })

module.exports = router