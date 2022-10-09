const interiorsData = [
  {
    id: 1,
    title: 'Wood Lodge',
    location: 'Somewhere, Norway',
    images: ['/images/interiors/interior1-1.jpeg', '/images/interiors/interior1.jpg' ],
    alt: 'interior image',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu sollicitudin velit. Maecenas cursus tincidunt diam sit amet dictum. In aliquet libero non enim feugiat consectetur.",
    features: ['parking', 'mountain', 'kitchen'],
    price: 100,
    capacity: 4,
    tiers: {
      regular: ['Continental breakfast served in hours 6.30-10.00', 'Bath Cosmetics'],
      luxury: ['Continental breakfast served in hours 6.30-10.00','Bath Cosmetics', 'Dry and Steam Sauna', 'Minibar', 'Daily wine selection']
    }
  },
  {
    id: 2,
    title: 'Premium Lodge',
    location: 'Somewhere, Norway',
    images: ['/images/interiors/interior2-1.jpeg' , '/images/interiors/interior2.jpg'],
    alt: 'interior image',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu sollicitudin velit. Maecenas cursus tincidunt diam sit amet dictum. In aliquet libero non enim feugiat consectetur.",
    features: ['bath', 'wifi', 'parking', 'mountain', 'kitchen', 'nosmoke'],
    price: 349.99,
    capacity:6,
    tiers: {
      regular: ['Continental breakfast served in hours 6.30-10.00', 'Bath Cosmetics'],
      luxury: ['Continental breakfast served in hours 6.30-10.00','Bath Cosmetics', 'Dry and Steam Sauna', 'Minibar', 'Daily wine selection']
    }

  },
  {
    id: 3,
    title: 'Regular Lodge',
    location: 'Somewhere, Norway',
    images: ['/images/interiors/interior3-1.jpeg', '/images/interiors/interior3.jpg'],
    alt: 'interior image',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu sollicitudin velit. Maecenas cursus tincidunt diam sit amet dictum. In aliquet libero non enim feugiat consectetur.",
    features: ['bath', 'wifi', 'parking', 'mountain'],
    price: 245.50,
    capacity: 3,
    tiers: {
      regular: ['Continental breakfast served in hours 6.30-10.00', 'Bath Cosmetics'],
      luxury: ['Continental breakfast served in hours 6.30-10.00','Bath Cosmetics', 'Dry and Steam Sauna', 'Minibar', 'Daily wine selection']
    }

  },
  {
    id: 4,
    title: 'Simple Lodge',
    location: 'Somewhere, Norway',
    images: ['/images/interiors/interior4-1.jpeg', '/images/interiors/interior4.jpg'],
    alt: 'interior image',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu sollicitudin velit. Maecenas cursus tincidunt diam sit amet dictum. In aliquet libero non enim feugiat consectetur.",
    features: ['wifi', 'parking', 'mountain', 'nosmoke'],
    price: 86,
    capacity: 2,
    tiers: {
      regular: ['Continental breakfast served in hours 6.30-10.00', 'Bath Cosmetics'],
      luxury: ['Continental breakfast served in hours 6.30-10.00','Bath Cosmetics', 'Dry and Steam Sauna', 'Minibar', 'Daily wine selection']
    }

  },
  {
    id: 5,
    title: 'Amazing Lodge',
    location: 'Somewhere, Norway',
    images: ['/images/interiors/interior5-1.jpeg', '/images/interiors/interior5.jpg'],
    alt: 'interior image',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu sollicitudin velit. Maecenas cursus tincidunt diam sit amet dictum. In aliquet libero non enim feugiat consectetur.",
    features: ['bath', 'mountain', 'kitchen', 'nosmoke'],
    price: 236,
    capacity: 7,
    tiers: {
      regular: ['Continental breakfast served in hours 6.30-10.00', 'Bath Cosmetics'],
      luxury: ['Continental breakfast served in hours 6.30-10.00','Bath Cosmetics', 'Dry and Steam Sauna', 'Minibar', 'Daily wine selection']
    }

  },
  {
    id: 6,
    title: 'Outstanding Lodge',
    location: 'Somewhere, Norway',
    images: ['/images/interiors/interior6-1.jpeg', '/images/interiors/interior6.jpeg'],
    alt: 'interior image',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu sollicitudin velit. Maecenas cursus tincidunt diam sit amet dictum. In aliquet libero non enim feugiat consectetur.",
    features: ['bath', 'wifi', 'mountain', 'kitchen', 'nosmoke'],
    price: 584.99,
    capacity: 10,
    tiers: {
      regular: ['Continental breakfast served in hours 6.30-10.00', 'Bath Cosmetics'],
      luxury: ['Continental breakfast served in hours 6.30-10.00','Bath Cosmetics', 'Dry and Steam Sauna', 'Minibar', 'Daily wine selection']
    }

  }
];

export default interiorsData;
