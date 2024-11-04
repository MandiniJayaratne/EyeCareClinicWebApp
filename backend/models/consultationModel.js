import mongoose from "mongoose";

const consultationSchema = mongoose.Schema(
  {
    consultationDate: {
      type: Date,
      required: true,
    },
    consultationText: {
      type: String,
      required: true,
    },
    testDetails: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Consultation = mongoose.model("Consultation", consultationSchema);
