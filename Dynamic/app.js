var selectedRow = null

// Login Alert

// function onLogin() {
//     alert("Ok to Login");
// }

// Form Submit Function
function onFormSubmit() {
    // check validity
    if (validate()) {
        // store user data
        var formData = readFormData();
        // check empty row
        if (selectedRow == null) {
            // Insert New User Record
            insertNewRecord(formData);
        } else {
            // Update New User Record
            updateRecord(formData);
        }
        // Reset Input Values
        resetForm();
    }
}
// Get Values From Form
function readFormData() {
    var formData = {};
    // Get Values From  Input
    formData["userName"] = document.getElementById("userName").value;
    formData["rollNo"] = document.getElementById("rollNo").value;
    formData["stdClass"] = document.getElementById("stdClass").value;
    formData["tsub"] = document.getElementById("tsub").value;
    formData["age"] = document.getElementById("age").value;
    formData["tasktodone"] = document.getElementById("tasktodone").value;
    formData["message"] = document.getElementById("message").value;

    saveData(formData);

    // return Form Data
    return formData;
}

// Save data to local Storage

function saveData(formData) {
    // storing to local storage
    // array of object

    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];

    user_records.push({
        "userName": formData["userName"],
        "rollNo": formData["rollNo"],
        "stdClass": formData["stdClass"],
        "tsub": formData["tsub"],
        "age": formData["age"],
        "tasktodone": formData["tasktodone"],
        "message": formData["message"]
    })

    // storing to local storage
    localStorage.setItem("users", JSON.stringify(user_records));

    // showData();
}

// Insert New User Record
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
    cell7.innerHTML = `<a onClick="onEdit(this)">Edit</a>
     <a onClick="onDelete(this)">Delete</a>`;
}
// Reset Function
function resetForm() {
    document.getElementById("userName").value = "";
    document.getElementById("rollNo").value = "";
    document.getElementById("stdClass").value = "";
    document.getElementById("tsub").value = "";
    document.getElementById("age").value = "";
    document.getElementById("tasktodone").value = "";
    document.getElementById("message").value = "";
    selectedRow = null;
}
// Edit Function
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    restore(selectedRow);
    document.getElementById("userName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("rollNo").value = selectedRow.cells[1].innerHTML;
    document.getElementById("stdClass").value = selectedRow.cells[2].innerHTML;
    document.getElementById("tsub").value = selectedRow.cells[3].innerHTML;
    document.getElementById("age").value = selectedRow.cells[4].innerHTML;
    document.getElementById("tasktodone").value = selectedRow.cells[5].innerHTML;
    document.getElementById("message").value = selectedRow.cells[6].innerHTML;
}
// Update Record
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.userName;
    selectedRow.cells[1].innerHTML = formData.rollNo;
    selectedRow.cells[2].innerHTML = formData.stdClass;
    selectedRow.cells[3].innerHTML = formData.tsub;
    selectedRow.cells[4].innerHTML = formData.age;
    selectedRow.cells[5].innerHTML = formData.tasktodone;
    selectedRow.cells[6].innerHTML = formData.message;
}
// Delete Function
function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("stdlist").deleteRow(row.rowIndex);
        // selectedRow = td.parentElement.parentElement;
        // restore(selectedRow);
        resetForm();
    }
}
// Check User validation
function validate() {
    isValid = true;
    // userName validation
    if (document.getElementById("userName").value == "") {
        isValid = false;
        document.getElementById("userNamevalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("userNamevalidationError").classList.contains("hide")) {
            document.getElementById("userNamevalidationError").classList.add("hide");
        }
    }
    // Roll No validation
    if (document.getElementById("rollNo").value == "") {
        isValid = false;
        document.getElementById("rollNovalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("rollNovalidationError").classList.contains("hide")) {
            document.getElementById("rollNovalidationError").classList.add("hide");
        }
    }
    // Std class validation
    if (document.getElementById("stdClass").value == "") {
        isValid = false;
        document.getElementById("stdClassvalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("stdClassvalidationError").classList.contains("hide")) {
            document.getElementById("stdClassvalidationError").classList.add("hide");
        }
    }
    // Tsub validation
    if (document.getElementById("tsub").value == "") {
        isValid = false;
        document.getElementById("tsubvalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("tsubvalidationError").classList.contains("hide")) {
            document.getElementById("tsubvalidationError").classList.add("hide");
        }
    }
    // Task validation
    if (document.getElementById("tasktodone").value == "") {
        isValid = false;
        document.getElementById("taskvalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("taskvalidationError").classList.contains("hide")) {
            document.getElementById("taskvalidationError").classList.add("hide");
        }
    }
    // Message Validation
    if (document.getElementById("message").value == "") {
        isValid = false;
        document.getElementById("messagevalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("messagevalidationError").classList.contains("hide")) {
            document.getElementById("messagevalidationError").classList.add("hide");
        }
    }
    return isValid;
}

// for deleting from local storage
// function deleteData(index) {
//     let task_records = new Array();
//     task_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
//     task_records.splice(index, 1)
//     localStorage.setItem("users", JSON.stringify(task_records));
//     this.showData();
// }

// deleteItem(i) {
//     localStorage.removeItem(i);
//     localStorage.setItem(i, JSON.stringify(this.items));
//     this.items.splice(i, 1);
// }

function restore(selectedRow) {
    var ind = selectedRow.rowIndex;
    console.log(selectedRow);
    console.log(ind);
    // document.getElementById("showUsers").innerHTML = "";
    let re_records = new Array();
    re_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
    if (re_records) {
        for (let i = 0; i < re_records.length; i++) {

            if (i == ind - 1)
                continue;
            var formData = {};
            formData["userName"] = re_records[i].userName;
            formData["rollNo"] = re_records[i].rollNo;
            formData["stdClass"] = re_records[i].stdClass;
            formData["tsub"] = re_records[i].tsub;
            formData["age"] = re_records[i].age;
            formData["tasktodone"] = re_records[i].tasktodone;
            formData["message"] = re_records[i].message;

            let restore_records = new Array();
            restore_records = JSON.parse(localStorage.getItem("reusers")) ? JSON.parse(localStorage.getItem("reusers")) : [];

            restore_records.push({
                "userName": formData["userName"],
                "rollNo": formData["rollNo"],
                "stdClass": formData["stdClass"],
                "tsub": formData["tsub"],
                "age": formData["age"],
                "tasktodone": formData["tasktodone"],
                "message": formData["message"]
            })

            // storing to local storage
            localStorage.setItem("reusers", JSON.stringify(restore_records));
        }

        localStorage.users = localStorage.reusers;
        localStorage.removeItem("reusers");
    }

}