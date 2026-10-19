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
  food:      { en: 'Food: emissions, land, water, pollution', ja: '食べ物：排出・土地・水・汚染' },
  land:      { en: 'Land and the carbon opportunity cost', ja: '土地と炭素の機会費用' },
  energy:    { en: 'Electricity, transport, products and shopping', ja: '電気・交通・製品・買い物' },
  war:       { en: 'War deaths (for comparison)', ja: '戦争の死者数（比較用）' },
  further:   { en: 'Further reading for everyone', ja: 'さらに知りたい人へ' },
};
const SW_SOURCES = [
  // 基本の推計
  { g: 'core', cite: 'Pearce, J.M. & Parncutt, R. (2023)', title: 'Quantifying Global Greenhouse Gas Emissions in Human Deaths to Guide Energy Policy', venue: 'Energies 16(16): 6074', url: 'https://doi.org/10.3390/en16166074',
    en: 'The “1,000-ton rule” (≈ 1 future premature death per 1,000 t of CO₂). The basis of every death estimate on this site.',
    ja: '「1,000トン・ルール」（CO₂ 1,000 t ≒ 将来の早すぎる死 1人）。このサイトのすべての死者数の推計の土台です。' },
  { g: 'core', cite: 'Bressler, R.D. (2021)', title: 'The mortality cost of carbon', venue: 'Nature Communications 12: 4467', url: 'https://doi.org/10.1038/s41467-021-24487-w',
    en: 'An independent estimate of excess deaths per tonne of CO₂. Useful for seeing how widely such estimates range.',
    ja: 'CO₂ 1トンあたりの超過死亡を独自に推計した研究。推計の幅を知るのに役立ちます。' },

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
  { g: 'tipping', cite: 'Lenton, T.M. et al. (2025)', title: 'Global Tipping Points Report 2025', venue: 'University of Exeter / global-tipping-points.org', url: 'https://global-tipping-points.org/',
    en: 'Warm-water coral reefs have passed their tipping point at ~1.4 °C — the first Earth-system tipping point reached. Amazon dieback and collapse of the Atlantic overturning circulation are at risk below 2 °C. Also covers positive tipping points in clean technology.',
    ja: '暖かい海のサンゴ礁が約1.4℃で臨界点を超えた（地球システムで最初に到達したティッピング・ポイント）。アマゾンの森林枯死や大西洋の海洋循環の崩壊も2℃未満で起こりうる。クリーン技術の「良いティッピング」も扱っています。' },

  // 食べ物
  { g: 'food', cite: 'Poore, J. & Nemecek, T. (2018)', title: 'Reducing food’s environmental impacts through producers and consumers', venue: 'Science 360: 987–992', url: 'https://doi.org/10.1126/science.aaq0216',
    en: 'The main food dataset: emissions by supply-chain stage, land use, water use and eutrophication for ~40 foods.',
    ja: '食べ物の主なデータ：約40品目について、サプライチェーン段階別の排出、土地利用、水使用、富栄養化。' },
  { g: 'food', cite: 'Our World in Data', title: 'Environmental impacts of food production', venue: 'ourworldindata.org', url: 'https://ourworldindata.org/environmental-impacts-of-food',
    en: 'An accessible guide to the dataset above.', ja: '上のデータをわかりやすく解説したページ。' },
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
  { file: 'sources.html', icon: '≡', color: '#9aa9ba',
    en: { nav: 'Sources & data', title: 'Sources & data', desc: 'Every number traced to its source, the key assumptions, and further reading.', cta: 'See sources' },
    ja: { nav: '出典とデータ', title: '出典とデータ', desc: 'すべての数値の出典と主な前提、さらに知りたい人への資料。', cta: '出典へ' } },
];
const SW_NAV_ORDER = ['index.html', 'simulator.html', 'my-day.html', 'sources.html'];
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
  container.innerHTML = `<div class="sw-next"><h3>${feat ? ui.next : ui.next2}</h3><p class="sw-next-sub">${feat ? ui.nextSub : ui.nextSub2}</p><div class="sw-cards${feat ? '' : ' n3'}">${pages.map(p =>
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
@media (min-width: 760px) { .sw-cards { grid-template-columns: repeat(4, 1fr); } .sw-cards.n3 { grid-template-columns: repeat(3, 1fr); } .sw-card.feat { grid-column: span 2; } }
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
