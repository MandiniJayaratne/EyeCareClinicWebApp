import express from "express";
import { Consultation } from "../models/consultationModel.js";

const router = express.Router();

//Route to save a new consultation

router.post("/", async (req, res) => {
  try {
    if (
      !req.body.consultationDate ||
      !req.body.consultationText ||
      !req.body.testDetails
    ) {
      return res.status(400).send({
        message: "Please send all required fields",
      });
    }

    req.body.consultationDate = new Date(req.body.consultationDate);

    const newConsultation = {
      consultationDate: req.body.consultationDate,
      consultationText: req.body.consultationText,
      testDetails: req.body.testDetails,
    };

    const consultation = await Consultation.create(newConsultation);
    return res.status(201).send(consultation);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//Route to get all consultations from the database

router.get("/", async (req, res) => {
  try {
    const consultations = await Consultation.find({});
    return res.status(200).json({
      count: consultations.length,
      data: consultations,
    }); //sending the found JSON objects to client
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//Route to get one consultation from the database

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const consultations = await Consultation.findById(id);

    return res.status(200).json(consultations);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//Route to update a consultation

router.put("/:id", async (req, res) => {
  try {
    if (
      !req.body.consultationDate ||
      !req.body.consultationText ||
      !req.body.testDetails
    ) {
      return res.status(400).send({
        message: "Please send all required fields",
      });
    }

    const { id } = req.params;

    req.body.consultationDate = new Date(req.body.consultationDate);

    const result = await Consultation.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).json({ message: "Consultation not found" });
    }

    return res
      .status(200)
      .send({ message: "Consultation updated successfully" });
  } catch (error) {
    console.log(error);
  }
});

//Route to delete a consultation

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Consultation.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: "Consultation not found" });
    }

    return res
      .status(200)
      .send({ message: "Consultation deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;
