
  // var config = {
  //   apiKey: "AIzaSyCGs2tQlvv9ic3giwVxZul5Fmj90B45Wf0",
  //   authDomain: "test-e0986.firebaseapp.com",
  //   databaseURL: "https://test-e0986.firebaseio.com",
  //   aprojectId: "test-e098e6",
  //   storageBucket: "test-0986.appspot.com",
  //   messagingSenderId: "523766183191"

  };
   firebase.initializeApp(config);

   var database = firebase.database();

           //add children
database.ref("/users").on("child_added", function(childSnapshot) {

   var employee = childSnapshot.val()


  $("#job-list").append(`
    <tr>
      <td>${company.name}</td>
      <td>${title.role}</td>
      <td>${description.startDate}</td>
      <td>${location.area}</td>
      </tr>
  `)
})


//add data
$("#add-user").on("click", function() {

  event.preventDefault();


  var name = $("#name-input").val().trim();
  var role = $("#role-input").val().trim();

  var newJobs = {
    name: name,
    role: role,

  }
      //Push data into table
  database.ref("/users").push(newJobs)
});
