export interface ProfileLink {
  type: "email" | "link";
  label: string;
  href: string;
}

export interface ProfileItem {
  icon?: string;
  title: string;
  meta: string;
  body: string;
  collapsible?: boolean;
}

export interface ProfileSection {
  id: string;
  title: string;
  body?: string;
  collapsible?: boolean;
  items?: ProfileItem[];
}

export interface Profile {
  name: string;
  nickname: string;
  avatar: string;
  bio: string;
  links: ProfileLink[];
  sections: ProfileSection[];
}

export const profile: Profile = {
  name: "王昭栋",
  nickname: "wwwangzd",
  avatar: "/images/bio.jpg",
  bio: "AI 应用开发、AI Agent",
  links: [
    {
      type: "email",
      label: "wwwangzd@foxmail.com",
      href: "mailto:wwwangzd@foxmail.com",
    },
    { type: "link", label: "GitHub", href: "https://github.com/wwwangzd" },
    { type: "link", label: "Resume", href: "/files/resume.pdf" },
  ],
  sections: [
    {
      id: "begin",
      title: "开头介绍",
      collapsible: true,
      body: `搭建这个主页，除了更详细介绍下自己，另外是想记录和分享一下自己的看法和总结。

      想起 2021 年刚入学时还在抱着教材和论坛在摸索中慢慢搭建起自己的计算机基础和工程体系。

      2022 年末在人机交互课程上痛苦挣扎时，ChatGPT 问世了，通过对话交互向我们展示了“智能”和“潜力”。

      2023-2024 年其实经历了很多的发展，不仅是 LLM 本身，还有围绕 LLM 通过协议、编排和外挂去强化其能力，然而主流还是对话形式，我在下半年的实习中多半时间也还是在古法编程。

      2025 年又是一个关键的转折点，以 Coding Agent 为代表掀起了变革，开始以 Agent 去思考、组织和建设，我逐渐适应 Vibe Coding 模式，兴趣驱动去学习 LLM 技术发展和一写日常的工作流沉淀。

      2026 年至今看过来仍旧是围绕 Agent 的舞台，底层关注如何让 Agent 能力更强，上层也开始把 Agent 推向不同的任务和领域。

      不论大模型最终是否能够达到所谓 AGI，我目前都坚信它已经并且仍旧会带来变革，我也想从旁观者，到参与者，再到...
      `,
    },
    {
      id: "education",
      title: "教育背景",
      items: [
        {
          icon: "/images/nju.jpeg",
          title: "南京大学 软件工程 专业硕士",
          meta: "2025.09 - 至今",
          body: `研究生期间主要是跟随导师和实验室开展工程项目，包括智能面试、多源展示、模型迁移等。

          其余时间基于兴趣比较全面学习了深度学习基础，大模型基础以及 Agent 工程，并保持对大模型发展的关注以及工具的使用。
          `,
        },
        {
          icon: "/images/xmu.jpeg",
          title: "厦门大学 软件工程 本科",
          meta: "2021.09 - 2025.06",
          body: `本科期间主要是奠定了计算机基础和能力，学习掌握了基本编程语言、开发工具和技术栈，由于没有找到很感兴趣的研究方向因此并没有参与相关科研工作。

          专业成绩：前六学期综合学分绩点 3.92 / 4.00，绩点排名 4 / 145，综合成绩排名 2 / 145。

          荣誉情况：两年本科生国家奖学金，三年厦门大学优秀三好学生，厦门大学通报表扬，厦门大学优秀毕业生。

          科创竞赛：全国大学生数学建模国家级一等奖，中国大学生计算机设计大赛国家级三等奖，蓝桥杯 C/C++ A 组福建省一等奖，CSP 认证 400 分（累计排名 0.65%）等。
          `,
        },
      ],
    },
    {
      id: "work",
      title: "工作经历",
      items: [
        {
          title: "字节跳动 / Data-中国交易与广告-自助服务 / AI Agent 开发",
          meta: "2026.05 - 至今",
          body: `基于 Harness 架构，面向商业化 Agent 场景，提供一站式 Agent 托管平台和接入能力，提供 Agent 从创建到测试、发布、实验和评测全链路支持以及资产管理和接入能力：

          1. 负责平台稳定性建设，分 Agent 侧和平台侧的全闭环观测监控，提供可观测性接入与报警监控治理；

          2. 围绕需求澄清、设计、开发、测试和验收全链路，设计一套自动化 Skill 工作流和工作区规范，实现需求的自动实现验证，以及知识与资产沉淀。

          目前正在参与一项保密项目的研发工作...
          `,
        },
        {
          title: "字节跳动 / 抖音研发-隐私合规-数据安全 / 服务端开发",
          meta: "2024.09 - 2025.01",
          body: `建设维护 DPT（Douyin Privacy & Trust）平台，配合监管合规团队，实现抖音隐私合规风险的预防、发现和治理全链路解决方案：

          1. 响应监管合规团队，维护部门 DPT 平台现有服务，包括埋点数据上报、处理和展示；

          2. 负责 DPT-PIA（隐私风险评估）平台研发，实现对用户数据敏感行为风险的上报、评估和管理全流程；
          
          3. 技术栈包括 Go + Hertz + KiteX + MySQL + ElasticSearch。
          `,
        },
      ],
    },
    {
      id: "projects",
      title: "项目经历",
      items: [
        {
          title: "Qwen2.5-Coder 代码补全",
          meta: "2026.04 - 2026.05",
          body: `基于 Qwen2.5-Coder-1.5B 与华为昇腾环境（Ascend 910B3 + MindSpeed-LLM），面向 FIM 代码补全任务完成模型后训练实验，覆盖数据构造、SFT、DPO 和模型评测全链路：

          1. 搭建 pipeline 构建 Completion/FIM 数据集；

          2. 基于混合数据集开展全量 SFT 训练，针对过生成和重复续写问题设计 FIM-only + stop-token 微调；

          3. 尝试利用 AI 构造正负例数据开展 DPO 偏好对齐训练与验证。
          `,
        },
        {
          title: "电网模型国产化迁移",
          meta: "2025.11 - 2026.03",
          body: `基于华为昇腾平台（Ascend 310P3 + Ascend Driver + CANN）实现电网模型服务迁移验证与部署：

          1. 综合分析国产模型平台的软硬件栈与迁移适配能力；

          2. 基于华为昇腾环境完成对电网模型服务的迁移验证与部署工作，适配来自 PyTorch、Paddle、ONNX Runtime、Ollama 等不同框架和环境的服务；

          3. [基于迁移工作沉淀了一套 Skill 自动化流](https://github.com/wwwangzd/LLM-Tools/tree/main/model-move)，计划整理开发一个自动化迁移 Agent 助手。
          `,
        },
      ],
    },
    {
      id: "ai-share",
      title: "AI 工具",
      body: `记录我常用和自建的 AI 产品和工具：
      
      1. 通用 Agent：豆包、Workbuddy

      2. 编码 Agent：Codex、Trae

      3. [自用 AI 工具：整理了日常使用的 prompt、skill 和 tool 工具](https://github.com/wwwangzd/LLM-Tools)

      4. 需求开发测试自动化工作流和 wiki 知识库：待同步

      5. 一些看法：...
      `,
    },
    {
      id: "ai-free",
      title: "AI 分享",
      body: "记录分享我关于 AI 的学习总结和想法思考：",
      items: [
        {
          title: "AI 思考",
          body: `待完善...
          `,
        },
        {
          title: "AI 学习",
          body: `1. [深度学习](https://my.feishu.cn/docx/Mf8bdaSmeorOGsxtIbkc31MbnLd)

          2. [大模型学习](https://my.feishu.cn/docx/SlzgdGMvUo0a35x8Huac1gDvnod)
          `,
        },
        {
          title: "源码分析",
          body: `1. [Claude Code 源码分析](https://my.feishu.cn/docx/L4n8d1gxPo5eJNxBMEmci02wnDv)

          2. [Pi Agent 源码分析](https://my.feishu.cn/docx/HFqVdIRFVom8qFxBVDkcipTSn0d)

          3. Codex 源码分析
          `,
        },
      ],
    },
  ],
};
