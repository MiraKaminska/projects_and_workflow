const app = document.getElementById("root");
const container = document.createElement("div");
container.setAttribute("class", "container");
app.appendChild(container);
// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open("GET", "https://wakatime.com/api/v1/users/current/projects", true);
request.setRequestHeader(
  "Authorization",
  "Basic " + btoa("c2a4e8f7-04c1-4a5d-b584-83faa5d38507")
);
request.onload = function () {
    // Begin accessing JSON data here
    var mydata = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
        mydata.data.forEach(project => {
            const card = document.createElement('div');
            card.setAttribute('class', 'card');
            const h1 = document.createElement('h1');
            h1.textContent = project.name;
            container.appendChild(card);
            card.appendChild(h1);
        }); 
    } else {
        console.log('error');
    }    
}

request.send();
var connection = new XMLHttpRequest();
connection.open(
    "GET",
    "https://wakatime.com/share/@75e55da2-cc8d-4880-8b09-4d169a5c13bc/9397f500-9877-4faf-9f1f-507d37a1471d.json",
    true
);
connection.setRequestHeader(
    "Authorization",
    "Basic " + btoa("c2a4e8f7-04c1-4a5d-b584-83faa5d38507")
);
connection.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
  //  if (connection.status >= 200 && request.status < 400) {
        console.log(data.data[0].name);
        console.log(data);
      //  chunks = [];
      //  var result;
       // result = {};
       // data = chunks.join();
       // if (typeof json === 'object') {
       //     result = {};
        //   Object.keys(data).sort().forEach(function (key) {
         //       result[key] = data[key];
          //  });
      //  } else {
       //     result = data;
      // }
      //  result = JSON.stringify(result, null, 2);
       // console.log(result);
 //   });

  //  } else {
    //    console.log("error");
  //  }
};
connection.send();

// added hard coded chart
var data = {
    datasets: [{
        data: [
            40.36, 32.4, 18.64, 8.13
        ],
        backgroundColor: [
            "#FF6384",
            "#4BC0C0",
            "#FFCE56",
            "#E7E9ED",
            "#36A2EB",

        ],
        label: 'My dataset' // for legend
    }],
    labels: [
        "CSS",
        "JavaScript",
        "HTML",
        "JSON"

    ]
};
var ctx = document.getElementById("myChart");
new Chart(ctx, {
    data: data,
    type: 'polarArea'
});