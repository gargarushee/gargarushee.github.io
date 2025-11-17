const artPieces = [
  {
    title: 'CS329H Poster',
    medium: 'Digital · 2024',
    description: 'Visual story of representation steering research and gradient landscapes.',
    image: 'assets/art/cs329h-final-poster.png'
  },
  {
    title: 'Holding the Signal',
    medium: 'Procreate · 2023',
    description: 'Exploration of balance and agency through soft palettes.',
    image: 'assets/art/download_hands.png'
  },
  {
    title: 'Together in Light',
    medium: 'Illustration · 2022',
    description: 'Commissioned portrait capturing warmth and motion.',
    image: 'assets/art/couple.jpeg'
  }
];

const artGridEl = document.getElementById('artGrid');

artPieces.forEach((piece) => {
  const card = document.createElement('article');
  card.className = 'art-card';

  const img = document.createElement('img');
  img.src = piece.image;
  img.alt = piece.title;
  img.loading = 'lazy';
  img.addEventListener('error', () => img.remove());

  const caption = document.createElement('h4');
  caption.textContent = piece.title;

  card.appendChild(img);
  card.appendChild(caption);
  artGridEl.appendChild(card);
});
