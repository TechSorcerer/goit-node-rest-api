import Contact from "../models/contact.js";

export const listContacts = () => Contact.find();

export const getContactById = (_id) => {
  return Contact.findById(_id);
};

export const removeContact = (id) => Contact.findByIdAndDelete(id);

export const addContact = (name, email, phone) =>
  Contact.create(name, email, phone);

export const updateContactById = (id, data) =>
  Contact.findByIdAndUpdate(id, data);

export const updateStatusContact = (id, isFavorite) => {
  return Contact.findByIdAndUpdate(id, { favorite: isFavorite });
};
