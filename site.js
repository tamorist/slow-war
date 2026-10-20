/* The Slow War — 3ページ共通の設定：出典データとアクセス解析 */

/* ===================== アクセス解析（GoatCounter） =====================
   goatcounter.com で登録したサイトコードをここに書く（例：'slowwar' → https://slowwar.goatcounter.com）。
   Cookie を使わないため、同意バナーは不要。公開サイト（github.io）でのみ計測し、ローカル表示は数えない。 */
const GOATCOUNTER_CODE = 'slowwar';
(function () {
  if (!GOATCOUNTER_CODE || !/\.github\.io$/.test(location.hostname)) return;
  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://gc.zgo.at/count.js';
  s.dataset.goatcounter = `https://${GOATCOUNTER_CODE}.goatcounter.com/count`;
  document.head.appendChild(s);
})();

/* ===================== 出典データ ===================== */
const SW_GROUPS = {
  core:      { en: 'The core estimate: CO₂ and deaths', ja: '基本の推計：CO₂と死者数' },
  emissions: { en: 'Emissions and population data', ja: '排出量と人口のデータ' },
  pathways:  { en: 'Carbon budgets and pathways', ja: 'カーボンバジェットと削減の道筋' },
  tipping:   { en: 'Tipping points', ja: 'ティッピング・ポイント' },
  nature:    { en: 'Nature: sinks, the Amazon and planetary boundaries', ja: '自然：吸収源・アマゾン・地球の限界' },
  food:      { en: 'Food: emissions, land, water, pollution', ja: '食べ物：排出・土地・水・汚染' },
  land:      { en: 'Land and the carbon opportunity cost', ja: '土地と炭素の機会費用' },
  energy:    { en: 'Electricity, transport, products and shopping', ja: '電気・交通・製品・買い物' },
  war:       { en: 'War deaths (for comparison)', ja: '戦争の死者数（比較用）' },
  further:   { en: 'Further reading for everyone', ja: 'さらに知りたい人へ' },
};
const SW_SOURCES = [
  // 基本の推計
  { g: 'core', cite: 'Parncutt, R. (2019)', title: 'The Human Cost of Anthropogenic Global Warming: Semi-Quantitative Prediction and the 1,000-Tonne Rule', venue: 'Frontiers in Psychology 10: 2323', url: 'https://doi.org/10.3389/fpsyg.2019.02323',
    en: 'Where the 1,000-ton rule was first proposed: about one future premature death per 1,000 t of fossil carbon burned.',
    ja: '1,000トン・ルールが最初に提唱された論文。化石燃料の炭素1,000 tを燃やすごとに、将来の早すぎる死が約1人。' },
  { g: 'core', cite: 'Pearce, J.M. & Parncutt, R. (2023)', title: 'Quantifying Global Greenhouse Gas Emissions in Human Deaths to Guide Energy Policy', venue: 'Energies 16(16): 6074', url: 'https://doi.org/10.3390/en16166074',
    en: 'The “1,000-ton rule”: about 1 future premature death per 1,000 t of fossil carbon burned (≈ 3,664 t of CO₂). An order-of-magnitude estimate (likely 0.1–10 deaths per 1,000 tC). The basis of every death estimate on this site.',
    ja: '「1,000トン・ルール」：化石燃料の炭素1,000 t（CO₂に換算して約3,664 t）を燃やすごとに、将来の早すぎる死が約1人。桁の目安となる推計です（炭素1,000 tあたり0.1〜10人の幅）。このサイトのすべての死者数の推計の土台です。' },
  { g: 'core', cite: 'Bressler, R.D. (2021)', title: 'The mortality cost of carbon', venue: 'Nature Communications 12: 4467', url: 'https://doi.org/10.1038/s41467-021-24487-w',
    en: 'An independent estimate: about 4,434 t of CO₂ (2020 emissions) per excess death by 2100 — close to the carbon-based 1,000-ton rule. Useful for seeing how widely such estimates range.',
    ja: '独自の推計で、CO₂ 約4,434 t（2020年の排出）あたり2100年までに超過死亡1人。炭素ベースの1,000トン・ルールに近い値です。推計の幅を知るのに役立ちます。' },

  // 排出量と人口
  { g: 'emissions', cite: 'Friedlingstein, P. et al. (2026)', title: 'Global Carbon Budget 2025', venue: 'Earth System Science Data 18: 3211–3288', url: 'https://doi.org/10.5194/essd-18-3211-2026',
    en: 'Total CO₂ emissions of 42.4 Gt in 2024 (fossil ≈ 37.8 Gt plus land-use change), fossil CO₂ by country, and remaining carbon budgets from 2026: ~170 Gt (1.5 °C), 525 Gt (1.7 °C), 1,055 Gt (2 °C).',
    ja: '2024年のCO₂排出量は合計42.4 Gt（化石燃料 約37.8 Gt＋土地利用変化）。国別の化石燃料由来CO₂と、2026年初めからの残りのカーボンバジェット：約170 Gt（1.5℃）、525 Gt（1.7℃）、1,055 Gt（2℃）。' },
  { g: 'emissions', cite: 'Global Carbon Project', title: 'Global Carbon Budget (data and visuals)', venue: 'globalcarbonbudget.org', url: 'https://globalcarbonbudget.org/',
    en: 'The data behind the paper above, with charts, FAQs and downloads.', ja: '上の論文のデータ。グラフ、よくある質問、ダウンロードもあります。' },
  { g: 'emissions', cite: 'Our World in Data', title: 'CO₂ emissions', venue: 'ourworldindata.org', url: 'https://ourworldindata.org/co2-emissions',
    en: 'Explore total and per-person emissions by country. Country figures on this site were taken from here (2024).', ja: '国別の総排出量と1人あたり排出量を自由に見られます。このサイトの国別の値はここから取得しました（2024年）。' },
  { g: 'emissions', cite: 'Our World in Data', title: 'Per capita consumption-based CO₂ emissions', venue: 'chart', url: 'https://ourworldindata.org/grapher/consumption-co2-per-capita',
    en: 'CO₂ counted where goods are consumed (imports in, exports out). Basis of the “whole picture” bar in the personal simulator (2023).',
    ja: 'モノが消費される国で数えたCO₂（輸入品を含み、輸出品を除く）。個人シミュレータの「全体像」の帯の基礎です（2023年）。' },
  { g: 'emissions', cite: 'Our World in Data', title: 'Per capita greenhouse gas emissions', venue: 'chart', url: 'https://ourworldindata.org/grapher/per-capita-ghg-emissions',
    en: 'All greenhouse gases per person, used to scale consumption-based CO₂ up to all gases (2024 ratio).',
    ja: '1人あたりの温室効果ガス全体。消費ベースのCO₂を全ガスに換算する比率に使っています（2024年）。' },
  { g: 'emissions', cite: 'Hertwich, E.G. & Peters, G.P. (2009)', title: 'Carbon Footprint of Nations: A Global, Trade-Linked Analysis', venue: 'Environmental Science & Technology 43: 6414–6420', url: 'https://doi.org/10.1021/es803496a',
    en: 'Global greenhouse-gas footprint by final use: households ≈ 72%, government ≈ 10%, investment ≈ 18%. Used to split the “whole picture” bar.',
    ja: '世界の温室効果ガスを最終需要で分けると、家庭 約72%、政府 約10%、投資 約18%。「全体像」の帯の内訳に使っています。' },
  { g: 'emissions', cite: 'Ivanova, D. et al. (2016)', title: 'Environmental Impact Assessment of Household Consumption', venue: 'Journal of Industrial Ecology 20: 526–536', url: 'https://doi.org/10.1111/jiec.12371',
    en: 'Household consumption accounts for more than 60% of global greenhouse-gas emissions — a slightly lower estimate than above.',
    ja: '家庭の消費は世界の温室効果ガスの6割以上を占める、とする推計（上より少し低い値）。' },
  { g: 'emissions', cite: 'UN DESA Population Division', title: 'Household Size and Composition', venue: 'un.org', url: 'https://www.un.org/development/desa/pd/node/3587',
    en: 'Average household size by country. The personal simulator uses rounded figures (Japan 2.2, US 2.5, UK 2.4, EU 2.3, China 2.6, Russia 2.5, India 4.4, world ≈ 3.5) to share the bath, appliances and the home.',
    ja: '国ごとの平均世帯人数。個人シミュレータでは概数（日本2.2、米国2.5、英国2.4、EU 2.3、中国2.6、ロシア2.5、インド4.4、世界 約3.5）を、湯船・家電・家を分ける計算に使っています。' },
  { g: 'emissions', cite: 'United Nations', title: 'World Population Prospects', venue: 'population.un.org', url: 'https://population.un.org/wpp/',
    en: 'Population figures for countries and the world (2024 revision).', ja: '各国と世界の人口（2024年版）。' },
  { g: 'emissions', cite: '総務省統計局 / Statistics Bureau of Japan', title: '人口推計 (Population Estimates)', venue: 'stat.go.jp', url: 'https://www.stat.go.jp/data/jinsui/',
    en: 'Population of Japan.', ja: '日本の人口。' },
  { g: 'emissions', cite: '国立環境研究所 / NIES', title: '温室効果ガスインベントリオフィス (Greenhouse Gas Inventory Office of Japan)', venue: 'nies.go.jp', url: 'https://www.nies.go.jp/gio/',
    en: 'Japan’s official greenhouse-gas inventory.', ja: '日本の温室効果ガス排出量の公式な算定。' },

  // カーボンバジェットと道筋
  { g: 'pathways', cite: 'UNEP (2025)', title: 'Emissions Gap Report 2025: Off Target', venue: 'United Nations Environment Programme', url: 'https://www.unep.org/resources/emissions-gap-report-2025',
    en: 'Greenhouse-gas emissions hit a record 57.7 Gt CO₂e in 2024. By 2035 they must fall ~35% (2 °C) or ~55% (1.5 °C) below 2019. Current policies point to ~2.8 °C of warming; full national pledges to 2.3–2.5 °C.',
    ja: '2024年の温室効果ガス排出は過去最高の57.7 Gt CO₂e。2035年までに2019年比で約35%（2℃）または約55%（1.5℃）の削減が必要。現行政策のままでは約2.8℃、各国の目標をすべて実行しても2.3〜2.5℃の温暖化。' },
  { g: 'pathways', cite: 'UNEP (2024)', title: 'Emissions Gap Report 2024', venue: 'United Nations Environment Programme', url: 'https://www.unep.org/resources/emissions-gap-report-2024',
    en: 'Previous edition, which expressed the cuts needed to 2035 as about 7.5% a year (1.5 °C) and 4% a year (2 °C).',
    ja: '前年版。2035年までに必要な削減を、年約7.5%（1.5℃）、年約4%（2℃）と示していました。' },
  { g: 'pathways', cite: 'Forster, P.M. et al. (2025)', title: 'Indicators of Global Climate Change 2024', venue: 'Earth System Science Data 17', url: 'https://doi.org/10.5194/essd-17-2641-2025',
    en: 'Annual update: human-caused warming reached 1.36 °C in 2024; remaining 1.5 °C budget ~130 Gt CO₂ from the start of 2025. Budget estimates differ between studies and methods; we use the Global Carbon Budget figures.',
    ja: '毎年の更新報告：2024年の人為的な温暖化は1.36℃。1.5℃の残りのバジェットは2025年初めから約130 Gt CO₂。バジェットの推計は研究や手法で異なり、このサイトでは Global Carbon Budget の値を使っています。' },
  { g: 'pathways', cite: 'IPCC (2023)', title: 'AR6 Synthesis Report: Climate Change 2023', venue: 'ipcc.ch', url: 'https://www.ipcc.ch/report/ar6/syr/',
    en: 'The scientific consensus on pathways, carbon budgets and impacts.', ja: '削減の道筋・カーボンバジェット・影響についての科学的な合意。' },
  { g: 'pathways', cite: 'Climate Action Tracker', title: 'Temperatures', venue: 'climateactiontracker.org', url: 'https://climateactiontracker.org/global/temperatures/',
    en: 'Where current policies are heading in terms of warming.', ja: 'いまの政策のままだと、温暖化がどこまで進むかの見通し。' },

  // ティッピング
  { g: 'tipping', cite: 'Armstrong McKay, D.I. et al. (2022)', title: 'Exceeding 1.5°C global warming could trigger multiple climate tipping points', venue: 'Science 377: eabn7950', url: 'https://doi.org/10.1126/science.abn7950',
    en: 'Thresholds of major tipping elements. Background for the tipping options — the ×1.5 / ×2 / ×3 multipliers themselves are our illustrative assumptions, not from this paper.',
    ja: '主なティッピング要素の閾値。ティッピング効果の選択肢の背景です。ただし ×1.5／×2／×3 の係数そのものは、この論文ではなく私たちが置いた目安です。' },
  { g: 'tipping', cite: 'Institute and Faculty of Actuaries & University of Exeter (2025)', title: 'Planetary Solvency – finding our balance with nature', venue: 'actuaries.org.uk', url: 'https://actuaries.org.uk/planetary-solvency',
    en: 'A risk-management framework. Its impact matrix (supplementary material) puts “over 4 billion deaths” at 3 °C or more by 2050, over 2 billion at 2 °C or more, over 800 million if held to 2 °C, over 400 million at 1.5 °C after overshoot. Illustrative risk categories, not forecasts; the timeframe is not precisely defined.',
    ja: 'リスク管理の枠組みを示した報告書。付録の評価表では、2050年までに3℃以上で「40億人超の死者」、2℃以上で20億人超、2℃にとどまる場合で8億人超、1.5℃に戻る場合で4億人超としています。予測ではなくリスクの区分で、期間ははっきり定められていません。' },
  { g: 'tipping', cite: 'Lenton, T.M. et al. (2025)', title: 'Global Tipping Points Report 2025', venue: 'University of Exeter / global-tipping-points.org', url: 'https://global-tipping-points.org/',
    en: 'Warm-water coral reefs have passed their tipping point at ~1.4 °C — the first Earth-system tipping point reached. Amazon dieback and collapse of the Atlantic overturning circulation are at risk below 2 °C. Also covers positive tipping points in clean technology.',
    ja: '暖かい海のサンゴ礁が約1.4℃で臨界点を超えた（地球システムで最初に到達したティッピング・ポイント）。アマゾンの森林枯死や大西洋の海洋循環の崩壊も2℃未満で起こりうる。クリーン技術の「良いティッピング」も扱っています。' },

  { g: 'nature', cite: 'Potsdam Institute for Climate Impact Research (2025)', title: 'Planetary Health Check 2025', venue: 'planetaryhealthcheck.org / Stockholm Resilience Centre', url: 'https://www.stockholmresilience.org/news--events/general-news/2025-09-24-seven-of-nine-planetary-boundaries-now-breached.html',
    en: 'Seven of nine planetary boundaries are now breached — climate change, biosphere integrity, land-system change, freshwater use, biogeochemical flows, novel entities and (new in 2025) ocean acidification — all with worsening trends.',
    ja: '地球の限界9項目のうち7つがすでに越えられている：気候変動、生物圏の健全性、土地利用の変化、淡水利用、生物地球化学的循環（窒素・リン）、新規化学物質、海洋酸性化（2025年に新たに超過）。7つすべてが悪化傾向。' },
  { g: 'nature', cite: 'Global Carbon Project (2025)', title: 'Fossil fuel CO₂ emissions hit record high in 2025 (Global Carbon Budget 2025 press release)', venue: 'globalcarbonbudget.org', url: 'https://globalcarbonbudget.org/fossil-fuel-co2-emissions-hit-record-high-in-2025/',
    en: 'Climate change weakening the land and ocean sinks accounts for about 8% of the rise in atmospheric CO₂ since 1960; the land sink was unusually weak during the 2023–24 El Niño and recovered in 2025. Over 2015–2024 the ocean took up ~29% and the land ~21% of emissions (Global Carbon Budget 2025 paper).',
    ja: '気候変動による陸と海の吸収源の弱まりが、1960年以降の大気中CO₂の増加の約8%を占める。陸の吸収源は2023〜24年のエルニーニョ期に大きく弱まり、2025年に回復。2015〜2024年は排出の約29%を海、約21%を陸が吸収（Global Carbon Budget 2025 論文）。' },
  { g: 'nature', cite: 'WWF & Zoological Society of London (2024)', title: 'Living Planet Report 2024', venue: 'worldwildlife.org', url: 'https://www.worldwildlife.org/press-releases/catastrophic-73-decline-in-the-average-size-of-global-wildlife-populations-in-just-50-years-reveals-a-system-in-peril',
    en: 'Monitored wildlife populations fell by 73% on average from 1970 to 2020 (freshwater 85%, land 69%, ocean 56%), across ~35,000 populations of 5,495 species. Habitat loss, driven mainly by the food system, is the biggest threat.',
    ja: '観測された野生動物の個体群は1970〜2020年に平均73%減少（淡水85%、陸69%、海56%）。5,495種・約3万5,000個体群のデータ。最大の脅威は、主に食料システムによる生息地の喪失。' },
  { g: 'nature', cite: 'Alfred Wegener Institute (2025)', title: 'Global CO₂ emissions reach record high in 2025 (on the Global Carbon Budget 2025)', venue: 'awi.de', url: 'https://www.awi.de/en/about-us/service/press/single-view/default-aa218fdf7a54b0dc4a421a5cca86aef5-1.html',
    en: 'The ocean took up 29% of CO₂ emissions over the past decade, but the ocean sink has remained largely static since 2016, weakened by climate variability and the 2023–24 marine heatwave.',
    ja: '海は過去10年のCO₂排出の29%を吸収したが、2016年以降は気候の変動や2023〜24年の海洋熱波で弱められ、ほぼ横ばい。' },
  { g: 'nature', cite: 'Our World in Data', title: 'Population; Global meat production', venue: 'charts', url: 'https://ourworldindata.org/grapher/global-meat-production',
    en: 'World population 4.07 billion (1975) → 8.09 billion (2023), UN World Population Prospects; meat production 116 → 367 million t, FAO.',
    ja: '世界人口 40.7億人（1975年）→ 80.9億人（2023年、国連 世界人口推計）。肉の生産 1.16億 t → 3.67億 t（FAO）。' },
  { g: 'nature', cite: 'Pendrill, F. et al. (2019) via Our World in Data', title: 'Annual tropical deforestation by agricultural product', venue: 'chart', url: 'https://ourworldindata.org/grapher/deforestation-by-commodity',
    en: 'Average 2010–2014: cattle pasture 2.1 million ha a year (41%), oilseeds 0.95 (18%), forestry logging 0.68 (13%), other cereals 0.45, other crops ~1.0. Basis of “Why are forests lost?”. See also “Drivers of deforestation” (ourworldindata.org/drivers-of-deforestation).',
    ja: '2010〜2014年の平均：牛の牧草地 年210万 ha（41%）、油糧作物 95万（18%）、林業 68万（13%）、その他の穀物 45万、その他の作物 約100万。「森はなぜ失われるのか」の根拠です。' },
  { g: 'nature', cite: 'Our World in Data (Ritchie, H.)', title: 'Palm oil', venue: 'ourworldindata.org', url: 'https://ourworldindata.org/palm-oil',
    en: 'Uses: food 68%, industry and consumer products 27%, biofuel 5%. Yield ≈ 2.9 t/ha, ~4× sunflower or rapeseed; 36% of vegetable oil on 8.6% of oil-crop land (2017). A boycott would shift, not solve, the problem.',
    ja: '用途：食品68%、工業・日用品27%、バイオ燃料5%。収量は1 haあたり約2.9 tで、ひまわり・菜種の約4倍。植物油の36%を油の作物の土地の8.6%で生産（2017年）。不買は問題を移すだけで解決しない。' },
  { g: 'nature', cite: 'Willett, W. et al. (2019)', title: 'Food in the Anthropocene: the EAT–Lancet Commission on healthy diets from sustainable food systems', venue: 'The Lancet 393: 447–492', url: 'https://doi.org/10.1016/S0140-6736(18)31788-4',
    en: 'Defines the “planetary health diet” (2,500 kcal a day): mostly plants with modest animal foods. Globally, fruit, vegetables, nuts and legumes roughly double and red meat and sugar fall by more than half; about 11 million adult deaths a year could be averted.',
    ja: '「プラネタリー・ヘルス・ダイエット」（1日2,500 kcal）を定義：植物性中心で動物性は適量。世界全体で果物・野菜・ナッツ・豆はおよそ2倍、赤身肉と砂糖は半分以下に。年約1,100万人の成人の死を防げるとした。' },
  { g: 'nature', cite: 'EAT (2025)', title: 'New landmark EAT–Lancet Commission warns food systems breach planetary limits', venue: 'eatforum.org', url: 'https://eatforum.org/update/eat-lancet-commission-warns-food-systems-breach-planetary-limits/',
    en: 'The 2025 Commission on healthy, sustainable and just food systems: diet shifts could prevent ~15 million premature deaths a year; food systems cause ~30% of GHG and could cut them by more than half; the wealthiest 30% drive over 70% of food’s environmental impacts.',
    ja: '2025年の「健康で持続可能かつ公正な食料システム」委員会：食べ方の転換で年約1,500万人の早すぎる死を防げる。食料システムは温室効果ガスの約30%を占め、半分以上減らせる。最も豊かな30%が食の環境負荷の70%以上を生む。' },
  { g: 'nature', cite: 'Harvard T.H. Chan School of Public Health', title: 'Plate and the Planet (The Nutrition Source)', venue: 'nutritionsource.hsph.harvard.edu', url: 'https://nutritionsource.hsph.harvard.edu/plate-and-planet/',
    en: 'Lists the planetary health diet targets in grams per day (e.g. red meat 14 g ≈ 98 g a week, poultry 29 g, vegetables 300 g, legumes 50 g) with practical tips.',
    ja: 'プラネタリー・ヘルス・ダイエットの1日の目安量（例：赤身肉14 g＝週98 g、鶏肉29 g、野菜300 g、豆類50 g）と実践のヒント。' },
  { g: 'nature', cite: 'FAO (2025)', title: 'Global Forest Resources Assessment 2025 (press release: “Global deforestation slows, but forests remain under pressure”)', venue: 'fao.org', url: 'https://www.fao.org/newsroom/detail/global-deforestation-slows--but-forests-remain-under-pressure--fao-report-shows/en',
    en: 'Forests cover 4.14 billion ha (32% of land). Deforestation slowed to 10.9 million ha a year in 2015–2025 (17.6 million in 1990–2000); net loss 4.12 million ha a year.',
    ja: '森林は41.4億 ha（陸地の32%）。森林減少は2015〜2025年に年1,090万 ha（1990〜2000年は1,760万 ha）、純減は年412万 ha。' },
  { g: 'nature', cite: 'Our World in Data (Ritchie, H. 2021)', title: 'The world has lost one-third of its forests, but an end to deforestation is possible', venue: 'ourworldindata.org', url: 'https://ourworldindata.org/world-lost-one-third-forests',
    en: 'About 6 billion ha of forest 10,000 years ago, about 4 billion ha today; half of the loss happened in the last century.',
    ja: '1万年前の森林は約60億 ha、いまは約40億 ha。失われた分の半分は最近100年。' },
  { g: 'nature', cite: 'World Resources Institute / Global Forest Watch (2025)', title: 'Global forest loss shatters records in 2024, fueled by massive fires', venue: 'wri.org', url: 'https://www.wri.org/news/release-global-forest-loss-shatters-records-2024-fueled-massive-fires',
    en: 'Tropical primary forest loss reached 6.7 million ha in 2024, nearly double 2023; fires caused nearly half of it for the first time (University of Maryland GLAD data).',
    ja: '2024年の熱帯原生林の消失は670万 haで、2023年のほぼ2倍。初めて火災が約半分を占めた（メリーランド大学 GLAD のデータ）。' },
  { g: 'nature', cite: 'Gatti, L.V. et al. (2021)', title: 'Amazonia as a carbon source linked to deforestation and climate change', venue: 'Nature 595: 388–393', url: 'https://doi.org/10.1038/s41586-021-03629-6',
    en: 'From 590 aircraft profiles (2010–2018): south-eastern Amazonia acts as a net carbon source, linked to deforestation, warming and moisture stress.',
    ja: '航空機による590回の観測（2010〜2018年）から、アマゾン南東部は炭素の排出源になっている。森林破壊・温暖化・乾燥ストレスと結びつく。' },
  { g: 'nature', cite: 'Hubau, W. et al. (2020)', title: 'Asynchronous carbon sink saturation in African and Amazonian tropical forests', venue: 'Nature 579: 80–87', url: 'https://doi.org/10.1038/s41586-020-2035-0',
    en: 'The carbon sink of intact Amazon forests is in long-term decline, driven by tree mortality; African forests were stable to 2015 but are projected to decline.',
    ja: '手つかずのアマゾンの森の吸収は、木の枯死の増加で長期的に低下。アフリカの森は2015年まで安定していたが、今後低下すると予測。' },
  { g: 'nature', cite: 'Flores, B.M. et al. (2024)', title: 'Critical transitions in the Amazon forest system', venue: 'Nature 626: 555–564', url: 'https://doi.org/10.1038/s41586-023-06970-0',
    en: 'The Amazon stores 150–200 Pg of carbon (15–20 years of global CO₂ emissions), holds over 10% of Earth’s terrestrial biodiversity, supplies up to 50% of the region’s rainfall and moisture across South America, and is home to over 40 million people (2.2 million Indigenous). By 2050, 10–47% of the forest may face compounding disturbances. Basis of “If the Amazon tips”.',
    ja: 'アマゾンは炭素150〜200 Pg（世界のCO₂排出の15〜20年分）をたくわえ、陸の生物多様性の1割以上を抱え、地域の雨の最大50%と南米各地への水分を供給し、4,000万人以上（先住民220万人）が暮らす。2050年までに森の10〜47%が重なり合う撹乱にさらされうる。「もしアマゾンが限界を越えたら」の根拠です。' },
  { g: 'nature', cite: 'Wunderling, N. et al. (2026)', title: 'Deforestation-induced drying lowers Amazon climate threshold', venue: 'Nature 654: 114–120', url: 'https://doi.org/10.1038/s41586-026-10456-0',
    en: 'Without deforestation, up to a third of the forest risks losing stability beyond 3.7–4.0 °C. With 22–28% deforestation, a near system-wide transition (62–77% of the area) could occur at only 1.5–1.9 °C.',
    ja: '森林破壊がなければ、3.7〜4.0℃を超えると森の最大3分の1が不安定化。森林減少22〜28%が重なると、1.5〜1.9℃でも森の62〜77%がほぼ全体で転換しうる。' },
  { g: 'nature', cite: 'Lovejoy, T.E. & Nobre, C. (2018)', title: 'Amazon Tipping Point', venue: 'Science Advances 4: eaat2340', url: 'https://doi.org/10.1126/sciadv.aat2340',
    en: 'Deforestation, warming and fire together point to a tipping point at 20–25% deforestation, beyond which eastern, southern and central Amazonia could flip to non-forest. Basis of the danger zone in the Amazon gauge.',
    ja: '森林破壊・温暖化・火災が重なると、森林減少20〜25%でアマゾン東部・南部・中部が森林でなくなる転換点に達しうる、とする論説。アマゾンのティッピング計の危険域の根拠です。' },
  { g: 'nature', cite: 'Lovejoy, T.E. & Nobre, C. (2019)', title: 'Amazon tipping point: Last chance for action', venue: 'Science Advances 5: eaba2949', url: 'https://doi.org/10.1126/sciadv.aba2949',
    en: 'Deforestation at 17% across the Amazon basin and approaching 20% in the Brazilian Amazon; about 23% of the destroyed area is abandoned pasture and cropland that could be reforested.',
    ja: 'アマゾン流域全体で森林の17%、ブラジル側で20%近くが失われている。失われた面積の約23%は放棄された牧草地や畑で、森林の回復が可能。' },

  // 食べ物
  { g: 'food', cite: 'Poore, J. & Nemecek, T. (2018)', title: 'Reducing food’s environmental impacts through producers and consumers', venue: 'Science 360: 987–992', url: 'https://doi.org/10.1126/science.aaq0216',
    en: 'The main food dataset: emissions by supply-chain stage, land use, water use and eutrophication for ~40 foods.',
    ja: '食べ物の主なデータ：約40品目について、サプライチェーン段階別の排出、土地利用、水使用、富栄養化。' },
  { g: 'food', cite: 'Our World in Data', title: 'Environmental impacts of food production', venue: 'ourworldindata.org', url: 'https://ourworldindata.org/environmental-impacts-of-food',
    en: 'An accessible guide to the dataset above. Food’s share of the planet: 26% of greenhouse gases, half of habitable land, 70% of freshwater withdrawals, 78% of eutrophication; livestock uses about 3/4 of farmland but gives 18% of calories and 37% of protein.',
    ja: '上のデータをわかりやすく解説したページ。食べ物が占める割合：温室効果ガスの26%、人が住める土地の半分、淡水取水の70%、富栄養化の78%。家畜は農地の約4分の3を使うが、カロリーの18%、たんぱく質の37%しか生まない。' },
  { g: 'food', cite: 'Our World in Data (Ritchie, H. 2021)', title: 'If the world adopted a plant-based diet, we would reduce global agricultural land use from 4 to 1 billion hectares', venue: 'ourworldindata.org', url: 'https://ourworldindata.org/land-use-diets',
    en: 'Farmland needed if everyone ate a given diet (Poore & Nemecek 2018): today 4.13 billion ha; no beef or mutton 2.21; no beef, mutton or dairy 1.1; eggs and fish only 1.01; vegan 1.0. Also: only 7% of soy is eaten directly by people. Basis of “If the whole world ate differently”.',
    ja: '世界中が同じ食べ方をした場合に必要な農地（Poore & Nemecek 2018）：いま41.3億 ha、牛肉・羊肉なし22.1億、牛肉・羊肉・乳製品なし11億、卵と魚だけ10.1億、ヴィーガン10億。大豆のうち人が直接食べるのは7%だけ。「世界の食べ方が変わったら」の根拠です。' },
  { g: 'food', cite: 'Our World in Data', title: 'Food: greenhouse gas emissions across the supply chain', venue: 'chart', url: 'https://ourworldindata.org/grapher/food-emissions-supply-chain',
    en: 'Stage breakdown used for meals (median values).', ja: '食事の段階別の内訳に使用（中央値）。' },
  { g: 'food', cite: 'Our World in Data', title: 'Greenhouse gas emissions per 100 grams of protein', venue: 'chart', url: 'https://ourworldindata.org/grapher/ghg-per-protein-poore',
    en: 'Per-protein comparison of foods.', ja: 'たんぱく質あたりの比較。' },
  { g: 'food', cite: 'Our World in Data', title: 'Land use per kilogram of food product', venue: 'chart', url: 'https://ourworldindata.org/grapher/land-use-per-kg-poore',
    en: 'Land use by food (mean values).', ja: '食品別の土地利用（平均値）。' },
  { g: 'food', cite: 'Our World in Data', title: 'Freshwater withdrawals per kilogram of food product', venue: 'chart', url: 'https://ourworldindata.org/grapher/water-withdrawals-per-kg-poore',
    en: 'Water use by food (mean values).', ja: '食品別の淡水使用（平均値）。' },
  { g: 'food', cite: 'Our World in Data', title: 'Eutrophying emissions per kilogram of food product', venue: 'chart', url: 'https://ourworldindata.org/grapher/eutrophying-emissions-per-kg-poore',
    en: 'Water pollution from nutrient run-off by food (mean values).', ja: '食品別の栄養塩の流出による水質汚染（平均値）。' },
  { g: 'food', cite: 'IPCC (2021)', title: 'AR6 WGI Chapter 7: The Earth’s energy budget, climate feedbacks and climate sensitivity', venue: 'ipcc.ch', url: 'https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-7/',
    en: 'Methane’s warming power (GWP): roughly 27–30× CO₂ over 100 years and ~80× over 20 years.', ja: 'メタンの温暖化係数（GWP）：100年でCO₂の約27〜30倍、20年で約80倍。' },
  { g: 'food', cite: 'Our World in Data', title: 'Soy', venue: 'ourworldindata.org', url: 'https://ourworldindata.org/soy',
    en: 'Most of the world’s soy is used for animal feed.', ja: '世界の大豆の大部分は家畜の飼料に使われています。' },
  { g: 'food', cite: 'Our World in Data', title: 'Meat and dairy production', venue: 'ourworldindata.org', url: 'https://ourworldindata.org/meat-production',
    en: 'How many animals are raised and slaughtered for food.', ja: '食用に飼育・と畜される動物の数。' },
  { g: 'food', cite: 'FAO', title: 'FAOSTAT', venue: 'fao.org', url: 'https://www.fao.org/faostat/',
    en: 'UN statistics on livestock, production and slaughter.', ja: '家畜・生産量・と畜数についての国連の統計。' },

  // 土地
  { g: 'land', cite: 'Searchinger, T.D. et al. (2018)', title: 'Assessing the efficiency of changes in land use for mitigating climate change', venue: 'Nature 564: 249–253', url: 'https://doi.org/10.1038/s41586-018-0757-z',
    en: 'Introduces the “carbon opportunity cost” of using land for food.', ja: '食料生産に土地を使うことの「炭素の機会費用」を示した研究。' },
  { g: 'land', cite: 'Hayek, M.N. et al. (2021)', title: 'The carbon opportunity cost of animal-sourced food production on land', venue: 'Nature Sustainability 4: 21–24', url: 'https://doi.org/10.1038/s41893-020-00603-4',
    en: 'How much CO₂ could be drawn down if land used for animal foods were restored.', ja: '動物性食品に使われている土地を自然に戻した場合に吸収できるCO₂の量。' },
  { g: 'land', cite: 'Cook-Patton, S.C. et al. (2020)', title: 'Mapping carbon accumulation potential from global natural forest regrowth', venue: 'Nature 585: 545–550', url: 'https://doi.org/10.1038/s41586-020-2686-x',
    en: 'How fast regrowing forests absorb carbon. A guide for the absorption-rate slider.', ja: '自然に回復する森林が炭素を吸収する速さ。吸収量スライダーの目安です。' },

  { g: 'nature', cite: 'INPE & Embrapa (2016)', title: 'TerraClass Amazônia 2014: land use and cover in deforested areas of the Brazilian Legal Amazon', venue: 'gov.br/inpe', url: 'https://www.gov.br/inpe/pt-br/area-conhecimento/unidade-amazonia/repositorio-de-arquivos/terraclass_2014_v3.pdf',
    en: 'Of 762,464 km² deforested by 2014, pasture covered 479,760 km² (≈ 63%), a share stable since 2004.',
    ja: '2014年までに森林が失われた762,464 km²のうち、牧草地が479,760 km²（約63%）。2004年以降ほぼ横ばい。' },

  // 電気・交通・製品
  { g: 'energy', cite: 'Ember', title: 'Electricity data', venue: 'ember-energy.org', url: 'https://ember-energy.org/data/',
    en: 'Carbon intensity of electricity by country.', ja: '国別の電力のCO₂排出係数。' },
  { g: 'energy', cite: 'Our World in Data', title: 'Carbon intensity of electricity generation', venue: 'chart', url: 'https://ourworldindata.org/grapher/carbon-intensity-electricity',
    en: 'Grid factors used for air-con, appliances and electric cars.', ja: 'エアコン・家電・電気自動車の計算に使う電力の排出係数。' },
  { g: 'energy', cite: 'UK Government (DESNZ)', title: 'Greenhouse gas reporting: conversion factors', venue: 'gov.uk', url: 'https://www.gov.uk/government/collections/government-conversion-factors-for-company-reporting',
    en: 'Typical per-km factors for cars, buses, trains and flights.', ja: '車・バス・電車・飛行機の1 kmあたりの代表的な排出係数。' },
  { g: 'energy', cite: '国土交通省 / MLIT Japan', title: '運輸部門における二酸化炭素排出量 (CO₂ emissions in the transport sector)', venue: 'mlit.go.jp', url: 'https://www.mlit.go.jp/sogoseisaku/environment/sosei_environment_tk_000007.html',
    en: 'Per-passenger-km comparison of transport modes in Japan.', ja: '日本の交通手段別の、輸送量あたりのCO₂排出量。' },
  { g: 'energy', cite: 'IGES, Aalto University & D-mat (2019)', title: '1.5-Degree Lifestyles: Targets and Options for Reducing Lifestyle Carbon Footprints', venue: 'Sitra Studies 149', url: 'https://www.sitra.fi/wp-content/uploads/2019/06/1-5-degree-lifestyles.pdf',
    en: 'Lifestyle carbon footprints: Japan ≈ 7.6 t per person a year, of which consumer goods ≈ 1,030 kg (≈ 14%). Basis for the “everything else you buy” levels.',
    ja: '生活由来の排出：日本は1人年約7.6 tで、うち消費財（モノ）が約1,030 kg（約14%）。「その他のモノ」の目安の根拠です。' },
  { g: 'energy', cite: 'Hot or Cool Institute (2021)', title: '1.5-Degree Lifestyles: Towards a Fair Consumption Space for All', venue: 'hotorcool.org', url: 'https://hotorcool.org/wp-content/uploads/2021/10/Hot_or_Cool_1_5_lifestyles_FULL_REPORT_AND_ANNEX_B.pdf',
    en: 'Lifestyle footprints for 10 countries (2019, Table 3.1), incl. consumer goods: Canada 2.5 t, Finland 1.4 t, UK 1.0 t, Japan 1.0 t, China 0.4 t, India under 0.1 t per person a year. The “high-income” reference on this site is our average of the first four. Values vary a lot with method; use as a rough guide.',
    ja: '10か国の生活由来の排出（2019年、表3.1）。消費財（モノ）は1人年あたり、カナダ2.5 t、フィンランド1.4 t、英国1.0 t、日本1.0 t、中国0.4 t、インド0.1 t未満。このサイトの「高所得国」の参考値は、最初の4か国から私たちが計算した平均です。手法で値が大きく変わるため、目安として使っています。' },
  { g: 'energy', cite: '国土交通省 / MLIT Japan', title: '住宅・建築物に係る二酸化炭素の排出量及び削減量について (CO₂ emissions from housing and buildings)', venue: 'mlit.go.jp', url: 'https://www.mlit.go.jp/common/000224667.pdf',
    en: 'Building a 126 m² detached house: about 34 t CO₂ (wood), 64 t (reinforced concrete), 57 t (steel) — an estimate by the Wood Miles research group. Used for “building a house”.',
    ja: '床面積約126 m²の戸建てを建てると、木造で約34 t、鉄筋コンクリート造で約64 t、鉄骨造で約57 tのCO₂（ウッドマイルズ研究会の試算）。「家を建てる」の値に使っています。' },
  { g: 'energy', cite: 'ADEME', title: 'Impact CO2 — Électroménager (household appliances)', venue: 'impactco2.fr', url: 'https://impactco2.fr/outils/electromenager',
    en: 'Footprints of household appliances split into making and use. We use the making share: refrigerator ≈ 250 kg, air conditioner ≈ 310 kg CO₂e. (Use is already counted under electricity; refrigerant leaks are not included.)',
    ja: '家電の排出を「製造」と「使用」に分けて示すフランス環境・エネルギー管理庁のデータ。このサイトでは製造の分（冷蔵庫 約250 kg、エアコン 約310 kg）を使っています（使用中の電気は「冷暖房・電気」で数えるため。冷媒の漏れは含みません）。' },
  { g: 'energy', cite: '内閣府 / Cabinet Office of Japan', title: '消費動向調査 (Consumer Confidence Survey: durable goods)', venue: 'esri.cao.go.jp', url: 'https://www.esri.cao.go.jp/jp/stat/shouhi/shouhi.html',
    en: 'Average years of use in Japan: refrigerator ≈ 12–13, air conditioner ≈ 13.5. Used for replacement intervals.',
    ja: '日本の平均使用年数：冷蔵庫 約12〜13年、エアコン 約13.5年。買い替えの間隔に使っています。' },
  { g: 'energy', cite: 'ADEME', title: 'Impact CO2 — Mobilier (furniture)', venue: 'impactco2.fr', url: 'https://impactco2.fr/outils/mobilier',
    en: 'Footprints of furniture: wooden chair ≈ 19 kg, wooden table ≈ 80 kg, fabric sofa ≈ 179 kg, bed ≈ 444 kg, wardrobe ≈ 907 kg CO₂e. Used for the bed (lifetime is our assumption).',
    ja: '家具の排出：木の椅子 約19 kg、木のテーブル 約80 kg、布のソファ 約179 kg、ベッド 約444 kg、洋服ダンス 約907 kg。ベッドの値に使っています（使用年数は私たちの想定）。' },
  { g: 'energy', cite: 'Transport & Environment', title: 'Are electric cars really more climate-friendly than other cars?', venue: 'transportenvironment.org', url: 'https://www.transportenvironment.org/discover/are-electrics-really-more-climate-friendly-other-cars',
    en: 'Making a car: several tonnes of CO₂ before it is driven; more for electric cars because of the battery. We use ≈ 7 t for a small-to-mid petrol car (studies range ~6–8.5 t).',
    ja: '車は走る前の製造だけで数トンのCO₂を出し、電気自動車は電池の分だけ多くなります。このサイトでは小〜中型のガソリン車を約7 tとしています（研究によって約6〜8.5 t）。' },
  { g: 'energy', cite: 'Berners-Lee, M. (2020)', title: 'How Bad Are Bananas? The Carbon Footprint of Everything (revised ed.)', venue: 'Profile Books', url: '',
    en: 'Rough footprints of everyday items. Shopping values on this site are approximations in this spirit; check before citing.',
    ja: '身の回りのものの排出量の目安。このサイトの買い物の値も同様の概算なので、引用する前に確認してください。' },

  // 戦争
  { g: 'war', cite: 'Wikipedia', title: 'World War II casualties', venue: 'en.wikipedia.org', url: 'https://en.wikipedia.org/wiki/World_War_II_casualties',
    en: 'Estimates of 70–85 million deaths (we use 80 million), with links to primary sources.', ja: '死者数の推計は7,000万〜8,500万人（このサイトでは8,000万人）。一次資料へのリンクもあります。' },
  { g: 'war', cite: 'Wikipedia', title: 'World War I casualties', venue: 'en.wikipedia.org', url: 'https://en.wikipedia.org/wiki/World_War_I_casualties',
    en: 'Estimates of around 15–22 million deaths (we use 20 million).', ja: '死者数の推計は約1,500万〜2,200万人（このサイトでは2,000万人）。' },

  // さらに知りたい人へ
  { g: 'further', cite: 'Our World in Data', title: 'CO₂ and Greenhouse Gas Emissions', venue: 'ourworldindata.org', url: 'https://ourworldindata.org/co2-and-greenhouse-gas-emissions',
    en: 'The best starting point for exploring emissions data.', ja: '排出量のデータを調べ始めるのに最適なページ。' },
  { g: 'further', cite: 'Ritchie, H. (2020)', title: 'You want to reduce the carbon footprint of your food? Focus on what you eat, not whether your food is local', venue: 'Our World in Data', url: 'https://ourworldindata.org/food-choice-vs-eating-local',
    en: 'Why what you eat matters far more than food miles.', ja: '食べ物の輸送距離より、何を食べるかのほうがはるかに重要な理由。' },
  { g: 'further', cite: 'Carbon Brief', title: 'Clear on climate', venue: 'carbonbrief.org', url: 'https://www.carbonbrief.org/',
    en: 'Reliable explainers and analysis of climate science and policy.', ja: '気候科学と政策についての信頼できる解説と分析。' },
  { g: 'further', cite: 'Project Drawdown', title: 'Climate solutions', venue: 'drawdown.org', url: 'https://drawdown.org/',
    en: 'What works to reduce emissions, ranked and explained.', ja: '排出削減に効く対策を、比較しながら解説しています。' },
];

