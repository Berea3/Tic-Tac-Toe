const app=require('express')();          // chestii care trebe puse
const http=require('http').Server(app);
const io=require('socket.io')(http);
const port=process.env.PORT || 80;

app.get('/', (req,res) => {
    res.sendFile(__dirname+'/index.html');
});

let players=[];

io.on('connection',(socket) => {

})

function listening()
{
    console.log('connection',socket.id);
    players.push(socket.id);
    if (players.length===2)
    {
        const [X,O]=players;
        const game={};
        game[x]='X';
        game[o]='O';
        io.emit('start',game);
    }
}