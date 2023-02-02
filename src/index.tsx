import "bulmaswatch/superhero/bulmaswatch.min.css";
import ReactDOM from "react-dom/client";
import TextEditor from "./components/TextEditor";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el!);

const App = () => {

  return (
    <div>
      <TextEditor />
    </div>
  );
};

root.render(<App />);
