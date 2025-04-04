let questionLimit = 20;
let bal = 5;
let k = 120

const quiz = [
    {
        q: '5+12=?',
        option: [
            '17',
            '18',
            '16',
            '512',
        ],
        answer: 0,
    },
    {
        q: '5+8=?',
        option: [
            '17',
            '58',
            '16',
            '13',
        ],
        answer: 3,
    },
    {
        q: '1+13=?',
        option: [
            '17',
            '113',
            '16',
            '14',
        ],
        answer: 3,
    },
    {
        q: '13+12=?',
        option: [
            '205',
            '13',
            '1',
            '25',
        ],
        answer: 3,
    },
    {
        q: '10+13=?',
        option: [
            '17',
            '25',
            '24',
            '23',
        ],
        answer: 3,
    },
    {
        q: '17+13=?',
        option: [
            '17',
            '4',
            '24',
            '30',
        ],
        answer: 3,
    },
    {
        q: '14+13=?',
        option: [
            '17',
            '4',
            '21',
            '27',
        ],
        answer: 3,
    },
    {
        q: '17+18=?',
        option: [
            '17',
            '35',
            '24',
            '34',
        ],
        answer: 1,
    },
    {
        q: '17+3=?',
        option: [
            '17',
            '19',
            '24',
            '20',
        ],
        answer: 3,
    },
    {
        q: '7+4=?',
        option: [
            '17',
            '12',
            '21',
            '11',
        ],
        answer: 3,
    },
    {
        q: '7+8=?',
        option: [
            '17',
            '15',
            '21',
            '11',
        ],
        answer: 1,
    },
    {
        q: '2+4=?',
        option: [
            '6',
            '5',
            '7',
            '3',
        ],
        answer: 0,
    },
    {
        q: '6+4=?',
        option: [
            '17',
            '9',
            '10',
            '18',
        ],
        answer: 2,
    },
    {
        q: '2+9=?',
        option: [
            '17',
            '11',
            '10',
            '29',
        ],
        answer: 1,
    },
    {
        q: '5+13=?',
        option: [
            '17',
            '4',
            '19',
            '18',
        ],
        answer: 3,
    },
    {
        q: '18+9=?',
        option: [
            '27',
            '26',
            '28',
            '31',
        ],
        answer: 0,
    },
    {
        q: '1+10=?',
        option: [
            '9',
            '10',
            '13',
            '11',
        ],
        answer: 3,
    },
    {
        q: '17+13=?',
        option: [
            '17',
            '4',
            '24',
            '30',
        ],
        answer: 3,
    },
    {
        q: '13+8=?',
        option: [
            '19',
            '20',
            '22',
            '21',
        ],
        answer: 3,
    },
    { q: '13+8=?', option: ['19', '20', '21', '22'], answer: 2 }, // 13+8 = 21
    { q: '25+16=?', option: ['41', '39', '40', '38'], answer: 0 }, // 25+16 = 41
    { q: '47+12=?', option: ['59', '60', '58', '61'], answer: 0 }, // 47+12 = 59
    { q: '34+25=?', option: ['59', '60', '58', '61'], answer: 0 }, // 34+25 = 59
    { q: '62+14=?', option: ['75', '76', '77', '78'], answer: 1 }, // 62+14 = 76
    { q: '48+19=?', option: ['66', '67', '68', '69'], answer: 2 }, // 48+19 = 67
    { q: '56+21=?', option: ['76', '77', '75', '78'], answer: 1 }, // 56+21 = 77
    { q: '39+18=?', option: ['57', '56', '55', '58'], answer: 0 }, // 39+18 = 57
    { q: '27+36=?', option: ['63', '61', '62', '64'], answer: 0 }, // 27+36 = 63
    { q: '42+24=?', option: ['66', '67', '65', '68'], answer: 0 }, // 42+24 = 66
    { q: '33+47=?', option: ['79', '80', '81', '82'], answer: 1 }, // 33+47 = 80
    { q: '18+49=?', option: ['66', '67', '68', '69'], answer: 2 }, // 18+49 = 67
    { q: '22+53=?', option: ['75', '76', '74', '77'], answer: 0 }, // 22+53 = 75
    { q: '64+15=?', option: ['79', '69', '89', '77'], answer: 0 }, // 64+15 = 79
    { q: '55+17=?', option: ['62', '72', '82', '74'], answer: 1 }, // 55+17 = 72
    { q: '46+28=?', option: ['73', '74', '75', '76'], answer: 1 }, // 46+28 = 74
    { q: '59+19=?', option: ['78', '68', '88', '77'], answer: 0 }, // 59+19 = 78
    { q: '31+44=?', option: ['74', '75', '65', '77'], answer: 1 }, // 31+44 = 75
    { q: '38+35=?', option: ['72', '73', '74', '75'], answer: 1 }, // 38+35 = 73
    { q: '29+46=?', option: ['74', '75', '76', '77'], answer: 1 }, // 29+46 = 75
    { q: '51+26=?', option: ['76', '77', '78', '79'], answer: 1 }, // 77
    { q: '62+33=?', option: ['94', '95', '96', '97'], answer: 1 }, // 95
    { q: '45+29=?', option: ['72', '73', '74', '75'], answer: 2 }, // 74
    { q: '78+14=?', option: ['91', '92', '93', '94'], answer: 1 }, // 92
    { q: '39+58=?', option: ['96', '97', '98', '99'], answer: 1 }, // 97
    { q: '86+12=?', option: ['97', '98', '99', '100'], answer: 1 }, // 98
    { q: '64+45=?', option: ['108', '109', '110', '111'], answer: 1 }, // 109
    { q: '91+17=?', option: ['106', '107', '108', '109'], answer: 2 }, // 108
    { q: '88+33=?', option: ['121', '122', '123', '124'], answer: 0 }, // 121
    { q: '57+68=?', option: ['124', '125', '126', '127'], answer: 1 }, // 125
    { q: '99+12=?', option: ['110', '111', '112', '113'], answer: 1 }, // 111
    { q: '84+47=?', option: ['130', '131', '132', '133'], answer: 1 }, // 131
    { q: '76+59=?', option: ['134', '135', '136', '137'], answer: 1 }, // 135
    { q: '93+82=?', option: ['174', '175', '176', '177'], answer: 1 }, // 175
    { q: '85+68=?', option: ['151', '152', '153', '154'], answer: 2 }, // 153
    { q: '104+27=?', option: ['130', '131', '132', '133'], answer: 1 }, // 131
    { q: '113+49=?', option: ['161', '162', '163', '164'], answer: 1 }, // 162
    { q: '121+35=?', option: ['155', '156', '157', '158'], answer: 1 }, // 156
    { q: '137+24=?', option: ['161', '162', '163', '164'], answer: 0 }, // 161
    { q: '142+38=?', option: ['179', '180', '181', '182'], answer: 1 }, // 180
    { q: '95+106=?', option: ['200', '201', '202', '203'], answer: 1 }, // 201
    { q: '87+119=?', option: ['205', '206', '207', '208'], answer: 1 }, // 206
    { q: '134+76=?', option: ['209', '210', '211', '212'], answer: 1 }, // 210
    { q: '122+88=?', option: ['209', '210', '211', '212'], answer: 1 }, // 210
    { q: '147+59=?', option: ['205', '206', '207', '208'], answer: 1 }, // 206
    { q: '151+97=?', option: ['248', '249', '250', '251'], answer: 0 }, // 248
    { q: '163+84=?', option: ['246', '247', '248', '249'], answer: 1 }, // 247
    { q: '172+33=?', option: ['203', '204', '205', '206'], answer: 2 }, // 205
    { q: '185+21=?', option: ['205', '206', '207', '208'], answer: 1 }, // 206
    { q: '199+43=?', option: ['241', '242', '243', '244'], answer: 1 }, // 242
]