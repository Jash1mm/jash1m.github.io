function addCourse() {
    const courseList = document.getElementById('courseList');

    // Create a new course entry input
    const courseEntry = document.createElement('input');
    courseEntry.type = 'text';
    courseEntry.className = 'courseEntry';
    courseEntry.required = true;

    // Create a delete button for the course entry
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.type = 'button';
    deleteButton.onclick = function () {
        // Remove the course entry and delete button when clicked
        courseList.removeChild(courseEntry);
        courseList.removeChild(deleteButton);
    };

    // Append the course entry and delete button to the courseList
    courseList.appendChild(courseEntry);
    courseList.appendChild(deleteButton);
}

function addDeleteButton(courseEntry) {
    // Create a delete button for the specified course entry
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.type = 'button';
    deleteButton.onclick = function () {
        // Remove the course entry and delete button when clicked
        courseList.removeChild(courseEntry);
        courseList.removeChild(deleteButton);
    };

    // Append the delete button to the courseList
    courseList.appendChild(deleteButton);
}
