const gh = {
  get_tags() {
    const stored = JSON.parse(localStorage.getItem('version'));
    if (stored && stored.d === (new Date).getDate()) {
      return new Promise((resolve, reject) => {
        resolve(stored.v);
      });
    }

    return fetch('https://api.github.com/repos/easepick/easepick/tags')
      .then(r => r.json());
  },

  find_latest_tag(tags) {
    const version = tags.filter(x => !x.name.includes('beta'))
      .map(x => x.name = /^v/.test(x.name) ? x.name : 'v' + x.name)
      .reduce((a, b) => {
        return 0 < a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })
          ? a
          : b
      });
    if (version) {
      localStorage.setItem('version', JSON.stringify({ d: (new Date()).getDate(), v: version.replace(/^v/, '') }));

      return version.replace(/^v/, '');
    }

    return null;
  },

  add_script(src, cb) {
    const script = document.createElement('script');
    script.src = src;
    script.type = 'text/javascript';
    script.async = true;
    script.onload = cb || (() => {});
    document.head.appendChild(script);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  gh.get_tags()
    .then(r => {
      if (Array.isArray(r)) {
        return gh.find_latest_tag(r);
      }
      return r;
    })
    .then(r => {
      if (r) {
        gh.add_script('https://cdn.jsdelivr.net/npm/@easepick/bundle@' + r + '/dist/index.umd.min.js');
      }
    });
});