export const transformPost = (post) => ({
  id: post.id,
  date: post.date,
  autor: post._embedded?.author[0].name || '',
  avatar: post._embedded?.author[0].avatar_urls['48'] || '',
  copy: post.content.rendered,
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
});
