// サイト基本情報
export const siteConfig = {
  name: "ことひらくAI",
  tagline: "「AI、うちでも使える？」に応えます",
  description:
    "香川県琴平町を拠点に、対面であなたの業務に合うAI活用を一緒に見つけます。AI導入相談・セミナー・訪問サポートで地域のDXを支援します。",
  representative: "秋吉一輝（あっきー）",
  location: "香川県仲多度郡琴平町",
  philosophy: "AIを売るのではなく、課題解決を売る",
  url: "https://kotohiraku-ai.com",
} as const;

// ナビゲーション
export const navigation = [
  { label: "ホーム", href: "/" },
  { label: "サービス", href: "/services" },
  { label: "無料AIセミナー", href: "/seminar" },
  { label: "プロフィール", href: "/profile" },
  { label: "お問い合わせ", href: "/contact" },
] as const;

// 実績ハイライト（トップページ用）
export const statsHighlights = [
  {
    number: "339",
    suffix: "名+",
    label: "AIセミナー累計参加者",
  },
  {
    number: "48",
    suffix: "回+",
    label: "AIセミナー累計開催",
  },
  {
    number: "4.55",
    suffix: "/ 5.0",
    label: "受講者満足度",
  },
] as const;

// サービスメニュー
export const services = [
  {
    id: "subscription",
    title: "AI導入サブスク",
    subtitle: "本命",
    target: "中規模以上の企業の方へ",
    painPoint: "「社内全体でAI活用を進めたい」",
    description:
      "Discord常時相談＋定期対面訪問で、AI活用を継続的にサポート。業務の棚卸しから日々の相談まで、伴走型で支援します。AIの最新トレンドや活用事例も随時お届けします。",
    icon: "💬",
    topPrice: "月額100,000円〜（おすすめ）",
    plans: [
      {
        name: "スタンダード",
        price: "¥70,000",
        period: "/月",
        features: [
          "Discord常時相談",
          "月2回対面サポート",
          "AI活用勉強会",
        ],
      },
      {
        name: "プレミアム",
        price: "¥100,000",
        period: "/月",
        features: [
          "Discord常時相談",
          "月2回対面サポート",
          "AI活用勉強会",
          "AI業務フロー設計",
        ],
        recommended: true,
      },
      {
        name: "カスタム",
        price: "¥150,000〜",
        period: "/月",
        features: ["個別要件に応じた支援"],
      },
      {
        name: "エンタープライズ",
        price: "¥300,000〜",
        period: "/月",
        features: [
          "週1回対面サポート",
          "全社AI化ロードマップ策定",
          "社内AI推進リーダー育成",
          "専用Discordチャンネル",
        ],
      },
    ],
    lightPlan: {
      name: "ライト",
      price: "¥50,000",
      period: "/月",
      features: ["Discord常時相談", "月1回対面サポート"],
      note: "導入後の保守・メンテナンス向けプラン",
    },
  },
  {
    id: "workshop",
    title: "実務プロンプト講座",
    subtitle: "中核",
    target: "小規模事業者の方へ",
    painPoint: "「一つの業務だけでも、まずAIで時短したい」",
    description:
      "最大3名の少人数制。自分の業務に使えるプロンプトを一緒に作って持ち帰れます。議事録作成、メール効率化など、すぐ使えるスキルを身につけます。",
    icon: "📝",
    topPrice: "20,000円/回",
    pricing: {
      price: "¥20,000",
      unit: "2時間/グループ（3名まで）",
    },
  },
  {
    id: "support",
    title: "パソコン・AIおたすけサポート",
    subtitle: "訪問型",
    target: "地域にお住まいの方へ",
    painPoint: "「パソコンやAIの設定を手伝ってほしい」",
    description:
      "琴平町内を自転車で駆けつけ、プリンター接続からAI設定まで対応。「ちょっと困った」をすぐ解決します。",
    icon: "🚲",
    topPrice: "5,000円/60分",
    pricing: {
      price: "¥5,000",
      unit: "60分",
      extension: "延長30分 ¥2,500",
      area: "琴平町内（自転車20分圏）",
    },
  },
] as const;

