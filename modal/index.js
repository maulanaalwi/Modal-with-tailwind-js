var modal = document.getElementById("myModal");
var btn = document.getElementById("openModal");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.classList.remove('hidden');
}

span.onclick = function() {
    modal.classList.add('hidden');
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.add('hidden');
    }
}

document.getElementById("modalForm").onsubmit = function(event) {
    event.preventDefault();
    var modalName = document.getElementById("modalName").value;
    var modalValue = document.getElementById("modalValue").value;

    var tableBody = document.getElementById("modalTableBody");
    var newRow = document.createElement("tr");
    newRow.innerHTML = `<td class="border px-4 py-2">${modalName}</td><td class="border px-4 py-2">${modalValue}</td>`;
    tableBody.appendChild(newRow);

    modal.classList.add('hidden');
    document.getElementById("modalForm").reset();
}