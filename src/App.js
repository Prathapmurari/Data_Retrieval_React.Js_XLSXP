import React, { useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import * as XLSX from "xlsx";

function App() {
  const [excelData, setExcelData] = useState([]);
  const [result, setResult] = useState("");

  const { transcript, resetTranscript } = useSpeechRecognition();

  // Load Excel file
  const loadExcel = async () => {
    const response = await fetch("/data.xlsx");
    const arrayBuffer = await response.arrayBuffer();
    const workbook = XLSX.read(arrayBuffer, { type: "array" });
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = XLSX.utils.sheet_to_json(worksheet);
    setExcelData(data);
    console.log("Excel Data Loaded:", data);
  };

  // Process voice query
  const handleQuery = () => {
    const query = transcript.toLowerCase();
    const matchedRow = excelData.find((row) => {
      return Object.values(row).some((value) =>
        value.toString().toLowerCase().includes(query)
      );
    });

    if (matchedRow) {
      setResult(JSON.stringify(matchedRow));
    } else {
      setResult("No matching data found!");
    }
    resetTranscript();
  };

  // Start listening
  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 style={{fontFamily: "sans-serif"}}>Voice Data Retrieval from Excel</h1>
      <button onClick={loadExcel}>Load Excel Data</button>
      <p>Say something related to Excel data (e.g., "John")</p>
      <button onClick={startListening}>Start Listening</button>
      <button onClick={handleQuery}>Search</button>
      <button onClick={resetTranscript}>Reset</button>
      <h3>Transcript:</h3>
      <p>{transcript}</p>
      <h3>Result:</h3>
      <p>{result}</p>
    </div>
  );
}

export default App;
