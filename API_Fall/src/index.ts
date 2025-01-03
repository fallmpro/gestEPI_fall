//********** Imports **********//
import connection from './db_connection';
import express, { Request, Response } from 'express';


const port = process.env.PORT || 5500;

// Connection to the database
connection.addListener('connection',
  () => console.log('Connected to the database')
);



const app = express();
const PORT = 3000;

// Middleware pour parser les requêtes JSON
app.use(express.json());

// Point d’accès API (GET)
app.get('/statut', (req: Request, res: Response) => {
    res.status(200).json({ message: 'API accessible et opérationnelle !' });
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});