const SPRITES = {
  dog: ["................................","................................","................................","................................","....111..............111........","...11111............11111.......","...11211............11211.......","...12221...111111...12221.......","....111..11111111....111........",".........11111111...............",".......1111111111...............","......111111111111..............",".....11211111112111.............",".....1132111113111..............",".....11211111112111.............",".....1112255211111..............","......111155551111..............",".......1111111111...............","........11111111................",".........222222.................","................................","................................","................................","................................","................................","................................","................................","................................","................................","................................","................................","................................"],
  cat: ["................................","................................","................................","................................","......11..............11........",".....111..............111.......","....1211..............1121......","...12221..............12221.....","...12221111111111111112221......","....11111111111111111111........","....111111111111111111..........","...11111111111111111111.........","...112111111111111121111........","...113111111111111131111........","...11211222552221121111.........","....1111122555221111111.........","....11111111511111111...........",".....111111111111111............","......11111111111111............",".......22222222222..............","................................","................................","................................","................................","................................","................................","................................","................................","................................","................................","................................","................................"],
  rabbit: ["................................","................................","......11..............11........","......121............121........","......121............121........","......121............121........","......121............121........",".....1221............1221.......",".....1221111111111111221........","....122111111111111111221.......","....11111111111111111111........","...111111111111111111111........","...11211111111111111121.........","...113111111111111131111........","...11211122555221121111.........","....1111122555221111111.........","....11111111111111111...........",".....111111111111111............","......11111111111111............",".......22222222222..............","................................","................................","................................","................................","................................","................................","................................","................................","................................","................................","................................","................................"],
  hamster: ["................................","................................","................................","................................","................................",".......1111111111111............","......111111111111111...........",".....11111111111111111..........","....1111111111111111111.........","....1112111111111112111.........","....1113111111111113111.........","....11121122555221121111........","....111111122552211111..........",".....1111111511111111...........","......22222222222222............","................................","................................","................................","................................","................................","................................","................................","................................","................................","................................","................................","................................","................................","................................","................................","................................","................................"],
  bird: ["................................","................................","................................","................................","..........1111111...............",".........111111111..............","........11111111111.............","........11211112111.............","........11311113111.............","........11211112111.............",".......1111155551111............","......111111111111111...........","......122222222222221...........","......122222222222221...........",".......2222222222222............","........22222222222.............",".........555..555...............","................................","................................","................................","................................","................................","................................","................................","................................","................................","................................","................................","................................","................................","................................","................................"],
  fish: ["................................","................................","................................","................................","................................","..............1111..............","............11111111............","...........1111111111...........","..........111121111111..........",".........111311111114...........","1.........111311111111..........","11........111311111111.........1","111.......111211111111........11","1111111...11115551111.......111.","11111111111111111111111111111111","111111111111111111111111111111..","1111111...111111111111.......111","111.......111111111111........11","11........111111111111.........1","1.........111111111111..........","..........11111111111...........","...........111111111............","............1111111.............","..............11................","................................","................................","................................","................................","................................","................................","................................","................................"],
  turtle: ["................................","................................","................................","................................","..............11111.............",".............1112111............",".............1113111............",".............1112111............",".....1111....11555111....1111...","....122221..1111111111..122221..","....122221.111144144111.122221..","....122221.111111111111.122221..","....122221.111441441111.122221..",".....11111.111111111111..11111..","............111141411111........",".............11111111111........","..............111111111.........","..............11.....11.........",".............111.....111........",".............121.....121........","................................","................................","................................","................................","................................","................................","................................","................................","................................","................................","................................","................................"],
  other: ["................................","................................","................................","................................","................................","............111111..............","...........11111111.............","..........1111111111............",".........111121111211...........",".........111311113111...........",".........11211111121............",".........1112555211.............",".........11155551111............","..........11111111..............","...........111111...............","................................","................................","................................","................................","................................","................................","................................","................................","................................","................................","................................","................................","................................","................................","................................","................................","................................"]
};
const PET_PALETTES = {
  dog: { 1:"#D4A87A", 2:"#F5E2C8", 3:"#3B2A1B", 4:"#FFFFFF", 5:"#E88AA0" },
  cat: { 1:"#5A4A40", 2:"#FFFCF6", 3:"#1A1410", 4:"#FFFFFF", 5:"#E88AA0" },
  small: { 1:"#E0B070", 2:"#F5DAB0", 3:"#3B2A1B", 4:"#FFFFFF", 5:"#E88AA0" },
  aquatic: { 1:"#E88AA0", 2:"#F5C2CD", 3:"#3B2A1B", 4:"#FFFFFF", 5:"#F5D77A" },
  bird: { 1:"#8FC9AB", 2:"#F5D77A", 3:"#3B2A1B", 4:"#FFFFFF", 5:"#E88AA0" },
  reptile: { 1:"#7FA88A", 2:"#A8C8B5", 3:"#2D4A3C", 4:"#C8DEC8", 5:"#E88AA0" },
  amphibian: { 1:"#8FC9AB", 2:"#A8DEB8", 3:"#2D4A3C", 4:"#C8DEC8", 5:"#E88AA0" },
  insect: { 1:"#A88AC8", 2:"#D8C2E0", 3:"#3B2A1B", 4:"#FFFFFF", 5:"#F5D77A" },
  plant: { 1:"#7FA88A", 2:"#C2E2D0", 3:"#2D4A3C", 4:"#FFFFFF", 5:"#F5D77A" },
  livestock: { 1:"#D4A87A", 2:"#F5E2C8", 3:"#3B2A1B", 4:"#FFFFFF", 5:"#E88AA0" },
  boy: { 1:"#78C0E8", 2:"#C8E4F5", 3:"#1A3A58", 4:"#FFFFFF", 5:"#F5D77A" },
  girl: { 1:"#F4C2CE", 2:"#FDE2E8", 3:"#7A4A58", 4:"#FFFFFF", 5:"#F5D77A" },
  other: { 1:"#A8B5C8", 2:"#D8DFE8", 3:"#3B2A1B", 4:"#FFFFFF", 5:"#E88AA0" }
};
const PET_EMOJIS = {
  dog: '🐕', cat: '🐈', small: '🐹', aquatic: '🐠',
  bird: '🐦', reptile: '🦎', amphibian: '🐸', insect: '🐛',
  plant: '🌱', livestock: '🐄', other: '✨',
  // KIDS用
  boy: '👦', girl: '👧'
};

