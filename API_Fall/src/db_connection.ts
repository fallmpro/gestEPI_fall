import mysql, { QueryError } from 'mysql2';


const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: 'gestepi_fall'
});

connection.connect((err: any ) => {
    if (err) {
        console.error('Erreur de connexion à MySQL :', err);
        return;
    }
    console.log('Connexion établie avec succès!');
    connection.query('SELECT * FROM avion', (err, results) => {
        if (err) {
            console.error('Erreur lors de l\'exécution de la requête :', err);
            return;
        }
        console.log('Résultats de la requête :', results);
    });
});

// Exporter la connexion pour l'utiliser dans d'autres fichiers
//.....
export default connection;