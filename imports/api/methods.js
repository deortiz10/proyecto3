import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';


import walmart from 'walmart';

Meteor.methods({
	"walmart.search"(query) {
		console.log("Search walmart");
		check(query, String);
		//let myWalmart = walmart(process.env.WALMART_API_KEY);
		//El API_Key no debería estar quemado en codigo
		let myWalmart = walmart('acc828nd6mdxeqwqt7fz5s7m');
    // Return the promise
    return myWalmart.search(query);
	},

    "recommendations"(query) {
        console.log("Recomend walmart");
				console.log(query);
        //La concatenación no debería estar dentro del check
        check(""+query, String);
      //El API_Key no debería estar quemado en codigo
				let myWalmart = walmart('acc828nd6mdxeqwqt7fz5s7m');
        // Return the promise
        return myWalmart.recommendations(""+query);
    },

		"walmart.reviews"(query) {
				console.log("Reviews walmart");
				console.log(query);
				check(""+query, String);
      //El API_Key no debería estar quemado en codigo
				let myWalmart = walmart('acc828nd6mdxeqwqt7fz5s7m');
				// Return the promise
				return myWalmart.reviews(""+query);
		}

});
