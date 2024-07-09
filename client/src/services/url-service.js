export const changeHost = (url) => {
  try {
    const urlObj = new URL(url);
    urlObj.hostname = "https://1065-92-174-89-249.ngrok-free.app";
    return (
      "https://6a25-92-174-89-249.ngrok-free.app" +
      urlObj.pathname +
      urlObj.search
    );
  } catch (error) {
    console.error("Invalid URL:", error);
    return null;
  }
};
