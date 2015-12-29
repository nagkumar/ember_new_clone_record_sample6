import Ember from 'ember';

export default Ember.Controller.extend({
                                         title: Ember.computed('model',
                                                               function ()
                                                               {
                                                                 var model = this.get('model');
                                                                 if (model === null)
                                                                 {
                                                                   return "";
                                                                 }
                                                                 return model.get('title');
                                                               }),

                                         isbn: Ember.computed('model',
                                                              function ()
                                                              {
                                                                var model = this.get('model');
                                                                if (model === null)
                                                                {
                                                                  return "";
                                                                }
                                                                return model.get('isbn');
                                                              }),

                                         pages: Ember.computed('model',
                                                               function ()
                                                               {
                                                                 var model = this.get('model');
                                                                 if (model === null)
                                                                 {
                                                                   return "";
                                                                 }
                                                                 return model.get('pages');
                                                               }),


                                         description: Ember.computed('model',
                                                                     function ()
                                                                     {
                                                                       var model = this.get('model');
                                                                       if (model === null)
                                                                       {
                                                                         return "";
                                                                       }
                                                                       return model.get('description');
                                                                     }),


                                         firstName: Ember.computed('model',
                                                                   function ()
                                                                   {
                                                                     var model = this.get('model');
                                                                     if (model === null)
                                                                     {
                                                                       return "";
                                                                     }
                                                                     return model.get('firstName');
                                                                   }),

                                         bio: Ember.computed('model',
                                                             function ()
                                                             {
                                                               var model = this.get('model');
                                                               if (model === null)
                                                               {
                                                                 return "";
                                                               }
                                                               return model.get('bio');
                                                             }),

                                         name: Ember.computed('model',
                                                              function ()
                                                              {
                                                                var model = this.get('model');
                                                                if (model === null)
                                                                {
                                                                  return "";
                                                                }
                                                                return model.get('name');
                                                              }),

                                         organizationName: Ember.computed('model',
                                                                          function ()
                                                                          {
                                                                            var model = this.get('model');
                                                                            if (model === null)
                                                                            {
                                                                              return "";
                                                                            }
                                                                            return model.get('organizationName');
                                                                          }),

                                         address: Ember.computed('model',
                                                                 function ()
                                                                 {
                                                                   var model = this.get('model');
                                                                   if (model === null)
                                                                   {
                                                                     return "";
                                                                   }
                                                                   return model.get('address');
                                                                 })
                                       });
