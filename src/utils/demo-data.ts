/* eslint-disable */
export const DB = {
  token: {
    accessToken: 'fake-token-12345789-abcdefgh',
    user: { firstName: 'Admin', lastName: '', email: 'admin@test.com', password: 'password' }
  },
  customers: [
    {
      membership: false,
      mobile: '555-555-555',
      rewards: 21,
      id: 2,
      firstName: 'Larsen',
      lastName: 'Shaw',
      email: 'abc@test.com',
      avatar: '/assets/img/avatar3.png'
    },
    {
      membership: false,
      mobile: '555-555-555',
      rewards: 89,
      id: 4,
      firstName: 'Rosseta',
      lastName: 'Wilson',
      email: 'test@test.com',
      avatar: '/assets/img/avatar4.png'
    },
    {
      membership: false,
      mobile: '555-555-555',
      rewards: 38,
      id: 5,
      firstName: 'William',
      lastName: 'Carney',
      email: 'test@test.com',
      avatar: '/assets/img/avatar2.png'
    },
    {
      membership: false,
      mobile: '555-555-555',
      rewards: 23,
      id: 6,
      firstName: 'Sarah',
      lastName: 'Dunne',
      email: 'test@test.com',
      avatar: '/assets/img/avatar1.png'
    },
    {
      membership: true,
      mobile: '555-555-555',
      rewards: 23,
      id: 8,
      firstName: 'Merriana',
      lastName: 'Sean',
      email: 'test@test.com',
      avatar: '/assets/img/avatar5.png'
    },
    {
      membership: true,
      mobile: '555-555-555',
      rewards: 26,
      id: 9,
      firstName: 'Jubino',
      lastName: 'Gerret',
      email: 'test@test.com',
      avatar: '/assets/img/avatar1.png'
    },
    {
      membership: false,
      mobile: '555-555-555',
      rewards: 22,
      id: 10,
      firstName: 'Geneva',
      lastName: 'Wilson',
      email: 'test@test.com',
      avatar: '/assets/img/avatar2.png'
    },
    {
      membership: true,
      mobile: '555-555-555',
      rewards: 38,
      id: 11,
      firstName: 'Mark',
      lastName: 'Carney',
      email: 'test@test.com',
      avatar: '/assets/img/avatar5.png'
    },
    {
      membership: false,
      mobile: '555-555-555',
      rewards: 27,
      id: 12,
      firstName: 'Yann',
      lastName: 'Larrel',
      email: 'test@test.com',
      avatar: '/assets/img/avatar1.png'
    },
    { membership: true, firstName: 'John', lastName: 'Doe', mobile: '555-555-555', rewards: 88, email: 'john.doe@test.com', id: 13 },
    {
      avatar: null,
      firstName: 'sdfsdf',
      lastName: 'sdfsdf',
      mobile: '555-555-555',
      rewards: 22,
      email: 'sdfsdfsdfs',
      membership: false,
      id: 14
    }
  ],
  orders: [
    {
      id: 2,
      reference: 'order-2-2-1-2',
      customerId: 2,
      products: [
        { id: 1, productName: 'Product HHYDP', categoryId: 1, unitInStock: null, unitPrice: 18 },
        { id: 2, productName: 'Product RECZE', categoryId: 1, unitInStock: null, unitPrice: 19 }
      ],
      amount: 9.99,
      orderDate: '2017-01-01',
      shippedDate: '2017-01-01',
      shipAddress: { address: 'Gran Vía, 0123', city: 'Madrid', zipcode: '10298', country: 'Spain' }
    },
    {
      id: 3,
      reference: 'order-4-3-1-2',
      customerId: 4,
      products: [
        { id: 1, productName: 'Product HHYDP', categoryId: 1, unitInStock: null, unitPrice: 18 },
        { id: 2, productName: 'Product RECZE', categoryId: 1, unitInStock: null, unitPrice: 19 }
      ],
      amount: 5.99,
      orderDate: '2017-01-01',
      shippedDate: '2017-01-01',
      shipAddress: { address: 'Gran Vía, 0123', city: 'Madrid', zipcode: '10298', country: 'Spain' }
    },
    {
      id: 4,
      reference: 'order-4-4-1-2',
      customerId: 4,
      products: [
        { id: 3, productName: 'Product IMEHJ', categoryId: 2, unitInStock: null, unitPrice: 10 },
        { id: 4, productName: 'Product KSBRM', categoryId: 2, unitInStock: null, unitPrice: 22 }
      ],
      amount: 499.99,
      orderDate: '2017-01-01',
      shippedDate: '2017-01-01',
      shipAddress: { address: 'Gran Vía, 0123', city: 'Madrid', zipcode: '10298', country: 'Spain' }
    },
    {
      id: 5,
      reference: 'order-5-5-1-2',
      customerId: 5,
      products: [{ id: 5, productName: 'Product EPEIM', categoryId: 2, unitInStock: null, unitPrice: 21.5 }],
      amount: 399.99,
      orderDate: '2017-01-01',
      shippedDate: '2017-01-01',
      shipAddress: { address: 'Gran Vía, 0123', city: 'Madrid', zipcode: '10298', country: 'Spain' }
    },
    {
      id: 6,
      reference: 'order-6-6-1-2',
      customerId: 6,
      products: [{ id: 5, productName: 'Product EPEIM', categoryId: 2, unitInStock: null, unitPrice: 21.5 }],
      amount: 329.99,
      orderDate: '2017-01-01',
      shippedDate: '2017-01-01',
      shipAddress: { address: 'Gran Vía, 0123', city: 'Madrid', zipcode: '10298', country: 'Spain' }
    },
    {
      id: 8,
      reference: 'order-8-8-1-2',
      customerId: 8,
      products: [{ id: 5, productName: 'Product EPEIM', categoryId: 2, unitInStock: null, unitPrice: 21.5 }],
      amount: 89.99,
      orderDate: '2017-01-12',
      shippedDate: '2017-01-10',
      shipAddress: { address: 'Gran Vía, 0123', city: 'Madrid', zipcode: '10298', country: 'Spain' }
    },
    {
      id: 9,
      reference: 'order-9-9-1-2',
      customerId: 9,
      products: [{ id: 5, productName: 'Product EPEIM', categoryId: 2, unitInStock: null, unitPrice: 21.5 }],
      amount: 59.99,
      orderDate: '2017-01-01',
      shippedDate: '2017-01-01',
      shipAddress: { address: 'Gran Vía, 0123', city: 'Madrid', zipcode: '10298', country: 'Spain' }
    },
    {
      id: 10,
      reference: 'order-10-10-1-2',
      customerId: 10,
      products: [{ id: 5, productName: 'Product EPEIM', categoryId: 2, unitInStock: null, unitPrice: 21.5 }],
      amount: 49.99,
      orderDate: '2017-01-01',
      shippedDate: '2017-01-01',
      shipAddress: { address: 'Gran Vía, 0123', city: 'Madrid', zipcode: '10298', country: 'Spain' }
    },
    {
      id: 12,
      reference: 'order-2-12-1-2',
      customerId: 2,
      products: [{ id: 5, productName: 'Product EPEIM', categoryId: 2, unitInStock: null, unitPrice: 21.5 }],
      amount: 49.99,
      orderDate: '2017-01-01',
      shippedDate: '2017-01-01',
      shipAddress: { address: 'Gran Vía, 0123', city: 'Madrid', zipcode: '10298', country: 'Spain' }
    },
    {
      id: 14,
      reference: 'order-2-14-1-2',
      customerId: 4,
      products: [{ id: 5, productName: 'Product EPEIM', categoryId: 2, unitInStock: null, unitPrice: 21.5 }],
      amount: 19.99,
      orderDate: '2017-01-09',
      shippedDate: '2017-01-01',
      shipAddress: { address: 'Gran Vía, 0123', city: 'Madrid', zipcode: '10298', country: 'Spain' }
    },
    {
      id: 15,
      reference: 'order-11-15-1-2',
      customerId: 11,
      products: [
        { id: 5, productName: 'Product EPEIM', categoryId: 2, unitInStock: null, unitPrice: 21.5 },
        {
          id: 19,
          productName: 'Product XKXDO',
          categoryId: 3,
          unitInStock: null,
          unitPrice: 9.2,
          category: { id: 3, categoryName: 'Confections', description: 'Desserts, candies, and sweet breads', picture: null },
          text: 'Product XKXDO',
          value: 19
        }
      ],
      amount: 222,
      orderDate: '2017-01-19',
      shippedDate: '2017-01-16',
      shipAddress: { address: 'Gran Vía, 0123', city: 'Madrid', zipcode: '10298', country: 'Spain' },
      quantity: 12,
      price: 33
    },
    {
      products: [
        {
          id: 4,
          productName: 'Product KSBRM',
          categoryId: 2,
          unitInStock: 2,
          unitPrice: 22,
          category: {
            id: 2,
            categoryName: 'Condiments',
            description: 'Sweet and savory sauces, relishes, spreads, and seasonings',
            picture: null
          },
          text: 'Product KSBRM',
          value: 4
        },
        {
          id: 6,
          productName: 'Product VAIIV',
          categoryId: 2,
          unitInStock: null,
          unitPrice: 25,
          category: {
            id: 2,
            categoryName: 'Condiments',
            description: 'Sweet and savory sauces, relishes, spreads, and seasonings',
            picture: null
          },
          text: 'Product VAIIV',
          value: 6
        }
      ],
      customerId: 4,
      orderDate: '2017-08-08',
      shippedDate: null,
      shipAddress: { address: 'sss', city: 'sss', zipcode: 'sss', country: 'sss' },
      reference: 'ss-2-22-22',
      amount: 2323,
      id: 16
    }
  ],
  products: [
    { id: 1, productName: 'Product HHYDP', categoryId: 1, unitInStock: 23, unitPrice: 18 },
    { id: 2, productName: 'Product RECZE', categoryId: 1, unitInStock: 10, unitPrice: 19 },
    { id: 3, productName: 'Product IMEHJ', categoryId: 2, unitInStock: null, unitPrice: 10 },
    { id: 4, productName: 'Product KSBRM', categoryId: 2, unitInStock: 2, unitPrice: 22 },
    { id: 5, productName: 'Product EPEIM', categoryId: 2, unitInStock: 333, unitPrice: 21.5 },
    { id: 6, productName: 'Product VAIIV', categoryId: 2, unitInStock: null, unitPrice: 25 },
    { id: 7, productName: 'Product HMLNI', categoryId: 7, unitInStock: null, unitPrice: 30 },
    { id: 8, productName: 'Product WVJFP', categoryId: 2, unitInStock: null, unitPrice: 40 },
    { id: 9, productName: 'Product AOZBW', categoryId: 6, unitInStock: null, unitPrice: 97 },
    { id: 10, productName: 'Product YHXGE', categoryId: 8, unitInStock: null, unitPrice: 31 },
    { id: 11, productName: 'Product QMVUN', categoryId: 4, unitInStock: null, unitPrice: 21 },
    { id: 12, productName: 'Product OSFNS', categoryId: 4, unitInStock: null, unitPrice: 38 },
    { id: 13, productName: 'Product POXFU', categoryId: 8, unitInStock: null, unitPrice: 6 },
    { id: 14, productName: 'Product PWCJB', categoryId: 7, unitInStock: null, unitPrice: 23.5 },
    { id: 15, productName: 'Product KSZOI', categoryId: 2, unitInStock: 33, unitPrice: 15.5 },
    { id: 16, productName: 'Product PAFRH', categoryId: 3, unitInStock: null, unitPrice: 17.5 },
    { id: 17, productName: 'Product BLCAX', categoryId: 6, unitInStock: null, unitPrice: 39 },
    { id: 18, productName: 'Product CKEDC', categoryId: 8, unitInStock: null, unitPrice: 62.5 },
    { id: 19, productName: 'Product XKXDO', categoryId: 3, unitInStock: null, unitPrice: 9.2 },
    { id: 20, productName: 'Product QHFFP', categoryId: 3, unitInStock: 23, unitPrice: 81 },
    { id: 21, productName: 'Product VJZZH', categoryId: 3, unitInStock: null, unitPrice: 18 },
    { id: 22, productName: 'Product CPHFY', categoryId: 5, unitInStock: null, unitPrice: 21 },
    { id: 23, productName: 'Product JLUDZ', categoryId: 5, unitInStock: null, unitPrice: 9.5 },
    { id: 24, productName: 'Product QOGNU', categoryId: 2, unitInStock: null, unitPrice: 4.5 },
    { categoryId: 3, productName: 'Product ABCD', unitPrice: 222, unitInStock: 23, id: 26 },
    { id: 27, productName: 'asdasd', categoryId: 3, unitInStock: '22', unitPrice: '234' }
  ],
  categories: [
    { id: 1, categoryName: 'Beverages', description: 'Soft drinks, coffees, teas, beers, and ales', picture: null },
    { id: 2, categoryName: 'Condiments', description: 'Sweet and savory sauces, relishes, spreads, and seasonings', picture: null },
    { id: 3, categoryName: 'Confections', description: 'Desserts, candies, and sweet breads', picture: null },
    { id: 4, categoryName: 'Dairy Products', description: 'Cheeses', picture: null },
    { id: 5, categoryName: 'Grains/Cereals', description: 'Breads, crackers, pasta, and cereal', picture: null },
    { id: 6, categoryName: 'Meat/Poultry', description: 'Prepared meats', picture: null },
    { id: 7, categoryName: 'Produce', description: 'Dried fruit and bean curd', picture: null },
    { id: 8, categoryName: 'Seafood', description: 'Seaweed and fish', picture: null }
  ]
};
