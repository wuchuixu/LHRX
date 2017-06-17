
const Home = resolve => require(['../views/home.vue'], resolve)
const Index = resolve => require(['../views/home/index.vue'], resolve)

const About = resolve => require(['../views/about/about.vue'], resolve)
const CompanyIntro = resolve => require(['../views/about/company-intro-detail.vue'], resolve)
const aboutDetail = resolve => require(['../views/about/company-intro-detail.vue'], resolve)
const Manageteam = resolve => require(['../views/about/m-team.vue'], resolve)
const Companycultrue = resolve => require(['../views/about/c-cultrue.vue'], resolve)
const TeamDetail = resolve => require(['../views/about/team-detail.vue'], resolve)

const Note = resolve => require(['../views/note/note.vue'], resolve)
const Industry = resolve => require(['../views/note/industry.vue'], resolve)
const Finance = resolve => require(['../views/note/finance.vue'], resolve)
const Firm = resolve => require(['../views/note/firm.vue'], resolve)
const NoteDetail = resolve => require(['../views/note/note-detail.vue'], resolve)

const Business = resolve => require(['../views/business/business.vue'], resolve)
const Stock = resolve => require(['../views/business/stock.vue'], resolve)
const Case = resolve => require(['../views/business/case.vue'], resolve)

const Recruit = resolve => require(['../views/recruit/recruit.vue'], resolve)

const Contact = resolve => require(['../views/contact/contact.vue'], resolve)

let routes = [
    {
        path: '/',
        component: Home,
        name: '',
        leaf: true,
        children: [{
            path: '/index',
            component: Index,
            name: '首页'
        }]
    },
    {
        path: '/',
        component: Home,
        name: '关于我们',
        iconCls: 'iconfont',
        leaf: false,
        children: [
            {
                path: '/pages/about',
                component: About,
                name: '',
                isHidden:true
            },
            {
                path: '/pages/intro-detail',
                component: CompanyIntro,
                name: '公司简介'
            },
            {
                path: '/pages/manageteam',
                component: Manageteam,
                name: '管理团队'
            },
            {
                path: '/pages/companycultrue',
                component: Companycultrue,
                name: '公司文化'
            },
            {
                path: '/pages/intro-detail',
                component: aboutDetail,
                name: '公司文化',
                isHidden:true
            },
            {
                path: '/pages/team-detail',
                component: TeamDetail,
                name: '管理团队详情页',
                isHidden:true
            }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '公告动态',
        iconCls: 'iconfont',
        leaf: false,
        children: [
            {
                path: '/pages/note',
                component: Note,
                name: '',
                isHidden:true
            },
            {
                path: '/pages/industry',
                component: Industry,
                name: '行业动态'
            },
            {
                path: '/pages/finance',
                component: Finance,
                name: '财经动态'
            },
            {
                path: '/pages/firm',
                component: Firm,
                name: '公司动态'
            },
            {
                path: '/pages/note-detail',
                component: NoteDetail,
                name: '动态详情页',
                isHidden:true
            }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '业务介绍',
        iconCls: 'iconfont',
        leaf: false,
        children: [
            {
                path: '/pages/business',
                component: Business,
                name: '',
                isHidden:true
            },
            {
                path: '/pages/stock',
                component: Stock,
                name: '股权投资'
            },
            {
                path: '/pages/case',
                component: Case,
                name: '案例展示'
            }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        // iconCls: 'iconfont',
        leaf: true,
        children: [{
            path: '/recruit',
            component: Recruit,
            name: '人才招聘'
        }]
    },
    {
        path: '/',
        component: Home,
        name: '',
        // iconCls: 'iconfont',
        leaf: true,
        children: [{
            path: '/contact',
            component: Contact,
            name: '联系我们'
        }]
    }
];

export default routes;
