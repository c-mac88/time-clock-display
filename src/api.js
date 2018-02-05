import openSocket from 'socket.io-client';
const socket = openSocket('http://yoda-oca.herokuapp.com:8008');


function showSwipe(cb) {
    // on new swipe, show the welcome or goodbye message
    socket.on('newSwipe', (statement) => {
        // console.log(JSON.parse(statement).response.actor);
        const greeting =
            statement.response.verb.display.en === 'checked in to' ? 'WELCOME' : 'GOODBYE';
        const messageData = {
            greeting,
            student: statement.response.actor.name
        }
        cb(null, messageData);
    });
    socket.emit('listenForSwipe');
} 

socket.on('waiting', () => {
    console.log('waiting');
});

export { showSwipe }
