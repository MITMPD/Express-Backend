const router  = require('express').Router();
const { $where } = require('../models/Mpd');
let Mpd  = require('../models/Mpd');

router.route('/').get((req,res) =>{
    Mpd.find()
    .then(plant => res.json(plant))
    .catch(err => res.status(400).json('Error'+err));
});

router.route('/Search/commonName/:Common_Name').get((req,res) =>{
    Mpd.find({Common_Name: req.params.Common_Name})
    .then(plant => res.json(plant))
    .catch(err => res.status(400).json('Error'+err));
});
router.route('/Search/compound/:Name_of_small_molecule_or_Compound').get((req,res) =>{
    Mpd.find({Name_of_small_molecule_or_Compound: req.params.Name_of_small_molecule_or_Compound})
    .then(plant => res.json(plant))
    .catch(err => res.status(400).json('Error'+err));
});
router.route('/Search/targetgene/:Gene_Name').get((req,res) =>{
    Mpd.find({Gene_Name: req.params.Gene_Name})
    .then(plant => res.json(plant))
    .catch(err => res.status(400).json('Error'+err));
});
router.route('/Search/targetprotein/:Protein_Name').get((req,res) =>{
    Mpd.find({Protein_Name: req.params.Protein_Name})
    .then(plant => res.json(plant))
    .catch(err => res.status(400).json('Error'+err));
});
router.route('/Search/therapeuticEffect/:Therapeutic').get((req,res) =>{
    Mpd.find({Therapeutic: req.params.Therapeutic})
    .then(plant => res.json(plant))
    .catch(err => res.status(400).json('Error'+err));
 });

router.route('/mol3Dview/:mname').get((req,res) =>{
   let molname  = req.params.mname;
   let  url  = "http://chemapps.stolaf.edu/jmol/jmol.php?model="+molname+"&inline";

    res.render('mol',{molname,url})
});


router.route('/add').post((req,res)=> {
    const Similar_Compounds  = req.body.Similar_Compounds;

    const newData = new Mpd({
        Similar_Compounds
    });

    newData.save()
    .then(()=>res.json('Added new plant'))
    .catch(err => res.status(400).json("error" +err));
})

module.exports = router;