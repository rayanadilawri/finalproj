let globaldata;

//global data is all the spreadsheet infomation, learned this in my tutor sessions with viyan poonamalee - we spent 2 lessons leanring about local vs global data and how to apply it then i applied it to my own project
// Function to render your items
const renderItems = () => {
	// The `ul` where the items will be inserted
	const output = document.querySelector('.output')

	const time = document.querySelector('#time');
	const effort = document.querySelector('#effort');
	const type = document.querySelector('#type');

	// Loop through each item in the data array
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
	// data.forEach((item) => {
	// Make a “template literal” as we have before, inserting your data (and maybe the class)
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

	let localdata = [];

	for (let i = 0; i < globaldata.length; i++) {
		let item = globaldata[i];
	
		if (effort.value === "" && time.value === "" && type.value === "") {
			localdata.push(item);
		}
		else if (effort.value === "" && type.value === "" && item.time === time.value) {
			localdata.push(item);
		}
		else if (time.value === "" && type.value === "" && item.effort === effort.value) {
			localdata.push(item);
		}
		else if (effort.value === "" && time.value === "" && item.type === type.value) {
			localdata.push(item);
		}
		else if (type.value === "" && item.time === time.value && item.effort === effort.value) {
			localdata.push(item);
		}
		else if (effort.value === "" && item.time === time.value && item.type === type.value) {
			localdata.push(item);
		}
		else if (time.value === "" && item.effort === effort.value && item.type === type.value) {
			localdata.push(item);
		}
		else if (item.time === time.value && item.effort === effort.value && item.type === type.value) {
			localdata.push(item);
		}
	}
	
	// viyan poonamallee helped me learn about local and and global data 
	// this works by having the global data (whole spread sheet) and then filtering it down to the local data (the data that the user has selected)
	// this part was super helpful for my project because i was able to filter the different data sets i wanted to show (all data, just time, just energy, both tenergy and type,...etc - all the combinations)
	// it was essential for my key product to work, as before i had this, all the data would show, no matter which buttons you pressed
	//because of this function i built, I was able to filter the data based on the buttons the user pressed, to achieve the core functionality!

	// i used https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
// this was helpful for my work because it achieves the task i wanted 
// query selector gets the generate button and the event it's listening to is to guide the viewer to step 6 (the activity result page)

	//added type in 
	//followed the same format as before 
	// this is the part that will add the items to the local data

	// to do list
	// get selector in variables available to me - time and effort so I know what the user is inputting
	// run through a for loop to go through global data
	// if the data in the for loop has an effort that is = to what the user has selected 
	// and at the same time the time is the same as what the user has selected, then append that data to the local data
	// the for loop goes through every entry in the global data and checks if the effort and time is the same as the user input
	// if it is, then it will append that data to the local data, otherwise it will pass
	// specific pages to look at - w3 school page for loops
	// mdn or w3 for getting an element by id
	// look up w3 and mdn for appending data to an array

	// If we found matching items, show one randomly
	if (localdata.length > 0) {
		let randomnumber = Math.floor(Math.random() * localdata.length);
		let item = localdata[randomnumber];

		let listItem = `
			<li>
				<h2>${item.activity}</h2>
				<p><em>Time: ${item.time}</em></p>
				<p><em>Effort: ${item.effort}</em></p>
				<p><em>Type: ${item.type}</em></p>
			</li>
		`;

		output.innerHTML = listItem;
	} else {
		output.innerHTML = `<li><p>No activities found for your selection. Try changing your filters!</p></li>`;
	}
}

// When the button is clicked, render items
let generate_button = document.querySelector('.generate-button');
generate_button.addEventListener("click", renderItems);

// Fetch gets your (local) JSON file…
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
fetch('csvjson.json')
	.then(response => response.json())
	.then(data => {
		// And passes the data to the function, above!
		globaldata = data;
	});

// Scroll to result section when button is clicked
document.querySelector(".generate-button").addEventListener("click", () => {
	document.getElementById("step6").scrollIntoView({ behavior: "smooth" });
});

// i used https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
// this was helpful for my work because it achieves the task i wanted 
// query selector gets the generate button and the event it's listening to is to guide the viewer to step 6 (the activity result page)

const sections = document.querySelectorAll("section[id^='step']");
const navLinks = document.querySelectorAll(".nav-link");

// these grab the elements that are section with step included. the part that says step 1 is a css selector and 
// [id^='step'] means that it selects all elements with an id that starts with step
// line 2 finds all .nav-link elements so when I have css with this it will grab them

// this is the function that will highlight the nav link when the user scrolls to a section
// it works by getting the position of the scroll and relating it to the number / position of the sections to highlight

// resources
// https://javascript.info/onscroll/ — helped me with the scrolling function
// It was helpful for my project to build the vertical scroll nav 
// it works by getting the current position of the scroll and relating it to the number / position of the sections
// it highlights the nav link through my active css code and correlates it to the active page that the user is on  
// https://www.freecodecamp.org/news/how-to-create-a-scrollspy-with-javascript/
// https://stackoverflow.com/questions/43500315/highlighting-links-based-on-scroll-position
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API


// THIS IS WHAT GIVES THE VERTICAL SCROLL FUNCTION HERE - NEED TO SAVE THIS 
window.addEventListener("scroll", () => {
	let current = "";

	sections.forEach((section) => {
		const sectionTop = section.offsetTop;
		const sectionHeight = section.offsetHeight;
		if (window.scrollY >= sectionTop - sectionHeight / 2) {
			current = section.getAttribute("id");
		}
	});

	navLinks.forEach((link) => {
		link.classList.remove("active");
		if (link.getAttribute("href").substring(1) === current) {
			link.classList.add("active");
		}
	});
});
