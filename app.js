var api = 'http://jsonplaceholder.typicode.com';

var userName;
var albumTitle;
var albumId;

function getAllUsers() {
    $.get(api + '/users/', function(data) {
        $('.user-one').text(data[0].name);
        $('.user-two').text(data[1].name);
    });
}

// function getUser(id) {
//     $.get(api + '/users/' + id, function(data) {
//         console.log(data.name);
//         $('.user').text(data.name);
//     });
// }

function getAllAlbums() {
    $.get(api + '/albums/', function(data) {
        $('.album-title-one').text(data[0].title);
        $('.album-id-one').text(data[0].id);
        $('.album-title-two').text(data[1].title);
        $('.album-id-two').text(data[1].id);
    });
}

// function getAlbum(id) {
//     $.get(api + '/albums/' + id, function(data) {
//         console.log(data.title);
//         $('.album-id').text(data.title);
//         $('.album-title').text(data.id);
//     });
// }

getAllUsers();
getAllAlbums();

function newTable() {

}
// getUser(1);
// getAlbum(1);


//DRAGGING FUNCTIONS

function handleDragEnter(e) {
    e.preventDefault();

}


function handleDragLeave(e) {
    e.preventDefault();
    // ("Drag the album and album ID here!");
    return false;
}


function handleDragStart(e) {
    e.originalEvent.preventDefault();
    var data = e.originalEvent.dataTransfer.setData("text", e.target.id);
}

function handleDragOver(e) {
    e.preventDefault();
}

function handleDrop(e) {
    e.preventDefault();
    console.log('SUCCSESSFUL DROP!');
    var data = e.originalEvent.dataTransfer.getData("text");
    e.originalEvent.target.appendChild(document.getElementById(data));
}


$('.drop-target').on('dragenter',handleDragEnter);
$('#drag-target').on('dragover',handleDragOver);
$('.drop-target').on('dragleave',handleDragLeave);
$('#drag-target').on('dragstart',handleDragStart);
$('#drag-target').on('drop',handleDrop);