/* 指定したグループの出典を container に描画する */
function swRenderSources(container, lang, groups, limit) {
  if (!container) return;
  const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
  let idx = 0;
  const html = (groups || Object.keys(SW_GROUPS)).map(g => {
    const items = SW_SOURCES.filter(s => s.g === g);
    if (!items.length) return '';
    const first = idx;
    const lis = items.map(s => `<li${limit && idx++ >= limit ? ' class="src-more"' : ''}>
      ${s.url ? `<a href="${s.url}" target="_blank" rel="noopener">${esc(s.title)}</a>` : `<i>${esc(s.title)}</i>`}
      <span class="src-cite">— ${esc(s.cite)}${s.venue ? ', ' + esc(s.venue) : ''}</span>
      <span class="src-use">${s[lang]}</span></li>`).join('');
    if (!limit) idx += items.length;
    return `<div class="src-group${limit && first >= limit ? ' src-more' : ''}"><h4>${SW_GROUPS[g][lang]}</h4><ul>${lis}</ul></div>`;
  }).join('');
  // limit を指定したページでは、最初の数件だけ見せて残りは「続きを表示」で開く
  const rest = limit ? idx - limit : 0;
  container.classList.toggle('src-collapsed', rest > 0);
  container.innerHTML = html + (rest > 0 ? `<button type="button" class="src-toggle" data-more="${lang === 'ja' ? `続きを表示（あと${rest}件）` : `Show ${rest} more`}" data-less="${lang === 'ja' ? '閉じる' : 'Show less'}">${lang === 'ja' ? `続きを表示（あと${rest}件）` : `Show ${rest} more`}</button>` : '');
  const btn = container.querySelector('.src-toggle');
  if (btn) btn.onclick = () => { const c = container.classList.toggle('src-collapsed'); btn.textContent = c ? btn.dataset.more : btn.dataset.less; };
}

