# QuickRequest Laravel

![logo-spell-number](https://raw.githubusercontent.com/rmunate/Quick-Request-Laravel/main/docs/public/img/quick-request-banner.png)

## Introduction

**QuickRequest** is an ultra-lightweight tool designed for swift and efficient requests to the Laravel backend.

By leveraging the "fetch" mechanism, this solution streamlines the execution of requests to Laravel controllers, eliminating the need for manual assignment of tokens, base URLs, hidden inputs, and other method-specific parameters.

QuickRequest provides a clean and elegant coding experience, making it a pleasant shift for developers accustomed to older technologies like Ajax.

Tailored to meet specific requirements, QuickRequest offers essential features for easily managing various request types in a standard Laravel application, including GET, POST, PUT, PATCH, and DELETE.

Additionally, it offers a convenient approach for efficient file downloads by effectively handling Blobs.

Forget about writing extra lines of code—experience the minimalist style of QuickRequest.

### Installation

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

## License
This project is under the [MIT License](https://choosealicense.com/licenses/mit/).

🌟 Support My Projects! 🚀

[![Become a Sponsor](https://img.shields.io/badge/-Become%20a%20Sponsor-blue?style=for-the-badge&logo=github)](https://github.com/sponsors/rmunate)

Make any contributions you see fit; the code is entirely yours. Together, we can do amazing things and improve the world of development. Your support is invaluable. ✨

If you have ideas, suggestions, or just want to collaborate, we are open to everything! Join our community and be part of our journey to success! 🌐👩‍💻👨‍💻