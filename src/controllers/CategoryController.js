const CategoryController = {
    findAll(req, res) {

         /**
       * Aqui entraria a regra de pesistência do banco de dados
       */

        res.json([
            {
                id: 1, nome: 'Filmes A', description: 'Essa categoria traz filmes com a letra A',
            },
            {
                id: 2, nome: 'Filmes B', description: 'Essa categoria traz filmes com a letra B',
            },
        ]);
    },
    find(req, res) {
        const { id } = req.params;
         /**
       * Aqui entraria a regra de pesistência do banco de dados
       */
        res.json({
             id: id,
             nome: 'Filmes A',
             description: 'Essa categoria traz filmes com a letra A',
        });
    },
    create(req, res) { 
        const { name, description }= req.body;
      /**
       * Aqui entraria a regra de pesistência do banco de dados
       */
        res.status(201).json({
            id: Number.MAX_SAFE_INTEGER,
            name: name,
            description: description,
       });

    },
    delete(req, res) { 
        const { id }= req.params;
         /**
       * Aqui entraria a regra de pesistência do banco de dados
       */
        res.status(204).json();
    },
};

module.exports = CategoryController;