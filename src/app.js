
const http = require("http"); //Подключаем модуль HTTP
const getUsers = require("./modules/users"); //Модуль с пользовательской функцией для получения списка из файла

const server = http.createServer((request, response) => {
  //Параметр request храит информацию о запросе
  //    Основные методы:
  //    headers: возвращает заголовки запроса
  //    method: тип запроса (GET, POST, DELETE, PUT)
  //    url: представляет запрошенный адрес
  if (request.url === "/users") {
    response.statusCode = 200;
    response.statusMessage = "OK";
    response.setHeader("Content-Type", "application/json");
    response.write(getUsers());
    response.end();
    return;
  }


  response.statusCode = 200;
  response.statusMessage = "OK";
  response.setHeader("Content-Type", "text/plain; charset=utf-8");
  response.write("Приветствую тебя на этом сервере");
  response.end();
}); //При помощи метода createServer создаем (инитим) сервер

server.listen(3000, () => {
  console.log("Сервер запущен по адресу по адресу http://127.0.0.1:3000");
}); //При помощи метода listen запускаем сервер
