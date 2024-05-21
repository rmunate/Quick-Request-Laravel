---
title: Installation
editLink: true
outline: deep
---

## Installation

In order to utilize this tool, you need to have the `csrf-token` meta tag in your main template, as per the official Laravel documentation on [X-CSRF-TOKEN](https://laravel.com/docs/11.x/csrf#csrf-x-csrf-token). This value will be independently read by the `QuickRequest` package, so you should NOT include the `@csrf` directives in your forms or create hidden inputs with this value, as **the library handles it for you**.

```html
<meta name="csrf-token" content="{{ csrf_token() }}">
```

### CDN Usage

If you're not using VITE in your project, you can install this solution simply by utilizing the CDN available for your use.

It's as easy as adding the following line of code to the `<head>` section of your main template.

```html
<head>
    <!-- ... -->
    <script src="https://cdn.jsdelivr.net/gh/rmunate/Quick-Request-Laravel/dist/js/quick-request.min.js"></script>
    <!-- ... -->
</head>
```

Alternatively, you could download the content from the aforementioned URL, place it in the `public` directory within a `js` folder, keeping the code locally in your project. However, this means you would maintain code that won't be updated with the adjustments or enhancements applied to the project.

```html
<head>
    <!-- ... -->
    <script src="{{ asset('js/quick-request.min.js') }}"></script>
    <!-- ... -->
</head>
```

### NPM Usage with VITE

If you're developing your project with VITE, it will be much more convenient to install this solution using the following command.

```bash
npm i quick-request-laravel
```

This way, the package will be readily available in your system; you just need to import it into your modules.

```javascript
import { QuickRequest } from 'quick-request-laravel';
```
