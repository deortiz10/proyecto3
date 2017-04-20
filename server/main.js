import { Meteor } from 'meteor/meteor';
import '../imports/api/Back.js';
import {} from "../imports/api/methods.js";
import '../imports/api/comparaciones.js';

Meteor.startup(() => {
  // code to run on server at startup
  //all hacer meteor add browser-policy aparecen 22 errores que la mayoría se soliciona con este codigo
  if(BrowserPolicy){
    BrowserPolicy.content.allowOriginForAll('*.bootstrapcdn.com');
    BrowserPolicy.content.allowOriginForAll('*.googleapis.com');
    BrowserPolicy.content.allowOriginForAll('*.rawgit.com');
    BrowserPolicy.content.allowOriginForAll('*.jquery.com');
    BrowserPolicy.content.allowOriginForAll('*.hotjar.com');
    BrowserPolicy.content.allowOriginForAll('*.gstatic.com');
    BrowserPolicy.content.allowDataUrlForAll();
  }
});
