import type { Project } from "./types";

/**
 * Phase 1 static seed, migrated from the old per-locale `work.projects`
 * arrays. No real cover/gallery images yet — pages fall back to the
 * generated palette cover (`lib/data/projects-meta.ts`) until Phase 2
 * (admin uploads) replaces them.
 */
export const projects: Project[] = [
  {
    slug: "sun-motors-social-media",
    categories: ["social"],
    client: "Sun Motors Georgia",
    year: "2023",
    services: ["Social Media", "Graphic Design"],
    cover: null,
    gallery: [],
    updatedAt: "2026-08-15T00:00:00.000Z",
    en: {
      title: "Sun Motors Georgia — Social Media",
      tagline: "Keeping a battery and auto-parts retailer visible, every week.",
      summary:
        "An always-on social content system for Georgia's leading car battery and parts retailer — offers, promos, and product education on a weekly cadence.",
      challenge:
        "Sun Motors needed a steady stream of promotional content that could keep pace with rotating stock offers, without losing brand consistency across dozens of posts a month.",
      approach: [
        "Built a modular template system so new offers could go live within hours",
        "Established a consistent price-tag and badge system across every promo",
        "Planned a monthly content calendar balancing offers, tips, and brand moments",
      ],
      results: [
        "A full year of consistent weekly publishing",
        "A reusable template library the client's team can run independently",
        "A cleaner, more recognizable feed across every campaign",
      ],
    },
    ka: {
      title: "სან მოტორსი საქართველო — სოციალური მედია",
      tagline: "აკუმულატორებისა და ავტონაწილების რითეილერის ხილვადობა, ყოველკვირეულად.",
      summary:
        "მუდმივმოქმედი სოციალური კონტენტის სისტემა საქართველოს წამყვანი აკუმულატორებისა და ავტონაწილების მაღაზიისთვის — შეთავაზებები, აქციები და პროდუქტის შესახებ საგანმანათლებლო კონტენტი ყოველკვირეულად.",
      challenge:
        "სან მოტორსს სჭირდებოდა სარეკლამო კონტენტის სტაბილური ნაკადი, რომელიც აქტუალურ აქციებს გაუწევდა ფეხს, ბრენდის ერთიანობის დაკარგვის გარეშე.",
      approach: [
        "შეიქმნა მოდულური შაბლონების სისტემა, რათა ახალი შეთავაზება რამდენიმე საათში გამოქვეყნებულიყო",
        "დაინერგა ერთიანი ფასის ბეჯებისა და ნიშნების სისტემა ყველა აქციისთვის",
        "დაიგეგმა ყოველთვიური კონტენტ-კალენდარი, რომელიც აბალანსებდა აქციებს, რჩევებსა და ბრენდის მომენტებს",
      ],
      results: [
        "სრული წელი სტაბილური, ყოველკვირეული პუბლიკაციით",
        "შაბლონების ბიბლიოთეკა, რომლის დამოუკიდებლად გამოყენებაც კლიენტის გუნდს შეუძლია",
        "უფრო სუფთა და ამოსაცნობი ფიდი ყველა კამპანიაში",
      ],
    },
  },
  {
    slug: "sun-motors-branding",
    categories: ["branding"],
    client: "Sun Motors Georgia",
    year: "2023",
    services: ["Branding", "Graphic Design"],
    cover: null,
    gallery: [],
    updatedAt: "2026-08-15T00:00:00.000Z",
    en: {
      title: "Sun Motors Georgia — Branding",
      tagline: "A sharper identity for a growing retail network.",
      summary:
        "A refreshed visual identity — logo refinement, color system, and brand guidelines — built to scale across stores, vehicles, and digital channels.",
      challenge:
        "The existing identity had grown inconsistent across locations and materials, diluting brand recognition as the network expanded.",
      approach: [
        "Refined the logo mark for clarity at small sizes and on vehicle livery",
        "Defined a strict color and typography system",
        "Documented usage rules in a lightweight brand guide",
      ],
      results: [
        "One consistent identity applied across every location",
        "A brand guide the team still references today",
        "A visual foundation the social media system was later built on",
      ],
    },
    ka: {
      title: "სან მოტორსი საქართველო — ბრენდინგი",
      tagline: "უფრო მკვეთრი იდენტობა მზარდი საცალო ქსელისთვის.",
      summary:
        "განახლებული ვიზუალური იდენტობა — ლოგოს დახვეწა, ფერების სისტემა და ბრენდბუქი — რომელიც შექმნილია მაღაზიების, ავტოტრანსპორტისა და ციფრული არხების მასშტაბირებისთვის.",
      challenge:
        "არსებული იდენტობა არათანმიმდევრული გახდა სხვადასხვა ლოკაციასა და მასალაზე, რაც ბრენდის ცნობადობას ასუსტებდა ქსელის ზრდასთან ერთად.",
      approach: [
        "დაიხვეწა ლოგოს ნიშანი მცირე ზომებსა და ავტოტრანსპორტის დიზაინში სიცხადისთვის",
        "განისაზღვრა მკაცრი ფერისა და ტიპოგრაფიის სისტემა",
        "დაიწერა გამოყენების წესები მსუბუქ ბრენდბუქში",
      ],
      results: [
        "ერთიანი იდენტობა ყველა ლოკაციაზე",
        "ბრენდბუქი, რომელსაც გუნდი დღემდე იყენებს",
        "ვიზუალური საფუძველი, რომელზეც მოგვიანებით აშენდა სოციალური მედიის სისტემა",
      ],
    },
  },
  {
    slug: "alcorium-social-ads",
    categories: ["social"],
    client: "Alcorium",
    year: "2023",
    services: ["Social Media", "Paid Media"],
    cover: null,
    gallery: [],
    updatedAt: "2026-08-15T00:00:00.000Z",
    en: {
      title: "Alcorium — Social Media & Ads",
      tagline: "Seasonal spirits campaigns that actually move product.",
      summary:
        "Ongoing paid and organic social creative for a leading wine & spirits retailer, built around seasonal promotions and new arrivals.",
      challenge:
        "Spirits promotions are highly seasonal and price-sensitive — creative needed to turn around fast while still feeling premium.",
      approach: [
        "Built a fast production pipeline for weekly promo creative",
        "Layered seasonal art direction onto a consistent grid",
        "Ran paid social alongside organic to extend reach during key periods",
      ],
      results: [
        "Weekly promotional creative shipped without missing a cycle",
        "A recognizable seasonal visual language across the year",
        "Paid and organic content sharing one production system",
      ],
    },
    ka: {
      title: "ალკორიუმი — სოციალური მედია და რეკლამა",
      tagline: "სეზონური ალკოჰოლური სასმელების კამპანიები, რომლებიც რეალურად ყიდიან.",
      summary:
        "მუდმივი ფასიანი და ორგანული სოციალური კრეატივი ღვინისა და ალკოჰოლური სასმელების წამყვანი რითეილერისთვის, აგებული სეზონურ აქციებსა და სიახლეებზე.",
      challenge:
        "ალკოჰოლური სასმელების აქციები მკვეთრად სეზონურია და ფასზეა დამოკიდებული — კრეატივს სწრაფი წარმოება სჭირდებოდა, პრემიალურობის დაკარგვის გარეშე.",
      approach: [
        "აეწყო სწრაფი საწარმოო პროცესი ყოველკვირეული სარეკლამო კრეატივისთვის",
        "დაფენილი იქნა სეზონური არტ-დირექცია ერთიან ბადეზე",
        "ფასიანი სოციალური რეკლამა ორგანულთან ერთად გაშვებული იყო საკვანძო პერიოდებში",
      ],
      results: [
        "ყოველკვირეული სარეკლამო კრეატივი, ციკლის გამოტოვების გარეშე",
        "ამოსაცნობი სეზონური ვიზუალური ენა მთელი წლის განმავლობაში",
        "ფასიანი და ორგანული კონტენტი ერთ საწარმოო სისტემაზე",
      ],
    },
  },
  {
    slug: "alcorium-posters",
    categories: ["branding"],
    client: "Alcorium",
    year: "2024",
    services: ["Graphic Design", "Branding"],
    cover: null,
    gallery: [],
    updatedAt: "2026-08-15T00:00:00.000Z",
    en: {
      title: "Alcorium — In-Store Posters",
      tagline: "Taking the digital campaign system into physical stores.",
      summary:
        "Print-ready poster series extending Alcorium's seasonal campaigns from social feeds into storefronts and shelf displays.",
      challenge:
        "The brand's digital campaigns needed a print-ready counterpart that held up at poster size without a separate design process.",
      approach: [
        "Adapted the existing social art direction for large-format print",
        "Built templates for quick swaps between seasonal campaigns",
        "Prepared print-ready files across store formats",
      ],
      results: [
        "A unified look between in-store and social campaigns",
        "Faster turnaround for new seasonal print runs",
        "Reusable poster templates for future campaigns",
      ],
    },
    ka: {
      title: "ალკორიუმი — მაღაზიის პოსტერები",
      tagline: "ციფრული კამპანიის სისტემის გატანა ფიზიკურ მაღაზიებში.",
      summary:
        "ბეჭდვისთვის მზა პოსტერების სერია, რომელიც ალკორიუმის სეზონურ კამპანიებს სოციალური ფიდიდან მაღაზიის ვიტრინებსა და თაროებზე გადააქვს.",
      challenge:
        "ბრენდის ციფრულ კამპანიებს სჭირდებოდა ბეჭდური ანალოგი, რომელიც პოსტერის ზომაზეც კარგად იმუშავებდა, ცალკე დიზაინის პროცესის გარეშე.",
      approach: [
        "არსებული სოციალური არტ-დირექცია მოერგო დიდი ფორმატის ბეჭდვას",
        "აეწყო შაბლონები სეზონურ კამპანიებს შორის სწრაფი გადართვისთვის",
        "მოემზადა ბეჭდვისთვის მზა ფაილები მაღაზიის სხვადასხვა ფორმატისთვის",
      ],
      results: [
        "ერთიანი იერსახე მაღაზიასა და სოციალურ კამპანიებს შორის",
        "უფრო სწრაფი მომზადება ახალი სეზონური ბეჭდვისთვის",
        "მრავალჯერადი გამოყენების პოსტერის შაბლონები მომავალი კამპანიებისთვის",
      ],
    },
  },
  {
    slug: "erty-branding",
    categories: ["branding"],
    client: "Erty",
    year: "2023",
    services: ["Branding", "Graphic Design"],
    cover: null,
    gallery: [],
    updatedAt: "2026-08-15T00:00:00.000Z",
    en: {
      title: "Erty — Brand Identity",
      tagline: "Finding your one, told through a single confident mark.",
      summary:
        "A full brand identity — logotype, mark, and packaging direction — for a lifestyle brand built around individuality.",
      challenge:
        "The brand needed an identity flexible enough to work across packaging, posters, and digital, while staying instantly recognizable.",
      approach: [
        "Designed a bold logotype built around the brand's core message",
        "Extended the mark onto physical packaging and material textures",
        "Built a poster system for campaign rollouts",
      ],
      results: [
        "A single identity system spanning packaging to social",
        "A distinct visual voice in a crowded category",
        "A flexible poster system reused across later campaigns",
      ],
    },
    ka: {
      title: "Erty — ბრენდის იდენტობა",
      tagline: "საკუთარის პოვნა, გადმოცემული ერთი თავდაჯერებული ნიშნით.",
      summary:
        "სრული ბრენდის იდენტობა — ლოგოტიპი, ნიშანი და შეფუთვის მიმართულება — ინდივიდუალობაზე აგებული ლაივსტაილ ბრენდისთვის.",
      challenge:
        "ბრენდს სჭირდებოდა იდენტობა, რომელიც მოქნილად იმუშავებდა შეფუთვაზე, პოსტერებსა და ციფრულ არხებზე, ცნობადობის დაკარგვის გარეშე.",
      approach: [
        "შეიქმნა თამამი ლოგოტიპი, აგებული ბრენდის ძირითად მესიჯზე",
        "ნიშანი გავრცელდა ფიზიკურ შეფუთვასა და მასალის ტექსტურებზე",
        "აეწყო პოსტერების სისტემა კამპანიების გასაშვებად",
      ],
      results: [
        "ერთიანი იდენტობის სისტემა შეფუთვიდან სოციალურამდე",
        "გამორჩეული ვიზუალური ხმა გადატვირთულ კატეგორიაში",
        "მოქნილი პოსტერის სისტემა, გამოყენებული შემდგომ კამპანიებშიც",
      ],
    },
  },
  {
    slug: "martivi-digital-website",
    categories: ["web"],
    client: "Martivi Digital",
    year: "2024",
    services: ["Web Development", "Branding"],
    cover: null,
    gallery: [],
    updatedAt: "2026-08-15T00:00:00.000Z",
    en: {
      title: "Martivi Digital — Website",
      tagline: "Our own front door, rebuilt to match the work.",
      summary:
        "The agency's own website — portfolio, services, and brand story — designed and built in-house to reflect the studio's own standards.",
      challenge:
        "An agency's own site is the hardest client brief there is: no external deadline, and every visitor is judging the craft directly.",
      approach: [
        "Designed a bold, high-contrast identity system",
        "Built a filterable portfolio to showcase work across every service",
        "Shipped a fast, modern site with smooth in-page motion",
      ],
      results: [
        "A live portfolio the studio could point new clients to directly",
        "A reusable design system for future case studies",
        "A faster, lighter site than the previous version",
      ],
    },
    ka: {
      title: "Martivi Digital — ვებსაიტი",
      tagline: "ჩვენი საკუთარი კარი, ხელახლა აშენებული ნამუშევრების დონეზე.",
      summary:
        "სააგენტოს საკუთარი ვებსაიტი — პორტფოლიო, სერვისები და ბრენდის ისტორია — დაპროექტებული და აშენებული საკუთარი სტანდარტების ასახვისთვის.",
      challenge:
        "სააგენტოს საკუთარი საიტი ყველაზე რთული ბრიფია: გარე დედლაინის გარეშე, სადაც ყველა ვიზიტორი პირდაპირ აფასებს ხელოსნობას.",
      approach: [
        "დაპროექტდა თამამი, მაღალკონტრასტული იდენტობის სისტემა",
        "აშენდა ფილტრირებადი პორტფოლიო ყველა სერვისის საჩვენებლად",
        "გაეშვა სწრაფი, თანამედროვე საიტი გლუვი შიდა-გვერდის ანიმაციით",
      ],
      results: [
        "ცოცხალი პორტფოლიო, რომლისკენაც სტუდიას ახალი კლიენტების მიმართვა შეუძლია",
        "მრავალჯერადი გამოყენების დიზაინის სისტემა მომავალი საქმის ისტორიებისთვის",
        "წინა ვერსიაზე უფრო სწრაფი და მსუბუქი საიტი",
      ],
    },
  },
  {
    slug: "georgia-is-europe",
    categories: ["motion", "social"],
    client: "Civic Campaign",
    year: "2023",
    services: ["Motion Graphics", "Social Media"],
    cover: null,
    gallery: [],
    updatedAt: "2026-08-15T00:00:00.000Z",
    en: {
      title: "Georgia is Europe — Campaign",
      tagline: "A civic message, made shareable.",
      summary:
        "Motion graphics and social content for a civic awareness campaign built around Georgia's European identity.",
      challenge:
        "Civic messaging needs to travel fast on social feeds without feeling like a lecture — it has to earn attention on its own merits.",
      approach: [
        "Designed a simple, flag-inspired visual motif that read instantly",
        "Produced short motion loops sized for every major platform",
        "Kept messaging short enough to work with sound off",
      ],
      results: [
        "A visual motif that stayed consistent across every post",
        "Motion content built for silent, scroll-first viewing",
        "A campaign look distinct from typical civic messaging",
      ],
    },
    ka: {
      title: "საქართველო არის ევროპა — კამპანია",
      tagline: "სამოქალაქო მესიჯი, გასაზიარებლად შექმნილი.",
      summary:
        "მოძრავი გრაფიკა და სოციალური კონტენტი სამოქალაქო ცნობიერების კამპანიისთვის, აგებული საქართველოს ევროპულ იდენტობაზე.",
      challenge:
        "სამოქალაქო მესიჯს სჭირდება სწრაფად გავრცელება სოციალურ ფიდებში ისე, რომ ლექციასავით არ ჟღერდეს — ყურადღება საკუთარი ღირსებით უნდა დაიმსახუროს.",
      approach: [
        "შეიქმნა მარტივი, დროშით შთაგონებული ვიზუალური მოტივი, რომელიც მყისიერად იკითხებოდა",
        "დამზადდა მოკლე მოძრავი გრაფიკის ციკლები ყველა ძირითადი პლატფორმისთვის",
        "მესიჯი საკმარისად მოკლედ იყო დატოვებული, ხმის გარეშეც რომ ემუშავა",
      ],
      results: [
        "ვიზუალური მოტივი, რომელიც თანმიმდევრული დარჩა ყველა პოსტში",
        "მოძრავი კონტენტი, აგებული ხმის გარეშე სქროლვაზე",
        "კამპანიის იერსახე, განსხვავებული ტიპური სამოქალაქო მესიჯისგან",
      ],
    },
  },
  {
    slug: "whisky-house-of-the-month",
    categories: ["social"],
    client: "Whisky House",
    year: "2024",
    services: ["Social Media", "Graphic Design"],
    cover: null,
    gallery: [],
    updatedAt: "2026-08-15T00:00:00.000Z",
    en: {
      title: "Whisky House — Whisky of the Month",
      tagline: "A monthly ritual, told one bottle at a time.",
      summary:
        "A recurring monthly content series spotlighting a featured bottle, built to give a specialty retailer a reason to post every month.",
      challenge:
        "Specialty retail needs recurring content that feels editorial, not just promotional, to keep a niche audience engaged month over month.",
      approach: [
        "Designed a consistent monthly feature format and template",
        "Paired product photography direction with tasting-note style copy",
        "Built the series to be run independently after handoff",
      ],
      results: [
        "A recurring monthly series still running today",
        "A more editorial, less purely promotional feed",
        "A repeatable format the client's team maintains in-house",
      ],
    },
    ka: {
      title: "Whisky House — თვის ვისკი",
      tagline: "ყოველთვიური რიტუალი, მოთხრობილი ერთი ბოთლით.",
      summary:
        "განმეორებადი ყოველთვიური კონტენტ-სერია გამორჩეულ ბოთლზე ფოკუსით, რომელიც სპეციალიზებულ რითეილერს ყოველთვიური პოსტინგის მიზეზს აძლევს.",
      challenge:
        "სპეციალიზებულ საცალო ვაჭრობას სჭირდება განმეორებადი კონტენტი, რომელიც სარედაქციო შეგრძნებას იძლევა და არა მხოლოდ სარეკლამოს, თვიდან თვემდე აუდიტორიის შესანარჩუნებლად.",
      approach: [
        "დაპროექტდა ერთიანი ყოველთვიური ფორმატი და შაბლონი",
        "პროდუქტის ფოტოგრაფიის მიმართულება დაუკავშირდა დეგუსტაციის სტილის ტექსტს",
        "სერია აეწყო ისე, რომ გადაცემის შემდეგ დამოუკიდებლად ემუშავა",
      ],
      results: [
        "განმეორებადი ყოველთვიური სერია, რომელიც დღემდე გრძელდება",
        "უფრო სარედაქციო, ნაკლებად წმინდა სარეკლამო ფიდი",
        "განმეორებადი ფორმატი, რომელსაც კლიენტის გუნდი საკუთარ ძალებზე უზრუნველყოფს",
      ],
    },
  },
  {
    slug: "autodesk-reseller-social",
    categories: ["social"],
    client: "Autodesk (Regional Reseller)",
    year: "2024",
    services: ["Social Media", "Graphic Design"],
    cover: null,
    gallery: [],
    updatedAt: "2026-08-15T00:00:00.000Z",
    en: {
      title: "Autodesk — Reseller Social Media",
      tagline: "Enterprise software, made approachable on social.",
      summary:
        "Localized social content for an authorized regional reseller, translating enterprise software messaging into approachable, local-market content.",
      challenge:
        "Enterprise software marketing rarely translates well to social — the message needed to stay credible while becoming genuinely scroll-stopping.",
      approach: [
        "Localized global campaign messaging for the regional audience",
        "Simplified product messaging into social-first formats",
        "Kept visual language consistent with Autodesk's own brand system",
      ],
      results: [
        "A locally relevant feed aligned with global brand standards",
        "Clearer product messaging for a non-technical audience",
        "A consistent publishing cadence through the partnership",
      ],
    },
    ka: {
      title: "Autodesk — რეზელერის სოციალური მედია",
      tagline: "საკორპორაციო პროგრამული უზრუნველყოფა, სოციალურში ხელმისაწვდომად ქცეული.",
      summary:
        "ლოკალიზებული სოციალური კონტენტი ავტორიზებული რეგიონული რეზელერისთვის, რომელიც საკორპორაციო პროგრამული უზრუნველყოფის მესიჯს ხელმისაწვდომ, ლოკალურ კონტენტად თარგმნის.",
      challenge:
        "საკორპორაციო პროგრამული უზრუნველყოფის მარკეტინგი იშვიათად მუშაობს კარგად სოციალურში — მესიჯს სანდოობა უნდა შეენარჩუნებინა და ამავე დროს სქროლვის შემაჩერებელი გამხდარიყო.",
      approach: [
        "გლობალური კამპანიის მესიჯი მოერგო რეგიონულ აუდიტორიას",
        "პროდუქტის მესიჯი გამარტივდა სოციალურზე ორიენტირებულ ფორმატებში",
        "ვიზუალური ენა შენარჩუნდა Autodesk-ის საკუთარი ბრენდის სისტემასთან შესაბამისობაში",
      ],
      results: [
        "ლოკალურად აქტუალური ფიდი გლობალურ ბრენდის სტანდარტებთან შესაბამისობაში",
        "უფრო გასაგები პროდუქტის მესიჯი არა-ტექნიკური აუდიტორიისთვის",
        "სტაბილური პუბლიკაციის ტემპი პარტნიორობის განმავლობაში",
      ],
    },
  },
];
