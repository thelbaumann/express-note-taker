const fs = require("fs");
let notes = [];

module.exports = function(app) {

    app.get("/api/notes", function(req, res) {
        fs.readFile("db/db.json", "utf8", (err, data) => {
            if (err) throw err;
            notes = JSON.parse(data);
            return res.json(notes);
        });
    });

    app.post("/api/notes", function(req, res) {
        fs.readFile("db/db.json", (err, data) => {
            if (err) throw err;

            let notes = JSON.parse(data);
            let currentNoteId;

            if (notes.length == 0) {
                currentNoteId = -1;
            }

            else {
                for (i=0; i<notes.length; i++) {
                    notes[i].id = i;
                    currentNoteId = notes[i].id;
                }
            }

            let addNote = {
                id: currentNoteId + 1,
                title: req.body.title,
                text: req.body.text
            };

            notes.push(addNote);

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
                notes[i].id = i;
            }

            fs.writeFile("db/db.json", JSON.stringify(notes), "utf8", (err, data) => {
                if (err) throw err;
            });

        });

        res.json(notes);
    });



}
