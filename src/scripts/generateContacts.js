import { createFakeContact } from "../utils/createFakeContact.js";
import { faker } from "@faker-js/faker";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";


const generateContacts = async (number) => {
  const newContacts = faker.helpers.multiple(createFakeContact, {
  count: number,
});
  

  try {
    const contacts = await readContacts();
    const updatedContacts = [...contacts, ...newContacts];
    await writeContacts(updatedContacts);
    console.log(`${number} contacts generated and added successfully.`);
  } catch (error) {
    console.error(error);
  }
};

generateContacts(5);
