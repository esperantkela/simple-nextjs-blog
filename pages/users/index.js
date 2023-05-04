import Link from "next/link";

const User = ({users}) => {
    console.log(users)
  return (
    <div className="container px-4 pt-5">
        <h1 className="text-center">Liste des utilisateurs</h1>
        <div className="row justify-content-center">
            {
                users.map((user) =>(
                    <div key={user.id} className="col-12 col-6 m-2">
                        <div className="card">
                            <div className="card-body d-flex justify-content-between">
                                <h5 className="card-title">{user.username}</h5>
                                <Link className="ml-auto card-nav-link" href={`/users/${user.id}`}>Contacter</Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default User

export async function getStaticProps(){
    const data = await fetch('https://jsonplaceholder.typicode.com/users');

    const users = await data.json();

    return {
        props:{
            users
        }
    }
}