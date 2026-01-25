const artPieces = [
  {
    title: 'Alaska Glimmers',
    description: 'Glacial light and mountain silhouettes inspired by a northern road trip.',
    image: 'assets/art/Alaska.PNG'
  },
  {
    title: 'Beach Daylight',
    description: 'Sunlit shoreline with soft waves and a calm, airy palette.',
    image: 'assets/art/Beach.jpg'
  },
  {
    title: 'Beautiful Alaska',
    description: 'Layered peaks and icy blues capturing the scale of northern wilderness.',
    image: 'assets/art/BeautifulAlaska.jpg'
  },
  {
    title: 'Buddha Stillness',
    description: 'Quiet devotion and glowing light shaped around a serene figure.',
    image: 'assets/art/Buddha.jpg'
  },
  {
    title: 'Fall Waterfall',
    description: 'Autumn foliage framing a cascading stream in rich, earthy tones.',
    image: 'assets/art/FallWaterfall.jpg'
  },
  {
    title: 'Family Portrait',
    description: 'Gentle highlights and soft palettes capturing a shared moment together.',
    image: 'assets/art/Family.jpeg'
  },
  {
    title: 'GG Monogram Study',
    description: 'Bold geometric forms exploring symmetry, balance, and playful lettering.',
    image: 'assets/art/GG.PNG'
  },
  {
    title: 'Gossip Villagers',
    description: 'Lively figures and warm hues telling a village story in motion.',
    image: 'assets/art/GossipVillagers.jpg'
  },
  {
    title: 'Happy Kid',
    description: 'Bright, cheerful portrait capturing playful energy and joy.',
    image: 'assets/art/HappyKid.PNG'
  },
  {
    title: 'Horse in Motion',
    description: 'Dynamic strokes and flowing mane details capturing speed and energy.',
    image: 'assets/art/Horse.jpg'
  },
  {
    title: 'Innocent Child',
    description: 'Soft highlights and tender expression focusing on youthful calm.',
    image: 'assets/art/InnocentChild.jpg'
  },
  {
    title: 'Lady in the Fort',
    description: 'Regal tones and historic architecture with a poised figure.',
    image: 'assets/art/LadyInTheFort.JPG'
  },
  {
    title: 'Penguins',
    description: 'Playful companions painted with gentle texture and cool tones.',
    image: 'assets/art/Penguins.jpg'
  },
  {
    title: 'Radha Devotion',
    description: 'Devotional portrait with luminous accents and graceful detail.',
    image: 'assets/art/RadhaDevotion.jpg'
  },
  {
    title: 'Starry Night Reimagined',
    description: 'Luminous blues and flowing strokes echoing the movement of the night sky.',
    image: 'assets/art/StarryNight.jpeg'
  },
  {
    title: 'The Pack',
    description: 'A cohesive group composition built with warm, earthy strokes.',
    image: 'assets/art/ThePack.jpg'
  },
  {
    title: 'Tulips in Bloom',
    description: 'Fresh spring hues layered with delicate botanical texture.',
    image: 'assets/art/Tulips.jpg'
  },
  {
    title: 'Watercolor Roses',
    description: 'Loose watercolor-inspired petals and soft washes of color.',
    image: 'assets/art/WaterColorRoses.jpg'
  },
  {
    title: 'Beautiful Couple',
    description: 'A romantic portrait with gentle light and soft movement.',
    image: 'assets/art/beautifulcouple.jpg'
  },
  {
    title: 'Colorful Meditation',
    description: 'Vibrant aura and tranquil posture blending energy with stillness.',
    image: 'assets/art/colorfulMeditation.jpg'
  },
  {
    title: 'Diwali Glow',
    description: 'Festival lights, marigolds, and radiant warmth captured in a celebratory scene.',
    image: 'assets/art/diwali2020.jpg'
  },
  {
    title: 'Girl in Focus',
    description: 'Character study with expressive gaze and layered, painterly color.',
    image: 'assets/art/girl.jpg'
  },
  {
    title: 'Hawaiian Breeze',
    description: 'Tropical palette with surf mist and a glowing coastal horizon.',
    image: 'assets/art/hawaii.PNG'
  },
  {
    title: 'Mandala Study',
    description: 'Intricate symmetry and detailed pattern work in layered tones.',
    image: 'assets/art/mandala.jpg'
  },
  {
    title: 'Meditation',
    description: 'Quiet stillness, diffused light, and a calm breath in the center of the frame.',
    image: 'assets/art/meditate.JPG'
  },
  {
    title: 'Paris Dream',
    description: 'Romantic city glow with soft architecture and a dreamy twilight haze.',
    image: 'assets/art/parisDream.png'
  },
  {
    title: 'Pattachitra Elephant',
    description: 'Traditional motif with ornate detailing and rhythmic pattern work.',
    image: 'assets/art/pattachitraElephant.jpg'
  },
  {
    title: 'Radha Krishna',
    description: 'Devotional portrait with lotus hues and delicate ornamentation.',
    image: 'assets/art/radhaKrishna.jpg'
  },
  {
    title: 'Rose Bloom',
    description: 'Close-up floral study with velvety gradients and warm light.',
    image: 'assets/art/roseBloom.jpg'
  },
  {
    title: 'Taj Mahal Reverie',
    description: 'Monumental silhouette with soft glow and historic presence.',
    image: 'assets/art/tajmahal.JPG'
  }
];

