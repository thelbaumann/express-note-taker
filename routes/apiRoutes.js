const fs = require("fs");
let notes = [];

module.exports = function(app) {

    app.get("/api/notes", function(req, res) {
        fs.readFile("db/db.json", "utf8", (err, data) => {
            if (err) throw err;
            notes = JSON.parse(data);
            console.log(notes);
            return res.json(notes);
        });
    });

    app.post("/api/notes", function(req, res) {
        fs.readFile("db/db.json", (err, data) => {
            if (err) throw err;

            let notes = JSON.parse(data);
            let currentNoteId;

            let addNote = {
                id: currentNoteId,
                title: req.body.title,
                text: req.body.text
            };

            notes.push(addNote);

            for (i=0; i<notes.length; i++) {
                notes[i].id = i+1;
            }

            fs.writeFile("db/db.json", JSON.stringify(notes), "utf8", (err, data) => {
                if (err) throw err;
            });

        });

        res.send(notes);

    });

    app.delete("/api/notes/:id", function (req, res) {
        fs.readFile("db/db.json", "utf8", (err, data) => {
            if (err) throw err;

            let notes = JSON.parse(data);
            
            let deleteId = parseInt(req.params.id);

            let filteredNotes = notes.filter(function(note) {
                return note.id !== deleteId;
            });

            notes = [];
            notes = filteredNotes;

            for (i=0; i<notes.length; i++) {
                notes[i].id = i+1;
            }

            fs.writeFile("db/db.json", JSON.stringify(notes), "utf8", (err, data) => {
                if (err) throw err;
            });

        });

        res.json(notes);
    });



}
