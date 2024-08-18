import express from "express";
import {
  getAllContacts,
  getOneContact,
  deleteContact,
  createContact,
  updateContact,
  updateStatusContact,
} from "../controllers/contactsControllers.js";

import isValidId from "../middlewares/isValidId.js";

const updateContactStatusValidation = validateBody(updateContactStatusSchema);

const contactsRouter = express.Router();

contactsRouter.get("/", getAllContacts);

contactsRouter.get("/:id", isValidId, getOneContact);

contactsRouter.delete("/:id", isValidId, deleteContact);

contactsRouter.post("/", createContact);

contactsRouter.put("/:id", isValidId, updateContact);

contactsRouter.patch(
  "/:id/favorite",
  isValidId,
  updateContactStatusValidation,
  updateStatusContact
);

export default contactsRouter;

validateBody(updateContactStatusSchema);
