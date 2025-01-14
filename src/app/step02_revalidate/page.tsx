async function getData() {
    const res = await fetch("https://api.quotable.io/random?tags=history|civil-rights", {
      next: {revalidate:2}
    });
  
    // Recommendation: handle errors
    // if (!res.ok) {
    //   // This will activate the closest `error.js` Error Boundary
    //   throw new Error("Failed to fetch data");
    // }
  
    return res.json();
  }
  
  
  export default async function Home() {
    const quote = await getData();
  
    return <div>{quote.content}</div>;
  }