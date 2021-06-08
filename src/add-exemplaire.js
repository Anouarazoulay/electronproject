
    function registerUser() {
        var Titre = document.getElementById('Titre').value;
        var nmbr = document.getElementById('nmbr').value;
        var i = 0;
        if (Titre == '' || nmbr == '') {
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

        $query = 'INSERT INTO `exemplaire`(`Etat`, `LivreID`) VALUES  ("Disponible", "' + Titre + '");';

        do {

            db.query($query, function (err, rows, fields) {
                if (err) {
                    console.log("An error occurred performing the query.");
                    console.log(err);
                    return;
                }
            });
            i++;
          }
          while (i < nmbr);

        // display notification
     
    }

    function displayNotification(titleValue, notificationValue) {
        const notification = {
            title: titleValue,
            body: notificationValue
        }

        const myNotification = new window.Notification(notification.title, notification)
    }