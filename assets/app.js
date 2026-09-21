/* ============================================================
 * AI 工具导航站 - 交互逻辑（参考 ai-bot.cn 分区布局）
 * ------------------------------------------------------------
 * 【重要】如何填你的推广链接（赚佣金）：
 *   1. 打开 CakeGrowth 后台 -> 项目 -> 找到对应工具 -> 复制你的专属推广链接
 *   2. 在下方 tools 数组里，找到对应工具的 "aff" 字段，粘贴进去即可
 *   3. 例：{ ..., aff: "你的专属推广链接" }
 *   4. aff 留空（""）时，点卡片会跳转到 url（官网）
 *   5. 有 aff 的工具，点击走你的推广链接（不显示徽章，保持干净）
 *
 * 【图标说明】
 *   domain 字段 = 工具官网域名，用于自动加载官网 favicon 图标。
 *   domain 留空（""）时，显示首字母彩色块。
 * ============================================================ */

/* ---------- 工具数据（在这里增删改） ---------- */
const tools = [

  /* ================= 办公效率 ================= */
  {
    name: "Loomy",
    cat: "办公效率",
    desc: "科大讯飞桌面级 AI 助理，写文档、做PPT、整理文件、查资料全能干，越用越懂你。",
    url: "https://loomy.xunfei.cn/",
    aff: "https://loomy.cgref.cn/s/9we2yvgngo",
    domain: "loomy.xunfei.cn",
    hot: true,
    earn: true
  },
  {
    name: "AionClaw",
    cat: "办公效率",
    desc: "桌面级 AI 智能体，读写文件、运行脚本、操作浏览器，直接交付 Word、PPT、Excel 成品。",
    url: "https://www.aionclaw.com/",
    aff: "https://aionclaw.cgref.cn/s/jgem9v9nmy",
    domain: "aionclaw.com",
    hot: false,
    earn: true
  },
  {
    name: "办公小浣熊",
    cat: "办公效率",
    desc: "腾讯专业 AI 办公智能体，数据处理、文档协作样样行。",
    url: "https://www.xiaohuanxiong.com/",
    aff: "",
    domain: "xiaohuanxiong.com",
    hot: false,
    earn: false
  },
  {
    name: "AiPPT",
    cat: "办公效率",
    desc: "AI 快速生成高质量 PPT，输入主题一键出片，打工人福音。",
    url: "https://www.aippt.cn/",
    aff: "",
    domain: "aippt.cn",
    hot: false,
    earn: false
  },
  {
    name: "二狗PPT",
    cat: "办公效率",
    desc: "聚焦国央企、述职、竞聘、工作总结等正式汇报场景，模板专业、结构清晰、AI 味低。",
    url: "https://2dogppt.cgref.cn/s/zdkjj92k1r",
    aff: "https://2dogppt.cgref.cn/s/zdkjj92k1r",
    domain: "",
    hot: false,
    earn: true
  },
  {
    name: "Flowith",
    cat: "办公效率",
    desc: "无限画布 AI 效率工具，把复杂工作流可视化，一气呵成。",
    url: "https://www.baidu.com/s?wd=Flowith",
    aff: "",
    domain: "flowith.ai",
    hot: false,
    earn: true
  },
  {
    name: "Gamma",
    cat: "办公效率",
    desc: "AI 生成精美幻灯片与文档，输入主题快速出片，演示利器。",
    url: "https://gamma.app/",
    aff: "",
    domain: "gamma.app",
    hot: false,
    earn: false
  },
  {
    name: "文多多AiPPT",
    cat: "办公效率",
    desc: "AI 一键生成 PPT，支持 AI 配图和智能资料整合。",
    url: "https://docmee.cn/",
    aff: "",
    domain: "docmee.cn",
    hot: false,
    earn: false
  },
  {
    name: "Napkin",
    cat: "办公效率",
    desc: "把文字变成可视化图表，演示、文档里的信息图神器。",
    url: "https://www.napkin.ai/",
    aff: "",
    domain: "napkin.ai",
    hot: false,
    earn: false
  },

  /* ================= 对话助手 ================= */
  {
    name: "DeepSeek",
    cat: "对话助手",
    desc: "深度求索出品的免费 AI 助手，推理能力强，学生党最爱。",
    url: "https://chat.deepseek.com/",
    aff: "",
    domain: "deepseek.com",
    hot: true,
    earn: false
  },
  {
    name: "Kimi",
    cat: "对话助手",
    desc: "月之暗面出品，长文本处理超强，论文文献一把抓。",
    url: "https://kimi.moonshot.cn/",
    aff: "",
    domain: "kimi.moonshot.cn",
    hot: false,
    earn: false
  },
  {
    name: "豆包",
    cat: "对话助手",
    desc: "字节跳动全能 AI 助手，问答、写作、图片样样通。",
    url: "https://www.doubao.com/",
    aff: "",
    domain: "doubao.com",
    hot: false,
    earn: false
  },
  {
    name: "通义千问",
    cat: "对话助手",
    desc: "阿里云 AI 助手，办公学习好帮手。",
    url: "https://www.tongyi.com/",
    aff: "",
    domain: "tongyi.com",
    hot: false,
    earn: false
  },
  {
    name: "ChatGPT",
    cat: "对话助手",
    desc: "OpenAI 王牌 AI 助手，全球用户最多的对话模型。",
    url: "https://chatgpt.com/",
    aff: "",
    domain: "chatgpt.com",
    hot: false,
    earn: false
  },
  {
    name: "Claude",
    cat: "对话助手",
    desc: "Anthropic 出品的 AI 助手，长文写作与编程能力出色。",
    url: "https://claude.ai/",
    aff: "",
    domain: "claude.ai",
    hot: false,
    earn: false
  },
  {
    name: "Gemini",
    cat: "对话助手",
    desc: "谷歌多模态 AI 助手，能看图、看视频、读文件。",
    url: "https://gemini.google.com/",
    aff: "",
    domain: "gemini.google.com",
    hot: false,
    earn: false
  },
  {
    name: "Grok",
    cat: "对话助手",
    desc: "xAI 推出的 AI 助手，接入 X（推特）实时信息。",
    url: "https://grok.com/",
    aff: "",
    domain: "grok.com",
    hot: false,
    earn: false
  },
  {
    name: "腾讯元宝",
    cat: "对话助手",
    desc: "腾讯 AI 助手，接入微信生态，办公聊天都好用。",
    url: "https://yuanbao.tencent.com/",
    aff: "",
    domain: "yuanbao.tencent.com",
    hot: false,
    earn: false
  },
  {
    name: "文心一言",
    cat: "对话助手",
    desc: "百度 AI 大模型助手，知识问答与创作。",
    url: "https://yiyan.baidu.com/",
    aff: "",
    domain: "yiyan.baidu.com",
    hot: false,
    earn: false
  },
  {
    name: "智谱清言",
    cat: "对话助手",
    desc: "智谱 AI 的对话助手，GLM 模型能力全面。",
    url: "https://chatglm.cn/",
    aff: "",
    domain: "chatglm.cn",
    hot: false,
    earn: false
  },
  {
    name: "海螺AI",
    cat: "对话助手",
    desc: "MiniMax 推出的 AI 助手，能对话、能生成音视频。",
    url: "https://hailuoai.com/",
    aff: "",
    domain: "hailuoai.com",
    hot: false,
    earn: false
  },

  /* ================= 写作创作 ================= */
  {
    name: "讯飞绘文",
    cat: "写作创作",
    desc: "AI 生图 + 新媒体矩阵运营，一键绑定小红书、公众号、抖音等六大平台发布，支持批量图文复刻。",
    url: "https://turbodesk.cgref.cn/s/5ln1x75krw",
    aff: "https://turbodesk.cgref.cn/s/5ln1x75krw",
    domain: "",
    hot: false,
    earn: true
  },
  {
    name: "蛙蛙写作",
    cat: "写作创作",
    desc: "一站式 AI 创作平台，从小说、剧本到漫剧视频，打造专属创作工作流。",
    url: "https://www.wawawriter.com/",
    aff: "https://wawawriter.cgref.cn/s/rpe36l1e05",
    domain: "wawawriter.com",
    hot: false,
    earn: true
  },
  {
    name: "剧云",
    cat: "写作创作",
    desc: "免费专业中文剧本创作平台，AI 智能编剧、剧本医生、分镜大师，短剧创作一站搞定。",
    url: "https://www.jucloud.com/",
    aff: "https://jucloud.cgref.cn/s/2znrr3znr7",
    domain: "jucloud.com",
    hot: false,
    earn: true
  },
  {
    name: "Laper",
    cat: "写作创作",
    desc: "AI 原生剧本创作工具，从灵感、梗概到大纲、正文全流程辅助。",
    url: "https://laper.ai/",
    aff: "https://laper.cgref.cn/s/41evz30kv8",
    domain: "laper.ai",
    hot: false,
    earn: true
  },
  {
    name: "笔灵AI写作",
    cat: "写作创作",
    desc: "600+ 写作模板，AI 一键生成论文、小说，支持降重降 AI。",
    url: "https://ibiling.cn/",
    aff: "",
    domain: "ibiling.cn",
    hot: false,
    earn: false
  },
  {
    name: "ReadPo",
    cat: "写作创作",
    desc: "AI 读写助手，内容聚合阅读加快速总结，写作灵感不断。",
    url: "https://readpo.com/",
    aff: "",
    domain: "readpo.com",
    hot: false,
    earn: false
  },
  {
    name: "墨问",
    cat: "写作创作",
    desc: "专为创作者设计的 AI 笔记工具，记录即创作。",
    url: "https://www.baidu.com/s?wd=%E5%A2%A8%E9%97%AE+AI%E7%AC%94%E8%AE%B0",
    aff: "",
    domain: "",
    hot: false,
    earn: false
  },
  {
    name: "新华妙笔",
    cat: "写作创作",
    desc: "新华社推出的 AI 公文写作平台，体制内写作神器。",
    url: "https://www.baidu.com/s?wd=%E6%96%B0%E5%8D%8E%E5%A6%99%E7%AC%94",
    aff: "",
    domain: "",
    hot: false,
    earn: false
  },
  {
    name: "切问学术",
    cat: "写作创作",
    desc: "复旦 NLP 团队出品，语义搜索、一键综述、知识库 AI 问答、学术 Agent，读文献写论文全流程。",
    url: "https://qiewenpaper.cgref.cn/s/9we2y0mnqo",
    aff: "https://qiewenpaper.cgref.cn/s/9we2y0mnqo",
    domain: "",
    hot: false,
    earn: true
  },

  /* ================= 图像设计 ================= */
  {
    name: "即梦AI",
    cat: "图像设计",
    desc: "一站式 AI 视频、图片创作平台，灵感即梦即得。",
    url: "https://jimeng.jianying.com/",
    aff: "",
    domain: "jimeng.jianying.com",
    hot: false,
    earn: false
  },
  {
    name: "SkildArt",
    cat: "图像设计",
    desc: "AI 电商图与营销视频工具，9.9 元尝鲜会员，Image2 无限生成，电商图和营销视频一站搞定。",
    url: "https://skildart.cgref.cn/",
    aff: "https://skildart.cgref.cn/s/zdkjvyk1r",
    domain: "",
    hot: false,
    earn: true
  },
  {
    name: "Lovart",
    cat: "图像设计",
    desc: "全球首个 AI 设计智能体，批量生图、创作、像素级编辑。",
    url: "https://www.lovart.art/",
    aff: "https://lovart.cgref.cn/s/1le0p05koq",
    domain: "lovart.art",
    hot: false,
    earn: true
  },
  {
    name: "美图设计室",
    cat: "图像设计",
    desc: "AI 图像创作和设计平台，海报、配图一键生成。",
    url: "https://www.baidu.com/s?wd=%E7%BE%8E%E5%9B%BE%E8%AE%BE%E8%AE%A1%E5%AE%A4",
    aff: "",
    domain: "x-design.com",
    hot: false,
    earn: false
  },
  {
    name: "ArtarchStudio",
    cat: "图像设计",
    desc: "AI 内容创作画布，统一各大 AI 模型，高效低成本的创作工作台。",
    url: "https://www.baidu.com/s?wd=ArtarchStudio",
    aff: "",
    domain: "",
    hot: false,
    earn: true
  },
  {
    name: "Midjourney",
    cat: "图像设计",
    desc: "AI 图像生成天花板，艺术感与细节俱佳。",
    url: "https://www.midjourney.com/",
    aff: "",
    domain: "midjourney.com",
    hot: false,
    earn: false
  },
  {
    name: "Stable Diffusion",
    cat: "图像设计",
    desc: "Stability AI 的开源文生图模型，本地部署自由创作。",
    url: "https://stability.ai/",
    aff: "",
    domain: "stability.ai",
    hot: false,
    earn: false
  },
  {
    name: "Recraft AI",
    cat: "图像设计",
    desc: "AI 生成矢量图、插画、图标，设计工作流好帮手。",
    url: "https://www.recraft.ai/",
    aff: "",
    domain: "recraft.ai",
    hot: false,
    earn: false
  },
  {
    name: "LiblibAI",
    cat: "图像设计",
    desc: "国内领先的 AI 图像创作平台和模型分享社区。",
    url: "https://www.liblib.art/",
    aff: "",
    domain: "liblib.art",
    hot: false,
    earn: false
  },
  {
    name: "吐司AI",
    cat: "图像设计",
    desc: "AI 绘画模型社区和在线生图平台，模型丰富。",
    url: "https://tusiart.com/",
    aff: "",
    domain: "tusiart.com",
    hot: false,
    earn: false
  },
  {
    name: "通义万相",
    cat: "图像设计",
    desc: "阿里推出的 AI 创意内容生成平台，文生图、图生图。",
    url: "https://tongyi.aliyun.com/wanxiang",
    aff: "",
    domain: "tongyi.aliyun.com",
    hot: false,
    earn: false
  },
  {
    name: "稿定AI",
    cat: "图像设计",
    desc: "一站式 AI 设计工具集，AI 绘图、抠图、消除一键完成。",
    url: "https://www.gaoding.com/",
    aff: "",
    domain: "gaoding.com",
    hot: false,
    earn: false
  },

  /* ================= 视频创作 ================= */
  {
    name: "Seko",
    cat: "视频创作",
    desc: "创编一体的 AI 视频平台，30 秒单段直出，支持多模态参考。",
    url: "https://seko.sensetime.com/",
    aff: "https://seko.cgref.cn/s/dqndj8xn2z",
    domain: "seko.sensetime.com",
    hot: false,
    earn: true
  },
  {
    name: "updream",
    cat: "视频创作",
    desc: "专业级一站式 AI 视频创作平台，从创意到成片一气呵成。",
    url: "https://www.updream.cn/",
    aff: "https://updream.cgref.cn/s/omklj0wn4d",
    domain: "updream.cn",
    hot: false,
    earn: true
  },
  {
    name: "AniShort",
    cat: "视频创作",
    desc: "AI 短剧协同创作平台，重构短剧生产流程。",
    url: "https://www.anishort.cn/",
    aff: "https://anishort.cgref.cn/s/5ln1xomkrw",
    domain: "anishort.cn",
    hot: false,
    earn: true
  },
  {
    name: "JoyPix AI",
    cat: "视频创作",
    desc: "AI 视频创作平台，把创意变成动态画面。",
    url: "https://www.baidu.com/s?wd=JoyPix+AI",
    aff: "",
    domain: "",
    hot: false,
    earn: true
  },
  {
    name: "Vibeknow",
    cat: "视频创作",
    desc: "AI 让文档一键变短视频，医生科普、老师课件、HR 解读、律师普法都在用，复购率高。",
    url: "https://vibeknow.cgref.cn/s/1zn5w32nqm",
    aff: "https://vibeknow.cgref.cn/s/1zn5w32nqm",
    domain: "",
    hot: false,
    earn: true
  },
  {
    name: "可灵AI",
    cat: "视频创作",
    desc: "快手推出的 AI 视频生成工具，文生视频效果出色。",
    url: "https://klingai.com/",
    aff: "",
    domain: "klingai.com",
    hot: false,
    earn: false
  },
  {
    name: "LibTV",
    cat: "视频创作",
    desc: "专业 AI 视频创作平台，Seedance 2.5 高性价比直出。",
    url: "https://www.baidu.com/s?wd=LibTV+AI%E8%A7%86%E9%A2%91",
    aff: "",
    domain: "",
    hot: false,
    earn: false
  },
  {
    name: "小云雀",
    cat: "视频创作",
    desc: "Seedance 2.5 驱动的 AI 视频平台，30 秒单段直出。",
    url: "https://www.baidu.com/s?wd=%E5%B0%8F%E4%BA%91%E9%9B%80+AI%E8%A7%86%E9%A2%91",
    aff: "",
    domain: "",
    hot: false,
    earn: false
  },
  {
    name: "白日梦",
    cat: "视频创作",
    desc: "领先 AI 创作平台，可生成最长 50 分钟的视频。",
    url: "https://www.baidu.com/s?wd=%E7%99%BD%E6%97%A5%E6%A2%A6+AI%E8%A7%86%E9%A2%91",
    aff: "",
    domain: "",
    hot: false,
    earn: false
  },
  {
    name: "有言",
    cat: "视频创作",
    desc: "一站式 AI 视频创作和 3D 数字人生成平台。",
    url: "https://www.baidu.com/s?wd=%E6%9C%89%E8%A8%80+AI%E6%95%B0%E5%AD%97%E4%BA%BA",
    aff: "",
    domain: "",
    hot: false,
    earn: false
  },
  {
    name: "蛙蛙漫剧",
    cat: "视频创作",
    desc: "AI 小说-剧本-漫剧视频全链路生产，漫剧创作利器。",
    url: "https://www.baidu.com/s?wd=%E8%9B%99%E8%9B%99%E6%BC%AB%E5%89%A7",
    aff: "",
    domain: "",
    hot: false,
    earn: false
  },

  /* ================= 编程开发 ================= */
  {
    name: "TRAE",
    cat: "编程开发",
    desc: "字节旗下 AI 编程工具，写代码、改 Bug 效率起飞。",
    url: "https://www.trae.ai/",
    aff: "",
    domain: "trae.ai",
    hot: false,
    earn: false
  },
  {
    name: "AgentSpace",
    cat: "编程开发",
    desc: "云端 AI Agent 工作空间，Codex、Claude Code 等智能体一键运行，团队共享持续工作。",
    url: "https://agent.space/",
    aff: "https://agentspace.cgref.cn/s/1zn5wmynqm",
    domain: "agent.space",
    hot: false,
    earn: true
  },
  {
    name: "GitHub Copilot",
    cat: "编程开发",
    desc: "GitHub 官方 AI 编程助手，代码补全与问答。",
    url: "https://github.com/features/copilot",
    aff: "",
    domain: "github.com",
    hot: false,
    earn: false
  },
  {
    name: "Cursor",
    cat: "编程开发",
    desc: "AI 原生代码编辑器，边聊边写，效率拉满。",
    url: "https://cursor.com/",
    aff: "",
    domain: "cursor.com",
    hot: false,
    earn: false
  },
  {
    name: "Windsurf",
    cat: "编程开发",
    desc: "智能 AI 编程 IDE，Agent 式开发体验。",
    url: "https://windsurf.com/",
    aff: "",
    domain: "windsurf.com",
    hot: false,
    earn: false
  },
  {
    name: "Claude Code",
    cat: "编程开发",
    desc: "Anthropic 官方编程 Agent，终端里写代码改项目。",
    url: "https://claude.com/code",
    aff: "",
    domain: "claude.com",
    hot: false,
    earn: false
  },
  {
    name: "Bolt.new",
    cat: "编程开发",
    desc: "浏览器里直接用 AI 生成完整 Web 应用。",
    url: "https://bolt.new/",
    aff: "",
    domain: "bolt.new",
    hot: false,
    earn: false
  },
  {
    name: "Lovable",
    cat: "编程开发",
    desc: "用自然语言快速构建应用，AI 全栈开发神器。",
    url: "https://lovable.dev/",
    aff: "",
    domain: "lovable.dev",
    hot: false,
    earn: false
  },
  {
    name: "通义灵码",
    cat: "编程开发",
    desc: "阿里 AI 编程助手，代码生成、解释、调试。",
    url: "https://tongyi.aliyun.com/lingma",
    aff: "",
    domain: "tongyi.aliyun.com",
    hot: false,
    earn: false
  },

  /* ================= AI音频 ================= */
  {
    name: "Suno",
    cat: "AI音频",
    desc: "AI 音乐生成神器，输入歌词一键创作完整歌曲。",
    url: "https://suno.com/",
    aff: "",
    domain: "suno.com",
    hot: false,
    earn: false
  },
  {
    name: "ElevenLabs",
    cat: "AI音频",
    desc: "全球领先的 AI 语音合成，克隆声音、配音朗读。",
    url: "https://elevenlabs.io/",
    aff: "",
    domain: "elevenlabs.io",
    hot: false,
    earn: false
  },
  {
    name: "MiniMax Audio",
    cat: "AI音频",
    desc: "MiniMax 的 AI 音频模型，语音合成自然流畅。",
    url: "https://www.minimaxi.com/",
    aff: "",
    domain: "minimaxi.com",
    hot: false,
    earn: false
  },
  {
    name: "海绵音乐",
    cat: "AI音频",
    desc: "字节旗下 AI 音乐创作，一键生成完整歌曲。",
    url: "https://www.baidu.com/s?wd=%E6%B5%B7%E7%BB%B5%E9%9F%B3%E4%B9%90",
    aff: "",
    domain: "",
    hot: false,
    earn: false
  },
  {
    name: "Mureka",
    cat: "AI音频",
    desc: "昆仑万维 AI 音乐生成，支持歌词与风格定制。",
    url: "https://www.mureka.ai/",
    aff: "",
    domain: "mureka.ai",
    hot: false,
    earn: false
  },

  /* ================= AI搜索 ================= */
  {
    name: "秘塔AI搜索",
    cat: "AI搜索",
    desc: "无广告 AI 搜索引擎，答案直接、来源清晰。",
    url: "https://metaso.cn/",
    aff: "",
    domain: "metaso.cn",
    hot: false,
    earn: false
  },
  {
    name: "Perplexity",
    cat: "AI搜索",
    desc: "全球知名 AI 搜索引擎，引用来源、答案可靠。",
    url: "https://www.perplexity.ai/",
    aff: "",
    domain: "perplexity.ai",
    hot: false,
    earn: false
  },
  {
    name: "Devv",
    cat: "AI搜索",
    desc: "面向开发者的 AI 搜索引擎，代码问题精准直达。",
    url: "https://devv.ai/",
    aff: "",
    domain: "devv.ai",
    hot: false,
    earn: false
  },
  {
    name: "Felo",
    cat: "AI搜索",
    desc: "多语言 AI 搜索助手，信息整合能力强。",
    url: "https://felo.ai/",
    aff: "",
    domain: "felo.ai",
    hot: false,
    earn: false
  },
  {
    name: "纳米AI搜索",
    cat: "AI搜索",
    desc: "360 推出的 AI 搜索，多模型对比回答。",
    url: "https://www.n.cn/",
    aff: "",
    domain: "n.cn",
    hot: false,
    earn: false
  }
];

