const upTime = document.getElementById("upTime");

function updateUpTime() {
  const currentTime = new Date().getTime();
  console.log("currentTime:", currentTime);
  let storedTime = JSON.parse(sessionStorage.getItem("onlineTime"));
  console.log("storedTime:", storedTime);

  if (storedTime) {
    storedTime = parseInt(storedTime);
  } else {
    storedTime = currentTime;
  }

  const seconds = Math.floor((currentTime - storedTime) / 1000);
  console.log("seconds:", seconds);

  if (upTime) {
    upTime.innerText = `Uptime: ${seconds} seconds`;
  }

  sessionStorage.setItem("onlineTime", currentTime);
}

updateUpTime();
setInterval(updateUpTime, 1000);
