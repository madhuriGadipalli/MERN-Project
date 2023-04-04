const products = [
  {
    name: "Airpods pro",
    image: "/images/airpods.jpg",

    description:
      "iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb ",
    price: "1200",
    brand: "Apple",
    Category: "Electronics",
    CountInStock: 5,
    rating: 3.5,
    numReviews: 200,
  },
  {
    name: "iphone 11 pro",
    image: "/images/iphone11pro.jpg",

    description:
      "iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb",
    price: "1200",
    brand: "Apple",
    Category: "Electronics",
    CountInStock: 0,
    rating: 4.5,
    numReviews: 20,
  },
  {
    name: "Joystic",
    image: "/images/joystic.jpg",

    description:
      "iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb",
    price: "1200",
    brand: "Apple",
    Category: "Electronics",
    CountInStock: 5,
    rating: 5,
    numReviews: 1789,
  },
  {
    name: "MAC Book Air",
    image: "/images/macbook.jpg",

    description:
      "iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb",
    price: "1200",
    brand: "Apple",
    Category: "Electronics",
    CountInStock: 5,
    rating: 2.5,
    numReviews: 2000,
  },
  {
    name: "Airpods 2nd gen",
    image: "/images/airpods.jpg",

    description:
      "iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb",
    price: "1200",
    brand: "Apple",
    Category: "Electronics",
    CountInStock: 5,
    rating: 3,
    numReviews: 100,
  },
  {
    name: "Airpods 3rd gen",
    image: "/images/airpods.jpg",

    description:
      "iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb",
    price: "1200",
    brand: "Apple",
    Category: "Electronics",
    CountInStock: 0,
    rating: 4.5,
    numReviews: 1678,
  },
  {
    name: "Alexa",
    image: "/images/alexa.jpg",

    description:
      "iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb",
    price: "1200",
    brand: "Apple",
    Category: "Electronics",
    CountInStock: 5,
    rating: 5,
    numReviews: 16725,
  },
  {
    name: "Sony Camera",
    image: "/images/camera.jpg",

    description:
      "iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb iphone 11 pro with 256Gb",
    price: "1200",
    brand: "Apple",
    Category: "Electronics",
    CountInStock: 5,
    rating: 4,
    numReviews: 200,
  },
];

export default products;
