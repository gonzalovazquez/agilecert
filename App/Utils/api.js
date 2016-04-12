var api = {
  getQuestions(){
    var url = `http://localhost:5000`;
    return fetch(url, {
      method: 'get',
      headers: {
        "Content-type": "application/json"
      }
    }).then((res) => {
      console.log(res);
    });
  }
};

module.exports = api;
