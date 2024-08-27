import Contact from "../models/contact.js";

export const listContacts = (filter, settings) => {
  return Contact.find(filter, settings)
    .skip(skip)
    .limit(limit)
    .populate("owner", "email");
};

export const getOneContact = (filter) => {
  return Contact.findById(filter);
};

export const removeOneContact = (filter) => Contact.findOneAndDelete(filter);

export const addContact = (name, email, phone) =>
  Contact.create(name, email, phone);

export const updateOneContact = (filter, data) =>
  Contact.findOneAndUpdate(filter, data);

export const updateContactStatus = (id, isFavorite) => {
  return Contact.findByIdAndUpdate(id, { favorite: isFavorite });
};
