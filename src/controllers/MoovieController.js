const MooviesController = {
    findAll(req, res) {

        /**
      * Aqui entraria a regra de pesistência do banco de dados
      */

        res.json([
            {
                id: 1,
                title: 'Homem Aranha',
                description: 'Um filme baseado em historia em quadrinhos',
                category_id: 1,
                realease_date: '01/10/2022'
            },
            {
                id: 2,
                nome: 'A casa de Cera',
                description: 'Um filme de suspense baseado em sumiço de pessoas e uma cidade e o misterio de uma cidade de cera',
                category_id: 2,
                realease_date: '06/05/2021'
            },
            {
                id: 3,
                nome: 'A branca de neve',
                description: 'Um filme de desenho de uma princesa e a madrasta má',
                category_id: 3,
                realease_date: '20/12/2023'
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
                title: 'Homem Aranha',
                description: 'Um filme baseado em historia em quadrinhos',
                category_id: 1,
                realease_date: '01/10/2022'
            
        });
    },
    create(req, res) {
        const { title, description, category_id, realease_date } = req.body;
        /**
         * Aqui entraria a regra de pesistência do banco de dados
         */
        res.status(201).json({
            id: Number.MAX_SAFE_INTEGER,
            title,
            description,
            category_id,
            realease_date,

        });

    },
    delete(req, res) {
        const { id } = req.params;
        /**
      * Aqui entraria a regra de pesistência do banco de dados
      */
        res.status(204).json();
    },

}

module.exports = MooviesController;