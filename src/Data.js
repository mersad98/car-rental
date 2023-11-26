import audi from "./images/cars/audia1.jpg";
import benz from "./images/cars/benz.jpg";
import bmw from "./images/cars/bmw320.jpg";
import camry from "./images/cars/camry.jpg";
import golf from "./images/cars/golf6.jpg";
import passat from "./images/cars/passatcc.jpg";

import person1 from "./images/team/person1.png";
import person2 from "./images/team/person2.png";
import person3 from "./images/team/person3.png";
import person4 from "./images/team/person4.png";
import person5 from "./images/team/person5.png";
import person6 from "./images/team/person6.png";

import user from "./images/testimonials/user.png";

export const members = [
  {
    img: person1,
    name: "Luke Miller",
    job: "Creative Leader",
  },
  {
    img: person2,
    name: "Michael Diaz",
    job: "Product Owner",
  },
  {
    img: person3,
    name: "Briana Ross",
    job: "Photographer",
  },
  {
    img: person4,
    name: "Lauren Rivera",
    job: "UX Designer",
  },
  {
    img: person5,
    name: "Martin Webb",
    job: "Team Leader",
  },
  {
    img: person6,
    name: "Kaitlin Hunt",
    job: "Team Leader",
  },
];

export const cars = [
  {
    id: 1,
    image: audi,
    mark: "Audi",
    model: "A1",
    type: "S-Line",
    year: 2012,
    doors: "4/5",
    ac: "Yes",
    transmission: "Automatic",
    fuel: "Gasoline",
    seats: 5,
    luggage: 2,
    price: 55,
    category: "Hatchback",
  },
  {
    id: 2,
    image: golf,
    mark: "Volkswagen",
    model: "Golf 6",
    type: "",
    year: 2008,
    doors: "4/5",
    ac: "Yes",
    transmission: "Manual",
    fuel: "Gasoline",
    seats: 5,
    luggage: 2,
    price: 40,
    category: "Hatchback",
  },
  {
    id: 3,
    image: camry,
    mark: "Toyota",
    model: "Camry",
    type: "",
    year: 2013,
    doors: "4/5",
    ac: "Yes",
    transmission: "Automatic",
    fuel: "Hybrid",
    seats: 5,
    luggage: 4,
    price: 60,
    category: "Sedan",
  },
  {
    id: 4,
    image: bmw,
    mark: "BMW",
    model: "320i",
    type: "Modern Line",
    year: 2015,
    doors: "4/5",
    ac: "Yes",
    transmission: "Automatic",
    fuel: "Gasoline",
    seats: 5,
    luggage: 4,
    price: 75,
    category: "Sedan",
  },
  {
    id: 5,
    image: benz,
    mark: "Mercedes-Benz",
    model: "GLK",
    type: "",
    year: 2015,
    doors: "4/5",
    ac: "Yes",
    transmission: "Automatic",
    fuel: "Gasoline",
    seats: 5,
    luggage: 5,
    price: 70,
    category: "SUV",
  },
  {
    id: 6,
    image: passat,
    mark: "Volkswagen",
    model: "Passat",
    type: "CC",
    year: 2008,
    doors: "4/5",
    ac: "Yes",
    transmission: "Automatic",
    fuel: "Gasoline",
    seats: 5,
    luggage: 4,
    price: 50,
    category: "Sedan",
  },
];

export const testimonials = [
  {
    image: user,
    name: "Kimberly Garcia",
    city: "Boston",
    quote:
      "We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable.",
  },
  {
    image: user,
    name: "Kimberly Garcia",
    city: "Boston",
    quote:
      "The car was in great condition and made our trip even better. Highly recommend for this car rental website!",
  },
  {
    image: user,
    name: "Kimberly Garcia",
    city: "Boston",
    quote:
      "The rem value is the same as the em value displayed above. Both units are scalable.",
  },
];
