// Stories (the newsletter write-ups) and their topics.
// SAMPLE COPY: every story below is placeholder text written to show the design.
// The editorial team replaces them from the admin once the backend exists.
// Shape the backend should serve: { slug, date, category, authorId, image, readMins,
//   featured, title:{hi,en}, excerpt:{hi,en}, quote:{hi,en}, body:{hi:[...], en:[...]} }

export const categories = [
  { id: "constitution", image: "/images/stock/parliament.jpg", position: "50% 50%", name: { hi: "संविधान और संसद", en: "Constitution & Parliament" }, blurb: { hi: "संस्थाएँ, अधिकार और जवाबदेही", en: "Institutions, rights and accountability" } },
  { id: "policy", image: "/images/stock/press.jpg", position: "50% 40%", name: { hi: "नीति और शासन", en: "Policy & Governance" }, blurb: { hi: "फ़ाइल से ज़मीन तक", en: "From the file to the field" } },
  { id: "panchayat", image: "/images/stock/gram-sabha.jpg", position: "50% 55%", name: { hi: "पंचायत राज", en: "Panchayat Raj" }, blurb: { hi: "स्वशासन की जड़ें", en: "The roots of self-rule" } },
  { id: "rural", image: "/images/stock/harvest.jpg", position: "50% 50%", name: { hi: "खेती और गाँव", en: "Farms & Villages" }, blurb: { hi: "आजीविका और आत्मनिर्भरता", en: "Livelihoods and self-reliance" } },
  { id: "society", image: "/images/stock/women-circle.jpg", position: "50% 40%", name: { hi: "समाज और शिक्षा", en: "People & Education" }, blurb: { hi: "महिलाएँ, बच्चे, समुदाय", en: "Women, children, community" } },
  { id: "environment", image: "/images/stock/paddy-sunset.jpg", position: "50% 55%", name: { hi: "पर्यावरण", en: "Environment" }, blurb: { hi: "हरियाली और ज़िम्मेदारी", en: "Greening, with accountability" } },
];

