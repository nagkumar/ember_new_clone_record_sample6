import Ember from 'ember';

function fieldValue(name) {
  return Ember.computed('ref',
    function () {
      var ref = this.controllerFor('books/new').get('ref');
      if (ref === null || ref === undefined) {
        return "";
      }
      return ref.get(name);
    });
}
export default Ember.Controller.extend({
  title: fieldValue("title"),
  isbn: fieldValue("isbn"),
  pages: fieldValue("pages"),
  description: fieldValue("description"),
  firstName: fieldValue("firstName"),
  bio: fieldValue("bio"),
  name: fieldValue("name"),
  organizationName: fieldValue("organizationName"),
  address: fieldValue("address")
});
