# Array

Array can be used to collect multiple values in a single container:

```
var arr = [int 1, 2, 3];
```

We can also manipulate the values inside of it:

```
arr[0] += 10;

arr[2] = 5;

var i = 1;
debug arr[i];
```

To specify the type notation of an array, use the `[]T` format:

```
var arr: []bool = [bool true, false, !!false];
```
