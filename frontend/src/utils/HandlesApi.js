import axios from "axios";

const baseUrl = "http://localhost:4000/todo";

export const getTodo = (setTodo) => {
  axios
    .get(baseUrl)
    .then(({ data }) => setTodo(data))
    .catch((err) => console.log(err));
};

export const addTodo = (text, setText, setTodo) => {
  // try {
  //   await axios.post(`${baseUrl}/addTodo`, { todo: text });
  // } catch (err) {
  //   return console.log(err);
  // }
  if (text !== "") {
    axios.post(`${baseUrl}/addTodo`, { todo: text }).then(null, (err) => {
      getTodo(setTodo);
      setText("");
      return console.log(err.response);
    });

    // axios
    //   .post(`${baseUrl}/addTodo`, { todo: text })
    //   .then((data) => {
    //     return console.log("added");
    //   })
    //   .catch((err) => console.log(err.request))
    //   .then(() => {
    //     getTodo(setTodo);
    //     setText("");
    //   });
  }

  //let createTodo;

  // if (text !== "") {
  //   try {
  //     createTodo = await axios.post(`${baseUrl}/addTodo`, { todo: text });

  //     console.log(createTodo);
  //   } catch (err) {
  //     setText("");
  //     getTodo(setTodo);
  //     return console.log(err.request);
  //   }
  // }

  //
};

export const updateTodo = (_id, text, setText, setTodo, setIsUpdating) => {
  axios
    .post(`${baseUrl}/updatetodo/${_id}`, { todo: text })
    .then(null, (err) => {
      getTodo(setTodo);
      setText("");
      setIsUpdating(false);
      return console.log(err.response);
    });
};

export const deleteTodo = (_id, setTodo) => {
  //console.log(_id);
  axios
    .post(`${baseUrl}/deleteTodo`, { _id: _id })
    .then((data) => {
      //console.log(data);
    })
    .catch((err) => console.log(err))
    .then(() => {
      getTodo(setTodo);
    });
};
