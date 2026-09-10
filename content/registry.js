/* registry.js, the content registry.
 *
 * Each module file (e.g. ent-exam-clinic-complaints.js) calls
 * window.JEFFENT.register(moduleObject) when it loads. app.js reads the
 * registry to build the UI. This is the seam that lets faculty and future
 * students add/edit CONTENT without ever touching the app logic in /js.
 *
 * To add a module: copy an existing content file, edit the data, and add a
 * <script> tag for it in index.html. See docs/content-authoring-guide.md.
 */
window.JEFFENT = window.JEFFENT || {
  modules: [],
  register: function (mod) { this.modules.push(mod); },
  get: function (id) { return this.modules.find(function (m) { return m.id === id; }); }
};
