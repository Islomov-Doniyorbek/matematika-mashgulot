let questionLimit = 25;
let bal = 4;

const quiz = [
    {
        q: '2x1=?',
        option: [
            '1',
            '3',
            '4',
            '2',
        ],
        answer: 3,
    },
    {
        q: '2x2=?',
        option: [
            '1',
            '3',
            '4',
            '2',
        ],
        answer: 2,
    },
    {
        q: '2x3=?',
        option: [
            '6',
            '3',
            '4',
            '2',
        ],
        answer: 0,
    },
    {
        q: '2x4=?',
        option: [
            '6',
            '3',
            '4',
            '8',
        ],
        answer: 3,
    },
    {
        q: '2x5=?',
        option: [
            '6',
            '10',
            '4',
            '8',
        ],
        answer: 1,
    },
    {
        q: '2x6=?',
        option: [
            '12',
            '10',
            '4',
            '8',
        ],
        answer: 0,
    },
    {
        q: '2x7=?',
        option: [
            '14',
            '10',
            '4',
            '8',
        ],
        answer: 0,
    },
    {
        q: '2x8=?',
        option: [
            '14',
            '10',
            '4',
            '16',
        ],
        answer: 3,
    },
    {
        q: '2x9=?',
        option: [
            '18',
            '10',
            '4',
            '16',
        ],
        answer: 0,
    },
    {
        q: '2x10=?',
        option: [
            '18',
            '10',
            '20',
            '16',
        ],
        answer: 2,
    },
    {
        q: '3x1=?',
        option: [
            '1',
            '3',
            '4',
            '2',
        ],
        answer: 1,
    },
    {
        q: '3x2=?',
        option: [
            '6',
            '3',
            '4',
            '2',
        ],
        answer: 0,
    },
    {
        q: '3x3=?',
        option: [
            '6',
            '3',
            '9',
            '2',
        ],
        answer: 2,
    },
    {
        q: '3x4=?',
        option: [
            '6',
            '3',
            '12',
            '8',
        ],
        answer: 2,
    },
    {
        q: '3x5=?',
        option: [
            '6',
            '10',
            '15',
            '18',
        ],
        answer: 2,
    },
    {
        q: '3x6=?',
        option: [
            '12',
            '11',
            '14',
            '18',
        ],
        answer: 3,
    },
    {
        q: '3x7=?',
        option: [
            '14',
            '21',
            '24',
            '18',
        ],
        answer: 1,
    },
    {
        q: '3x8=?',
        option: [
            '14',
            '21',
            '24',
            '16',
        ],
        answer: 2,
    },
    {
        q: '3x9=?',
        option: [
            '17',
            '27',
            '24',
            '16',
        ],
        answer: 1,
    },
    {
        q: '3x10=?',
        option: [
            '18',
            '10',
            '20',
            '30',
        ],
        answer: 3,
    },
    {
        q: '4x1=?',
        option: [
            '1',
            '3',
            '4',
            '2',
        ],
        answer: 2,
    },
    {
        q: '4x2=?',
        option: [
            '6',
            '8',
            '4',
            '2',
        ],
        answer: 1,
    },
    {
        q: '4x3=?',
        option: [
            '16',
            '3',
            '9',
            '12',
        ],
        answer: 3,
    },
    {
        q: '4x4=?',
        option: [
            '16',
            '20',
            '12',
            '8',
        ],
        answer: 0,
    },
    {
        q: '4x5=?',
        option: [
            '25',
            '20',
            '15',
            '18',
        ],
        answer: 1,
    },
    {
        q: '4x6=?',
        option: [
            '12',
            '11',
            '24',
            '18',
        ],
        answer: 2,
    },
    {
        q: '4x7=?',
        option: [
            '14',
            '21',
            '24',
            '28',
        ],
        answer: 3,
    },
    {
        q: '4x8=?',
        option: [
            '32',
            '21',
            '24',
            '16',
        ],
        answer: 0,
    },
    {
        q: '4x9=?',
        option: [
            '17',
            '27',
            '24',
            '36',
        ],
        answer: 3,
    },
    {
        q: '4x10=?',
        option: [
            '40',
            '10',
            '20',
            '30',
        ],
        answer: 0,
    },
    {
        q: '5x1=?',
        option: [
            '10',
            '3',
            '5',
            '2',
        ],
        answer: 0,
    },
    {
        q: '5x2=?',
        option: [
            '6',
            '8',
            '4',
            '10',
        ],
        answer: 3,
    },
    {
        q: '5x3=?',
        option: [
            '16',
            '15',
            '9',
            '12',
        ],
        answer: 1,
    },
    {
        q: '5x4=?',
        option: [
            '16',
            '20',
            '12',
            '8',
        ],
        answer: 1,
    },
    {
        q: '5x5=?',
        option: [
            '25',
            '20',
            '15',
            '17',
        ],
        answer: 0,
    },
    {
        q: '5x6=?',
        option: [
            '37',
            '30',
            '25',
            '35',
        ],
        answer: 1,
    },
    {
        q: '5x7=?',
        option: [
            '30',
            '25',
            '36',
            '35',
        ],
        answer: 3,
    },
    {
        q: '5x8=?',
        option: [
            '40',
            '41',
            '45',
            '35',
        ],
        answer: 0,
    },
    {
        q: '5x9=?',
        option: [
            '47',
            '40',
            '44',
            '45',
        ],
        answer: 3,
    },
    {
        q: '5x10=?',
        option: [
            '50',
            '60',
            '20',
            '30',
        ],
        answer: 0,
    },
    {
        q: '6x1=?',
        option: [
            '4',
            '3',
            '6',
            '2',
        ],
        answer: 2,
    },
    {
        q: '6x2=?',
        option: [
            '6',
            '12',
            '4',
            '10',
        ],
        answer: 1,
    },
    {
        q: '6x3=?',
        option: [
            '16',
            '18',
            '9',
            '12',
        ],
        answer: 1,
    },
    {
        q: '6x4=?',
        option: [
            '16',
            '24',
            '12',
            '18',
        ],
        answer: 1,
    },
    {
        q: '6x5=?',
        option: [
            '30',
            '20',
            '15',
            '18',
        ],
        answer: 0,
    },
    {
        q: '6x6=?',
        option: [
            '37',
            '36',
            '25',
            '35',
        ],
        answer: 1,
    },
    {
        q: '6x7=?',
        option: [
            '30',
            '25',
            '36',
            '42',
        ],
        answer: 3,
    },
    {
        q: '6x8=?',
        option: [
            '48',
            '42',
            '45',
            '36',
        ],
        answer: 0,
    },
    {
        q: '6x9=?',
        option: [
            '47',
            '40',
            '64',
            '54',
        ],
        answer: 3,
    },
    {
        q: '6x10=?',
        option: [
            '50',
            '60',
            '20',
            '30',
        ],
        answer: 1,
    },
    {
        q: '7x1=?',
        option: [
            '4',
            '3',
            '7',
            '2',
        ],
        answer: 2,
    },
    {
        q: '7x2=?',
        option: [
            '6',
            '14',
            '12',
            '10',
        ],
        answer: 1,
    },
    {
        q: '7x3=?',
        option: [
            '16',
            '21',
            '28',
            '18',
        ],
        answer: 1,
    },
    {
        q: '7x4=?',
        option: [
            '24',
            '28',
            '32',
            '18',
        ],
        answer: 1,
    },
    {
        q: '7x5=?',
        option: [
            '35',
            '32',
            '65',
            '18',
        ],
        answer: 0,
    },
    {
        q: '7x6=?',
        option: [
            '37',
            '42',
            '48',
            '41',
        ],
        answer: 1,
    },
    {
        q: '7x7=?',
        option: [
            '30',
            '45',
            '42',
            '49',
        ],
        answer: 3,
    },
    {
        q: '7x8=?',
        option: [
            '56',
            '64',
            '28',
            '36',
        ],
        answer: 0,
    },
    {
        q: '7x9=?',
        option: [
            '56',
            '58',
            '62',
            '63',
        ],
        answer: 3,
    },
    {
        q: '7x10=?',
        option: [
            '50',
            '70',
            '80',
            '30',
        ],
        answer: 1,
    },
    {
        q: '8x1=?',
        option: [
            '4',
            '3',
            '8',
            '2',
        ],
        answer: 2,
    },
    {
        q: '8x2=?',
        option: [
            '16',
            '12',
            '4',
            '10',
        ],
        answer: 0,
    },
    {
        q: '8x3=?',
        option: [
            '16',
            '18',
            '24',
            '12',
        ],
        answer: 2,
    },
    {
        q: '8x4=?',
        option: [
            '16',
            '24',
            '32',
            '18',
        ],
        answer: 2,
    },
    {
        q: '8x5=?',
        option: [
            '30',
            '20',
            '15',
            '40',
        ],
        answer: 3,
    },
    {
        q: '8x6=?',
        option: [
            '48',
            '36',
            '25',
            '35',
        ],
        answer: 0,
    },
    {
        q: '8x7=?',
        option: [
            '30',
            '25',
            '56',
            '42',
        ],
        answer: 2,
    },
    {
        q: '8x8=?',
        option: [
            '48',
            '42',
            '45',
            '64',
        ],
        answer: 3,
    },
    {
        q: '8x9=?',
        option: [
            '72',
            '40',
            '64',
            '76',
        ],
        answer: 0,
    },
    {
        q: '8x10=?',
        option: [
            '50',
            '60',
            '80',
            '30',
        ],
        answer: 2,
    },
    {
        q: '9x1=?',
        option: [
            '4',
            '3',
            '6',
            '9',
        ],
        answer: 3,
    },
    {
        q: '9x2=?',
        option: [
            '18',
            '12',
            '4',
            '10',
        ],
        answer: 0,
    },
    {
        q: '9x3=?',
        option: [
            '16',
            '18',
            '27',
            '12',
        ],
        answer: 2,
    },
    {
        q: '9x4=?',
        option: [
            '36',
            '24',
            '32',
            '18',
        ],
        answer: 0,
    },
    {
        q: '9x5=?',
        option: [
            '45',
            '35',
            '15',
            '42',
        ],
        answer: 0,
    },
    {
        q: '9x6=?',
        option: [
            '37',
            '56',
            '54',
            '35',
        ],
        answer: 2,
    },
    {
        q: '9x7=?',
        option: [
            '54',
            '64',
            '36',
            '63',
        ],
        answer: 3,
    },
    {
        q: '9x8=?',
        option: [
            '72',
            '42',
            '64',
            '36',
        ],
        answer: 0,
    },
    {
        q: '9x9=?',
        option: [
            '81',
            '90',
            '99',
            '84',
        ],
        answer: 0,
    },
    {
        q: '9x10=?',
        option: [
            '50',
            '60',
            '90',
            '30',
        ],
        answer: 2,
    },

]