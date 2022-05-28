<template>
  <div>
    <table>
      <thead>
        <tr>
          <th style="text-align: center">
            <div class="browser-icon chrome-icon"></div>
          </th>
          <th style="text-align: center">
            <div class="browser-icon edge-icon"></div>
          </th>
          <th style="text-align: center">
            <div class="browser-icon firefox-icon"></div>
          </th>
          <th style="text-align: center">
            <div class="browser-icon opera-icon"></div>
          </th>
          <th style="text-align: center">
            <div class="browser-icon safari-icon"></div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="text-align: center">
            <!-- chrome version -->
            75+
          </td>
          <td style="text-align: center">
            <!-- edge version -->
            80+
          </td>
          <td style="text-align: center">
            <!-- firefox version -->
            75+
          </td>
          <td style="text-align: center">
            <!-- opera version -->
            60+
          </td>
          <td style="text-align: center">
            <!-- safari version -->
            14.1+
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped lang="stylus">
.browser-icon {
  background-image: url('/images/browsers.png');
  width: 37px;
  height: 37px;
  background-size: 215px;
  background-repeat: no-repeat;
  display: inline-block;

  &.chrome-icon {
    background-position: -3px -3px;
  }

  &.edge-icon {
    background-position: -44px -3px;
  }

  &.firefox-icon {
    background-position: -90px -3px;
  }

  &.opera-icon {
    background-position: -132px -3px;
  }

  &.safari-icon {
    background-position: -175px -3px;
  }
}
</style>