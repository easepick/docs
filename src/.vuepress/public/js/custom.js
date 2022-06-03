const gh = {
  version: null,
  configurator: false,

  async get_tags() {
    const stored = JSON.parse(localStorage.getItem('version'));
    if (stored && stored.d === (new Date).getDate()) {
      return new Promise((resolve, reject) => {
        resolve(stored.v);
      });
    }

    const r = await fetch('https://api.github.com/repos/easepick/easepick/tags');
    return await r.json();
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
      const ver = version.replace(/^v/, '');
      localStorage.setItem('version', JSON.stringify({ d: (new Date()).getDate(), v: ver }));

      return ver;
    }

    return null;
  },

  add_script(src, cb) {
    const script = document.createElement('script');
    script.src = src;
    script.type = 'text/javascript';
    script.async = true;
    script.onload = cb || (() => { });
    document.head.appendChild(script);
  },

  add_stylesheet(href, cb) {
    const link = document.createElement('link');
    link.href = href;
    link.rel = 'stylesheet';
    link.onload = cb || (() => { });
    document.head.appendChild(link);
  },

  favicon() {
    const date = (new Date()).getDate();
    const favicon = document.querySelector('link[rel="icon"]');

    favicon.setAttribute('href', '/favicon/' + date + '.png');
  },

  kofi() {
    const buttons = [...document.querySelectorAll('a[href="https://ko-fi.com/V7V418NB3"]')];

    if (buttons.length) {
      buttons.forEach((button) => {
        const a = document.createElement('a');
        a.title = 'Support me on ko-fi.com';
        a.href = 'https://ko-fi.com/V7V418NB3';
        a.target = '_blank';
        a.className = 'kofi-button nav-link external';
        a.innerHTML = `<img src="https://storage.ko-fi.com/cdn/cup-border.png" class="kofiimg"> Donate`;
        button.replaceWith(a);
      });
    } else {
      setTimeout(gh.kofi, 300);
    }
  },

  initialize() {
    gh.favicon();
    gh.kofi();

    gh.get_tags()
      .then(r => {
        if (Array.isArray(r)) {
          return gh.find_latest_tag(r);
        }
        return r;
      })
      .then(r => {
        if (r) {
          gh.version = r;
          gh.add_script('https://cdn.jsdelivr.net/npm/@easepick/bundle@' + r + '/dist/index.umd.min.js');
        }
      });
  },
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', gh.initialize);
} else {
  gh.initialize();
}
