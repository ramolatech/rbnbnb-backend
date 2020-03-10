module.exports = (app) => {
    const hostRegister = require('../controllers/host-register.js');

    //find which step host is
    app.get('/host-register/:userId',hostRegister.getHostData);


    app.post('/host-register',hostRegister.postHostData)

    app.get('/host-register', hostRegister.getAllHosts)

    // //retrieve all notes
    // app.get('/notes',notes.findAll);

    // //retrieve a signle note woith noteid
    // app.get('/notes:noteId', notes.findOne);

    // //update a note with noteid

    // app.put('/notes:noteId', notes.update);
}