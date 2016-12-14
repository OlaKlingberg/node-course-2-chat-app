const socket = io();

socket.on('openRooms', (openRooms) => {
    let template = jQuery('#open-rooms-template').html();
    let openRoomsList = jQuery('#open-rooms');

    if (openRooms.length) {
        openRoomsList.html('<option value="">---</option>');
    } else {
        openRoomsList.html('<option value="">No open rooms</option>');
    }
    openRooms.forEach((room) => {
        return openRoomsList.append(Mustache.render(template, {room: room}));
    });

    openRoomsList.change(function () {
        let openRoomsSelected = jQuery("#open-rooms option:selected");
        console.log('The select box changed:', openRoomsSelected.val());
        jQuery("#room").val(openRoomsSelected.val());
    });
});

