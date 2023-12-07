import React, { useState } from "react";

const ViewContext = React.createContext(null);
ViewContext.displayName = "ViewContext";

function ViewProvider(props: any) {
  const [typeView, setTypeView] = useState("table");

  const value = React.useMemo(() => ({ typeView, setTypeView }), [typeView]);

  return <ViewContext.Provider value={value} {...props} />;
}

function useView() {
  const context = React.useContext(ViewContext);
  if (context === undefined) {
    throw new Error(`useView must be used within a ViewProvider`);
  }
  return context;
}

export { ViewProvider, useView };
