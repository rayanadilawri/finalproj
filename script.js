let globaldata;
// Function to render your items
const renderItems = () => {
	// The `ul` where the items will be inserted
	const output = document.querySelector('.output')

    const time = document.querySelector('#time');
    const effort = document.querySelector('#effort');

	// Loop through each item in the data array
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
	//data.forEach((item) => {
		// Make a “template literal” as we have before, inserting your data (and maybe the class)
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
		let localdata = [];
        for (let i=0; i<globaldata.length; i++){
        
			if (effort.value == "" && time.value == ""){ localdata.push(globaldata[i]);}
			else if (effort.value == ""){ localdata.push(globaldata[i]); }
			else if (time.value == ""){ localdata.push(globaldata[i]); }
				//add same for type//

			else if (globaldata[i].effort == effort.value && globaldata[i].time == time.value){
            localdata.push(globaldata[i]); 
        }
        };

        console.log(localdata);
        



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

    


        let randomnumber = Math.floor(Math.random() * localdata.length);
        let item = localdata[randomnumber];
        let listItem = 
			`
			<li>
				<h2>${item.activity}</h2>
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

// renderItems();


// Fetch gets your (local) JSON file…
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
fetch('csvjson.json')
	.then(response => response.json())
	.then(data => {
		// And passes the data to the function, above!
		(globaldata = data)
	});


// async function getData(){
//     data.forEach(dataPoint) => {
//         let time = dataPoint.time;
//         let timevalue = document.getElementById("time").value;
//         let effort = dataPoint.effort;
//         let activity = dataPoint.activity;

//         if (time.contains("5 min")){
//             console.log("5 min");
//         }
//     }
// };


document.querySelector(".generate-button").addEventListener("click", () => {
	document.getElementById("step6").scrollIntoView({ behavior: "smooth" });
  });


  // i used https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
  //https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
// this was helpful for my work beccase it achieves the task i wanted 
// query selector gets the generater button and the event its listening to is to guide the viewer to step 6 (the activity result page)


const sections = document.querySelectorAll("section[id^='step']");
const navLinks = document.querySelectorAll(".nav-link");


//these grab the elements that are section with step included. the part that says step 1 is a css selector and 
//[id^='step'] means that it  selects all elements with an id that starts with step
// line 2 finds alll .nav-link elements so when i have css with this it will grab them

//continue writing hode HERE!!!!!!!!!





// resources
//resources that helped me with this JS//
//https://javascript.info/onscroll//
//this helped me with the scrolling function
//It was helpful for my project to build the vertical scroll nav 
// it works by getting the current position of the scroll and relating it to the number / position of the sections//
//it works to highlight the current section the user is lookjng at//

//https://www.freecodecamp.org/news/how-to-create-a-scrollspy-with-javascript///
// https://stackoverflow.com/questions/43500315/highlighting-links-based-on-scroll-position?.com //
//https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API//

