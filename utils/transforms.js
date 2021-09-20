export const transformPost = (post) => ({
  id: post.id,
  date: post.date,
  creator: post._embedded?.author[0]
    ? transformCreator(post._embedded.author[0])
    : null,
  author: post._embedded?.author[0].name || '',
  avatar: post._embedded?.author[0].avatar_urls['48'] || '',
  copy: post.excerpt.rendered,
  hashtags: ['CSS', 'HTML'],
  title: post.title.rendered,
  comments: [],
  likes: 2,
});

export const transformHashtag = (hashtag) => ({
  id: hashtag.id,
  text: hashtag.name,
  slug: hashtag.slug,
  colorBG: hashtag.description,
});

export const transformCreator = (creator) => ({
  id: creator.id,
  route: creator.slug,
  name: creator.name,
  avatar: creator.avatar_urls['48'],
  description: creator.description,
  location: 'Perú',
  job: 'Estudiante',
  contact: [
    {
      name: 'Linkedin',
      logo: '/src/assets/icons/linkedin.svg',
      url: 'https://www.linkedin.com/in/gsvidal/',
    },
    {
      name: 'Portfolio',
      logo: '/src/assets/icons/portfolio.svg',
      url: 'https://gsvidal.github.io/',
    },
    {
      name: 'Git Hub',
      logo: '/src/assets/icons/github.svg',
      url: 'https://github.com/gsvidal/',
    },
  ],
});
