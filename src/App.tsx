import "./App.css";
import Header from "./components/header/Header";
import LeftContent from "./components/left-content/LeftContent";
import RightContent from "./components/right-content/RightContent"

function App() {
  return (
    <>
      <div className="content">
        <Header />
        <LeftContent />
        <RightContent />
      </div>
    </>
  );
}

export default App;
