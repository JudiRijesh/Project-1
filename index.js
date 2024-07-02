 // Close the dropdown menu if the user clicks outside of it
 window.onclick = function(event) {
    if (!event.target.matches('.dropdown > a')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

// Toggle dropdown on click
document.querySelector('.dropdown > a').addEventListener('click', function(event) {
    event.preventDefault(); 
    var dropdownContent = this.nextElementSibling;
    dropdownContent.classList.toggle('show');
});