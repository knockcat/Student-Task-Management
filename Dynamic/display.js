// Show Data

function onDisplayLocal() {
    alert("Ok To See Records");
    showData();
}


function showData() {
    document.getElementById("showUsers").innerHTML = "";
    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
    if (user_records) {
        for (let i = 0; i < user_records.length; i++) {

            var formData = {};
            formData["userName"] = user_records[i].userName;
            formData["rollNo"] = user_records[i].rollNo;
            formData["stdClass"] = user_records[i].stdClass;
            formData["tsub"] = user_records[i].tsub;
            formData["age"] = user_records[i].age;
            formData["tasktodone"] = user_records[i].tasktodone;
            formData["message"] = user_records[i].message;

            console.log(formData);
            insertNewRecord(formData);
        }
    }
}

function insertNewRecord(data) {
    var table = document.getElementById("stdlist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.userName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.rollNo;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.stdClass;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.tsub;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.age;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.tasktodone;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.message;
    cell7 = newRow.insertCell(7)
    cell7.innerHTML = `<a onClick="onDelete(this)">Delete</a>`;
}