/* ---------- 图标配色（仅当图标加载失败时回退用） ---------- */
const iconColors = [
  "#6c5ce7", "#0984e3", "#00b894", "#e17055",
  "#fdcb6e", "#e84393", "#00cec9", "#636e72",
  "#d63031", "#6d214f", "#16a085", "#2c3e50"
];

/* ---------- 图标生成：优先加载官网 favicon，失败回退首字母 ---------- */
function iconHtml(t, color, icon) {
  if (!t.domain) {
    return `<div class="tool-icon" style="background:${color}">${icon}</div>`;
  }
  const cands = [
    `https://favicon.im/${t.domain}`,
    `https://www.google.com/s2/favicons?domain=${t.domain}&sz=64`,
    `https://icons.duckduckgo.com/ip3/${t.domain}.ico`
  ];
  const candsJson = JSON.stringify(cands).replace(/'/g, "&#39;");
  return `<div class="tool-icon tool-icon-img" style="background:${color}">
    <img src="${cands[0]}" alt="" data-cands='${candsJson}' data-fallback="0"
         data-color="${color}" data-icon="${icon}"
         onerror="iconFallback(this)">
  </div>`;
}

window.iconFallback = function (img) {
  if (!img.dataset.fallback) return;
  const cands = JSON.parse(img.dataset.cands);
  let idx = parseInt(img.dataset.fallback, 10);
  idx++;
  if (idx < cands.length) {
    img.dataset.fallback = idx;
    img.src = cands[idx];
  } else {
    img.dataset.fallback = "";
    const parent = img.parentElement;
    parent.classList.remove("tool-icon-img");
    parent.innerHTML = img.dataset.icon;
    parent.style.background = img.dataset.color;
  }
};

/* ---------- 渲染 ---------- */
const toolArea = document.getElementById("toolArea");
const catNav = document.getElementById("catNav");
const searchInput = document.getElementById("searchInput");

let keyword = "";
let activeCat = ""; // 当前高亮的分类

// 分类列表（去重，保持出现顺序）
const cats = ["全部", ...new Set(tools.map(t => t.cat))];

// 渲染分类按钮
function renderCatNav() {
  catNav.innerHTML = cats.map(c => {
    const id = c === "全部" ? "top" : "sec-" + c;
    return `<button class="cat-btn" data-target="${id}" data-cat="${c}">${c}</button>`;
  }).join("");
}

// 分类按钮：点击滚动到对应分区
catNav.addEventListener("click", e => {
  const btn = e.target.closest(".cat-btn");
  if (!btn) return;
  const target = document.getElementById(btn.dataset.target);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  setActiveCat(btn.dataset.cat);
});

// 高亮当前分类按钮
function setActiveCat(cat) {
  activeCat = cat;
  document.querySelectorAll(".cat-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.cat === cat);
  });
}

