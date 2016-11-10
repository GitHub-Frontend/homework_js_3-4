var test = {
  //создаем контейнер для страницы ======>
  createWrap : function () {
    var wrap = document.createElement('div');
        wrap.classList.add('wrapper');
    var body = document.querySelector('body');
        document.body.insertBefore(wrap, body.children[0]);
  },
  //создаем форму для обработки теста ======>
  createForm : function () {
    var form = document.createElement('form');
        form.setAttribute ("method", "post");
        form.setAttribute ("action", "#");
        form.className = 'form-post';
    var parentElem = document.querySelector('.wrapper');
        parentElem.appendChild(form);
  },
  //создаем заголовок========>
  createHeading : function (text) {
    var heading = document.createElement('h1');
        heading.innerText = text;
    var parentElem = document.querySelector('form');
        parentElem.appendChild (heading);
  },
//создаем лист для вопросов========>
  createQuestionsList : function () {
    var questionsList = document.createElement('ol');
        questionsList.className = 'questions__list'
        document.forms[0].appendChild (questionsList);
  },
//создаем список вопросов========>
  createQuestions : function (text) {
    var questions = document.createElement ('li');
        questions.innerText = text;
        questions.className = 'questions__item';
    var parentElem = document.querySelector('ol');
        parentElem.appendChild (questions);
  },
//создаем список ответов + checkbox========>
  createAnswer : function (list, name, text) {
    var input = document.createElement('input');
        input.setAttribute ("id", "id")
        input.setAttribute ("type", "checkbox");
    var answer = document.createTextNode (text);
    var label = document.createElement ('label');
        label.setAttribute ("for", "id");
        label.className = 'questions__checkbox';
        label.appendChild (input);
        label.appendChild (answer);
    var question = document.querySelector("ol li:nth-child(" + list + ")");
        question.appendChild(label);
  },
//создаем кнопку для отправки формы ========>
  createButton : function () {
    var submit = document.createElement ('input');
        submit.setAttribute ("type", "submit");
        submit.setAttribute ("value", "Проверить мои результаты");
        submit.className = 'questions__submit';
        document.forms[0].appendChild (submit);
  },
  //объединяем все функции для вызова + прогоняем через цикл========>
  createTest : function (heading, questions, answer) {
        this.createWrap ();
        this.createForm ();
        this.createHeading (heading);
        this.createQuestionsList (questions);
    for (var i = 1; i <= questions; i++) {
      this.createQuestions ("Вопрос №" + i);
      for (var j = 1; j <= answer; j++) {
        this.createAnswer (i, + i, "Вариант ответа №" + j);
      }
    }
        this.createButton ();
  }
}

 test.createTest ("Тест по программированию", 3, 3);

// test.createWrap ();
// test.createForm ();
// test.createHeading ();
// test.createQuestionsList ();
// test.createQuestions ();
// test.createAnswer ();
// test.createButton ();
// console.log();
