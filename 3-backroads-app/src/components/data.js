import tour1Img from "../images/tour-1.jpeg";
import tour2Img from "../images/tour-2.jpeg";
import tour3Img from "../images/tour-3.jpeg";
import tour4Img from "../images/tour-4.jpeg";
import tour5Img from "../images/tour-5.jpeg";
import tour6Img from "../images/tour-6.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#services", text: "services" },
  { id: 3, href: "#about", text: "about" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  {
    id: 1,
    href: "https://www.instagram.com/sean_hahahaha/",
    icon: "fab fa-instagram",
  },
  { id: 2, href: "https://twitter.com/seanshaw98", icon: "fab fa-twitter" },
  {
    id: 3,
    href: "https://www.linkedin.com/in/boyang-xiao-40b644225/",
    icon: "fab fa-linkedin-in",
  },
];

export const servicesContents = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    describe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    describe:
      "Lorem adipisicing ipsum dolor sit amet consectetur elit Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    describe:
      "Asperiores, officia.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

export const toursContent = [
  {
    id: 1,
    image: tour1Img,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "china",
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    image: tour2Img,
    date: "october 1th, 2020",
    title: "best of java",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "indonesia",
    duration: 11,
    cost: 1400,
  },
  {
    id: 3,
    image: tour3Img,
    date: "september 15th, 2020",
    title: "explore hong kong",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "hong kong",
    duration: 8,
    cost: 5000,
  },
  {
    id: 4,
    image: tour4Img,
    date: "december 5th, 2019",
    title: "kenya highlights",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "kenya",
    duration: 20,
    cost: 3300,
  },
  {
    id: 5,
    image: tour5Img,
    date: "April 13th, 2019",
    title: "South Africa",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "South africa",
    duration: 11,
    cost: 4300,
  },
  {
    id: 6,
    image: tour6Img,
    date: "June 29th, 2019",
    title: "Thailand chilltime",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "thailand",
    duration: 7,
    cost: 5200,
  },
];
