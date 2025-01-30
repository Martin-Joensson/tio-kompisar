import { Footer } from "./components/Footer";
import { Header } from "./components/header";
import { ContentRoutes } from "./routes/ContentRoutes";

export const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-grow flex-1">
        <ContentRoutes />
        <h1 className="text-red-500">Hello world</h1>
      </div>
      <Footer />
    </div>
  );
};
