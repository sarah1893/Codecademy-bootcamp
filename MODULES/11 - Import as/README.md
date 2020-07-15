# Import as

To import named export aliases with the `as` keyword, we add the aliased variable in our import statement.

```
import { chefsSpecial, isVeg } from './menu';
```

In **orders.js**

1. We import `chefsSpecial` and `isVeg` from the `Menu` object.

2. Here, note that we have an option to alias an object that was not previously aliased when exported. For example, the `isLowSodium` object that we exported could be aliased with the `as` keyword when imported: `import {isLowSodium as saltFree} from 'Menu';`
   
Another way of using aliases is to import the entire module as an alias:

```
import * as Carte from './menu';

Carte.chefsSpecial;
Carte.isVeg();
Carte.isLowSodium(); 
```

1. This allows us to import an entire module from **menu.js** as an alias `Carte`.

2. In this example, whatever name we exported would be available to us as properties of that module. For example, if we exported the aliases `chefsSpecial` and `isVeg`, these would be available to us. If we did not give an alias to `isLowSodium`, we would call it as defined on the Carte module.