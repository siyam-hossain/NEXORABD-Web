    (function () {
      try {
        const loader = document.getElementById('loader');
        if (!loader) return;

        // When CSS animation finishes, remove the loader completely (clean)
        loader.addEventListener('animationend', function onEnd(e) {
          // remove from DOM so it can't block clicks or occupy layout
          if (loader.parentNode) loader.parentNode.removeChild(loader);
          console.log('Loader removed after CSS animation');
        }, { once: true });

        // Safety: if something goes wrong, forcibly hide after 6 seconds
        setTimeout(() => {
          const l = document.getElementById('loader');
          if (l) {
            l.style.display = 'none';
            console.log('Loader forcibly hidden after timeout');
          }
        }, 600);
      } catch (err) {
        console.error('Loader script error', err);
      }
    })();