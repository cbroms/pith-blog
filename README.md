# Pith Blog

Code for the Pith blog, where updates about Pith are posted.

## Development

Built with Next JS and React. Builds as a static site to `/docs` where it's served by GitHub pages. Posts can be found in the `/posts` directory and are markdown files with some frontmatter. They're compiled and each put into the tempate in `/pages/posts/[id].js`.

Install the dependencies:
```shell
npm install
```

Test the site locally:

```shell
npm run dev
```

Build for deployment:

```shell
npm run build
```
