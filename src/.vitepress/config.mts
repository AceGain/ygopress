// https://vitepress.dev/reference/site-config
export default {
    title: "YGO资料站",
    description: "A VitePress Site",
    lang: 'cn-ZH',
    // 忽略死链接
    ignoreDeadLinks: true,
    // 主题模式
    appearance: false,
    head: [
        ['link', {rel: 'icon', href: 'https://db.yugioh-card-cn.com/external/image/yugioh.ico'}]
    ],
    rewrites: {
        'view/(.*)': '(.*)'
    },
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: 'https://db.yugioh-card-cn.com/external/image/yugioh.ico',
        // logo: '../assets/svg/cards.svg',
        nav: [
            {text: '主页', link: '/'},
            {text: '指引', link: '/guide/'},
            {text: '规则', link: '/rule/'},
            {text: '系列', link: '/series/'},
            {text: '卡组', link: '/deck/'}
        ],

        sidebar: {
            '/guide/': [
                {
                    text: '指引',
                    items: [
                        {text: '决斗的基本概念', link: '/guide/'}
                    ]
                }
            ],
            'rule': [
                {
                    text: '新大师规则',
                    items: [
                        {
                            text: '规则变更',
                            items: [
                                {text: '规则变动', link: '/rule/新大师规则/规则变更/规则变动'},
                                {text: '特选规则', link: '/rule/新大师规则/规则变更/特选规则'}
                            ]
                        },
                        {
                            text: '规则内容',
                            items: [
                                {text: 'OCG的概要', link: '/rule/新大师规则/规则内容/OCG的概要'},
                                {text: '决斗进行的场所', link: '/rule/新大师规则/规则内容/决斗进行的场所'},
                                {text: '卡片', link: '/rule/新大师规则/规则内容/卡片'},
                                {text: '卡片的效果', link: '/rule/新大师规则/规则内容/卡片的效果'},
                                {text: '效果以外的文本', link: '/rule/新大师规则/规则内容/效果以外的文本'},
                                {text: '游戏的进行', link: '/rule/新大师规则/规则内容/游戏的进行'},
                                {text: '大会规则', link: '/rule/新大师规则/规则内容/大会规则'}
                            ]
                        }
                    ]
                }
            ],
            '/series/2301/': [
                {
                    text: '23年第01期',
                    items: [
                        {text: '黑魔导', link: '/series/2301/2301001'},
                        {text: '青眼', link: '/series/2301/2301002'},
                        {text: '真红眼', link: '/series/2301/2301003'},
                        {text: '神鹰', link: '/series/2301/2301004'},
                        {text: '水精鳞', link: '/series/2301/2301005'}
                    ]
                }
            ],
            '/series/2302/': [
                {
                    text: '23年第02期',
                    items: [
                        {text: '相剑', link: '/series/2302/2302001'},
                        {text: '天威', link: '/series/2302/2302002'},
                        {text: '龙星', link: '/series/2302/2302003'}
                    ]
                }
            ],
            '/deck/': [
                {
                    text: '卡组',
                    items: [
                        {text: '1696655598000', link: '/deck/1696655598000'},
                        {text: '1696716938000', link: '/deck/1696716938000'}
                    ]
                }
            ]
        },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ],

        outlineTitle: '--- 本页 ---',
        docFooter: {
            prev: '上一页',
            next: '下一页'
        }
    },
    vite: {}
}