// PET種類のMaterial Symbolsマップ（絵文字代替・統一感優先）
const PET_MS_ICONS = {
  dog:       { icon: 'pets',           color: '#B87850' },  // 茶色（はっきり）
  cat:       { icon: 'pets',           color: '#7A6E66' },  // グレージュ（差別化）
  small:     { icon: 'cruelty_free',   color: '#D88AB0' },  // ピンク
  aquatic:   { icon: 'set_meal',       color: '#3899B0' },  // 水色（深め）
  bird:      { icon: 'flutter_dash',   color: '#5C9CD4' },  // 空色
  reptile:   { icon: 'bug_report',     color: '#6FB088' },  // 緑
  amphibian: { icon: 'cruelty_free',   color: '#5FA985' },  // 深緑
  insect:    { icon: 'pest_control',   color: '#9078B8' },  // 紫
  plant:     { icon: 'eco',            color: '#7BBE5C' },  // 葉緑
  livestock: { icon: 'agriculture',    color: '#C49050' },  // 山吹色
  other:     { icon: 'auto_awesome',   color: '#E0A858' },  // ゴールド
  boy:       { icon: 'boy',            color: '#5C9CD4' },  // 空色
  girl:      { icon: 'girl',           color: '#D88AB0' }   // ピンク
};

