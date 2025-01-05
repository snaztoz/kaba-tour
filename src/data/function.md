# Function

To create a custom function, we can use the `fn` keyword.

Below is an example of a function that receive 1 `int` argument and returns an `int` value.

```text
fn add_two(n: int): int {
    return 2;
}
```

If the function does not receive or return anything, write it like this:

```text
fn greet() {
    debug "Hello!";
}
```
