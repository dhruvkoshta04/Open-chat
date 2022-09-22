import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { db } from "../firebase";
import Message from "./Message";
import SendMessage from "./SendMessage";

const style = {
  main: `flex flex-col p-[10px]`,
};

function Chat() {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  useEffect(() => {
// --------------------To map all messages---------------
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
    
      setMessages(messages);
    
    });
    return () => unsubscribe();
  }, []);

  

  return (
    <>
      <main className={style.main} style={{overflowY: 'scroll'}}>
        {messages &&
          messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
      <div ref={scroll}></div>
      </main>

      <SendMessage scroll={scroll} />
    </>
  );
}

export default Chat;
