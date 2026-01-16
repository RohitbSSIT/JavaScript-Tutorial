// Basic API Call
fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log("Error:", error);
  });

// Understanding the Code
  fetch(url)          // send request
.then(response)     // get response
.then(data)         // use data
.catch(error)       // handle error

// API Call Using async / await
async function getData() {
  try {
    let response = await fetch("https://api.example.com/data");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

getData();
