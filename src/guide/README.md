# Overview

Date picker - tiny size, no dependencies

<div style="text-align: center; font-size: 25px; display: block; margin-bottom: 15px;">
  <div id="index-demo" class="demo-wrapper" data-cfg="index"></div>
</div>

## Features

- No dependencies
- Uses [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)
- Supports plugins

## Browser compatibility

<browser-compatibility/>

## Packages

### Bundle

| Name | Version | Description
| --- | :---: | ---
| [@easepick/bundle](/packages/bundle) | ![npm version](https://badge.fury.io/js/@easepick%2Fbundle.svg) | **Bundle of easepick**. Includes all packages.<br/> An easy way to use all the features of `easepick`.

### Core

| Name | Version | Description
| --- | :---: | ---
| [@easepick/core](/packages/core) | ![npm version](https://badge.fury.io/js/@easepick%2Fcore.svg) | Main package of easepick. 
| [@easepick/datetime](/packages/datetime) | ![npm version](https://badge.fury.io/js/@easepick%2Fdatetime.svg) | DateTime package. 
| [@easepick/base-plugin](/packages/base-plugin) | ![npm version](https://badge.fury.io/js/@easepick%2Fbase-plugin.svg) | Base plugin of easepick. <br/> Required for other plugins and for development. 

### Plugins

| Name | Version | Description
| --- | :---: | ---
| [@easepick/amp-plugin](/packages/amp-plugin) | ![npm version](https://badge.fury.io/js/@easepick%2Famp-plugin.svg) | Amp plugin. <br/> Adds extra options.
| [@easepick/kbd-plugin](/packages/kbd-plugin) | ![npm version](https://badge.fury.io/js/@easepick%2Fkbd-plugin.svg) | Keyboard plugin. <br/> Adds keyboard navigation.
| [@easepick/lock-plugin](/packages/lock-plugin) | ![npm version](https://badge.fury.io/js/@easepick%2Flock-plugin.svg) | Lock plugin. <br/> Adds the ability to disable days for selection.
| [@easepick/preset-plugin](/packages/preset-plugin) | ![npm version](https://badge.fury.io/js/@easepick%2Fpreset-plugin.svg) | Preset plugin. <br/> Adds predefined ranges.
| [@easepick/range-plugin](/packages/range-plugin) | ![npm version](https://badge.fury.io/js/@easepick%2Frange-plugin.svg) | Range plugin. <br/> Adds the ability to select a range of dates.
| [@easepick/time-plugin](/packages/time-plugin) | ![npm version](https://badge.fury.io/js/@easepick%2Ftime-plugin.svg) | Time plugin. <br/> Adds time picker.

---

## License

Licensed under the terms of [GNU General Public License Version 2 or later](http://www.gnu.org/licenses/gpl.html). 

Copyright &copy; 2021-{{ new Date().getFullYear() }}, [Rinat G.](https://github.com/wakirin)