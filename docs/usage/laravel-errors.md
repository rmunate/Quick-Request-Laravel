---
title: Laravel Errors
editLink: true
outline: deep
---

# Errors

Now let's see how we can handle errors that occur during the processing of our request by the Laravel backend. Whether it's due to FormRequest, Validator, Exceptions, or any other source.

It is essential to receive a standardized response for the errors that occur because it is not common to create customizations for each request to the backend for possible generated errors.

For this, QuickRequest always returns the same error structure, regardless of whether errors are thrown in our code, caught in catch blocks, or thrown as exceptions in the framework.

Below is the structure that the value passed to the `error` function looks like:

```javascript
QuickRequest().get({
    //...
    error: function(response, data, code){
        console.log(data);
    },
    //...
});
```

Browser Console Output:

```javascript
{
    "message" : "Main error message."
    "errors" : {
        "First Error" : [
            "First Description Error",
            "Second Description Error",
        ]
    }
}
```

Where,
- `code`: contains the error code such as `419`, `500`, etc.
- `data`: contains the errors generated in the backend by a FormRequest, TryCatch block, or unhandled exceptions.
- `response`: contains the entire response including Headers and more.

The `data` property will always contain two properties:
- `message`: This property contains the main error.
- `errors`: contains an object where each property has an array of different errors related to the same issue.

An important thing is how you should return errors from controllers to make reading from the front end more convenient:

```php
try {

    //...

} catch (\Throwable $th) {

    return response()->json([
        "message" => $th->getMessage(),
        // "errors" => [
        //     "First Error" => [
        //         "First Description Error",
        //         "Second Description Error",
        //     ]
        // ],
    ], $th->getCode());

}
```

Simply, if you notice, it's an indexed array.
