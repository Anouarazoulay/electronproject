
    function registerUser() {
        var Titre = document.getElementById('Titre').value;
        var Auteur = document.getElementById('Auteur').value;
        var Categorie = document.getElementById('Categorie').value;
        var Section = document.getElementById('Section').value;

        var Couloir = document.getElementById('Couloir').value;

        var Description = document.getElementById('Description').value;

        var Tags = document.getElementById('Tags').value;

        var nmbr = document.getElementById('nmbr').value;
        var i = 0;
        if (Titre == '') {
            displayNotification('Erreur!', 'Les valeurs ne peuvent pas être vides Titre ');
            return
        }
        if (Auteur == '') {
            displayNotification('Erreur!', 'Les valeurs ne peuvent pas être vides Auteur');
            return
        }
        if (Categorie == '') {
            displayNotification('Erreur!', 'Les valeurs ne peuvent pas être vides Categorie');
            return
        }
        if (Section == '') {
            displayNotification('Erreur!', 'Les valeurs ne peuvent pas être vides Section');
            return
        }
        if (Couloir == '') {
            displayNotification('Erreur!', 'Les valeurs ne peuvent pas être vides Couloir');
            return
        }
        if (Description == '') {
            displayNotification('Erreur!', 'Les valeurs ne peuvent pas être vides Description');
            return
        }
        if (Tags == '') {
            displayNotification('Erreur!', 'Les valeurs ne peuvent pas être vides Tags');
            return
        }
        if (nmbr == '') {
            displayNotification('Erreur!', 'Les valeurs ne peuvent pas être vides nmbr');
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

        $query = 'INSERT INTO `livre`(`Titre`, `Auteur`, `Categorie`, `Section`, `Couloir`, `Descr`, `Tags`) VALUES  ("' + Titre + '", "' + Auteur + '", "' + Categorie + '", "' + Section + '", "' + Couloir + '", "' + Description + '", "' + Tags + '");';

        db.query($query, function (err, rows, fields) {
            if (err) {
                console.log("An error occurred performing the query.");
                console.log(err);
                return;
            }

            console.log("Query successfully executed");
        });

        $query = 'INSERT INTO `exemplaire`(`Etat`, `LivreID`) VALUES ("pble",(select max(IDLivre) from livre));';

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
          while (i <= nmbr);

        
    

        // display notification
    }

    function displayNotification(titleValue, notificationValue) {
        const notification = {
            title: titleValue,
            body: notificationValue
        }

        const myNotification = new window.Notification(notification.title, notification)
    }