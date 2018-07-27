module.exports = {
  extends: ['wolox'<% if (flow) { %>, 'plugin:flowtype/recommended'<% } %>],  <% if (flow) { %>
  plugins: ['flowtype'],<% } %>
  rules: {
    'jsx-a11y/href-no-hash': 'off'
  }
};
