// import React from 'react'

// function step02() {
//   return (
//     <div>step02</div>
//   )
// }

// export default step02
const getData = async () => {
  const res = await fetch("https://api.quotable.io/random?tags=technology");
  return res.json();
};


export default async function Home() {
  const quote = await getData();

  console.log("quote: ", quote);

  return <div>{quote.content}</div>;
}