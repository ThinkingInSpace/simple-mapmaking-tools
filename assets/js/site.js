document.querySelectorAll('img[data-fallback]').forEach((img) => {
    img.addEventListener('error', () => {
        const fallback = img.dataset.fallback;
        if (fallback && img.src.indexOf(fallback) === -1) img.src = fallback;
    }, { once: true });
});
