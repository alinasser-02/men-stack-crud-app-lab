const express = require("express");
const router = express.Router();
const Food = require("../models/food");

router.get("/", async (req, res) => {
  const allFood = await Food.find();

  res.render("foods/index.ejs", { allFood: allFood });
});

// render /new
router.get("/new", (req, res) => {
  res.render("foods/new.ejs");
});

// Post data 
router.post("/", async (req, res) => {
    await Food.create(req.body);
  res.redirect("foods/new");
});


// show a food
router.get("/:foodId", async (req, res) => {
  const foundFood = await Food.findById(req.params.foodId);
  res.render("foods/show.ejs", { foundFood: foundFood });
});

router.delete("/:foodId", async (req, res) => {
  await Food.findByIdAndDelete(req.params.foodId);
  res.redirect("/foods");
});


router.get("/:foodId/edit", async (req, res) => {
   const foundFood = await Food.findById(req.params.foodId);
  res.render("foods/edit.ejs", {foundFood:foundFood});
});

// sumbit food(form)
router.put('/:foodId', async (req,res)=>{
   await Food.findByIdAndUpdate(req.params.foodId, req.body)
   res.redirect(`/foods/${req.params.foodId}`)
});

module.exports = router;