class Request {
  constructor() {
    this.xhr = new XMLHttpRequest();
  }

  get(url, cb) {
    this.xhr.open("GET", url);
    this.xhr.onload = () => {
      this.xhr.status == 200
        ? cb(null, this.xhr.responseText)
        : cb("happened was accident", null);
    };
    this.xhr.send();
  }

  post(url, data, cb) {
    this.xhr.open("POST", url);
    this.xhr.setRequestHeader("Content-type", "application/json");
    this.xhr.onload = () => {
      this.xhr.status == 201
        ? cb(null, this.xhr.responseText)
        : cb("happened was accident", null);
    };
    this.xhr.send(JSON.stringify(data));
  }

  put(url, data, cb) {
    this.xhr.open("PUT", url);
    this.xhr.setRequestHeader("Content-type", "application/json");
    this.xhr.onload = () => {
      this.xhr.status == 200
        ? cb(null, this.xhr.responseText)
        : cb("happened was accident", null);
    };
    this.xhr.send(JSON.stringify(data));
  }

  delete(url, cb) {
    this.xhr.open("DELETE", url);
    this.xhr.setRequestHeader("Content-type", "application/json");
    this.xhr.onload = () => {
      this.xhr.status == 200
        ? cb(null, "la sildin sildin")
        : cb("happened was accident", null);
    };
    this.xhr.send();
  }
}

const temp = new Request();
const url = "https://jsonplaceholder.typicode.com/albums";

// temp.get(url, function (err, res) {
//   err == null ? console.log(res) : console.log(err);
// });

// temp.post(url, { userId: 2, title: "Thriller" }, function (err, res) {
//   err == null ? console.log(res) : console.log(err);
// });

// temp.put(url + "/5", { userId: 2, title: "Thriller" }, function (err, res) {
//   err == null ? console.log(res) : console.log(err);
// });

// temp.delete(url + "/5", function (err, res) {
//   err == null ? console.log(res) : console.log(err);
// });

class RequestX {
  // get(url) {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log(err));
  // }
  // get(url) {
  //   return new Promise((resolve, reject) => {
  //     fetch(url)
  //       .then((response) => response.json())
  //       .then((data) => resolve(data))
  //       .catch((err) => reject(err));
  //   });
  // }
  // async get(url) {
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   return data;
  // }
  // post(url, data) {
  //   fetch(url, {
  //     method: "POST",
  //     body: JSON.stringify(data),
  //     headers: { "Content-type": "application/json; charset=UTF-8" },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log(err));
  // }
  // post(url, data) {
  //   return new Promise((resolve, reject) => {
  //     fetch(url, {
  //       method: "POST",
  //       body: JSON.stringify(data),
  //       headers: { "Content-type": "application/json; charset=UTF-8" },
  //     })
  //       .then((response) => response.json())
  //       .then((data) => resolve(data))
  //       .catch((err) => reject(err));
  //   });
  // }
  // async post(url, data) {
  //   const response = await fetch(url, {
  //     method: "POST",
  //     body: JSON.stringify(data),
  //     headers: { "Content-type": "application/json; charset=UTF-8" },
  //   });
  //   const datax = await response.json();
  //   return datax;
  // }
  // put(url, data) {
  //   fetch(url, {
  //     method: "PUT",
  //     body: JSON.stringify(data),
  //     headers: { "Content-type": "application/json; charset=UTF-8" },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log(err));
  // }
  // put(url, data) {
  //   return new Promise((resolve, reject) => {
  //     fetch(url, {
  //       method: "PUT",
  //       body: JSON.stringify(data),
  //       headers: { "Content-type": "application/json; charset=UTF-8" },
  //     })
  //       .then((response) => response.json())
  //       .then((data) => resolve(data))
  //       .catch((err) => reject(err));
  //   });
  // }
  // async put(url, data) {
  //   const response = await fetch(url, {
  //     method: "PUT",
  //     body: JSON.stringify(data),
  //     headers: { "Content-type": "application/json; charset=UTF-8" },
  //   });
  //   const datax = await response.json();
  //   return datax;
  // }
  // delete(url) {
  //   fetch(url, {
  //     method: "DELETE",
  //     body: JSON.stringify(),
  //     headers: { "Content-type": "application/json; charset=UTF-8" },
  //   })
  //     .then((response) => response.json())
  //     .then((_) => console.log("that was a deleted"))
  //     .catch((err) => console.log(err));
  // }
  // delete(url) {
  //   return new Promise((resolve, reject) => {
  //     fetch(url, {
  //       method: "DELETE",
  //       body: JSON.stringify(),
  //       headers: { "Content-type": "application/json; charset=UTF-8" },
  //     })
  //       .then((response) => response.json())
  //       .then((_) => resolve("that was a deleted"))
  //       .catch((err) => reject(err));
  //   });
  // }
  // async delete(url) {
  //   const response = await fetch(url, {
  //     method: "DELETE",
  //     body: JSON.stringify(),
  //     headers: { "Content-type": "application/json; charset=UTF-8" },
  //   });
  //   const datax = await response.json();
  //   return "that was a deleted";
  // }
}

const tempx = new RequestX();
// tempx.get(url);
// tempx
// .get(url)
// .then((res) => console.log(res))
// .catch((err) => console.log(err));

// tempx.post(url, { userId: 2, title: "Thriller" });
// tempx
//   .post(url, { userId: 2, title: "Thriller" })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// tempx.put(url + "/5", { userId: 2, title: "Thriller" });
// tempx
//   .put(url + "/5", { userId: 2, title: "Thriller" })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// tempx.delete(url + "/5");
// tempx
//   .delete(url + "/5")
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
