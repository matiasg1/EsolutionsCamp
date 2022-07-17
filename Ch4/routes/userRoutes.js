const express = require("express");
const newUser = require("../models/userModel");  
const compModel = require("../models/companyModel");   
const router = express.Router();


router.post("/users", async (req, res) => {
    
    const data = new newUser({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email ,
    });
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    } catch (error) { 
        res.status(500).json({message: error.message});
    }
});

router.post('/users/:id', async (req, res) => {
    
    const addUser = new newUser(req.body);
    const company = await compModel.findById(req.params);
    try{
        addUser.compModel = company;
        await addUser.save();
        company.companyUsers.push(addUser);
        await company.save()
       const data = addUser
        res.status(200).json(data);
        ;
    } catch (error) { 
        res.status(500).json({message: error.message});
    }
    
})

router.get("/users", async (req, res) => {
    try {
        const data = await newUser.find().populate("compModel", "name");
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message: error.message}); 
    }
})

router.get("/users/:id", async (req, res) => {
    try {
        const data = await newUser.findById(req.params.id).populate("compModel", "name");;
        res.status(200).json(data);
            
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

router.get("/:id/companies", async (req, res) => {
    try {
        const company = await compModel.findById(req.params).populate("companyUsers", "name");
        res.status(200).json(company);
    } catch (error) {
         res.status(500).json({message: error.message}); 
    }
})

router.put("/users/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const updateData = req.body;
        const options = { new : true };
        const data = await newUser.findByIdAndUpdate(id, updateData, options);
        res.status(200).json(data);
            
    } catch (error) {
        res.status(500).json({message: error.message}) 
    }
});

router.delete("/users/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const data = await newUser.findByIdAndDelete(id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});


module.exports  = router;