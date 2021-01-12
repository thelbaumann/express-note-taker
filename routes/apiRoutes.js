const fs = require("fs");

module.exports = function(app) {

    app.get("/api/notes", function(req, res) {
        fs.readFile("db/db.json", "utf8", (err, data) => {
            if (err) throw err;
            let notes = data;
            res.json(JSON.parse(notes));
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

            let newNote = {
                id: currentNoteId + 1,
                title: req.body.title,
                text: req.body.text
            };

            notes.push(newNote);

            console.log(notes);

            fs.writeFileSync("db/db.json", JSON.stringify(notes), "utf8", (err, data) => {
                if (err) throw err;
                console.log("a new note has been added!");
            })
    
            res.send(notes);

        });

        

    });

    


};
