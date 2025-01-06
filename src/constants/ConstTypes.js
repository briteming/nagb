import GithubOutlined from '@ant-design/icons/GithubOutlined'
import WeiboOutlined from '@ant-design/icons/WeiboOutlined'
import MailFilled from '@ant-design/icons/MailFilled'
import CalendarFilled from '@ant-design/icons/CalendarFilled'
import EditFilled from '@ant-design/icons/EditFilled'
import QuestionCircleFilled from '@ant-design/icons/QuestionCircleFilled'

const cacheProxy = 'https://cache.hexh.xyz/proxy/'

// 博客名称
export const blogName = "brite's blog"

// 默认图片
export const indexPic =
  cacheProxy + 'https://raw.githubusercontent.com/hexh250786313/blog/master/static/header/index.png'

// 关于页面图片
export const aboutPic =
  cacheProxy + 'https://raw.githubusercontent.com/hexh250786313/blog/master/static/header/about.png'

// 默认图片
export const defaultPic =
  cacheProxy + 'https://raw.githubusercontent.com/hexh250786313/blog/master/static/header/default.png'

// 默认主页 title
export const indexTitle =
  "I'm looking for something fun. Are you going with me?"

// 联系方式
export const contactTypes = [
  {
    text: 'GitHub',
    link: 'https://github.com/briteming',
    Icon: GithubOutlined,
  },
  {
    text: 'Weibo',
    link: 'https://weibo.com/HanaSoup',
    Icon: WeiboOutlined,
  },
  {
    text: 'Mail',
    link: 'mailto:briteming@gmail.com',
    Icon: MailFilled,
  },
]

// 页面索引
export const pagesIndex = [
  {
    key: '/',
    value: 'Timeline',
    Icon: CalendarFilled,
  },
  {
    key: '/post/list',
    value: 'Post',
    Icon: EditFilled,
  },
  {
    key: '/about',
    value: 'About',
    Icon: QuestionCircleFilled,
  },
]

// 首页时间轴查询条件
export const timelineQuery = {
  labels: undefined,
  page: 1,
  per_page: 10,
  noCache: true, // 这个不是接口的参数，用于 redux 判断是否需要储存查询参数，例如首页的时间轴就不需要储存参数
}

// 列表查询条件
export const listQuery = {
  labels: 'post',
  page: 1,
  per_page: 10,
  creator: 'hexh250786313',
  sort: 'created',
  direction: 'desc',
  state: 'open',
}

// 搜索请求的参数
export const searchQuery = (mode = '') => {
  const queryParams = {
    page: 1,
    per_page: 10,
    q: 'state:open+repo:hexh250786313/Blog+author:hexh250786313',
    sort: 'created',
    order: 'desc',
    keyword: '',
  }

  switch (mode) {
    case 'allPost':
      ;(queryParams.per_page = 1),
        (queryParams.page = 100),
        (queryParams.q =
          'label:post+state:open+repo:hexh250786313/Blog+author:hexh250786313')
      break
    default:
      break
  }

  return queryParams
}

// about 查询条件
export const aboutQuery = {
  labels: 'about',
  page: 1,
  per_page: 10,
  creator: 'hexh250786313',
  sort: 'created',
  direction: 'desc',
  state: 'open',
  noCache: false, // 这个不是接口的参数，用于 redux 判断是否需要储存查询参数，例如首页的时间轴就不需要储存参数
}

// 查询标识
export const queryLabel = 'qZy6GBWGe'

export const queryParams =
  '+state:open+repo:hexh250786313/Blog+author:hexh250786313'

// 不需要默认图的页面
export const pageWithoutDefaultHeader = ['search', 'post', 'about']

// 博文仓库地址
export const archiveUrl = 'https://github.com/hexh250786313/Blog/issues'
