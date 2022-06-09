export const aktivnosti=[

    {
        id:'1001',

        datum:'23-04-2022',

        opis: 'Obilježavanje dana grada Pule',

        oblikRada: 'Družinska aktivnost',

        administrator: {
            id:'2',
            ime:'Biba',
            prezime:'Bibić',
            pozicija:'Pomoćni vođa družine poletaraca'
        },

        volonteri: [

            {
                id: '0002',
                ime: 'Niko',
                prezime: 'Nikolić',
                godine: 23
            },
            {
                id: '0003',
                ime: 'Olga',
                prezime: 'Olić',
                godine: 21
            }
        ]

    },

    {
        id:'1002',

        datum: '14-05-2022', 

        opis: 'Obilježavanje dana izviđača',

        oblikRada: ['Odredska aktivnost','Družinski izlet'],
                    
        administrator: [{
            id:'2',
            ime:'Biba',
            prezime:'Bibić',
            pozicija:'Pomoćni vođa družine poletaraca'
        },
        {
            id:'3',
            ime:'Car',
            prezime:'Carić',
            pozicija:'Vođa družine izviđača'
        }
    ],

        volonteri:[ {
            id: '0001',
            ime: 'Marko',
            prezime: 'Marković',
            godine: 20
        },
    
        {
            id: '0003',
            ime: 'Olga',
            prezime: 'Olić',
            godine: 21
        }
    ]

    }

    
]