import mongoose from "mongoose";
const slidesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  key: {
    type: Number,
    unique: true,
    required: true,
  },
});

const Slides = mongoose.model("Slides", slidesSchema);

export default Slides;