const artGridEl = document.getElementById('artGrid');

const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.setAttribute('aria-hidden', 'true');

const lightboxBackdrop = document.createElement('div');
lightboxBackdrop.className = 'lightbox-backdrop';
lightboxBackdrop.setAttribute('data-close', 'true');

const lightboxPanel = document.createElement('div');
lightboxPanel.className = 'lightbox-panel';
lightboxPanel.setAttribute('role', 'dialog');
lightboxPanel.setAttribute('aria-modal', 'true');
lightboxPanel.setAttribute('aria-label', 'Artwork preview');

const lightboxClose = document.createElement('button');
lightboxClose.className = 'lightbox-close';
lightboxClose.type = 'button';
lightboxClose.setAttribute('aria-label', 'Close');
lightboxClose.textContent = '×';

const lightboxImage = document.createElement('img');
lightboxImage.className = 'lightbox-image';
lightboxImage.alt = '';

const lightboxTitle = document.createElement('p');
lightboxTitle.className = 'lightbox-title';

lightboxPanel.appendChild(lightboxClose);
lightboxPanel.appendChild(lightboxImage);
lightboxPanel.appendChild(lightboxTitle);
lightbox.appendChild(lightboxBackdrop);
lightbox.appendChild(lightboxPanel);
document.body.appendChild(lightbox);

const openLightbox = (piece) => {
  lightboxImage.src = piece.image;
  lightboxImage.alt = piece.title;
  lightboxTitle.textContent = piece.title;
  lightbox.classList.add('is-open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.classList.add('no-scroll');
};

const closeLightbox = () => {
  lightbox.classList.remove('is-open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('no-scroll');
};

lightboxBackdrop.addEventListener('click', closeLightbox);
lightboxClose.addEventListener('click', closeLightbox);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && lightbox.classList.contains('is-open')) {
    closeLightbox();
  }
});

artPieces.forEach((piece) => {
  const card = document.createElement('article');
  card.className = 'art-card';
  card.tabIndex = 0;
  card.addEventListener('click', () => openLightbox(piece));
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openLightbox(piece);
    }
  });

  const img = document.createElement('img');
  img.src = piece.image;
  img.alt = piece.title;
  img.loading = 'lazy';
  img.addEventListener('error', () => img.remove());

  const caption = document.createElement('h4');
  caption.textContent = piece.title;

  card.appendChild(img);

  const body = document.createElement('div');
  body.className = 'art-body';

  const description = document.createElement('p');
  description.className = 'art-description';
  description.textContent = piece.description;

  body.appendChild(caption);
  body.appendChild(description);
  card.appendChild(body);
  artGridEl.appendChild(card);
});
