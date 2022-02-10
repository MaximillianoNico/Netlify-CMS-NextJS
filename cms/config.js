export default {
  cms_manual_init: true,
  backend: {
    name: 'github',
    repo: 'MaximillianoNico/Netlify-CMS-NextJS',
    branch: 'master',
  },
  media_folder: 'public/img',
  public_folder: 'img',
  collections: [
    {
      name: 'pages',
      label: 'Pages',
      files: [
        {
          label: 'Home',
          name: 'home',
          file: 'content/pages/home.json',
          fields: [
            {
              label: 'Hero Title',
              name: 'hero_title',
              widget: 'string',
            },
            {
              label: 'Hero Description',
              name: 'hero_description',
              widget: 'markdown',
            },
            {
              label: 'Hero Image',
              name: 'hero_image',
              widget: 'image',
            },
          ],
        },
      ],
    },
    {
      name: 'press-page',
      label: 'Press Page',
      files: [
        {
          label: 'Press',
          name: 'Press',
          file: 'content/press/press.json',
          fields: [
            {
              label: 'Press Title',
              name: 'press_title',
              widget: 'string',
            },
            {
              label: 'Press Description',
              name: 'press_description',
              widget: 'markdown',
            },
            {
              label: 'Press Image',
              name: 'press_image',
              widget: 'image',
            },
          ],
        },
      ],
    },
  ],
};
