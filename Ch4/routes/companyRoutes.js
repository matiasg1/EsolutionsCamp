const express   = require("express");
const compModel   = require("../models/companyModel");   
const router    = express.Router();

router.post("/companies", async (req, res) => {
    const data = new compModel({
        name: req.body.name    
    });
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    } catch (error) { 
        res.status(500).json({message: error.message});
    }
});

router.get("/companies", async (req, res) => {
    try {
        const data = await compModel.find().populate("companyUsers", "name");
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message: error.message}); 
    }
})

router.get("/companies/:id", async (req, res) => {
    try {
        const data = await compModel.findById(req.params.id).populate("companyUsers", "name");
        res.status(200).json(data);
     } catch (error) {
        res.status(500).json({message: error.message}); 
    }
})

router.put("/companies/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const updateData = req.body;
        const options = { new : true };
        const data = await compModel.findByIdAndUpdate(id, updateData, options);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message: error.message}); 
    }
});

router.delete("/companies/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const data = await compModel.findByIdAndDelete(id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});


module.exports  = router;