import ThemeProvider from "theme/ThemeProvider";
import { ToDoPage } from "components/page/ToDo";
import { ToDoProvider } from "context/Context";

function App() {
  return (
    <ThemeProvider>
      <ToDoProvider>
        <ToDoPage />
      </ToDoProvider>
    </ThemeProvider>
  );
}

export default App;