export const stories = [
  {
    slug: "when-parliament-goes-quiet",
    date: "2026-11-10",
    category: "constitution",
    authorId: "anil",
    image: "/images/stock/parliament.jpg",
    position: "50% 50%",
    readMins: 6,
    featured: true,
    title: { hi: "जब संसद ख़ामोश हो, तब जनता की बात कौन रखे?", en: "When Parliament goes quiet, who speaks for the people?" },
    excerpt: { hi: "सदन की कार्यवाही सिर्फ़ विधेयकों का हिसाब नहीं, जनता और सरकार के बीच का संवाद है।", en: "A House in session is more than a count of bills. It is the conversation between citizens and government." },
    quote: { hi: "संसद की बहस जनता के सवालों का आईना होनी चाहिए।", en: "A parliamentary debate should be a mirror of the public's questions." },
    body: {
      hi: [
        "लोकतंत्र में संसद वह जगह है जहाँ जनता के सवाल क़ानून की शक्ल लेते हैं। जब बहस की जगह शोर ले लेता है, तो सबसे पहले वही आवाज़ें खोती हैं जो पहले से कमज़ोर हैं।",
        "इसलिए ज़रूरी है कि हम सदन के कामकाज को सिर्फ़ समाचार की तरह नहीं, एक नागरिक-ज़िम्मेदारी की तरह पढ़ें: कौन-सा सवाल पूछा गया, किसका जवाब आया, और कौन-सा मुद्दा बिना चर्चा के रह गया।",
      ],
      en: [
        "In a democracy, Parliament is where the public's questions take the shape of law. When noise replaces debate, the first voices to be lost are the ones that were already faint.",
        "That is why we should read the House's work not only as news but as a civic duty: which question was asked, whose answer came, and which issue was left without a hearing.",
      ],
    },
  },
  {
    slug: "more-than-a-vote",
    date: "2026-11-06",
    category: "constitution",
    authorId: "satyendra",
    image: "/images/stock/voters.jpg",
    position: "50% 50%",
    readMins: 5,
    title: { hi: "सिर्फ़ मतदान नहीं: चुनावों के बीच लोकतंत्र हमसे क्या माँगता है", en: "More than a vote: what democracy asks of us between elections" },
    excerpt: { hi: "मतदान लोकतंत्र की शुरुआत है, उसकी पूरी कहानी नहीं।", en: "Voting is where democracy begins. It is not the whole story." },
    quote: { hi: "मतदान से आगे अभिमतदान, निर्वाचन से आगे निर्वहन।", en: "Beyond voting lies participation; beyond electing lies sustaining." },
    body: {
      hi: [
        "पाँच साल में एक दिन कतार में खड़े होना लोकतंत्र की ज़रूरी शर्त है, पर काफ़ी नहीं। असली लोकतंत्र तब बनता है जब नागरिक अपने प्रतिनिधि से सवाल पूछते हैं और जवाब माँगते हैं।",
        "इसका मतलब है पंचायत की बैठक में जाना, याचिकाएँ लिखना, और सदन में अपने प्रतिनिधि के काम पर नज़र रखना।",
      ],
      en: [
        "Standing in a queue one day in five years is a necessary condition of democracy, but not a sufficient one. Real democracy begins when citizens question their representatives and ask for answers.",
        "That means attending the panchayat meeting, writing petitions, and keeping watch on what your representative does in the House.",
      ],
    },
  },
  {
    slug: "gram-sabha-oldest-parliament",
    date: "2026-11-02",
    category: "panchayat",
    authorId: "dhananjay",
    image: "/images/stock/gram-sabha.jpg",
    position: "50% 55%",
    readMins: 7,
    title: { hi: "ग्राम सभा, हमारी सबसे पुरानी संसद", en: "The gram sabha is the oldest Parliament we have" },
    excerpt: { hi: "गाँव की खुली बैठक में ही लोकतंत्र सबसे सीधे रूप में दिखता है।", en: "In the open village meeting, democracy appears in its most direct form." },
    quote: { hi: "जहाँ गाँव खुद फ़ैसला करता है, वहीं स्वराज शुरू होता है।", en: "Where a village decides for itself, swaraj begins." },
    body: {
      hi: [
        "ग्राम सभा में हर वयस्क मतदाता की बराबर जगह है। यहाँ बजट, योजनाएँ और लाभार्थी तय होते हैं, और यहीं सबसे पहले जवाबदेही माँगी जा सकती है।",
        "पंचायत राज को मज़बूत करने का मतलब है ग्राम सभा को वह अधिकार और जानकारी देना, जिससे वह सचमुच निर्णय ले सके।",
      ],
      en: [
        "In the gram sabha, every adult voter has an equal place. Budgets, schemes and beneficiaries are decided here, and this is where accountability can first be asked for.",
        "Strengthening Panchayat Raj means giving the gram sabha the authority and the information it needs to truly decide.",
      ],
    },
  },
  {
    slug: "farming-that-pays",
    date: "2026-10-28",
    category: "rural",
    authorId: "aarti",
    image: "/images/stock/harvest.jpg",
    position: "50% 50%",
    readMins: 6,
    title: { hi: "फ़ायदे की खेती: आत्मनिर्भर गाँव की अर्थव्यवस्था को क्या चाहिए", en: "Farming that pays: what a viable village economy needs" },
    excerpt: { hi: "खेती तब टिकती है जब वह फ़ायदेमंद हो, और फ़ायदा तभी होता है जब किसान तक जानकारी और बाज़ार पहुँचे।", en: "Farming lasts when it pays, and it pays when information and markets reach the farmer." },
    quote: { hi: "गाँव में ही रोज़गार हो, तो पलायन अपने आप थमता है।", en: "When the village has work, migration slows on its own." },
    body: {
      hi: [
        "किसान के लिए सबसे बड़ी बाधा अक्सर पैसा नहीं, जानकारी होती है: कौन-सी योजना है, कहाँ आवेदन करना है, और कौन-सा तरीक़ा बेहतर पैदावार देगा।",
        "आत्मनिर्भर गाँव का रास्ता संस्थागत सहयोग, सही मार्गदर्शन और स्थानीय रोज़गार से होकर जाता है।",
      ],
      en: [
        "For a farmer, the biggest hurdle is often not money but information: which scheme exists, where to apply, and which method will yield better.",
        "The road to a self-reliant village runs through institutional support, the right guidance and local work.",
      ],
    },
  },
  {
    slug: "between-the-file-and-the-field",
    date: "2026-10-22",
    category: "policy",
    authorId: "anil",
    image: "/images/stock/press.jpg",
    position: "50% 35%",
    readMins: 8,
    title: { hi: "फ़ाइल और खेत के बीच: नीतियों को उनके नतीजों से पढ़ें", en: "Between the file and the field: reading policy by its outcomes" },
    excerpt: { hi: "किसी नीति की असली परीक्षा घोषणा में नहीं, उसके अमल में होती है।", en: "A policy is tested not at its announcement but in its implementation." },
    quote: { hi: "घोषणा नहीं, अमल से परखिए।", en: "Judge by delivery, not by declaration." },
    body: {
      hi: [
        "हर सुधार का एक उद्देश्य होता है और एक नतीजा। दोनों के बीच का फ़ासला ही वह जगह है जहाँ पत्रकारिता का काम शुरू होता है।",
        "हम ऐसी नीतियों को देखते हैं जो काग़ज़ पर अच्छी लगती हैं, और पूछते हैं कि गाँव, खेत और बाज़ार में उनका असर कैसा दिखता है।",
      ],
      en: [
        "Every reform has an aim and an outcome. The gap between the two is where journalism starts its work.",
        "We look at policies that read well on paper and ask what their effect looks like in the village, the field and the market.",
      ],
    },
  },
  {
    slug: "the-preamble-read-slowly",
    date: "2026-10-15",
    category: "constitution",
    authorId: "satyendra",
    image: "/images/stock/constitution.jpg",
    position: "50% 30%",
    readMins: 4,
    title: { hi: "प्रस्तावना को धीरे-धीरे पढ़ें", en: "The Preamble, read slowly" },
    excerpt: { hi: "हम भारत के लोग: संविधान की पहली पंक्ति में ही उसका पूरा दर्शन छिपा है।", en: "We, the people of India: the first line of the Constitution already holds its whole philosophy." },
    quote: { hi: "‘हम भारत के लोग’ केवल शब्द नहीं, एक ज़िम्मेदारी हैं।", en: "‘We, the people’ is not a phrase. It is a responsibility." },
    body: {
      hi: [
        "प्रस्तावना न्याय, स्वतंत्रता, समता और बंधुता का वादा करती है। इनमें से हर शब्द एक कसौटी है जिस पर सत्ता और समाज दोनों को परखा जा सकता है।",
        "इसे धीरे पढ़ने का मतलब है हर शब्द पर रुककर पूछना: आज के भारत में इसका क्या अर्थ है, और हम इसके कितने क़रीब हैं?",
      ],
      en: [
        "The Preamble promises justice, liberty, equality and fraternity. Each of these words is a measure against which both power and society can be judged.",
        "Reading it slowly means pausing on every word and asking: what does this mean in today's India, and how close are we to it?",
      ],
    },
  },
  {
    slug: "when-women-lead-the-circle",
    date: "2026-10-09",
    category: "society",
    authorId: "aarti",
    image: "/images/stock/women-circle.jpg",
    position: "50% 40%",
    readMins: 5,
    title: { hi: "जब महिलाएँ नेतृत्व करती हैं, गाँव बदलता है", en: "When women lead the circle, the village changes" },
    excerpt: { hi: "स्वयं-सहायता समूहों से लेकर पंचायत तक, महिलाओं की भागीदारी विकास की दिशा बदल रही है।", en: "From self-help groups to panchayats, women's participation is changing the direction of development." },
    quote: { hi: "जिस घेरे में महिलाएँ बैठती हैं, वहाँ फ़ैसले बेहतर होते हैं।", en: "Decisions get better in the circle where women sit." },
    body: {
      hi: [
        "जहाँ महिलाएँ बैठकों में सिर्फ़ मौजूद नहीं, निर्णायक होती हैं, वहाँ पानी, स्वास्थ्य और शिक्षा पर काम तेज़ी से होता है।",
        "ज़रूरत है कि प्रशिक्षण, वित्तीय साक्षरता और डिजिटल पहुँच उन तक पहुँचे, ताकि भागीदारी सिर्फ़ गिनती न रहे।",
      ],
      en: [
        "Where women are not just present in meetings but decisive in them, work on water, health and education moves faster.",
        "Training, financial literacy and digital access must reach them, so that participation is more than a headcount.",
      ],
    },
  },
  {
    slug: "a-village-school-morning",
    date: "2026-10-03",
    category: "society",
    authorId: "aarti",
    image: "/images/stock/school.jpg",
    position: "50% 50%",
    readMins: 4,
    title: { hi: "गाँव के स्कूल की एक सुबह: सीखने और गरिमा पर कुछ नोट्स", en: "A village school's morning: notes on learning and dignity" },
    excerpt: { hi: "एक कक्षा की ज़मीन पर बैठी क़तार में पूरे देश के भविष्य की झलक दिखती है।", en: "A row of children seated on a classroom floor holds a glimpse of the country's future." },
    quote: { hi: "हर बच्चे की पढ़ाई, उसकी गरिमा की पहली सीढ़ी है।", en: "Every child's schooling is the first step of their dignity." },
    body: {
      hi: [
        "डिजिटल शिक्षा और अच्छे शिक्षक वहाँ तक पहुँचें जहाँ आज भी बच्चे ज़मीन पर बैठकर पढ़ते हैं, यही असली समावेशी विकास है।",
        "सरकारी योजनाओं की सफलता इस पर निर्भर है कि उनका लाभ सबसे आख़िरी कक्षा तक पहुँचा या नहीं।",
      ],
      en: [
        "Digital learning and good teachers must reach classrooms where children still sit on the floor to study. That is real inclusive development.",
        "The success of public schemes depends on whether their benefit reached the last classroom.",
      ],
    },
  },
  {
    slug: "plant-one-keep-it-alive",
    date: "2026-09-27",
    category: "environment",
    authorId: "satyendra",
    image: "/images/stock/paddy-sunset.jpg",
    position: "50% 60%",
    readMins: 5,
    title: { hi: "एक पौधा लगाएँ, उसे जिलाएँ", en: "Plant one, keep it alive" },
    excerpt: { hi: "हरियाली अभियान तब सफल होते हैं जब पौधा लगाने के साथ उसकी देखभाल का हिसाब भी हो।", en: "Green drives succeed when planting comes with an account of who looks after the tree." },
    quote: { hi: "लगाना शुरुआत है, जिलाना ज़िम्मेदारी।", en: "Planting is the start; keeping alive is the duty." },
    body: {
      hi: [
        "पौधारोपण की तस्वीरें आसान हैं, पर पौधे के तीन साल तक बचे रहने का सबूत मुश्किल। भरोसा वहीं से बनता है जहाँ पारदर्शिता हो।",
        "स्थानीय निगरानी, जाँच और सार्वजनिक रिपोर्टिंग मिलकर हरियाली को आंदोलन बनाती है, आयोजन नहीं।",
      ],
      en: [
        "Pictures of planting are easy; proof that the sapling survived three years is hard. Trust is built where there is transparency.",
        "Local monitoring, verification and public reporting together make greening a movement, not an event.",
      ],
    },
  },
];

export function getStory(slug) {
  return stories.find((s) => s.slug === slug);
}
export function sortedStories() {
  return [...stories].sort((a, b) => (a.date < b.date ? 1 : -1));
}
export function getCategory(id) {
  return categories.find((c) => c.id === id);
}
export function formatDate(iso, lang) {
  return new Date(iso + "T00:00:00").toLocaleDateString(lang === "hi" ? "hi-IN" : "en-IN", { day: "numeric", month: "long", year: "numeric" });
}
