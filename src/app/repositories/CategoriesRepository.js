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

  async findById(id) {
    const [rows] = await DATABASE.query(`
      SELECT * FROM categories
      WHERE id = $1
      ORDER by name
    `, [id]);

    return rows;
  }

  async update(id, { name }) {
    const [row] = await DATABASE.query(`
      UPDATE categories
      SET name = $2
      WHERE id = $1
      RETURNING *
    `, [id, name]);

    return row;
  }

  async delete(id) {
    const deleteOperation = await DATABASE.query(`
      DELETE from categories
      WHERE id = $1
    `, [id]);

    return deleteOperation;
  }
}

module.exports = new CategoriesRepository();
