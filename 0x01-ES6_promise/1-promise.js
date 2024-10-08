export default function getResponseFromAPI(Success) {
  return new Promise((resolve, reject) => {
    if (Success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
