module.exports = {
  extends: ['wolox-react', 'plugin:import/typescript']<% if (jest) { %>,
  env: {
    jest: true
  }<% } %>
};
