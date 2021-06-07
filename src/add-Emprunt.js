
    function registerUser() {
        var NumEx = document.getElementById('NumEx').value;
        var NumAd = document.getElementById('NumAd').value;
        var DateEmp = document.getElementById('DateEmp').value;
        var DatePre = document.getElementById('DatePre').value;

        var DateRe = document.getElementById('DateRe').value;

     
        if (NumEx == '') {
            displayNotification('Erreur!', 'Les valeurs ne peuvent pas être vides  ');
            return
        }
        if (NumAd == '') {
            displayNotification('Erreur!', 'Les valeurs ne peuvent pas être vides ');
            return
        }
        if (DateEmp == '') {
            displayNotification('Erreur!', 'Les valeurs ne peuvent pas être vides ');
            return
        }
        if (DatePre == '') {
            displayNotification('Erreur!', 'Les valeurs ne peuvent pas être vides ');
            return
        }
        if (DateRe == '') {
            displayNotification('Erreur!', 'Les valeurs ne peuvent pas être vides ');
            return
        }
        // var mysql = require('mysql');
        // var config = require("./db-config");

        // // Add the credentials to access your database
        // var connection = mysql.createConnection(config.db);

        // // connect to mysql
        // connection.connect(function (err) {
        //     // in case of error
        //     if (err) {
        //         console.log(err.code);
        //         console.log(err.fatal);
        //     }
        // });

        let db = require("./db")

        // Perform a query

        $query = 'INSERT INTO `emprunt`( `DateEmprunt`, `EtatEmprunt`, `DatePrecis`, `DateRetour`, `AdherentID`, `ExemplaireID`) VALUES ("' + DateEmp + '", "Emprunté", "' + DatePre + '", "' + DateRe + '", "' + NumAd + '", "' + NumEx + '");';

        db.query($query, function (err, rows, fields) {
            if (err) {
                console.log("An error occurred performing the query.");
                console.log(err);
                return;
            }

            console.log("Query successfully executed");
        });

        // Close the connection
        db.end(function () {
            // The connection has been closed
        });

        // display notification
        displayNotification('Succès', 'Nouvel Emprunt enregistré avec succès');
        window.location.href = "emprint.html";
    }

    function displayNotification(titleValue, notificationValue) {
        const notification = {
            title: titleValue,
            body: notificationValue
        }

        const myNotification = new window.Notification(notification.title, notification)
    }