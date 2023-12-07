//components
import { Button } from "component-library";

//hooks
import useNavigation from "../../hooks/useNavigation";

//images
import ErrorImage from "../../assets/default-img.png";

//styles
import "./index.scss";

export default function Error() {
  const { goTo } = useNavigation();

  return (
    <div className="error-container">
      <div className="error-content">
        <img src={ErrorImage} alt="errr-pokemon" />
        <h2>Error pages</h2>
        <p>
          This is an error page, please try again later or return to the
          previous page.
        </p>
        <Button onClick={() => goTo("/")}>Return to home</Button>
      </div>
    </div>
  );
}
