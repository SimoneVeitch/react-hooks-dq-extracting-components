import React from "react";

function Contacts( {contacts, activeContact, setActiveContact}) {
return (
    <nav>
    <h2>Contacts</h2>
<ul className="contacts">
  {contacts.map(contact => (
    <li 
    key={contact.id} 
    className={activeContact === contact.id ? "contact active" : "contact"}
    onClick={() => setActiveContact(contact.id)}
    >
        <div className="icon">{contact.name.charAt(0)}</div>
        <span>{contact.name}</span>
    </li>
  ))}
</ul>
</nav>
);
}

export default Contacts;