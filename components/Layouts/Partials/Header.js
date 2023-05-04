import Link from "next/link";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid justify-content-center">
          <Link href="/" className="navbar-brand mx-4">
            Accueil
          </Link>
          <Link href="/blog" className="navbar-brand mx-4">
            Blog
          </Link>
          <Link href="/utilisateurs" className="navbar-brand mx-4">
            Liste
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
