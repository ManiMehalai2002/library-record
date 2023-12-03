
    document.getElementById("btn").addEventListener("click", () => {
      // Get input values
      let title = document.getElementById("title").value;
      let author = document.getElementById("author").value;
      let yearSelect = document.getElementById("year");
      let year = parseInt(yearSelect.value, 10); // Convert the value to a number

      // Validate that the year is a number
      if (isNaN(year)) {
        alert("Please select a valid year.");
        return;
      }

      // Create a new book record element
      let bookRecord = document.createElement("div");
      bookRecord.style.margin="10px";
     
      bookRecord.classList.add("book-record");

      // Display book information
      bookRecord.innerHTML = `${title}, ${author}, ${year}`;
      document.getElementById("title").value = "";
      document.getElementById("author").value = "";
      document.getElementById("year").value = "";
      // Create remove button
      let removeBtn = document.createElement("button");
      removeBtn.innerText = "Remove";
      removeBtn.style.backgroundColor = "red";
      removeBtn.addEventListener("click", () => {
        // Remove the book record when the remove button is clicked
        bookRecord.remove();
      });

      // Append the remove button to the book record
      bookRecord.appendChild(removeBtn);

      // Append the book record to the book list container
      document.getElementById("addlist").appendChild(bookRecord);

      // Clear input fields after adding the book record
     
    });


