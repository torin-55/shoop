// we know to loop we have (for, while , do , forEach). But we have 2 new ways to loop

// Use for-loop

const basket = ['Banana','Appel', 'Orange'];
for (let  i =0; i <  basket.length; i++ ){
	console.log(basket[i])
}


// Using forEach
basket.forEach(i  => {

	console.log(i);
})


// 2 New Ways to loop over JavaScript: ( for of, for in). it allow us to Itreate: means word by word and not loop

// We use for of if we have Array such basket
for(i of basket){
  console.log(i);

}


// We can Iterate over every latter in basket.
for(i of 'basket'){
  console.log(i);

}


// Itretion use for of , used for array and Strings word by word

// we use for in for Objects such as : we do enmumerating used for object

const basket2 = {


	appel: 5,
	orange: 10,
	banana: 4,
	meloni: 2
}

for(i in basket2){
  console.log(i);

}