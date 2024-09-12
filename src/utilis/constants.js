// URL for the background image used in the application
export const BACKGROUND_IMG = process.env.REACT_APP_BACKGROUND_IMG;



// Configuration for API requests
export const API_OPTIONS = {
  method: "GET",
  headers: {
    "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY,
    "x-rapidapi-host": process.env.REACT_APP_RAPIDAPI_HOST,
  },
};


// List of supported languages for the application
export const SUPPORTED_LANGUAGES = [
    { identifier: "en", name: "English" },
    { identifier: "hindi", name: "Hindi" },
    { identifier: "spanish", name: "Spanish" },
    { identifier: "french", name: "French" },
    { identifier: "german", name: "German" },
    { identifier: "chinese", name: "Chinese" },
    { identifier: "japanese", name: "Japanese" },
    { identifier: "korean", name: "Korean" },
    { identifier: "russian", name: "Russian" },
    { identifier: "arabic", name: "Arabic" },
];
