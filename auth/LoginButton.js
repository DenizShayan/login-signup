import { useAuth0 } from "@auth0/auth0-react";
<<<<<<< HEAD
//import options from '../auth/options'

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return (
        !isAuthenticated && (
            <div className="h-screen text-center pt-32 m-auto ">
                <img alt='logo' className="m-auto" src={require('../img/Kuin.b.v.png')} />
                <button className="bg-primary-content text-white p-5 rounded-lg" onClick={() => loginWithRedirect()}
                >
                    Sign in
                </button>
            </div>
        )
    );
};
// export default LoginButton;
// =======

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();
    return isAuthenticated && <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}> Log out </button>;
};
export default LoginButton;
//>>>>>>> 2f787cdfe5f45fcf67a6d0944faa9c13b87fc9b2
