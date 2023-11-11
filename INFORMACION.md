## Consideraciones generales
    
    1 - la carpeta sql_model contiene el modelo de la Base de Datos que se manejará con esta app.
    2 - Se ha añadido un campo más en la tabla de Autores(authors) que se llama surname, he considerado que el nombre serán los nombres y apellidos y esto puede coincidir entre varios usuarios, pero cada uno tendra un nombre de usuario que será único.



## Rutas

    POSTS:
        GET /api/posts
            - Recupera todos los posts de la BD

        GET /api/posts/:USERNAME
            - Recupera los posts del autor que tiene el username que se pasa por parámetro en la url

        POST /api/posts
            - Crea un nuevo post

    AUTHORS:
        GET /api/posts
            - Recupera todos los autores de la BD

        POST /api/posts
            - Crea un nuevo autor