/* 出典リストの共通スタイル（各ページの配色を currentColor で引き継ぐ） */
(function () {
  const css = `.src-group { margin-top: 22px; }
.src-group h4 { font-size: 13px; letter-spacing: .04em; margin: 0 0 8px; opacity: .85; }
.src-group ul { list-style: none; padding: 0; margin: 0; }
.src-group li { padding: 8px 0; border-top: 1px solid rgba(128,128,128,.25); font-size: 13.5px; line-height: 1.55; }
.src-group li a { color: inherit; font-weight: 600; text-underline-offset: 3px; }
.src-cite { opacity: .7; font-size: 12.5px; }
.src-use { display: block; opacity: .75; font-size: 12.5px; margin-top: 2px; }
.src-collapsed .src-more { display: none; }
.src-toggle { margin-top: 12px; font: inherit; font-size: 13px; font-weight: 700; color: inherit; background: transparent; border: 1px solid rgba(128,128,128,.5); border-radius: 999px; padding: 7px 16px; cursor: pointer; }
.src-toggle:hover { border-color: #e5483b; }`;
  const st = document.createElement('style');
  st.textContent = css;
  document.head.appendChild(st);
})();

/* ===================== 共通ナビゲーション ===================== */
// color：ページごとのテーマ色（メニューの点・カード・浮きボタンで共通に使う）
const SW_PAGES = [
  { file: 'index.html', icon: '●', color: '#e5483b',
    en: { nav: 'Story', title: 'The story', desc: 'How today’s emissions become tomorrow’s deaths — compared with history’s deadliest wars.', cta: 'Read the story' },
    ja: { nav: 'ストーリー', title: 'ストーリー', desc: '今日の排出が、未来の犠牲者になるまで。史上最悪の戦争と比べて見る。', cta: 'ストーリーを読む' } },
  { file: 'my-day.html', icon: '◔', color: '#f2a93b', featured: true,
    en: { nav: 'Your day', title: 'What does YOUR day add up to?', desc: 'Pick your travel, meals, heating and shopping. See what your day means in lives — if everyone in your country, or on Earth, lived it.', cta: 'Try the personal simulator', float: 'Your day: how many lives?' },
    ja: { nav: 'あなたの1日', title: 'あなたの1日は、何人分？', desc: '移動・食事・冷暖房・買い物を選ぶだけ。あなたの1日を、国や世界の全員でかけ算すると、命の数でいくつになるか。', cta: '個人シミュレータを試す', float: 'あなたの1日は、何人分？' } },
  { file: 'simulator.html', icon: '◐', color: '#4f9be8',
    en: { nav: 'Simulator', title: 'Detailed simulator', desc: 'Change emissions, region, tipping effects and pathways yourself, and watch the numbers move.', cta: 'Open simulator' },
    ja: { nav: 'シミュレータ', title: '詳細シミュレータ', desc: '排出量・国・ティッピング効果・削減の道筋を自分で動かして、数字の変化を見る。', cta: 'シミュレータへ' } },
  { file: 'nature.html', icon: '❦', color: '#4fb38a',
    en: { nav: 'Beyond carbon', title: 'Beyond carbon: food and nature', desc: 'The fight is also about keeping nature healthy: what food takes from land and water, the Amazon tipping gauge, and foods compared beyond carbon.', cta: 'Explore' },
    ja: { nav: '炭素だけではない', title: '炭素だけではない：食べ物と自然', desc: 'これは自然を守る戦いでもある。食べ物が使う土地と水、アマゾンのティッピング計、炭素以外の指標での食材の比較。', cta: '見てみる' } },
  { file: 'sources.html', icon: '≡', color: '#9aa9ba',
    en: { nav: 'Sources & data', title: 'Sources & data', desc: 'Every number traced to its source, the key assumptions, and further reading.', cta: 'See sources' },
    ja: { nav: '出典とデータ', title: '出典とデータ', desc: 'すべての数値の出典と主な前提、さらに知りたい人への資料。', cta: '出典へ' } },
];
const SW_NAV_ORDER = ['index.html', 'simulator.html', 'my-day.html', 'nature.html', 'sources.html'];
const SW_UI = {
  en: { brand: 'The Slow War', next: 'Next: try it yourself', nextSub: 'Big numbers can feel distant. See what your own day adds up to.', next2: 'Keep exploring', nextSub2: 'See the bigger picture, or trace every number to its source.', rec: 'Recommended', close: 'Close' },
  ja: { brand: '静かな戦争', next: '次は、自分で試してみる', nextSub: '大きな数字は遠く感じがちです。次は、あなた自身の1日に引き寄せてみましょう。', next2: 'さらに探る', nextSub2: '全体像を見る、またはすべての数値の出典をたどる。', rec: 'おすすめ', close: '閉じる' },
};
const swCurrent = () => { const f = location.pathname.split('/').pop(); return f && f.endsWith('.html') ? f : 'index.html'; };
const swPage = f => SW_PAGES.find(p => p.file === f);

