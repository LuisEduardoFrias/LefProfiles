import { useRouteError } from "react-router-dom";
import "./error_page.css";
import Img from "../../components/img/img";

export default function ErrorPage() {
  const error : any = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>MY PROFILE</h1>
      <h2>Oops!</h2>
      <Img src="homero_simpsons_404_edi.png" alt="Ilustracion de homero simpsons" className="image404" />
      {/* <p id="p1" >Sorry, an unexpected error has occurred.</p> */ }
      <p id="p2" >
        Sorry, an unexpected error has occurred.
        <br/>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}