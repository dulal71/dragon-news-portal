import Link from "next/link";


const NotFound = () => {
    return (
          <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, this page doesn’t exist.</p>

      <Link href="/" >
      <button className="btn-primary">  Go Back Home</button>
      </Link>
    </div>
    );
};

export default NotFound;