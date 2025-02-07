# Backend - Node.js with Express

## Project Setup
This Node.js backend provides a student search API.

### Prerequisites
- Node.js (>= 14.x)
- MongoDB (if using a database)

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/nitishpratap/PunjabSoft.git
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   npm start  # or nodemon app.js
   ```

### API Endpoints
| Method | Endpoint                 | Description                  |
|--------|--------------------------|------------------------------|
| GET    | `/students?search=query` | Search students by name      |

### Tech Stack
- Node.js
- Express.js


### Notes
- Ensure the backend runs before starting the frontend.
- Modify `CORS` settings if needed for cross-origin requests.
---

