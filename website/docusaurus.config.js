const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const versions = require('./versions.json');
const VersionsArchived = require('./versionsArchived.json');
const allDocHomesPaths = [
  '/docs/next/',
  '/docs/',
  ...versions.slice(1).map((version) => `/docs/${version}/`),
];

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Sharp ETL!',
  tagline: 'Sharp ETL!',
  url: 'https://google.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/assets/images/favicon.ico',
  organizationName: 'tw',
  projectName: 'Sharp ETL!',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'cn'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
      },
      cn: {
        label: 'Chinese',
        direction: 'ltr',
      },
    },
  },
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'contribute',
        path: 'contribute',
        routeBasePath: 'contribute',
        sidebarPath: require.resolve('./sidebarsContribute.js'),
        showLastUpdateAuthor: false,
        showLastUpdateTime: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'releases',
        path: 'releases',
        routeBasePath: 'releases',
        sidebarPath: require.resolve('./sidebarsReleases.js'),
        showLastUpdateAuthor: false,
        showLastUpdateTime: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'learn',
        path: 'learn',
        routeBasePath: 'learn',
        showLastUpdateAuthor: false,
        showLastUpdateTime: false,
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        fromExtensions: ['html'],
        createRedirects: function (path) {
          // redirect to /docs from /docs/introduction,
          // as introduction has been made the home doc
          if (allDocHomesPaths.includes(path)) {
            return [`${path}/quick-start-guide`];
          }
        },
        redirects: [
          {
            from: ['/docs/contribute', '/docs/next/contribute'],
            to: '/contribute/get-involved',
          },
          {
            from: ['/docs/learn'],
            to: '/learn/faq',
          },
        ],
      },
    ],
  ],
  themeConfig: {
    navbar: {
      logo: {
        alt: 'Sharp ETL',
        src: 'assets/images/hudi.png',
      },
      items: [
        {
          label: 'Docs',
          to: 'docs/next/quick-start-guide',
        },
        {
          label: 'Learn',
          position: 'left',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Talks & Articles',
              to: 'talks-articles',
            },
            {
              label: 'FAQ',
              href: '/learn/faq',
            },
            {
              label: 'Technical Wiki',
              href: 'https://cwiki.apache.org/confluence/display/HUDI',
            }
          ],
        },
        {
          label: 'Contribute',
          position: 'left',
          items: [
            {
              label: 'Get Involved',
              to: '/contribute/get-involved',
            },
            {
              label: 'How to Contribute',
              to: '/contribute/how-to-contribute',
            },
            {
              label: 'Developer Setup',
              to: '/contribute/developer-setup',
            },
            {
              label: 'RFC Process',
              to: '/contribute/rfc-process',
            },
            {
              label: 'Report Security Issues',
              to: '/contribute/report-security-issues',
            },
            {
              label: 'Report Issues',
              href: 'https://github.com/SharpData/SharpETL/issues',
            }
          ],
        },
        {to: '/powered-by', label: "Who's Using", position: 'left'},
        {to: '/releases/download', label: 'Download', position: 'left'},
        // right
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
          dropdownItemsAfter: [
            ...Object.entries(VersionsArchived).map(
                ([versionName, versionUrl]) => ({
                  label: versionName,
                  href: versionUrl,
                }),
            )
          ],
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/SharpData/SharpETL',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        }
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'About',
          items: [
            {
              label: 'Releases',
              to: '/docs/next/quick-start-guide',
            },
            {
              label: 'Download',
              to: '/releases/download',
            },
            {
              label: 'Who\'s Using',
              to: 'powered-by',
            },
          ],
        },
        {
          title: 'Learn',
          items: [
            {
              label: 'Quick Start',
              to: 'docs/next/quick-start-guide',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Talks & Articles',
              to: 'talks-articles',
            },
            {
              label: 'FAQ',
              href: '/learn/faq',
            },
            {
              label: 'Technical Wiki',
              href: 'https://cwiki.apache.org/confluence/display/HUDI',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Get Involved',
              to: '/contribute/get-involved'
            },
            {
              label: 'Slack',
              href: 'https://join.slack.com/t/apache-hudi/shared_invite/enQtODYyNDAxNzc5MTg2LTE5OTBlYmVhYjM0N2ZhOTJjOWM4YzBmMWU2MjZjMGE4NDc5ZDFiOGQ2N2VkYTVkNzU3ZDQ4OTI1NmFmYWQ0NzE',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/SharpData/SharpETL',
            },
            {
              label: 'Mailing List',
              to: 'mailto:dev-subscribe@hudi.apache.org?Subject=SubscribeToHudi',
            },
          ],
        },
        {
          title: 'Apache',
          items: [
            {
              label: 'Events',
              to: 'https://www.apache.org/events/current-event',
            },
            {
              label: 'Thanks',
              to: 'https://www.apache.org/foundation/thanks.html',
            },
            {
              label: 'License',
              to: 'https://www.apache.org/licenses',
            },
            {
              label: 'Security',
              to: 'https://www.apache.org/security',
            },
            {
              label: 'Sponsorship',
              to: 'https://www.apache.org/foundation/sponsorship.html',
            },
            {
              label: 'Foundation',
              to: 'https://www.apache.org',
            },
          ],
        },
      ],
      logo: {
        alt: 'Sharp ETL™',
        src: '/assets/images/logo-big.png',
        href: 'https://hudi.apache.org/',
      },
      copyright: 'Copyright © 2021',
    },
    prism: {
      theme: darkCodeTheme,
      additionalLanguages: ['java', 'scala'],
      prismPath: require.resolve('./src/theme/prism-include-languages.js'),
    },
    announcementBar: {
      id: 'announcementBar-1', // Increment on change
      content:
          '⭐️ If you like Sharp ETL, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/SharpData/SharpETL">GitHub</a>! ⭐',
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/SharpData/SharpETL/edit/asf-site/website/docs/',
          includeCurrentVersion: true,
          versions: {
            current: {
              label: 'Current',
              path: 'next',
              banner: 'unreleased',
            }
          },
        },
        blog: {
          editUrl:
            'https://github.com/SharpData/SharpETL/edit/asf-site/website/blog/',
          blogTitle: 'Blog - Sharp ETL: User-Facing Analytics',
          blogSidebarCount: 10,
          blogSidebarTitle: 'Recent posts',
          /**
           * URL route for the blog section of your site.
           * *DO NOT* include a trailing slash.
           */
          routeBasePath: 'blog',
          include: ['*.md', '*.mdx'],
          postsPerPage: 10,
          /**
           * Theme components used by the blog pages.
           */
          blogListComponent: '@theme/BlogListPage',
          blogPostComponent: '@theme/BlogPostPage',
          blogTagsListComponent: '@theme/BlogTagsListPage',
          blogTagsPostsComponent: '@theme/BlogTagsPostsPage',
          feedOptions: {
            type: "all",
            title: 'Sharp ETL: User-Facing Analytics',
          },
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  scripts: [],
  stylesheets: [
    'https://fonts.googleapis.com/css?family=Comfortaa|Ubuntu|Roboto|Source+Code+Pro',
    'https://at-ui.github.io/feather-font/css/iconfont.css',
  ],
};
