const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack');

const Page = db.define('page', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  slug: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.TEXT
  },
  status: {
    type: Sequelize.BOOLEAN
  }
})

const User = db.define('user', {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  }
})

module.exports = {
  db,
  Page,
  User
}
