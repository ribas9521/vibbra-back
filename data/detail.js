module.exports = {
  user_id: 1,
  type: 'venda',
  value: 10999,
  description: 'Surface Studio',
  trade_for: '',
  location: {
    lat: -19.8157,
    lng: -43.9542,
    address: 'Praça Sete de Setembro',
    city: 'Belo Horizonte',
    state: 'MG',
    zip_code: 30130010,
  },
  urgency: {
    type: 'baixa',
    limit_date: new Date(),
  },
  photos: [
    {
      src:
        'https://raw.githubusercontent.com/ribas9521/vibbra-back/master/img/product/1.jpg',
    },
    {
      src:
        'https://raw.githubusercontent.com/ribas9521/vibbra-back/master/img/product/2.jpg',
    },
    {
      src:
        'https://raw.githubusercontent.com/ribas9521/vibbra-back/master/img/product/3.jpg',
    },
  ],
};
