// const BasicPlan = {
//     canStream:true, canDownload:true, numOfDevices:1, hasSD:true, hasHD:false, hasUHD:false, price:'$8.99'
// };
// const StandardPlan = {
//     canStream:true, canDownload:true, numOfDevices:2, hasSD:true, hasHD:true, hasUHD:false, price:'$12.99'
// };
// const PremiumPlan = {
//     canStream:true, canDownload:true, numOfDevices:4, hasSD:true, hasHD:true, hasUHD:true, price:'$15.99'
// };
// class BasicPlan {
// 	static canStream = true;
// 	static canDownload = true;
// 	static numOfDevices = 1;
// 	static hasSD = true;
// 	static hasHD = false;
// 	static hasUHD = false;
// 	static price = '$8.99';
// }
// // Write the classes for StandardPlan and PremiumPlan here!
// const StandardPlan = {
// 	...BasicPlan,
// 	hasHD: true,
// 	numOfDevices: 2,
// 	price: '$12.99'
// }
// const PremiumPlan = {
// 	...StandardPlan,
// 	hasUHD: true,
// 	numOfDevices: 4,
// 	price: '$15.99'
// }
// class Employee {
// 	constructor (firstname, lastname) {
// 		this.firstname = firstname;
// 		this.lastname = lastname;
// 		// Complete the code!
// 		this.fullname = `${firstname} ${lastname}`;
// 		this.email = `${firstname}.${lastname}@company.com`.toLowerCase();
// 	}
// }

// class Employee {
// 	constructor (firstname, lastname) {
// 		this.firstname = firstname;
// 		this.lastname = lastname;
// 		// Complete the code!
// 	}
	
// 	get fullname() {
// 		return `${this.firstname} ${this.lastname}`;
// 	}
	
// 	get email() {
// 		return `${this.firstname.toLowerCase()}.${this.lastname.toLowerCase()}@company.com`;
// 	}
// }

// class Employee {
// 	constructor (firstname, lastname) {
// 		this.firstname = firstname;
// 		this.lastname = lastname;
// 		this.fullname = firstname + ' ' + lastname
// 		this.email = (firstname + '.' + lastname + '@company.com').toLowerCase()
// 	}
// }
function sweetestIcecream(arr) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++){
	if(arr[i].flavor === 'Chocolate'){	
	 arr[i].flavor = 10;
	} else if(arr[i].flavor === 'Vanilla'){	
	 arr[i].flavor = 5;
	} else if(arr[i].flavor === 'ChocolateChip'){	
	 arr[i].flavor = 5;	
	} else if (arr[i].flavor === 'Plain'){	
	 arr[i].flavor = 0;
	} else if(arr[i].flavor === 'Strawberry'){	
	 arr[i].flavor = 10;
  }
 }
	for(let j = 0; j < arr.length; j++){
		newArr.push(arr[j].flavor + arr[j].numSprinkles)
	}
	return Math.max(...newArr)
}

const shouldServeDrinks = (age, onBreak) => {
	if(age >= 18 && onBreak !== true){
		return true;
	}else{
		return false;
	}
};

function shouldServeDrinks(age, onBreak){
	return age >= 18 && !onBreak
}
const shouldServeDrinks = (age, onBreak) => age >= 18 && !onBreak;