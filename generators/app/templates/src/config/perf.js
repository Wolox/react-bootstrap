import Perf from "react-addons-perf";

if (process.env.NODE_ENV === "development") {
  window.Perf = Perf;
}
