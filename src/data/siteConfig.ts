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
    number: "463",
    suffix: "名+",
    label: "AIセミナー累計参加者",
  },
  {
    number: "84",
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
    id: "consulting",
    title: "社長AIコンサル",
    subtitle: "本命",
    target: "会社の社長の方へ",
    painPoint: "「自分の仕事を、まずAIでラクにしたい」",
    description:
      "月1〜2回の対面と、チャットでの常時相談で、社長ご本人のAI活用に伴走します。議事録・返信文・資料づくりをAIに任せる環境を、社長のパソコンに一緒に作ります。見つかった業務課題は、必要に応じて動くツールにして納めます。",
    icon: "💬",
    topPrice: "月額200,000円（税込）",
    pricing: {
      price: "¥200,000",
      unit: "/月（税込）",
    },
    features: [
      "環境構築：Claude・ChatGPT・Geminiの設定と、社長専用の作業環境づくり",
      "専用プロンプト：議事録・返信文・分析のテンプレートを業務に合わせて作成",
      "業務効率化：音声議事録の自動化、メール対応のAI化、契約書チェック",
      "意思決定支援：数字と情報を整理し、判断材料を短時間で用意",
      "業務ツール開発：見つかった課題を動くツールにして納品（案件ごとにお見積り）",
    ],
    note: "対象は従業員5〜30名規模の会社の社長ご本人。契約は月単位、お支払いは請求書払い（銀行振込）です。",
  },
  {
    id: "hp",
    title: "HP制作",
    subtitle: "新規",
    target: "HPが必要な事業者の方へ",
    painPoint: "「まだHPがない」「古いまま止まっている」",
    description:
      "琴平の事業者の「あったらいいな」を、形にします。1ページのランディングページなら2〜3週間、会社サイトなら4〜5週間で公開までご一緒します。",
    icon: "🌐",
    topPrice: "LP 55,000円〜（税込）",
    pricing: [
      {
        name: "LP（1ページ）",
        price: "¥55,000（税込）",
        duration: "2〜3週間",
      },
      {
        name: "コーポレートサイト（5ページ前後）",
        price: "¥110,000（税込）",
        duration: "4〜5週間",
      },
    ],
    features: [
      "スマホ対応・お問い合わせ導線・地図など、必要なものを最初に一緒に決めます",
      "文章の下書きはAIで作り、事業者ご自身の言葉に直します",
      "公開後の更新のしかたもお伝えします",
    ],
    monitorNote:
      "モニター価格の条件：完成後に事業名・Before/After・URLを実績として公開させていただくこと、完了後に30分のインタビューにご協力いただくこと（先着3件）",
    optionNote: "オプション（写真撮影・ロゴ制作・ライティング代行・月額保守）はお見積りです。",
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
    topPrice: "20,000円/回（税込）",
    pricing: {
      price: "¥20,000",
      unit: "2時間/グループ（3名まで・税込）",
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
    topPrice: "5,000円/60分（税込）",
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

// 出張・依頼セミナー実績（依頼を受けて団体・企業向けに実施したもの）
// name: 主催・依頼元 / title: セミナー名 / type: 種別 / date: 実施年月 / participants: 参加者数 / url: 掲載記事など（無ければ空）
// 掲載は依頼元の許可を得たもののみ。新しいものを先頭に置く
export const guestSeminars = [
  {
    name: "丸亀商工会議所女性会",
    title: "AIセミナー",
    type: "出張セミナー",
    date: "2026年9月",
    participants: "17名",
    url: "",
  },
];

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
