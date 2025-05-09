// "use client";
// import React, { useEffect, useState } from "react";
// import { HeroParallax } from "./ui/HeroParallax";
// import axios from "axios";


// export function Hero() {
//   const [products, setProducts] = useState<{ name: string; deployedUrl: string; imageUrl: string[]; }[]>([]); // Initialize with an empty array
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const result = await axios.get('/api/get-project');
//         // console.log("products thing", result.data.data);
//         setProducts(result.data.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
  
//     fetchData();
//   }, []);

//   return <HeroParallax products={products} />; // Now products is always defined
// }
