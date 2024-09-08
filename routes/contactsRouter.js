import express from "express";
import {
  getAllContacts,
  getOneContact,
  deleteContact,
  createContact,
  updateContact,
  updateContactStatus,
} from "../controllers/contactsControllers.js";
import {
  createContactSchema,
  updateContactSchema,
  updateContactStatusSchema,
} from "../schemas/contactsSchemas.js";

import isValidId from "../middlewares/isValidId.js";
import validateBody from "../helpers/validateBody.js";

import authenticate from "../middlewares/authenticate.js";
import upload from "../middlewares/upload.js";

const updateContactStatusValidation = validateBody(updateContactStatusSchema);
const updateContactValidation = validateBody(updateContactSchema);
const createContactValidation = validateBody(createContactSchema);

const contactsRouter = express.Router();

contactsRouter.use(authenticate);

contactsRouter.get("/", getAllContacts);

contactsRouter.get("/:id", isValidId, getOneContact);

contactsRouter.delete("/:id", isValidId, deleteContact);

// upload.fields([{name: "avatarURL", maxCount: 1}])
// upload.array("avatarURL", 8);
contactsRouter.post(
  "/",
  upload.single("avatarURL"),
  createContactValidation,
  createContact
);

contactsRouter.put("/:id", isValidId, updateContactValidation, updateContact);

contactsRouter.patch(
  "/:id/favorite",
  isValidId,
  updateContactStatusValidation,
  updateContactStatus
);

export default contactsRouter;

validateBody(updateContactStatusSchema);
