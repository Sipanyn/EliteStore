import { useState } from "react";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
function App() {
  const [CartOpen, SetCartOpen] = useState(false);
  const [searchValue, setSearchValue] = useState(null);
  const [sortValue, SetSortValue] = useState("Most expensive");
  return (
    <QueryClientProvider client={queryClient}>
      <div className="main flex flex-col justify-between w-full h-full overflow-x-hidden">
        <div className="sticky top-0 z-10">
          <Header
            SetCartOpen={SetCartOpen}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
        {CartOpen ? (
          <Cart SetCartOpen={SetCartOpen} />
        ) : (
          <MainContainer
            searchValue={searchValue}
            sortValue={sortValue}
            SetSortValue={SetSortValue}
          />
        )}
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
