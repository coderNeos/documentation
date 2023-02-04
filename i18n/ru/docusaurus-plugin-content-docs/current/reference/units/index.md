---
sidebar_position: 1
---

# Юниты

## Модуль {#module}

Структурная единица проекта

Под модулем обычно подразумевается определенный файл или директория *(абстракция в контексте структуры)*

- *модуль авторизации*
- *модуль страниц*
- *модуль компонента в фиче*
- *модуль экшенов в модели сущности*
- *и т.д.*

## [Слой][refs-layers] {#layer}

Каждая из директорий, находящихся на самом верхнем уровне приложения.

Этот уровень определяет скоуп ответственности модулей, а также уровень опасности изменений

- **Представители**: `app`, `processes`, `pages`, `widgets`, `features`, `entities`, `shared`

```sh
└── src/
    ├── app/                    # Инициализирующая логика приложения
    ├── processes/              # (Опц.) Процессы приложения, протекающие над страницами
    ├── pages/                  # Страницы приложения
    ├── widgets/                # Самостоятельные и полноценные блоки для страниц
    ├── features/               # (Опц.) Обрабатываемые пользовательские сценарии
    ├── entities/               # (Опц.) Бизнес-сущности, которыми оперирует предметная область
    └── shared/                 # Переиспользуемые модули, без привязки к бизнес-логике
```

## Слайс {#slice}

Каждый из элементов, находящихся на верхнем уровне слоёв

Этот уровень слабо регламентируется методологией, однако многое зависит от конкретного проекта, стека и команды

- **Представители (от каждого слоя)** `process`, `page`, `widget`, `feature`, `entity`

```sh
├── app/
|   # Не имеет конкретных слайсов, 
|   # Т.к. там содержится мета-логика над проектом и его инициализации
├── processes/
|   # Слайсы для реализации процессов на страницах
|   ├── payment
|   ├── auth
|   ├── quick-tour
|   └── ...
├── pages/
|   # Слайсы для реализации страниц приложения
|   # При этом, в силу специфики роутинга - могут вкладываться друг в друга
|   ├── profile
|   ├── sign-up
|   ├── feed
|   └── ...
├── widgets/
|   # Слайсы для реализации самостоятельных блоков страниц
|   ├── header
|   ├── feed
|   └── ...
├── features/
|   # Слайсы для реализации пользовательских сценариев на страницах
|   ├── auth-by-phone
|   ├── inline-post
|   └── ...
├── entities/
|   # Слайсы бизнес-сущностей для реализации более сложной БЛ
|   ├── viewer
|   ├── posts
|   ├── i18n
|   └── ...
├── shared/
|    # Не имеет конкретных слайсов
|    # Представляет собой скорее набор общеиспользуемых сегментов, без привязки к БЛ
```

## [Сегмент][refs-segments] {#segment}

Каждый из модулей, находящийся на верхнем уровне каждого слайса

Этот уровень определяет назначение модулей в коде и реализации, согласно классическим моделям проектирования

- **Представители**: `ui`, `model`, `lib`, `api`, `config`

```sh
{layer}/
    ├── {slice}/
    |   ├── ui/                     # UI-логика (components, ui-widgets, ...)
    |   ├── model/                  # Бизнес-логика (store, actions, effects, reducers, ...)
    |   ├── lib/                    # Инфраструктурная логика (utils/helpers)
    |   ├── config/                 # Конфигурация приложения (env-vars, ...)
    |   └── api/                    # Логика запросов к API (api instances, requests, ...)
```

:::note

Поскольку не каждый из слоев в явном виде использует слайсы (app, shared)

- Сегменты могут располагаться по своим правилам `shared/{api, config}`
- Или не использоваться совсем `app/{providers, styles}`

:::

## См. также {#see-also}

- [Layers в методологии][refs-layers]
- [Segments в методологии][refs-segments]

[refs-layers]: /docs/reference/layers
[refs-segments]: /docs/reference/slices-segments#segments