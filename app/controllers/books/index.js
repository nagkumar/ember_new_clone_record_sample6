import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['books', 'books/new'],
  new: Ember.computed.alias('controllers.books.new'),
  actions: {
    go2New: function (lbook) {
      this.controllerFor('books/new').set('ref', lbook);
      this.transitionToRoute('books.new');
    }
  }
});
