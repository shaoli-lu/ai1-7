document.addEventListener('DOMContentLoaded', () => {
  // Make controls work for all embedded PDFs (scales with new cards)
  const viewers = document.querySelectorAll('object.pdf-embed');
  viewers.forEach((viewer) => {
    const file = viewer.getAttribute('data') || viewer.getAttribute('data-src') || 'Tiny_Seed_Mighty_Impact.pdf';
    const section = viewer.closest('.pdf-section') || document;
    const download = section.querySelector('.pdf-download');
    const openLink = section.querySelector('.pdf-open');
    const titleEl = section.querySelector('.carousel-title') || section.querySelector('.pdf-title');

    if (viewer) viewer.setAttribute('data', file);
    if (download) download.setAttribute('href', file);
    if (openLink) openLink.setAttribute('href', file);
    if (titleEl) {
      const pretty = file.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ');
      titleEl.textContent = pretty;
    }
  });
});
