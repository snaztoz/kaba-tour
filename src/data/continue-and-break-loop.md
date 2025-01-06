# Controlling Loop with `continue` and `break`

There are also the `continue` and `break` statements to skip and exit from a loop, respectively.

```
var i = 0;

while i < 10 {
    if i == 3 { continue; }
    if i == 7 { break; }

    debug i * 2;
    i += 1;
}
```
