<div id="logo" align="center">
  <img src="https://media.discordapp.net/attachments/826280792320901141/864469449310863360/CLOG.png" />
</div>

<div id="badges" align="center">
      <a href="https://circleci.com/gh/ChecksumDev/clog.svg?style=shield"><img alt="pypi" src="https://circleci.com/gh/ChecksumDev/clog.svg?style=shield"/></a>
  <a href="https://coveralls.io/github/ChecksumDev/clog"><img alt="pypi" src="https://coveralls.io/repos/github/ChecksumDev/clog/badge.svg"/></a>
</div>

#

Checksum's typescript logging library. 🎉

This is a `javascript`/`typescript` module in active development for logging things to the console in a stylish and optimized way without having the hassle of building your own logging system for every app you create!

## Example

See other usages in the typescript type defintions

```typescript
import Clog from "@checksumdev/clog"; // Import Clog
const clog = new Clog(); // Instantiate Clog (its faster this way)

clog.log("Hello World!"); // outputs "Hello World!" in green text
```

### Output

    clog.log("Hello World!");
    -> [12:00:00] [INFO] Hello World!
