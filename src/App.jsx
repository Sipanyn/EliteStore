import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <div className="main flex flex-col justify-between w-full h-full overflow-x-hidden">
      <div className="sticky top-0 z-10">
        <Header />
      </div>
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
