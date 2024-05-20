import React, {useState} from "react";
import { messages, contacts } from "../data";
import Contacts from "./Contacts";
import Messages from "./Messages";

console.log("Messages:", messages);
console.log("Contacts:", contacts);

function App() {
  const [activeContact, setActiveContact] = useState(null);

  return (
    <div className="app">
      <Contacts 
      contacts={contacts}
      activeContact={activeContact}
      setActiveContact={setActiveContact}
      />
      <Messages messages={messages} />
    </div>
  );
}

export default App;
