import Link from "next/link";

const notFound = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Sorry, the page your looking for does not exist</p>
      <Link href="/">Return Home</Link>
      {console.log("happy")}
    </div>
  );
};
export default notFound;
