export default {
    title: 'BoidVerse',
    description: 'Metaverse that makes a difference',
    head: [
    //     ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/assets/favicons/apple-touch-icon.png"}],
    //     ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/favicons/favicon-32x32.png"}],
    //     ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/favicons/favicon-16x16.png"}],
    //     ['link', { rel: "manifest", href: "/assets/favicons/site.webmanifest"}],
    //     ['link', { rel: "mask-icon", href: "/assets/favicons/safari-pinned-tab.svg", color: "#3a0839"}],
    //     ['link', { rel: "shortcut icon", href: "/assets/favicons/favicon.ico"}],
    //     ['meta', { name: "msapplication-TileColor", content: "#3a0839"}],
    //     ['meta', { name: "msapplication-config", content: "/assets/favicons/browserconfig.xml"}],
    //     ['meta', { name: "theme-color", content: "#ffffff"}],
        ['link', { rel: "stylesheet", href: "./theme/fonts/NordiquePro-Regular.ttf"}],
        ['link', { rel: "stylesheet", href: "./theme/fonts/NordiquePro-Semibold.ttf"}],
        ['link', { rel: "stylesheet", href: "./theme/fonts/Questrial-Regular.ttf"}]
      ],
    themeConfig: {
        logo: { dark: "./public/img/boidverse_dark.png", light: "./public/img/boidverse_light.png" },
        siteTitle: false,
        nav: [
            { text: 'Home', link: '/' },
            {
              text: 'Boid Links',
              items: [
                { text: 'boid.com', link: 'https://boid.com' },
                { text: 'Boid App', link: 'https://app.boid.com' },
                { text: 'PowerPools', link: 'https://powerpools.io' },
                { text: 'Boid Avatars', link: 'https://avatar.boid.com' }      
            ]}],
        socialLinks: [
                { icon: {svg: '<svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><g transform="matrix(1.8086 0 0 1.8086 499.9991 499.9991)" id="196715"><g transform="matrix(1 0 0 1 -0.925 -159.775)" id="Capa_1"><circle style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; is-custom-font: none; font-file-url: none; fill: rgb(118,117,111); fill-rule: nonzero; opacity: 1;" cx="0" cy="0" r="58.694"/></g><g transform="matrix(1 0 0 1 0.0534 69.404)" id="Capa_1"><path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; is-custom-font: none; font-file-url: none; fill: rgb(118,117,111); fill-rule: nonzero; opacity: 1;" transform=" translate(-251.3773, -320.728)" d="M 455.861 253.028 l -54.703 -11.411 c -18.637 -3.904 -37.037 4.638 -46.765 19.824 c -9.448 -4.853 -19.608 -9.038 -30.415 -12.511 v -32.529 c 0.022 -24.612 -20.126 -44.738 -44.651 -44.738 h -55.933 c -24.655 0 -44.716 20.126 -44.716 44.738 v 32.701 c -10.699 3.408 -20.751 7.593 -30.264 12.468 c -9.728 -15.251 -28.15 -23.857 -46.809 -19.953 l -54.747 11.411 c -24.03 5.026 -39.626 28.862 -34.6 52.978 l 13.741 65.64 c 4.983 24.051 28.84 39.647 52.892 34.621 l 17.321 -3.624 c 8.671 12.813 20.665 24.569 36.023 34.621 c 31.989 20.967 74.247 32.529 119.092 32.529 c 68.617 0 127.721 -27.589 154.943 -67.215 l 17.602 3.689 c 24.03 5.004 47.887 -10.57 52.87 -34.621 l 13.762 -65.64 C 495.508 281.89 479.912 258.054 455.861 253.028 z M 251.305 447.381 c -40.51 0 -78.475 -10.203 -106.797 -28.862 c -9.707 -6.342 -17.753 -13.395 -24.202 -20.945 l 13.266 -2.783 c 24.073 -5.004 39.669 -28.84 34.643 -52.913 l -12.317 -59.018 c 7.183 -3.861 14.733 -7.248 22.757 -10.138 v 10.764 c 0 24.569 20.104 44.695 44.716 44.695 h 55.933 c 24.548 0 44.652 -20.147 44.652 -44.695 v -11.325 c 8.175 2.912 15.854 6.256 22.973 10.052 L 334.439 341.9 c -4.983 24.073 10.591 47.909 34.664 52.913 l 13.395 2.804 C 357.52 427.191 308.101 447.381 251.305 447.381 z" stroke-linecap="round"/></g><g transform="matrix(1 0 0 1 192.63 -82.616)" id="Capa_1"><circle style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; is-custom-font: none; font-file-url: none; fill: rgb(118,117,111); fill-rule: nonzero; opacity: 1;" cx="0" cy="0" r="58.694"/></g><g transform="matrix(1 0 0 1 -192.6051 -82.6196)" id="Capa_1"><path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; is-custom-font: none; font-file-url: none; fill: rgb(118,117,111); fill-rule: nonzero; opacity: 1;" transform=" translate(-58.719, -168.7044)" d="M 70.736 226.172 c 31.752 -6.644 52.029 -37.77 45.471 -69.501 c -6.687 -31.709 -37.749 -52.072 -69.523 -45.428 c -31.709 6.622 -52.072 37.727 -45.428 69.458 C 7.879 212.453 38.984 232.795 70.736 226.172 z" stroke-linecap="round"/></g></g></g></svg>'}, link: 'https://community.boid.com' },
                { icon: 'facebook', link: 'https://www.facebook.com/boidcom' },
                { icon: 'discord', link: 'https://discord.gg/92UZ4s6Y48' },
                { icon: 'twitter', link: 'https://twitter.com/boidcom' },
                { icon: 'github', link: 'https://github.com/boid-com' },

            ],
            sidebar: [
                {
                  text: 'Universe so far...',
                  items: [
                    { text: 'Introduction', link: '/introduction/' }
                    // { text: 'Item B', link: '/introduction/one' }
                    
                  ]
                },
                {
                  text: 'Timeline',
                  collapsible: true,
                  items: [
                    { text: 'How it all started', link: '/timeline/' },
                    { text: 'Early period', link: '/timeline/' }
                    
                  ]
                },
                {
                  text: 'Characters',
                  collapsible: true,
                  items: [
                    { text: 'Hybra', link: '/characters/Hybra' },
                    { text: 'Cador', link: '/characters/Cador' }
                    
                  ]
                },
                {
                  text: 'Elements',
                  collapsible: true,
                  items: [
                    { text: 'Forest', link: '/elements/forest' }
                    // { text: 'Cador', link: '/characters/Cador' }
                    
                  ]
                },
                {
                  text: 'Stories',
                  collapsible: true,
                  items: [
                    { text: 'The Bold Discovery', link: '/stories/the-bold-discovery' }
                    // { text: 'Story2', link: '/stories/' }
                    
                  ]
                }
              ],
          footer: {
            message: 'Boid.com',
            copyright: 'Copyright © 2022'
          }
      }    
  }
  