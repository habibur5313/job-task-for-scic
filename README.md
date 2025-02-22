📋 To-Do List Website
A modern and interactive to-do list application with drag-and-drop, edit, and delete functionality. Built with React, Firebase, and TailwindCSS, this app helps users manage tasks efficiently.

🔗 Live Demo: View Project
🔗 GitHub Repository: View on GitHub

🚀 Features
✅ Drag and Drop – Rearrange tasks effortlessly using @dnd-kit/core and react-beautiful-dnd.
✅ Edit & Delete – Modify tasks easily and remove completed ones.
✅ Persistent Storage – Saves tasks using Firebase and LocalForage.
✅ Responsive UI – Built with TailwindCSS and DaisyUI for a beautiful design.
✅ Task Filtering & Sorting – Uses match-sorter for better organization.
✅ Sweet Alerts – Beautiful alerts powered by sweetalert2.

📸 Screenshots
(Include relevant screenshots here.)

🛠️ Tech Stack
Frontend: React, Vite, TailwindCSS, DaisyUI
State Management: TanStack React Query
Drag & Drop: @dnd-kit/core, react-beautiful-dnd
Backend & Storage: Firebase, LocalForage
API Calls: Axios
UI Enhancements: React Icons, Swiper, SweetAlert2
📦 Dependencies
Main Dependencies
json
Copy
Edit
"dependencies": {
"@dnd-kit/core": "^6.3.1",
"@tanstack/react-query": "^5.66.8",
"axios": "^1.7.9",
"firebase": "^11.3.1",
"localforage": "^1.10.0",
"match-sorter": "^8.0.0",
"react": "^19.0.0",
"react-beautiful-dnd": "^13.1.1",
"react-dom": "^19.0.0",
"react-icons": "^5.5.0",
"react-responsive-modal": "^6.4.2",
"react-router-dom": "^7.2.0",
"react-simple-typewriter": "^5.0.1",
"sort-by": "^1.2.0",
"swapy": "^1.0.5",
"sweetalert2": "^11.17.2",
"swiper": "^11.2.4"
}
Development Dependencies
json
Copy
Edit
"devDependencies": {
"@eslint/js": "^9.19.0",
"@types/react": "^19.0.8",
"@types/react-dom": "^19.0.3",
"@vitejs/plugin-react": "^4.3.4",
"autoprefixer": "^10.4.20",
"daisyui": "^4.12.23",
"eslint": "^9.19.0",
"eslint-plugin-react": "^7.37.4",
"eslint-plugin-react-hooks": "^5.0.0",
"eslint-plugin-react-refresh": "^0.4.18",
"globals": "^15.14.0",
"postcss": "^8.5.3",
"tailwindcss": "^3.4.17",
"vite": "^6.1.0"
}
🔧 Installation
Clone the repository

sh
Copy
Edit
git clone https://github.com/habibur5313/job-task-for-scic.git
cd job-task-for-scic
Install dependencies

sh
Copy
Edit
npm install
Set up environment variables

Create a .env.local file and add the following:

env
Copy
Edit
VITE_apiKey=your-api-key
VITE_authDomain=your-auth-domain
VITE_projectId=your-project-id
VITE_storageBucket=your-storage-bucket
VITE_messagingSenderId=your-messaging-sender-id
VITE_appId=your-app-id
VITE_api=http://localhost:5000
Run the project

sh
Copy
Edit
npm run dev
🌍 Deployment
The project is deployed on Surge. You can access it here:
🔗 Live Demo

🛠️ Configuration
Modify Firebase settings in .env.local.
API base URL is set to http://localhost:5000. Change it in .env.local for production.
❌ Troubleshooting
Firebase errors? – Ensure .env.local is correctly configured.
Drag & drop not working? – Check console errors and dependencies (react-beautiful-dnd).
Styling issues? – Ensure TailwindCSS and DaisyUI are correctly installed.
🤝 Contributors
👤 Habibur Rahman – Developer

📜 License
MIT License. See LICENSE for details.
