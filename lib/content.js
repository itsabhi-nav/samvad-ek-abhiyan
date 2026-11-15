// All site copy lives here, in Hindi (hi) and English (en).
// Later the backend/admin replaces these objects; components only read from here.
// Anything marked TODO is waiting on a decision from the client.

export const LANGS = ["hi", "en"];
export const DEFAULT_LANG = "en";

// TODO(client): confirm final email, phone numbers and registration numbers.
export const site = {
  url: "https://www.samvad.codewizard.online",
  email: "info@samvadabhiyaan.com",
  phone: "+91 91096 81769",
  phoneRaw: "919109681769",
  contactPerson: { hi: "श्री सतेंद्र सिंह", en: "Mr. Satendra Singh" },
  address: {
    hi: ["देव भवन, राजीव विहार", "लोयला स्कूल रोड, लिंगियाडीह", "बिलासपुर, छत्तीसगढ़ – 495006"],
    en: ["Dev Bhawan, Rajiv Vihar", "Loyola School Road, Lingiyadih", "Bilaspur, Chhattisgarh – 495006"],
  },
  rni: "CHHBIL/2014/60298",
};

export const content = {
  hi: {
    meta: {
      title: "संवाद – एक अभियान",
      description:
        "संविधान, सार्वजनिक नीति और ग्रामीण भारत पर एक स्वतंत्र त्रैमासिक पत्रिका और मंच।",
    },
    brand: { name: "संवाद", tag: "एक अभियान" },
    nav: [
      { href: "", label: "मुख्य पृष्ठ" },
      { href: "/about", label: "हमारे बारे में" },
      { href: "/newsletter", label: "पत्रिका" },
      { href: "/updates", label: "अपडेट" },
      { href: "/contact", label: "संपर्क" },
    ],
    ui: {
      subscribe: "सदस्यता लें",
      readLatest: "नवीनतम अंक पढ़ें",
      read: "पढ़ें",
      download: "डाउनलोड",
      viewAll: "सभी अंक देखें",
      menu: "मेनू",
      close: "बंद करें",
      language: "English",
      langShort: "EN",
      email: "ईमेल पता",
      emailPlaceholder: "आपका ईमेल",
      issue: "अंक",
      volume: "वर्ष",
      pages: "पृष्ठ",
      price: "मूल्य",
      hindiTag: "हिंदी",
      learnMore: "और जानें",
      skip: "मुख्य सामग्री पर जाएँ",
    },
    hero: {
      before: "जनता बोले, सत्ता ",
      verb: "सुने",
      after: "।",
      sub: "संविधान, नीति और ग्रामीण भारत पर एक स्वतंत्र त्रैमासिक पत्रिका।",
      cta: "नवीनतम अंक पढ़ें",
      note: "हर तिमाही नया अंक सीधे आपके पास।",
    },
    focus: {
      title: "हम किन मुद्दों पर काम करते हैं",
      items: [
        {
          title: "जनता और नीति-निर्माताओं के बीच सेतु",
          text: "आम नागरिकों की चिंताओं को नीति बनाने वालों तक पहुँचाना, और निर्णय लेने वालों को ज़मीनी हक़ीक़त से जोड़े रखना।",
        },
        {
          title: "नीतिगत जवाबदेही",
          text: "नीतियों और सुधारों को परखना कि कागज़ पर किए गए वादे और लोगों की असली ज़रूरतें कहाँ अलग होती हैं।",
        },
        {
          title: "आत्मनिर्भर गाँव",
          text: "स्थानीय रोज़गार, लाभकारी खेती और योजनाओं तक पहुँच, ताकि गाँव से पलायन नहीं, गाँव में ही समृद्धि हो।",
        },
      ],
    },
    peopleHome: {
      title: "संवाद के पीछे के लोग",
      sub: "संपादक, लेखक और अभियान-कर्मी जो संवाद को दिशा देते हैं।",
      cta: "पूरी टीम देखें",
    },
    workHome: {
      title: "पत्रिका से आगे के अभियान",
      sub: "संसदीय साक्षरता, पंचायत राज और पर्यावरण पर चल रहे प्रयास।",
      cta: "सभी अभियान",
    },
    archive: {
      title: "पत्रिका के अंक",
      sub: "प्रकाशित सभी अंक एक जगह। ऑनलाइन पढ़ें या PDF डाउनलोड करें।",
      more: "पुराने और नए अंक यहाँ जुड़ते जाएँगे।",
    },
    subscribeBand: {
      title: "अगला अंक सीधे आप तक",
      sub: "ईमेल या डाक से हर नया अंक पाने के लिए पंजीकरण करें।",
    },
    form: {
      name: "पूरा नाम",
      email: "ईमेल",
      phone: "मोबाइल नंबर",
      address: "डाक का पता",
      addressHint: "छपे हुए अंक डाक से भेजने के लिए",
      message: "आपका संदेश",
      consent:
        "मैं सहमत हूँ कि संवाद मुझे पत्रिका और अपडेट से जुड़ी सूचनाएँ भेज सकता है।",
      submit: "सदस्यता लें",
      send: "संदेश भेजें",
      sending: "भेजा जा रहा है…",
      okTitle: "धन्यवाद",
      okSubscribe: "आपका पंजीकरण दर्ज हो गया है। अगला अंक आप तक पहुँचेगा।",
      okContact: "आपका संदेश मिल गया है। हम जल्द उत्तर देंगे।",
      errRequired: "यह जानकारी ज़रूरी है",
      errEmail: "सही ईमेल लिखें",
      errPhone: "सही मोबाइल नंबर लिखें",
      errConsent: "आगे बढ़ने के लिए सहमति दें",
      subscribeTitle: "संवाद की सदस्यता",
      subscribeSub: "अपना विवरण दें, और हर नया अंक आप तक पहुँचे।",
    },
    about: {
      title: "लोकतंत्र के लिए एक अभियान",
      sub: "आम लोगों की आवाज़ को संविधान की कसौटी पर रखने वाला स्वतंत्र मंच।",
      tabs: [
        { id: "story", label: "शुरुआत" },
        { id: "focus", label: "फ़ोकस" },
        { id: "team", label: "टीम" },
        { id: "journey", label: "सफ़र" },
        { id: "work", label: "अभियान" },
      ],
      story: {
        title: "शुरुआत और दृष्टि",
        p1: "संवाद – एक अभियान की सोच इस अनुभव से उपजी कि आम लोगों के मुद्दे और आकांक्षाएँ मुख्यधारा के मीडिया में अक्सर पर्याप्त जगह नहीं पातीं। हमने इसे लोकतंत्र के चौथे स्तंभ की ज़िम्मेदारी निभाने वाले स्वतंत्र मंच के रूप में गढ़ा, जहाँ ज़मीनी सच बिना पक्षपात के सामने आए।",
        p2: "हमारी दृष्टि है कि देश की संवैधानिक संस्थाओं के बारे में जागरूकता बढ़े, और सत्ता में बैठे लोग, चाहे सरकार में हों या विपक्ष में, संविधान के दायरे में रहकर अपनी जवाबदेही निभाएँ।",
        quote: "संवाद, जागरूकता और स्वतंत्र निगरानी से संवैधानिक जवाबदेही को मज़बूत करना।",
      },
      editorial: {
        title: "हमारी संपादकीय दृष्टि",
        items: [
          "स्वतंत्र, तथ्य-आधारित और संतुलित",
          "आम नागरिक की आकांक्षाओं का प्रतिनिधित्व",
          "शासन और संस्थागत जवाबदेही की पड़ताल",
          "नीति और ज़मीनी हक़ीक़त के बीच का फ़ासला",
        ],
      },
      focusTitle: "तीन फ़ोकस क्षेत्र",
      teamTitle: "टीम",
      teamSub: "संवाद की दिशा तय करने वाले लोग।",
      journeyTitle: "अब तक का सफ़र",
      workTitle: "अभियान और प्रकाशन",
      workSub: "पत्रिका के साथ चलने वाली पहलें।",
    },
    founder: {
      role: "संस्थापक और प्रकाशक",
      name: "डॉ. आरती सिंह",
      bio: "आरती सिंह ने इलाहाबाद विश्वविद्यालय से स्नातक, परास्नातक और डी.फिल की उपाधि प्राप्त की है और 1999 में यूजीसी-नेट उत्तीर्ण किया। 2000–01 में इसरो के भारतीय सुदूर संवेदन संस्थान से रिमोट सेंसिंग और जीआईएस में प्रशिक्षण लिया।",
      bio2: "बीस वर्षों से अधिक समय से वे विश्वविद्यालयों और राज्य शासन के साथ ग्रामीण विकास, महिला सशक्तीकरण, बच्चों की डिजिटल शिक्षा और वित्तीय साक्षरता पर काम करती रही हैं। वर्तमान में वे बिलासपुर की बाल कल्याण समिति की सदस्य हैं।",
      points: [
        "डी.फिल, इलाहाबाद विश्वविद्यालय",
        "सुदूर संवेदन प्रशिक्षण, आईआईआरएस (इसरो)",
        "छत्तीसगढ़ पंचायत राज विभाग के युवा-महिला सशक्तीकरण अभियान की राज्य समन्वयक",
        "सदस्य, बाल कल्याण समिति, बिलासपुर",
      ],
    },
    people: [
      {
        id: "satyendra",
        photo: "/images/satyendra-singh.jpg",
        name: "सतेंद्र सिंह",
        role: "संपादक",
        text: "संसदीय लोकतंत्र सुदृढ़ीकरण अभियान के प्रवर्तक, 1997 से सक्रिय। राष्ट्रीय महासचिव, अखिल भारतीय पंचायत परिषद। पंचायत राज, किसान और पर्यावरण अभियानों में दो दशकों से अधिक का अनुभव।",
      },
      {
        id: "anil",
        photo: "/images/anil-atri.jpg",
        name: "अनिल अत्रि",
        role: "मुख्य संपादक",
        text: "पूर्व प्रधानमंत्री चंद्रशेखर की साप्ताहिक पत्रिका ‘यंग इंडियन’ के प्रभारी संपादक रहे। तीन दशक की पत्रकारिता, डॉक्यूमेंट्री और लेखन। चंद्रशेखर पर केंद्रित पुस्तकों का संपादन।",
      },
      {
        id: "dhananjay",
        photo: "/images/dhananjay-singh.jpg",
        name: "धनंजय सिंह",
        role: "लेखक",
        text: "उत्तर प्रदेश विधानसभा (2002–09) और 15वीं लोकसभा (2009–14) के पूर्व सदस्य। ‘पंचायत राज 2.0’ के सह-लेखक।",
      },
    ],
    journey: [
      { year: "1997", text: "संसदीय लोकतंत्र सुदृढ़ीकरण अभियान की शुरुआत। चंद्रशेखर के साथ विश्वविद्यालयों में युवा संसद के आयोजन।" },
      { year: "2000", text: "अन्नदाता सशक्तीकरण अभियान।" },
      { year: "2005", text: "पंचायत राज और ग्राम स्वराज अभियान।" },
      { year: "2007", text: "पर्यावरण के लिए ई-हरियाली अभियान।" },
      { year: "2012", text: "जेएनयू में ‘हमारा सदन हमारा मुद्दा’ का मंचन।" },
      { year: "2014", text: "‘संवाद – एक अभियान’ पंजीकृत। पहला अंक अक्टूबर–दिसंबर 2014 में।" },
      { year: "2015", text: "‘संसद में संग्राम?’, संसद के कामकाज पर केंद्रित अंक।" },
    ],
    work: [
      {
        id: "hsm",
        image: "/images/campaign-hsm.jpg",
        title: "हमारा सदन हमारा मुद्दा",
        tag: "अभियान",
        text: "संसदीय साक्षरता का अभियान। नाटक ‘लोकतंत्र’, कार्यशालाओं और जनप्रतिनिधियों से संवाद के ज़रिए जनता और सदन को एक-दूसरे के प्रति जवाबदेह बनाने की कोशिश।",
      },
      {
        id: "pr2",
        image: "/images/book-panchayat-raj.jpg",
        title: "पंचायत राज 2.0: रोडमैप और ब्लूप्रिंट",
        tag: "पुस्तक",
        text: "धनंजय सिंह और सतेंद्र सिंह की पुस्तक, जो पंचायत राज संस्थाओं को सशक्त करने का खाका रखती है।",
      },
      {
        id: "eh",
        image: "/images/campaign-hariyali.jpg",
        title: "ई-हरियाली",
        tag: "पहल",
        text: "ऑनलाइन और ऑफलाइन वृक्षारोपण की पहल, जो ग्रामीण आजीविका और पर्यावरण को साथ जोड़ती है। सोसाइटी फॉर एप्लिकेशन रिसर्च एंड कंसल्टेंसी (SARC) की पहल।",
      },
    ],
    newsletter: {
      title: "पत्रिका",
      sub: "संवाद – एक अभियान, लोकतंत्र की संसदीय प्रणाली को समर्पित त्रैमासिक।",
      latest: "नवीनतम अंक",
      archive: "सभी अंक",
      subscribeTitle: "हर अंक आप तक",
      subscribeSub: "नाम, ईमेल, मोबाइल और डाक का पता दें। नया अंक आने पर ईमेल, और ज़रूरत हो तो डाक से प्रति।",
    },
    issues: [
      {
        id: "2015-q3",
        cover: "/images/issue-2015-q3.jpg",
        pdf: "/issues/samvad-2015-jul-sep.pdf",
        title: "संसद में संग्राम?",
        period: "जुलाई–सितंबर 2015",
        year: 2015,
        volume: 2,
        number: 4,
        pages: 64,
        price: "₹50",
        text: "संसद में लंबित विधेयकों, जीएसटी, व्हिसल ब्लोअर और भूमि अधिग्रहण पर केंद्रित अंक। साथ में पूर्व राष्ट्रपति डॉ. कलाम को श्रद्धांजलि।",
      },
      {
        id: "2014-q4",
        cover: "/images/issue-2014-q4.jpg",
        pdf: "/issues/samvad-2014-oct-dec.pdf",
        title: "लोकतंत्र के सुदृढ़ीकरण का हमारा अभियान",
        period: "अक्टूबर–दिसंबर 2014",
        year: 2014,
        volume: 1,
        number: 1,
        pages: 52,
        price: "₹50",
        text: "प्रवेशांक। संसदीय लोकतंत्र को मज़बूत करने के अभियान के तहत लेख और विचार।",
      },
    ],
    updates: {
      title: "अपडेट",
      sub: "लेख, घोषणाएँ और संवाद की यात्रा की झलकियाँ।",
      tabs: { blog: "लेख और घोषणाएँ", gallery: "गैलरी" },
      emptyTitle: "पहले लेख जल्द ही",
      emptyText: "संपादकीय टीम पहले लेख और घोषणाएँ तैयार कर रही है। सदस्यता लें, ताकि आपको सूचना मिले।",
      galleryTitle: "संवाद के अभिलेखागार से",
    },
    gallery: [
      { src: "/images/issue-2015-q3.jpg", caption: "जुलाई–सितंबर 2015 अंक का आवरण" },
      { src: "/images/campaign-hsm.jpg", caption: "‘हमारा सदन हमारा मुद्दा’ अभियान सामग्री" },
      { src: "/images/issue-2014-q4.jpg", caption: "प्रवेशांक का आवरण, अक्टूबर–दिसंबर 2014" },
      { src: "/images/book-panchayat-raj.jpg", caption: "‘पंचायत राज 2.0’ का आवरण" },
      { src: "/images/campaign-hariyali.jpg", caption: "ई-हरियाली पहल की पुस्तिका" },
    ],
    contact: {
      title: "संपर्क करें",
      sub: "सुझाव, लेख, विज्ञापन या सहयोग के लिए हमें लिखें।",
      officeTitle: "कार्यालय",
      personTitle: "संपर्क व्यक्ति",
      phoneTitle: "फ़ोन",
      emailTitle: "ईमेल",
      formTitle: "हमें संदेश भेजें",
    },
    footer: {
      statement: "संवाद ही लोकतंत्र है।",
      tag: "संसदीय लोकतंत्र के सशक्तीकरण को समर्पित त्रैमासिक पत्रिका",
      explore: "खोजें",
      reach: "संपर्क",
      rights: "सर्वाधिकार सुरक्षित",
      rni: "आरएनआई पंजीकरण",
    },
  },

  en: {
    meta: {
      title: "Samvad – Ek Abhiyaan",
      description:
        "An independent quarterly magazine and platform on the Constitution, public policy and rural India.",
    },
    brand: { name: "Samvad", tag: "Ek Abhiyaan" },
    nav: [
      { href: "", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/newsletter", label: "Magazine" },
      { href: "/updates", label: "Updates" },
      { href: "/contact", label: "Contact" },
    ],
    ui: {
      subscribe: "Subscribe",
      readLatest: "Read the latest issue",
      read: "Read",
      download: "Download",
      viewAll: "View all issues",
      menu: "Menu",
      close: "Close",
      language: "हिंदी",
      langShort: "हिं",
      email: "Email address",
      emailPlaceholder: "Your email",
      issue: "Issue",
      volume: "Volume",
      pages: "pages",
      price: "Price",
      hindiTag: "Hindi",
      learnMore: "Learn more",
      skip: "Skip to content",
    },
    hero: {
      before: "Citizens speak. Power ",
      verb: "listens",
      after: ".",
      sub: "An independent quarterly on the Constitution, policy and rural India.",
      cta: "Read the latest issue",
      note: "A new issue every quarter, straight to you.",
    },
    focus: {
      title: "What we work on",
      items: [
        {
          title: "A bridge between people and policymakers",
          text: "Carrying the concerns of ordinary citizens to those who frame policy, and keeping decision-makers close to ground reality.",
        },
        {
          title: "Policy accountability",
          text: "Examining reforms and their implementation to find where promises on paper and people's real needs part ways.",
        },
        {
          title: "Self-reliant villages",
          text: "Local livelihoods, profitable farming and access to schemes, so prosperity is built in the village, not found by leaving it.",
        },
      ],
    },
    peopleHome: {
      title: "The people behind Samvad",
      sub: "The editors, writers and campaigners who set its direction.",
      cta: "Meet the team",
    },
    workHome: {
      title: "Campaigns beyond the page",
      sub: "Work on parliamentary literacy, Panchayati Raj and the environment.",
      cta: "All campaigns",
    },
    archive: {
      title: "The issues",
      sub: "Every published edition in one place. Read online or download the PDF.",
      more: "More issues will be added here as they are digitised.",
    },
    subscribeBand: {
      title: "The next issue, straight to you",
      sub: "Register to receive each new issue by email or post.",
    },
    form: {
      name: "Full name",
      email: "Email",
      phone: "Mobile number",
      address: "Postal address",
      addressHint: "So we can post printed copies",
      message: "Your message",
      consent:
        "I agree that Samvad may send me notices about the magazine and updates.",
      submit: "Subscribe",
      send: "Send message",
      sending: "Sending…",
      okTitle: "Thank you",
      okSubscribe: "You are registered. The next issue will reach you.",
      okContact: "Your message has reached us. We will reply soon.",
      errRequired: "This is required",
      errEmail: "Enter a valid email",
      errPhone: "Enter a valid mobile number",
      errConsent: "Please agree to continue",
      subscribeTitle: "Subscribe to Samvad",
      subscribeSub: "Share your details and every new issue will find you.",
    },
    about: {
      title: "A campaign for democracy",
      sub: "An independent platform that holds the voice of ordinary people up to the measure of the Constitution.",
      tabs: [
        { id: "story", label: "Story" },
        { id: "focus", label: "Focus" },
        { id: "team", label: "Team" },
        { id: "journey", label: "Journey" },
        { id: "work", label: "Campaigns" },
      ],
      story: {
        title: "Origin and vision",
        p1: "Samvad – Ek Abhiyaan began with a simple observation: the issues and aspirations of ordinary people rarely find enough room in mainstream media. We set it up as an independent platform that takes up the responsibility of democracy's Fourth Pillar, bringing ground realities forward without bias.",
        p2: "Our vision is a country better informed about its constitutional institutions, and those in power, in government or in opposition, acting within the Constitution and answerable to the people.",
        quote: "Strengthening constitutional accountability through dialogue, awareness and independent scrutiny.",
      },
      editorial: {
        title: "Our editorial vision",
        items: [
          "Independent, fact-oriented and balanced",
          "Reflecting the aspirations of ordinary citizens",
          "Examining governance and institutional accountability",
          "Showing the gap between policy and ground reality",
        ],
      },
      focusTitle: "Three areas of focus",
      teamTitle: "Team",
      teamSub: "The people who set Samvad's direction.",
      journeyTitle: "The journey so far",
      workTitle: "Campaigns and publications",
      workSub: "Initiatives that run alongside the magazine.",
    },
    founder: {
      role: "Founder and Publisher",
      name: "Dr. Aarti Singh",
      bio: "Aarti Singh holds bachelor's, master's and D.Phil degrees from Allahabad University and cleared UGC-NET in 1999. In 2000–01 she trained in remote sensing and GIS at the Indian Institute of Remote Sensing, an ISRO training institute.",
      bio2: "For over twenty years she has worked with universities and state governments on rural development, women's empowerment, digital education for children and financial literacy. She is currently a member of the Child Welfare Committee, Bilaspur.",
      points: [
        "D.Phil, Allahabad University",
        "Remote sensing training, IIRS (ISRO)",
        "State coordinator, women and youth empowerment campaign, Chhattisgarh Panchayat Raj Department",
        "Member, Child Welfare Committee, Bilaspur",
      ],
    },
    people: [
      {
        id: "satyendra",
        photo: "/images/satyendra-singh.jpg",
        name: "Satyendra Singh",
        role: "Editor",
        text: "Initiator of the campaign to strengthen parliamentary democracy, active since 1997. National General Secretary, Akhil Bharatiya Panchayat Parishad. Over two decades on Panchayati Raj, farmer and environment campaigns.",
      },
      {
        id: "anil",
        photo: "/images/anil-atri.jpg",
        name: "Anil Atri",
        role: "Chief Editor",
        text: "Former editor-in-charge of Young Indian, the weekly of Prime Minister Chandra Shekhar. Three decades in journalism, documentaries and writing; editor of books on Chandra Shekhar.",
      },
      {
        id: "dhananjay",
        photo: "/images/dhananjay-singh.jpg",
        name: "Dhananjay Singh",
        role: "Writer",
        text: "Former member of the Uttar Pradesh Legislative Assembly (2002–09) and of the 15th Lok Sabha (2009–14). Co-author of Panchayat Raj 2.0.",
      },
    ],
    journey: [
      { year: "1997", text: "Campaign to strengthen parliamentary democracy begins, with youth parliaments in universities alongside Chandra Shekhar." },
      { year: "2000", text: "Annadata (farmer) empowerment campaign." },
      { year: "2005", text: "Panchayat Raj and Gram Swaraj campaign." },
      { year: "2007", text: "e-Hariyali, a campaign for the environment." },
      { year: "2012", text: "‘Humara Sadan Humara Mudda’ staged at JNU." },
      { year: "2014", text: "Samvad – Ek Abhiyaan registered; first issue in October–December 2014." },
      { year: "2015", text: "‘Sansad mein Sangram?’, an issue on how Parliament works." },
    ],
    work: [
      {
        id: "hsm",
        image: "/images/campaign-hsm.jpg",
        title: "Humara Sadan Humara Mudda",
        tag: "Campaign",
        text: "A parliamentary literacy campaign. Through the play ‘Loktantra’, workshops and dialogue with representatives, it makes people and the House answerable to each other.",
      },
      {
        id: "pr2",
        image: "/images/book-panchayat-raj.jpg",
        title: "Panchayat Raj 2.0: Roadmap and Blueprint",
        tag: "Book",
        text: "A book by Dhananjay Singh and Satyendra Singh laying out a blueprint to strengthen Panchayati Raj institutions.",
      },
      {
        id: "eh",
        image: "/images/campaign-hariyali.jpg",
        title: "e-Hariyali",
        tag: "Initiative",
        text: "An online and offline tree-plantation initiative linking rural livelihoods with the environment. An initiative of the Society for Application Research and Consultancy (SARC).",
      },
    ],
    newsletter: {
      title: "The magazine",
      sub: "Samvad – Ek Abhiyaan, a quarterly dedicated to the parliamentary system of democracy.",
      latest: "Latest issue",
      archive: "All issues",
      subscribeTitle: "Every issue, to you",
      subscribeSub: "Share your name, email, mobile and postal address. We email each new issue, and post a copy if you need one.",
    },
    issues: [
      {
        id: "2015-q3",
        cover: "/images/issue-2015-q3.jpg",
        pdf: "/issues/samvad-2015-jul-sep.pdf",
        title: "Battle in Parliament?",
        period: "July–September 2015",
        year: 2015,
        volume: 2,
        number: 4,
        pages: 64,
        price: "₹50",
        text: "An issue on the bills pending in Parliament: GST, whistleblowers and land acquisition. With a tribute to former President Dr. Kalam.",
      },
      {
        id: "2014-q4",
        cover: "/images/issue-2014-q4.jpg",
        pdf: "/issues/samvad-2014-oct-dec.pdf",
        title: "Our campaign to strengthen democracy",
        period: "October–December 2014",
        year: 2014,
        volume: 1,
        number: 1,
        pages: 52,
        price: "₹50",
        text: "The inaugural issue. Articles and views under the campaign to strengthen parliamentary democracy.",
      },
    ],
    updates: {
      title: "Updates",
      sub: "Articles, announcements and glimpses of Samvad's journey.",
      tabs: { blog: "Articles and announcements", gallery: "Gallery" },
      emptyTitle: "First articles soon",
      emptyText: "The editorial team is preparing the first articles and announcements. Subscribe to be told when they land.",
      galleryTitle: "From the Samvad archive",
    },
    gallery: [
      { src: "/images/issue-2015-q3.jpg", caption: "Cover, July–September 2015 issue" },
      { src: "/images/campaign-hsm.jpg", caption: "‘Humara Sadan Humara Mudda’ campaign material" },
      { src: "/images/issue-2014-q4.jpg", caption: "Inaugural issue cover, October–December 2014" },
      { src: "/images/book-panchayat-raj.jpg", caption: "Cover of ‘Panchayat Raj 2.0’" },
      { src: "/images/campaign-hariyali.jpg", caption: "e-Hariyali initiative brochure" },
    ],
    contact: {
      title: "Get in touch",
      sub: "Write to us with feedback, articles, advertising or partnerships.",
      officeTitle: "Office",
      personTitle: "Contact person",
      phoneTitle: "Phone",
      emailTitle: "Email",
      formTitle: "Send us a message",
    },
    footer: {
      statement: "Dialogue is democracy.",
      tag: "A quarterly dedicated to empowering parliamentary democracy",
      explore: "Explore",
      reach: "Reach us",
      rights: "All rights reserved",
      rni: "RNI registration",
    },
  },
};

// Blog posts: empty until the editorial team publishes. Shape for the backend:
// { slug, date, title:{hi,en}, excerpt:{hi,en}, cover, body:{hi,en} }
export const posts = [];

export function getContent(lang) {
  return content[lang] ?? content[DEFAULT_LANG];
}


// ---------- v2: strings for the redesigned experience ----------
const extra = {
  hi: {
    nav: [
      { href: "/stories", label: "कहानियाँ" },
      { href: "/magazine", label: "पत्रिका" },
      { href: "/about", label: "हमारे बारे में" },
      { href: "/contact", label: "संपर्क" },
    ],
    ui2: {
      search: "खोजें",
      searchHint: "कहानियाँ, अंक और पन्ने खोजें",
      searchEmpty: "कुछ नहीं मिला",
      stories: "कहानियाँ",
      issues: "अंक",
      pagesLbl: "पन्ने",
      all: "सभी",
      readStory: "कहानी पढ़ें",
      readMin: "मिनट पढ़ने में",
      by: "लेखक",
      share: "साझा करें",
      copy: "लिंक कॉपी करें",
      copied: "कॉपी हो गया",
      related: "यह भी पढ़ें",
      nextStory: "अगली कहानी",
      backStories: "सभी कहानियाँ",
      open: "खोलें",
      readOnline: "ऑनलाइन पढ़ें",
      quarter: "तिमाही",
      comingSoon: "जल्द आ रहा है",
      sort: "क्रम",
      newest: "सबसे नए",
      oldest: "सबसे पुराने",
      loadMore: "और दिखाएँ",
      results: "कहानियाँ",
      scroll: "नीचे देखें",
      latestIssue: "नवीनतम अंक",
      photoCredits: "तस्वीरें: विकिमीडिया कॉमन्स",
    },
    hero2: {
      before: "जनता बोले, सत्ता ",
      verb: "सुने",
      after: "।",
      sub: "संविधान, नीति और ग्रामीण भारत पर एक स्वतंत्र मंच और त्रैमासिक पत्रिका।",
      cta1: "कहानियाँ पढ़ें",
      cta2: "पत्रिका देखें",
    },
    statement: "संवाद एक स्वतंत्र मंच है, जो सत्ता को संविधान की कसौटी पर परखता है और आम लोगों को अपनी बात रखने की जगह देता है।",
    ticker: ["संविधान", "संसद", "नीति", "पंचायत राज", "किसान", "गाँव", "पर्यावरण", "जवाबदेही"],
    latest: { title: "संवाद से ताज़ा", sub: "हमारी टीम की नई कहानियाँ, विश्लेषण और विचार।", cta: "सभी कहानियाँ देखें" },
    focusShow: { title: "तीन प्रतिबद्धताएँ" },
    quarterly: {
      title: "साल में चार बार, आपके हाथ में",
      sub: "संवाद एक त्रैमासिक पत्रिका भी है। हर तिमाही एक अंक: गहरी पड़ताल, पूरे पन्नों में।",
      cta: "सभी अंक देखें",
      note: "हर साल चार अंक: जनवरी–मार्च, अप्रैल–जून, जुलाई–सितंबर, अक्टूबर–दिसंबर।",
      q: ["जनवरी–मार्च", "अप्रैल–जून", "जुलाई–सितंबर", "अक्टूबर–दिसंबर"],
    },
    topics: { title: "विषय", sub: "जिस विषय में रुचि हो, वहीं से पढ़ना शुरू करें।", count: "कहानियाँ" },
    cta: { title: "हर तिमाही, आपके पते पर", sub: "सदस्यता लें। नई कहानियाँ ईमेल पर, पत्रिका डाक से।", button: "सदस्यता लें" },
    storiesPage: { title: "कहानियाँ", sub: "संविधान, संसद, नीति, पंचायत और गाँव पर हमारा लेखन।", search: "कहानी खोजें", empty: "इस विषय में अभी कोई कहानी नहीं।", featured: "प्रमुख" },
    magazinePage: {
      title: "पत्रिका",
      sub: "लोकतंत्र की संसदीय प्रणाली को समर्पित त्रैमासिक, साल में चार अंक।",
      archiveTitle: "अंक-संग्रह",
      yearLbl: "वर्ष",
      digitising: "डिजिटल रूप में जल्द",
      notPublished: "प्रकाशित नहीं",
      readerHint: "पूरी पत्रिका यहीं पढ़ें",
      whatsInside: "इस अंक के बारे में",
      prev: "पिछला अंक",
      next: "अगला अंक",
    },
    contact2: {
      writeTitle: "संवाद के लिए लिखें",
      writeText: "आपके पास कोई लेख, अनुभव या सवाल है? हम स्वतंत्र, तथ्य-आधारित लेखन का स्वागत करते हैं।",
      adTitle: "विज्ञापन",
      adText: "पत्रिका में विज्ञापन की दरें और प्रकाशन-योजना के लिए हमें लिखें।",
    },
    footer2: { top: "ऊपर जाएँ", topics: "विषय" },
  },
  en: {
    nav: [
      { href: "/stories", label: "Stories" },
      { href: "/magazine", label: "Magazine" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
    ui2: {
      search: "Search",
      searchHint: "Search stories, issues and pages",
      searchEmpty: "Nothing found",
      stories: "Stories",
      issues: "Issues",
      pagesLbl: "Pages",
      all: "All",
      readStory: "Read story",
      readMin: "min read",
      by: "By",
      share: "Share",
      copy: "Copy link",
      copied: "Copied",
      related: "Keep reading",
      nextStory: "Next story",
      backStories: "All stories",
      open: "Open",
      readOnline: "Read online",
      quarter: "Quarter",
      comingSoon: "Coming soon",
      sort: "Sort",
      newest: "Newest",
      oldest: "Oldest",
      loadMore: "Show more",
      results: "stories",
      scroll: "Scroll",
      latestIssue: "Latest issue",
      photoCredits: "Photographs: Wikimedia Commons",
    },
    hero2: {
      before: "Citizens speak. Power ",
      verb: "listens",
      after: ".",
      sub: "An independent platform and quarterly magazine on the Constitution, policy and rural India.",
      cta1: "Read the stories",
      cta2: "Explore the magazine",
    },
    statement: "Samvad is an independent platform that holds power to the measure of the Constitution, and gives ordinary people the room to be heard.",
    ticker: ["Constitution", "Parliament", "Policy", "Panchayat Raj", "Farmers", "Villages", "Environment", "Accountability"],
    latest: { title: "Latest from Samvad", sub: "New stories, analysis and opinion from our team.", cta: "View all stories" },
    focusShow: { title: "Three commitments" },
    quarterly: {
      title: "Four times a year, in your hands",
      sub: "Samvad is also a quarterly magazine. One issue every season: deeper reporting, on full pages.",
      cta: "See all issues",
      note: "Four issues a year: January–March, April–June, July–September, October–December.",
      q: ["January–March", "April–June", "July–September", "October–December"],
    },
    topics: { title: "Topics", sub: "Start reading from whatever matters to you.", count: "stories" },
    cta: { title: "Every quarter, at your door", sub: "Subscribe. New stories by email, the magazine by post.", button: "Subscribe" },
    storiesPage: { title: "Stories", sub: "Our writing on the Constitution, Parliament, policy, panchayats and villages.", search: "Search stories", empty: "No stories in this topic yet.", featured: "Featured" },
    magazinePage: {
      title: "The magazine",
      sub: "A quarterly dedicated to the parliamentary system of democracy. Four issues a year.",
      archiveTitle: "The archive",
      yearLbl: "Year",
      digitising: "Digital edition soon",
      notPublished: "Not published",
      readerHint: "Read the full magazine right here",
      whatsInside: "About this issue",
      prev: "Previous issue",
      next: "Next issue",
    },
    contact2: {
      writeTitle: "Write for Samvad",
      writeText: "Have an article, an experience or a question? We welcome independent, fact-based writing.",
      adTitle: "Advertise",
      adText: "Write to us for advertising rates and the publishing plan.",
    },
    footer2: { top: "Back to top", topics: "Topics" },
  },
};
for (const l of ["hi", "en"]) Object.assign(content[l], extra[l]);

// quarters for the archive: Q1=Jan-Mar ... Q4=Oct-Dec
export const issueMeta = {
  "2014-q4": { year: 2014, q: 4 },
  "2015-q3": { year: 2015, q: 3 },
};
export const archiveYears = [2015, 2014];

// Real inside pages of each PDF (file number -> PDF page for deep links). Ads are left out.
export const issuePreviews = {
  "2014-q4": [{ n: 1, page: 3 }, { n: 2, page: 5 }, { n: 3, page: 8 }, { n: 4, page: 12 }, { n: 5, page: 18 }, { n: 7, page: 34 }],
  "2015-q3": [{ n: 1, page: 3 }, { n: 2, page: 6 }, { n: 3, page: 10 }, { n: 5, page: 21 }, { n: 6, page: 29 }, { n: 7, page: 39 }, { n: 8, page: 51 }],
};

const standard = {
  hi: {
    title: "हमारा संपादकीय मानदंड",
    sub: "हम जो छापते हैं, उसकी कसौटी चार बातें हैं।",
    items: [
      { t: "स्वतंत्र", x: "किसी सत्ता, दल या विज्ञापनदाता की रेखा पर नहीं, सिर्फ़ जनहित की कसौटी पर।" },
      { t: "तथ्य-आधारित", x: "हर दावे के पीछे दस्तावेज़, आँकड़े या ज़मीनी रिपोर्ट।" },
      { t: "संतुलित", x: "सत्ता और विपक्ष, दोनों से एक-सी जवाबदेही की माँग।" },
      { t: "ज़मीन से जुड़ा", x: "नीति और गाँव-खेत की हक़ीक़त के बीच के फ़ासले पर नज़र।" },
    ],
  },
  en: {
    title: "Our editorial standard",
    sub: "Four things decide what we publish.",
    items: [
      { t: "Independent", x: "No party line, no advertiser's line. Only the public interest." },
      { t: "Fact-first", x: "Every claim rests on a document, a figure or a report from the ground." },
      { t: "Balanced", x: "The same accountability demanded of government and opposition alike." },
      { t: "Grounded", x: "Eyes on the gap between policy and the realities of village and field." },
    ],
  },
};
for (const l of ["hi", "en"]) content[l].standard = standard[l];
Object.assign(content.hi.ui2, { pageWord: "पृष्ठ", latestStory: "ताज़ा कहानी", pagesInside: "अंक के अंदर", pagesInsideSub: "असली पन्ने, सीधे पत्रिका से। किसी पर भी क्लिक करके पढ़ें।", authorAbout: "लेखक के बारे में", moreFrom: "इसी लेखक से" });
Object.assign(content.en.ui2, { pageWord: "Page", latestStory: "Latest story", pagesInside: "Inside the issue", pagesInsideSub: "Real pages, straight from the magazine. Click any page to read from there.", authorAbout: "About the author", moreFrom: "More from this author" });

// ---------- v3: subscriber form (name, phone, email, address, delivery channels) ----------
Object.assign(content.hi.form, {
  channels: "आप हमसे कैसे पाना चाहेंगे?",
  chEmail: "ईमेल",
  chWhatsapp: "व्हाट्सऐप",
  chPost: "डाक से प्रति",
  addressPost: "डाक का पता (डाक चुनने पर ज़रूरी)",
  addressOpt: "डाक का पता",
  errChannel: "कम से कम एक तरीका चुनें",
  errAddress: "डाक से प्रति के लिए पता ज़रूरी है",
  privacy: "आपकी जानकारी सिर्फ़ पत्रिका और अपडेट भेजने के लिए इस्तेमाल होगी।",
});
Object.assign(content.en.form, {
  channels: "How would you like to receive us?",
  chEmail: "Email",
  chWhatsapp: "WhatsApp",
  chPost: "Printed copy by post",
  addressPost: "Postal address (needed for post)",
  addressOpt: "Postal address",
  errChannel: "Choose at least one way",
  errAddress: "An address is needed for a printed copy",
  privacy: "Your details are used only to send you the magazine and updates.",
});
content.hi.cta = {
  title: "हर अंक, आपके तरीके से",
  sub: "अपना विवरण दें। नई कहानियाँ और हर तिमाही का अंक ईमेल या व्हाट्सऐप पर, और चाहें तो छपी प्रति डाक से।",
  button: "सदस्यता लें",
  points: ["नई कहानियाँ ईमेल पर", "अंक की सूचना व्हाट्सऐप पर", "छपी प्रति आपके पते पर"],
};
content.en.cta = {
  title: "Every issue, your way",
  sub: "Share your details. We send new stories and each quarterly issue by email or WhatsApp, and can post a printed copy to your address.",
  button: "Subscribe",
  points: ["New stories by email", "Issue alerts on WhatsApp", "A printed copy at your door"],
};
Object.assign(content.hi.about, { peopleTitle: "नेतृत्व और टीम", peopleSub: "संवाद को दिशा देने वाले लोग।" });
Object.assign(content.en.about, { peopleTitle: "Leadership and team", peopleSub: "The people who set Samvad's direction." });

content.hi.lang = "hi";
content.en.lang = "en";

// ---------- v4 ----------
Object.assign(content.hi.ui2, { home: "मुख्य पृष्ठ", opening: "पत्रिका खुल रही है…", readerError: "पत्रिका खुल नहीं पाई। कृपया डाउनलोड करके पढ़ें।", latestIssueShort: "नवीनतम अंक", readIssue: "पढ़ें" });
Object.assign(content.en.ui2, { home: "Home", opening: "Opening the magazine…", readerError: "The magazine could not be opened. Please download it to read.", latestIssueShort: "Latest issue", readIssue: "Read" });
content.hi.hero2.cta2 = "पत्रिका देखें";
content.en.hero2.cta2 = "See the magazine";
content.hi.heroFacts = [
  { v: "2014", l: "पहला अंक" },
  { v: "त्रैमासिक", l: "साल में चार अंक" },
  { v: "बिलासपुर", l: "छत्तीसगढ़ से प्रकाशित" },
];
content.en.heroFacts = [
  { v: "2014", l: "First issue" },
  { v: "Quarterly", l: "Four issues a year" },
  { v: "Bilaspur", l: "Published from Chhattisgarh" },
];
content.hi.cta = {
  title: "संवाद से जुड़ें",
  sub: "एक बार अपना विवरण दें। हर नई कहानी और हर तिमाही का अंक सबसे पहले आप तक पहुँचेगा।",
  button: "सदस्यता लें",
  points: ["हर नए अंक की सूचना", "नई कहानियाँ और अपडेट", "आपकी जानकारी संवाद के पास सुरक्षित"],
};
content.en.cta = {
  title: "Join the Samvad community",
  sub: "Register once. Every new story and each quarterly issue will reach you first.",
  button: "Subscribe",
  points: ["Know about every new issue", "New stories and updates", "Your details stay with Samvad"],
};
content.hi.form.addressHint = "";
content.en.form.addressHint = "";

// ---------- v5: subscribe push ----------
Object.assign(content.hi.cta, { formTitle: "अपना विवरण भरें", note: "इसमें एक मिनट से भी कम लगता है।", inlineTitle: "ऐसी कहानियाँ सबसे पहले पाएँ", inlineText: "संवाद से जुड़ें। नए लेख और हर तिमाही का अंक आप तक पहुँचे।" });
Object.assign(content.en.cta, { formTitle: "Your details", note: "Takes less than a minute.", inlineTitle: "Get stories like this, first", inlineText: "Join Samvad. New articles and every quarterly issue will reach you." });
content.hi.nudge = { title: "हर अंक सबसे पहले पाएँ", text: "एक मिनट में पंजीकरण करें।", button: "सदस्यता लें" };
content.en.nudge = { title: "Get every issue first", text: "Register in under a minute.", button: "Subscribe" };
content.hi.form.okNext = "आपका विवरण दर्ज हो गया है।";
content.en.form.okNext = "Your details are saved.";

Object.assign(content.hi.ui2, { loading: "लोड हो रहा है", toTop: "ऊपर जाएँ", viewAllStories: "सभी कहानियाँ देखें" });
Object.assign(content.en.ui2, { loading: "Loading", toTop: "Back to top", viewAllStories: "View all stories" });

Object.assign(content.hi.ui2, { knowMore: "विस्तार से जानें", personAt: "संक्षिप्त परिचय", personAbout: "हमारे बारे में", moreTeam: "टीम के अन्य सदस्य" });
Object.assign(content.en.ui2, { knowMore: "Know more", personAt: "At a glance", personAbout: "About us", moreTeam: "More from the team" });
// the team names used elsewhere (story bylines) follow the same spelling
content.hi.people.forEach((p) => { if (p.id === "satyendra") p.name = "सतेंद्र सिंह"; });

Object.assign(content.hi.ui2, { readFull: "पूरा परिचय पढ़ें", showLess: "कम दिखाएँ" });
Object.assign(content.en.ui2, { readFull: "Read full profile", showLess: "Show less" });

Object.assign(content.hi.about, { originLabel: "शुरुआत", visionLabel: "दृष्टि", bandLabel: "संवाद – एक अभियान", scrollPrev: "पिछला", scrollNext: "अगला" });
Object.assign(content.en.about, { originLabel: "Origin", visionLabel: "Vision", bandLabel: "Samvad – Ek Abhiyaan", scrollPrev: "Previous", scrollNext: "Next" });
