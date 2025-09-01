import { useState } from "react";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
const queryClient = new QueryClient();
function App() {
  const [CartOpen, SetCartOpen] = useState(false);
  return (
    <QueryClientProvider client={queryClient}>
      <div className="main flex flex-col justify-between w-full h-full overflow-x-hidden">
        <div className="sticky top-0 z-10">
          <Header SetCartOpen={SetCartOpen} />
        </div>
        {CartOpen ? <Cart SetCartOpen={SetCartOpen} /> : <MainContainer />}
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
