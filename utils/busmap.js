export const bus1Seating = {
    lowerDeck: [
        {
            columnOne: [],
            columnTwo: ['seat', 'seat']
        },
        {
            columnOne: [],
            columnTwo: ['seat', 'seat']
        },
        {
            columnOne: ['sleeper'],
            columnTwo: ['seat', 'seat', 'seat', 'seat']
        },
        {
            columnOne: ['sleeper'],
            columnTwo: ['seat', 'seat', 'seat', 'seat']
        },
        {
            columnOne: ['sleeper'],
            columnTwo: ['seat', 'seat', 'seat', 'seat']
        },
        {
            columnOne: ['sleeper'],
            columnTwo: ['sleeper', 'sleeper']
        },
        {
            columnOne: ['sleeper'],
            columnTwo: ['sleeper', 'sleeper']
        },
        {
            columnOne: ['sleeper', 'sleeper'],
            columnTwo: ['sleeper', 'sleeper']
        },
    ],
    upperDeck: [
        {
            columnOne: ['sleeper'],
            columnTwo: ['sleeper', 'sleeper']
        },
        {
            columnOne: ['sleeper'],
            columnTwo: ['sleeper', 'sleeper']
        },
        {
            columnOne: ['sleeper'],
            columnTwo: ['sleeper', 'sleeper']
        },
        {
            columnOne: ['sleeper'],
            columnTwo: ['sleeper', 'sleeper']
        },
        {
            columnOne: ['sleeper'],
            columnTwo: ['sleeper', 'sleeper']
        },
        {
            columnOne: ['sleeper'],
            columnTwo: ['sleeper', 'sleeper']
        },
        {
            columnOne: ['sleeper'],
            columnTwo: ['sleeper', 'sleeper']
        },
        {
            columnOne: ['sleeper'],
            columnTwo: ['sleeper', 'sleeper']
        },
    ]
}


export const bus2Seating = {
    lowerDeck: [
        {
            columnOne: [
                { seatType: 'sleeper', status: 'available', price: 100 },
                { seatType: 'seater', status: 'booked', price: 120 },
            ],
            columnTwo: [
                { seatType: 'seater', status: 'available', price: 110 },
                { seatType: 'seater', status: 'available', price: 110 },
            ]
        },
        // Add more rows as needed...
    ],
    upperDeck: [
        {
            columnOne: [
                { seatType: 'sleeper', status: 'booked', price: 150 },
                { seatType: 'sleeper', status: 'available', price: 150 },
            ],
            columnTwo: [
                { seatType: 'seater', status: 'available', price: 130 },
                { seatType: 'seater', status: 'available', price: 130 },
            ]
        },
        // Add more rows as needed...
    ]
};

export const bus3Seating = {
    lowerDeck: [
        {
            columnOne: ['seat', 'seat'],
            columnTwo: ['seat', 'seat', 'seat']
        },
        {
            columnOne: ['seat', 'seat'],
            columnTwo: ['seat', 'seat', 'seat']
        },
        {
            columnOne: ['seat', 'seat'],
            columnTwo: ['seat', 'seat', 'seat']
        },
        {
            columnOne: ['seat', 'seat'],
            columnTwo: ['seat', 'seat', 'seat']
        },
        {
            columnOne: ['seat', 'seat'],
            columnTwo: ['seat', 'seat', 'seat']
        },
        {
            columnOne: ['seat', 'seat'],
            columnTwo: ['seat', 'seat', 'seat']
        },
        {
            columnOne: ['seat'],
            columnTwo: ['seat', 'seat', 'seat']
        },
        {
            columnOne: ['seat'],
            columnTwo: ['seat', 'seat', 'seat']
        },
        {
            columnOne: ['sleeper'],
            columnTwo: ['seat', 'seat', 'seat', 'seat']
        },
        {
            columnOne: ['sleeper'],
            columnTwo: ['seat', 'seat', 'seat', 'seat']
        },
        {
            columnOne: ['sleeper'],
            columnTwo: ['seat', 'seat', 'seat', 'seat']
        },
    ],
}
