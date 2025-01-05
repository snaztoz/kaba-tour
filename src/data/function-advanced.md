# Function (advanced)

We can assign a function to a variable:

```
fn get_two(): int {
    return 2;
}

var yield_value = get_two;
yield_value();
```

We can also create a function that returns other function:

```
fn yield(): () -> int {
    return get_two;
}

yield()();
```

Array can also hold values of function type:

```
fn get_two(): int { return 2; }
fn get_three(): int { return 3; }

var yielders = [() -> int
    get_two,
    get_three,
];

each yield in yielders {
    debug yield();
}
```
