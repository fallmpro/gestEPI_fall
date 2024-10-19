### Note de conception d'architecture


## Mouhamad Fall BTS SIO SLAM

## Opérations CRUD

## Liste des endpoints



| Endpoints| Paramètres | Description |
| -------- | -------- | -------- |
| Get    | Text     | Text     |


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





