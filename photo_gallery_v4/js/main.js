/*

const list = document.querySelector('#photo-list div');

const searchBar = document.forms['search-box'].querySelector('input');
searchBar.addEventListener('keyup', function (e) {
    const term = e.target.value.toLowerCase();
    const photos = list.getElementsByTagName('span');
    Array.from(photos).forEach(function (photo) {
        const title = photo.firstElementChild.textContent;

        if (title.toLowerCase().indexOf(term) != -1) {
            photo.style.display = 'block';
        } else {
            photo.style.display = 'none';
        }
    })
})
*/

/*
function myFunction() {
    // Declare variables 
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
*/
// Code below is just a javascript object literal that contains property names and property values 

$(document).ready(function () {
    $('.light-box').magnificPopup({
        type: 'image',
        gallery: { enabled: true },
        removalDelay: 300,       // Delay in milliseconds before popup is removed
        mainClass: 'mfp-fade',   // Class that is added to popup wrapper and background
        image: {
            titleSrc: 'title' // this tells the script which attribute has your caption
        }
    });
});

$(document).ready(function () {
    let images = document.getElementsByTagName('a');
    $("#myInput").on('keyup', function () {
        let search = $("#myInput").val().toLowerCase();
        for (var i = 0; i < images.length; i++) {
            let searchVal = images[i].getAttribute("title");
            if (searchVal.toLowerCase().indexOf(search) > -1) {
                images[i].style.display = "";
            } else {
                images[i].style.display = "none";
            }
        }
    });
});

$(document).ready(function () {
    $("#sticker").sticky({ topSpacking: 0 });
});

$(document).ready(function () {
    $("header").sticky({
        getWidthFrom: '.gallery',
        responsiveWidth: true
    })
});