import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeAllContacts = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length < 1) {
      console.log('No contacts in contactsbook!');
      return;
    }
    await writeContacts([]);
    console.log("All contacts removed successfully.");
  } catch (error) {
    console.error(error);
  }
};

removeAllContacts();