/* ページ最上部のメニュー（各ページの描画関数から言語つきで呼ぶ） */
function swNav(lang) {
  let nav = document.querySelector('.sw-nav');
  if (!nav) { nav = document.createElement('nav'); nav.className = 'sw-nav'; nav.setAttribute('aria-label', 'Site'); document.body.prepend(nav); }
  const cur = swCurrent(), ui = SW_UI[lang];
  nav.innerHTML = `<div class="sw-nav-in"><a class="sw-brand" href="index.html"><i></i>${ui.brand}</a><div class="sw-tabs">${SW_NAV_ORDER.map(swPage).map(p =>
    `<a href="${p.file}" class="sw-tab${p.file === cur ? ' on' : ''}${p.featured ? ' feat' : ''}" style="--c:${p.color}"${p.file === cur ? ' aria-current="page"' : ''}><i></i>${p[lang].nav}</a>`).join('')}</div></div>`;
  // 狭い画面ではタブが横にスクロールするので、現在のページのタブを見える位置に寄せる
  const tabs = nav.querySelector('.sw-tabs'), on = nav.querySelector('.sw-tab.on');
  if (tabs && on && tabs.scrollWidth > tabs.clientWidth) tabs.scrollLeft = on.offsetLeft - (tabs.clientWidth - on.offsetWidth) / 2;
  swFooterSource(lang);
  swFloat(lang);
}

