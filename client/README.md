# Frontend - React Application

## Project Setup
This React application provides a student search feature with a dropdown, highlighting matched text using Material-UI.

### Prerequisites
- Node.js (>= 14.x)
- npm or yarn

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/nitishpratap/PunjabSoft.git
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install  # or yarn install
   ```
3. Start the development server:
   ```sh
   npm start  # or yarn start
   ```

### Features
- Search for students dynamically with at least 3 characters.
- Uses Material-UI components for styling.
- Highlights matching text in results.
- Prevents redundant API calls when selecting a student.

### Tech Stack
- React.js
- Material-UI
- Axios

### Environment Variables
Create a `.env` file and set:
```
REACT_APP_API_URL=http://localhost:5000
```
---
