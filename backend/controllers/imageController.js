import Image from "../models/imageModel.js";
import asyncHandler from "express-async-handler";

const saveImage = asyncHandler(async (req, res) => {
  const { image } = req.body;

  const setImage = await Image.create({
    image,
  });

  if (setImage) {
    res.status(201);
    res.json({
      image,
    });
  } else {
    res.status(400);
    throw new Error("Invalid data");
  }
});

export { saveImage };
