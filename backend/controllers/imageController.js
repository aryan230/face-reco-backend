import Image from "../models/imageModel.js";
import asyncHandler from "express-async-handler";

const saveImage = asyncHandler(async (req, res) => {
  console.log(req);
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
    res.status(200);
    res.json({
      something: "something",
    });
  }
});

export { saveImage };
