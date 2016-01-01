# get-user-mentions [![Build Status](https://travis-ci.org/radiovisual/get-user-mentions.svg?branch=master)](https://travis-ci.org/radiovisual/get-user-mentions)

> Get all @user mentions in a string.


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

The string you want to search for user mentions

#### options

##### unique

Type: `boolean`  
Default: `false`

Removes unique values from the array of user mentions


## License

MIT © [Michael Wuergler](http://numetriclabs.com)
