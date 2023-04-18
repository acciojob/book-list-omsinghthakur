//your JS code here. If required.
//your JS code here. If required.
function handlEvent() {
  var title = document.getElementById("title").value;
  var author = document.getElementById("author").value;
  var isbn = document.getElementById("isbn").value;
  //   -------------------
  var row = document.createElement("tr");
  // -------------------------
  var titledata = document.createElement("td");
  titledata.textContent = title;
  row.appendChild(titledata);

  //   -----------------------------------------------
  var authordata = document.createElement("td");
  authordata.textContent = author;
  row.appendChild(authordata);
  //   ---------------------------------------------
  var isbndata = document.createElement("td");
  isbndata.textContent = isbn;
  row.appendChild(isbndata);
  //   ---------------------------------remove the row--------------------
  var deleteCell = document.createElement("td");
  var deleteButton = document.createElement("button");
  deleteButton.textContent = "Clear";
  deleteButton.className = "delete";
  deleteButton.onclick = function () {
    row.remove();
  };
  deleteCell.appendChild(deleteButton);
  row.appendChild(deleteCell);

  document.getElementById("Tdata").appendChild(row);
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
}
