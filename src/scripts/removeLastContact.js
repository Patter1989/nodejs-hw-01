import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length < 1) {
      console.log('No contacts in contactsbook!');  
      return;
    }
    const newContacts = contacts.slice(0, -1);
    writeContacts(newContacts);
    console.log("last contact removed successfully.");
  } catch (error) {
    console.error(error);
  }
};


removeLastContact();
