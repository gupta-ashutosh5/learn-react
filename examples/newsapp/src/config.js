module.exports = {
  api_url: process.env.REACT_APP_API_URL || 'http://local.first-blt-project.com/api/',
  username: process.env.REACT_APP_USERNAME || 'admin',
  password:  process.env.REACT_APP_PASSWORD || 'admin',
  encryptText: process.env.REACT_APP_ENCRYPT_TEXT || 'estimation'
};
