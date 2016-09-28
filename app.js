var api = 'http://jsonplaceholder.typicode.com';

var userName;
var albumTitle;
var albumId;

function getInfo() {
    $.get(api + '/users/', function(data) {
        for (var i = 0; i <= 1; i++) {
            $('.tables').append($('<div></div>').addClass('table'));
            $('.table').append($('<p></p>').addClass('user'));
            console.log($('.user').text(data[i].name));
            console.log('NAME' + data[i].name);
        }
    });
    $.get(api + '/albums/', function(data) {
        for (var k = 0; k <= 1; k++) {
            $('.table').append($('<ul></ul>').addClass('album'));
            $('.album').append($('<li></li>').attr('draggable', 'true').addClass('album-title'));
            $('.album').append($('<li></li>').attr('draggable', 'true').addClass('album-id'));
            $('.album-title').text(data[k].title);
            $('.album-id').text(data[k].id);
        }
    });
}

// function getAllUsers() {
//     $.get(api + '/users/', function(data) {
//         $('.user-one').text(data[0].name);
//         $('.user-two').text(data[1].name);
//     });
// }

// function getUser(id) {
//     $.get(api + '/users/' + id, function(data) {
//         console.log(data.name);
//         $('.user').text(data.name);
//     });
// }

// function getAllAlbums() {
//     $.get(api + '/albums/', function(data) {
//         $('.album-title-one').text(data[0].title);
//         $('.album-id-one').text(data[0].id);
//         $('.album-title-two').text(data[1].title);
//         $('.album-id-two').text(data[1].id);
//     });
// }

// function getAlbum(id) {
//     $.get(api + '/albums/' + id, function(data) {
//         console.log(data.title);
//         $('.album-id').text(data.title);
//         $('.album-title').text(data.id);
//     });
// }

getInfo();

//DRAGGING FUNCTIONS

// function handleDragEnter(e) {
//     e.preventDefault();
//
// }
//
//
// function handleDragLeave(e) {
//     e.preventDefault();
//     // ("Drag the album and album ID here!");
//     return false;
// }

function handleDragStart(e) {
    e.originalEvent.preventDefault();
    console.log('drag start!');
    var data = e.originalEvent.dataTransfer.setData("text", e.target.className);
}

function handleDragOver(e) {
    e.originalEvent.preventDefault();
}

function handleDrop(e) {
    e.preventDefault();
    console.log('SUCCSESSFUL DROP!');
    var data = e.originalEvent.dataTransfer.getData("text");
    alert(data);
    console.log(data);
    e.originalEvent.target.appendChild(document.getElementsByClassName(data));
}

// $('.drop-target').on('dragenter',handleDragEnter);
// $('.drop-target').on('dragleave',handleDragLeave);
$('#drag-target').on('dragstart', handleDragStart);
$('#drop-target').on('dragover', handleDragOver);
$('#drop-target').on('drop', handleDrop);
