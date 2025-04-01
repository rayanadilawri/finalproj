let globaldata;
// Function to render your items
const renderItems = () => {
	// The `ul` where the items will be inserted
	const output = document.querySelector('.output')

	// Loop through each item in the data array
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
	//data.forEach((item) => {
		// Make a “template literal” as we have before, inserting your data (and maybe the class)
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
		let localdata = [];



 //to do list
// get selector in variables available to me - time and effort so I know what the user is inputting
// run through a for loop to go through global data
// if the data in the for loop has an effort that is = to what the user has selected 
// and at the same time the time is the same as what the user has selected, then append that data to the local data
// the for loop goes through every entry in the global data and checks if the effort and time is the same as the user input
// if it is, then it will append that data to the local data, otherwise it will pass
// specific pages to look at - w3 school page for loops
// mdn or w3 for getting an element by id
// look up w3 and mdn for appending data to an array

// // start - draft

// let selectedEffort = document.getElementById('effort').id;
// let selectedTime = document.getElementById('time').value;


// for (let i = 0; i < globaldata.length; i++) {
// 	let currentItem = globaldata[i];
// 	if (currentItem.effort === selectedEffort && currentItem.time === selectedTime) {
// 		localdata.push(currentItem);
// 	}
// }

// // end

        let randomnumber = Math.floor(Math.random() * globaldata.length);
        let item = globaldata[randomnumber];
        let listItem = 
			`
			<li>
				<h2>${item.activitiy}</h2>
				<p><strong>Time:</strong> ${item.time}</p>
				<p><em>Effort: ${item.effort}</em></p>
			</li>
			`
		output.innerHTML=listItem;
         // Add it to the `ul`!
		// Don’t feel limited to `ul > li` for these—you can insert any DOM, anywhere!
//	})
}

let generate_button = document.querySelector('.generate-button')
generate_button.addEventListener("click", renderItems);

// Fetch gets your (local) JSON file…
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
fetch('csvjson.json')
	.then(response => response.json())
	.then(data => {
		// And passes the data to the function, above!
		(globaldata = data)
	});








    
