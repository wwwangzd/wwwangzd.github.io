export const profile = {
  name: "王昭栋",
  title: "",
  avatar: "/images/profile-placeholder.svg",
  location: "城市，国家",
  email: "your.email@example.com",
  bio:
    "这里写一段简短的自我介绍：你关注什么、正在做什么、希望别人通过这个主页了解你什么。",
  links: [
    { label: "GitHub", href: "https://github.com/your-github-username" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "Blog", href: "https://your-github-username.github.io" },
  ],
  highlights: [
    "关注 AI、产品、工程和长期主义写作。",
    "喜欢把复杂问题整理成清晰、可复用的系统。",
    "欢迎通过邮件交流合作、项目和想法。",
  ],
  sections: [
    {
      id: "about",
      title: "关于我",
      body:
        "这里可以放更完整的个人介绍。比如你的教育背景、职业方向、研究兴趣、当前正在探索的问题，以及你希望主页访客获得的第一印象。",
      list: [
        "研究兴趣或专业方向可以写在这里。",
        "当前关注的问题、长期项目或开放合作方向也可以放在这里。",
      ],
    },
    {
      id: "experience",
      title: "经历",
      items: [
        {
          title: "当前角色或身份",
          meta: "2026 - 至今",
          body:
            "用一两句话描述你现在主要在做什么，以及这段经历最值得展示的成果。",
        },
        {
          title: "过往经历",
          meta: "2024 - 2026",
          body:
            "可以写教育、工作、研究、创业、开源或社群经历。后续只需要在这里继续追加条目。",
        },
      ],
    },
    {
      id: "thinking",
      title: "我正在思考",
      body:
        "这一块可以放你的长期问题清单、近期关注方向、读书笔记入口，或者写给访客的一段开放式说明。",
      list: [
        "问题一：这里写你长期关注的主题。",
        "问题二：这里写你最近正在阅读或探索的内容。",
      ],
    },
    {
      id: "projects",
      title: "项目",
      items: [
        {
          title: "个人主页",
          meta: "2026",
          body: "一个简洁的静态个人主页，用于展示个人信息、经历、项目和想法。",
        },
      ],
    },
    {
      id: "notes",
      title: "想法",
      list: [
        "这里可以放近期写作、阅读笔记、研究问题或公开分享链接。",
        "后续新增内容时，直接在这个列表里追加即可。",
      ],
    },
  ],
};
