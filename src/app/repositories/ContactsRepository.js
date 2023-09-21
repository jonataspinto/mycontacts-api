const { v4: uuid } = require('uuid');

let contacts = [
  {
    id: uuid(),
    name: 'Mateus',
    email: 'mateus@mail.com',
    phone: '12345678',
    category_id: uuid(),
  },
  {
    id: uuid(),
    name: 'Jose',
    email: 'jose@mail.com',
    phone: '12345678',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.id === id));
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactsRepository();
