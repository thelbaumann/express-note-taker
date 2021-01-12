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

            for (i=0; i<notes.length; i++) {
                notes[i].id = i;
                currentNoteId = notes[i].id;
            }

            let addNote = {
                id: currentNoteId + 1,
                title: req.body.title,
                text: req.body.text
            };

            notes.push(addNote);

            console.log(notes);

            fs.writeFile("db/db.json", JSON.stringify(notes), "utf8", (err, data) => {
                if (err) throw err;
                console.log("a new note has been added!");
            });

        });

        res.send(notes);

    });



}
