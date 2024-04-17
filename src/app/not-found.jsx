import Link from "next/link";

const NOtFound = () => {
  return (
    <div>
      <h2>Page Not Found</h2>
      <span>Sorry, the page you are looking for does not exist</span>
      <Link href="/">Return Home</Link>
    </div>
  );
};
export default NOtFound;
