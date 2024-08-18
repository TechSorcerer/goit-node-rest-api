import * as contactsService from "../services/contactsServices.js";
import HttpError from "../helpers/HttpError.js";
import {
  createContactSchema,
  updateContactSchema,
  updateContactStatusSchema,
} from "../schemas/contactsSchemas.js";
import validateBody from "../helpers/validateBody.js";

export const getAllContacts = async (_, res, next) => {
  try {
    const result = await contactsService.listContacts();

    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const getOneContact = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await contactsService.getContactById(id);

    if (!result) {
      throw HttpError(404, `Contact with id=${id} not found`);
    }

    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const deleteContact = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await contactsService.removeContact(id);

    if (!result) {
      throw HttpError(404, `Contact with id=${id} not found`);
    }

    res.json({
      message: "Delete success",
    });
  } catch (error) {
    next(error);
  }
};

export const createContact = async (req, res, next) => {
  try {
    validateBody(createContactSchema);

    const result = await contactsService.addContact(req.body);

    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

export const updateContact = async (req, res, next) => {
  try {
    validateBody(updateContactSchema);

    const { id } = req.params;

    const result = await contactsService.updateContactById(id, req.body);

    if (!result) {
      throw HttpError(404, `Contact with id=${id} not found`);
    }

    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const updateStatusContact = async (req, res, next) => {
  try {
    validateBody(updateContactStatusSchema);

    const { id } = req.params;
    const data = req.body;

    if (!("favorite" in data))
      throw HttpError(400, "Body must contain key: favorite");

    const result = await contactsService.updateStatusContact(id, data.favorite);

    if (!result) throw HttpError(404, "Not found");

    res.json(result);
  } catch (error) {
    next(error);
  }
};
