# Интеграция с GREEN-API

## Описание проекта
Этот проект реализует веб-страницу для взаимодействия с GREEN-API, позволяя получать настройки, проверять статус инстанса, отправлять сообщения и файлы.

## Структура проекта
- `index.html`: HTML-страница.
- `styles.css`: Стили для веб-страницы.
- `script.js`: JavaScript для работы с API.

## Требования для запуска
- Доступ в интернет для отправки API-запросов.
- Современный браузер.

## Инструкции по установке и запуску
1. Клонируйте репозиторий: `git clone <repository-url>`
2. Откройте `index.html` в браузере.
3. Введите `idInstance` и `ApiTokenInstance`.
4. Нажмите на нужную кнопку для вызова API.

## Алгоритм работы
1. Пользователь создает инстанс на GREEN-API.
2. Сканирует QR-код для подключения номера телефона.
3. Вводит `idInstance` и `ApiTokenInstance` на странице.
4. Нажимает на кнопки для вызова методов и видит ответ на странице.
