# @easepick/lock-plugin

[![npm version](https://badge.fury.io/js/@easepick%2Flock-plugin.svg)](https://www.npmjs.com/package/@easepick/lock-plugin)

::: tip
This package does not need to be installed if you are using [@easepick/bundle](/packages/bundle).
:::

Adds the ability to disable days for selection.

## Quick example

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>easepick</title>
    <script src="https://cdn.jsdelivr.net/npm/@easepick/datetime@[version.number]/dist/index.umd.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@easepick/core@[version.number]/dist/index.umd.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@easepick/base-plugin@[version.number]/dist/index.umd.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@easepick/lock-plugin@[version.number]/dist/index.umd.min.js"></script>
  </head>
  <body>
    <input id="datepicker"/>
    <script>
      const picker = new easepick.create({
        element: document.getElementById('datepicker'),
        css: [
          'https://cdn.jsdelivr.net/npm/@easepick/core@[version.number]/dist/index.css',
          'https://cdn.jsdelivr.net/npm/@easepick/lock-plugin@[version.number]/dist/index.css',
        ],
        plugins: ['LockPlugin'],
        LockPlugin: {
          minDate: new Date(),
        },
      });
    </script>
  </body>
</html>
```

## Installation

#### NPM

```bash
npm install @easepick/core @easepick/lock-plugin
```

#### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@easepick/datetime@[version.number]/dist/index.umd.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@easepick/core@[version.number]/dist/index.umd.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@easepick/base-plugin@[version.number]/dist/index.umd.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@easepick/lock-plugin@[version.number]/dist/index.umd.min.js"></script>
```

## Usage

If you’re using a bundler, e.g. [webpack](https://webpack.js.org/):

```ts
import { easepick } from '@easepick/core';
import { LockPlugin } from '@easepick/lock-plugin';

const picker = new easepick.create({
  element: document.getElementById('datepicker'),
  css: [
    'https://cdn.jsdelivr.net/npm/@easepick/core@[version.number]/dist/index.css',
    'https://cdn.jsdelivr.net/npm/@easepick/lock-plugin@[version.number]/dist/index.css',
  ],
  plugins: [LockPlugin],
});
```

Another way to initialize `easypick`:

```js
const picker = new easepick.create({
  element: document.getElementById('datepicker'),
  css: [
    'https://cdn.jsdelivr.net/npm/@easepick/core@[version.number]/dist/index.css',
    'https://cdn.jsdelivr.net/npm/@easepick/lock-plugin@[version.number]/dist/index.css',
  ],
  plugins: ['LockPlugin'],
});
```

## Options

| Name | Type | Default | Description
| --- | :---: | :---: | ---
| [minDate](#option-minDate) | Date <br/> string <br/> number | null | The minimum/earliest date that can be selected. <br/> Date Object or Unix Timestamp (with milliseconds) or ISO String. <br/> When a date is provided as a string, it must be equal to the `format` option.
| [maxDate](#option-maxDate) | Date <br/> string <br/> number | null | The maximum/latest date that can be selected. <br/> Date Object or Unix Timestamp (with milliseconds) or ISO String. <br/> When a date is provided as a string, it must be equal to the `format` option.
| [minDays](#option-minDays) | number | null | The minimum days of the selected range.
| [maxDays](#option-maxDays) | number | null | The maximum days of the selected range.
| [selectForward](#option-selectForward) | boolean | false | Select second date after the first selected date.
| [selectBackward](#option-selectBackward) | boolean | false | Select second date before the first selected date.
| [presets](#option-presets) | boolean | true | Disable unallowed presets (when PresetPlugin is included).
| [inseparable](#option-inseparable) | boolean | false | Disable date range selection with locked days.
| [filter](#option-filter) | function | null | Lock days by custom function.

<ClientOnly>
  <autoversion/>
</ClientOnly>
