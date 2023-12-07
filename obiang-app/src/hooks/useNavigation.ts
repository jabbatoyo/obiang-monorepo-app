import { useLocation, useNavigate } from "react-router-dom";

function useNavigation() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const goTo = (route: string) => {
    if (route === "back") navigate(-1);
    navigate(`/obiang-monorepo-app${route}`);
  };

  return {
    goTo,
    pathname,
  };
}

export default useNavigation;
