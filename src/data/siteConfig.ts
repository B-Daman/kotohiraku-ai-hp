// サイト基本情報
export const siteConfig = {
  name: "ことひらくAI",
  tagline: '琴平を"少人数でも回る町"へ',
  description:
    "香川県琴平町を拠点に、対面×短距離で「すぐ効くAI」を届ける。AI導入相談・セミナー・訪問サポートで地域のDXを支援します。",
  representative: "秋吉一輝（あっきー）",
  location: "香川県仲多度郡琴平町",
  philosophy: "AIを売るのではなく、課題解決を売る",
  url: "https://b-daman.github.io/kotohiraku-ai-hp",
} as const;

// ナビゲーション
export const navigation = [
  { label: "ホーム", href: "/" },
  { label: "サービス", href: "/services" },
  { label: "実績", href: "/achievements" },
  { label: "プロフィール", href: "/profile" },
  { label: "お問い合わせ", href: "/contact" },
] as const;

// 実績ハイライト（トップページ用）
export const statsHighlights = [
  {
    number: "270",
    suffix: "名以上",
    label: "AIセミナー累計参加者",
  },
  {
    number: "90",
    suffix: "%削減",
    label: "議会答弁作成時間",
  },
  {
    number: "40",
    suffix: "回以上",
    label: "AIセミナー累計開催",
  },
] as const;

// サービスメニュー
export const services = [
  {
    id: "subscription",
    title: "AI導入相談サブスク",
    subtitle: "メイン事業",
    description:
      "Discord常時相談＋定期対面訪問で、AI活用を継続的にサポート。業務フロー設計から日々の相談まで、伴走型で支援します。",
    icon: "💬",
    plans: [
      {
        name: "ライト",
        price: "¥50,000",
        period: "/月",
        features: ["Discord常時相談", "月1回対面サポート"],
      },
      {
        name: "スタンダード",
        price: "¥70,000",
        period: "/月",
        features: [
          "Discord常時相談",
          "月2回対面サポート",
          "AI活用勉強会",
        ],
        recommended: true,
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
      },
      {
        name: "カスタム",
        price: "¥150,000〜",
        period: "/月",
        features: ["個別要件に応じた支援"],
      },
    ],
  },
  {
    id: "workshop",
    title: "有料プロンプト講座",
    subtitle: "グループ学習",
    description:
      "業務に特化したプロンプトを一緒に設計する実践型の講座。議事録作成、メール効率化など、すぐ使えるスキルを身につけます。",
    icon: "📝",
    pricing: {
      price: "¥20,000",
      unit: "2時間/グループ（3名まで）",
    },
  },
  {
    id: "support",
    title: "パソコン・AIおたすけサポート",
    subtitle: "訪問型",
    description:
      "琴平町内を自転車で駆けつけ、プリンター接続からAI設定まで対応。「ちょっと困った」をすぐ解決します。",
    icon: "🚲",
    pricing: {
      price: "¥5,000",
      unit: "60分",
      extension: "延長30分 ¥2,500",
      area: "琴平町内（自転車20分圏）",
    },
  },
] as const;

// セミナー実績
export const seminarStats = [
  { label: "累計開催回数", value: "40回以上" },
  { label: "累計参加者数", value: "270名以上" },
  { label: "満足度", value: "4.55 / 5.0" },
  { label: "開催頻度", value: "毎週2回（火曜・木曜）" },
  { label: "開始時期", value: "2025年5月" },
] as const;

// 役場AI導入成果
export const govResults = [
  {
    label: "議会答弁作成時間",
    before: "3時間",
    after: "30分",
    reduction: "90%削減",
  },
  {
    label: "議事録外注費",
    result: "年間約70万円削減",
  },
  {
    label: "AI利用規約",
    result: "策定完了",
  },
] as const;

// メディア掲載
export const mediaAppearances = [
  {
    name: "NHK高松放送局",
    type: "テレビ取材",
    date: "2026年2月",
  },
  {
    name: "RSK山陽放送「VOICE de GO!」",
    type: "テレビ出演",
    date: "2026年2月",
  },
  {
    name: "時事通信社",
    type: "政策ニュースレター",
    date: "2026年1月",
  },
  {
    name: "日本経済新聞",
    type: "インタビュー",
    date: "2025年12月",
  },
  {
    name: "月刊ガバナンス",
    type: "雑誌掲載",
    date: "2025年9月号",
  },
  {
    name: "自治かがわ",
    type: "寄稿",
    date: "2025年10月",
  },
  {
    name: "読売新聞",
    type: "新聞掲載",
    date: "",
  },
  {
    name: "四国新聞",
    type: "新聞掲載（複数回）",
    date: "",
  },
  {
    name: "PR TIMES",
    type: "プレスリリース（複数回）",
    date: "",
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
    question: "琴平町以外からでも依頼できますか？",
    answer:
      "AI導入相談サブスクはDiscordでの常時相談が含まれるため、全国どこからでもご利用いただけます。訪問サポートは琴平町内に限定しています。",
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
    url: "https://x.com/and_and_and777",
    icon: "x",
  },
  {
    name: "note",
    url: "https://note.com/and_and_and777",
    icon: "note",
  },
] as const;