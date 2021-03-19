const i18n = require('./config/locale.json')

module.exports = {
  i18n,
  env: {
    PROJECT_NAME: 'My Project',
    TZ: 'America/Recife',
    AUTOMATION_KEYS: 'AAA; BBB',
    DATABASE_URL: 'mongodb://localhost',
    DATABASE_NAME: 'fluido-db-template',
  },
}
