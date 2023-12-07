import { Suspense } from "react";
import { Navigate, Routes as Switch, Route } from "react-router-dom";
import { RouteWrapper } from "./Route";
import routes from "./routes";

const Routes: React.FC = () => {
  const auth = localStorage.getItem("auth");
  return (
    <Suspense fallback={"Loading..."}>
      <Switch>
        <>
          {Object.entries(routes).map(
            ([route, { url, component, authRequired }]) => {
              if (!auth && authRequired) return;
              return (
                <Route
                  path={url}
                  key={route}
                  element={<RouteWrapper component={component} />}
                />
              );
            }
          )}
        </>

        {/* Redirección a Not found en última instancia */}
        <Route path="/" element={<Navigate to="/obiang-monorepo-app/" />} />
        <Route path="*" element={<Navigate to="/error/not-found" />} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
