
    function registerUser() {
        var Nom = document.getElementById('Nom').value;
        var Prenom = document.getElementById('Prenom').value;
        var email = document.getElementById('email').value;
        var Mdps = document.getElementById('Mdps').value;
     
        if (Nom == '' || Prenom == '' || email == '' || Mdps == '') {
            displayNotification('Erreur!', 'Les valeurs ne peuvent pas être vides');
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

        $query = 'INSERT INTO `adherent`( `MPasse`, `Nom`, `Prenom`, `Email`) VALUES ("' + Mdps + '", "' + Nom + '", "' + Prenom + '", "' + email + '");';

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
        
        displayNotification('Succès', 'Nouvel adherent enregistré avec succès');
        window.location.href = "page1.html";
    }

    function displayNotification(titleValue, notificationValue) {
        const notification = {
            title: titleValue,
            body: notificationValue
        }

        const myNotification = new window.Notification(notification.title, notification)
    }