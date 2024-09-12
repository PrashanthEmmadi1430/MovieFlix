
# 🎥 Movieflix

Movieflix is a modern, user-friendly web application designed for streaming and exploring movies. Users can sign up, log in, search for movies, view detailed information, and update their profiles. The app integrates Firebase for user authentication and uses a custom movie API to fetch and display movie data dynamically.

## 🚀 Live App

[Movieflix ](https://movieflix-7b709.web.app/signin)

## 📋 Features

- 🔒 **User Authentication**: Sign up, log in, and log out securely using Firebase Authentication.
- 🎬 **Now Playing Movies**: Display the latest and most popular movies, categorized by genre.
- 🔍 **Movie Search**: Search for movies and view results instantly, complete with trailers and information.
- 📝 **User Profile**: Update your profile details like display name and profile picture.
- 🎥 **Movie Detail Page**: View detailed information about each movie, including trailers and similar movies.
- 🖥️ **Responsive Design**: Fully responsive across all device sizes.

## 🛠️ Tech Stack

- **Frontend**: React, Redux Toolkit
- **Backend**: Firebase Authentication
- **API**: [Movie API](https://rapidapi.com/movies-api14) for movie data
- **Deployment**: Vercel/Netlify
- **Styling**: Tailwind CSS

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/movieflix.git
   ```

2. Navigate to the project directory:
   ```bash
   cd movieflix
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Set up the environment variables:
   - Create a `.env` file in the root directory and add the following keys:
     ```bash
     REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
     REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
     REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
     REACT_APP_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id
     REACT_APP_RAPIDAPI_KEY=your_rapidapi_key
     REACT_APP_RAPIDAPI_HOST=movies-api14.p.rapidapi.com
     REACT_APP_BACKGROUND_IMG=your_background_image_url
     ```

5. Start the development server:
   ```bash
   npm start
   ```

6. Open your browser and navigate to `http://localhost:3000` to view the app.

## 🗂️ Folder Structure

```bash
movieflix/
├── public/                  # Static files
├── src/
│   ├── components/          # Reusable React components
│   ├── hooks/               # Custom hooks (useMovie, useMovies)
│   ├── pages/               # Application pages (Main, Search, MovieDetail, etc.)
│   ├── utils/               # Utility functions (Firebase config, validation, constants,redux store)
│   ├── App.js               # Main App component
│   └── index.js             # Entry point
├── .env                     # Environment variables
└── README.md                # Project README
```

## 🔑 Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/).
2. Create a new Firebase project.
3. Enable **Firebase Authentication** (Email/Password method).
4. Add your web app to Firebase, and copy the Firebase config keys into the `.env` file.

## 🔧 API Configuration

Movieflix uses the [Movies API](https://rapidapi.com/movies-api14) for fetching movie details. Follow these steps to configure the API:

1. Sign up at [RapidAPI](https://rapidapi.com/).
2. Subscribe to the Movies API.
3. Obtain your API key from RapidAPI and add it to the `.env` file as `REACT_APP_RAPIDAPI_KEY`.

## 🐛 Issues and Contributing

Feel free to submit issues or feature requests. If you'd like to contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## 📜 License

This project is licensed under the MIT License.

## 🙌 Acknowledgements

- [React](https://reactjs.org/)
- [Firebase](https://firebase.google.com/)
- [RapidAPI](https://rapidapi.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- Special thanks to [Movie API](https://rapidapi.com/movies-api14) for providing movie data.
