import * as elements from "typed-html";
import Document from "./Document";
import Header from "../components/Header/Header";

const App = (props: elements.Attributes) => {
  return (
    <Document>
      <Header />
    </Document>
  );
};

export default App;
