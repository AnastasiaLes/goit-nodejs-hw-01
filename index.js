const contacts = require("./db");
const { program } = require("commander");
// const yargs = require("yargs");
// const { hideBin } = require("yargs/helpers");
// const argv = require('yargs').argv;


const invokeAction = async({ action, id, name, email, phone }) => {
  switch (action) {
      case 'list':
          const result = await contacts.listContacts();
          console.log(result);
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

// const arr = hideBin(process.argv);
// const { argv } = yargs(arr);
// invokeAction(argv);

// invokeAction({ action: "list" });
// invokeAction({action: "get", id: "4"});
// invokeAction({action: "add", name: "Anna", email: "aa@yahoo.com", phone: "333333333"});
// invokeAction({action: "remove", id: "4"});


// const actionIndex = process.argv.indexOf("--action");
// if (actionIndex !== -1) {
//   const action = process.argv[actionIndex + 1];
//   invokeAction({ action });
// }
// console.log(process.argv);







