import { ReactNode } from "react";

//components
import Header from "../Header";

//hooks
import useNavigation from "../../hooks/useNavigation";

//styles
import "./index.scss";

export default function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useNavigation();
  return (
    <div className="container">
      {pathname !== "/error/not-found" && (
        <Header showMore={pathname === "/obiang-monorepo-app/"} />
      )}
      <div className="body-container">{children}</div>
    </div>
  );
}
