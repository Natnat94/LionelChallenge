const PICTURE_HOST = "https://6a25-92-174-89-249.ngrok-free.app";
export const changeHost = (url) => {
  try {
    const urlObj = new URL(url);
    return PICTURE_HOST + urlObj.pathname + urlObj.search;
  } catch (error) {
    console.error("Invalid URL:", error);
    return null;
  }
};
