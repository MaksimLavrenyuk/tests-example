1. Ставим [расширение](https://chrome.google.com/webstore/detail/cypress-chrome-recorder/fellcphjglholofndfmmjmheedhomgin)
2. Согласно [мануалу](https://github.com/cypress-io/cypress-recorder-extension#usage) записываем действия
3. Сохраняем файл в папку cypress/e22
4. Запускаем приложение cypress `npm run cypress-open` - видим свой тестовый файл, там же его можно запустить.

Памятка - если в тестах вы используете нажатие enter - файл не совсем верно экспортнется, требуется сделать следующее:

было:

```js
cy.get("#APjFqb").type("test");
cy.type("{enter}");
```

Стало:

```js
cy.get("#APjFqb").type("test").type("{enter}");
```
