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
  energy:    { en: 'Electricity, transport and products', ja: '電気・交通・製品' },
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
  { g: 'emissions', cite: 'Friedlingstein, P. et al. (2025)', title: 'Global Carbon Budget 2024', venue: 'Earth System Science Data 17', url: 'https://doi.org/10.5194/essd-17-965-2025',
    en: 'World CO₂ emissions (~40 Gt a year including land-use change) and fossil CO₂ by country.',
    ja: '世界のCO₂排出量（土地利用変化を含めて年約40 Gt）と、国別の化石燃料由来CO₂。' },
  { g: 'emissions', cite: 'Global Carbon Project', title: 'Global Carbon Budget (data and visuals)', venue: 'globalcarbonbudget.org', url: 'https://globalcarbonbudget.org/',
    en: 'The data behind the paper above, with charts and downloads.', ja: '上の論文のデータ。グラフやダウンロードもあります。' },
  { g: 'emissions', cite: 'Our World in Data', title: 'CO₂ emissions', venue: 'ourworldindata.org', url: 'https://ourworldindata.org/co2-emissions',
    en: 'Explore total and per-person emissions by country.', ja: '国別の総排出量と1人あたり排出量を自由に見られます。' },
  { g: 'emissions', cite: 'United Nations', title: 'World Population Prospects', venue: 'population.un.org', url: 'https://population.un.org/wpp/',
    en: 'Population figures for countries and the world.', ja: '各国と世界の人口。' },
  { g: 'emissions', cite: '総務省統計局 / Statistics Bureau of Japan', title: '人口推計 (Population Estimates)', venue: 'stat.go.jp', url: 'https://www.stat.go.jp/data/jinsui/',
    en: 'Population of Japan.', ja: '日本の人口。' },
  { g: 'emissions', cite: '国立環境研究所 / NIES', title: '温室効果ガスインベントリオフィス (Greenhouse Gas Inventory Office of Japan)', venue: 'nies.go.jp', url: 'https://www.nies.go.jp/gio/',
    en: 'Japan’s official greenhouse-gas inventory.', ja: '日本の温室効果ガス排出量の公式な算定。' },

  // カーボンバジェットと道筋
  { g: 'pathways', cite: 'Forster, P.M. et al. (2025)', title: 'Indicators of Global Climate Change 2024', venue: 'Earth System Science Data 17', url: 'https://doi.org/10.5194/essd-17-2641-2025',
    en: 'Remaining carbon budget: about 130 Gt CO₂ from the start of 2025 for a 50% chance of 1.5 °C — roughly three years of current emissions.',
    ja: '残りのカーボンバジェット：1.5℃に50%の確率でとどめるには、2025年初めから約130 Gt CO₂。いまの排出ペースで約3年分です。' },
  { g: 'pathways', cite: 'UNEP (2024)', title: 'Emissions Gap Report 2024', venue: 'United Nations Environment Programme', url: 'https://www.unep.org/resources/emissions-gap-report-2024',
    en: 'Cuts needed to 2035: about 7.5% a year for 1.5 °C and about 4% a year for 2 °C. See the note on how we label the “−7%” pathway.',
    ja: '2035年までに必要な削減：1.5℃なら年約7.5%、2℃なら年約4%。「−7%」の道筋の呼び方については注記を参照してください。' },
  { g: 'pathways', cite: 'IPCC (2023)', title: 'AR6 Synthesis Report: Climate Change 2023', venue: 'ipcc.ch', url: 'https://www.ipcc.ch/report/ar6/syr/',
    en: 'The scientific consensus on pathways, carbon budgets and impacts.', ja: '削減の道筋・カーボンバジェット・影響についての科学的な合意。' },
  { g: 'pathways', cite: 'Climate Action Tracker', title: 'Temperatures', venue: 'climateactiontracker.org', url: 'https://climateactiontracker.org/global/temperatures/',
    en: 'Where current policies are heading in terms of warming.', ja: 'いまの政策のままだと、温暖化がどこまで進むかの見通し。' },

  // ティッピング
  { g: 'tipping', cite: 'Armstrong McKay, D.I. et al. (2022)', title: 'Exceeding 1.5°C global warming could trigger multiple climate tipping points', venue: 'Science 377: eabn7950', url: 'https://doi.org/10.1126/science.abn7950',
    en: 'Thresholds of major tipping elements. Background for the tipping options — the ×1.5 / ×2 / ×3 multipliers themselves are our illustrative assumptions, not from this paper.',
    ja: '主なティッピング要素の閾値。ティッピング効果の選択肢の背景です。ただし ×1.5／×2／×3 の係数そのものは、この論文ではなく私たちが置いた目安です。' },
  { g: 'tipping', cite: 'Lenton, T.M. et al. (2023)', title: 'Global Tipping Points Report 2023', venue: 'global-tipping-points.org', url: 'https://global-tipping-points.org/',
    en: 'An accessible overview of climate tipping points and societal cascades.', ja: '気候のティッピング・ポイントと社会の連鎖をわかりやすくまとめた報告書。' },

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
function swRenderSources(container, lang, groups) {
  if (!container) return;
  const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
  container.innerHTML = (groups || Object.keys(SW_GROUPS)).map(g => {
    const items = SW_SOURCES.filter(s => s.g === g);
    if (!items.length) return '';
    return `<div class="src-group"><h4>${SW_GROUPS[g][lang]}</h4><ul>${items.map(s => `<li>
      ${s.url ? `<a href="${s.url}" target="_blank" rel="noopener">${esc(s.title)}</a>` : `<i>${esc(s.title)}</i>`}
      <span class="src-cite">— ${esc(s.cite)}${s.venue ? ', ' + esc(s.venue) : ''}</span>
      <span class="src-use">${s[lang]}</span></li>`).join('')}</ul></div>`;
  }).join('');
}

/* 出典リストの共通スタイル（各ページの配色を currentColor で引き継ぐ） */
(function () {
  const css = `.src-group { margin-top: 22px; }
.src-group h4 { font-size: 13px; letter-spacing: .04em; margin: 0 0 8px; opacity: .85; }
.src-group ul { list-style: none; padding: 0; margin: 0; }
.src-group li { padding: 8px 0; border-top: 1px solid rgba(128,128,128,.25); font-size: 13.5px; line-height: 1.55; }
.src-group li a { color: inherit; font-weight: 600; text-underline-offset: 3px; }
.src-cite { opacity: .7; font-size: 12.5px; }
.src-use { display: block; opacity: .75; font-size: 12.5px; margin-top: 2px; }`;
  const st = document.createElement('style');
  st.textContent = css;
  document.head.appendChild(st);
})();
