import React from "react";
import { Layout } from "../components";

interface RouteWrapperProps {
  component?: React.ElementType;
}

export const RouteWrapper: React.FC<RouteWrapperProps> = ({
  component: Component,
}) => {
  return <Layout>{Component && <Component />}</Layout>;
};
