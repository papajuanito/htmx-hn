import * as elements from "typed-html";
import Document from "./Document";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const App = ({ page }: elements.Attributes) => {
  return (
    <Document page={page}>
      <div id="top-content" class="h-full w-full flex flex-col">
        <div class="flex-1 overflow-y-scroll">
          <Header />
          {page}
        </div>
        <Footer />
      </div>
    </Document>
  );
};

export default App;
