import React from "react";

function Messages( {messages} ) {
    return (
<main>
<h2>Messages</h2>
<section className="messages">
<ul>
          {messages.map((message) => (
            <li key={message.id} className={`message ${message.type}`}>
              <div className="icon">{message.name.charAt(0)}</div>
              <span className="content">{message.content}</span>
            </li>
          ))}
  </ul>
</section>
<form className="message-form">
  <input placeholder="Type a message..." />
</form>
</main>
    );
}

export default Messages;