/* フッターの末尾に GitHub のソースへのリンクを付ける（フッターの文言が描画された後に呼ぶ） */
const SW_REPO = 'https://github.com/tamorist/slow-war';
function swFooterSource(lang) {
  document.querySelectorAll('footer').forEach(f => {
    f.querySelector('.sw-src')?.remove();
    const span = document.createElement('span');
    span.className = 'sw-src';
    const sep = lang === 'ja' ? ' ・ ' : ' · ';
    span.innerHTML = `${sep}<a href="${SW_REPO}" target="_blank" rel="noopener">${lang === 'ja' ? 'ソースコードを見る（GitHub）' : 'View source on GitHub'}</a>`
      + `<br><span class="sw-lic">${lang === 'ja' ? 'コード' : 'Code'}: <a href="${SW_REPO}/blob/main/LICENSE" target="_blank" rel="noopener license">MIT</a>${sep}`
      + `${lang === 'ja' ? 'コンテンツ' : 'Content'}: <a href="https://creativecommons.org/licenses/by/4.0/${lang === 'ja' ? 'deed.ja' : ''}" target="_blank" rel="noopener license">CC BY 4.0</a>${sep}`
      + `<a href="sources.html#license">${lang === 'ja' ? '使い方とクレジット' : 'How to reuse'}</a></span>`;
    f.appendChild(span);
  });
}

