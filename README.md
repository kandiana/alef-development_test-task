# Проект создан с помощью CRA  

Проект выложен на GitHub Pages: [ссылка](https://kandiana.github.io/alef-development_test-task/)

## Работа с проектом
Перед запуском проекта необходимо выполнит команду `nmp i`  

### Запуск проекта:   
`npm start` - запуск в режиме разработки (по умолчанию запустится на порту 3000)  
`npm run prod` - запуск в production режиме (по умолчанию запустится на порту 5000)  


### Реализация:
- Форма сохраняется только по кнопке "сохранить". Если перейти на страницу превью до сохранения, отобразятся старые данные формы, введенная инфомация будет сброшена.  
- При сохранении идет переадресация на страницу превью.  
- Если при сохранении в каком-то поле для ребенка не введено ничего, это поле не сохранится и после возвращения на страницу формы не будет отображено.  