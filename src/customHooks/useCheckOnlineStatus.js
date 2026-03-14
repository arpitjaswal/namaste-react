import { useState } from "react";

export function useCheckOnlineStatus(){
    const [online,setOnline] = useState(true);
    // addEventListener version
window.addEventListener("online", (event) => {
  console.log("You are now connected to the network.");
  setOnline(true)
});
window.addEventListener("offline", (event) => {
  console.log("You are now disconnected to the network.");
  setOnline(false)
});

    return online;
}