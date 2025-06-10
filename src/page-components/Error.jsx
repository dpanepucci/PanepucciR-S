import { useRouteError } from 'react-router-dom';
import '../styles/error.css';


export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <img src="../../public/img/error_golf_page.jpg" alt="Error Page"/>
      <p>We can't seem to find the page you're looking for.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <button id='handle-error' onClick={() => window.history.back()}>Go Back</button>
    </div>
  );
}
