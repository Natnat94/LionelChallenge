const HOST = "https://9ac5-92-174-89-249.ngrok-free.app";
// const HOST = "http://localhost:8000";

// const HOST = REMOTE_HOST;

export const get = async (path) => {
  const url = getUrl(path);
  return await fetch(url);
};

export const post = async (path, data) => {
  const url = getUrl(path);

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  return await fetch(url, requestOptions);
};

const getUrl = (path) => `${HOST}/api/v1${path}`;