/* 他のページへの大きなカード（現在のページは除く。個人シミュレータは「おすすめ」として大きく表示） */
function swNext(container, lang) {
  if (!container) return;
  const cur = swCurrent(), ui = SW_UI[lang];
  const pages = SW_PAGES.filter(p => p.file !== cur), feat = pages.some(p => p.featured);
  container.innerHTML = `<div class="sw-next"><h3>${feat ? ui.next : ui.next2}</h3><p class="sw-next-sub">${feat ? ui.nextSub : ui.nextSub2}</p><div class="sw-cards ${feat ? 'f' : 'n'}${pages.length}">${pages.map(p =>
    `<a class="sw-card${p.featured ? ' feat' : ''}" href="${p.file}" style="--c:${p.color}">
      ${p.featured ? `<span class="sw-rec">${ui.rec}</span>` : ''}
      <span class="sw-ic">${p.icon}</span><b>${p[lang].title}</b><span class="sw-d">${p[lang].desc}</span>
      <span class="sw-btn">${p[lang].cta} →</span></a>`).join('')}</div></div>`;
}

/* 画面の隅に出る浮きボタン（個人シミュレータへ）。最初の画面を過ぎてから表示し、閉じたら同じ訪問中は出さない */
let swFloatClosed = false;
function swFloat(lang) {
  const cur = swCurrent(), p = swPage('my-day.html');
  if (cur === 'my-day.html' || swFloatClosed) return;
  let f = document.querySelector('.sw-float');
  if (!f) {
    f = document.createElement('div');
    f.className = 'sw-float';
    document.body.appendChild(f);
    const onScroll = () => {
      const next = document.getElementById('next'), r = next && next.getBoundingClientRect();
      const nearCards = r && r.top < innerHeight && r.bottom > 0;   // カードが見えている間は隠す
      f.classList.toggle('show', scrollY > innerHeight * 0.7 && !nearCards && !swFloatClosed);
    };
    addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
  f.innerHTML = `<a href="${p.file}" style="--c:${p.color}"><span class="sw-ic">${p.icon}</span>${p[lang].float}<b>→</b></a>
    <button type="button" aria-label="${SW_UI[lang].close}">×</button>`;
  f.querySelector('button').onclick = () => { swFloatClosed = true; f.classList.remove('show'); };
}

(function () {
  const css = `.sw-nav { background: #0b0c0e; color: #ecebe7; border-bottom: 1px solid #2a2d31; font-family: Inter, "Noto Sans JP", -apple-system, "Hiragino Sans", sans-serif; }
.sw-nav-in { max-width: 1080px; margin: 0 auto; padding: 8px 16px; display: flex; align-items: center; gap: 12px 20px; flex-wrap: wrap; }
.sw-brand { display: inline-flex; align-items: center; gap: 8px; color: #ecebe7; text-decoration: none; font-weight: 800; font-size: 14px; letter-spacing: .02em; white-space: nowrap; }
.sw-brand i { width: 10px; height: 10px; border-radius: 50%; background: #e5483b; box-shadow: 0 0 0 4px rgba(229,72,59,.2); }
.sw-tabs { display: flex; gap: 6px; overflow-x: auto; scrollbar-width: none; margin-left: auto; }
.sw-tabs::-webkit-scrollbar { display: none; }
.sw-tab { display: inline-flex; align-items: center; gap: 7px; white-space: nowrap; font-size: 13px; color: #c9c8c3; text-decoration: none; padding: 6px 14px;
  border-radius: 999px; border: 1px solid #34373c; transition: background .15s, border-color .15s; }
.sw-tab i { width: 7px; height: 7px; border-radius: 50%; background: var(--c); }
.sw-tab:hover { border-color: var(--c); color: #fff; }
.sw-tab.feat:not(.on) { border-color: var(--c); color: #fff; background: color-mix(in srgb, var(--c) 18%, transparent); font-weight: 700; }
.sw-tab.on { background: #ecebe7; color: #0e0f11; border-color: #ecebe7; font-weight: 700; }
@media (max-width: 560px) { .sw-tabs { margin-left: 0; width: 100%; } }

.sw-next { margin: 8px 0; font-family: Inter, "Noto Sans JP", -apple-system, "Hiragino Sans", sans-serif; }
.sw-next h3 { font-size: clamp(22px, 3.6vw, 28px); font-weight: 900; margin: 0 0 6px; line-height: 1.3; }
.sw-next-sub { font-size: 14px; opacity: .75; margin: 0 0 18px; }
.sw-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 14px; }
@media (min-width: 760px) { .sw-cards { grid-template-columns: repeat(4, 1fr); } .sw-cards.n3, .sw-cards.f4 { grid-template-columns: repeat(3, 1fr); } .sw-card.feat { grid-column: span 2; } .sw-cards.f4 .sw-card.feat { grid-column: 1 / -1; } }
.sw-card { position: relative; display: flex; flex-direction: column; gap: 8px; padding: 22px; border-radius: 18px; text-decoration: none; color: inherit;
  border: 2px solid color-mix(in srgb, var(--c) 60%, transparent);
  background: linear-gradient(145deg, color-mix(in srgb, var(--c) 26%, transparent), color-mix(in srgb, var(--c) 6%, transparent));
  box-shadow: 0 10px 30px -14px color-mix(in srgb, var(--c) 70%, transparent);
  transition: transform .18s, box-shadow .18s, border-color .18s; }
.sw-card:hover { transform: translateY(-3px); border-color: var(--c); box-shadow: 0 16px 38px -12px color-mix(in srgb, var(--c) 85%, transparent); }
.sw-card.feat { padding: 26px; border-width: 2px; background: linear-gradient(145deg, color-mix(in srgb, var(--c) 42%, transparent), color-mix(in srgb, var(--c) 12%, transparent)); }
.sw-ic { width: 38px; height: 38px; border-radius: 50%; display: grid; place-items: center; font-size: 18px; line-height: 1;
  background: var(--c); color: #111; }
.sw-card b { font-size: 18px; line-height: 1.35; }
.sw-card.feat b { font-size: clamp(20px, 2.6vw, 26px); }
.sw-d { font-size: 13.5px; opacity: .85; line-height: 1.6; flex: 1; }
.sw-btn { align-self: flex-start; margin-top: 8px; font-size: 14px; font-weight: 800; color: #111; background: var(--c); border-radius: 999px; padding: 9px 18px; }
.sw-card.feat .sw-btn { font-size: 15px; padding: 11px 22px; }
.sw-rec { position: absolute; top: 16px; right: 16px; font-size: 11.5px; font-weight: 800; letter-spacing: .06em; color: #111; background: var(--c); border-radius: 999px; padding: 3px 10px; }
.sw-src a { color: inherit; }
.sw-lic { display: inline-block; margin-top: 6px; opacity: .85; }
.sw-lic a { color: inherit; }

.sw-float { position: fixed; right: 16px; bottom: 16px; z-index: 30; display: flex; align-items: center; gap: 6px; opacity: 0; transform: translateY(16px);
  pointer-events: none; transition: opacity .3s, transform .3s; font-family: Inter, "Noto Sans JP", -apple-system, "Hiragino Sans", sans-serif; }
.sw-float.show { opacity: 1; transform: none; pointer-events: auto; }
.sw-float a { display: inline-flex; align-items: center; gap: 10px; text-decoration: none; color: #111; background: var(--c); font-weight: 800; font-size: 14px;
  padding: 8px 18px 8px 8px; border-radius: 999px; box-shadow: 0 10px 28px -8px rgba(0,0,0,.6), 0 0 0 4px color-mix(in srgb, var(--c) 30%, transparent); }
.sw-float a .sw-ic { width: 30px; height: 30px; font-size: 15px; background: #111; color: var(--c); }
.sw-float button { width: 28px; height: 28px; border-radius: 50%; border: 0; background: rgba(20,20,22,.85); color: #ddd; font-size: 16px; line-height: 1; cursor: pointer; }
@media (prefers-reduced-motion: no-preference) { .sw-float.show a { animation: sw-pulse 2.6s ease-in-out 1s 3; } }
@keyframes sw-pulse { 50% { box-shadow: 0 10px 28px -8px rgba(0,0,0,.6), 0 0 0 10px color-mix(in srgb, var(--c) 0%, transparent); } }
@media (max-width: 899px) { body:has(.mbar) .sw-float { bottom: 76px; } }`;
  const st = document.createElement('style');
  st.textContent = css;
  document.head.appendChild(st);
})();

/* ===================== 作者紹介 ===================== */
const SW_AUTHOR = {
  name: 'Tatsuya Mori / ClimateWatchMan',
  x: 'https://x.com/ttmori',
  en: {
    head: 'About the author',
    intro: 'The Slow War was created by Tatsuya Mori. Follow along, and read the proposals for what we can do about it.',
    links: [['X', '@ttmori', 'https://x.com/ttmori'], ['Substack', 'ttmori.substack.com', 'https://substack.com/@ttmori']],
    propH: 'Proposals for a way out',
    props: [
      ['Summary', 'A Call for Global Cooperation Toward “Civilization System Redesign” Based on Planetary Boundaries and the Rights of Future Generations', 'https://ttmori.substack.com/p/a-call-for-global-cooperation-toward-67b'],
      ['Full proposal', 'Survival Redesign: A Blueprint for Capitalism 2.0 and Global Democracy', 'https://ttmori.substack.com/p/survival-redesign-a-blueprint-for'],
    ],
    other: ['日本語の記事は note で', 'https://note.com/ttmori'],
  },
  ja: {
    head: '作者について',
    intro: 'このサイトは ClimateWatchMan（Tatsuya Mori）が制作しました。発信のフォローと、解決に向けた提案記事もぜひご覧ください。',
    links: [['X', '@ttmori', 'https://x.com/ttmori'], ['note', 'note.com/ttmori', 'https://note.com/ttmori']],
    propH: '解決に向けた提案',
    props: [
      ['概要', '地球の物理的限界と未来世代の権利に基づく「文明システム再設計」に向けたグローバル協力の呼びかけ', 'https://note.com/ttmori/n/n7d35de117943'],
      ['詳細', '生存のための再設計：資本主義2.0とグローバル・デモクラシーへの青写真', 'https://note.com/ttmori/n/ne11e0dcd5e8a'],
    ],
    other: ['English articles on Substack', 'https://substack.com/@ttmori'],
  },
};
function swAuthor(container, lang) {
  if (!container) return;
  const a = SW_AUTHOR[lang], esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const ext = 'target="_blank" rel="noopener"';
  container.innerHTML = `<div class="sw-author">
    <div class="sw-a-me"><h3>${a.head}</h3><b class="sw-a-name">${SW_AUTHOR.name}</b><p>${a.intro}</p>
      <div class="sw-a-links">${a.links.map(([k, v, u]) => `<a class="sw-a-btn" href="${u}" ${ext}><span>${k}</span>${v}</a>`).join('')}</div></div>
    <div class="sw-a-props"><h4>${a.propH}</h4>${a.props.map(([tag, t, u]) => `<a class="sw-a-prop" href="${u}" ${ext}><span class="sw-a-tag">${tag}</span>${esc(t)}<i>→</i></a>`).join('')}
      <a class="sw-a-other" href="${a.other[1]}" ${ext}>${a.other[0]} →</a></div>
  </div>`;
}
(function () {
  const css = `.sw-author { display: grid; grid-template-columns: 1fr; gap: 20px 32px; padding: 22px; border-radius: 16px;
  border: 1px solid rgba(128,128,128,.35); background: rgba(128,128,128,.06); font-family: Inter, "Noto Sans JP", -apple-system, "Hiragino Sans", sans-serif; }
@media (min-width: 760px) { .sw-author { grid-template-columns: 1fr 1.3fr; } }
.sw-author h3 { font-size: 13px; letter-spacing: .14em; text-transform: uppercase; opacity: .7; margin: 0 0 10px; font-weight: 600; }
.sw-a-name { display: block; font-size: 18px; }
.sw-author p { font-size: 13.5px; opacity: .8; line-height: 1.65; margin: 8px 0 14px; }
.sw-a-links { display: flex; flex-wrap: wrap; gap: 8px; }
.sw-a-btn { display: inline-flex; align-items: center; gap: 8px; font-size: 13px; color: inherit; text-decoration: none; padding: 7px 14px;
  border-radius: 999px; border: 1px solid rgba(128,128,128,.45); transition: border-color .15s; }
.sw-a-btn span { font-weight: 800; }
.sw-a-btn:hover { border-color: #e5483b; }
.sw-a-props h4 { font-size: 14px; margin: 0 0 10px; }
.sw-a-prop { position: relative; display: block; color: inherit; text-decoration: none; font-size: 13.5px; line-height: 1.55; font-weight: 600;
  padding: 12px 36px 12px 14px; border-radius: 12px; border: 1px solid rgba(128,128,128,.3); margin-bottom: 8px; transition: border-color .15s, background .15s; }
.sw-a-prop:hover { border-color: #e5483b; background: rgba(229,72,59,.06); }
.sw-a-prop i { position: absolute; right: 14px; top: 50%; transform: translateY(-50%); font-style: normal; color: #e5483b; font-weight: 800; }
.sw-a-tag { display: block; font-size: 11px; font-weight: 700; letter-spacing: .06em; color: #e5483b; margin-bottom: 2px; }
.sw-a-other { display: inline-block; font-size: 12.5px; color: inherit; opacity: .75; margin-top: 2px; }`;
  const st = document.createElement('style');
  st.textContent = css;
  document.head.appendChild(st);
})();
