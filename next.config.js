const i18n = require('./config/locale.json')

module.exports = {
  i18n,
  reactStrictMode: true,
  env: {
    PROJECT_NAME: 'My Project',
    TZ: 'America/Recife',
    AUTOMATION_KEYS: 'AAA; BBB',
  },
}
