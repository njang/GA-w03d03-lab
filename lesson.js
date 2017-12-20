// - In a JS file, create your own Flower constructor
// - Add whatever properties you would like
// - Create three instances of your Flower constructor using the 'new' keyword
// - We named our flowers lily, and rose. You can use your favorite flower names
// - Console.log one property from each flower instance
// - Paste your code in the thread under these instructions
// - 10 min

function Flower(theColor, numPetals, theName) {
	this.color = theColor;
	this.petals = numPetals;
	this.smellsPretty= true;
	this.scientificName = theName;
	this.lovesMe = function() {
		let condition = true;			
		for (let i = this.petals; i > 0; i--) {
			(i !== 1 ? message = (condition ? 'She loves me' : 'She loves me not') : message += '!');
			console.log(message);
			condition = !condition;
		}
	}
}

daisy = new Flower("Yellow", 24, "Bellis perennis");
jasmine = new Flower("White", 8, "Jasminum officinale");
verbena = new Flower("Violet", 15, "Bellis perennis");

// console.log(daisy);
// console.log(jasmine);
// console.log(verbena);

jasmine.lovesMe();

