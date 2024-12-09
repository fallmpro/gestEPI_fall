### Note de conception d'architecture


## Mouhamad Fall BTS SIO SLAM


## Liste des endpoints


| **Méthode** | **Endpoint**            | **Paramètres**                           | **Description**                       |
|-------------|--------------------------|------------------------------------------|---------------------------------------|
| `GET`       | `/avions`               | Aucun                                    | Récupère la liste des avions.         |
| `GET`       | `/avions/{id}`          | `id` (int)                               | Récupère les détails d'un avion.      |
| `POST`      | `/avions`               | `model` (varchar), `compagnie` (varchar) | Ajoute un nouvel avion.               |
| `PUT`       | `/avions/{id}`          | `id` (int), `model`, `compagnie`         | Met à jour les informations d'un avion. |
| `DELETE`    | `/avions/{id}`          | `id` (int)                               | Supprime un avion.                    |
| `GET`       | `/mecanos`              | Aucun                                    | Récupère la liste des mécaniciens.    |
| `GET`       | `/mecanos/{id}`         | `id` (int)                               | Récupère les détails d'un mécanicien. |
| `POST`      | `/mecanos`              | `nom` (varchar), `prenom` (varchar)      | Ajoute un nouveau mécanicien.         |
| `PUT`       | `/mecanos/{id}`         | `id` (int), `nom`, `prenom`             | Met à jour les informations d'un mécanicien. |
| `DELETE`    | `/mecanos/{id}`         | `id` (int)                               | Supprime un mécanicien.               |
| `GET`       | `/entretiens`           | Aucun                                    | Récupère la liste des entretiens.     |
| `GET`       | `/entretiens/{id}`      | `id` (int)                               | Récupère les détails d'un entretien.  |
| `POST`      | `/entretiens`           | `avion_id` (int), `mecano_id` (int)      | Ajoute un nouvel entretien.           |
| `PUT`       | `/entretiens/{id}`      | `id`, `avion_id`, `mecano_id`           | Met à jour un entretien.              |
| `DELETE`    | `/entretiens/{id}`      | `id` (int)                               | Supprime un entretien.                |


![alt text](image.png)

*  **Modèle conceptuel :**

***Avion***
 
> **id** (int) : Identifiant unique de l'avion
> **model** (varchar) : Modèle de l'avion 
> **compagnie** (varchar) : Compagnie de l'avion
>

 ***Mécano***
 
> **id** (int) : Identifiant unique du technicien
> **nom** (varchar) : Nom du technicien
> **prenom**(varchar) : Prénom du technicien
 
 ***Entretien***
> **id** (int) : Identifiant unique de l'entretien
> **avion_id** (int) : Référence vers l'avion concerné
> **mecano_id** (int) : Référence vers le technicien ayant réalisé l'entretien





