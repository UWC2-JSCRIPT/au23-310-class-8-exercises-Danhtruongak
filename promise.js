let myPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    const rand = Math.random();
    if (rand > 0.5) {
      resolve(rand);
    } else {
      reject(rand);
    }
  }, 1000);
});

myPromise
  .then(function (value) {
    console.log("success", value);
  })
  .catch(function (value) {
    console.log("fail", value);
  })
  .finally(() => {
    console.log("complete");
  });
