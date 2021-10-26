
import {Link} from "wouter"


const Navigation = () => {
    return(
        <ul>
            <li>
                <Link to="/">
                    Home
                </Link>
            </li>

            <li>
                <Link to="/formulario">
                    Form
                </Link>
            </li>
        </ul>
    )
};



export default Navigation;
