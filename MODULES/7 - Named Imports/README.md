# Named Imports

To import objects stored in a variable, we use the `import` keyword and include the variables in a set of `{}`.

In the **order.js** file, for example, we would write:

```
import { specialty, isVegetarian } from './menu';

console.log(specialty);
```

1. Here `specialty` and `isVegetarian` are imported.

2. If we did not want to import either of these variables, we could omit them from the `import` statement.

3. We can then use these objects as in within our code. For example, we would use `specialty` instead of `Menu.specialty`.