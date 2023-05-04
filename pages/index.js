import Link from "next/link";
export default function Home() {
  return (
    <div className="container px-4 pt-5">
      <h1>Bienvenue sur Code.io</h1>
      <span>Le blo communautaire des aficionados de développement web</span>

      <div className="row mt-5">
        <div className="col-12 col-sm-6">
          <div className="card w-100 h-100">
            <div className="card-body">
              <h5 className="card-title">Lisez les articles</h5>
              <h6 className="card-subtitle mb-2 text-muted">Maximisez votre culture sur web</h6>
              <p className="card-text">
                chaque auteur tente de nous apporter plus de valeur que possible par des articles
              </p>
              <Link href='/blog'>
                Visiter le blog
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6">
          <div className="card w-100 h-100">
            <div className="card-body">
              <h5 className="card-title">Faites un tour vers la liste des membres</h5>
              <h6 className="card-subtitle mb-2 text-muted">Rencontrez des devs</h6>
              <p className="card-text">
                Ajoutez, invitez et discutez avec les différents membes.
              </p>
              <Link href='/utilisateurs'>
                Découvrez la liste des membres
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
