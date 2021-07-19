import ThemeProvider from "theme/ThemeProvider";
import { ToDoPage } from "components/page/ToDo";
import { ToDoProvider } from "context/Context";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ThemeProvider>
      <ToDoProvider>
        <ToDoPage />
        <ToastContainer />
      </ToDoProvider>
    </ThemeProvider>
  );
}

export default App;
