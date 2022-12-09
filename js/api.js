const ServerToPost = 'https://26.javascript.pages.academy/kekstagram';
const ServerToGet = 'https://26.javascript.pages.academy/kekstagram/data';

const getData = (onSuccess) => {
  fetch(ServerToGet)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error();
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch(() => {});
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    ServerToPost,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export {getData, sendData};
