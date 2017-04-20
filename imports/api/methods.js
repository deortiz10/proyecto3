import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';


import walmart from 'walmart';
//excelente que tengas Meteor.methods
//Que bueno que hayan hecho meteor remove insecure y meteor remove autopublish
Meteor.methods({
	"walmart.search"(query) {
		console.log("Search walmart");
		check(query, String);
		//let myWalmart = walmart(process.env.WALMART_API_KEY);
		//nooooo, dejen la API KEY como variable de entorno, ojo. Si fuera el caso de AWS o algo así puede salir caro eso.
		let myWalmart = walmart('acc828nd6mdxeqwqt7fz5s7m');
    // Return the promise
    return myWalmart.search(query);
	},

    "recommendations"(query) {
        console.log("Recomend walmart");
				console.log(query);
        check(""+query, String);
				let myWalmart = walmart('acc828nd6mdxeqwqt7fz5s7m');
        // Return the promise
        return myWalmart.recommendations(""+query);
    },

		"walmart.reviews"(query) {
				console.log("Reviews walmart");
				console.log(query);
				check(""+query, String);
				let myWalmart = walmart('acc828nd6mdxeqwqt7fz5s7m');
				// Return the promise
				return myWalmart.reviews(""+query);
		}

});
