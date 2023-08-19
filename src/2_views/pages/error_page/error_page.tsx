import { useRouteError } from "react-router-dom";
import "./error_page.css"

export default function ErrorPage() {
  const error : any = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>MY PROFILE</h1>
      <h2>Oops!</h2>
      <p id="p1" >Sorry, an unexpected error has occurred.</p>
      <p id="p2" >
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}