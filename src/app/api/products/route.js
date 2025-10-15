// Force dynamic route behavior
// See: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic-rendering#using-dynamic-data-fetches

export const dynamic = 'force-dynamic';

export async function GET() {
    const products = [
      { id: 1, title: "Watch Rolex", price: 199, image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3" },
      { id: 2, title: "Watch Titan", price: 299, image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf" },
      { id: 3, title: "Headphones JBL", price: 99, image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf" },
      { id: 4, title: "Headphones Boat", price: 199, image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf" },
      { id: 5, title: "Phone iPhone", price: 299, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8" },
      { id: 6, title: "Shoes Puma", price: 299, image: "./images/shoes1.jpg" },
      { id: 7, title: "Shoes Adidas", price: 299, image: "./images/shoes2.jpg" },
      { id: 8, title: "Tshirt polo", price: 299, image: "./images/tshirt.jpg" },
      { id: 9, title: "shirt h&m", price: 299, image: "./images/shirt.jpg" },
      { id: 10, title: "Tv lg", price: 299, image: "./images/tv.jpg" },
      { id: 11, title: "Speaker", price: 299, image: "./images/speaker.jpg" },
      { id: 12, title: "Laptop", price: 299, image: "./images/laptop.jpg" },
    ];
    return Response.json(products);
  }
  