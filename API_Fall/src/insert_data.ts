import connection from './db_connection';

// Données à insérer
const data = [
    { id: 1, prenom: 'Mouhamad' },
    { id: 2, prenom: 'Momo' },
    { id: 3, prenom: 'HBK' },
];

// Fonction pour insérer des données dans la table `mecano`
function insertData() {
    const query = 'INSERT INTO mecano (id, prenom) VALUES ?';

    // Préparer les données dans un format compatible avec `VALUES ?`
    const values = data.map((item) => [item.id, item.prenom]);

    connection.query(query, [values], (err, results) => {
        if (err) {
            console.error('Erreur lors de l\'insertion des données :', err.message);
            return;
        }
        console.log('Données insérées avec succès !', results);
    });
}

// Appeler la fonction
insertData();

// Fermer la connexion après l'insertion
connection.end((err) => {
    if (err) {
        console.error('Erreur lors de la fermeture de la connexion :', err.message);
    } else {
        console.log('Connexion MySQL fermée.');
    }
});
