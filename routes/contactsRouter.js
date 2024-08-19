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
import validateBody from "../helpers/validateBody.js";

const updateContactStatusValidation = validateBody(updateContactStatusSchema);
const updateContactValidation = validateBody(updateContactSchema);
const createContactValidation = validateBody(createContactSchema);

const contactsRouter = express.Router();

contactsRouter.get("/", getAllContacts);

contactsRouter.get("/:id", isValidId, getOneContact);

contactsRouter.delete("/:id", isValidId, deleteContact);

contactsRouter.post("/", createContactValidation, createContact);

contactsRouter.put("/:id", isValidId, updateContactValidation, updateContact);

contactsRouter.patch(
  "/:id/favorite",
  isValidId,
  updateContactStatusValidation,
  updateStatusContact
);

export default contactsRouter;

validateBody(updateContactStatusSchema);
