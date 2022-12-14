const mockedEmployees = [
  {
    firstName: 'Basia',
    lastName: 'Osborn',
    dateOfBirth: '11-Feb-2014',
    startDate: '28-Jun-2017',
    street: 'Voluptas mollitia vo',
    city: 'Repellendus Nam et ',
    state: 'NC',
    zipCode: '31406',
    department: 'Human Resources',
  },
  {
    firstName: 'Galena',
    lastName: 'Frost',
    dateOfBirth: '18-Sep-1984',
    startDate: '07-Sep-2014',
    street: 'Qui labore magnam qu',
    city: 'Aliqua Incididunt v',
    state: 'PW',
    zipCode: '84388',
    department: 'Legal',
  },
  {
    firstName: 'Mara',
    lastName: 'Lowe',
    dateOfBirth: '26-Jan-1999',
    startDate: '27-Jan-1990',
    street: 'Anim voluptatem aute',
    city: 'Irure dolor voluptat',
    state: 'NM',
    zipCode: '35050',
    department: 'Marketing',
  },
  {
    firstName: 'Yeo',
    lastName: 'Weiss',
    dateOfBirth: '26-May-2013',
    startDate: '15-Nov-2003',
    street: 'Numquam beatae amet',
    city: 'Sit voluptas nostrum',
    state: 'OK',
    zipCode: '35987',
    department: 'Sales',
  },
  {
    firstName: 'Kathleen',
    lastName: 'Stevenson',
    dateOfBirth: '04-Oct-1986',
    startDate: '09-Jan-2011',
    street: 'Est qui tenetur aute',
    city: 'Commodo quam maxime ',
    state: 'AR',
    zipCode: '88888',
    department: 'Marketing',
  },
  {
    firstName: 'Bell',
    lastName: 'Daugherty',
    dateOfBirth: '25-Oct-1988',
    startDate: '26-Mar-2009',
    street: 'Molestiae laborum do',
    city: 'Doloribus dolore qua',
    state: 'ND',
    zipCode: '42888',
    department: 'Human Resources',
  },
  {
    firstName: 'Ezra',
    lastName: 'Vasquez',
    dateOfBirth: '07-Dec-1996',
    startDate: '10-Jan-2020',
    street: 'Molestiae voluptas d',
    city: 'Facilis dolor non ra',
    state: 'WY',
    zipCode: '71359',
    department: 'Legal',
  },
  {
    firstName: 'Dorian',
    lastName: 'Stein',
    dateOfBirth: '19-Jun-1987',
    startDate: '13-Sep-1985',
    street: 'Do earum dolores per',
    city: 'Non architecto ad es',
    state: 'OK',
    zipCode: '10301',
    department: 'Marketing',
  },
  {
    firstName: 'Imelda',
    lastName: 'Stout',
    dateOfBirth: '28-Jun-2008',
    startDate: '23-Apr-2019',
    street: 'Aut maxime ut ea lab',
    city: 'Id quia nisi magnam ',
    state: 'NJ',
    zipCode: '15039',
    department: 'Sales',
  },
  {
    firstName: 'Zane',
    lastName: 'Schmidt',
    dateOfBirth: '04-Aug-2001',
    startDate: '30-Aug-1975',
    street: 'Accusantium natus mi',
    city: 'Ex molestias quis do',
    state: 'UT',
    zipCode: '59684',
    department: 'Sales',
  },
  {
    firstName: 'Clinton',
    lastName: 'Clements',
    dateOfBirth: '25-May-1992',
    startDate: '03-Aug-2017',
    street: 'Tempor soluta dolore',
    city: 'Harum id mollit cum',
    state: 'UT',
    zipCode: '10456',
    department: 'Sales',
  },
  {
    firstName: 'Keaton',
    lastName: 'Murphy',
    dateOfBirth: '22-Aug-2002',
    startDate: '02-Aug-1986',
    street: 'Aut inventore pariat',
    city: 'Impedit reprehender',
    state: 'UT',
    zipCode: '58150',
    department: 'Engineering',
  },
  {
    firstName: 'Chava',
    lastName: 'Hammond',
    dateOfBirth: '14-Dec-2009',
    startDate: '14-Apr-2022',
    street: 'Dolor sunt ut rerum ',
    city: 'Similique sunt sit ',
    state: 'NJ',
    zipCode: '17020',
    department: 'Engineering',
  },
  {
    firstName: 'Lydia',
    lastName: 'Ramsey',
    dateOfBirth: '21-Jan-2021',
    startDate: '13-Dec-1977',
    street: 'Qui eos aliquid mag',
    city: 'Id officia proident',
    state: 'ID',
    zipCode: '68692',
    department: 'Legal',
  },
  {
    firstName: 'Daryl',
    lastName: 'Campos',
    dateOfBirth: '21-Feb-2017',
    startDate: '04-Jun-1997',
    street: 'In autem molestias d',
    city: 'Laborum Ut repellen',
    state: 'UT',
    zipCode: '36334',
    department: 'Engineering',
  },
  {
    firstName: 'Taylor',
    lastName: 'Dennis',
    dateOfBirth: '05-Oct-1989',
    startDate: '20-Jul-2006',
    street: 'Dicta eveniet quae ',
    city: 'Earum expedita non s',
    state: 'RI',
    zipCode: '29319',
    department: 'Legal',
  },
  {
    firstName: 'Amena',
    lastName: 'Boyer',
    dateOfBirth: '29-Mar-1981',
    startDate: '26-May-1991',
    street: 'Dolor saepe eos rep',
    city: 'Aspernatur nostrum a',
    state: 'NE',
    zipCode: '69896',
    department: 'Engineering',
  },
  {
    firstName: 'Camilla',
    lastName: 'Dejesus',
    dateOfBirth: '05-Feb-1983',
    startDate: '22-Apr-1972',
    street: 'Mollitia laboriosam',
    city: 'Rerum asperiores rat',
    state: 'CT',
    zipCode: '23963',
    department: 'Legal',
  },
  {
    firstName: 'Zelenia',
    lastName: 'Vang',
    dateOfBirth: '27-Jun-2020',
    startDate: '22-Dec-1988',
    street: 'Consequatur Natus q',
    city: 'Reprehenderit verit',
    state: 'NC',
    zipCode: '19801',
    department: 'Engineering',
  },
  {
    firstName: 'McKenzie',
    lastName: 'Avery',
    dateOfBirth: '13-Feb-2013',
    startDate: '12-Nov-1997',
    street: 'Soluta sed nulla rep',
    city: 'Non et nostrum sed c',
    state: 'HI',
    zipCode: '92328',
    department: 'Legal',
  },
  {
    firstName: 'Laith',
    lastName: 'Lane',
    dateOfBirth: '24-Aug-2007',
    startDate: '28-Sep-1982',
    street: 'Id magna qui quas fu',
    city: 'Nihil sit est et max',
    state: 'MA',
    zipCode: '69485',
    department: 'Engineering',
  },
  {
    firstName: 'Portia',
    lastName: 'Vance',
    dateOfBirth: '08-May-1997',
    startDate: '16-Aug-1985',
    street: 'Porro distinctio Et',
    city: 'Molestias amet a qu',
    state: 'UT',
    zipCode: '54183',
    department: 'Legal',
  },
  {
    firstName: 'Lacey',
    lastName: 'Harrell',
    dateOfBirth: '05-Oct-1999',
    startDate: '05-Sep-2016',
    street: 'Rem ea amet id acc',
    city: 'Qui minim aspernatur',
    state: 'MS',
    zipCode: '29773',
    department: 'Legal',
  },
  {
    firstName: 'Ross',
    lastName: 'Dean',
    dateOfBirth: '25-Apr-2014',
    startDate: '07-Mar-2015',
    street: 'Non rerum ut accusan',
    city: 'Placeat voluptatem',
    state: 'FM',
    zipCode: '40775',
    department: 'Engineering',
  },
  {
    firstName: 'Wanda',
    lastName: 'Lamb',
    dateOfBirth: '23-Apr-2001',
    startDate: '20-Jul-1974',
    street: 'Corrupti accusantiu',
    city: 'Corrupti aperiam ni',
    state: 'HI',
    zipCode: '69489',
    department: 'Legal',
  },
  {
    firstName: 'Kessie',
    lastName: 'Ochoa',
    dateOfBirth: '16-Sep-2000',
    startDate: '24-Dec-1981',
    street: 'Qui reiciendis persp',
    city: 'Sint tempore nostru',
    state: 'SD',
    zipCode: '50261',
    department: 'Engineering',
  },
  {
    firstName: 'Kaseem',
    lastName: 'Miles',
    dateOfBirth: '20-Apr-1993',
    startDate: '07-Feb-1972',
    street: 'Praesentium fugit l',
    city: 'Architecto cumque of',
    state: 'RI',
    zipCode: '37401',
    department: 'Sales',
  },
  {
    firstName: 'Sacha',
    lastName: 'Avila',
    dateOfBirth: '22-Mar-1970',
    startDate: '26-Jan-1973',
    street: 'Incididunt lorem lor',
    city: 'Quia magna sunt sapi',
    state: 'TN',
    zipCode: '68481',
    department: 'Marketing',
  },
  {
    firstName: 'Basia',
    lastName: 'Simmons',
    dateOfBirth: '22-Apr-2013',
    startDate: '04-Mar-2017',
    street: 'Aliquid earum iusto ',
    city: 'Sequi consectetur ut',
    state: 'HI',
    zipCode: '57737',
    department: 'Engineering',
  },
  {
    firstName: 'Skyler',
    lastName: 'Solis',
    dateOfBirth: '26-Sep-2008',
    startDate: '26-Sep-1997',
    street: 'Ut voluptatum nobis ',
    city: 'Provident quasi vol',
    state: 'DE',
    zipCode: '20457',
    department: 'Legal',
  },
  {
    firstName: 'Alexandra',
    lastName: 'Lott',
    dateOfBirth: '15-Jul-1971',
    startDate: '09-Nov-1979',
    street: 'At incidunt proiden',
    city: 'Qui et et vel dolor ',
    state: 'IA',
    zipCode: '33408',
    department: 'Legal',
  },
  {
    firstName: 'Alvin',
    lastName: 'Wagner',
    dateOfBirth: '30-Apr-1975',
    startDate: '05-Dec-1993',
    street: 'Consequat Qui dolor',
    city: 'Laborum Deserunt a ',
    state: 'MP',
    zipCode: '88120',
    department: 'Human Resources',
  },
  {
    firstName: 'Sloane',
    lastName: 'Hooper',
    dateOfBirth: '10-Feb-2017',
    startDate: '01-Apr-1980',
    street: 'Molestias distinctio',
    city: 'Ipsum id eveniet v',
    state: 'IA',
    zipCode: '29780',
    department: 'Human Resources',
  },
  {
    firstName: 'Stone',
    lastName: 'Weeks',
    dateOfBirth: '03-Mar-2017',
    startDate: '04-Dec-1988',
    street: 'Cupiditate totam qui',
    city: 'Earum dolores minima',
    state: 'WV',
    zipCode: '50220',
    department: 'Legal',
  },
  {
    firstName: 'Jana',
    lastName: 'Newman',
    dateOfBirth: '26-Feb-1974',
    startDate: '06-May-1980',
    street: 'Ea exercitation do v',
    city: 'Dolore ratione aliqu',
    state: 'KY',
    zipCode: '60869',
    department: 'Legal',
  },
  {
    firstName: 'Farrah',
    lastName: 'Schmidt',
    dateOfBirth: '06-Feb-1993',
    startDate: '04-Jun-2006',
    street: 'Impedit cumque do c',
    city: 'Eum amet recusandae',
    state: 'PA',
    zipCode: '46660',
    department: 'Human Resources',
  },
  {
    firstName: 'Sage',
    lastName: 'Peterson',
    dateOfBirth: '21-Oct-1993',
    startDate: '16-Nov-2016',
    street: 'Tempore fugiat reru',
    city: 'Repudiandae aliquam ',
    state: 'VA',
    zipCode: '41838',
    department: 'Sales',
  },
]

export default mockedEmployees
