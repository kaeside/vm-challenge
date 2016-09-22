var api = 'http://jsonplaceholder.typicode.com';
//call for users
$.ajax({
    url: api + '/users/1',
    method: 'GET'
}).then(function(data) {
    $('.user').text(data.name);
});

$.ajax({
    url: api + '/users/2',
    method: 'GET'
}).then(function(data) {
    $('.user').text(data.name);
});

//calls for albums
$.ajax({
    url: api + '/albums/1',
    method: 'GET'
}).then(function(data) {
    $('.album-id').text(data.title);
    $('.album-title').text(data.id);
});

$.ajax({
    url: api + '/albums/2',
    method: 'GET'
}).then(function(data) {
    $('.album-id').text(data.title);
    $('.album-title').text(data.id);
});

//DRAGGING FUNCTIONS

function handleDragEnter() {

}

function handleDragOver() {

}

function handleDragLeave() {

}

function handleDragOver() {

}

// function handleDragStart(e) {
//     this.style.color = 'blue';
// }

var dropTarget = document.getElementsByClassName('drop-target');

dropTarget.addEventListener('dragenter',handleDragEnter);
dropTarget.addEventListener('dragOver',handleDragOver);
dropTarget.addEventListener('dragleave',handleDragLeave);
dropTarget.addEventListener('drop',handleDrop);







/* <div class="table">
    <p class="user"></p>
    <ul>
        <li class="album-title"></li>
        <li class="album-id"></li>
    </ul>
</div> */
