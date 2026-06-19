const contentMap = {
  sections: [
    {
      id: 'home',
      title: '首页',
      tags: ['乐鱼体育', '体育赛事', '比分直播'],
      keywords: ['乐鱼体育', '体育比分', '赛事预告'],
      url: 'https://main-web-leyu.com.cn'
    },
    {
      id: 'news',
      title: '新闻中心',
      tags: ['体育新闻', '乐鱼体育', '赛事报道'],
      keywords: ['体育资讯', '乐鱼体育新闻', '赛事动态'],
      url: 'https://main-web-leyu.com.cn/news'
    },
    {
      id: 'live',
      title: '直播',
      tags: ['直播', '乐鱼体育', '高清直播'],
      keywords: ['体育直播', '乐鱼直播', '高清体育'],
      url: 'https://main-web-leyu.com.cn/live'
    },
    {
      id: 'results',
      title: '赛果',
      tags: ['赛果', '乐鱼体育', '比赛结果'],
      keywords: ['体育赛果', '乐鱼赛果', '比分查询'],
      url: 'https://main-web-leyu.com.cn/results'
    },
    {
      id: 'ranking',
      title: '排行榜',
      tags: ['排名', '乐鱼体育', '积分榜'],
      keywords: ['体育排名', '乐鱼排名', '积分排行'],
      url: 'https://main-web-leyu.com.cn/ranking'
    }
  ],
  config: {
    siteName: '乐鱼体育',
    baseUrl: 'https://main-web-leyu.com.cn',
    defaultSection: 'home',
    searchPlaceholder: '搜索赛事、球队或关键词...'
  }
};

function searchContent(query) {
  if (!query || typeof query !== 'string') {
    return [];
  }
  const lowerQuery = query.toLowerCase().trim();
  const results = [];
  for (const section of contentMap.sections) {
    const searchPool = [
      section.title.toLowerCase(),
      ...section.tags.map(tag => tag.toLowerCase()),
      ...section.keywords.map(keyword => keyword.toLowerCase()),
      section.url.toLowerCase()
    ];
    let match = false;
    if (section.id === lowerQuery) {
      match = true;
    } else {
      for (const item of searchPool) {
        if (item.includes(lowerQuery)) {
          match = true;
          break;
        }
      }
    }
    if (match) {
      results.push(section);
    }
  }
  return results;
}

function getSectionById(id) {
  if (!id || typeof id !== 'string') {
    return null;
  }
  for (const section of contentMap.sections) {
    if (section.id === id) {
      return section;
    }
  }
  return null;
}

function getAllTags() {
  const tagsSet = new Set();
  for (const section of contentMap.sections) {
    for (const tag of section.tags) {
      tagsSet.add(tag);
    }
  }
  return Array.from(tagsSet).sort();
}

function getAllKeywords() {
  const keywordsSet = new Set();
  for (const section of contentMap.sections) {
    for (const keyword of section.keywords) {
      keywordsSet.add(keyword);
    }
  }
  return Array.from(keywordsSet).sort();
}

function generateSiteMap() {
  const map = {};
  for (const section of contentMap.sections) {
    map[section.id] = {
      title: section.title,
      url: section.url,
      tags: section.tags.slice(),
      keywords: section.keywords.slice()
    };
  }
  return map;
}

const defaultSearchResults = searchContent('乐鱼体育');
const homeSection = getSectionById('home');
const allTags = getAllTags();
const allKeywords = getAllKeywords();
const siteMap = generateSiteMap();