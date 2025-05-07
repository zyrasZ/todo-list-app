# Todo List App

A simple, colorful Todo List application built with HTML, CSS, JavaScript, and React. This app allows users to add, complete, and delete tasks, with data stored in the browser's localStorage for persistence. The interface features a vibrant gradient design and smooth animations using Tailwind CSS.

## Features
- Add new tasks by typing and pressing Enter or clicking the "Add" button.
- Mark tasks as completed using checkboxes.
- Delete tasks with a trash icon.
- Responsive design with animated transitions.
- Tasks persist across page reloads using localStorage.

## Technologies
- **HTML**: Structure of the web application.
- **CSS**: Styling with Tailwind CSS and custom animations.
- **JavaScript/React**: Dynamic functionality and component-based UI.
- **localStorage**: Stores tasks in the browser.

## Setup and Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/todo-list-app.git
   cd todo-list-app
   ```

2. **Run locally**:
   - Install a local server (e.g., using Node.js):
     ```bash
     npm install -g http-server
     http-server
     ```
   - Open `http://localhost:8080` in your browser.

3. **Dependencies**:
   - The app uses CDN for React, ReactDOM, Babel, and Tailwind CSS, so no additional installation is required.

## Usage
- **Add a task**: Enter a task in the input field and press Enter or click "Add".
- **Complete a task**: Check the checkbox next to a task to mark it as completed (text will be crossed out).
- **Delete a task**: Click the trash icon (🗑️) to remove a task.
- Tasks are automatically saved to localStorage and persist after page reload.

## Deployment
The app is deployed on GitHub Pages:
- URL: `https://your-username.github.io/todo-list-app`
- To deploy your own:
  1. Push the code to a GitHub repository.
  2. Go to **Settings > Pages** in the repository.
  3. Set **Source** to `main` branch and `/ (root)` folder.
  4. Save and access the provided URL.

## Folder Structure
```
todo-list-app/
├── index.html       # Main HTML file
├── styles.css       # Custom CSS with animations
├── app.js           # React logic for the Todo List
└── README.md        # Project documentation
```

## Contributing
Feel free to fork the repository and submit pull requests for improvements or new features.

## License
This project is open-source and available under the MIT License.