// PET種類のアイコンHTML生成（絵文字代わりにMSを返す）
function petIconHtml(kind, sizeStyle) {
  const map = PET_MS_ICONS[kind] || PET_MS_ICONS.other;
  return '<span class="material-symbols-rounded" style="color:'+map.color+';'+(sizeStyle||'')+'">'+map.icon+'</span>';
}
window.petIconHtml = petIconHtml;

function spriteSVG(kind, palette, sizeAttr) {
  // sizeAttr に "class=..." が含まれていたらそのクラスを使う
  // それ以外は petEmoji クラスを付与
  let extraClass = '';
  let fontSize = '';
  if (sizeAttr && sizeAttr.indexOf('sprite-mini') !== -1) {
    extraClass = ' pet-emoji-mini';
    fontSize = 'font-size:24px;';
  } else if (sizeAttr && sizeAttr.indexOf('sprite-large') !== -1) {
    fontSize = 'font-size:64px;';
  } else {
    fontSize = 'font-size:48px;';
  }
  const map = PET_MS_ICONS[kind] || PET_MS_ICONS.other;
  return '<span class="pet-emoji'+extraClass+'" aria-label="'+kind+'"><span class="material-symbols-rounded" style="color:'+map.color+';'+fontSize+';line-height:1;">'+map.icon+'</span></span>';
}

