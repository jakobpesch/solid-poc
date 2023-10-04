/* @refresh reload */
import { render } from "solid-js/web";
import { Navigate, Route, Router, Routes } from "@solidjs/router";
import "./index.css";
import App from "./App";
import { lazy } from "solid-js";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

const Dashboard = lazy(() => import("./Dashboard"));
const Wizard = lazy(() => import("./Wizard"));
const ProductionCells = lazy(() => import("./ProductionCells"));
const ProductionCell = lazy(() => import("./ProductionCell"));
const Machines = lazy(() => import("./Machines"));
const Machine = lazy(() => import("./Machine"));
const TemperingUnits = lazy(() => import("./TemperingUnits"));
const TemperingUnit = lazy(() => import("./TemperingUnit"));

render(
  () => (
    <Router>
      <Routes>
        <Route path="/" component={App}>
          <Route path="/" element={<Navigate href="/dashboard" />} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/production-cells" component={ProductionCells} />
          <Route path="/production-cells/:id" component={ProductionCell} />
          <Route path="/machines" component={Machines} />
          <Route path="/machines/:id" component={Machine} />
          <Route path="/tempering-units" component={TemperingUnits} />
          <Route path="/tempering-units/:id" component={TemperingUnit} />
          <Route path="/wizard" component={Wizard} />
        </Route>
      </Routes>
    </Router>
  ),
  root!
);
