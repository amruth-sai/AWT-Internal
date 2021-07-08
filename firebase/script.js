// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDLifURqVHLIs6haQHy13tdZAlGXuemjjE",
    authDomain: "second-project-b2a6c.firebaseapp.com",
    projectId: "second-project-b2a6c",
    storageBucket: "second-project-b2a6c.appspot.com",
    messagingSenderId: "49501488286",
    appId: "1:49501488286:web:410e2b1893d5d91f2f278f",
    measurementId: "G-MQTKZCN3YG"
  };

  firebase.initializeApp(firebaseConfig);
  
  var dbRef = firebase.database().ref().child('users')

  function insert() {
      let username = document.getElementById('username').value
      let rollno = document.getElementById('rollno').value
      let branch = document.getElementById('branch').value
      dbRef.child(rollno).set({
          username : username,
          rollno : rollno,
          branch : branch
      })
      display() 
  }
  function deleteUser(rollno) {
      console.log(rollno.id)
        dbRef.child(rollno.id).remove() 
        display() 
  }
  function display() {
    
    let table = document.createElement('TABLE')
    table.border = 1
    let row = table.insertRow(-1)
    let uname = row.insertCell(-1)
    let rollno = row.insertCell(-1)
    let branch = row.insertCell(-1)
    let update = row.insertCell(-1)
    let trash = row.insertCell(-1)
    uname.innerHTML = 'Username'
    rollno.innerHTML = 'RollNo'
    branch.innerHTML = "Branch"
    update.innerHTML = "Update"
    trash.innerHTML = "Delete"
    dbRef.on('child_added',function(snap) {
        let user = snap.val()
        console.log(user)
        let row = table.insertRow(-1)
        let uname = row.insertCell(-1)
        let rollno = row.insertCell(-1)
        let branch = row.insertCell(-1)
        let update = row.insertCell(-1)
        let trash = row.insertCell(-1)
        uname.innerHTML = snap.val().username
        rollno.innerHTML = snap.val().rollno
        branch.innerHTML = snap.val().branch
        let rol = snap.val().rollno
        
        update.innerHTML = `<button id=${rol}  onClick=updateUser(this)>Update</button>`
        trash.innerHTML = `<button id=${rol}  onClick=deleteUser(this)>Delete</button>`
    })
    document.getElementById('table').innerHTML = ''
    document.getElementById('table').append(table)
  }
  function updateUser(rollno) {
      console.log(rollno)
      document.getElementById('rollno')
      dbRef.child(rollno.id).on('value',function(snap) {
        document.getElementById('rollno').value = snap.val().rollno
        document.getElementById('username').value = snap.val().username
        document.getElementById('branch').value = snap.val().branch
      })
    //   console.log(user)
  }
  function update() {
    let username = document.getElementById('username').value
    let rollno = document.getElementById('rollno').value
    let branch = document.getElementById('branch').value
    dbRef.child(rollno).update({
        username : username,
        rollno : rollno,
        branch : branch
    })
    display()
  }
