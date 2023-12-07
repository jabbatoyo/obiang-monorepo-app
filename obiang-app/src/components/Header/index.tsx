//context
import { useView } from "../../context/viewContext";

//components
import { Button } from "component-library";

//hooks
import useNavigation from "../../hooks/useNavigation";

//img
import logo from "../../assets/pngegg.png";

//styles
import "./index.scss";

export default function Header({ showMore }: { showMore: boolean }) {
  const { typeView, setTypeView }: any = useView();

  const { goTo } = useNavigation();

  const changeViewMode = () => {
    setTypeView(typeView == "table" ? "card" : "table");
  };

  return (
    <div className="header-container">
      <div className="header-content">
        <img src={logo} alt="logo" className="logo" onClick={() => goTo("/")} />
        {showMore && (
          <div className="view-type-container">
            <Button
              onClick={() => changeViewMode()}
              background="blue"
              color="white"
              fontSize={15}
            >
              {typeView == "table" ? "Show card mode" : "Show table mode"}
            </Button>
          </div>
        )}
      </div>
      <div className="header-hidden" />
    </div>
  );
}
