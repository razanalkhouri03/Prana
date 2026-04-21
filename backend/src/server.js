const express = require("express");
const path = require("path");
const mysql = require("mysql");
const cors = require("cors");

const server = express();

server.use(cors());
server.use(express.json()); 
server.use(express.urlencoded({ extended: true }));

/* 1. Datenbank-Verbindung konfigurieren */
const db = mysql.createConnection({
    host: "localhost",
    user: "root",       // Standard-User bei XAMPP/WAMP
    password: "",       // Standardmäßig leer bei XAMPP
    database: "prana"
});

/* 2. Verbindung herstellen */
db.connect((err) => {
    if (err) {
        console.error("Fehler beim Verbinden zur Datenbank:", err.message);
        return;
    }
    console.log("Erfolgreich mit der MySQL-Datenbank verbunden.");
});

/* 3. Statische Dateien servieren */
server.use("/", express.static(path.join(__dirname, "frontend")));

/* 4. Server starten */
server.listen(8080, () => {
    console.log("Server läuft auf http://localhost:8080");
});

server.post("/add", (req, res) => {
    // Daten aus dem Request-Body holen
    const { name, kurs, email } = req.body;

    // SQL-Befehl zum Einfügen der Daten
    const sql = "INSERT INTO users (name, kurs, email) VALUES (?, ?, ?)";
    
    // Abfrage an die Datenbank senden
    db.query(sql, [name, kurs, email], (err, result) => {
        if (err) {
            console.error("Fehler beim Speichern:", err.message);
            return res.status(500).send({ error: "Datenbankfehler" });
        }

        console.log("Datensatz erfolgreich hinzugefügt!");
        
        // Bestätigung an das Frontend senden
        res.status(200).send({
            message: "Benutzer erfolgreich gespeichert",
            insertedId: result.insertId
        });
    });
});