(() => {
  let getButtons = document.querySelectorAll('.getButton'),
      postButton = document.querySelector('.postButton'),
      deleteButton = document.querySelector('.deleteButton');

  function fetchData() {
    let url = "api/" + this.id;

    fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  function deleteRecord() {
		let url = "api/" + this.id;

		fetch(url, { method: 'delete' }) // do our ajax call
	      .then((resp) => resp.json()) // convert the response to JSON (built-in method)
	      .then((data) => {
	      		console.log(data);
	      	}) // then do the process result function
	      .catch(function(error) {
	        console.log(error); // catch any errors and show them in the console
	    });
	}
    
    function insertRecord() {
		let url = "api/" + this.id;

		fetch(url, { method: 'post',
                     headers: {
                         'Accept' : 'application/json, text-plain, */*',
                         'Content-type' : 'application/json'
                     },
                    body: JSON.stringify({
                        model:"F56",
                        modelName: "MINI Cooper F56",
                        pricing:"22,190",
                        modelDetails:"lots of text",
                        imagePath: "F56.jpg"
                    })
                   }) // do our ajax call
	      .then((resp) => resp.json()) // convert the response to JSON (built-in method)
	      .then((data) => {
	      		console.log(data);
	      	}) // then do the process result function
	      .catch(function(error) {
	        console.log(error); // catch any errors and show them in the console
	    });
	}

  getButtons.forEach(button => button.addEventListener('click', fetchData));
  deleteButton.addEventListener('click', deleteRecord);
  postButton.addEventListener('click', insertRecord);
})();