let STORAGE_KEY = 'nikowa_data_v3';
let PHOTOS_KEY = 'nikowa_photos_v3';
const MAX_PHOTO_SIZE = 800;
const THEMES = {
  // ===== スイーツ ×8 =====
  mint: { name: 'チョコミント', emoji: '🍃', pattern: 'gingham', cardShape: 'circle',
    vars: { '--bg':'#D0FCED', '--surface':'#FFFFFF', '--surface-warm':'#E0F0E5', '--line':'#B8D8C5', '--line-soft':'#CCE4D5', '--ink-dark':'#2D4A3C', '--ink':'#466050', '--ink-sub':'#7A9588', '--ink-light':'#A8BFB2', '--mint':'#8FC9AB', '--mint-deep':'#5FA985', '--mint-bg':'#C2E2D0', '--accent':'#C8956A', '--accent-deep':'#9A6840', '--accent-bg':'#EDD5C0', '--today-bg':'#FCEAEF', '--today-border':'#F4C8D2', '--warm-yellow':'#F8E4A0', '--soft-purple':'#C8B0D8' },
    paperColor: 'rgba(255,255,255,0.55)',
    ginghamColor: 'rgba(255,255,255,0.55)',
    headerGrad: 'linear-gradient(180deg, #EAF6EE 0%, #DCEEE2 50%, #F2D9C8 100%)' },
  candy_soda: { name: 'キャンディソーダ', emoji: '🍬', pattern: 'polka', cardShape: 'circle',
    vars: { '--bg':'#C8E4F5', '--surface':'#FFFFFF', '--surface-warm':'#DCF0FA', '--line':'#B0D0E8', '--line-soft':'#C8DFF0', '--ink-dark':'#1A3A58', '--ink':'#2A5078', '--ink-sub':'#5888B0', '--ink-light':'#88AAC8', '--mint':'#78C0E8', '--mint-deep':'#4898C8', '--mint-bg':'#A8D8F0', '--accent':'#F7A0C0', '--accent-deep':'#E06890', '--accent-bg':'#FDE0EC', '--today-bg':'#FFF5D0', '--today-border':'#F0D870', '--warm-yellow':'#FCE874', '--soft-purple':'#C8B0E0' },
    paperColor: 'rgba(255,255,255,0.85)',
    headerGrad: 'linear-gradient(180deg, #E8F4FA 0%, #F8D0E0 50%, #FFF0B8 100%)' },
  strawberry: { name: 'いちごみるく', emoji: '🍓', pattern: 'gingham', cardShape: 'circle',
    vars: { '--bg':'#FEEBF8', '--surface':'#FFFFFF', '--surface-warm':'#FCF1F2', '--line':'#F4DCE2', '--line-soft':'#F8E8EC', '--ink-dark':'#7A4A58', '--ink':'#9A6878', '--ink-sub':'#B894A0', '--ink-light':'#D8BAC2', '--mint':'#F4C2CE', '--mint-deep':'#D88AA0', '--mint-bg':'#FDE2E8', '--accent':'#E89AB0', '--accent-deep':'#C26A85', '--accent-bg':'#FCDCE4', '--today-bg':'#FCE4EA', '--today-border':'#F2B0C0', '--warm-yellow':'#F8E4A0', '--soft-purple':'#D8C2E0' },
    paperColor: 'rgba(255,255,255,0.55)',
    ginghamColor: 'rgba(255,255,255,0.55)',
    headerGrad: 'linear-gradient(180deg, #FEF4F4 0%, #FBE2E8 50%, #F4BCC8 100%)' },
  honey: { name: 'ハニーレモン', emoji: '🍋', pattern: 'polka', cardShape: 'circle',
    vars: { '--bg':'#FFF080', '--surface':'#FFFFFF', '--surface-warm':'#FFF8C8', '--line':'#E8E070', '--line-soft':'#F0E890', '--ink-dark':'#4A4008', '--ink':'#6A5818', '--ink-sub':'#907830', '--ink-light':'#B8A058', '--mint':'#70EE7C', '--mint-deep':'#40C848', '--mint-bg':'#B0F0B8', '--accent':'#FF8387', '--accent-deep':'#D85058', '--accent-bg':'#FFD0D2', '--today-bg':'#FFF056', '--today-border':'#D8C820', '--warm-yellow':'#FFF056', '--soft-purple':'#D8C098' },
    paperColor: 'rgba(255,255,255,1)',
    headerGrad: 'linear-gradient(180deg, #FFFEE0 0%, #FFF056 50%, #70EE7C 100%)' },
  pancake: { name: 'ホットケーキ', emoji: '🥞', pattern: 'gingham', cardShape: 'circle',
    vars: { '--bg':'#FFDFAB', '--surface':'#FFFFFF', '--surface-warm':'#FCF1DA', '--line':'#EBD4A8', '--line-soft':'#F2E2C2', '--ink-dark':'#6B4A28', '--ink':'#8A6440', '--ink-sub':'#B0926A', '--ink-light':'#D4BC98', '--mint':'#E8C088', '--mint-deep':'#C28848', '--mint-bg':'#FBE2B8', '--accent':'#F0A0B2', '--accent-deep':'#C26880', '--accent-bg':'#FCDCE4', '--today-bg':'#FCE4EA', '--today-border':'#F2B0C0', '--warm-yellow':'#F8E4A0', '--soft-purple':'#D8B898' },
    paperColor: 'rgba(255,255,255,0.65)',
    ginghamColor: 'rgba(255,255,255,0.65)',
    headerGrad: 'linear-gradient(180deg, #FCEFD2 0%, #F0D4A0 50%, #F4C0CC 100%)' },
  cream_soda: { name: 'クリームソーダ', emoji: '🍹', pattern: 'polka', cardShape: 'circle',
    vars: { '--bg':'#D8F5D8', '--surface':'#FFFFFF', '--surface-warm':'#E4F8E4', '--line':'#B0D8B0', '--line-soft':'#C8E8C8', '--ink-dark':'#204020', '--ink':'#385838', '--ink-sub':'#608060', '--ink-light':'#90B090', '--mint':'#78C878', '--mint-deep':'#48A048', '--mint-bg':'#A0D8A0', '--accent':'#F06060', '--accent-deep':'#C83838', '--accent-bg':'#FCD0D0', '--today-bg':'#FFF8E0', '--today-border':'#E8D088', '--warm-yellow':'#F8E8A0', '--soft-purple':'#C8B0C8' },
    paperColor: 'rgba(255,255,255,0.8)',
    headerGrad: 'linear-gradient(180deg, #E8FAE8 0%, #C8E8C8 50%, #FCE0E0 100%)' },
  lavender: { name: 'ラベンダーマカロン', emoji: '🪻', pattern: 'gingham', cardShape: 'circle',
    vars: { '--bg':'#EDE0F5', '--surface':'#FFFFFF', '--surface-warm':'#E4D2F0', '--line':'#C8A8D8', '--line-soft':'#D8C0E8', '--ink-dark':'#3E2858', '--ink':'#5A4070', '--ink-sub':'#887098', '--ink-light':'#B0A0C0', '--mint':'#B090D0', '--mint-deep':'#8060A8', '--mint-bg':'#D0B8E0', '--accent':'#E088A8', '--accent-deep':'#B05870', '--accent-bg':'#F8C8D8', '--today-bg':'#F8D0DC', '--today-border':'#E0A0B8', '--warm-yellow':'#F8E4A0', '--soft-purple':'#8060A8' },
    paperColor: 'rgba(255,255,255,0.6)',
    ginghamColor: 'rgba(255,255,255,0.6)',
    headerGrad: 'linear-gradient(180deg, #F0E2F8 0%, #E0CCEE 50%, #FAD8E2 100%)' },
  peach: { name: 'ピーチメルバ', emoji: '🍑', pattern: 'polka', cardShape: 'circle',
    vars: { '--bg':'#FFE8D8', '--surface':'#FFFFFF', '--surface-warm':'#FFF0E8', '--line':'#F0C8B0', '--line-soft':'#F8D8C8', '--ink-dark':'#5A3028', '--ink':'#7A4838', '--ink-sub':'#A87060', '--ink-light':'#D0A090', '--mint':'#F0B098', '--mint-deep':'#D88068', '--mint-bg':'#F8D0C0', '--accent':'#E06878', '--accent-deep':'#B84050', '--accent-bg':'#FCC8D0', '--today-bg':'#FFF0E0', '--today-border':'#E8C0A0', '--warm-yellow':'#F8E4A0', '--soft-purple':'#D0A8C8' },
    paperColor: 'rgba(255,255,255,0.7)',
    headerGrad: 'linear-gradient(180deg, #FFF2EA 0%, #F8D0B8 50%, #F0A0A8 100%)' },
  // ===== 和食 ×4 =====
  kurogoma: { name: '黒ごま', emoji: '🖤', pattern: 'dot', simple: true, cardShape: 'square',
    vars: { '--bg':'#2A2A30', '--surface':'#3A3A42', '--surface-warm':'#3A3A42', '--line':'#58585F', '--line-soft':'#4A4A52', '--ink-dark':'#F8F7F2', '--ink':'#E8E6DE', '--ink-sub':'#C8C6C0', '--ink-light':'#9A9890', '--mint':'#D8D6CE', '--mint-deep':'#B8B6AE', '--mint-bg':'#58585F', '--accent':'#E8C878', '--accent-deep':'#C8A848', '--accent-bg':'#4A4838', '--today-bg':'#4A4A52', '--today-border':'#888880', '--warm-yellow':'#E8C878', '--soft-purple':'#A8A0A8' },
    paperColor: 'rgba(255,255,255,0.06)',
    headerGrad: 'linear-gradient(180deg, #38383F 0%, #2A2A30 100%)' },
  tofu: { name: 'おとうふ', emoji: '🤍', pattern: 'dot', simple: true, cardShape: 'square',
    vars: { '--bg':'#FAFAF6', '--surface':'#FFFFFF', '--surface-warm':'#F2F0EA', '--line':'#D8D6D0', '--line-soft':'#E8E6E0', '--ink-dark':'#2A2A28', '--ink':'#48484A', '--ink-sub':'#787876', '--ink-light':'#A8A8A6', '--mint':'#A0A8C0', '--mint-deep':'#6878A0', '--mint-bg':'#D8DCE8', '--accent':'#8A8068', '--accent-deep':'#5A5040', '--accent-bg':'#E8E2D8', '--today-bg':'#F2F0EA', '--today-border':'#A8A6A0', '--warm-yellow':'#C8B888', '--soft-purple':'#A8A0B0' },
    paperColor: 'rgba(0,0,0,0.04)',
    headerGrad: 'linear-gradient(180deg, #FAFAF6 0%, #F0EEE8 100%)' },
  mitarashi: { name: 'みたらし', emoji: '🍡', pattern: 'seigaiha', simple: true, cardShape: 'square',
    vars: { '--bg':'#FFF2D8', '--surface':'#FFFFFF', '--surface-warm':'#FFF0D0', '--line':'#E8C890', '--line-soft':'#F0D8A8', '--ink-dark':'#3E2808', '--ink':'#5A4018', '--ink-sub':'#886838', '--ink-light':'#B09060', '--mint':'#D8A850', '--mint-deep':'#B88830', '--mint-bg':'#F0D088', '--accent':'#D07828', '--accent-deep':'#A85810', '--accent-bg':'#FDE0B0', '--today-bg':'#FFF0C0', '--today-border':'#D8B058', '--warm-yellow':'#F0C848', '--soft-purple':'#C0A878' },
    paperColor: 'rgba(200,160,80,0.12)',
    headerGrad: 'linear-gradient(180deg, #FFF8E0 0%, #F0D898 50%, #D8A850 100%)' },
  edamame: { name: '枝豆', emoji: '🥬', pattern: 'asanoha', simple: true, cardShape: 'square',
    vars: { '--bg':'#E0F0D0', '--surface':'#FFFFFF', '--surface-warm':'#E8F2DA', '--line':'#B8D098', '--line-soft':'#CCE0B0', '--ink-dark':'#1A3010', '--ink':'#2A4820', '--ink-sub':'#507840', '--ink-light':'#80A868', '--mint':'#78B858', '--mint-deep':'#509838', '--mint-bg':'#A8D088', '--accent':'#A0C048', '--accent-deep':'#789828', '--accent-bg':'#D8E8B0', '--today-bg':'#F0F8E0', '--today-border':'#A8C870', '--warm-yellow':'#D8D068', '--soft-purple':'#A8B890' },
    paperColor: 'rgba(100,160,80,0.1)',
    headerGrad: 'linear-gradient(180deg, #ECF4E0 0%, #D0E4B0 50%, #B0D080 100%)' },
  // ===== 大人キレイ目 ×3 =====
  cinderella: { name: 'シンデレラ', emoji: '👑', pattern: 'rhombus', cardShape: 'rounded',
    vars: { '--bg':'#F5F9FC', '--surface':'#FFFFFF', '--surface-warm':'#E8F2F8', '--line':'#C8DDED', '--line-soft':'#DCE8F0', '--ink-dark':'#1A2838', '--ink':'#2C4258', '--ink-sub':'#5A8098', '--ink-light':'#9CB8C8', '--mint':'#87CEEB', '--mint-deep':'#3F9FD0', '--mint-bg':'#C8E4F0', '--accent':'#E8C868', '--accent-deep':'#C8A848', '--accent-bg':'#F8E8B8', '--today-bg':'#FCEFC8', '--today-border':'#E8C868', '--warm-yellow':'#E8C868', '--soft-purple':'#B0A0C8' },
    paperColor: '#B8DFEC',
    headerGrad: 'linear-gradient(180deg, #F5F9FC 0%, #C8E4F0 50%, #87CEEB 100%)' },
  neon: { name: 'ネオン', emoji: '✨', pattern: 'dot', cardShape: 'diamond',
    vars: { '--bg':'#1A1A2E', '--surface':'#252540', '--surface-warm':'#252540', '--line':'#3A3A58', '--line-soft':'#303048', '--ink-dark':'#F0ECF8', '--ink':'#D8D0E8', '--ink-sub':'#B0A8C8', '--ink-light':'#8078A0', '--mint':'#00ABE1', '--mint-deep':'#0090C0', '--mint-bg':'#1A3048', '--accent':'#C8236B', '--accent-deep':'#A01050', '--accent-bg':'#3A1A28', '--today-bg':'#2A2A40', '--today-border':'#00ABE1', '--warm-yellow':'#F1E937', '--soft-purple':'#8078A0' },
    paperColor: 'rgba(255,255,255,0.04)',
    headerGrad: 'linear-gradient(180deg, #252540 0%, #1A1A2E 100%)' },
  night_dress: { name: 'ナイトドレス', emoji: '🌙', pattern: 'damask', cardShape: 'diamond',
    vars: { '--bg':'#1A1828', '--surface':'#2A2838', '--surface-warm':'#2A2838', '--line':'#484060', '--line-soft':'#3A3250', '--ink-dark':'#F0ECF8', '--ink':'#D8D0E8', '--ink-sub':'#B0A8C8', '--ink-light':'#8880A0', '--mint':'#C0B0D8', '--mint-deep':'#9080B8', '--mint-bg':'#3A3250', '--accent':'#C8C0D8', '--accent-deep':'#A098B8', '--accent-bg':'#2A2838', '--today-bg':'#3A3250', '--today-border':'#7868A0', '--warm-yellow':'#D0C8A0', '--soft-purple':'#9080B8' },
    paperColor: 'rgba(200,180,220,0.08)',
    headerGrad: 'linear-gradient(180deg, #282438 0%, #1A1828 100%)' },
  // ===== ダルメシアン ×2 =====
  dalmatian_w: { name: 'ダルメシアン白', emoji: '🐾', pattern: 'dalmatian', cardShape: 'diamond',
    vars: { '--bg':'#F8F8F8', '--surface':'#FFFFFF', '--surface-warm':'#F4F4F2', '--line':'#D0D0D0', '--line-soft':'#E0E0E0', '--ink-dark':'#1A1A1A', '--ink':'#333333', '--ink-sub':'#666666', '--ink-light':'#999999', '--mint':'#B0B0B0', '--mint-deep':'#666666', '--mint-bg':'#E0E0E0', '--accent':'#D4AA40', '--accent-deep':'#B08820', '--accent-bg':'#F0E4C0', '--today-bg':'#FFF8E0', '--today-border':'#D8C070', '--warm-yellow':'#E8D068', '--soft-purple':'#A0A0A0' },
    paperColor: 'rgba(30,30,30,0.12)',
    headerGrad: 'linear-gradient(180deg, #FAFAFA 0%, #F0F0F0 50%, #E8E8E0 100%)' },
  dalmatian_b: { name: 'ダルメシアン黒', emoji: '🖤', pattern: 'dalmatian_inv', cardShape: 'diamond',
    vars: { '--bg':'#1A1A1A', '--surface':'#2A2A2A', '--surface-warm':'#2A2A2A', '--line':'#484848', '--line-soft':'#3A3A3A', '--ink-dark':'#F8F8F0', '--ink':'#E8E8E0', '--ink-sub':'#C0C0B8', '--ink-light':'#888888', '--mint':'#D0D0C8', '--mint-deep':'#A8A8A0', '--mint-bg':'#484848', '--accent':'#D4AA40', '--accent-deep':'#B08820', '--accent-bg':'#3A3420', '--today-bg':'#3A3A3A', '--today-border':'#808070', '--warm-yellow':'#D4AA40', '--soft-purple':'#888888' },
    paperColor: 'rgba(255,255,255,0.10)',
    headerGrad: 'linear-gradient(180deg, #282828 0%, #1A1A1A 100%)' },
  // ===== 無地（柄なし）×4 =====
  plain_white: { name: 'シロ', emoji: '🤍', pattern: 'plain', simple: true, cardShape: 'square',
    vars: { '--bg':'#FAFAFA', '--surface':'#FFFFFF', '--surface-warm':'#F4F4F2', '--line':'#E0E0E0', '--line-soft':'#EAEAEA', '--ink-dark':'#2A2A2A', '--ink':'#48484A', '--ink-sub':'#787878', '--ink-light':'#A8A8A8', '--mint':'#A0B8D0', '--mint-deep':'#6080A8', '--mint-bg':'#D8DCE8', '--accent':'#A89880', '--accent-deep':'#785838', '--accent-bg':'#EAE2D6', '--today-bg':'#FFF6E8', '--today-border':'#E8D8B8', '--warm-yellow':'#E8D080', '--soft-purple':'#B0A0C0' },
    paperColor: 'rgba(0,0,0,0)',
    headerGrad: 'linear-gradient(180deg, #FFFFFF 0%, #F4F4F2 100%)' },
  plain_pink: { name: 'モモ', emoji: '🌸', pattern: 'plain', cardShape: 'square',
    vars: { '--bg':'#FCE8EE', '--surface':'#FFFFFF', '--surface-warm':'#FCE0E8', '--line':'#F0C8D2', '--line-soft':'#F8D8DE', '--ink-dark':'#5A2838', '--ink':'#7A4050', '--ink-sub':'#A06878', '--ink-light':'#D0A0AC', '--mint':'#F0A8B8', '--mint-deep':'#D08090', '--mint-bg':'#FACCD8', '--accent':'#D85878', '--accent-deep':'#B03050', '--accent-bg':'#FCD0DC', '--today-bg':'#FCE8EE', '--today-border':'#F0B0BC', '--warm-yellow':'#F8D8A8', '--soft-purple':'#C8A0B8' },
    paperColor: 'rgba(0,0,0,0)',
    headerGrad: 'linear-gradient(180deg, #FFF0F4 0%, #FCDCE4 100%)' },
  plain_mint: { name: 'ハッカ', emoji: '🌿', pattern: 'plain', cardShape: 'square',
    vars: { '--bg':'#DCF4E8', '--surface':'#FFFFFF', '--surface-warm':'#E0F0E5', '--line':'#B8D8C5', '--line-soft':'#CCE4D5', '--ink-dark':'#1F4030', '--ink':'#365840', '--ink-sub':'#608868', '--ink-light':'#90B098', '--mint':'#80C8A0', '--mint-deep':'#509878', '--mint-bg':'#B8DCC8', '--accent':'#D89878', '--accent-deep':'#A06848', '--accent-bg':'#F0DCC8', '--today-bg':'#FCEAEF', '--today-border':'#F4C8D2', '--warm-yellow':'#F8E4A0', '--soft-purple':'#B0A0C8' },
    paperColor: 'rgba(0,0,0,0)',
    headerGrad: 'linear-gradient(180deg, #E8F8EE 0%, #D0EEDA 100%)' },
  plain_gray: { name: 'グレー', emoji: '🩶', pattern: 'plain', simple: true, cardShape: 'square',
    vars: { '--bg':'#EEEEEE', '--surface':'#FFFFFF', '--surface-warm':'#E8E8E6', '--line':'#C8C8C8', '--line-soft':'#DCDCDC', '--ink-dark':'#202020', '--ink':'#383838', '--ink-sub':'#686868', '--ink-light':'#A0A0A0', '--mint':'#9090A8', '--mint-deep':'#606078', '--mint-bg':'#D0D0D8', '--accent':'#888080', '--accent-deep':'#585050', '--accent-bg':'#D8D2D2', '--today-bg':'#F0EAEA', '--today-border':'#B8A8A8', '--warm-yellow':'#C8B888', '--soft-purple':'#A09098' },
    paperColor: 'rgba(0,0,0,0)',
    headerGrad: 'linear-gradient(180deg, #F4F4F4 0%, #E0E0E0 100%)' }
};
