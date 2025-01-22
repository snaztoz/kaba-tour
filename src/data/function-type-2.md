# Function Type (2)

Function can also be used as a return value:

```
fn getter(): () -> int {
    return get_two;
}

fn get_two(): int {
    return 2;
}
```