// メディア掲載（時系列・新しい順）
export const mediaAppearances = [
  {
    name: "日本経済新聞",
    title: "伝統のまち・琴平町でAI活用を促進　地域おこし協力隊の秋吉さん",
    type: "インタビュー",
    date: "2026年2月",
    url: "https://www.nikkei.com/article/DGXZQOCC29ALI0Z20C26A1000000/",
  },
  {
    name: "時事通信社",
    title: "【クローズアップ】行政でのAI活用「当たり前に」＝秋吉一輝・香川県琴平町地域おこし協力隊員",
    type: "政策ニュースレター",
    date: "2026年2月",
    url: "",
  },
  {
    name: "四国新聞",
    title: "琴平でまちづくりミーティング　地域おこし隊の課題討論　行政職員ら全国の70人",
    type: "新聞掲載",
    date: "2026年1月",
    url: "https://www.shikoku-np.co.jp/dg/article.aspx?id=K2026012900000001000",
  },
  {
    name: "自治かがわ Vol.127",
    title: "まちづくり最前線/琴平町「地域おこし協力隊DAO」による関係人口構築やイノベーション施策",
    type: "寄稿",
    date: "2025年10月",
    url: "https://chousonkai.or.jp/shinkou/2025/10/%e8%87%aa%e6%b2%bb%e3%81%8b%e3%81%8c%e3%82%8fvol-127/",
  },
  {
    name: "四国新聞",
    title: "まちづくり「ＤＡＯ」活用　県内、関係人口増で課題解決",
    type: "新聞掲載",
    date: "2025年9月",
    url: "https://www.shikoku-np.co.jp/dg/article.aspx?id=K2025092600000003400",
  },
  {
    name: "月刊ガバナンス 2025年9月号",
    title: "自治体政策最前線──地域おこし協力隊ＤＡＯ",
    type: "雑誌掲載",
    date: "2025年9月",
    url: "https://shop.gyosei.jp/products/detail/12482",
  },
  {
    name: "日本経済新聞",
    title: "琴平町、新組織「DAO」で地域振興　地域おこし協力隊と",
    type: "新聞掲載",
    date: "2024年12月",
    url: "https://www.nikkei.com/article/DGXZQOCC022EI0S4A201C2000000/",
  },
  {
    name: "NHK香川 NEWS WEB",
    title: "琴平町 ネット介して集まる地域おこし協力隊「ＤＡＯ」始まる",
    type: "テレビ・Web",
    date: "2024年12月",
    url: "",
  },
  {
    name: "KSB瀬戸内海放送",
    title: "四国初　デジタル技術を活用して課題解決「地域おこし協力隊DAO」",
    type: "テレビ",
    date: "2024年12月",
    url: "https://www.youtube.com/watch?v=xPYT6nKtG-E",
  },
  {
    name: "RSK山陽放送",
    title: "四国で初めて「地域おこし協力隊」とデジタルコミュニティ「DAO」とは？",
    type: "テレビ・Web",
    date: "2024年12月",
    url: "https://newsdig.tbs.co.jp/articles/rsk/1591240?display=1&mwplay=1",
  },
  {
    name: "YAHOO!ニュース",
    title: "四国初「地域おこし協力隊DAO」琴平町で開始",
    type: "Web",
    date: "2024年12月",
    url: "",
  },
  {
    name: "四国新聞",
    title: "あの人この人「デジタルで琴平活性化」",
    type: "新聞掲載",
    date: "2025年1月",
    url: "https://www.shikoku-np.co.jp/bl/digital_news/article.aspx?id=K2025010800000002100",
  },
] as const;

// 経歴タイムライン
export const timeline = [
  {
    period: "大分県出身",
    title: "生まれ育ち",
    description: "",
  },
  {
    period: "前職",
    title: "ファミリーレストラン勤務",
    description: "接客・サービス業の経験を積む",
  },
  {
    period: "前職",
    title: "富士ソフト（IT企業）",
    description: "IT業界での技術経験を蓄積",
  },
  {
    period: "独立",
    title: "NFT事業（日本NFT情報局）",
    description: "Web3・DAO領域で事業を展開",
  },
  {
    period: "2024年11月〜",
    title: "琴平町 地域おこし協力隊 DAOマネージャー",
    description:
      "行政DX × 地域コミュニティ × AI事業の三層構造で活動中",
  },
] as const;

// コミュニティ実績
export const communityStats = [
  { label: "琴平町DAO参加者", value: "200名超" },
  { label: "LINE友だち数", value: "2,258人" },
] as const;

// FAQ
export const faq = [
  {
    question: "AIの知識がなくても大丈夫ですか？",
    answer:
      "はい、まったく問題ありません。「AIって何？」というところから丁寧にサポートします。実際のセミナー参加者の多くがAI未経験の方です。",
  },
  {
    question: "オンラインではなく対面なのはなぜですか？",
    answer:
      "画面を一緒に見ながら「ここをこうする」とお伝えする方が、圧倒的に早く身につくからです。琴平町近隣のお客様には直接お伺いしています。遠方の方は個別にご相談ください。",
  },
  {
    question: "どのようなAIツールを使いますか？",
    answer:
      "ChatGPT、Claude、Geminiなど、お客様の業務に最適なツールを選定してご提案します。特定のツールに縛られず、課題解決に最も効果的な方法を一緒に考えます。",
  },
  {
    question: "まずは相談だけでも可能ですか？",
    answer:
      "もちろんです。お問い合わせフォームからお気軽にご連絡ください。初回のご相談は無料です。",
  },
] as const;

// SNSリンク
export const socialLinks = [
  {
    name: "X (Twitter)",
    url: "https://x.com/akkey_nftlife",
    icon: "x",
  },
  {
    name: "note",
    url: "https://note.com/akkey_nft",
    icon: "note",
  },
] as const;
