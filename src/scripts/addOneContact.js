import { createFakeContact } from "../utils/createFakeContact.js";
import { writeContacts } from "../utils/writeContacts.js";
import { readContacts } from "../utils/readContacts.js";
import { faker } from "@faker-js/faker";

export const addOneContact = async () => { 
  const newContact = faker.helpers.multiple(createFakeContact, {
    count: 1,
  });
  try {
    const contacts = await readContacts();
    const updatedContacts = [...contacts, ...newContact];
    await writeContacts(updatedContacts);
    console.log(`Contact generated and added successfully.`);
    
  } catch (error) {
    console.error(error);
  }
};

addOneContact();
