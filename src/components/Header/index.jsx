import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg"

export const Header = () => {
   return (
      <header>
         <Link to="/">
            <img src={Logo} alt="Logo The Journal" />
         </Link>
         <Link className="btn" to="/contact">Fale conosco</Link>
      </header>
   );
};
