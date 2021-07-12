# clog
[![CircleCI](https://circleci.com/gh/ChecksumDev/clog.svg?style=svg)

Checksum's typescript logging library

## Example

See other usages in the typescript type defintions

```typescript
import Clog from "@checksumdev/clog"; // Import Clog
let clog = new Clog(); // Instantiate Clog (its faster this way)

clog.log("Hello World!"); // outputs "Hello World!" in green text
```

### Output

    clog.log("Hello World!");
    -> (12:00 AM) [INFO] Hello World!
