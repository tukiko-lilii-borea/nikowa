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
dog: { icon: 'pets', color: '#B87850' }, // 茶色（はっきり）
cat: { icon: 'pets', color: '#7A6E66' }, // グレージュ（差別化）
small: { icon: 'cruelty_free', color: '#D88AB0' }, // ピンク
aquatic: { icon: 'set_meal', color: '#3899B0' }, // 水色（深め）
bird: { icon: 'flutter_dash', color: '#5C9CD4' }, // 空色
reptile: { icon: 'bug_report', color: '#6FB088' }, // 緑
amphibian: { icon: 'cruelty_free', color: '#5FA985' }, // 深緑
insect: { icon: 'pest_control', color: '#9078B8' }, // 紫
plant: { icon: 'eco', color: '#7BBE5C' }, // 葉緑
livestock: { icon: 'agriculture', color: '#C49050' }, // 山吹色
other: { icon: 'auto_awesome', color: '#E0A858' }, // ゴールド
boy: { icon: 'boy', color: '#5C9CD4' }, // 空色
girl: { icon: 'girl', color: '#D88AB0' } // ピンク
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
function paperBackground(theme) {
const c = theme.paperColor;
const ginghamC = theme.ginghamColor || c;
switch (theme.pattern) {
case 'plain':
return 'none';
case 'dot':
return 'radial-gradient('+c+' 1px, transparent 1px)';
case 'polka':
return 'radial-gradient('+c+' 8px, transparent 8.5px), radial-gradient('+c+' 8px, transparent 8.5px)';
case 'stripe':
return 'repeating-linear-gradient(45deg, '+c+' 0 1px, transparent 1px 14px)';
case 'gingham':
return 'linear-gradient(90deg, '+ginghamC+' 50%, transparent 50%), linear-gradient(0deg, '+ginghamC+' 50%, transparent 50%)';
case 'asanoha':
// 麻の葉風：三角の繰り返し
return 'linear-gradient(30deg, '+c+' 12%, transparent 12.5%, transparent 87%, '+c+' 87.5%), linear-gradient(150deg, '+c+' 12%, transparent 12.5%, transparent 87%, '+c+' 87.5%), linear-gradient(90deg, '+c+' 1px, transparent 1px), linear-gradient(0deg, '+c+' 1px, transparent 1px)';
case 'seigaiha':
// 青海波風：同心円の繰り返し
return 'radial-gradient(circle at 50% 100%, transparent 56%, '+c+' 57%, '+c+' 60%, transparent 61%), radial-gradient(circle at 0% 100%, transparent 56%, '+c+' 57%, '+c+' 60%, transparent 61%), radial-gradient(circle at 100% 100%, transparent 56%, '+c+' 57%, '+c+' 60%, transparent 61%)';
case 'dalmatian':
case 'dalmatian_inv': {
// ダルメシアン風：有機的なブロブ柄（継ぎ目なしSVGタイリング）
// 200×200タイル内に楕円を配置。エッジに置いた楕円は反対側にもミラーで配置して継ぎ目を消す
const svg = "<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'>"
// 中央付近のブロブ（傾き・サイズに変化）
+ "<ellipse cx='35' cy='40' rx='15' ry='11' fill='" + c + "' transform='rotate(20 35 40)'/>"
+ "<ellipse cx='95' cy='28' rx='9' ry='7' fill='" + c + "' transform='rotate(-12 95 28)'/>"
+ "<ellipse cx='150' cy='50' rx='13' ry='10' fill='" + c + "' transform='rotate(-25 150 50)'/>"
+ "<ellipse cx='65' cy='88' rx='10' ry='8' fill='" + c + "' transform='rotate(35 65 88)'/>"
+ "<ellipse cx='115' cy='100' rx='14' ry='10' fill='" + c + "' transform='rotate(15 115 100)'/>"
+ "<ellipse cx='168' cy='112' rx='8' ry='6' fill='" + c + "'/>"
+ "<ellipse cx='40' cy='145' rx='12' ry='9' fill='" + c + "' transform='rotate(-18 40 145)'/>"
+ "<ellipse cx='90' cy='160' rx='9' ry='7' fill='" + c + "' transform='rotate(40 90 160)'/>"
+ "<ellipse cx='145' cy='150' rx='11' ry='8' fill='" + c + "' transform='rotate(-30 145 150)'/>"
+ "<ellipse cx='25' cy='110' rx='6' ry='5' fill='" + c + "'/>"
+ "<ellipse cx='100' cy='75' rx='5' ry='4' fill='" + c + "'/>"
+ "<ellipse cx='180' cy='85' rx='6' ry='5' fill='" + c + "'/>"
// 横エッジ（左右）：x=0とx=200に同じ位置でミラー配置
+ "<ellipse cx='0' cy='75' rx='10' ry='8' fill='" + c + "' transform='rotate(15 0 75)'/>"
+ "<ellipse cx='200' cy='75' rx='10' ry='8' fill='" + c + "' transform='rotate(15 200 75)'/>"
+ "<ellipse cx='0' cy='185' rx='9' ry='7' fill='" + c + "'/>"
+ "<ellipse cx='200' cy='185' rx='9' ry='7' fill='" + c + "'/>"
// 縦エッジ（上下）：y=0とy=200に同じ位置でミラー配置
+ "<ellipse cx='75' cy='0' rx='8' ry='6' fill='" + c + "' transform='rotate(20 75 0)'/>"
+ "<ellipse cx='75' cy='200' rx='8' ry='6' fill='" + c + "' transform='rotate(20 75 200)'/>"
+ "<ellipse cx='180' cy='0' rx='7' ry='5' fill='" + c + "'/>"
+ "<ellipse cx='180' cy='200' rx='7' ry='5' fill='" + c + "'/>"
+ "</svg>";
return "url(\"data:image/svg+xml;utf8," + encodeURIComponent(svg) + "\")";
}
case 'fleurdelis':
// フルール・ド・リス風（ダイヤモンド＋十字の繰り返し）
return 'linear-gradient(45deg, '+c+' 25%, transparent 25%, transparent 75%, '+c+' 75%), linear-gradient(-45deg, '+c+' 25%, transparent 25%, transparent 75%, '+c+' 75%), radial-gradient(circle, '+c+' 2px, transparent 2.5px)';
case 'damask':
// ダマスク風（ダイヤモンド＋小さなドットの繰り返し）
return 'linear-gradient(45deg, '+c+' 25%, transparent 25%, transparent 75%, '+c+' 75%), linear-gradient(-45deg, '+c+' 25%, transparent 25%, transparent 75%, '+c+' 75%), radial-gradient('+c+' 1.5px, transparent 2px), radial-gradient('+c+' 1px, transparent 1.5px)';
case 'rhombus': {
// lpeg.info方式：4方向のlinear-gradientでくっきりひし形
const bg = (theme.vars && theme.vars['--bg']) || '#FFFFFF';
return ''
+ 'linear-gradient(135deg, ' + c + ' 25%, transparent 25%), '
+ 'linear-gradient(225deg, ' + c + ' 25%, transparent 25%), '
+ 'linear-gradient(45deg, ' + c + ' 25%, transparent 25%), '
+ 'linear-gradient(315deg, ' + c + ' 25%, ' + bg + ' 25%)';
}
case 'tufted': {
// キルティング/タフテッド（シンデレラ専用：宮殿のソファみたいな立体感）
const t = theme.tufted || {
light:'rgba(255,255,255,0.85)', mid:'rgba(184,205,216,0.6)',
glow:'rgba(184,205,216,0.4)', shadow:'rgba(120,144,180,0.35)',
deepShadow:'rgba(120,144,180,0.22)', stitch:'rgba(80,100,140,0.18)'
};
return ''
+ 'radial-gradient('+t.light+' 4%, '+t.mid+' 9%, transparent 9%), '
+ 'radial-gradient('+t.light+' 4%, '+t.mid+' 9%, transparent 9%), '
+ 'radial-gradient('+t.glow+' 20%, transparent 100%), '
+ 'radial-gradient('+t.glow+' 20%, transparent 100%), '
+ 'radial-gradient('+t.shadow+' 35%, transparent 60%), '
+ 'radial-gradient('+t.shadow+' 35%, transparent 60%), '
+ 'radial-gradient('+t.deepShadow+' 0, transparent 100%), '
+ 'radial-gradient('+t.deepShadow+' 0, transparent 100%), '
+ 'linear-gradient(45deg, transparent 49%, '+t.stitch+' 50%, transparent 70%), '
+ 'linear-gradient(-45deg, transparent 49%, '+t.stitch+' 50%, transparent 70%)';
}
default:
return 'radial-gradient('+c+' 1px, transparent 1px)';
}
}
function paperBackgroundSize(theme) {
switch (theme.pattern) {
case 'plain': return 'auto';
case 'dot': return '10px 10px';
case 'polka': return '46px 46px, 46px 46px';
case 'stripe': return 'auto';
case 'gingham': return '22px 22px, 22px 22px';
case 'asanoha': return '28px 48px, 28px 48px, 28px 48px, 28px 48px';
case 'seigaiha': return '36px 18px, 36px 18px, 36px 18px';
case 'dalmatian': return '200px 200px';
case 'dalmatian_inv': return '200px 200px';
case 'fleurdelis': return '20px 20px, 20px 20px, 20px 20px';
case 'damask': return '24px 24px, 24px 24px, 24px 24px, 12px 12px';
case 'tufted': return '100px 100px';
case 'rhombus': return '40px 40px';
default: return '10px 10px';
}
}
// topbar用の桜吹雪HTML生成
// 日付バッジ（現在無効）
function topbarDateHtml() {
return '';
}
function topbarPetalHtml() {
var theme = THEMES[data.themeId || 'mint'];
if (theme && theme.simple) return '';
var colors = ['var(--accent)','var(--accent-deep)','var(--soft-purple)','var(--mint-deep)'];
var lefts = [5,68,22,85,38,55,12,78];
var delays = [-1.8,-0.4,-3.1,-2.2,-0.9,-2.7,-1.3,-3.5];
var durs = [4,5,4,6,5,4,6,5];
var h = '<div class="topbar-petal-layer">';
var anims = ['nkPetalSmall','nkPetalSmall2','nkPetalSmall','nkPetalSmall2','nkPetalSmall','nkPetalSmall2','nkPetalSmall','nkPetalSmall2'];
for (var i = 0; i < 8; i++) {
var size = (7 + (i % 3) * 2);
var color = colors[i % 4];
h += '<div class="topbar-petal" style="left:'+lefts[i]+'%;font-size:'+size+'px;color:'+color+';animation-name:'+anims[i]+';animation-duration:'+durs[i]+'s;animation-delay:'+delays[i]+'s;">❀</div>';
}
h += '</div>';
return h;
}
// 色を白で薄める（ratio=0:変化なし、1:真っ白）
function _lightenHex(hex, ratio) {
if (!hex) return hex;
let h = String(hex).replace('#', '').trim();
if (h.length === 3) {
h = h[0]+h[0]+h[1]+h[1]+h[2]+h[2];
}
if (h.length !== 6) return hex;
const r = parseInt(h.substring(0,2), 16);
const g = parseInt(h.substring(2,4), 16);
const b = parseInt(h.substring(4,6), 16);
if (isNaN(r) || isNaN(g) || isNaN(b)) return hex;
const nr = Math.round(r + (255 - r) * ratio);
const ng = Math.round(g + (255 - g) * ratio);
const nb = Math.round(b + (255 - b) * ratio);
return '#' +
nr.toString(16).padStart(2,'0') +
ng.toString(16).padStart(2,'0') +
nb.toString(16).padStart(2,'0');
}
// 暗いテーマかどうか判定（明度ベース）
function _isDarkColor(hex) {
if (!hex) return false;
let h = String(hex).replace('#', '').trim();
if (h.length === 3) h = h[0]+h[0]+h[1]+h[1]+h[2]+h[2];
if (h.length !== 6) return false;
const r = parseInt(h.substring(0,2), 16);
const g = parseInt(h.substring(2,4), 16);
const b = parseInt(h.substring(4,6), 16);
if (isNaN(r) || isNaN(g) || isNaN(b)) return false;
// 知覚輝度（YIQ式）
return (r*299 + g*587 + b*114) / 1000 < 128;
}
// hexカラーをrgba文字列に変換
function _hexToRgba(hex, alpha) {
if (!hex) return 'rgba(120,140,130,'+alpha+')';
let h = String(hex).replace('#', '').trim();
if (h.length === 3) h = h[0]+h[0]+h[1]+h[1]+h[2]+h[2];
if (h.length !== 6) return 'rgba(120,140,130,'+alpha+')';
const r = parseInt(h.substring(0,2), 16);
const g = parseInt(h.substring(2,4), 16);
const b = parseInt(h.substring(4,6), 16);
if (isNaN(r) || isNaN(g) || isNaN(b)) return 'rgba(120,140,130,'+alpha+')';
return 'rgba('+r+','+g+','+b+','+alpha+')';
}
function applyTheme(themeId) {
const theme = THEMES[themeId] || THEMES.mint;
const root = document.documentElement;
for (const key in theme.vars) root.style.setProperty(key, theme.vars[key]);
// ダークテーマ判定（カード背景色を切替）
const isDark = _isDarkColor(theme.vars['--bg']);
// 区切り線はテーマのaccent色（3色目）の薄めで統一
const accentColor = theme.vars['--accent'] || '#C8956A';
const dividerColor = _hexToRgba(accentColor, isDark ? 0.35 : 0.28);
if (isDark) {
// 暗いテーマ：黒寄りの半透明カード
root.style.setProperty('--card-bg', 'rgba(40,38,55,0.55)');
root.style.setProperty('--card-border', 'rgba(180,170,210,0.25)');
root.style.setProperty('--card-divider', dividerColor);
// ロゴ：白反転 + テーマアクセント色のふんわりグロー
root.style.setProperty('--logo-filter', 'invert(1) brightness(0.95) drop-shadow(0 0 8px '+_hexToRgba(accentColor, 0.6)+') drop-shadow(0 2px 4px rgba(0,0,0,0.3))');
root.style.setProperty('--logo-color', theme.vars['--ink-dark'] || '#FFFFFF');
} else {
// 明るいテーマ：白寄りの半透明カード＋アクセントカラーの枠線
root.style.setProperty('--card-bg', 'rgba(255,255,255,0.78)');
root.style.setProperty('--card-border', _hexToRgba(accentColor, 0.22));
root.style.setProperty('--card-divider', dividerColor);
root.style.setProperty('--logo-filter', 'drop-shadow(0 2px 8px rgba(0,0,0,0.04))');
root.style.setProperty('--logo-color', theme.vars['--accent-deep'] || '#333333');
}
// ネオンテーマだけグロー演出を追加
if (themeId === 'neon') {
const a = theme.vars['--accent']; // #C8236B ピンクマゼンタ
const m = theme.vars['--mint']; // #00ABE1 シアン
root.style.setProperty('--logo-color', a);
root.style.setProperty('--logo-glow',
'drop-shadow(0 0 6px '+a+') drop-shadow(0 0 14px '+a+') drop-shadow(0 0 3px '+m+')');
root.style.setProperty('--text-glow',
'0 0 6px '+a+', 0 0 14px '+a+', 0 0 3px '+m);
root.style.setProperty('--logo-anim', 'neonPulse 2.4s ease-in-out infinite');
// A) カードグラデーション
root.style.setProperty('--neon-overlay-display', 'block');
root.style.setProperty('--neon-overlay-bg',
'linear-gradient(135deg, rgba(200,35,107,0.18) 0%, rgba(0,171,225,0.10) 50%, rgba(200,35,107,0.14) 100%)');
// C) ターミナルフォント
root.style.setProperty('--message-font', "'Courier New', 'Courier', monospace");
root.style.setProperty('--message-letter-spacing', '2px');
} else {
root.style.setProperty('--logo-glow', 'none');
root.style.setProperty('--text-glow', '0 1px 6px '+accentColor+', 0 0 2px '+accentColor);
root.style.setProperty('--logo-anim', 'none');
root.style.setProperty('--neon-overlay-display', 'none');
root.style.setProperty('--message-font', 'inherit');
root.style.setProperty('--message-letter-spacing', '0.5px');
}
// シンデレラテーマだけ背景色を薄める（柄が濃いから見にくい対策）
if (themeId === 'cinderella' && theme.vars['--bg']) {
const lightenedBg = _lightenHex(theme.vars['--bg'], 0.45);
root.style.setProperty('--bg', lightenedBg);
}
if (theme.simple) {
document.body.classList.add('theme-simple');
} else {
document.body.classList.remove('theme-simple');
}
// シンデレラテーマだけ柄の色も薄める
let themeLight = theme;
if (themeId === 'cinderella') {
themeLight = Object.assign({}, theme);
if (theme.paperColor) themeLight.paperColor = _lightenHex(theme.paperColor, 0.5);
if (theme.ginghamColor) themeLight.ginghamColor = _lightenHex(theme.ginghamColor, 0.5);
}
const paperBg = paperBackground(themeLight);
const paperSize = paperBackgroundSize(themeLight);
const multiPosPatterns = ['polka','dalmatian','dalmatian_inv','seigaiha','asanoha'];
const paperPosMap = {
'polka': '0 0, 23px 23px',
'dalmatian': '0 0',
'dalmatian_inv': '0 0',
'seigaiha': '0 0, 18px 0, 36px 0',
'asanoha': '0 0, 0 0, 0 0, 0 0',
'fleurdelis': '0 0, 10px 10px, 10px 10px',
'damask': '0 0, 12px 12px, 0 0, 6px 6px',
'tufted': '0 0, 50px 50px, 50px 0, 0 50px, 50px 0, 100px 50px, 0 0, 50px 50px, 0 0, 0 0',
'rhombus': '40px 0, 40px 0, 0 0, 0 0'
};
const paperPos = paperPosMap[theme.pattern] || '0 0';
document.body.style.backgroundImage = paperBg;
document.body.style.backgroundSize = paperSize;
// PC幅用にapp-frameにも反映
var appFrame = document.querySelector('.app-frame');
if (appFrame) {
appFrame.style.backgroundColor = (themeId === 'cinderella')
? _lightenHex(theme.vars['--bg'] || '#FFFFFF', 0.45)
: (theme.vars['--bg'] || '#FFFFFF');
appFrame.style.backgroundImage = paperBackground(themeLight);
appFrame.style.backgroundSize = paperBackgroundSize(themeLight);
appFrame.style.backgroundPosition = paperPos;
}
document.body.style.backgroundPosition = paperPos;
let styleEl = document.getElementById('theme-dynamic');
if (!styleEl) {
styleEl = document.createElement('style');
styleEl.id = 'theme-dynamic';
document.head.appendChild(styleEl);
}
// クレヨン色（テーマの3色目＝accent）
var crayonColor = (theme.vars && theme.vars['--accent']) ? theme.vars['--accent'] : '#C8956A';
var crayonHex = encodeURIComponent(crayonColor);
var crayonSvg = "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='8' viewBox='0 0 200 8'><path d='M2,4 Q10,2 18,4 T36,4 T54,3 T72,5 T90,4 T108,3 T126,5 T144,4 T162,3 T180,5 T198,4' stroke='"+crayonHex+"' stroke-width='2.5' fill='none' stroke-linecap='round' opacity='0.85'/></svg>\")";
styleEl.textContent = '.topbar { background: '+theme.headerGrad+' !important; }'
+ ' .section-title { background-image: '+crayonSvg+' !important; }'
+ ' .hero-glass::before { background-image: '+paperBg+' !important; background-size: '+paperSize+' !important; background-position: '+paperPos+' !important; }'
+ ' .mode-card::after { background-image: '+paperBg+' !important; background-size: '+paperSize+' !important; background-position: '+paperPos+' !important; }'
+ ' .main-house-card::after { background-image: '+paperBg+' !important; background-size: '+paperSize+' !important; background-position: '+paperPos+' !important; }';
// topbarに桜吹雪を追加
setTimeout(function(){
document.querySelectorAll('.topbar').forEach(function(tb){
if (!tb.querySelector('.topbar-petal-layer')) {
tb.insertAdjacentHTML('afterbegin', topbarPetalHtml());
}
});
}, 50);
}
function setTheme(themeId) {
if (!THEMES[themeId]) return;
data.themeId = themeId;
applyTheme(themeId);
saveData();
_suppressScrollTop = true;
render();
}
function setThemeFromOnboarding(themeId) {
// オンボーディング中：レンダーせずにテーマだけ即適用
if (!THEMES[themeId]) return;
data.themeId = themeId;
applyTheme(themeId);
saveData();
// 選択状態を更新（描画し直し）
highlightOnbThemeBtn();
// モーダル背景もテーマに合わせる
_updateOnbModalBg(THEMES[themeId]);
}
// オンボーディング用の無料テーマ一覧（4既存＋4無地）
const ONB_FREE_THEMES = ['kurogoma', 'tofu', 'cream_soda', 'cinderella', 'plain_white', 'plain_pink', 'plain_mint', 'plain_gray'];
function highlightOnbThemeBtn() {
const grid = document.getElementById('onbThemeGrid');
if (!grid) return;
const cur = data.themeId || 'mint';
let html = '';
for (const id of ONB_FREE_THEMES) {
const theme = THEMES[id];
if (!theme) continue;
const bgColor = theme.vars['--bg'];
const textColor = theme.vars['--ink-dark'];
const lineColor = theme.vars['--line'];
const accentColor = theme.vars['--accent'];
const isSelected = cur === id;
const pattern = paperBackground(theme).replace(/'/g, '&#39;');
const patternSize = paperBackgroundSize(theme);
const borderStyle = isSelected
? 'border:2.5px solid '+accentColor+';'
: 'border:1.5px solid '+lineColor+';';
html += '<button type="button" class="theme-btn '+(isSelected?'selected':'')+'" data-theme-id="'+id+'" onclick="setThemeFromOnboarding(\''+id+'\')" style="background-color:'+bgColor+';background-image:'+pattern+';background-size:'+patternSize+';color:'+textColor+';'+borderStyle+'transition:background 0.25s ease, border 0.25s ease;">';
html += '<div class="theme-swatch">';
html += '<div class="theme-swatch-bg" style="background:'+theme.vars['--bg']+'"></div>';
html += '<div class="theme-swatch-mint" style="background:'+theme.vars['--mint']+'"></div>';
html += '<div class="theme-swatch-accent" style="background:'+theme.vars['--accent']+'"></div>';
html += '</div><div class="theme-name" style="color:'+textColor+';font-weight:700;">'+theme.emoji+' '+theme.name+'</div></button>';
}
grid.innerHTML = html;
}
const PET_TYPE_NAMES = {
dog: 'いぬ', cat: 'ねこ', small: '小動物', aquatic: '水生生物',
bird: '鳥類', reptile: '爬虫類', amphibian: '両生類', insect: '昆虫',
plant: '植物', livestock: '家畜', other: 'そのほか',
boy: '男の子', girl: '女の子'
};
const PET_TYPES = ['dog','cat','small','aquatic','bird','reptile','amphibian','insect','plant','livestock'];
const KIDS_TYPES = ['boy','girl'];
const PLACE_NAMES = { home: 'おうち', rainbow: '虹の橋' };
const PLACE_NAMES_KIDS = { home: 'おうち', rainbow: '星のひろば' };
// にこわタウン：施設カテゴリ
const FACILITY_CATEGORIES = [
{ id: 'hospital', icon: '🏥', label: '動物病院' },
{ id: 'trimming', icon: '✂️', label: 'トリミング' },
{ id: 'shop', icon: '🛍', label: 'ペットショップ' },
{ id: 'hotel', icon: '🏨', label: 'ペットホテル' },
{ id: 'dogrun', icon: '🐾', label: 'ドッグラン' },
{ id: 'cafe', icon: '☕', label: 'ペット可カフェ' },
{ id: 'school', icon: '🎓', label: 'しつけ教室' },
{ id: 'rescue', icon: '🌷', label: '保護団体' },
{ id: 'memorial', icon: '🕊', label: 'メモリアル' },
{ id: 'other', icon: '✨', label: 'そのほか' }
];
const FACILITY_CAT_MAP = {};
for (const c of FACILITY_CATEGORIES) FACILITY_CAT_MAP[c.id] = c;
const PLACE_ICONS = { home: '🏠', rainbow: '🌈', star: '⭐' };
const DEFAULT_CARE_ITEMS = [
{ id: 'food', icon: '🍚', label: 'ごはん' },
{ id: 'water', icon: '💧', label: 'おみず' },
{ id: 'toilet', icon: '🚽', label: 'トイレ' },
{ id: 'walk', icon: '🌿', label: 'おさんぽ' },
{ id: 'treat', icon: '🍪', label: 'おやつ' }
];
const CARE_LABEL_TO_MS = {
'ごはん': 'restaurant',
'お水': 'water_drop', 'おみず': 'water_drop',
'おふろ': 'bathtub',
'歯みがき': 'dentistry',
'さんぽ': 'pets', 'おさんぽ': 'pets',
'くすり': 'medication',
'トイレ': 'wc',
'ブラッシング': 'content_cut',
'ワクチン': 'vaccines'
};
function renderCareIcon(icon, label) {
const ms = label && CARE_LABEL_TO_MS[label];
if (ms) return '<span class="material-symbols-rounded" style="font-size:inherit;vertical-align:middle;">'+ms+'</span>';
return escapeHtml(icon || '');
}
const ICON_CHOICES = ['🍚','🥣','🍖','🥩','🐟','🍗','🥚','🥕','🥬','🍯','🍪','🦴','💧','🚰','🍵','🚽','🛁','🪥','🧴','🧼','🌿','🌱','🌸','🌷','🌻','🌳','🍀','✂️','💅','🧹','💊','💉','🏥','🌡️','🩺','🦷','📷','🎀','🎈','🎁','🎂','✨','💕','💖','⭐','🌟','🎵','🌞','🌙','☀️','⏰','🕐','🐾','🍂','❄️','🌧️','☂️'];
// アバター選択肢：カテゴリ別 material icons
const AVATAR_CHOICES = [
// 自然・植物
'energy_savings_leaf','eco','spa','local_florist','yard','park','forest','grass',
// 動物・いきもの
'pets','cruelty_free','bug_report','flutter_dash','kitesurfing',
// きらきら・感情
'favorite','star','mood','sentiment_very_satisfied','auto_awesome','flare','bolt',
// 空・天気
'wb_sunny','nightlight','water_drop','air','tornado','ac_unit',
// フード・カフェ
'cake','local_cafe','coffee','icecream','lunch_dining','cookie',
// ライフ・趣味
'music_note','palette','diamond','brush','self_improvement','photo_camera',
'headphones','sports_esports','fitness_center','directions_run',
// その他かわいい
'child_friendly','toys','rocket_launch','beach_access','travel_explore',
];
// 人物アイコン（フリー素材・SVG）— サンプル8個
const PEOPLE_ICONS = {
"おじいちゃんのフリー素材2": "<svg version=\"1.1\" id=\"_x32_\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\" xml:space=\"preserve\"> <style type=\"text/css\"> .st0{fill:#4B4B4B;}</style> <g><path class=\"st0\" d=\"M244.582,172.163h22.838c2.371,20.538,19.62,36.525,40.798,36.534c22.786-0.009,41.265-18.47,41.265-41.274 c0-22.796-18.479-41.265-41.265-41.265c-19.932,0-36.56,14.109-40.418,32.891h-23.6c-3.876-18.782-20.486-32.891-40.418-32.891 c-22.804,0-41.265,18.469-41.265,41.265c0,22.804,18.462,41.265,41.265,41.274C224.961,208.688,242.193,192.701,244.582,172.163z M308.218,139.272c15.537,0.035,28.116,12.614,28.15,28.151c-0.034,15.546-12.613,28.124-28.15,28.159 c-15.555-0.035-28.133-12.613-28.168-28.159C280.085,151.886,292.664,139.306,308.218,139.272z M175.633,167.423 c0.034-15.537,12.613-28.116,28.15-28.151c15.555,0.035,28.133,12.614,28.15,28.151c-0.017,15.546-12.595,28.124-28.15,28.159 C188.246,195.547,175.668,182.969,175.633,167.423z\" style=\"fill: rgb(75, 75, 75);\"></path><path class=\"st0\" d=\"M454.887,392.989c-11.229-20.598-28.86-33.22-46.023-41.637c-17.182-8.418-34.362-13.028-45.539-17.233 c-11.039-4.084-21.852-5.277-28.636-7.137c-3.373-0.848-5.519-1.93-5.951-2.353l-0.087-0.078l-0.034-0.441c0-1.964,0-2.872,0-3.313 v-0.381c0-0.537,0-1.808,0-4.42c11.748-13.072,28.531-33.367,35.538-65.341c2.353-1.082,4.672-2.302,6.938-3.876 c5.849-4.048,10.832-9.931,15.001-17.847c4.204-7.95,7.907-18.072,11.852-31.879c2.006-7.042,2.941-13.175,2.958-18.66 c0-6.324-1.297-11.861-3.72-16.359c-3.633-6.844-9.516-10.658-14.274-12.38c-0.346-0.13-0.657-0.19-0.986-0.303 c0-7.604,0-19.344,0-30.14c-0.052-16.437-3.634-45.47-21.489-71.544c-8.945-12.976-21.576-25.071-38.791-33.739 C304.446,5.234,282.784,0,256,0C229.2,0,207.555,5.234,190.34,13.928c-25.866,13.02-41.196,33.679-49.657,53.602 c-8.529,19.984-10.589,39.31-10.606,51.681c0,10.796,0,22.553,0,30.158c-1.904,0.64-3.893,1.454-6.004,2.742 c-3.408,2.102-6.868,5.406-9.256,9.923c-2.422,4.498-3.72,10.035-3.72,16.359c0,5.484,0.951,11.618,2.959,18.66 c5.277,18.392,10.053,30.304,16.281,39.12c3.132,4.386,6.696,7.916,10.571,10.606c2.249,1.574,4.585,2.794,6.938,3.876 c6.99,31.974,23.79,52.269,35.539,65.341c0,2.621,0,3.901,0,4.429v0.182v0.19c0,0.432,0,1.34,0,3.313l-0.034,0.354 c-0.036,0.087-0.813,0.813-2.734,1.592c-2.873,1.229-7.838,2.336-13.462,3.435c-5.657,1.142-12.007,2.353-18.306,4.558 c-7.561,2.674-17.786,5.624-28.825,9.75c-16.523,6.212-35.122,15.122-49.881,30.927c-14.81,15.762-25.036,38.575-24.932,69.528 c0,4.274,0.19,8.712,0.571,13.314c0.276,3.088,1.436,5.554,2.768,7.535c2.526,3.711,5.744,6.324,9.706,8.997 c6.92,4.585,16.367,8.98,28.444,13.306C122.776,500.27,182.277,511.983,256,512c59.899,0,110.473-7.768,146.617-17.552 c18.098-4.905,32.562-10.278,43.099-15.693c5.295-2.734,9.602-5.442,13.098-8.486c1.73-1.54,3.304-3.166,4.637-5.165 c1.315-1.981,2.491-4.447,2.768-7.535c0.381-4.594,0.57-9.014,0.57-13.27C466.808,423.656,462.361,406.674,454.887,392.989z M165.806,241.89l-0.986-5.58l-5.33-1.903c-3.097-1.108-5.433-2.224-7.457-3.634c-2.976-2.102-5.692-4.965-8.911-10.986 c-3.2-5.978-6.609-14.984-10.329-28.081c-1.626-5.693-2.214-10.088-2.197-13.314c0-3.755,0.71-5.874,1.402-7.172 c1.038-1.886,2.249-2.647,3.91-3.313c1.349-0.528,2.785-0.666,3.339-0.684l10.312,1.176v-10.917c0,0,0-20.502,0-38.272 c-0.052-13.634,3.374-39.336,18.064-60.48c7.336-10.623,17.353-20.252,31.506-27.406c14.154-7.137,32.58-11.826,56.872-11.834 c24.292,0.008,42.719,4.697,56.872,11.834c21.16,10.71,33.306,27.07,40.522,43.869c7.18,16.732,9.066,33.835,9.031,44.017 c0,17.77,0,38.272,0,38.272v10.312l10.07-0.572c0.277-0.051,3.322,0.208,5.121,1.427c0.934,0.606,1.679,1.272,2.388,2.57 c0.674,1.298,1.402,3.417,1.402,7.172c0,3.226-0.572,7.621-2.198,13.314c-4.965,17.483-9.412,27.605-13.408,33.142 c-2.008,2.794-3.824,4.516-5.848,5.926c-2.008,1.41-4.343,2.526-7.44,3.634l-5.347,1.903l-0.986,5.58 c-5.727,32.121-22.25,50.15-34.552,63.853l-2.491,2.777v3.746c0,5.312,0,7.405,0,8.149c0,0.086,0,0.138,0,0.138 c0,0.173,0,0.243,0,0.243v0.329c0,0.545,0,1.462,0,2.984c-0.018,3.019,0.588,6.116,1.921,8.875c2.353,4.923,6.47,8.02,10.277,9.854 c1.004,0.484,2.024,0.848,3.028,1.238c-1.643,9.403-5.934,18.937-13.824,26.74c-10.434,10.321-27.389,18.133-54.536,18.167 c-27.146-0.034-44.12-7.846-54.553-18.167c-7.837-7.768-12.146-17.242-13.807-26.61c2.596-1.038,5.157-2.344,7.613-4.273 c2.128-1.696,4.153-3.962,5.537-6.739c1.401-2.768,2.093-5.961,2.076-9.084c0-1.973,0-2.881,0-3.313c0-0.234,0-0.372,0-0.372 c0-0.744,0-2.83,0-8.158v-3.746l-2.509-2.777C188.056,292.04,171.549,274.011,165.806,241.89z M446.842,454.756 c-0.588,0.632-1.868,1.808-3.823,3.071c-4.776,3.201-13.115,7.25-24.172,11.186c-33.271,11.939-91.199,23.522-162.846,23.504 c-58.186,0-107.272-7.604-141.53-16.886c-17.112-4.62-30.556-9.706-39.276-14.205c-4.344-2.224-7.51-4.344-9.153-5.805 c-0.399-0.338-0.675-0.632-0.9-0.857c-0.26-3.642-0.45-7.18-0.45-10.511c0.018-17.916,3.737-31.412,9.516-42.087 c8.652-15.969,22.337-26.169,37.425-33.618c15.07-7.422,31.126-11.714,43.687-16.117c5.692-2.05,13.045-3.244,20.382-4.827 c2.214,11.212,7.508,22.588,17.008,32.018c13.098,13.02,33.808,21.8,63.29,21.766c29.483,0.035,50.176-8.746,63.274-21.766 c9.585-9.499,14.897-20.988,17.077-32.286c0.918,0.19,1.834,0.381,2.752,0.572c6.021,1.211,12.077,2.456,17.388,4.464 c8.426,3.14,18.322,6.074,28.513,9.932c15.312,5.778,31.005,13.573,42.563,25.935c11.506,12.406,19.638,29.189,19.724,56.059 C447.292,447.602,447.118,451.132,446.842,454.756z\" style=\"fill: rgb(75, 75, 75);\"></path><path class=\"st0\" d=\"M232.712,233.213c1.661-2.231,0.329-4.93-2.993-6.047c-3.322-1.116-7.353-0.216-9.014,2.016l-26.628,35.745 c-1.661,2.232-0.312,4.932,2.993,6.047c3.322,1.116,7.354,0.216,9.015-2.007L232.712,233.213z\" style=\"fill: rgb(75, 75, 75);\"></path></g></svg>", "おばあちゃんアイコ𰼱": "<svg version=\"1.1\" id=\"_x32_\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\" xml:space=\"preserve\"> <style type=\"text/css\">.st0{fill:#4B4B4B;}</style> <g><path class=\"st0\" d=\"M418.447,414.786c-9.159-16.826-23.56-27.136-37.58-34.012c-14.034-6.876-28.076-10.642-37.198-14.076 c-9.017-3.336-17.85-4.31-23.391-5.83c-2.763-0.693-4.508-1.576-4.861-1.922l-0.071-0.064l-0.028-0.36c0-1.562,0-2.325,0-2.7v-0.31 c0-0.431,0-1.477,0-3.618c9.582-10.678,23.313-27.256,29.029-53.374c1.922-0.884,3.823-1.88,5.667-3.166 c4.778-3.307,8.848-8.113,12.254-14.579c3.434-6.494,6.459-14.762,9.681-26.04c1.639-5.731,2.402-10.727,2.402-15.193 c0.014-2.297-0.276-4.41-0.693-6.444c2.05-1.625,4.452-3.915,6.812-7.18c5.384-7.349,10.176-19.271,10.148-37.036 c0-8.981-1.188-19.475-4.057-31.771c-7.123-30.563-23.108-55.395-43.106-72.609c-10.657-9.165-22.486-16.126-34.76-20.705 c0.629-3.272,1.038-6.622,1.038-10.07C309.727,24.047,285.68,0,255.993,0c-29.672,0-53.727,24.047-53.727,53.727 c0,3.448,0.43,6.791,1.059,10.062c-12.296,4.579-24.125,11.54-34.788,20.712c-20.005,17.207-35.976,42.046-43.106,72.609 c-2.869,12.303-4.063,22.79-4.063,31.771c-0.028,17.766,4.777,29.687,10.148,37.036c2.374,3.265,4.77,5.554,6.819,7.18 c-0.417,2.035-0.7,4.155-0.685,6.444c0,4.466,0.763,9.462,2.395,15.193c4.318,15.024,8.212,24.754,13.306,31.955 c2.551,3.583,5.469,6.466,8.635,8.664c1.838,1.286,3.746,2.282,5.668,3.166c5.709,26.118,19.44,42.696,29.029,53.374 c0,2.141,0,3.187,0,3.618v0.31c0,0.375,0,1.138,0,2.7l-0.028,0.289c-0.035,0.071-0.664,0.664-2.233,1.3 c-2.346,1.004-6.403,1.908-10.996,2.806c-4.615,0.933-9.808,1.922-14.953,3.724c-6.176,2.184-14.536,4.594-23.546,7.971 c-13.497,5.074-28.69,12.352-40.745,25.263c-12.098,12.875-20.451,31.51-20.366,56.794c0,3.483,0.148,7.109,0.467,10.868 c0.218,2.522,1.173,4.537,2.254,6.155c2.07,3.031,4.699,5.166,7.936,7.349c5.653,3.745,13.37,7.335,23.228,10.869 C147.176,502.418,195.772,511.986,256,512c48.93,0,90.234-6.345,119.764-14.338c14.783-4.007,26.598-8.396,35.206-12.819 c4.324-2.233,7.843-4.445,10.684-6.932c1.428-1.251,2.714-2.586,3.802-4.212c1.074-1.625,2.036-3.632,2.261-6.162 c0.311-3.753,0.467-7.364,0.467-10.84C428.198,439.837,424.566,425.965,418.447,414.786z M229.26,26.994 c6.868-6.854,16.268-11.073,26.733-11.08c10.465,0.007,19.878,4.226,26.746,11.08c6.855,6.87,11.066,16.268,11.073,26.734 c0,1.922-0.19,3.787-0.459,5.617c-5.837-1.158-11.709-1.766-17.553-1.774c-6.699,0-13.328,0.912-19.808,2.565 c-6.466-1.646-13.094-2.565-19.801-2.565c-5.858,0.007-11.737,0.615-17.588,1.781c-0.268-1.83-0.424-3.71-0.424-5.624 C218.188,43.261,222.406,33.856,229.26,26.994z M147.663,220.144c-1.096-0.954-2.467-2.346-3.88-4.472 c-3.095-4.678-6.472-12.72-6.487-26.79c0-7.568,1.004-16.854,3.64-28.153c6.367-27.284,20.535-49.141,37.982-64.164 c17.454-15.03,38.146-23.101,57.274-23.072c6.056,0,11.964,0.792,17.617,2.41c1.413,0.403,2.968,0.403,4.382,0 c5.646-1.618,11.547-2.41,17.61-2.41c19.136-0.028,39.82,8.042,57.267,23.072c17.454,15.024,31.63,36.88,37.99,64.164 c2.643,11.292,3.646,20.585,3.646,28.153c-0.028,15.009-3.858,23.157-7.109,27.68c-1.23,1.689-2.332,2.756-3.279,3.576 c-2.841-0.488-5.774,0.509-7.618,2.848c-1.266,1.618-1.752,3.59-1.598,5.526l-9.271,11.405l-2.162-22.704l-2.918-1.675 c-32.838-18.882-52.568-37.877-64.072-51.982c-5.753-7.06-9.448-12.896-11.674-16.896c-1.116-1.993-1.865-3.534-2.325-4.537 l-0.473-1.096l-0.092-0.226l-6.12-16.692l-6.113,16.692c-0.494,1.187-15.051,38.145-78.637,74.736l-2.911,1.675l-2.162,22.704 l-9.272-11.405c0.142-1.936-0.339-3.908-1.611-5.526C153.443,220.632,150.497,219.643,147.663,220.144z M300.555,396.674 c-8.523,8.431-22.387,14.812-44.555,14.84c-22.174-0.028-36.039-6.409-44.562-14.84c-6.402-6.345-9.921-14.084-11.278-21.736 c2.128-0.848,4.219-1.915,6.226-3.491c1.738-1.385,3.385-3.23,4.516-5.504c1.145-2.262,1.71-4.869,1.696-7.42 c0-1.562,0-2.325,0-2.7v-0.31c0-0.6,0-2.297,0-6.664c0-1.972-0.721-3.866-2.042-5.329c-10.056-11.193-23.539-25.92-28.231-52.158 c-0.495-2.826-2.459-5.144-5.158-6.112c-2.53-0.904-4.438-1.816-6.092-2.968c-2.43-1.717-4.65-4.056-7.279-8.974 c-2.614-4.883-5.398-12.239-8.444-22.938c-0.459-1.611-0.7-2.94-0.968-4.297l21.737,26.719l4.551-47.728 c44.703-26.308,66.129-53.154,75.329-68.03c9.201,14.876,30.627,41.722,75.33,68.03l4.544,47.728l21.737-26.719 c-0.269,1.364-0.502,2.686-0.968,4.297c-4.056,14.281-7.688,22.55-10.96,27.072c-1.64,2.282-3.116,3.689-4.77,4.84 c-1.64,1.152-3.547,2.064-6.077,2.968c-2.707,0.968-4.664,3.286-5.166,6.112c-4.685,26.238-18.175,40.966-28.231,52.158 c-1.314,1.463-2.042,3.357-2.042,5.329c0,4.367,0,6.063,0,6.664v0.31c0,0.375,0,1.138,0,2.7c-0.007,2.466,0.488,4.996,1.576,7.25 c1.915,4.021,5.286,6.551,8.395,8.049c0.82,0.396,1.654,0.693,2.473,1.011C310.498,382.513,306.993,390.3,300.555,396.674z\" style=\"fill: rgb(75, 75, 75);\"></path><path class=\"st0\" d=\"M236.44,279.334c-2.714-0.912-6.007-0.176-7.364,1.647l-21.75,29.198c-1.357,1.824-0.262,4.028,2.445,4.94 c2.714,0.912,6.006,0.176,7.363-1.639l21.751-29.206C240.242,282.45,239.146,280.246,236.44,279.334z\" style=\"fill: rgb(75, 75, 75);\"></path><path class=\"st0\" d=\"M221.947,254.551c5.858,0,10.607-4.748,10.607-10.614c0-5.858-4.748-10.599-10.607-10.599 s-10.607,4.741-10.607,10.599C211.34,249.803,216.088,254.551,221.947,254.551z\" style=\"fill: rgb(75, 75, 75);\"></path><path class=\"st0\" d=\"M290.047,233.338c-5.858,0-10.606,4.741-10.606,10.599c0,5.866,4.748,10.614,10.606,10.614 c5.859,0,10.614-4.748,10.614-10.614C300.661,238.079,295.905,233.338,290.047,233.338z\" style=\"fill: rgb(75, 75, 75);\"></path></g></svg>", "おじさん顔アイコン": "<svg version=\"1.1\" id=\"_x32_\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\" xml:space=\"preserve\"> <style type=\"text/css\">.st0{fill:#4B4B4B;}</style> <g><path class=\"st0\" d=\"M440.822,238.405c53.91,57.082-75.63,100.268-171.476,41.089c-4.521-2.794-8.979-5.806-13.341-9.094 c-4.371,3.287-8.812,6.3-13.35,9.094c-95.872,59.18-225.404,15.994-171.494-41.089C-36.278,273.546-14.214,381.26,84.945,385.367 c87.05,3.596,140.775-43.653,171.061-85.491c30.276,41.838,84.001,89.087,171.052,85.491 C526.217,381.26,548.281,273.546,440.822,238.405z\" style=\"fill: rgb(75, 75, 75);\"></path><path class=\"st0\" d=\"M132.263,225.637c0,14.125,11.332,25.562,25.307,25.562c13.975,0,25.307-11.438,25.307-25.562 c0-14.117-11.332-25.546-25.307-25.546C143.595,200.092,132.263,211.521,132.263,225.637z\" style=\"fill: rgb(75, 75, 75);\"></path><path class=\"st0\" d=\"M329.116,225.637c0,14.125,11.332,25.562,25.307,25.562c13.984,0,25.316-11.438,25.316-25.562 c0-14.117-11.332-25.546-25.316-25.546C340.448,200.092,329.116,211.521,329.116,225.637z\" style=\"fill: rgb(75, 75, 75);\"></path><path class=\"st0\" d=\"M335.09,409.801l-63.268-25.563l-15.826,3.199l-15.816-3.199l-63.277,25.563 c-15.818,3.182-6.327,25.554,6.326,19.165c12.654-6.388,56.951-28.762,56.951-28.762l15.816,3.199l15.826-3.199 c0,0,44.288,22.373,56.942,28.762C341.417,435.356,350.908,412.983,335.09,409.801z\" style=\"fill: rgb(75, 75, 75);\"></path><polygon class=\"st0\" points=\"231.553,168.141 79.217,81.892 41.723,148.975 231.553,206.471 \" style=\"fill: rgb(75, 75, 75);\"></polygon><polygon class=\"st0\" points=\"437.668,81.892 285.331,168.141 285.331,206.471 475.162,148.975 \" style=\"fill: rgb(75, 75, 75);\"></polygon></g></svg>", "お団子あたまのキャリアウーマン": "<svg version=\"1.1\" id=\"_x32_\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"512px\" height=\"512px\" viewBox=\"0 0 512 512\" xml:space=\"preserve\"> <style type=\"text/css\">.st0{fill:#4B4B4B;}</style> <g><path class=\"st0\" d=\"M422.906,442.344c-1.703-6.359-4.094-12.063-7.063-17.141c-5.188-8.922-12.063-15.844-19.641-21.359 c-5.688-4.125-11.781-7.469-17.938-10.375c-9.266-4.328-18.75-7.656-27.484-10.891s-16.734-6.391-22.938-10.047 c-2.281-1.344-4.328-2.75-6.094-4.219c-2.656-2.219-4.719-4.547-6.203-7.188c-1.5-2.641-2.484-5.594-2.891-9.313 c-0.266-2.625-0.391-5.109-0.391-7.469c0-7,1.031-13.063,2.344-19.266c3.922-4.406,7.5-9.656,10.875-15.953 c3.406-6.313,6.625-13.719,9.828-22.469c2.063-0.922,4.141-2.047,6.172-3.406c4.609-3.125,9-7.438,12.656-13.219 c3.656-5.766,6.578-12.922,8.578-21.781c0.563-2.469,0.828-4.906,0.828-7.281c0-5.031-1.172-9.844-3.172-14.109 c-1.391-2.953-3.156-5.688-5.203-8.156c1.063-3.859,2.328-9.047,3.453-15.125c1.563-8.453,2.859-18.578,2.859-29.25 c0-6.875-0.531-13.969-1.938-20.984c-1.047-5.25-2.594-10.469-4.766-15.484c-3.25-7.516-8-14.578-14.594-20.406 c-6.094-5.422-13.75-9.719-22.969-12.484c-1.344-1.594-2.703-3.109-4.078-4.547c0.406-2.578,0.625-5.234,0.625-7.922 c0-16.031-7.406-30.313-18.969-39.688c2.609-4.984,4.094-10.672,4.094-16.719C298.891,16.156,282.75,0,262.797,0 c-19.938,0-36.109,16.156-36.109,36.094c0,6.047,1.5,11.734,4.125,16.719c-10.797,8.719-17.953,21.75-18.875,36.453 c-0.391,0.188-0.813,0.391-1.234,0.609c-4.422,2.25-10.125,5.531-16.234,10.094c-9.141,6.813-19.234,16.453-27.125,29.5 c-3.922,6.531-7.297,13.906-9.656,22.172c-2.375,8.234-3.766,17.359-3.766,27.313c0,6.219,0.547,12.766,1.703,19.641 c0,0.484,0.016,0.938,0.047,1.391c0.047,0.859,0.141,1.766,0.234,2.688c0.125,1.359,0.313,2.781,0.438,3.969 c0.047,0.594,0.094,1.125,0.141,1.547c0.016,0.188,0.016,0.375,0.031,0.5l0.016,0.125v0.047v0.797l1.672,7.469 c-2.406,2.641-4.516,5.594-6.141,8.859c-2.25,4.5-3.609,9.594-3.609,14.984c0,2.375,0.266,4.844,0.828,7.281l0,0 c1.344,5.906,3.078,11.047,5.172,15.547c3.156,6.734,7.141,12,11.547,15.938c3.438,3.047,7.078,5.297,10.703,6.938 c3.203,8.734,6.406,16.125,9.813,22.422c3.375,6.313,6.953,11.563,10.875,15.969c1.313,6.203,2.344,12.281,2.344,19.281 c0,2.359-0.125,4.844-0.391,7.5v-0.031c-0.281,2.563-0.828,4.766-1.641,6.75c-1.203,2.953-2.953,5.469-5.344,7.859 c-2.391,2.359-5.438,4.563-9.047,6.609c-3.672,2.063-7.906,4-12.516,5.875c-8.078,3.281-17.297,6.359-26.625,10.078 c-7.016,2.797-14.094,5.969-20.859,9.953c-5.063,3-9.953,6.438-14.438,10.563c-6.719,6.156-12.516,13.813-16.531,23.313 s-6.234,20.734-6.234,34.016c0,1.859,0.391,3.672,1.047,5.297c0.594,1.563,1.422,2.969,2.406,4.328 c1.844,2.5,4.219,4.75,7.141,6.922c5.125,3.781,11.938,7.313,20.75,10.641c13.188,4.984,30.891,9.453,53.781,12.703 S222.172,512,256,512c29.313,0,54.313-1.531,75.344-4.047c15.781-1.891,29.344-4.344,40.859-7.156 c8.625-2.109,16.109-4.422,22.531-6.859c4.813-1.813,9.047-3.719,12.703-5.672c2.75-1.484,5.188-2.969,7.344-4.516 c3.219-2.328,5.828-4.75,7.781-7.469c0.969-1.375,1.797-2.813,2.391-4.406c0.578-1.563,0.938-3.281,0.938-5.047 C425.891,457.75,424.859,449.625,422.906,442.344z M202.281,177.297c38.234,8.484,105.047-32.156,105.047-32.156 s0.813,18.547,13.547,35.547c5.109,6.797,9.266,17.438,12.391,27.5c-0.703-1.844-2.688-2.531-5.828-2.938 c-6.563-0.875-16.297-1.438-27.25-0.906c-32.578,1.578-30.156,4.531-42.938,4.531s-10.375-2.953-42.938-4.531 c-10.969-0.531-20.688,0.031-27.266,0.906c-1.156,0.156-2.125,0.375-2.969,0.625C188.109,200.922,194.141,193.141,202.281,177.297z M326.953,228.375c-0.016,0.188-0.156,18.844-12.844,25.234c-4.328,2.188-9.734,3.375-15.234,3.391 c-5.813,0-11.141-1.313-15.375-3.813c-4.688-2.75-7.844-6.828-9.406-12.094c-0.344-1.219-0.688-2.453-1.016-3.656 c-1.016-3.625-3.719-13.719,2.016-18.156c3.703-2.891,15.188-4.719,26.188-4.719c10,0,20.188,1.375,23.172,4.484 C326.422,221.094,327.188,224.781,326.953,228.375z M241.422,237.438c-0.328,1.203-0.672,2.438-1.031,3.656 c-1.563,5.266-4.703,9.344-9.391,12.094c-4.25,2.5-9.563,3.813-15.375,3.813c-5.5-0.016-10.906-1.203-15.234-3.391 c-12.703-6.391-12.844-25.047-12.844-25.234c-0.25-3.594,0.516-7.281,2.469-9.328c3-3.109,13.203-4.484,23.203-4.484 c11,0,22.469,1.828,26.188,4.719C245.141,223.719,242.438,233.813,241.422,237.438z M241.203,448.719l-50-63.906 c2.594-1.531,5.078-3.188,7.406-5.031c2.484-1.984,4.766-4.219,6.797-6.719l36.359,16.875l-7.781,12.922l12.031,12.75 L241.203,448.719z M210.547,364.531c1.469-3.438,2.453-7.188,2.875-11.234v-0.016c0.328-3.125,0.469-6.094,0.469-8.938 c0-9.25-1.531-17.078-3.078-24.141l-0.406-1.922l-1.359-1.438c-3.438-3.625-6.734-8.25-10.063-14.438 c-3.313-6.156-6.609-13.875-10.016-23.453l-1.109-3.141l-3.125-1.125c-2.172-0.813-4.266-1.844-6.313-3.188 c-3.031-2.063-5.938-4.844-8.578-9.031c-2.656-4.172-5.047-9.781-6.75-17.344l0,0c-0.328-1.438-0.469-2.813-0.469-4.156 c0-3.031,0.734-5.906,2.109-8.672c1.141-2.266,2.734-4.422,4.656-6.391c3.25,4.906,5.938,8.813,6.922,9.781 c1.875,1.891,2.781,0,2.922-3.563c1.109,7.75,4.75,20.656,16.734,27.031c17.141,9.094,42.703,5.688,51.391-14.563 c3.922-9.156,3.984-18.078,9.891-18.078s5.969,8.922,9.891,18.078c8.688,20.25,34.25,23.656,51.375,14.563 s17.25-31.625,17.25-33.219c0-0.797,0.813-1.344,1.906-1.484c1.422,6.047,2.188,10.172,2.188,10.172s1.641-3.125,4.094-7.281 c1.469,1.719,2.688,3.563,3.578,5.484c1.203,2.609,1.844,5.297,1.844,8.141c0,1.328-0.141,2.719-0.453,4.156 c-1.141,5.031-2.594,9.219-4.203,12.672c-2.438,5.172-5.234,8.734-8.141,11.359c-2.938,2.625-6.063,4.328-9.297,5.516l-3.125,1.141 l-1.109,3.141c-3.406,9.578-6.703,17.297-10.031,23.469s-6.625,10.813-10.063,14.453l-1.344,1.422l-0.422,1.922 c-1.547,7.063-3.078,14.875-3.078,24.125c0,2.844,0.141,5.813,0.469,8.953c0.391,3.672,1.219,7.109,2.484,10.297 c0.047,0.141,0.125,0.281,0.172,0.438l-43.016,22.609L210.547,364.531z M274.266,451.031l-5.141-35.422l12.016-12.75l-7.781-12.984 l32.891-17.281c0.906,1.172,1.875,2.281,2.891,3.344c3.266,3.344,7.031,6.109,11.063,8.531L274.266,451.031z\"></path></g></svg>", "お侍さんアイコン": "<svg version=\"1.1\" id=\"_x32_\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\" xml:space=\"preserve\"> <style type=\"text/css\">.st0{fill:#4B4B4B;}</style> <g><path class=\"st0\" d=\"M433.782,102.668c-24.372-4.877-48.737-9.755-58.484-13.006c-33.088-11.029-96.098-85.6-118.594-89.346 c-28.748-4.791-60.368,45.801-29.25,76.432c-20.275,4.97-39.183,13.465-55.964,24.809c-27.852,18.815-49.961,45.435-63.218,76.762 c-8.83,20.877-13.715,43.867-13.715,67.917c0,1.346,0.028,2.642,0.057,3.91l-32.358,68.618v-0.008 c-1.69,3.574-2.506,7.398-2.506,11.144c0,4.856,1.354,9.582,3.868,13.679c2.507,4.097,6.238,7.585,10.843,9.826l25.646,12.455 c0.308,0.15,0.566,0.379,0.738,0.658c0.179,0.294,0.266,0.602,0.266,0.939v41.919c0,2.678,0.415,5.299,1.189,7.756 c0.759,2.464,1.883,4.77,3.287,6.854c2.815,4.161,6.775,7.455,11.474,9.446c3.137,1.332,6.604,2.07,10.177,2.07h68.854 c0.208,0,0.358,0.021,0.509,0.065c0.158,0.057,0.301,0.122,0.451,0.221c0.287,0.194,0.53,0.488,0.652,0.795 c0.093,0.201,0.136,0.401,0.136,0.68v48.622c0,8.766,4.404,16.945,11.717,21.779l0.014,0.007c4.326,2.865,9.346,4.326,14.396,4.326 c3.452,0,6.94-0.687,10.22-2.077l134.415-57.03v0.007c4.834-2.048,8.83-5.458,11.594-9.655c2.772-4.175,4.326-9.188,4.326-14.41 v-51.774c17.374-15.333,31.67-34.069,41.833-55.182c11.029-22.89,17.203-48.579,17.203-75.644 c0.007-32.473-8.909-62.961-24.394-89.016c13.608-1.304,26.191-7.843,30.86-17.189 C457.137,125.815,445.971,105.096,433.782,102.668z M359.054,331.728c-17.947,7.849-7.247,35.043,1.11,51.143v45.965 c-0.008,0.373-0.114,0.702-0.301,0.989c-0.201,0.293-0.444,0.501-0.766,0.63h-0.007l-134.429,57.038 c-0.236,0.086-0.465,0.143-0.695,0.143c-0.35,0-0.673-0.1-0.959-0.287c-0.509-0.344-0.802-0.895-0.802-1.461v-48.622 c0.008-2.686-0.401-5.307-1.175-7.764c-0.766-2.463-1.876-4.762-3.287-6.847c-2.815-4.161-6.768-7.47-11.474-9.46 c-3.129-1.332-6.596-2.063-10.177-2.063h-68.854c-0.208,0-0.372-0.035-0.53-0.078c-0.15-0.05-0.301-0.114-0.437-0.208 c-0.293-0.201-0.53-0.494-0.651-0.788c-0.087-0.208-0.129-0.408-0.129-0.68v-41.919c0-5.007-1.44-9.805-3.996-13.872 c-2.543-4.068-6.224-7.449-10.715-9.633h-0.014l-25.633-12.455c-0.358-0.179-0.565-0.372-0.744-0.659 c-0.179-0.293-0.272-0.623-0.264-0.938c0-0.251,0.042-0.458,0.172-0.738v-0.007l34.907-74.011l-0.122-2.994 c-0.079-2.091-0.158-4.04-0.158-5.916c0.006-31.134,9.446-59.938,25.632-83.916c16.193-23.971,39.147-43.022,66.061-54.402 c14.288-6.044,29.693-9.926,45.851-11.266c13.5,7.405,29.464,14.754,45.958,21.701c23.269,39.834,18.069,94.193-16.48,106.154 l24.372,92.603c0,0,32.486-55.24,53.614-50.362C385.045,271.625,385.045,320.347,359.054,331.728z\" style=\"fill: rgb(75, 75, 75);\"></path></g></svg>", "アラビアのお姫様": "<svg version=\"1.1\" id=\"_x32_\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\" xml:space=\"preserve\"> <style type=\"text/css\">.st0{fill:#4B4B4B;}</style> <g><path class=\"st0\" d=\"M411.113,420.445c-10.476-15.688-26.388-24.364-41.342-30c-7.494-2.821-14.828-4.903-21.284-6.669 c-6.445-1.754-12.053-3.234-15.82-4.65c-6.588-2.448-13.549-5.619-18.406-9.03c-2.426-1.692-4.294-3.435-5.378-4.92 c-1.095-1.52-1.393-2.569-1.405-3.486c0-5.677,0-12.655,0-21.52c9.897,6.296,30.23,15.235,63.51,12.299 c-20.052-12.03-32.764-45.918-34.88-64.083c0.665-0.39,1.347-0.711,2.001-1.164c4.123-2.844,7.621-6.978,10.585-12.598 c2.982-5.642,5.625-12.856,8.446-22.724c0.2-0.711,0.275-1.319,0.453-2.007l1.824-1.37c11.674-8.779,21.474-21.474,28.458-36.354 c6.967-14.886,11.101-31.99,11.107-49.685c0-15.528-3.211-31.52-10.562-46.669c-11.25-23.2-28.079-39.57-46.222-50.798 c-16.319-10.103-33.681-16.112-49.398-19.593v-8.629C292.798,16.468,276.33,0,256.003,0c-20.327,0-36.795,16.468-36.795,36.795 v8.762c-15.671,3.526-32.925,9.564-49.14,19.662c-18.016,11.216-34.714,27.529-45.901,50.597 c-7.35,15.149-10.568,31.141-10.562,46.669c0,17.695,4.14,34.8,11.107,49.685c6.984,14.879,16.783,27.575,28.458,36.354l1.13,0.848 c0.206,0.86,0.309,1.629,0.567,2.529c3.773,13.142,7.179,21.629,11.589,27.856c2.202,3.091,4.713,5.573,7.442,7.466 c0.384,0.27,0.797,0.448,1.187,0.694c-1.95,18.039-14.714,52.42-34.937,64.553c34.226,3.022,54.816-6.537,64.381-12.838 c0,9.123,0,16.268,0,22.059c0,0.78-0.31,1.904-1.519,3.509c-1.772,2.385-5.448,5.275-9.811,7.724 c-4.352,2.477-9.358,4.622-13.739,6.164c-5.144,1.824-13.429,3.722-22.712,6.382c-13.95,4.037-30.442,9.846-43.859,21.353 c-6.697,5.751-12.581,12.976-16.715,21.956c-4.14,8.974-6.514,19.639-6.508,32.116c0,2.896,0.126,5.889,0.391,8.986 c0.189,2.173,1.014,3.933,1.983,5.39c1.847,2.712,4.295,4.725,7.362,6.794c5.373,3.556,12.816,7.03,22.346,10.442 c28.521,10.172,75.74,19.484,134.256,19.496c47.541,0,87.668-6.17,116.309-13.922c14.33-3.888,25.768-8.136,34.037-12.385 c4.14-2.139,7.489-4.255,10.144-6.572c1.33-1.17,2.494-2.397,3.475-3.853c0.963-1.457,1.794-3.217,1.983-5.39 c0.258-3.091,0.385-6.078,0.385-8.963C422.358,444.282,418.086,430.876,411.113,420.445z M368.521,107.243 c3.016,4.38,5.792,9.1,8.28,14.215c6.428,13.257,9.26,27.265,9.26,41.026c0,4.346-0.31,8.658-0.854,12.919l-81.239-32.724 L368.521,107.243z M287.173,57.437c15.338,3.114,32.488,8.808,48.223,18.562c10.866,6.743,21.015,15.413,29.588,26.485 l-68.052,37.363l-9.759-3.933V57.437z M287.173,147.381v-5.138l97.099,39.112c-1.668,8.934-4.432,17.512-8.096,25.333 c-4.157,8.876-9.449,16.743-15.39,23.165c-0.619-1.244-1.313-2.414-2.138-3.406c-2.896-3.486-6.4-5.47-9.542-6.754 c-0.831-0.448-1.652-0.826-2.426-1.107c-2.098-0.774-3.899-1.078-5.281-1.216l-65.654-46.055 C282.666,165.598,287.167,157.06,287.173,147.381z M233.055,40.895c0-6.348,2.564-12.059,6.72-16.227 c4.168-4.157,9.88-6.721,16.227-6.721c6.348,0,12.059,2.564,16.228,6.721c3.332,3.342,5.568,7.694,6.348,12.552l-18.905,15.465 l3.716,4.541l15.562-12.73v32.627l-20.012,16.371V24.146h-5.872v43.94l-18.194-14.891l-1.818,2.219V40.895z M233.055,59.29 l19.628,16.061l0.384-0.47v34.858h5.872v-8.664l20.012-16.37v62.678c0,6.347-2.563,12.058-6.72,16.227 c-1.227,1.221-2.621,2.254-4.088,3.176l-11.25-7.982l-12.082,8.498c-1.824-1.032-3.555-2.22-5.034-3.693 c-4.157-4.169-6.72-9.88-6.72-16.227V59.29z M176.903,76.182c15.608-9.736,32.643-15.459,47.931-18.618v41.933L160.096,88.9 C165.406,84.06,171.048,79.834,176.903,76.182z M126.524,162.484c0-13.762,2.832-27.77,9.26-41.026 c5.23-10.764,11.761-19.8,19.1-27.46l69.949,11.445v39.845l-98.172,21.91C126.587,165.632,126.524,164.061,126.524,162.484z M161.157,220.558c-4.472,2.511-7.299,6.29-8.813,9.868c-6.164-6.525-11.657-14.592-15.934-23.738 c-4.782-10.201-8.05-21.664-9.3-33.567l98.114-21.898c1.078,8.681,5.642,16.222,12.345,21.17l-44.593,31.37 c-7.271,4.691-14.702,9.295-22.053,13.561c-2.036,0.172-5.241,0.786-8.687,2.781C161.897,220.272,161.484,220.374,161.157,220.558z M409.101,468.221l-0.557,0.66c-0.952,0.963-2.872,2.414-5.573,3.95c-6.095,3.52-16.027,7.546-28.974,11.342 c-9.564-16.824-26.267-44.296-60.746-43.217c-46.973,1.468-46.973,26.422-57.248,26.422c-10.275,0-10.275-24.954-57.248-26.422 c-34.484-1.078-51.193,26.411-60.751,43.228c-11.285-3.297-20.27-6.8-26.434-9.977c-3.515-1.806-6.107-3.526-7.54-4.794 c-0.614-0.533-0.958-0.94-1.129-1.175c-0.201-2.546-0.316-5.006-0.316-7.346c0.023-14.495,3.567-25.086,9.043-33.389 c8.194-12.408,21.348-20.006,35.092-25.178c6.841-2.58,13.762-4.541,20.115-6.244c6.365-1.715,12.122-3.131,16.916-4.817 c6.651-2.356,14.392-5.768,20.924-10.304c3.262-2.282,6.25-4.839,8.624-7.953c2.345-3.073,4.146-6.921,4.146-11.318 c0-6.852,0-15.413,0-27.156v-2.477l-1.658-1.846c-8.808-9.811-20.734-22.833-24.868-45.975l-0.654-3.699l-3.532-1.261 c-2.248-0.802-3.962-1.623-5.459-2.66c-2.208-1.56-4.209-3.687-6.548-8.045c-2.311-4.334-4.76-10.814-7.437-20.212 c-1.175-4.106-1.594-7.3-1.594-9.673c0.006-2.753,0.533-4.364,1.072-5.378c0.178-0.321,0.402-0.476,0.597-0.728 c0.27,0.47,0.51,0.963,0.894,1.347c1.198,1.204,2.862,1.892,4.565,1.892c0.768,0,1.508-0.183,2.219-0.448l9.042,9.949v-20.768 c9.41-5.666,18.79-11.697,27.604-17.615c-1.892,7.305-4.805,19.019-6.072,26.64c56.021-9.083,76.893-28.698,83.476-37.122 l9.788,6.864c8.876,10.573,19.679,15.556,24.92,17.483l3.372,2.362l3.704,24.112l8.641-11.52c1.582-0.086,3.12-0.705,4.238-1.83 c0.401-0.401,0.648-0.906,0.929-1.394c0.189,0.242,0.384,0.454,0.556,0.775c0.545,1.014,1.067,2.626,1.078,5.378 c0,2.374-0.418,5.567-1.594,9.673c-3.561,12.546-6.755,19.84-9.685,23.888c-1.468,2.047-2.81,3.326-4.3,4.37 c-1.497,1.038-3.211,1.858-5.459,2.66l-3.532,1.261l-0.654,3.699c-4.134,23.142-16.06,36.164-24.868,45.975l-1.658,1.846v2.477 c0,11.743,0,20.304,0,27.156c-0.011,4.254,1.646,8.085,3.911,11.141c3.441,4.61,8.211,8.022,13.406,11.004 c5.207,2.953,10.9,5.384,16.256,7.391c6.399,2.374,14.559,4.243,23.47,6.846c13.342,3.848,28.085,9.272,39.06,18.693 c5.505,4.713,10.115,10.373,13.423,17.495c3.298,7.133,5.327,15.791,5.327,26.657C409.416,463.238,409.301,465.686,409.101,468.221 z\" style=\"fill: rgb(75, 75, 75);\"></path><path class=\"st0\" d=\"M256.112,149.411c6.726,0,12.184-6.135,12.184-13.704s-5.459-13.704-12.184-13.704 c-6.726,0-12.179,6.135-12.179,13.704S249.386,149.411,256.112,149.411z\" style=\"fill: rgb(75, 75, 75);\"></path><path class=\"st0\" d=\"M214.167,389.166c-3.245,0-5.872,2.626-5.872,5.872s2.626,5.872,5.872,5.872c3.246,0,5.872-2.626,5.872-5.872 S217.413,389.166,214.167,389.166z\" style=\"fill: rgb(75, 75, 75);\"></path><path class=\"st0\" d=\"M232.74,405.313c-3.245,0-5.872,2.626-5.872,5.872c0,3.246,2.626,5.872,5.872,5.872 c3.246,0,5.872-2.626,5.872-5.872C238.611,407.94,235.986,405.313,232.74,405.313z\" style=\"fill: rgb(75, 75, 75);\"></path><path class=\"st0\" d=\"M256.003,415.589c-3.245,0-5.872,2.626-5.872,5.872c0,3.245,2.626,5.872,5.872,5.872 c3.246,0,5.872-2.626,5.872-5.872C261.874,418.215,259.249,415.589,256.003,415.589z\" style=\"fill: rgb(75, 75, 75);\"></path><path class=\"st0\" d=\"M297.838,389.166c-3.245,0-5.872,2.626-5.872,5.872s2.626,5.872,5.872,5.872c3.246,0,5.872-2.626,5.872-5.872 S301.084,389.166,297.838,389.166z\" style=\"fill: rgb(75, 75, 75);\"></path><path class=\"st0\" d=\"M279.266,405.313c-3.246,0-5.872,2.626-5.872,5.872c0,3.246,2.626,5.872,5.872,5.872 c3.245,0,5.872-2.626,5.872-5.872C285.138,407.94,282.511,405.313,279.266,405.313z\" style=\"fill: rgb(75, 75, 75);\"></path></g></svg>", "アメフト選手のイラスト1": "<svg version=\"1.1\" id=\"_x32_\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\" xml:space=\"preserve\"> <style type=\"text/css\">.st0{fill:#4B4B4B;}</style> <g><path class=\"st0\" d=\"M491.937,362.788c-8.6-13.905-20.662-21.754-30.376-26.08c-9.752-4.327-17.302-5.275-17.807-5.342l-0.24-0.031 l-103.244-8.751l-12.852,25.696c-1.069-0.444-2.14-0.888-2.973-1.287c-1.67-0.805-2.844-1.512-3.581-2.084 c-1.106-0.896-1.287-1.219-1.655-2.077c-0.339-0.85-0.662-2.588-0.651-5.516c0-7.502,0-16.9,0-29.368 c5.575-3.815,10.692-8.164,15.139-13.228c2.07-2.348,3.943-4.906,5.798-7.487c-0.094,0.797-0.218,1.542-0.226,2.506 c0.056,1.558,0.022,3.439,1.399,6.35c0.711,1.422,1.976,3.161,3.932,4.448c1.937,1.317,4.375,1.918,6.317,1.888 c2.449-0.03,4.187-0.677,5.564-1.309c2.054-0.986,3.51-2.108,5.064-3.447c1.531-1.331,3.093-2.904,4.857-4.838 c11.362-12.611,21.415-31.611,29.086-54.109c7.607-22.476,12.615-48.353,12.629-74.29c0-6.494-0.32-12.987-0.997-19.421 c-3.465-32.529-16.942-68.217-41.362-96.45c-12.216-14.094-27.228-26.268-45.05-34.899C302.895,5.026,282.292-0.008,259.252,0 c-1.065,0-2.152,0.015-3.258,0.038C254.914,0.015,253.831,0,252.748,0c-23.041-0.008-43.643,5.026-61.457,13.664 c-26.75,12.964-47.096,33.831-61.329,57.3c-14.24,23.491-22.494,49.639-25.082,74.048c-0.678,6.441-0.994,12.927-0.994,19.421 c0.012,25.937,5.019,51.814,12.626,74.29c7.671,22.484,17.724,41.498,29.082,54.109c2.36,2.58,4.33,4.507,6.408,6.11 c1.054,0.79,2.137,1.528,3.518,2.175c1.373,0.632,3.111,1.286,5.568,1.309c1.945,0.03,4.398-0.579,6.328-1.896 c1.455-0.963,2.554-2.198,3.284-3.333c1.102-1.731,1.505-3.206,1.75-4.41c0.234-1.196,0.282-2.174,0.286-3.055 c-0.012-0.91-0.132-1.603-0.214-2.37c4.91,6.847,10.508,12.897,17.066,17.991c1.234,0.956,2.562,1.806,3.856,2.694 c0,12.423,0,21.783,0,29.27c0.004,2.446-0.29,4.041-0.647,5.034c-0.58,1.444-1.031,2.107-3.172,3.552 c-1.163,0.752-2.871,1.58-5.004,2.46l-12.89-25.779l-103.372,8.766l-0.113,0.016c-0.501,0.067-8.056,1.015-17.807,5.342 c-9.714,4.326-21.776,12.175-30.373,26.08c-7.48,12.19-10.835,28.293-10.876,45.418c0.011,16.419,3.243,33.792,9.932,49.452 c0.522,2.257,1.587,3.965,2.704,5.372c2.631,3.161,6.016,5.516,10.441,8.096c7.716,4.432,18.653,9.03,32.611,13.65 c41.788,13.747,110.494,27.209,191.124,27.224c65.513,0,123.192-8.916,164.9-19.616c20.87-5.358,37.717-11.144,49.768-16.652 c6.038-2.762,10.869-5.418,14.609-8.179c1.873-1.4,3.491-2.814,4.894-4.523c1.114-1.407,2.178-3.115,2.705-5.364 c6.69-15.674,9.921-33.048,9.933-49.459C502.769,391.081,499.414,374.978,491.937,362.788z M313.214,293.487 c-6.633,5.139-14.326,9.045-23.695,11.738c-7.292,2.092-15.647,3.401-25.166,3.883V269.65c21.814-0.271,41.273-1.942,57.386-5.862 c6.083-1.482,11.686-3.303,16.825-5.485C331.845,273.638,323.783,285.3,313.214,293.487z M304.358,345.008 c-9.168,5.771-27.498,15.343-48.356,15.343c-20.952,0-39.346-9.647-48.473-15.41c0.587-2.438,0.925-4.951,0.929-7.623 c0-5.779,0-12.649,0-21.167c3.172,1.31,6.43,2.521,9.887,3.507c11.012,3.16,23.462,4.696,37.657,4.696 c14.191,0,26.641-1.535,37.656-4.696c3.465-0.986,6.705-2.242,9.884-3.551c0,8.532,0,15.425,0,21.211 C303.549,340.019,303.82,342.532,304.358,345.008z M340.676,240.349c-0.873,0.556-1.742,1.114-2.709,1.64 c-7.901,4.32-18.939,7.608-32.416,9.7c-11.953,1.874-25.899,2.791-41.197,2.987v-30.971h76.322V240.349z M235.527,21.641 c5.519-0.738,11.234-1.174,17.22-1.174c0.993,0,2.001,0.015,3.021,0.046h0.278h0.204c0.985-0.03,1.986-0.046,3.002-0.046 c5.986,0,11.701,0.437,17.22,1.174v80.256h-40.945V21.641z M171.196,162.274c-0.004-2.738,0.2-4.92,0.606-6.418 c0.433-1.512,0.873-2.325,1.783-3.296l0.004-0.008c3.902-4.033,9.267-6.298,14.872-6.298h135.081 c5.602,0,10.967,2.265,14.868,6.298l-7.122-7.352l7.126,7.352c0.911,0.978,1.351,1.791,1.784,3.311 c0.406,1.49,0.614,3.672,0.606,6.411c0,1.61-0.06,3.401-0.124,5.327l-0.004,0.166v40.927H171.324v-40.927l-0.004-0.166 C171.256,165.675,171.196,163.884,171.196,162.274z M171.324,223.705h78.014v30.956c-19.646-0.399-36.807-2.137-50.422-5.448 c-7.852-1.918-14.507-4.349-19.778-7.224c-3.104-1.685-5.658-3.529-7.814-5.477V223.705z M189.564,284.796 c-6.84-7.743-12.476-17.638-17.393-29.518c10.131,5.448,22.603,8.969,37.062,11.241c12.043,1.882,25.539,2.829,40.106,3.108v39.526 c-10.211-0.406-19.146-1.715-26.859-3.928C208.439,301.162,198.13,294.466,189.564,284.796z M401.85,405.558v27.291h83.177 c-1.486,6.78-3.499,13.447-6.216,19.647l-0.5,1.128l-0.016,0.203c-0.65,0.655-2.318,2.1-4.812,3.559 c-5.801,3.552-15.832,8.006-29.026,12.446c-26.411,8.924-65.64,17.976-112.548,23.055V458.44h0.004v-25.591h-0.004h-24.45h-27.296 h-24.452v48.902h24.452V458.44h27.296v36.645c-16.468,1.204-33.65,1.911-51.457,1.911c-11.979,0-23.586-0.398-34.978-0.963v-63.184 h-28.093h-4.436l-11.829,29h16.265v32.265c-38-3.401-71.57-9.458-98.101-16.276c-20.204-5.177-36.4-10.79-47.262-15.756 c-5.422-2.468-9.519-4.801-11.908-6.592c-1.012-0.745-1.63-1.339-1.96-1.7l-0.011-0.166l-0.5-1.136 c-2.717-6.193-4.729-12.86-6.216-19.64h74.636v-27.291H24.268c0.328-14.026,3.473-26.742,8.564-34.876 c6.576-10.64,15.868-16.757,23.717-20.256c3.905-1.738,7.408-2.807,9.876-3.424c1.23-0.293,2.209-0.489,2.841-0.61l0.688-0.105 l0.102-0.015l92.801-7.871l12.336,24.673l80.81,49.142l3.902-2.37l76.904-46.765l12.336-24.688l92.801,7.878 c0.414,0.045,6.655,0.971,14.244,4.485c7.694,3.559,16.607,9.608,22.98,19.925c5.091,8.141,8.236,20.85,8.562,34.876H401.85z\" style=\"fill: rgb(75, 75, 75);\"></path></g></svg>", "おまわりさんのアイコン": "<svg version=\"1.1\" id=\"_x32_\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"512px\" height=\"512px\" viewBox=\"0 0 512 512\" xml:space=\"preserve\"> <style type=\"text/css\">.st0{fill:#4B4B4B;}</style> <g><path class=\"st0\" d=\"M346.313,288.5c1.094-4.125,2.031-8.656,2.688-12.219c0.031-0.063,0.031-0.125,0.031-0.172 c3.031-0.734,5.75-2.109,8.094-3.797c5.25-3.813,9.031-9.063,12.125-14.563c3.063-5.516,5.328-11.344,6.844-16.5 c1.125-3.938,1.719-7.484,1.719-10.781c0-3.531-0.719-6.859-2.188-9.688c-1.078-2.125-2.578-3.938-4.219-5.281 c-0.219-0.188-0.438-0.313-0.656-0.469l-1.063-43.594c0.313-1.25,0.469-2.531,0.469-3.797h-8.938v-0.672H149.813v0.672h-7.781 c0,0.281,0.047,0.563,0.063,0.859l-0.656-0.281l-1.156,46.813c-1.625,1.219-3.141,2.75-4.313,4.719 c-1.844,3.031-2.75,6.75-2.75,10.719c0,3.297,0.594,6.844,1.719,10.781c2.031,6.891,5.344,14.938,10.188,21.875 c2.438,3.453,5.281,6.656,8.781,9.188c2.344,1.688,5.063,3.063,8.094,3.797c0.219,1.234,0.484,2.578,0.781,4 c0.563,2.703,1.219,5.641,1.938,8.391c0.766,2.797,1.531,5.344,2.625,7.719c6.281,13.328,14.25,23.813,22.797,31.891 c12.828,12.141,26.953,18.891,38.891,22.609c11.969,3.703,21.719,4.406,26.484,4.422c3.203,0,8.547-0.328,15.359-1.641 c10.172-1.953,23.563-6.141,36.875-14.969c13.313-8.781,26.5-22.297,35.938-42.313C344.781,293.844,345.547,291.297,346.313,288.5z M335,267.719l-0.031,0.172c-0.141,0.922-0.875,5.297-1.875,10.078c-0.5,2.406-1.078,4.875-1.656,7.031 c-0.578,2.125-1.219,3.969-1.594,4.688c-5.469,11.656-12.25,20.5-19.453,27.313c-10.797,10.234-22.734,15.953-32.922,19.125 s-18.688,3.75-21.953,3.75c-2.172,0-6.703-0.25-12.453-1.375c-8.672-1.656-20.125-5.266-31.344-12.688 c-11.234-7.469-22.297-18.656-30.531-36.125c-0.391-0.781-1.094-2.813-1.688-5.125c-0.953-3.5-1.844-7.781-2.469-11.125 c-0.313-1.672-0.563-3.109-0.75-4.125c-0.063-0.516-0.141-0.922-0.188-1.188l-0.063-0.406l-1.188-7.469l-7.484,1.109l-0.688,0.047 c-1.031,0-2.203-0.344-3.844-1.5c-2.422-1.688-5.328-5.281-7.703-9.594c-2.375-4.281-4.313-9.203-5.5-13.328 c-0.844-2.891-1.125-5.047-1.125-6.516c0-1.594,0.297-2.344,0.469-2.688l0.438-0.531c0.25-0.219,0.75-0.5,1.563-0.719 c0.813-0.188,1.844-0.297,2.75-0.297c0.719,0,1.359,0.047,1.781,0.109l0.438,0.063h0.031l6.531,1.297 c0.781,1.297,1.594,2.734,2.406,4.359c0.906-8.563,2.844-24.984,4.313-37.094c20.922,9.094,52.063,14.875,86.875,14.875 c34.203,0,64.875-5.578,85.781-14.406c1.438,12.063,3.359,28.172,4.25,36.625c0.813-1.625,1.625-3.063,2.406-4.344l6.547-1.313 h0.016c0.234-0.047,1.156-0.172,2.219-0.172c0.813,0,1.719,0.078,2.469,0.234c0.563,0.125,1.031,0.297,1.359,0.469 c0.5,0.25,0.641,0.406,0.844,0.719c0.172,0.313,0.516,1,0.547,2.813c0,1.469-0.281,3.641-1.125,6.516 c-1.578,5.5-4.531,12.422-8.016,17.359c-1.734,2.469-3.578,4.422-5.188,5.563c-1.641,1.156-2.828,1.5-3.844,1.5l-0.672-0.047 l-7.5-1.125L335,267.719z\" style=\"fill: rgb(75, 75, 75);\"></path><path class=\"st0\" d=\"M142.031,136.469v17.484h228.125v-18.109c26.844-11.531,43.359-24.625,43.359-45.375 C413.516,47.563,343.031,0,256.094,0S98.688,47.563,98.688,90.469C98.688,111.219,115.188,125.188,142.031,136.469z M256.094,56.844c20.781,0,37.656,16.844,37.656,37.625c0,20.797-16.875,37.656-37.656,37.656s-37.625-16.859-37.625-37.656 C218.469,73.688,235.313,56.844,256.094,56.844z\" style=\"fill: rgb(75, 75, 75);\"></path><polygon class=\"st0\" points=\"269.063,114.438 277.078,89.766 256.094,74.516 235.125,89.766 243.125,114.438 \" style=\"fill: rgb(75, 75, 75);\"></polygon><path class=\"st0\" d=\"M217.063,231.953c-4.75,0-8.594,3.844-8.594,8.594s3.844,8.594,8.594,8.594s8.594-3.844,8.594-8.594 S221.813,231.953,217.063,231.953z\" style=\"fill: rgb(75, 75, 75);\"></path><path class=\"st0\" d=\"M295.375,231.953c-4.75,0-8.594,3.844-8.594,8.594s3.844,8.594,8.594,8.594s8.594-3.844,8.594-8.594 S300.125,231.953,295.375,231.953z\" style=\"fill: rgb(75, 75, 75);\"></path><path class=\"st0\" d=\"M443.844,465.703c0,0-5.5-36.375-8.563-42.672c-2.719-5.578-86.438-54.313-105.219-65.203L276.844,460.75 l-8.813-51.188l15.063-14.609l-10.531-19.922H256h-16.563l-10.547,19.922l15.063,14.609l-8.797,51.188l-53.219-102.922 c-18.781,10.891-102.5,59.625-105.219,65.203c-3.063,6.297-8.563,42.672-8.563,42.672c-1.469,7.234,0.219,14.734,4.625,20.641 s11.094,9.672,18.438,10.344c0,0,41.531,15.313,164.781,15.313s164.781-15.313,164.781-15.313 c7.344-0.672,14.031-4.438,18.438-10.344S445.313,472.938,443.844,465.703z\" style=\"fill: rgb(75, 75, 75);\"></path></g></svg>", }; const TAG_COLORS = { '薬': { bg: '#FFD4DF', ink: '#C24668' }, '病院': { bg: '#E0E1F8', ink: '#5C5DA8' }, 'ケア': { bg: '#D6F0DC', ink: '#3D7A52' }, 'おうち': { bg: '#FFE9C4', ink: '#A26A1F' }, '記念日': { bg: '#FCE4EB', ink: '#D26A82' }, 'その他': { bg: '#E5E5E5', ink: '#666666' } };