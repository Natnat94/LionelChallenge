const HOST = "https://9ac5-92-174-89-249.ngrok-free.app";
// const HOST = "http://localhost:8000";

export const get = async (path) => {
  const url = getUrl(path);
  return await fetch(url);
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
    // headers: {
    //   "Content-Type": "application/json",
    // },
    body: formData,
  };

  return await fetch(url, requestOptions);
};

const getUrl = (path) => `${HOST}/api/v1${path}`;
