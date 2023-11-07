import { Suspense } from "react";
import MainRoutes from "./routes";

const App = () => {
  return (
    <Suspense fallback={<></>}>
      <MainRoutes />
    </Suspense>
  );
};

export default App;
