import axios from "axios";

function App() {

  const ledOn = async () => {
    await axios.get("https://iot-990x.onrender.com/led/on");
  };

  const ledOff = async () => {
    await axios.get("https://iot-990x.onrender.com/led/off");
  };

  return (
    <div style={{textAlign:"center",marginTop:"100px"}}>
      <h1>ESP8266 LED Dashboard</h1>

      <button onClick={ledOn} style={{padding:"15px",margin:"10px"}}>
        LED OFF
      </button>

      <button onClick={ledOff} style={{padding:"15px",margin:"10px"}}>
        LED ON
      </button>

    </div>
  );
}

export default App;
