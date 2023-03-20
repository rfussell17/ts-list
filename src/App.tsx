import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "New Jersey", "California", "Texas", "Florida"];

  const [showAlert, setShowAlert] = useState(false);

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleAlert = () => {
    console.log("alert");
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <br></br>
      {showAlert && <Alert onClose={() => setShowAlert(false)}>Alert</Alert>}
      <Button color="primary" onClick={() => setShowAlert(true)}>
        Primary
      </Button>
    </div>
  );
}

export default App;
