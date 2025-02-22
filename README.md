# **Journal Recorder Web** 📝 (70% Completed)

A web application that helps users transcribe their spoken words into journal entries using voice recognition. Perfect for those moments when you're too exhausted to write but still want to document your day.

---
## **Features**

- **Speech-to-Text**: Record your voice, and the app will transcribe it into text.
- **Journaling Made Easy**: Save, view, and manage your daily journal entries.
- **User-Friendly Interface**: Clean and intuitive front-end built with React.
- **Scalable Back-End**: Back-end API implemented with TypeScript and Express.
- **Database Integration**: All journal entries are stored in MongoDB.

---

## **Tech Stack**

### **Frontend**:
- React
- Vite
- CSS Modules

### **Backend**:
- Node.js
- Express
- TypeScript
- MongoDB

---

## **Installation**

### **Prerequisites**
Ensure the following are installed on your system:
- Node.js
- npm or yarn
- MongoDB (running locally or a cloud instance)

### **Clone the Repository**
```bash
git clone https://github.com/Methasit-Pun/journal-recorder-web.git
cd journal-recorder-web
```

### **Setup Frontend**
1. Navigate to the client folder:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

   

### **Setup Backend**
1. Navigate to the server folder:
   ```bash
   cd ../server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file in the `server` directory:
     ```plaintext
     MONGO_URI=your-mongodb-connection-string
     PORT=5000
     ```
4. Start the server:
   ```bash
   npm run dev
   ```

---

## **Usage**

1. Open the frontend in your browser (`http://localhost:5173` by default).
2. Record your voice and save your transcription as a journal entry.
3. View or manage past journal entries.

---

## **Project Structure**

```
journal-recorder-web/
├── client/           # Frontend React application
├── server/           # Backend API with TypeScript and Express
├── README.md         # Project documentation
```

---

## **API Endpoints**

### **Journals**
- `GET /api/journals`: Retrieve all journal entries.
- `GET /api/journals/:id`: Retrieve a single journal entry by ID.
- `POST /api/journals`: Create a new journal entry.

### **Voice-to-Text**
- `POST /api/voice`: Transcribe audio to text (upload audio file).

---

## **Contributing**

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## **License**

This project is licensed under the [MIT License](LICENSE).
---

## **Contact**

For inquiries or feedback, feel free to reach out:
- **Email**: methasitpun@gmail.com

- **GitHub**: [Methasit-Pun](https://github.com/Methasit-Pun)

--- 

