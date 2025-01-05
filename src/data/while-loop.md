# While Loop

If we want to repeat a block of code whenever a condition is still true, we can use the `while` statement:

```
var i = 0;

while i < 10 {
    debug i * 2;

    // don't forget to increment the value😉
    i += 1;
}
```

There are also the `continue` and `break` statements to skip and exit from a loop, respectively.

```
var i = 0;

while i < 10 {
    if i == 3 {
        // skip this condition
        continue;
    }

    if i == 7 {
        // stop the loop
        break;
    }

    debug i * 2;
    i += 1;
}
```
