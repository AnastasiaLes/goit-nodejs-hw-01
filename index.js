const contacts = require("./db");
const { program } = require("commander");


const invokeAction = async({ action, id, name, email, phone }) => {
  switch (action) {
      case 'list':
          const result = await contacts.listContacts();
          console.table(result);
      break;

      case 'get':
          const contact = await contacts.getById(id);
          console.log(contact);
          break;

      case 'add':
          const newContact = await contacts.addNewContact(name, email, phone);
          console.log(newContact);
          break;

    case 'remove':
          const removeContact = await contacts.removeContact(id);
          console.log(removeContact);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

program
  .option("-a, --action <type>")
  .option("-i, --id <type>")
  .option("-n, --name <type>")
  .option("-e, --email <type>")
  .option("-p, --phone <type>")

program.parse();

const options = program.opts();
invokeAction(options);