// 搜索
searchInput.addEventListener("input", () => {
  keyword = searchInput.value.trim().toLowerCase();
  if (keyword) setActiveCat(""); // 搜索时取消分类高亮
  render();
});

// 单张卡片 HTML（不显示推广徽章，保持干净）
function cardHtml(t, i) {
  const color = iconColors[i % iconColors.length];
  const icon = t.name.trim().charAt(0).toUpperCase();
  const href = t.aff || t.url;
  const badge = t.hot ? `<span class="badge-hot">热门</span>` : "";
  return `
    <a class="tool-card" href="${href}" target="_blank" rel="noopener">
      <div class="tool-top">
        ${iconHtml(t, color, icon)}
        <div class="tool-name-row">
          <span class="tool-name">${t.name}</span>
          ${badge}
        </div>
      </div>
      <span class="tool-cat">${t.cat}</span>
      <p class="tool-desc">${t.desc}</p>
      <span class="tool-go">${t.aff ? "立即使用" : "访问官网"} <span class="arrow">→</span></span>
    </a>
  `;
}

// 分区：标题 + 网格
function sectionHtml(title, list, id) {
  return `
    <section class="cat-section" id="${id}">
      <div class="sec-head">
        <h2 class="sec-title">${title}</h2>
      </div>
      <div class="grid">
        ${list.map((t, i) => cardHtml(t, i)).join("")}
      </div>
    </section>
  `;
}

// 关键词匹配
function matchKw(t) {
  return !keyword ||
    t.name.toLowerCase().includes(keyword) ||
    t.desc.toLowerCase().includes(keyword) ||
    t.cat.toLowerCase().includes(keyword);
}

// 主渲染
function render() {
  // 搜索模式：扁平网格
  if (keyword) {
    const list = tools.filter(matchKw);
    toolArea.innerHTML = list.length
      ? `<div class="grid" style="padding-top:24px">${list.map((t, i) => cardHtml(t, i)).join("")}</div>`
      : `<div class="empty">没有找到相关工具，换个关键词试试～</div>`;
    return;
  }

  // 默认模式：热门推荐 + 各分类分区
  let html = "";
  const hotList = tools.filter(t => t.hot);
  if (hotList.length) {
    html += sectionHtml("🔥 热门推荐", hotList, "sec-hot");
  }
  cats.slice(1).forEach(cat => {
    const list = tools.filter(t => t.cat === cat);
    if (list.length) {
      html += sectionHtml(cat, list, "sec-" + cat);
    }
  });
  toolArea.innerHTML = html;
}

renderCatNav();
render();
