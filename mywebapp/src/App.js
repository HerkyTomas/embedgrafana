import GrafanaPanel from './GrafanaPanel';
import './App.css';
import NotGrafanaPanel from "./NotGrafanaPanel";

function App() {
  return (
    <div className="App">
      <NotGrafanaPanel />
      <GrafanaPanel />
      <NotGrafanaPanel />
    </div>
  );
}

export default App;
