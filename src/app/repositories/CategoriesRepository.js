const DATABASE = require('../../database');

class CategoriesRepository {
  async findAll() {
    const rows = await DATABASE.query(`
      SELECT * FROM categories
      ORDER by name
    `);

    return rows;
  }

  async create({ name }) {
    const [row] = await DATABASE.query(`
      INSERT INTO categories(name)
      VALUES($1)
      RETURNING *
    `, [name]);

    return row;
  }
}

module.exports = new CategoriesRepository();
