import { Router } from "express";
import { SettingsAccountController } from "../controllers/upload";
import upload from "../middleware/upload";
import { validateToken } from "../middleware/validate-token";
import { EventController } from "../controllers/event";

export const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.post(
  "/events/image/upload",
  [validateToken, upload.single("image")],
  new EventController().uploadImage
);

router.post(
  "/settings/account/image/upload",
  [validateToken, upload.single("image_profile")],
  new SettingsAccountController().uploadImage
);

router.post(
  "/settings/account/image/delete",
  validateToken,
  new SettingsAccountController().deleteImage
);
