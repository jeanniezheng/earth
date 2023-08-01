import { useContext, useState } from "react"
import { UserContext } from "../UserContext"
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";

export default function AccountPage() {
    const [redirect, setRedirect] = useState(null);

    const { user, setUser, ready } = useContext(UserContext);
    let { subpage } = useParams();

    if (subpage === undefined) {
        subpage = 'profile'
    }

    async function logout() {
        await axios.post('/logout');
        setRedirect('/')
        setUser(null)
    }

    if (!ready) {
        return 'Loading...'
    }

    if (redirect) {
        return <Navigate to={redirect} />
    }

    if (ready && !user && !redirect) {
        return <Navigate to={'/login'} />
    }


    function linkClasses(type = null) {
        let classes = 'py-2 px-4 '

        if (subpage === type) {
            classes += 'bg-primary text-white rounded-full'
        }
        return classes
    }
    return (
        <div>

            <div>Account page for {user?.name}  </div>
            <nav className="w-full flex mt-8 gap-2 justify-center">
                <Link className={linkClasses('profile')} to={'/account'}>My Account</Link>
                <Link className={linkClasses("bookings")} to={'/account/bookings'}>My Bookings</Link>
                <Link className={linkClasses("places")} to={'/account/places'}>My accommedations</Link>
            </nav>
            {subpage === 'profile' && (
                <div className="text-center max-w-lg mx-auto">
                    Logged in as {user.name} ({user.email}) <br />
                    <button onClick={logout} className="primary max-w-sm mt-2">Logout</button>
                </div>
            )}
        </div>
    )
}