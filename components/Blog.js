// import Head from "next/head";
// import Image from "next/image";
// export const getStaticProps = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await res.json();
//   return {
//     props: {
//       data,
//     },
//   };
// };

// const Blog = ({ data }) => {
//   console.log(data);
//   return (
//     <div>
//       {data.map((curElem) => {
//         return (
//           <div key={curElem.id}>
//             <p>{curElem.id}</p>
//             <h3>{curElem.title}</h3>
//           </div>
//         );
//       })}
//     </div>
//   );
// };
// export default Blog;
