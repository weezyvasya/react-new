const data = {
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, excepturi nisi? Voluptatibus esse accusamus hic ad dolorum ex voluptates omnis dignissimos quaerat iure. Corporis pariatur ad voluptates odio est autem?',
    text1: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, excepturi nisi? Voluptatibus esse',
    text3: 'Voluptatibus esse accusamus hic ad dolorum ex voluptates omnis dignissimos quaerat iure. Corporis pariatur ad voluptates odio est autem?'
}

const users = [
    {id: 1, name: 'Vany'},
    {id: 2, name: 'Kirill'},
    {id: 3, name: 'Katy'},
    {id: 4, name: 'Mary'},
    {id: 5, name: 'Alexandr'},
]


const questions = [
    {
      title: 'React - это ... ?',
      variants: ['библиотека', 'фреймворк', "часть приложения"],
      correct: 0,
    },
    {
      title: 'Компонент - это ... ',
      variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
      correct: 1,
    },
    {
      title: 'Что такое JSX?',
      variants: [
        'Это простой HTML',
        'Это функция',
        'Это тот же HTML, но с возможностью выполнять JS-код',
      ],
      correct: 2,
    },
  ];


export {data, users, questions}