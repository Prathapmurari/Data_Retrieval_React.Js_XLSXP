# **Voice Data Retrieval from Excel**

## **Overview**
This React.js application retrieves data from an Excel file based on voice queries using the Web Speech API and the `xlsx` library.

---

## **Features**
- Load and parse Excel data.
- Voice recognition for querying Excel data.
- Display results based on voice input.

---

## **Prerequisites**
- Node.js and npm installed on your system.
- A sample Excel file (e.g., `data.xlsx`) in the `public` folder.

---

## **Installation**
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd voice-excel
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Place an Excel file (`data.xlsx`) in the `public` folder.

---

## **Usage**
1. Start the development server:
   ```bash
   npm start
   ```
2. Open the app at [http://localhost:3000](http://localhost:3000).
3. Click **Load Excel Data** to load the file.
4. Click **Start Listening** and speak your query (e.g., "John").
5. Click **Search** to retrieve matching data.

---

## **Project Structure**
- **public/**: Contains the `data.xlsx` file.
- **src/App.js**: Main application logic.
- **package.json**: Project dependencies.

---

## **Dependencies**
- `react-speech-recognition`: Voice recognition library.
- `xlsx`: For parsing Excel files.

---

## **Demo**
### Example Workflow:
1. Speak "John" after clicking **Start Listening**.
2. Click **Search** to see the result:  
   ```json
   { "Name": "John", "Age": 30, "City": "London" }
   ```

---

## **License**
Add your preferred license (e.g., MIT License).

---
