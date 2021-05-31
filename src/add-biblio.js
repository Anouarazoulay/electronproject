
    function registerUser() {
        var Nom = document.getElementById('Nom').value;
        var Prenom = document.getElementById('Prenom').value;
        var Mdps = document.getElementById('Mdps').value;
     
        if (Nom == '' || Prenom == '') {
            displayNotification('Error!', 'Values cannot be empty');
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

        $query = 'INSERT INTO `bibliothecaire`(`MPasse`, `Nom`, `Prenom`) VALUES  ("' + Mdps + '", "' + Nom + '", "' + Prenom + '");';

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
        displayNotification('Done!', 'New user registered successfully');
        window.location.href = "index.html";
    }

    function displayNotification(titleValue, notificationValue) {
        const notification = {
            title: titleValue,
            body: notificationValue
        }

        const myNotification = new window.Notification(notification.title, notification)
    }