import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['books', 'books/new'],
  new: Ember.computed.alias('controllers.books.new'),
  actions: {
    go2New: function (lbook) {
      //Ember.inject.controller('books').set('ref', lbook);
      this.controllerFor('books/new').set('ref', lbook);
      //Ember.Logger.info(this.controllerFor('books/new'));
      //this.transitionTo("books.new");
      this.transitionToRoute('books.new');
    }
  }
});
