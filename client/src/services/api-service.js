const HOST = "https://1065-92-174-89-249.ngrok-free.app";
// const HOST = "http://localhost:8000";

export const get = async (path) => {
  const url = getUrl(path);
  const requestOptions = {
    method: "GET",
    headers: {
      // "Content-Type": "application/json",
      "ngrok-skip-browser-warning": true,
    },
  };
  return (await fetch(url, requestOptions)).json();
};

export const post = async (path, data) => {
  const url = getUrl(path);

  const formData = new FormData();

  // Append other data to the FormData object
  for (const key in data) {
    formData.append(key, data[key]);
  }

  const requestOptions = {
    method: "POST",
    headers: {
      // "Content-Type": "application/json",
      "ngrok-skip-browser-warning": true,
    },
    body: formData,
  };

  return await fetch(url, requestOptions);
};

const getUrl = (path) => `${HOST}/api/v1${path}`;
