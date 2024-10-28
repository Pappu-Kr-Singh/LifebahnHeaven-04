// import { v2 as cloudinary } from "cloudinary";
// import fs from "fs";

// // Configuration
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// const uploadOnCloudinary = async (LocalFilePath) => {
//   try {
//     if (!LocalFilePath) return null;
//     // upload the file on cloudinary
//     const responce = await cloudinary.uploader.upload(LocalFilePath, {
//       resource_type: "auto",
//     });

//     // file has been uploaded succesfully
//     // console.log("The file is uploaded on cloudinary", responce.url)

//     fs.unlinkSync(LocalFilePath);
//     return responce;
//   } catch (error) {
//     console.log("Error uploading to cloudinary", error);
//     fs.unlinkSync(LocalFilePath); // remove the locally saved temporary file as the upload operation got failed
//     return null;
//   }
// };

// const deleteFromCloudinary = async (imageUrl) => {
//   try {
//     // Extract the public ID from the URL
//     const publicId = imageUrl.split("/").pop().split(".")[0];

//     const result = await cloudinary.uploader.destroy(publicId);

//     if (result.result !== "ok") {
//       throw new Error("Failed to delete image from Cloudinary");
//     }
//     // console.log("file has been deleted from cloudinary", result);
//   } catch (error) {
//     console.error("Error deleting image from Cloudinary:", error);
//     throw new Error("Error deleting image from Cloudinary");
//   }
// };

// export { uploadOnCloudinary, deleteFromCloudinary };

// import { v2 as cloudinary } from "cloudinary";
// import fs from "fs";
// import path from "path";

// // Configuration
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// const uploadOnCloudinary = async (localFilePath) => {
//   try {
//     if (!localFilePath) return null;

//     const response = await cloudinary.uploader.upload(localFilePath, {
//       resource_type: "auto",
//     });

//     // File uploaded successfully, delete the local file
//     fs.unlinkSync(localFilePath);
//     return response;
//   } catch (error) {
//     console.error("Error uploading to Cloudinary:", error);
//     if (fs.existsSync(localFilePath)) {
//       fs.unlinkSync(localFilePath); // Clean up temporary file
//     }
//     return null;
//   }
// };

// const deleteFromCloudinary = async (imageUrl) => {
//   try {
//     const publicId = imageUrl.split("/").pop().split(".")[0];
//     const result = await cloudinary.uploader.destroy(publicId);

//     if (result.result !== "ok") {
//       throw new Error("Failed to delete image from Cloudinary");
//     }
//   } catch (error) {
//     console.error("Error deleting image from Cloudinary:", error);
//     throw new Error("Error deleting image from Cloudinary");
//   }
// };

// export { uploadOnCloudinary, deleteFromCloudinary };

// import multer from "multer";
// import { CloudinaryStorage } from "multer-storage-cloudinary";
// import { v2 as cloudinary } from "cloudinary";
// import dotenv from "dotenv";

// // Load environment variables
// dotenv.config();

// // Configure Cloudinary
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// // Define Cloudinary storage strategy for multer
// const storage = new CloudinaryStorage({
//   cloudinary,
//   params: {
//     folder: "uploads",
//     allowed_formats: ["jpeg", "png", "gif"],
//     resource_type: "auto",
//   },
// });

// // Configure multer with Cloudinary storage
// export const upload = multer({
//   storage,
//   limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5 MB
// });

// cloudinary.js

import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Define Cloudinary storage strategy for multer
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "uploads",
    allowed_formats: ["jpeg", "png", "gif"],
    resource_type: "auto",
  },
});

// Export multer upload instance
export const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5 MB
});
