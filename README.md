# Online Book Store
 frontend setup=>
  
📚 Online Book Store
This is a full-stack MERN application for an online book store. Below are the setup instructions for both the frontend and backend.

🚀 Frontend Setup
Clone the repository or download the ZIP file.
Open the project in VS Code or any other code editor.
Navigate to the frontend folder using the terminal:
sh
Copy
Edit
cd frontend
Install dependencies:
sh
Copy
Edit
npm install
Create a .env.local file in the frontend folder and add the following environment variables:
env
Copy
Edit
VITE_API_KEY="YOUR_VITE_API_KEY"
VITE_AUTH_DOMAIN="YOUR_AUTH_DOMAIN"
VITE_PROJECT_ID="YOUR_PROJECT_ID"
VITE_STORAGE_BUCKET="YOUR_STORAGE_BUCKET"
VITE_MESSAGING_SENDER_ID="YOUR_SENDER_ID"
VITE_APP_ID="YOUR_APP_ID"
Start the development server:
sh
Copy
Edit
npm run dev
This will start the frontend server.
🛠 Backend Setup
Navigate to the backend folder using the terminal:
sh
Copy
Edit
cd backend
Install dependencies:
sh
Copy
Edit
npm install
Create a .env file in the backend folder and add the following environment variables:
env
Copy
Edit
DB_URL="your_mongodb_connection_string"
JWT_SECRET_KEY="your_secret_key"
⚠ Important: Never expose your actual database credentials in public repositories. Use environment variables for security.

Start the backend server:
sh
Copy
Edit
npm run start:dev
📌 Notes
Ensure that both the frontend and backend servers are running for the application to function properly.
Replace placeholder values in the .env files with your actual API keys and database credentials.
If you face any issues, check for missing dependencies or incorrect environment variables.
