# get-user-mentions 

> Get all @user mentions in a string.

[![Build Status](https://travis-ci.org/radiovisual/get-user-mentions.svg?branch=master)](https://travis-ci.org/radiovisual/get-user-mentions)

## Install

```
$ npm install --save get-user-mentions
```


## Usage

```js
const userMentions = require('get-user-mentions');

userMentions('hello @michael and @mark, how are you?');
//=> ['@michael', '@mark']
```


## API

### getUserMentions(input, [options])

#### input


Type: `string`  

The string with usernames you want to search

#### options

Use these options to override the defaults

##### unique

Type: `boolean`  
Default: `false`  

Removes duplicate names from the array of user mentions

##### nameOnly

Type: `boolean`  
Default: `false`  

Returns an array of names **without** the `@` symbol.

## Known Limitations

- Currently, this module only supports usernames written in the latin unicode character sets. So english, latin, and most romance/european languages are covered. [I am working on ways to support other languages](https://github.com/radiovisual/get-user-mentions/issues/1). 
- This module only searches for usernames that use the alphanumeric and underscore character conventions. This is not a bug, but you should be aware of this limitation if you are searching for unconventional usernames like `@b@b`

## License

MIT © [Michael Wuergler](http://numetriclabs.com)
