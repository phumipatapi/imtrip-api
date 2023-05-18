const express = require("express");
const router = express.Router();

const multer = require("multer");
const admin = require("firebase-admin");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      res.status(400).json({ error: "No file uploaded" });
      return;
    }

    // Upload the file to Firebase Storage
    const bucket = admin.storage().bucket();
    const fileName = `${Date.now()}_${file.originalname}`;
    const fileRef = bucket.file(fileName);
    const fileStream = fileRef.createWriteStream();

    fileStream.on("error", (error) => {
      console.error("Error uploading file to Firebase Storage:", error);
      res.status(500).json({ error: "File upload failed" });
    });

    fileStream.on("finish", () => {
      // File upload successful
      // Get the public URL of the uploaded file
      const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${fileRef.name}?alt=media`;

      res
        .status(200)
        .json({ message: "File uploaded successfully", imageUrl: publicUrl });
    });

    fileStream.end(file.buffer);
  } catch (error) {
    console.error("Error uploading file:", error);
    res.status(500).json({ error: "File upload failed" });
  }
});

module.exports = router;
