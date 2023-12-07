import Detail from "../pages/Detail";
import ErrorPage from "../pages/Error";
import Home from "../pages/Home";

export const BASE_URL = "/obiang-monorepo-app/";
interface Route {
  url: string;
  component: React.FC<any>;
  name?: string;
  Icon?: any;
  shortName?: string;
  exact?: boolean;
  authRequired: boolean;
}

interface Routes {
  [route: string]: Route;
}
const routes: Routes = {
  home: {
    url: BASE_URL,
    component: Home,
    name: "Home",
    exact: true,
    authRequired: false,
  },
  detail: {
    url: `${BASE_URL}pokemon/:id`,
    component: Detail,
    name: "Detail",
    exact: true,
    authRequired: false,
  },
  error: {
    url: `${BASE_URL}error/:type`,
    component: ErrorPage,
    authRequired: false,
  },
};

export default routes;
