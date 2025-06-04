// Данные о картах
const fullCardData = {
    majorArcana: [
        { id: "fool", name: "Шут", image: "https://static.tildacdn.com/tild6333-3632-4736-b461-623262623761/Group-2131329602.jpg" },
        { id: "magician", name: "Маг", image: "https://static.tildacdn.com/tild6461-3563-4235-b166-303464366365/Group_2131329604.jpg" },
        { id: "high-priestess", name: "Верховная Жрица", image: "https://static.tildacdn.com/tild6136-6136-4331-b638-613465353637/Group_2131329603.jpg" },
        { id: "empress", name: "Императрица", image: "https://static.tildacdn.com/tild6638-3264-4935-b332-393036616336/__3.jpg" },
        { id: "emperor", name: "Император", image: "https://static.tildacdn.com/tild6261-6130-4232-b731-373761353939/Group_2131329606.jpg" },
        { id: "hierophant", name: "Иерофант", image: "https://static.tildacdn.com/tild3032-3136-4638-b464-323363386563/Group_2131329616.jpg" },
        { id: "lovers", name: "Влюбленные", image: "https://static.tildacdn.com/tild6133-3066-4164-b734-313861663364/Group_2131329617.jpg" },
        { id: "chariot", name: "Колесница", image: "https://static.tildacdn.com/tild6436-3034-4765-b731-643438323362/Group_2131329618.jpg" },
        { id: "strength", name: "Сила", image: "https://static.tildacdn.com/tild3831-6130-4433-b333-626439386236/Group-2131329607.jpg" },
        { id: "hermit", name: "Отшельник", image: "https://static.tildacdn.com/tild6537-6335-4937-a332-616439373063/Group_2131329615.jpg" },
        { id: "wheel-of-fortune", name: "Колесо Фортуны", image: "https://static.tildacdn.com/tild3437-3239-4036-b963-623933613264/Group_2131329623.jpg" },
        { id: "justice", name: "Справедливость", image: "https://static.tildacdn.com/tild3864-3837-4338-a165-396561656365/Group-2131329620.jpg" },
        { id: "hanged-man", name: "Повешенный", image: "https://static.tildacdn.com/tild3037-6438-4837-b736-353636663533/Group_2131329619.jpg" },
        { id: "death", name: "Смерть", image: "https://static.tildacdn.com/tild6463-3463-4331-b132-616530623038/Group_2131329608.jpg" },
        { id: "temperance", name: "Умеренность", image: "https://static.tildacdn.com/tild3037-3932-4638-b432-393737633565/Group_2131329614.jpg" },
        { id: "devil", name: "Дьявол", image: "https://static.tildacdn.com/tild6533-3733-4665-b363-333637636636/__15.jpg" },
        { id: "tower", name: "Башня", image: "https://static.tildacdn.com/tild3462-3436-4239-b265-323133323666/Group_2131329613.jpg" },
        { id: "star", name: "Звезда", image: "https://static.tildacdn.com/tild3361-3336-4664-a433-323732656333/__17.jpg" },
        { id: "moon", name: "Луна", image: "https://static.tildacdn.com/tild3539-3165-4565-b735-366164326166/Group_2131329609.jpg" },
        { id: "sun", name: "Солнце", image: "https://static.tildacdn.com/tild3837-6237-4465-b531-623564393361/Group-2131329611.jpg" },
        { id: "judgement", name: "Суд", image: "https://static.tildacdn.com/tild3939-3966-4365-b934-396430336433/Group_2131329610.jpg" },
        { id: "world", name: "Мир", image: "https://static.tildacdn.com/tild6132-3330-4336-b332-363936316364/Group_2131329605.jpg" }
    ],
        wands: [
        { id: "ace-of-wands", name: "Туз Жезлов", image: "https://static.tildacdn.com/tild6539-6664-4839-a263-663030353565/Group_2131329598.jpg" },
        { id: "two-of-wands", name: "Двойка Жезлов", image: "https://static.tildacdn.com/tild3263-6634-4337-a663-336537333132/_2.jpg" },
        { id: "three-of-wands", name: "Тройка Жезлов", image: "https://static.tildacdn.com/tild3439-3336-4136-b966-633435346336/Group_2131329588.jpg" },
        { id: "four-of-wands", name: "Четверка Жезлов", image: "https://static.tildacdn.com/tild3166-3138-4264-b531-303435376136/_4.jpg" },
        { id: "five-of-wands", name: "Пятерка Жезлов", image: "https://static.tildacdn.com/tild3934-3633-4437-b734-383037636236/Group_2131329596.jpg" },
        { id: "six-of-wands", name: "Шестерка Жезлов", image: "https://static.tildacdn.com/tild6634-3631-4736-b862-326531653731/Group_2131329597.jpg" },
        { id: "seven-of-wands", name: "Семерка Жезлов", image: "https://static.tildacdn.com/tild3035-3164-4730-b839-616338353439/Group-2131329587.jpg" },
        { id: "eight-of-wands", name: "Восьмерка Жезлов", image: "https://static.tildacdn.com/tild3737-3836-4439-b163-326362656534/Group_2131329590.jpg" },
        { id: "nine-of-wands", name: "Девятка Жезлов", image: "https://static.tildacdn.com/tild3165-6539-4263-b733-376637616237/Group_2131329592.jpg" },
        { id: "ten-of-wands", name: "Десятка Жезлов", image: "https://static.tildacdn.com/tild6336-3432-4238-b734-303338343934/_10.jpg" },
        { id: "page-of-wands", name: "Паж Жезлов", image: "https://static.tildacdn.com/tild6330-3132-4163-b261-376562353330/photo.jpg" },
        { id: "knight-of-wands", name: "Рыцарь Жезлов", image: "https://static.tildacdn.com/tild6334-3634-4330-b538-346334636365/_.jpg" },
        { id: "queen-of-wands", name: "Королева Жезлов", image: "https://static.tildacdn.com/tild6535-3431-4132-a231-666439373966/_.jpg" },
        { id: "king-of-wands", name: "Король Жезлов", image: "https://static.tildacdn.com/tild3662-6131-4832-b865-663239623031/_.jpg" }
        ],
        cups: [
        { id: "ace-of-cups", name: "Туз Кубков", image: "https://static.tildacdn.com/tild6434-3839-4331-b964-626461363362/_1.jpg" },
        { id: "two-of-cups", name: "Двойка Кубков", image: "https://static.tildacdn.com/tild3839-6335-4564-b233-656330663666/Group_2131329574.jpg" },
        { id: "three-of-cups", name: "Тройка Кубков", image: "https://static.tildacdn.com/tild6366-6634-4165-b536-646132376239/_3.jpg" },
        { id: "four-of-cups", name: "Четверка Кубков", image: "https://static.tildacdn.com/tild6463-3835-4438-b264-643137613434/_4.jpg" },
        { id: "five-of-cups", name: "Пятерка Кубков", image: "https://static.tildacdn.com/tild3335-3266-4266-a164-376164653964/Group_2131329576.jpg" },
        { id: "six-of-cups", name: "Шестерка Кубков", image: "https://static.tildacdn.com/tild3763-3739-4265-a237-316164646533/_6.jpg" },
        { id: "seven-of-cups", name: "Семерка Кубков", image: "https://static.tildacdn.com/tild6331-3739-4363-a331-613233643262/_7.jpg" },
        { id: "eight-of-cups", name: "Восьмерка Кубков", image: "https://static.tildacdn.com/tild3935-6361-4264-b765-316361613037/Group_2131329578.jpg" },
        { id: "nine-of-cups", name: "Девятка Кубков", image: "https://static.tildacdn.com/tild3864-3964-4232-b262-313035666230/Group_2131329577.jpg" },
        { id: "ten-of-cups", name: "Десятка Кубков", image: "https://static.tildacdn.com/tild6335-6132-4363-b836-333433363737/_10.jpg" },
        { id: "page-of-cups", name: "Паж Кубков", image: "https://static.tildacdn.com/tild3238-6465-4638-b834-646338643734/Group_2131329581.jpg" },
        { id: "knight-of-cups", name: "Рыцарь Кубков", image: "https://static.tildacdn.com/tild3130-3137-4533-b839-653139333464/Group_2131329582.jpg" },
        { id: "queen-of-cups", name: "Королева Кубков", image: "https://static.tildacdn.com/tild6265-3738-4531-b465-313539366430/Group_2131329583.jpg" },
        { id: "king-of-cups", name: "Король Кубков", image: "https://static.tildacdn.com/tild3932-6137-4962-b135-326631323063/_.jpg" }
        ],
        swords: [
        { id: "ace-of-swords", name: "Туз Мечей", image: "https://static.tildacdn.com/tild3264-3062-4732-a333-306135636166/_1.jpg" },
        { id: "two-of-swords", name: "Двойка Мечей", image: "https://static.tildacdn.com/tild3636-3431-4531-b439-666264383665/Group_2131329559.jpg" },
        { id: "three-of-swords", name: "Тройка Мечей", image: "https://static.tildacdn.com/tild6434-3834-4639-b266-376636366433/Group_2131329558.jpg" },
        { id: "four-of-swords", name: "Четверка Мечей", image: "https://static.tildacdn.com/tild6231-6234-4632-a339-643031383734/Group_2131329562.jpg" },
        { id: "five-of-swords", name: "Пятерка Мечей", image: "https://static.tildacdn.com/tild3431-3539-4535-b439-633832323163/Group_2131329570.jpg" },
        { id: "six-of-swords", name: "Шестерка Мечей", image: "https://static.tildacdn.com/tild3362-3234-4532-b039-306136323163/Group_2131329566.jpg" },
        { id: "seven-of-swords", name: "Семерка Мечей", image: "https://static.tildacdn.com/tild6337-6339-4533-b066-303739366232/Group_2131329565.jpg" },
        { id: "eight-of-swords", name: "Восьмерка Мечей", image: "https://static.tildacdn.com/tild6633-6161-4334-b161-623434333639/Group_2131329571.jpg" },
        { id: "nine-of-swords", name: "Девятка Мечей", image: "https://static.tildacdn.com/tild3236-3837-4031-b530-656134353833/Group_2131329561.jpg" },
        { id: "ten-of-swords", name: "Десятка Мечей", image: "https://static.tildacdn.com/tild3763-3933-4831-b738-633234366661/Group-2131329572.jpg" },
        { id: "page-of-swords", name: "Паж Мечей", image: "https://static.tildacdn.com/tild6332-3964-4936-b965-613035373938/photo.jpg" },
        { id: "knight-of-swords", name: "Рыцарь Мечей", image: "https://static.tildacdn.com/tild6132-3763-4965-b636-363136333763/_.jpg" },
        { id: "queen-of-swords", name: "Королева Мечей", image: "https://static.tildacdn.com/tild3537-6663-4764-b335-663561333162/Group_2131329567.jpg" },
        { id: "king-of-swords", name: "Король Мечей", image: "https://static.tildacdn.com/tild6230-6338-4332-b338-653932396330/Group-2131329569.jpg" }
        ],
        pentacles: [
        { id: "ace-of-pentacles", name: "Туз Пентаклей", image: "https://static.tildacdn.com/tild3938-3965-4139-a536-613433316162/_0.jpg" },
        { id: "two-of-pentacles", name: "Двойка Пентаклей", image: "https://static.tildacdn.com/tild3765-6230-4062-a330-623037623034/Group_2131329546.jpg" },
        { id: "three-of-pentacles", name: "Тройка Пентаклей", image: "https://static.tildacdn.com/tild3131-3734-4165-b731-396265646461/Group_2131329545.jpg" },
        { id: "four-of-pentacles", name: "Четверка Пентаклей", image: "https://static.tildacdn.com/tild3832-6133-4465-b835-646331393231/_4.jpg" },
        { id: "five-of-pentacles", name: "Пятерка Пентаклей", image: "https://static.tildacdn.com/tild6436-6439-4161-a536-643934613661/Group_2131329550.jpg" },
        { id: "six-of-pentacles", name: "Шестерка Пентаклей", image: "https://static.tildacdn.com/tild3439-3664-4339-b531-343636626363/Group_2131329552.jpg" },
        { id: "seven-of-pentacles", name: "Семерка Пентаклей", image: "https://static.tildacdn.com/tild3937-6330-4133-b265-666364303438/Group_2131329556.jpg" },
        { id: "eight-of-pentacles", name: "Восьмерка Пентаклей", image: "https://static.tildacdn.com/tild6135-6234-4633-b930-306365336164/Group_2131329544.jpg" },
        { id: "nine-of-pentacles", name: "Девятка Пентаклей", image: "https://static.tildacdn.com/tild3934-3239-4534-b866-346665386230/Group_2131329555.jpg" },
        { id: "ten-of-pentacles", name: "Десятка Пентаклей", image: "https://static.tildacdn.com/tild3437-3666-4135-b836-313564343035/Group_2131329554.jpg" },
        { id: "page-of-pentacles", name: "Паж Пентаклей", image: "https://static.tildacdn.com/tild6235-3539-4338-b633-366638663437/Group_2131329557.jpg" },
        { id: "knight-of-pentacles", name: "Рыцарь Пентаклей", image: "https://static.tildacdn.com/tild3561-6136-4535-b262-343861663766/Group_2131329551.jpg" },
        { id: "queen-of-pentacles", name: "Королева Пентаклей", image: "https://static.tildacdn.com/tild6565-3561-4335-a266-663566323366/_.jpg" },
        { id: "king-of-pentacles", name: "Король Пентаклей", image: "https://static.tildacdn.com/tild6665-6365-4064-b063-626134353931/Group_2131329549.jpg" }
        ]
    };

// Описания карт
const cardDescriptions = {
    "fool": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Шут &mdash; это тот самый вайб &laquo;а почему бы и нет?&raquo;. Это начало новой дороги, приключение без правил и ограничений, когда ты идешь вперед с искренним оптимизмом и верой, что у этой истории точно будет хэппи-энд!&nbsp;</span></p>
<p><span style="font-weight: 400;">Но если карта выпала в прямом положении, не спеши надевать &laquo;розовые очки&raquo; &mdash; на пути к цели будет немало преград, и не все будет идти гладко. Правда, Шута это вообще не пугает! Он принимает вызовы, ведь, как говорится, &laquo;дуракам везет&raquo;, а все передряги в итоге оборачиваются крутыми жизненными уроками.&nbsp;</span></p>
<p><span style="font-weight: 400;">Эта карта &mdash; знак новых перспектив и шанса, который может перевернуть твою жизнь с ног на голову (в хорошем смысле). Главное &mdash; не бояться делать выбор, даже если он кажется спонтанным. Вселенная уже приготовила тебе неожиданный поворот событий, который всколыхнет эмоции и подарит чувство свободы! </span></p>`, 
                reversed: `<p><span style="font-weight: 400;">А вот если Шут выпал в перевернутом виде, то вся радужная картинка трескается, как бокал после слишком эмоционального тоста.&nbsp; Вместо легкого авантюриста перед нами человек, который действует хаотично, импульсивно, а иногда и чересчур эгоистично. Его поступки больше похожи на спектакль для публики &mdash; словно он отчаянно пытается что-то кому-то доказать, но сам не понимает, зачем.&nbsp;</span></p>
<p><span style="font-weight: 400;">В этот момент жизнь уже тонким намёком (а может, и громким звонком) говорит: &laquo;Эй, пора бы разобраться с делами, довести начатое до конца!&raquo; Но Шут уходит в прокрастинацию, тратит энергию на всякую ерунду и никак не может сфокусироваться на важном. Лень, апатия и неумение грамотно распоряжаться ресурсами приводят к ошибкам, а иногда и к настоящим факапам с неприятными последствиями.&nbsp;</span></p>
<p><span style="font-weight: 400;">Перевернутая карта &mdash; это еще и залипание в прошлом, когда старые привязанности, страхи и обиды не дают сделать шаг вперед. Начало новых событий здесь словно заблокировано, а сам Шут пока не дорос до осознания, что пора взрослеть и брать ответственность за свою жизнь.&nbsp;</span></p>
`
            },
            "year": {
                normal: `<p class="c2"><span class="c4">Если Шут выпадает как карта года, то приготовься к сумасшедшим приключениям, новым возможностям и полному перезапуску твоей жизни! Этот год &mdash; про свободу, спонтанность и смелые решения, которые могут сначала показаться авантюрными, но в итоге приведут к чему-то удивительному. Это время, когда можно (и нужно!) пробовать новое, рисковать, отпускать старое и делать выбор сердцем, а не логикой.</span></p>
<h3 id="h.qrreem9noqgl" class="c12"><span class="c1">О чем предупреждает Шут?</span></h3>
<p class="c2"><span class="c4">Не полагайся только на удачу &mdash; безответственность и хаотичность могут завести в тупик.<br />Прежде чем прыгнуть в омут с головой, убедись, что там хотя бы есть вода.<br />Остерегайся необдуманных решений и людей, которые могут увести тебя в сторону от истинных целей.</span></p>
<p class="c2"><span class="c4">Этот год точно не будет скучным! Он даст тебе шанс начать всё с чистого листа, пересмотреть привычные взгляды и выйти за рамки, которые мешали двигаться вперед. Главное &mdash; оставайся открытой новому, но не забывай включать мозг, когда нужно!</span></p>
<h3 id="h.seksm17u9a4y" class="c12"><span class="c1">Главные советы от Шута:</span></h3>
<ul class="c5 lst-kix_6io3xnwlt9tg-0 start">
<li class="c0 li-bullet-0"><span class="c4">Не бойся рисковать &ndash; чем смелее шаг, тем громче твое имя.</span></li>
<li class="c0 li-bullet-0"><span class="c4">Оставайся собой &ndash; искренность и оригинальность приведут к успеху.</span></li>
<li class="c0 li-bullet-0">Наслаждайся моментом &ndash; этот год твой, бери от него максимум!</li>
</ul>`,
            },
            "ex": {
                normal: `<p><span style="font-weight: 400;">Бывший, похоже, не сделал выводов и продолжает жить в режиме &laquo;а вдруг само рассосется&raquo;.&nbsp; Он хаотично мечется, делает импульсивные поступки, не думая о последствиях, и наступает на те же грабли, что и раньше. Вечное &laquo;не определился&raquo;, &laquo;не готов&raquo;, &laquo;ещё не время&raquo; &ndash; и вот уже годы летят, а успех, стабильность и адекватные отношения так и не появились.&nbsp;</span></p>
<h3><strong>Что его ждёт?</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Работа без перспектив &ndash; потому что серьезно планировать будущее сложно, когда живешь по принципу &laquo;как пойдет&raquo;.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Отношения без смысла &ndash; беспорядочные связи, бегство от обязательств и страх чего-то по-настоящему глубокого.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Застревание в прошлом &ndash; а значит, тоска по лучшему, что у него было&hellip; например, по тебе.&nbsp;</span></li>
</ul>
<p><span style="font-weight: 400;">Этот человек мог бы вырасти и измениться, но перевернутый Шут &ndash; это бесконечный круг ошибок и упущенных возможностей. Так что не удивляйся, если однажды увидишь его посты в духе &laquo;когда-то у меня было всё, а теперь ничего&raquo;&hellip;&nbsp;</span></p>
<p><br style="font-weight: 400;" /><br style="font-weight: 400;" /></p>
`
            }
        }
    },
    "magician": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Время брать своё!&nbsp;</span></p>
<p><span style="font-weight: 400;">Вселенная говорит:&nbsp; &laquo;Девочка, действуй!&raquo;. У тебя уже есть всё, что нужно &ndash; талант, энергия, харизма, мозги и, конечно, огромный потенциал. Осталось только смело заявить о себе и идти к своей цели на 100%.</span></p>
<p><strong>Что это значит?</strong><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">Вселенная на твоей стороне &ndash; просто поверь в себя и начинай!</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">Мудрость + осознанность + решимость =&nbsp; бомбическая смесь для успеха!</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">Ты реально можешь всё &ndash; главное, не тормози и не сомневайся.</span></p>
<p><strong>Главный посыл карты? </strong><strong><br /></strong><span style="font-weight: 400;">Бери своё, будь дерзкой, не бойся рисковать &ndash; ты рождена, чтобы сиять!&nbsp;</span></p>
`,
                reversed: `<p><span style="font-weight: 400;">Ой-ой, тут что-то нечисто&hellip;&nbsp; Когда Маг перевернут, это уже не про силу и успех, а про манипуляции, жажду власти и хитрые схемы. Кто-то (а может, и ты сама?) готов идти по головам, забывая про честность и мораль.</span></p>
<p><span style="font-weight: 400;">Но под этой маской дерзости может скрываться неуверенность в себе и заниженная самооценка. Карта намекает: страх неудачи толкает тебя на сомнительные решения, а ситуация, в которую ты попала, может казаться тупиком без выхода.</span></p>
<p><strong>Что это значит?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Манипуляции и обман &ndash; кто-то играет нечестно, будь осторожна.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Желание контролировать всё и всех &ndash; а может, пора расслабиться и довериться Вселенной?</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Неуверенность в себе &ndash; ты не должна никому ничего доказывать, просто будь собой!</span></li>
</ul>
<p><strong>Главный совет карты</strong><strong><br /></strong><span style="font-weight: 400;">Проверяй мотивы &ndash; свои и чужие. Не пытайся взять свое любой ценой, ведь настоящая сила &ndash; в честности, уверенности и уважении к себе!</span></p>
`
            },
            "year": {
                normal: `
  <p class="c2"><span class="c4">Если Маг выпал в раскладе, то знай: этот год – твой звездный час. Ты не просто становишься успешной – ты диктуешь тренды, ты вдохновляешь, ты создаешь новую реальность! Вселенная говорит: Девочка, всё в твоих руках, бери и свети!</span></p>
  <p class="c2"><span class="c4">Этот год – год силы, действий и мощных возможностей! Вселенная как будто говорит тебе: Ты главный персонаж этой истории, так что хватит ждать – пора творить магию! У тебя есть всё, чтобы достичь своих целей: ум, энергия, харизма и навыки. Теперь осталось просто взять и сделать!</span></p>
  <h3 class="c12"><span class="c1">Что тебя ждёт?</span></h3>
  <ul class="c5">
    <li class="c0"><span class="c4">Прорывы в карьере – твои идеи работают, проекты взлетают, и ты становишься человеком, который решает.</span></li>
    <li class="c0"><span class="c4">Внимание и успех – тебя замечают, тебя слушают, тобой восхищаются. Ты в центре событий!</span></li>
    <li class="c0"><span class="c4">Контроль над своей жизнью – ты перестаешь сомневаться и понимаешь: Я могу ВСЁ!</span></li>
  </ul>
  <h3 class="c12"><span class="c1">Главные советы карты:</span></h3>
  <ul class="c5">
    <li class="c0"><span class="c4">Бери своё, пока мир не опомнился!</span></li>
    <li class="c0"><span class="c4">Не бойся действовать – это твой шанс выстрелить!</span></li>
    <li class="c0"><span class="c4">Верь в себя – ты не зря здесь, ты реально МОЖЕШЬ!</span></li>
  </ul>
  <p class="c2"><span class="c4">Этот год – год больших возможностей. Не тормози, не сомневайся, используй все ресурсы и создавай свою лучшую жизнь!</span></p>
`,
            },
            "ex": {
                normal: `<p><span style="font-weight: 400;">Наливаем бокал вина, расслабляемся и смотрим, какие фокусы не удались у нашего бывшего.&nbsp;</span></p>
<p><span style="font-weight: 400;">Он думал, что держит жизнь под контролем, но&hellip; магию отменили, заклинания больше не работают.&nbsp;</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Хотел строить карьеру? Упустил лучшие возможности, теперь сидит на том, что есть, и мечтает о &laquo;когда-то&raquo;.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Думал, что без тебя будет круче? Ой, а вокруг-то не та энергия, не те люди, не тот уют.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Пытался манипулировать? Теперь сам в сетях чужих игр. Коварность не окупилась, а бумеранг прилетел по расписанию.&nbsp;</span></li>
</ul>
<h3><strong>Главный вывод?</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты &ndash; его потерянный шанс, который он сам упустил.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ждёт его тоска по тебе и осознание, что ты была главным подарком в его жизни.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Но, увы, возврата нет &ndash; двери закрыты, магия исчерпана, финал предсказуем.</span></li>
</ul>
<p><span style="font-weight: 400;">Так что поднимаем бокал за его осознание и твой прекрасный новый путь.&nbsp;</span></p>
`
            }
        }
    },
    "high-priestess": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Иногда хочется просто замедлиться, налить бокал вина, включить любимый плейлист и побыть наедине с собой.&nbsp; Карта Жрица именно про это &ndash; про внутренний баланс, осознание своих желаний и силу интуиции. Она напоминает: не торопись, не пытайся разогнать события &ndash; всё раскроется в своё время. Вселенная уже готовит для тебя ответы, просто доверься себе и слушай своё сердце.&nbsp;</span></p>
<p><strong>Что несет эта карта?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Глубокое осознание &ndash; время понять, чего ты хочешь на самом деле.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Скрытое станет явным &ndash; скоро всплывет важная информация, которая многое изменит.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Открытие талантов &ndash; если давно чувствовала в себе потенциал, пора его раскрыть.</span></li>
</ul>
<p><strong>Главный совет карты</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не спеши &ndash; ответы придут сами, когда будет время.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Интуиция &ndash; твой лучший советчик, доверься ей.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Будь готова к сюрпризам &ndash; возможно, скоро откроется что-то, что полностью изменит твою жизнь!</span></li>
</ul>
<p><span style="font-weight: 400;">Жрица &ndash; это женская магия, внутренняя сила и спокойная уверенность в том, что всё сложится именно так, как нужно.&nbsp;</span></p>
`,
                reversed: `<p><span style="font-weight: 400;">Когда интуиция в отпуске, а решения &ndash; это лотерея.&nbsp;</span></p>
<p><span style="font-weight: 400;">Ощущение, что жизнь играет с тобой в прятки? Вроде бы логика есть, вроде и интуиция раньше не подводила, но сейчас всё как будто сквозь запотевшее стекло &ndash; важные детали ускользают, а ты пытаешься разобраться, не понимая, с какой стороны вообще смотреть.</span></p>
<p><span style="font-weight: 400;">Жрица в перевернутом положении &ndash; это про спонтанные решения, которые потом вспоминаешь с фразой &laquo;Ну я и дурочка!&raquo;. Когда объективной информации не хватает, а эмоции захватывают руль, итог чаще всего не радует. Впереди поворот не туда, пустые надежды и ожидания, которые вряд ли оправдаются.</span></p>
<p><strong>Что несет эта карта?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Иллюзии и непонимание ситуации: ты видишь верхушку айсберга, но под водой ещё целый &laquo;Титаник&raquo; событий.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Решения на эмоциях, за которые потом придётся краснеть или страдать.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Чёрная полоса? Возможно, но на самом деле ты просто забрела не в тот переулок.</span></li>
</ul>
<p><strong>Главный совет карты</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Хватит додумывать &ndash; проверь факты! Не всё так, как кажется.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Держи эмоции в узде &ndash; сейчас не время делать судьбоносные шаги.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Дай интуиции время перезагрузиться &ndash; не принимай решения в тумане.</span></li>
</ul>
<p><span style="font-weight: 400;">Перевернутая Жрица &ndash; это когда мозг устал, сердце запуталось, а интуиция взяла выходной. Так что не форсируй события, лучше налей бокал вина и пережди этот хаос &ndash; потом всё само станет на свои места!</span></p>
`
            },
            "year": {
                normal: `<p class="c2"><span class="c4">Этот год не про суету и гонку за результатами. Он про интуицию, осознание и неожиданные открытия. Вселенная словно шепчет: замедлись, слушай себя, ответы уже внутри.</span></p>
                <p class="c2"><span class="c1">Что несет эта карта?</span></p>
                <ul class="c5 lst-kix_ckxgob7psjcz-0 start">
                <li class="c0 li-bullet-0"><span class="c4">Год больших осознаний &ndash; ты наконец-то разберешься в себе и своих желаниях.</span></li>
                <li class="c0 li-bullet-0"><span class="c4">Интуиция будет работать на полную мощность &ndash; доверяй своим ощущениям, они не обманут.</span></li>
                <li class="c0 li-bullet-0"><span class="c4">Жизнь может подкинуть неожиданные тайны &ndash; но они пойдут тебе только на пользу.</span></li>
                </ul>
                <h3 id="h.cfhmmkecejkg" class="c12"><span class="c1">Главный совет карты</span></h3>
                <ul class="c5 lst-kix_ahge9rpszo4v-0 start">
                <li class="c0 li-bullet-0"><span class="c4">Не торопись, не суетись &ndash; твой путь раскроется сам, просто позволь этому случиться.</span></li>
                <li class="c0 li-bullet-0"><span class="c4">Слушай свою интуицию &ndash; она лучше любого прогноза.</span></li>
                <li class="c0 li-bullet-0"><span class="c4">Будь готова к &nbsp;правде, которая может быть как горькой, так и освобождающей.</span></li>
                </ul>
                <p class="c2"><span class="c4">Этот год станет временем внутреннего роста, глубокой мудрости и осознания, что Вселенная всегда знает, что делает. Главное &ndash; довериться этому процессу и позволить магии случиться!</span></p>`,
            },
            "ex": {
                normal: `<p><span style="font-weight: 400;">Жрица в этом раскладе &mdash; это про осознание, которое приходит слишком поздно. Бывший думал, что всё под контролем, что жизнь без тебя &ndash; это сплошной успех&hellip; А потом, глядя в потолок ночью, вдруг понял: он упустил что-то действительно ценное.</span></p>
<p><span style="font-weight: 400;">Сначала он будет делать вид, что всё нормально. Мол, &laquo;Да я вообще не переживаю&raquo;. Потом начнётся череда странных решений &mdash; новых, но неудачных отношений, бессмысленных поступков, попыток компенсировать пустоту. И, конечно, залипание в прошлом, потому что чем дальше, тем больше он понимает, что ты была главной женщиной в его жизни.</span></p>
<h3><strong>Что его ждёт?</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Попытки заглушить внутреннюю пустоту &mdash; но ни развлечения, ни новые знакомства не дадут того, что давала ты.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Осознание, что всё самое лучшее уже было &mdash; но теперь к этому возврата нет.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Молчаливые сожаления &mdash; потому что признать свою ошибку в голос слишком больно.&nbsp;</span></li>
</ul>
<p><span style="font-weight: 400;">Жрица в этом раскладе &mdash; это молчаливая справедливость. Не ты мстишь &mdash; жизнь сама всё расставляет по местам. Он осознает, но ты уже слишком далеко.</span></p>`
            }
        }
    },
    "empress": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Удача, женская сила и жизнь, которая наконец-то идет вверх!</span></p>
<p><span style="font-weight: 400;">Если тебе выпала Императрица, то открывай шампанское &ndash; белая полоса уже началась! Всё, что долго стояло на месте, наконец-то сдвинется, удача на твоей стороне, а судьба готовит тебе щедрые подарки.</span></p>
<p><span style="font-weight: 400;">Это карта расцвета, уверенности и женской энергии в её лучшем проявлении. Ты можешь расслабиться и наслаждаться процессом, потому что всё идёт именно так, как надо.</span></p>
<p><span style="font-weight: 400;">А ещё Императрица &ndash; это про любовь, счастье, гармонию и&hellip; новые главы в жизни. Возможно, кто-то решится на серьезные отношения, кто-то получит предложение руки и сердца, а кто-то вскоре услышит новость о пополнении.</span></p>
<p><strong>Что несет эта карта?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Жизнь в удовольствии &ndash; кайфуй, ты это заслужила!</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Благоприятные перемены &ndash; всё сложится лучше, чем ты думала.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Любовь, семья, серьёзные отношения &ndash; кто-то явно видит в тебе ту самую.</span></li>
</ul>
<p><strong>Главный совет карты</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Отпусти контроль &ndash; Вселенная уже на твоей стороне.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не бойся желать большего &ndash; сейчас твой момент брать от жизни всё.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Позволь себе быть в центре внимания &ndash; ты сияешь, и это невозможно не заметить.</span></li>
</ul>
<p><span style="font-weight: 400;">Императрица &ndash; это про роскошь жить в своё удовольствие. Всё лучшее уже движется к тебе, просто поверь в свою силу и наслаждайся этим великолепным моментом!</span></p>
`, 
                reversed: `<p><span style="font-weight: 400;">Когда жизнь дает сбои, а Вселенная смотрит с прищуром.</span></p>
<p><span style="font-weight: 400;">Ну что, дорогая, чувствуешь, что что-то идёт не так? Это Императрица в перевернутом положении намекает: пора брать себя в руки! Вместо потока удачи &ndash; застой и ощущение, что всё буксует на месте.</span></p>
<p><span style="font-weight: 400;">Возможно, дела идут не так, как хотелось бы, но честно: может, ты сама саботируешь свой успех? Лень, прокрастинация, слишком большая ставка на &laquo;авось&raquo; &ndash; вот и результат. Если продолжать ждать чуда, можно дождаться только очередного поворота не туда.</span></p>
<p><span style="font-weight: 400;">А в личной жизни тоже не всё гладко. Скандалы, непонимание, ревность и даже риск серьёзного разрыва &ndash; если эмоции не держать под контролем, можно разнести всё к чертям.</span></p>
<p><strong>Что несёт эта карта?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Дела стоят на месте &ndash; пора менять тактику.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Финансовые проблемы &ndash; денежный поток заблокирован, пора думать, почему.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ссоры и разлады в отношениях &ndash; держи эмоции под контролем, иначе можно всё разрушить.</span></li>
</ul>
<p><strong>Главный совет карты</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Перестань ждать чуда &ndash; начни действовать.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Возьми ответственность за свои решения &ndash; жизнь в хаосе не принесет результатов.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не перегибай в отношениях &ndash; иногда лучше промолчать, чем рвать мосты.</span></li>
</ul>
<p><span style="font-weight: 400;">Императрица в перевернутом положении &ndash; это звоночек, что пора включить режим &laquo;сильная, умная, уверенная&raquo; и навести порядок в своей жизни. Удача не отвернулась &ndash; она просто ждёт, когда ты снова возьмешь ситуацию в свои руки.</span></p>
`
            },
            "year": {
                normal: `<p class="c2"><span class="c4">Готовься, этот год будет щедрым, ярким и по-королевски роскошным! Императрица в раскладе &ndash; это год, когда ты цветёшь, сияешь и собираешь все возможные бонусы от Вселенной.</span></p>
<p class="c2"><span class="c4">Если раньше ты вкладывала силы в какое-то дело, но результатов не было &ndash; держись, потому что теперь оно взлетит! Всё, что долгое время стояло на месте, начнёт двигаться. Деньги, успех, новые перспективы &ndash; этот год щедр на подарки.</span></p>
<p class="c2"><span class="c4">А ещё Императрица &ndash; это про любовь, семью и гармонию. Возможно, отношения выйдут на новый уровень, в твоей жизни появится особенный человек или даже случатся большие перемены &ndash; типа свадьбы или пополнения.</span></p>
<h3 id="h.cvncvgxk328x" class="c12"><span class="c1">Что сулит эта карта?</span></h3>
<ul class="c5 lst-kix_sy74iesow37b-0 start">
<li class="c0 li-bullet-0"><span class="c4">Финансовый подъём &ndash; деньги идут к тебе, и не забудь сказать им оставайтесь!</span></li>
<li class="c0 li-bullet-0"><span class="c4">Расцвет во всех сферах &ndash; работа, личная жизнь, внешность, настроение &ndash; всё на высоте.</span></li>
<li class="c0 li-bullet-0">Любовь и женская сила &ndash; тебя заметят, тебя захотят, тобой будут восхищаться.</li>
</ul>
<h3 id="h.hpgdwrgrlfxf" class="c12"><span class="c1">Главный совет карты</span></h3>
<ul class="c5 lst-kix_kcr9qdo4eei6-0 start">
<li class="c0 li-bullet-0"><span class="c4">Наслаждайся успехом &ndash; ты заслужила это.</span></li>
<li class="c0 li-bullet-0"><span class="c4">Не бойся желать больше &ndash; в этом году Вселенная играет на твоей стороне.</span></li>
<li class="c0 li-bullet-0"><span class="c4">Позволь себе жить на полную &ndash; никаких компромиссов с мечтами.</span></li>
</ul>
<p class="c2">Этот год &ndash; про кайф, про шик, про то, чтобы брать от жизни максимум. Вселенная накрыла для тебя пышный стол из возможностей, любви и изобилия, и осталось только подойти и взять своё!</p>`,
            },
            "ex": {
                normal: `<p><span style="font-weight: 400;">Пока ты цветёшь, развиваешься и наполняешь свою жизнь радостью, его ждёт серый и унылый сценарий, где нет твоей энергии, тепла и вдохновения. Если раньше ты была тем самым солнечным лучом в его жизни, то теперь он сидит в тени и не понимает, почему вдруг всё стало скучным и бессмысленным.</span></p>
<h3><strong>Что ждёт бывшего?</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Проблемы в отношениях &mdash; потому что после Императрицы все кажется пресным.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Чувство потери &mdash; осознание, что ты была тем, что делало его жизнь лучше.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Эмоциональный и финансовый спад &mdash; потому что у него больше нет доступа к твоей энергии изобилия.</span></li>
</ul>
<p><span style="font-weight: 400;">Императрица в этом раскладе &ndash; это карма в самом чистом виде. Ты развиваешься и сияешь, а он остаётся в прошлом. Миссия выполнена!</span></p>`
            }
        }
    },
    "emperor": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Уверенность, контроль и жизнь по твоим правилам.&nbsp;</span></p>
<p><span style="font-weight: 400;">Когда в раскладе появляется Император, Вселенная словно говорит: &laquo;Девочка, бери ситуацию в свои руки!&raquo; Это карта абсолютного контроля, уверенности, стратегического мышления и больших побед.</span></p>
<p><span style="font-weight: 400;">Здесь нет места хаосу и сомнениям. Если хочешь чего-то достичь, тебе нужно быть собранной, решительной и действовать без колебаний. Всё у тебя уже есть &ndash; талант, ум, сила, осталось только проявить настойчивость и показать этому миру, кто тут главная!</span></p>
<p><span style="font-weight: 400;">А ещё Император намекает, что рядом есть влиятельный человек, который может помочь. Это может быть наставник, покровитель или даже мужчина, который готов поддерживать твои амбиции и помогать их воплощать.</span></p>
<p><strong>Что сулит эта карта?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты на верном пути &ndash; осталось просто дожать.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Успех в карьере и делах &ndash; главное, не терять решительность.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Стабильность и уверенность &ndash; ты создаешь свою реальность и управляешь ею.</span></li>
</ul>
<p><strong>Как действует Император?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не ждёт, пока ему дадут шанс &ndash; сам его создаёт.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Решает быстро, уверенно и стратегически &ndash; эмоции оставляет в стороне.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Знает себе цену и не разменивается на слабые позиции.</span></li>
</ul>
<p><span style="font-weight: 400;">Император &ndash; это про женщин, которые знают, чего хотят, и умеют это брать. Всё получится, если ты не будешь бояться вести свою игру!</span></p>
`, 
                reversed: `<p><span style="font-weight: 400;">Когда контроль превращается в хаос.&nbsp;&nbsp;</span></p>
<p><span style="font-weight: 400;">Император в перевернутом положении &ndash; это тот момент, когда сила перестаёт быть достоинством и начинает работать против тебя. Вместо уверенности &ndash; жёсткость, вместо стратегии &ndash; упертость, вместо контроля &ndash; тотальный хаос.</span></p>
<p><span style="font-weight: 400;">Вместо того чтобы управлять ситуацией, ты можешь пытаться держать все под тотальным контролем, но чем сильнее сжимаешь кулак, тем быстрее всё утекает сквозь пальцы. Вместо гибкости &ndash; жажда власти, желание, чтобы всё было только по твоим правилам.</span></p>
<p><span style="font-weight: 400;">А еще эта карта предупреждает: застой не только в делах, но и в личностном росте. Если кажется, что всё идёт не так, возможно, пришло время сменить тактику, а не пытаться давить на ситуацию.</span></p>
<p><strong>Что сулит эта карта?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Излишний контроль &ndash; люди отдаляются, возможности уходят.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Застой в карьере и жизни &ndash; ты слишком зажата в рамках, которые сама же создала.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Опасность превратиться в человека, который давит, а не вдохновляет.</span></li>
</ul>
<p><strong>Как не проиграть этот период?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не бойся ослабить хватку &ndash; иногда лучший контроль &ndash; это доверие к процессу.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Оставь место для компромиссов &ndash; жёсткость без гибкости не ведёт к победе.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не загоняй себя в рамки &ndash; развитие начинается там, где ты даёшь себе свободу.</span></li>
</ul>
<p><span style="font-weight: 400;">Перевернутый Император &ndash; это момент переосмысления: ты управляешь ситуацией или она управляет тобой? Может, пора отпустить контроль, расслабиться и посмотреть, что Вселенная предложит в ответ?</span></p>
`
            },
            "year": {
                normal: `<p class="c2"><span class="c4">Этот год не про плавание по течение, а про управление своей жизнью. Если в раскладе выпал Император, то Вселенная буквально говорит: &laquo;Твоя жизнь &ndash; твои правила. Пора занять свое место во главе стола!&raquo;</span></p>
<p class="c2"><span class="c4">Ты больше не ждёшь шансов, не сомневаешься и не спрашиваешь, можно ли. Ты берёшь, добиваешься, прокладываешь путь к своим целям. В этом году никаких полумер &ndash; только решительность, только стратегические решения, только амбиции, которые ведут к настоящему успеху.</span></p>
<h3 id="h.mjmgudlzzusi" class="c12"><span class="c1">Что сулит этот год?</span></h3>
<ul class="c5 lst-kix_wvbysg73nlcd-0 start">
<li class="c0 li-bullet-0"><span class="c4">Полный контроль над ситуацией &ndash; ты сама решаешь, как всё будет.</span></li>
<li class="c0 li-bullet-0"><span class="c4">Рост, стабильность, успех &ndash; в карьере, деньгах и даже в личной жизни.</span></li>
<li class="c0 li-bullet-0">Возможность заявить о себе и занять сильную позицию.</li>
</ul>
<h3 id="h.oblftdv769oz" class="c12"><span class="c1">Как взять от этого года максимум?</span></h3>
<ul class="c5 lst-kix_x644g915gc8b-0 start">
<li class="c0 li-bullet-0"><span class="c4">Будь уверенной &ndash; если у тебя есть цель, у тебя есть и сила её достичь.</span></li>
<li class="c0 li-bullet-0"><span class="c4">Не бойся ответственности &ndash; большие победы требуют решительных действий.</span></li>
<li class="c0 li-bullet-0"><span class="c4">Знай себе цену &ndash; никаких компромиссов с собой и своими желаниями.</span></li>
</ul>
<p class="c2"><span class="c4">Готовься к главной роли &ndash; теперь весь мир играет по твоим правилам!</span></p>`,
},
            "ex": {
                normal: `<p><span style="font-weight: 400;">Ну что, бывший думал, что и без тебя сможет держать свою жизнь под контролем? Что ж, Император в этом раскладе намекает, что это не так.&nbsp;</span></p>
<p><span style="font-weight: 400;">Ты ушла, и с тобой ушла структура, стабильность и баланс. Он мог делать вид, что управляет ситуацией, но в реальности теряет контроль и тонет в собственных ошибках.</span></p>
<p><span style="font-weight: 400;">Сначала он будет делать вид, что всё под контролем, затем начнётся хаос &mdash; дела не клеятся, отношения не складываются, уверенность в себе сходит на нет. А главное &mdash; он поймет, что рядом больше нет той, кто давала ему энергию, веру в себя и поддержку.</span></p>
<h3><strong>Что ждёт бывшего?</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Развал планов &mdash; он теряет влияние, карьеру или просто ощущение власти над своей жизнью.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ощущение пустоты &mdash; он думал, что без тебя будет круче, но, кажется, ошибся.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Контроль ускользает &mdash; всё, что казалось стабильным, рушится.</span></li>
</ul>
<p><span style="font-weight: 400;">Император в этом раскладе &mdash; карма в чистом виде. Пока ты движешься вверх и строишь свою новую жизнь, он остается с ощущением, что потерял контроль не только над отношениями, но и над собой.</span><br style="font-weight: 400;" /><br style="font-weight: 400;" /></p>`
            }
        }
    },
    "hierophant": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Мудрость, знания и только правильные решения.&nbsp;&nbsp;</span></p>
<p><span style="font-weight: 400;">Когда в раскладе выпадает Верховный Жрец, это знак, что пора включать мозг и слушать внутреннего гуру. Тут не про хаос и спонтанность, тут про спокойную уверенность, знания и понимание, что всё идёт так, как должно.</span></p>
<p><span style="font-weight: 400;">Жрец &ndash; это человек, который знает, как правильно, поэтому карта может намекать, что вокруг тебя есть кто-то, кто готов наставлять, учить и давать тебе ценные советы. Может, это мудрый друг, ментор, учитель, а может, даже ты сама начинаешь видеть жизнь по-новому и становиться примером для других.</span></p>
<p><span style="font-weight: 400;">А ещё эта карта про духовный рост, осознания и понимание, чего ты действительно хочешь. Не спеши, этот путь требует терпения, но в итоге ты выйдешь на новый уровень.</span></p>
<p><strong>Что сулит эта карта?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Важные знания &ndash; ты получишь ответы, которые давно искала.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Мудрый наставник &ndash; кто-то поможет тебе найти верный путь.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Гармония &ndash; если будешь следовать своему внутреннему голосу, всё сложится идеально.</span></li>
</ul>
<p><strong>Как взять от этой карты максимум?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Слушай мудрых людей &ndash; они видят то, что ты пока не замечаешь.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не спеши с решениями &ndash; обдуманные шаги принесут успех.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Доверяй себе &ndash; ты уже знаешь, что делать, просто поверь в это.</span></li>
</ul>
<p><span style="font-weight: 400;">Верховный Жрец &ndash; это про осознанность, развитие и умение видеть глубже. Включай интуицию, собирай знания и будь тем человеком, чья мудрость делает этот мир лучше!</span></p>
`, 
                reversed: `<p><span style="font-weight: 400;">Когда знания идут мимо, а интуиция молчит.&nbsp;</span></p>
<p><span style="font-weight: 400;">Ой-ой, а тут явно что-то не так. Перевернутый Жрец &ndash; это когда ты либо не хочешь слушать важные советы, либо вокруг тебя люди, которые несут полную чушь, но уверенно играют роль &laquo;гуру жизни&raquo;.</span></p>
<p><span style="font-weight: 400;">Вместо мудрости &ndash; упрямство, вместо честных знаний &ndash; манипуляции, вместо роста &ndash; потеря авторитета и отсутствие направления. Возможно, ты сама игнорируешь очевидные вещи или цепляешься за убеждения, которые уже не работают. А может, наоборот, кто-то рядом пытается запудрить тебе мозги, выдавая себя за эксперта, но на деле &ndash; просто играет в &laquo;великий учитель&raquo;.</span></p>
<p><span style="font-weight: 400;">А ещё эта карта намекает на хаос в ценностях. Что-то явно пошло не так, и вместо внутренней гармонии ты можешь чувствовать неуверенность, потерю смысла и тягу ко всему поверхностному.</span></p>
<p><strong>Что сулит эта карта?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Искажение информации &ndash; ты либо не хочешь учиться, либо учишься у тех, кто не знает, чему учить.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Люди, которые манипулируют &ndash; будь осторожна, не все хотят помочь, даже если делают вид.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Запутанность &ndash; внутренний кризис, потеря авторитета и разрыв с правильными ориентирами.</span></li>
</ul>
<p><strong>Как выбраться из этого состояния?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Пересмотри, у кого ты берёшь советы &ndash; правда ли это тот, кому стоит доверять?</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Будь честна с собой &ndash; ты реально не знаешь ответ или просто не хочешь его видеть?</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Остановись и наведи порядок в мыслях &ndash; бежать от знаний и истины не выйдет, они тебя догонят.</span></li>
</ul>
<p><span style="font-weight: 400;">Перевернутый Верховный Жрец &ndash; это когда пора отбросить иллюзии, фильтровать информацию и понять, кому и чему ты реально доверяешь. Жить по чужим правилам или учиться на чужих ошибках &ndash; это не твой путь. Твой путь &ndash; осознанность, а не фанатизм и хаос!</span></p>
`
            },
            "year": {
                normal: `<p class="c2"><span class="c4">Этот год &ndash; не просто про успех, а про настоящий уровень ПРО! Ты больше не та, кто пробует, учится и надеется &ndash; ты та, кто уже знает, как играть по-крупному и выигрывать.</span></p>
<p class="c2"><span class="c4">Этот год будет про осознанность, мудрые решения и крутые инсайты. Ты перестаёшь метаться между &laquo;хочу&raquo; и &laquo;надо&raquo;, начинаешь видеть свою жизнь шире и четко понимать, куда двигаться дальше.</span></p>
<p class="c2"><span class="c4">А еще этот год сулит стабильность, гармонию и правильные решения. Если раньше ты могла действовать на эмоциях, то теперь будешь спокойно оценивать ситуацию и выбирать лучшее для себя.</span></p>
<h3 id="h.2ow253v727s8" class="c12"><span class="c1">Что сулит этот год?</span></h3>
<ul class="c5 lst-kix_z3e3lego65l8-0 start">
<li class="c0 li-bullet-0"><span class="c4">Важные знания &ndash; то, что ты узнаешь, изменит твоё будущее.</span></li>
<li class="c0 li-bullet-0"><span class="c4">Новые наставники &ndash; рядом появятся люди, которые помогут тебе вырасти.</span></li>
<li class="c0 li-bullet-0"><span class="c4">Гармония &ndash; ты найдёшь баланс между желаниями и здравым смыслом.</span></li>
</ul>
<h3 id="h.bqyw6cjvq4cr" class="c12"><span class="c1">Как взять от этого года максимум?</span></h3>
<ul class="c5 lst-kix_6y24erg9nltn-0 start">
<li class="c0 li-bullet-0"><span class="c4">Будь открыта к новым знаниям &ndash; в этом году они решают многое.</span></li>
<li class="c0 li-bullet-0"><span class="c4">Прислушивайся к мудрым людям &ndash; иногда со стороны виднее.</span></li>
<li class="c0 li-bullet-0"><span class="c4">Не бойся делать осознанный выбор &ndash; этот год про зрелость и уверенность.</span></li>
</ul>
<p class="c2"><span class="c4">Ты не просто живёшь &ndash; ты становишься лучшей версией себя, и это чертовски круто!</span></p>`,
            },
            "ex": {
                normal: `<p><span style="font-weight: 400;">Ну что, он думал, что знает жизнь? Думал, что без тебя станет мудрее и успешнее? Ну-ну&hellip; Верховный Жрец в этом раскладе намекает, что бывший так и не сделал главного &mdash; не вынес уроки из прошлого.</span></p>
<p><span style="font-weight: 400;">А ещё эта карта намекает, что его могут окружать &laquo;советчики&raquo;, которые не ведут к успеху, а к полному провалу. Возможно, он попадает в глупые ситуации, поверит не тем людям или просто не сможет найти себя.</span></p>
<h3><strong>Что его ждёт?</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ошибки на повторе &mdash; человек не хочет учиться на своих провалах.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Неудачные решения &mdash; потому что он не думает, а просто действует на эмоциях.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Вечные сомнения &mdash; что делать, куда идти, кого слушать (а правильного ответа у него нет).</span></li>
</ul>
<p><span style="font-weight: 400;">Пока ты растешь, развиваешься и живёшь осознанно, он застрял в своих ошибках и даже не понимает, как выбраться. Но ты же не будешь ему объяснять, верно? Он сам должен был научиться</span><strong>.</strong><br style="font-weight: 400;" /><br style="font-weight: 400;" /></p>`
            }
        }
    },
    "lovers": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Когда жизнь ставит перед выбором, но ты знаешь, что всё сложится!&nbsp;</span></p>
<p><span style="font-weight: 400;">Ох, девочка, вот ты и подошла к развилке, где прошлое и будущее машут тебе ручкой с двух сторон. Карта Влюблённые &ndash; это не только про романтику и бабочки в животе, но и про важный выбор, который может повлиять на твоё будущее.</span></p>
<p><span style="font-weight: 400;">Перед тобой две дороги: одна &ndash; привычная и безопасная, вторая &ndash; новая, полная приключений и возможностей. Какой путь выбрать? Вот в чём вопрос! Разрываться между &laquo;надо&raquo; и &laquo;хочу&raquo;, между стабильностью и риском &ndash; это нормально. Главное &ndash; сделать выбор, который действительно резонирует с твоим сердцем.</span></p>
<p><span style="font-weight: 400;">Но не переживай, эта карта несет позитивную энергию. Каким бы сложным ни казалось решение, ты точно выберешь то, что сделает тебя счастливее.</span></p>
<p><strong>Что сулит эта карта?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Важный выбор &ndash; жизнь дает тебе шанс, а ты решаешь, как им воспользоваться.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Гармония между разумом и чувствами &ndash; ты не просто выбираешь, ты осознанно создаёшь своё будущее.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Позитивный исход &ndash; Вселенная на твоей стороне, доверяй себе!</span></li>
</ul>
<p><strong>Как взять от этой карты максимум?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Слушай своё сердце, но и про мозги не забывай &ndash; баланс решает всё!</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не бойся перемен &ndash; они могут привести тебя туда, где тебе действительно хорошо.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Доверься процессу &ndash; Вселенная знает, что делает, а ты знаешь, что тебе нужно.</span></li>
</ul>
<p><span style="font-weight: 400;">Карта Влюблённые напоминает: жизнь &ndash; это не черно-белая дилемма, а выбор в пользу того, что приносит радость. Ты не ошибешься, главное &ndash; решиться и сделать этот шаг! </span></p>
`, 
                reversed: `<p>Когда выбор есть, но он какой-то&hellip; странный.&nbsp;&nbsp;</p>
<p><span style="font-weight: 400;">Ой-ой, а тут кто-то запутался в своих чувствах, желаниях и мыслях! Перевернутые Влюбленные &ndash; это про нерешительность, хаос в голове и выбор, который ты либо не можешь сделать, либо делаешь не туда, куда надо.</span></p>
<p><span style="font-weight: 400;">Ты будто идешь в тумане, где реальность и иллюзии перемешались, а решения принимаются на эмоциях, без логики и без обдумывания последствий. Может, это неудачный роман, который затянул сильнее, чем должен был, или чувства, которые не получают взаимности. Может, это страх сделать шаг вперед или, наоборот, импульсивность, которая ведёт не туда.</span></p>
<p><span style="font-weight: 400;">А еще эта карта намекает: ты можешь обманываться насчет своих желаний. Кажется, что нужно одно, но на деле это может быть просто страх перед чем-то новым.</span></p>
<p><strong>Что сулит эта карта?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Проблемы с принятием решений &ndash; либо не знаешь, что выбрать, либо уже выбрала, но не то.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Любовные качели &ndash; либо безответные чувства, либо отношения, которые идут в тупик.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">&nbsp;Иллюзии &ndash; ты можешь видеть не реальность, а то, что хочется видеть.</span></li>
</ul>
<p><strong>Как взять от этой карты максимум?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не торопись &ndash; решения, принятые в спешке, потом выйдут боком.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Сними розовые очки &ndash; правда может быть неприятной, но она лучше, чем жизнь в иллюзиях.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Слушай не только сердце, но и логику &ndash; это спасёт тебя от ошибок.</span></li>
</ul>
<p><span style="font-weight: 400;">Перевернутые Влюбленные напоминают: не каждое желание ведет к счастью, не каждая любовь &ndash; настоящая, и не каждый выбор &ndash; правильный. Дай себе время, всё встанет на свои места! </span></p>
`
            },
            "year": {
                normal: `<p class="c2"><span class="c4">Этот год будет полон эмоций, романтики и важных решений. Влюблённые в раскладе &ndash; это не просто про любовь (хотя ее тоже будет предостаточно), но и про ключевые выборы, которые могут изменить твою жизнь.</span></p>
<p class="c2"><span class="c4">Будь готова к тому, что жизнь поставит тебя перед развилкой. Это может касаться отношений, работы, личностного роста &ndash; в любом случае на кону что-то важное. Но не переживай! Ты не только выберешь верный путь, но и сделаешь это так, что в итоге окажешься на своём лучшем пути.</span></p>
<p class="c2 c3">&nbsp;</p>
<h3 id="h.l6pigwn9s123" class="c12"><span class="c1">Что сулит этот год?</span></h3>
<ul class="c5 lst-kix_jdx9xgttpxxf-0 start">
<li class="c0 li-bullet-0"><span class="c4">Большие перемены в личной жизни &ndash; любовь, партнерство, укрепление связей.</span></li>
<li class="c0 li-bullet-0"><span class="c4">Ключевые решения &ndash; важно слушать себя и не бояться нового.</span></li>
<li class="c0 li-bullet-0"><span class="c4">Судьбоносные знакомства &ndash; люди, которые сыграют важную роль в твоём будущем.</span></li>
</ul>
<h3 id="h.5qcwy6o4zkc3" class="c12"><span class="c1">Как взять от этого года максимум?</span></h3>
<ul class="c5 lst-kix_99r9624lt0mp-0 start">
<li class="c0 li-bullet-0"><span class="c4">Не бойся слушать своё сердце &ndash; оно подскажет правильный путь.</span></li>
<li class="c0 li-bullet-0"><span class="c4">Выбирай осознанно &ndash; твои решения будут влиять на долгосрочную перспективу.</span></li>
<li class="c0 li-bullet-0"><span class="c4">Будь открыта к новым чувствам и знакомствам &ndash; этот год точно не оставит тебя без эмоций!</span></li>
</ul>
<p class="c2"><span class="c4">Влюблённые в раскладе на год &ndash; это знак, что Вселенная готовит для тебя что-то особенное. Год будет ярким, насыщенным и полным любви &ndash; к себе, к жизни и, возможно, к кому-то особенному.</span></p>`,
            },
            "ex": {
                normal: `<p><span style="font-weight: 400;">Ну что, он думал, что ты была просто этапом? Ошибочка вышла! Он может искать новые отношения, но вот беда &mdash; всё кажется не тем, не так и вообще</span> <span style="font-weight: 400;">&laquo;А почему никто не понимает меня так, как она?&raquo;.&nbsp; </span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">Возможно, сейчас он прыгает из отношений в отношения или даже оказался в любовном треугольнике. Он тот самый, кто не может сделать выбор и запутался в собственных чувствах. Но знаешь что? Это уже не твоя проблема!</span></p>
<h3><strong>Что его ждёт?</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Сомнения &mdash; он уже не так уверен, что принял верное решение.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Бесконечные поиски &mdash; но такого вайба, как с тобой, больше не будет.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Эмоциональные качели &mdash; он не знает где поставить запятую в решении &laquo;Вернуть нельзя забыть&raquo;.</span></li>
</ul>
<p><span style="font-weight: 400;">Карта Влюблённые говорит: выбор есть у каждого, но жить с его последствиями придётся тоже. А ты? Ты двигаешься дальше, сияешь и оставляешь бывшего вариться в его собственных мыслях. Как говорится, не повезло &mdash; сам виноват! </span></p>
`
            }
        }
    },
    "chariot": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Полный вперёд к успеху!</span></p>
<p><span style="font-weight: 400;">Готовься, потому что этот год &ndash; не про тормоза, а про газ в пол! Если в твоём раскладе выпала Колесница, значит, ты на пороге грандиозных перемен, и теперь уже никто тебя не остановит.</span></p>
<p><span style="font-weight: 400;">Эта карта &ndash; про движение вперёд, смелые решения и прорыв, которого ты давно ждала. Хватит стоять на месте, пришло время действовать, покорять, достигать и забирать то, что по праву твоё.</span></p>
<p><span style="font-weight: 400;">Если раньше были сомнения, страхи, неуверенность &ndash; забудь про них! Сейчас перед тобой дорога к успеху, и всё, что нужно &ndash; это не бояться нажать на газ. Ты сильная, решительная и точно знаешь, чего хочешь &ndash; а это уже 90% успеха.</span></p>
<p><strong>Что сулит эта карта?&nbsp;</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Огромный скачок вперёд &ndash; никакого застоя, только движение к мечте.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Победа над проблемами &ndash; ты наконец-то решишь то, что долго мешало двигаться дальше.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Уверенность и контроль &ndash; ты ведешь свою жизнь так, как хочешь.</span></li>
</ul>
<p><strong>Как взять от этой карты максимум?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не сомневайся &ndash; ты уже на верном пути.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">&nbsp;Будь смелой &ndash; рискуй, пробуй, выходи из зоны комфорта.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не бойся перемен &ndash; они ведут тебя туда, где ты будешь счастливой.</span></li>
</ul>
<p><span style="font-weight: 400;">Колесница говорит: ты готова к большим победам! Теперь главное &ndash; не тормозить и не оглядываться назад, потому что впереди тебя ждёт триумф, приключения и жизнь, о которой ты мечтала! </span></p>
`, 
                reversed: `<p><span style="font-weight: 400;">Когда ты хотела на скорости к успеху, но что-то пошло не так&hellip;</span></p>
<p><span style="font-weight: 400;">Ой-ой, а тут кто-то слишком резко нажал на газ и потерял контроль. Перевернутая Колесница &ndash; это не про прорыв, а про спотыкание, не про победу, а про хаос, когда планы летят в тартарары, а ты стоишь и думаешь: &laquo;Что за фигня?&raquo;</span></p>
<p><span style="font-weight: 400;">Возможно, ты переоценила свои силы, забыла про осторожность или слишком торопишься туда, куда пока не надо. Результат? Всё начинает сыпаться, удача уходит, а ты чувствуешь себя так, будто мир решил устроить тебе crash-тест.</span></p>
<p><span style="font-weight: 400;">А ещё эта карта предупреждает: иногда препятствия на пути слишком серьёзные, и сейчас &ndash; не время таранить их лбом. Вместо самоуверенности пора включить разумность, холодный расчёт и чуть больше терпения.</span></p>
<p><span style="font-weight: 400;">И да, не забывай о самоконтроле. Если чувствуешь, что жизнь несётся не туда &ndash; остановись, соберись и найди способ перехватить руль.</span></p>
<p><strong>Что сулит эта карта?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Потеря контроля &ndash; ты либо слишком давишь на ситуацию, либо не управляешь ею совсем.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Неудачи и срывы планов &ndash; что-то может сорваться в последний момент.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Препятствия на пути &ndash; иногда нужно подождать, прежде чем рваться в бой.</span></li>
</ul>
<p><strong>Как взять от этой карты максимум?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Притормози &ndash; иногда пауза лучше, чем бег вслепую.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Пересмотри свой путь &ndash; уверена, что несешься туда, куда надо?</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Учись управлять собой &ndash; эмоции не должны рулить твоей жизнью.</span></li>
</ul>
<p><span style="font-weight: 400;">Перевернутая Колесница &ndash; это не про то, что ты проиграла, а про то, что тебе нужно пересмотреть стратегию. Иногда самый умный ход &ndash; это не ломиться напролом, а сделать шаг назад, проанализировать и выбрать новый путь. </span></p>
`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Ну что, готовься к году, который не про </span><span style="font-weight: 400;">&laquo;</span><span style="font-weight: 400;">подумаю потом</span><span style="font-weight: 400;">&raquo;</span><span style="font-weight: 400;">, а про </span><span style="font-weight: 400;">&laquo;</span><span style="font-weight: 400;">бери и делай</span><span style="font-weight: 400;">&raquo;</span><span style="font-weight: 400;">. Если в раскладе выпала Колесница, то это твой личный билет на экспресс в сторону успеха. Никаких топтаний на месте, никаких </span><span style="font-weight: 400;">&laquo;</span><span style="font-weight: 400;">а вдруг не получится</span><span style="font-weight: 400;">&raquo;</span><span style="font-weight: 400;"> &ndash; только уверенное движение вперёд!</span></p>
<h3><strong>Что сулит этот год?</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Быстрый прогресс &ndash; всё, к чему ты стремилась, начнёт сбываться.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Прорыв в важных сферах &ndash; в карьере, финансах, личных делах.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Смелые решения &ndash; если была мечта, то пора ее воплотить в реальность.</span></li>
</ul>
<h3><strong>Как взять от этого года максимум?</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Действуй решительно &ndash; этот год не про сомнения, а про победы.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не бойся перемен &ndash; они ведут тебя туда, где ты будешь еще счастливее.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Держи фокус на цели &ndash; чем четче ты знаешь, чего хочешь, тем быстрее это получишь.</span></li>
</ul>
<p><span style="font-weight: 400;">Этот год &ndash; твой личный марафон к мечтам. Колесница напоминает: ты сама управляешь своей судьбой, так что крепче держи руль и жми на газ &ndash; впереди только победы!</span></p>`,
            },
            "ex": {
                normal: `<p><span style="font-weight: 400;">Ну что, бывший думал, что после расставания жизнь будет нести его вперед, как спорткар? Ха, нет. Эта карта говорит: он пытался двигаться дальше, но безуспешно. Вместо того, чтобы развиваться и расти, он либо топчется на месте, либо мчится в никуда, совершая ошибку за ошибкой.</span></p>
<h3><strong>Что его ждёт?</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ощущение, что он потерял направление &mdash; он не знает, куда двигаться дальше.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Постоянные попытки вернуть прошлое &mdash; но Колесница едет только вперёд, а не назад.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Хаос в жизни &mdash; никакого плана, только попытки заглушить мысли о том, кого он потерял (да-да, это про тебя).</span></li>
</ul>
<p><span style="font-weight: 400;">Колесница в этом раскладе говорит: не все, кто уезжает, знают, куда едут. А ты? Ты уже на пути к своим целям, мечтам и новым победам. Пока он буксует, ты несешься к лучшей жизни. </span></p>
`
            }
        }
    },
    "justice": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Жизнь все расставит по местам!&nbsp;</span></p>
<p><span style="font-weight: 400;">Ну что, добро пожаловать в момент истины! Если в раскладе выпала Справедливость, значит, всё решится честно, справедливо и так, как должно быть.</span></p>
<p><span style="font-weight: 400;">Ты долго ждала, когда разрешатся важные дела, закроются вопросы, а ошибки прошлого перестанут тебя преследовать? Отличные новости: время пришло! Всё, что ты сделала ранее, сейчас дает свои плоды &ndash; если поступала правильно, получишь награду, если где-то промахнулась, Вселенная мягко подтолкнул тебя к нужным выводам.</span></p>
<p><span style="font-weight: 400;">Юридические дела, важные переговоры, серьезные решения &ndash; не переживай, правда будет на твоей стороне. А еще эта карта сулит крутой рост &ndash; личный, профессиональный, эмоциональный. Ты научишься разбираться в себе, станешь мудрее и сильнее.</span></p>
<p><strong>Что сулит эта карта?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Позитивный исход важных дел &ndash; правда и логика на твоей стороне.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Закрытие старых вопросов &ndash; все точки над &laquo;и&raquo; будут расставлены.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Рост и развитие &ndash; ты выходишь на новый уровень, а не топчешься на месте.</span></li>
</ul>
<p><strong>Как взять от этой карты максимум?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Принимай решения обдуманно &ndash; сейчас важно действовать правильно.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не бойся правды &ndash; всё, что вскроется, поможет тебе идти дальше.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Используй свои знания &ndash; ты уже стала сильнее, время это показать!</span></li>
</ul>
<p><span style="font-weight: 400;">Справедливость напоминает: &laquo;Жизнь &ndash; это бумеранг. Всё, что ты вкладываешь, к тебе же и вернётся!&raquo;. И если ты действовала честно и уверенно &ndash; жди хороших новостей, они уже на подходе!&nbsp;</span></p>
`, 
                reversed: `<p><span style="font-weight: 400;">Ой-ой, а здесь назревает хаос, и, кажется, что-то идёт не по правилам. Перевёрнутая Справедливость &ndash; это не про честную игру, а про закулисные махинации, обманы и ситуации, когда тебя могут подставить.</span></p>
<p><span style="font-weight: 400;">Сейчас всё может выглядеть не так, как есть на самом деле. Кто-то может скрывать правду, кто-то &ndash; манипулировать фактами, а кто-то вообще выдавать себя за друга, но иметь совсем другие намерения. Будь внимательна!</span></p>
<p><span style="font-weight: 400;">А еще эта карта предупреждает: не позволяй людям сбивать тебя с толку. Если знаешь, что права &ndash; стой на своём, не давай себя запутать и не поддавайся чужому влиянию.</span></p>
<p><strong>Что сулит эта карта?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Обманы, манипуляции &ndash; будь осторожна в общении и сделках.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Дисбаланс &ndash; кажется, что справедливости нет, но на самом деле просто период такой.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">&nbsp;Риск оказаться в проигрышной ситуации &ndash; будь бдительна, особенно с документами и финансами.</span></li>
</ul>
<p><strong>Как взять от этой карты максимум?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не доверяй на слово &ndash; проверяй факты, слушай интуицию.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не поддавайся давлению &ndash; если чувствуешь, что тобой хотят управлять, остановись и посмотри на ситуацию.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">&nbsp;Защищай свои границы &ndash; кто-то может пытаться нарушить твои принципы, но только ты решаешь, как будет!</span></li>
</ul>
<p><span style="font-weight: 400;">Перевёрнутая Справедливость напоминает: &laquo;Мир не всегда честен, но ты можешь оставаться умной и внимательной&raquo;. Будь осторожна, не ведись на красивые слова и помни: правду всегда видно, если смотреть внимательнее!&nbsp;</span></p>
`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Если в этом году тебя ждет успех, то он будет полностью заслуженным. Справедливость в раскладе на звездный год говорит: никаких случайных хайпов, никаких дешевых скандалов, только честный путь к вершине и признание за твой труд.</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;"><br /></span><strong>Что сулит этот год?&nbsp;</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Можно ждать&nbsp; важных решений, оформления документов, контрактов, серьезных выборов. Всё это потребует ясности ума, хладнокровия и честного подхода &ndash; но зато итоги будут справедливыми!</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Год принесёт тебе внутренний рост. Ты научишься лучше разбираться в людях, сильнее доверять себе и чётче понимать, чего хочешь от жизни.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Позитивное разрешение важных вопросов &ndash; справедливость на твоей стороне.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<h3><strong>Как взять от этого года максимум?</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Будь честной с собой &ndash; самокопание тебе не враг, а лучший помощник.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Действуй по правилам &ndash; этот год не про махинации, а про игру в долгую.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Прислушивайся к своему внутреннему судье &ndash; ты всегда знаешь, как правильно.</span></li>
</ul>
<p><span style="font-weight: 400;">Играй честно &ndash; и Вселенная откроет перед тобой лучшие возможности!</span></p>`,
            },
            "ex": {
                normal: `<p><span style="font-weight: 400;">Если в раскладе на бывшего выпала Справедливость, значит, Вселенная уже занесла его имя в чёрный список. Всё, что он сделал, а особенно то, как он поступил с тобой вернется к нему по полной программе. Пока ты двигаешься вперёд, строишь свою жизнь и растешь, он застрял в болоте последствий своих решений.</span></p>
<h3><strong>Что его ждёт?</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Понимание, что всё могло быть иначе,&nbsp; но теперь уже поздно.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Уроки от жизни &mdash; и они будут далеко не приятными.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ощущение, что что-то идёт не так &mdash; а ведь он сам выбрал этот путь.</span></li>
</ul>
<p><span style="font-weight: 400;">Справедливость напоминает: Вселенная никогда не остаётся в долгу, и если человек потерял что-то ценное &mdash; он это почувствует. А ты? Ты просто живи своей лучшей жизнью, пока карма делает свою работу! </span></p>
`
            }
        }
    },
    "hermit": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Иногда, чтобы найти ответы, нужно научиться слушать тишину.</span></p>
<p><span style="font-weight: 400;">Если в раскладе выпал Отшельник, то Вселенная предлагает тебе паузу, но не для прокрастинации, а для важного разговора &ndash; с самой собой. Это не про грустное одиночество, а про осознанный выбор уйти от шума, суеты и чужих мнений, чтобы наконец-то разобраться, чего ты хочешь от жизни.</span></p>
<p><span style="font-weight: 400;">Ты можешь почувствовать, что тебе нужно побыть одной, отключиться от внешнего мира, чтобы переосмыслить всё происходящее. Это время внутреннего роста, обретения мудрости и понимания своих настоящих целей.</span></p>
<p><span style="font-weight: 400;">А ещё, возможно, на твоем пути появится человек &ndash; наставник, учитель, проводник, который поможет тебе увидеть вещи глубже и вдохновит на саморазвитие.</span></p>
<p><strong>Что сулит эта карта?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">&nbsp;Отключение от суеты &ndash; время разобраться в себе и своих желаниях.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Глубокий самоанализ &ndash; поиск истинных ценностей и понимание своих целей.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Важная встреча &ndash; человек, который поможет раскрыть твой потенциал.</span></li>
</ul>
<p><strong>Как взять от этой карты максимум?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не бойся одиночества &ndash; иногда это самый лучший способ услышать себя.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не спеши &ndash; важные озарения приходят в тишине, а не в беготне.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Будь открыта к мудрости &ndash; если появится наставник, его советы могут многое изменить.</span></li>
</ul>
<p><span style="font-weight: 400;">Отшельник напоминает: &laquo;Тишина &ndash; это не пустота, а возможность услышать самое важное.&raquo; Доверься этому периоду &ndash; он приведёт тебя к ответам, которые ты давно искала.&nbsp;</span></p>
`, 
                reversed: `<p><span style="font-weight: 400;">От всего сбежишь, но от себя &ndash; никогда.</span></p>
<p><span style="font-weight: 400;">Перевернутый Отшельник &ndash; это не про осознанное уединение, а про бегство от реальности, которое больше похоже на добровольное заточение. Вместо того, чтобы разобраться в себе и найти ответы, ты отказываешься смотреть правде в глаза и закрываешься от мира, потому что он кажется слишком сложным.</span></p>
<p><span style="font-weight: 400;">Может быть, тебе тяжело принять свои ошибки? Или ты игнорируешь советы, потому что не хочешь слышать неудобную правду? Этот путь не ведет к мудрости &ndash; он ведет к изоляции, в которой сложно найти поддержку.</span></p>
<p><span style="font-weight: 400;">А еще эта карта намекает на потерю связи с близкими &ndash; возможно, кто-то устал стучаться к тебе, а ты слишком увлеклась построением &laquo;своего мира&raquo; и не заметила, как осталась одна.</span></p>
<p><strong>Что сулит эта карта?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Отрицание реальности &ndash; легче убежать, чем столкнуться с правдой.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">&nbsp;Потеря связи с близкими &ndash; ты закрываешься, и люди перестают пытаться достучаться.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">&nbsp;Страх перемен &ndash; ты застряла в привычном, даже если оно уже не приносит счастья.</span></li>
</ul>
<p><strong>Как взять от этой карты максимум?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Перестань убегать &ndash; правда может быть неприятной, но без неё не двинешься дальше.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Будь открыта к помощи &ndash; иногда окружающие видят ситуацию яснее, чем ты.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не бойся людей &ndash; одиночество полезно в меру, но жизнь создается через связи с другими.</span></li>
</ul>
<p><span style="font-weight: 400;">Перевернутый Отшельник напоминает: &laquo;Самоанализ &ndash; это рост, а вот самоизоляция &ndash; это ловушка&raquo;. Не загоняй себя в угол, выходи к миру &ndash; он не такой страшный, как кажется.&nbsp;</span></p>
`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Этот год &ndash; не про шум и суету, а про глубокие инсайты и важные осознания.</span></p>
<p><span style="font-weight: 400;">Если в раскладе на год выпал Отшельник, значит, Вселенная приготовила для тебя период саморазвития, размышлений и поиска настоящего себя. Этот год &ndash; не про бешеные гонки за успехом, а про умение остановиться, посмотреть внутрь себя и задать вопросы, которые ты, возможно, избегала.</span></p>
<p><span style="font-weight: 400;">Будь готова к тому, что какие-то внешние процессы могут замедлиться. Но это не стагнация, а время, чтобы пересмотреть свои приоритеты, укрепить внутренний стержень и понять, куда двигаться дальше.</span></p>
<h3><strong>Что сулит этот год?</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Глубокие осознания &ndash; ты наконец-то разберешься в себе.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Пересмотр жизненных целей &ndash; что действительно важно, а что просто шум?</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Мудрый наставник &ndash; встреча с человеком, который поможет тебе вырасти.</span></li>
</ul>
<h3><strong>Как взять от этого года максимум?</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не бойся уединения &ndash; в тишине рождаются самые важные осознания.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Прислушивайся к интуиции &ndash; ответы давно внутри тебя, просто дай им пространство.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Если появится возможность учиться &ndash; хватай её, это изменит твою жизнь.</span></li>
</ul>
<p><span style="font-weight: 400;">Отшельник напоминает: чтобы найти свой путь, иногда нужно выйти из толпы.</span></p>`,
            },
            "ex": {
                normal: `<p><span style="font-weight: 400;">Если в раскладе на бывшего выпал Отшельник, то Вселенная уже забронировала ему билет в путешествие &laquo;Я и мои ошибки&raquo;. Он может делать вид, что у него всё супер, но по факту его ждёт одиночество, переосмысление прошлого и осознание, что не ценил то, что имел.&nbsp;</span></p>
<p><span style="font-weight: 400;">Скорее всего, он начнет копаться в себе, пытаться понять, где всё пошло не так, но ответа не найдет (потому что нашёл бы &mdash; если бы слушал тебя, пока было можно). Он сам, своими руками, построил себе жизнь, где рядом &mdash; только тишина и эхо его мыслей о тебе.</span></p>
<h3><strong>Что его ждёт?</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Одиночество не по желанию, а по обстоятельствам.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Размышления о прошлом и попытки осознать свои ошибки.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Потеря интереса к новым знакомствам &mdash; всё не то, всё не так.</span></li>
</ul>
<p><span style="font-weight: 400;">Отшельник напоминает: иногда человек сам роет себе яму одиночества, а потом удивляется, почему вокруг так пусто. Ну что ж, пусть сидит там и думает &mdash; ведь именно этого он хотел, верно? </span></p>
`
            }
        }
    },
    "wheel-of-fortune": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Время твоего триумфа!</span></p>
<p><span style="font-weight: 400;">Если в раскладе выпало Колесо Фортуны, то всё начинает двигаться в нужную сторону. Это год приятных сюрпризов, удачных возможностей и неожиданных шансов, которые приведут к успеху.</span></p>
<p><span style="font-weight: 400;">Ты можешь внезапно получить то, о чём мечтала, встретить нужных людей, оказаться в нужном месте в нужное время &ndash; сейчас судьба на твоей стороне, и она щедра.</span></p>
<p><span style="font-weight: 400;">А еще эта карта говорит о росте и развитии &ndash; ты двигаешься вперёд, твои успехи заметны, и скоро тебя ждёт достойная награда за труды. Главное &ndash; не бойся перемен и умей ловить удачу за хвост!</span></p>
<p><strong>Что сулит эта карта?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Неожиданный успех &ndash; даже если ты не ожидала, звёзды выстроились в твою пользу.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Открытие новых возможностей &ndash; судьба даёт шанс, который нельзя упускать.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Динамика и рост &ndash; никакого застоя, только движение вперёд.</span></li>
</ul>
<p><strong>&nbsp;Как взять от этой карты максимум?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Будь открыта переменам &ndash; не сопротивляйся, они ведут тебя к лучшему.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Лови возможности &ndash; если Вселенная подбрасывает шанс, не раздумывай слишком долго.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не бойся рисковать &ndash; сейчас время для решительных шагов.</span></li>
</ul>
<p><span style="font-weight: 400;">Колесо Фортуны напоминает: &laquo;Когда удача на твоей стороне &ndash; не тормози, а жми на газ!&raquo; Этот период &ndash; твой шанс взять от жизни максимум, так что наслаждайся и будь готова к взлётам!&nbsp;</span></p>
`, 
                reversed: `<p><span style="font-weight: 400;">Ой, а где же моя удача?&nbsp;</span></p>
<p><span style="font-weight: 400;">Если выпало перевернутое Колесо Фортуны, значит, жизнь сейчас похожа на американские горки, но без ремней безопасности. Всё идёт не по плану, появляются неожиданные препятствия, настроение скачет, а удача будто бы решила взять отпуск.</span></p>
<p><span style="font-weight: 400;">Но не паникуй! Это не чёрная полоса, а просто период нестабильности, когда важно адаптироваться и не цепляться за старые сценарии. Ты можешь чувствовать упадок сил, но помни: Колесо всегда крутится, и твоя удача вернётся &ndash; главное, держаться и не сдаваться.</span></p>
<p><strong>Что сулит эта карта?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Временные трудности &ndash; да, сейчас не всё гладко, но это не навсегда.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Нестабильность &ndash; планы могут сорваться, обстоятельства меняться, но всё это временно.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Необходимость адаптации &ndash; не борись с переменами, а используй их в свою пользу.</span></li>
</ul>
<p><strong>Как взять от этой карты максимум?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не паникуй &ndash; любой кризис дает новые возможности.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Учись быть гибкой &ndash; чем быстрее адаптируешься, тем легче пройдёшь этот этап.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Делай паузы, если нужно &ndash; иногда лучший ход в хаосе &ndash; переждать и набраться сил.</span></li>
</ul>
<p><span style="font-weight: 400;">Колесо Фортуны напоминает: &laquo;Сейчас штормит, но за любой бурей приходит солнце.&raquo; Сохраняй спокойствие, принимай перемены и знай &ndash; всё вскоре снова повернется в твою пользу!&nbsp;</span></p>
`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Главное правило: Будь готова ко всему!</span></p>
<p><span style="font-weight: 400;">Этот год не даст тебе скучать. В один день ты можешь оказаться на вершине успеха, а на следующий &ndash; получить неожиданный вызов от жизни. Но! Если ты правильно используешь момент &ndash; тебя ждёт настоящий прорыв!&nbsp;</span></p>
<p><span style="font-weight: 400;">Готовься, детка, этот год &ndash; твой личный аттракцион удачи!</span></p>
<p><span style="font-weight: 400;">Если в раскладе на год выпало Колесо Фортуны, значит, тебя ждёт шквал крутых событий, неожиданных поворотов и возможностей, от которых просто нельзя отказываться. Этот год про удачу, рост и судьбоносные моменты, которые могут перевернуть твою жизнь в лучшую сторону.</span></p>
<p><span style="font-weight: 400;">Будь готова: если раньше что-то не получалось, сейчас Вселенная даст тебе второй шанс!&nbsp;</span></p>
<h3><strong>&nbsp;Что сулит этот год?</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Приятные сюрпризы &ndash; фортуна явно на твоей стороне!</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Неожиданные успехи &ndash; можешь даже не планировать, просто лови удачные моменты.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Важные встречи &ndash; новые люди, новые возможности, новые горизонты.</span></li>
</ul>
<h3><strong>Как взять от этой карты максимум?</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Лови момент! &ndash; если жизнь даёт шанс, хватай его двумя руками.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Будь открыта переменам &ndash; не цепляйся за старое, этот год &ndash; про обновление.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не бойся рисковать &ndash; именно сейчас можно выйти из зоны комфорта и выиграть джекпот!</span></li>
</ul>
<p><span style="font-weight: 400;">Колесо Фортуны напоминает: иногда жизнь делает крутой разворот, но только в сторону успеха! Этот год &ndash; про магию счастливых случайностей, так что расслабься, наслаждайся и будь готова к самым неожиданным, но крутым поворотам! </span></p>`,
            },
            "ex": {
                normal: `<p><span style="font-weight: 400;">Судьба крутит свое колесо, а бывший на нем без ремня безопасности!</span></p>
<p><span style="font-weight: 400;">Если в раскладе на бывшего выпало Колесо Фортуны, значит, его жизнь теперь похожа на аттракцион, но не тот, где весело, а тот, где срываются тормоза. Сегодня он на подъёме, завтра в свободном падении, а послезавтра крутится, не понимая, где верх, а где низ.</span></p>
<p><span style="font-weight: 400;">Вселенная решила устроить ему проверку &mdash; получит ли он карму за прошлые поступки или справится с этим годом без потерь. Но одно ясно точно &mdash; стабильности там не предвидится.</span></p>
<p><span style="font-weight: 400;">Если он сделал что-то нехорошее в отношениях, то Колесо уже крутится в сторону его ценного опыта. Может, он думал, что найдет кого-то лучше? Ха-ха, теперь он понял, что лучшее было у него в руках, но уже ушло навсегда.</span></p>
<h3><strong>Что его ждёт?</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Эмоциональные качели &mdash; то взлёт, то падение, то снова вверх.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Потерянность и хаос &mdash; он уже не понимает, как выстроить жизнь без тебя.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Осознание ошибок &mdash; но уже слишком поздно.</span></li>
</ul>
<p><span style="font-weight: 400;">Колесо Фортуны напоминает: Судьба &mdash; это не случайность, а результат выбора. Он сделал свой выбор &mdash; и теперь пожинает его последствия. Ну а ты? Ты просто смотри, как Вселенная крутит свое колесо, и живи свою лучшую жизнь! </span></p>
`
            }
        }
    },
    "strength": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">&laquo;Я могу всё, потому что у меня есть внутренний стержень!&raquo;&nbsp;</span></p>
<p><span style="font-weight: 400;">Если тебе выпала Сила в прямом положении, значит, этот момент в жизни &ndash; твой звёздный час для проявления характера, стойкости и уверенности! Ты не та, кто сдается, не та, кто убегает &ndash; ты та, кто идет вперед с поднятой головой, даже если на пути есть трудности.</span></p>
<p><span style="font-weight: 400;">&nbsp;&laquo;Я не просто сильная &ndash; я контролирую свою силу. Я умею быть нежной, но если нужно &ndash; моя внутренняя львица проснётся!&raquo;&nbsp;</span></p>
<p><strong>Что говорит карта Сила о тебе?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты не боишься сложностей &ndash; ты знаешь, что они делают тебя только сильнее.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">&nbsp;Ты умеешь держать эмоции под контролем &ndash; ты не бросаешься в истерику, а действуешь хладнокровно и мудро.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты знаешь, что сила &ndash; это не крик и давление, а терпение, уверенность и стойкость.</span></li>
</ul>
<p><strong>Как использовать энергию карты Сила?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Доверься своей интуиции &ndash; ты знаешь, как действовать!</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Держи баланс между силой и мягкостью.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не позволяй страхам управлять тобой.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Прими свою силу &ndash; и используй её во благо!</span></li>
</ul>`, 
                reversed: `<p><span style="font-weight: 400;">Когда сила превращается в разрушение.&nbsp;</span></p>
<p><span style="font-weight: 400;">Если в раскладе Сила выпала перевернутой, значит, ты либо перегибаешь палку, либо не осознаешь свою мощь и используешь ее не во благо.Перевернутая Сила говорит о потере контроля &ndash; над эмоциями, желаниями, своими импульсами и даже моральными границами.</span></p>
<p><strong>Что это значит в твоей жизни?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты слишком давишь на окружающих, пытаясь добиться своего любой ценой.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты ведешь борьбу там, где её не должно быть &ndash; возможно, сама с собой.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты можешь быть агрессивной в общении &ndash; даже не осознавая этого.</span></li>
</ul>
<p><span style="font-weight: 400;">Сила &ndash; это круто, но если её не контролировать, она может тебя сжечь.</span></p>
`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Если Сила выпала тебе в качестве карты года &mdash; поздравляю! Это значит, что тебя ждёт внутренний рост, преодоление сложностей и настоящая победа&hellip; над собой. Этот год ты пройдёшь не как милая фея на розовом облачке, а как грациозная львица, приручившая своего внутреннего зверя.</span></p>
<h3><strong>Что принесет год?</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Гармония между разумом и эмоциями.</span></li>
</ul>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Если ты одна &mdash; ты перестанешь цепляться за иллюзии и научишься любить себя на 200%.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты найдешь ресурсы тянуть проект, который раньше казался неподъемным.</span></li>
</ul>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Год идеален для публичных выступлений, лидерских позиций, наставничества.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<h3><strong>Подсказка Вселенной:</strong></h3>
<p><span style="font-weight: 400;">Ты &mdash; не просто сильная. Ты мягкая и стойкая одновременно. В этом году любые конфликты, страхи, комплексы &mdash; будут укрощены. Но не силой &mdash; а через принятие и заботу о себе.</span></p>`,
            },
            "ex": {
                normal: `<h3><span style="font-weight: 400;">Слабость &mdash; его новый стиль жизни. Полный провал самоконтроля и уверенности. Твой бывший либо впал в пассивность и апатию, либо стал токсичным и взрывным, потому что не может справиться с эмоциями. Если раньше он играл в уверенного самца &mdash; теперь это жалкое зрелище. Он может впасть в зависимость от чужого мнения, начать вести себя неадекватно и терять уважение окружающих.</span></h3>
<h4><strong>Что его ждёт?</strong></h4>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Срывы, вспышки гнева, а потом чувство пустоты.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ощущение, что он потерял контроль над своей жизнью.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Жалкое зрелище вместо уверенного человека.</span></li>
</ul>
<p><span style="font-weight: 400;">Судьба сняла с него всю маску крутого&nbsp; и он остался со своими страхами наедине.</span></p>
`
            }
        }
    },
    "hanged-man": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Если мир не работает по твоим правилам, просто посмотри на него под другим углом!.&nbsp;</span></p>
<p><span style="font-weight: 400;">Если в раскладе выпал Повешенный, значит, всё будто застыло. Ты можешь чувствовать, что застряла в ситуации без очевидного выхода, но правда в том, что выход есть &ndash; просто он не там, где ты привыкла его искать!</span></p>
<p><strong>&nbsp;Как расшифровать это для себя?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Если кажется, что выхода нет &ndash; просто измени взгляд. Ты пыталась решить этот вопрос &laquo;логично&raquo;, но, возможно, нужно подойти к нему с интуицией, творчеством, нестандартным мышлением?</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты не обязана мириться с тем, что тебе не нравится.</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">Если чувствуешь давление со стороны &ndash; время задать себе вопрос: почему ты позволяешь другим управлять твоей жизнью?</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Иногда пауза &ndash; это не конец, а шанс на переосмысление. Ты привыкла бежать вперед, но иногда нужно остановиться, чтобы выбрать более верное направление.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Если жертва неизбежна &ndash; делай её осознанно и без сожалений.</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">Не жди благодарности &ndash; если ты жертвуешь чем-то, делай это по собственной воле, а не из чувства долга.</span></li>
</ul>
`, 
                reversed: `<p><span style="font-weight: 400;">Переломный момент: пора перестать зависать и начать действовать!</span></p>
<p><span style="font-weight: 400;">Если тебе выпал Перевернутый Повешенный, значит, Вселенная устала ждать, пока ты примешь решение &ndash; пора что-то менять!</span></p>
<p><strong>&nbsp;Что означает перевернутый Повешенный?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты больше не можешь откладывать важные решения &ndash; момент истины настал.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Твоя система ценностей может меняться &ndash; ты осознаешь, что старые убеждения уже не работают.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Это переход на новый уровень личности &ndash; но он не случится, если ты будешь застревать в сомнениях.</span></li>
</ul>
<p><span style="font-weight: 400;">Этот момент &ndash; твой шанс выйти из застоя и двинуться в новое будущее</span></p>
`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Этот год не будет похож на марафон к успеху &ndash; это будет момент паузы, переоценки и поиска нового пути. Вселенная как будто говорит: </span><span style="font-weight: 400;">&laquo;</span><span style="font-weight: 400;">Стой, посмотри вокруг, ты уверена, что идёшь туда, куда нужно?</span><span style="font-weight: 400;">&raquo;.&nbsp;</span></p>
<p><strong>Что ждёт тебя в этом году?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Неожиданные паузы &ndash; всё может идти не так быстро, как хотелось бы, но в этом есть смысл.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Пересмотр приоритетов &ndash; ты поймёшь, что тебе на самом деле важно.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Смена взгляда на мир &ndash; если что-то не работает, ты найдешь новый способ решения.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Отказ от ненужного &ndash; этот год научит тебя отпускать всё, что больше не служит твоему росту.</span></li>
</ul>
<p><strong>Как использовать этот год?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не торопи события &ndash; всё случится в своё время.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Если что-то тормозится &ndash; ищи новый угол зрения.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Займись саморазвитием &ndash; используй паузы для подготовки к прорыву.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Учись доверять процессу &ndash; иногда Вселенная тормозит нас, чтобы направить в нужную сторону.</span></li>
</ul>
<p><span style="font-weight: 400;">Этот год даст тебе не скорость, а осознанность. Чем больше ты примешь этот процесс &ndash; тем ярче будет твой успех, когда Колесо Фортуны снова закрутится!&nbsp;</span></p>`,
            },
            "ex": {
                normal: `<p><span style="font-weight: 400;">Его жизнь превратилась в болото неопределённости, самокопания и нерешительности. Он висит в пустоте, не двигаясь ни вперед, ни назад,.&nbsp;</span></p>
<p><strong>Что происходит в его жизни?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он не сделал выводов и теперь топчется на месте.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не видит смысла в том, что делает, потому что потерял направление.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ждёт чего-то, но не понимает, чего именно.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он не умеет отпускать &mdash; поэтому его держат старые мысли, страхи и ошибки.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он в ловушке собственного бездействия.</span></li>
</ul>
<p><span style="font-weight: 400;">Он сам загнал себя в этот тупик &mdash; и сам из него не выходит. Ты уже двигаешься к новым вершинам, а он застрял в прошлом, размышляя, как бы всё могло быть иначе. Ты ушла вперёд &mdash; а он так и остался висеть вниз головой, запутавшись в собственных страхах и сожалениях. Вот и весь итог: он ждал чуда, но его не случилось. </span></p>
`
            }
        }
    },
    "death": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">&laquo;Прощай, старый мир! Я перерождаюсь!&raquo;&nbsp;</span></p>
<p><span style="font-weight: 400;">Если тебе выпала Смерть, не бойся &ndash; это не конец, это обновление! Вселенная ждёт, когда ты наконец отпустишь прошлое и шагнешь в новую жизнь. &laquo;Я не держусь за то, что уже мертво. Я не боюсь перемен &ndash; я в них расцветаю.&raquo;</span></p>
<p><strong>Что значит карта Смерть в прямом положении?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Что-то в твоей жизни заканчивается &ndash; и это неизбежно.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Старые связи, старые убеждения, старые сценарии &ndash; они умирают, освобождая место для нового.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты больше не можешь быть той, кем была раньше &ndash; время трансформации пришло.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты не должна сопротивляться &ndash; чем быстрее примешь перемены, тем легче войдёшь в новую жизнь.</span></li>
</ul>
<p>&nbsp;</p>
<p><strong>Как использовать энергию карты Смерть?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Отпусти страхи &ndash; будущее гораздо лучше, чем тебе кажется.</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">Всё происходит не против тебя, а для тебя. Если что-то уходит &ndash; значит, оно больше не нужно.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">&nbsp;Заверши то, что уже мертво &ndash; будь то отношения, работа или привычки. Не держи в жизни то, что уже не приносит радости, не дает роста, не питает твою душу.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">&nbsp;Прими, что ты меняешься &ndash; это твоя эволюция.</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;"> Ты не обязана быть прежней. Позволь себе стать новой версией себя &ndash; более сильной и осознанной.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Будь открыта новому &ndash; ты только в начале пути.</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;"> Ты отпускаешь старое, но вместо него Вселенная уже приготовила тебе что-то невероятное.</span></li>
</ul>
<p><span style="font-weight: 400;">Этот переход важен &ndash; как гусеница становится бабочкой, так и ты выходишь на новый уровень.</span></p>
`, 
                reversed: `<p><span style="font-weight: 400;">Ты застряла между прошлым и будущим &ndash; пора выбрать сторону!</span></p>
<p><span style="font-weight: 400;">Если в раскладе выпала перевернутая Смерть, значит, ты зависла в состоянии, когда перемены неизбежны, но ты всеми силами отказываешься их принять.</span></p>
<p><span style="font-weight: 400;">&nbsp;&laquo;Я понимаю, что старое больше не работает, но я не хочу его отпускать. Я знаю, что впереди что-то новое, но меня пугает неизвестность&hellip;&raquo;</span></p>
<p><strong>&nbsp;Что значит перевёрнутая карта Смерть?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты сопротивляешься переменам &ndash; и этим усложняешь свою жизнь.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">&nbsp;Ты застряла в прошлом &ndash; даже если понимаешь, что оно уже не работает.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">&nbsp;Ты испытываешь апатию, страх, разочарование, потому что не знаешь, что делать дальше.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">&nbsp;Ты боишься признать, что что-то действительно закончилось.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты можешь чувствовать пустоту &ndash; будто у тебя отняли что-то важное, но не дали ничего взамен.</span></li>
</ul>
<p><span style="font-weight: 400;">Этот переход необходим &ndash; но он будет мучительным, если ты продолжишь сопротивляться.</span></p>
<p>&nbsp;</p>
<p><strong>Как выйти из этого состояния?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Прими, что старое уже не вернётся.</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;"> Как бы ты ни старалась удержать прошлое &ndash; оно уже ушло. Теперь важно подумать, что делать дальше.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Перестань зацикливаться на потере &ndash; начни думать о будущем.</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">Ты можешь плакать о том, что что-то не сбылось, или можешь начать строить новый путь.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">&nbsp;Перестань бояться пустоты &ndash; она даёт место для нового.</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;"> Иногда в жизни надо пройти через этап неопределенности, чтобы создать нечто лучшее.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Отпусти контроль.</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;"> Ты не можешь контролировать всё &ndash; иногда нужно просто довериться потоку жизни.</span></li>
</ul>
<p><span style="font-weight: 400;">Перемены неизбежны. Вопрос в том, примешь ли ты их &ndash; или будешь страдать из-за своего сопротивления.</span></p>
`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Если тебе выпала карта Смерть на год &mdash; не пугайся! Это не мрачный рок или катастрофа, а глубочайшая трансформация, перерождение и очищение. Ты выходишь на новую ступень, и чтобы туда подняться, нужно сбросить лишнее: устаревшие связи, токсичные установки, хлам в голове и даже шкафу.&nbsp;</span></p>
<h3><strong>Что принесет год?</strong></h3>
<ul>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты перестанешь быть той, кем была. Это год, когда старая версия тебя&hellip; </span><em><span style="font-weight: 400;">прекрасно отмирает</span></em><span style="font-weight: 400;">, чтобы дать место более зрелой, честной и свободной.</span></li>
</ul>
</ul>
<p>&nbsp;</p>
<ul>
<li><strong><span style="font-weight: 400;">Внутренние муки сменятся освобождением и принятием. Ты больше не боишься перемен &mdash; ты их жаждешь.</span></strong></li>
</ul>
<p>&nbsp;</p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Возможны расставания, но только с теми, кто давно не был твоим человеком.</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">Будет смена курса: возможно, ты уволишься, переедешь, откроешь своё дело или найдёшь призвание, о котором раньше и не догадывалась.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><span style="font-weight: 400;">Важное: отпускай без страха &mdash; всё, что уходит, освобождает место для чего-то грандиозного.</span></p>
<h3><strong>Советы карты:</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Прими этот год как ритуал перерождения. Да, временами будет страшновато и непривычно, но ты выйдешь из этого периода другой &mdash; легче, красивее, глубже.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Устрой чистку во всех смыслах: выброси лишние вещи, пересмотри круг общения, почисти свои желания. Всё, что не резонирует с новой тобой &mdash; отправляется в архив.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Пусть этот год станет началом новой эры твоей жизни. Мощной, зрелой, искренней.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><span style="font-weight: 400;">Ты не теряешь &mdash; ты находишь себя.</span></p>`,
            },
            "ex": {
                normal: `<p><span style="font-weight: 400;">Смерть &mdash; это тот самый бывший, который не может смириться с концом.</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он продолжает держаться за воспоминания, как за старый, растянутый свитер, который уже не согревает.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он делает вид, что двигается дальше, но на самом деле не отпустил.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он боится перемен, поэтому завис в своём внутреннем аду.</span></li>
</ul>
<p><span style="font-weight: 400;">Если он надеялся, что всё само как-то наладится, то нет. Время идёт, но он упорно живет в прошлом, которое уже мертво.Билетов в прошлое нет, но он всё ещё стоит в очереди.</span></p>
`
            }
        }
    },
    "temperance": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Баланс &ndash; твоя суперсила!</span></p>
<p><span style="font-weight: 400;">Если тебе выпала Умеренность, то это знак, что Вселенная учит тебя искусству баланса, терпения и гармонии. Это не время спешки, хаоса или резких движений &ndash; сейчас важно научиться сохранять спокойствие, даже если мир вокруг бурлит.</span></p>
<p><span style="font-weight: 400;">&nbsp;&laquo;Я доверяю процессу, я не тороплю события, я живу в потоке и наслаждаюсь гармонией!&raquo;</span></p>
<p><strong>Что означает карта Умеренность в прямом положении?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты на этапе, когда тебе нужно проявить терпение и не пытаться ускорить события.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Вселенная призывает тебя к компромиссам &ndash; важно найти золотую середину, а не идти в крайности.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Тебе нужно сохранять внутреннюю гармонию, даже если обстоятельства требуют суеты и нервов.</span></li>
</ul>
<p><span style="font-weight: 400;">Ты учишься быть не только сильной, но и гибкой. Не только решительной, но и терпеливой. Не только целеустремленная, но и расслабленной.</span></p>
<p><strong>Как использовать энергию Умеренности?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Доверься жизни &ndash; всё идёт так, как надо.</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;"> Если кажется, что всё слишком медленно &ndash; поверь, Вселенная знает лучше, когда что должно случиться.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Держи баланс &ndash; и внутри, и снаружи.</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;"> Если ты слишком эмоциональна &ndash; успокойся. Если слишком холодна &ndash; добавь чувств. Если перегружаешь себя работой &ndash; найди время для отдыха.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не раскачивай лодку &ndash; наслаждайся плаванием.</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;"> Этот период не про взрывные прорывы, а про стабильный рост. Дыши, чувствуй, расслабляйся &ndash; всё идёт, как надо.</span></li>
</ul>
`, 
                reversed: `<p><span style="font-weight: 400;">Баланс потерян, пора срочно возвращать контроль!&nbsp;</span></p>
<p><span style="font-weight: 400;">Если в раскладе выпала перевернутая Умеренность, значит, ты потеряла внутреннюю гармонию и сейчас живешь в состоянии хаоса, спешки и эмоциональных качелей.</span></p>
<p><span style="font-weight: 400;">Ты либо перегружаешь себя работой, либо уходишь в лень и прокрастинацию. Либо отдаёшь всю свою энергию, либо уходишь в полное игнорирование окружающих. Либо соришь деньгами, либо экономишь так, что даже на радости не остаётся.</span></p>
<p><span style="font-weight: 400;">Ты потеряла ощущение равновесия &ndash; и из-за этого всё летит в хаос.</span></p>
<p><strong>Что происходит в твоей жизни прямо сейчас?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты несешься на эмоциях, не включая разум. Возможно, ты принимаешь решения в порыве чувств, а потом жалеешь.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Тебя шатает из крайности в крайность.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты не умеешь останавливаться. Включился азарт, желание &laquo;здесь и сейчас&raquo;, но это может дорого обойтись.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты не следишь за ресурсами. Деньги, время, силы &ndash; всё улетает, но куда?</span></li>
</ul>
<p><strong>Как вернуть баланс?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Остановись и выдохни!Возьми паузу, посмотри на ситуацию со стороны.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Найди середину между &laquo;работаю до изнеможения&raquo; и &laquo;ничего не делаю&raquo;.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Проверь свои финансы &ndash; возможно, ты транжиришь больше, чем можешь себе позволить.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Вернись к осознанности &ndash; не делай резких движений.Сейчас не время для резких решений, эмоциональных срывов и хаотичных поступков.</span></li>
</ul>
`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Если тебе выпала Умеренность как карта года &mdash; поздравляю, жизнь начинает дышать в такт твоему сердцу. Этот год про внутренний дзен, про настраивание гармонии внутри и вокруг. Ты научишься жить без перегибов, без драмы и надрывов, наслаждаясь самим процессом.</span></p>
<h3><strong>Что принесет год?</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Всё, что раньше выводило из себя, теперь вызывает лишь спокойную усмешку.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Если ты в паре &mdash; отношения будут крепнуть без перегрузки. Если одна &mdash; тебя ждёт встреча с человеком, с которым </span><span style="font-weight: 400;">&laquo;</span><span style="font-weight: 400;">просто хорошо</span><span style="font-weight: 400;">&raquo;</span><span style="font-weight: 400;">, без качелей и страданий. Да-да, такое бывает.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Этот год отлично подходит для обучения, повышения квалификации, углубления знаний.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<h3><strong>Подсказки от Умеренности:</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Сохраняй баланс. Не будь всё или ничего, черное или белое. Учись жить в промежуточных оттенках &mdash; именно в них и прячется настоящее счастье.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Живи по принципу достаточно. Ты не обязана всё успеть, всё контролировать, всем нравиться. Делай то, что даёт покой.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Больше заботы о себе. Прогулки, медитации, ритуалы уюта &mdash; не просто баловство, а необходимая подпитка.</span></li>
</ul>
<p><span style="font-weight: 400;">Год под покровительством Умеренности &mdash; это год душевного взросления, мягких побед, внутреннего роста и женского сияния. Ты становишься собой &mdash; без лишней спешки, без борьбы, просто и по-настоящему.</span></p>`,
            },
            "ex": {
                normal: `<p><span style="font-weight: 400;">В раскладе на бывшего Умеренность &mdash; это полный хаос.</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Либо у него начались проблемы с работой, финансами, отношениями.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Либо он слишком резко кидается в крайности &mdash; то слишком активен, то уходит в тень.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Либо он просто потерял внутренний баланс и не понимает, чего хочет.</span></li>
</ul>
<p><span style="font-weight: 400;">Тот человек, который, возможно, когда-то был слишком тороплив или чересчур самоуверен, теперь вынужден </span><em><span style="font-weight: 400;">учиться терпению</span></em><span style="font-weight: 400;">&hellip; очень долго и очень скучно. Никаких фейерверков, никаких внезапных подарков судьбы. Бывший потратит много времени на бесконечные внутренние согласования и попытки найти золотую середину везде &mdash; в работе, в любви, в себе. Но за всей этой умеренностью таится глубокая тоска: мечты о бурной жизни останутся мечтами.</span> <span style="font-weight: 400;">А ты в это время будешь сиять, любить себя и радоваться жизни, зная, что покинула болото вовремя. </span></p>
`
            }
        }
    },
    "devil": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Игра с огнём: ты уверена, что готова?</span></p>
<p><span style="font-weight: 400;">Если в раскладе выпал Дьявол, значит, тебя тянет в опасную, но чертовски притягательную зону. Это порок, соблазн, зависимость, страсть, которая кружит голову, но может оставить ожоги.</span></p>
<p><strong>Что означает карта Дьявол в прямом положении?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты попала под влияние &ndash; будь то человек, ситуация или даже твои собственные желания.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты можешь осознавать, что это вредно, но всё равно продолжаешь.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Есть риск стать заложницей своих страстей &ndash; чем глубже, тем сложнее выбраться.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Тебе кажется, что ты контролируешь ситуацию &ndash; но это иллюзия.</span></li>
</ul>
<p><strong>Какие именно соблазны в твоей жизни?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Нездоровые отношения. Это может быть страсть, которая съедает тебя, токсичный партнёр, зависимость от внимания или манипуляция.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Деньги и власть. Ты можешь гнаться за богатством, но ценой моральных принципов.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Вредные привычки. Переедание, бессонные ночи, зависимости &ndash; тебе сложно сказать &laquo;стоп&raquo;.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Мания контроля.&nbsp; Ты можешь не отпускать ситуацию или человека, даже если знаешь, что это неправильно.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Страхи и комплексы. &ndash; Они диктуют тебе, что делать, и не дают быть свободной.</span></li>
</ul>
<p><strong>Как не попасть в ловушку Дьявола?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">&nbsp;Посмотри правде в глаза.Признай &ndash; тебя реально тянет в какую-то зависимость, но пока ещё есть шанс выбраться.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не оправдывай свои слабости. &laquo;Ну я просто немного зависима&hellip;&raquo;, &laquo;Ну это не так уж и страшно&hellip;&raquo; &ndash; стоп, хватит! Ты знаешь, что это ложь.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">&nbsp;Разорви токсичный круг. Если ты понимаешь, что тебя что-то затягивает &ndash; сделай шаг назад. Пока ещё можешь.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Возьми ситуацию под контроль. Ты можешь наслаждаться, но не становиться зависимой. Это тонкая грань, которую важно не перейти.</span></li>
</ul>
<p><span style="font-weight: 400;">Дьявол не управляет тобой &ndash; если ты сама не позволишь.</span></p>
`, 
                reversed: `<p><span style="font-weight: 400;">Ты либо выберешься из этой пропасти, либо упадёшь ещё глубже.&nbsp;&nbsp;</span></p>
<p><span style="font-weight: 400;">Если в раскладе выпал перевернутый Дьявол, то ты стоишь на грани &ndash; либо вырваться из плена своих слабостей, либо окончательно погрузишься в зависимость. Дьявол не держит тебя в кандалах &ndash; ты сама их надеваешь или снимаешь. Это момент осознания, когда ты решаешь: &laquo;Продолжать по старой дороге или наконец разорвать этот круг?&raquo;.&nbsp;</span></p>
<p><strong>Что означает перевернутый Дьявол?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты видишь, что тебя затягивает во что-то темное &ndash; но осознание уже первый шаг к освобождению.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">&nbsp;Ты понимаешь, что жила в иллюзии &ndash; и теперь можешь либо открыть глаза, либо остаться в самообмане.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты можешь наконец осознанно контролировать то, что раньше управляло тобой.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Этот Аркан не только про падение, но и про возможность взлёта. Всё зависит от твоего решения.</span></li>
</ul>
<p><strong>Как использовать энергию перевёрнутого Дьявола?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Признай, что у тебя есть выбор. Ты не обязана оставаться там, где тебе плохо &ndash; ты можешь сделать шаг вперёд.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Начни контролировать то, что раньше управляло тобой. Будь то страсть, зависимость, страх &ndash; теперь ты видишь, как это работает, и можешь взять контроль в свои руки.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Если не хочешь терять, остановись сейчас. Иногда ещё есть шанс вернуться &ndash; но если затянешь, выхода может уже не быть.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Доверься свету &ndash; ты сильнее, чем твои пороки. Дьявол не может тебя держать, если ты сама не даешь ему власть. Ты можешь быть свободной.</span></li>
</ul>
`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Если твоим проводником на год стал Дьявол &mdash; не пугайся! Это не про мрак и демонов, а про твои скрытые желания, силу, страсть и... вызов самой себе. Этот год устроит проверку на прочность &mdash; что для тебя действительно важно, а где ты просто играешь чужую роль.</span></p>
<h3><strong>Что принесет год?</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ооочень жаркий год. Любовь, страсть, одержимость &mdash; эмоции будут кипеть! Возможны яркие, но не всегда здоровые привязанности. Ты сама поймешь, где любовь, а где зависимость.</span></li>
</ul>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Возможности! Но не забывай: не всё золото, что блестит. Год может предложить выгодные, но сомнительные предложения.</span></li>
</ul>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Это год искушений, но и год освобождения от собственных оков. Ты можешь осознать, что давно живёшь не своей жизнью &mdash; и сказать этому </span><span style="font-weight: 400;">&laquo;</span><span style="font-weight: 400;">стоп</span><span style="font-weight: 400;">&raquo;.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<h3><strong>Послания от Аркана Дьявол:</strong></h3>
<p><span style="font-weight: 400;">Не подавляй свои желания. Но и не позволяй им управлять тобой. Научись отличать </span><span style="font-weight: 400;">&laquo;</span><span style="font-weight: 400;">я хочу</span><span style="font-weight: 400;">&raquo;</span><span style="font-weight: 400;"> от </span><span style="font-weight: 400;">&laquo;</span><span style="font-weight: 400;">я поддалась</span><span style="font-weight: 400;">&raquo;</span><span style="font-weight: 400;">.</span></p>
<p><span style="font-weight: 400;">Разберись, кто (или что) держит тебя на коротком поводке. Это может быть человек, работа, зависимость, привычка &mdash; пришло время с этим распрощаться.&nbsp;</span></p>
<p><span style="font-weight: 400;">Власть &mdash; в твоих руках. Перестань бояться быть сильной, сексуальной, дерзкой. Но не теряй человечности.</span></p>`,
            },
            "ex": {
                normal: `<p><span style="font-weight: 400;">Дьявол &mdash; это человек, который полностью потерял контроль и в полной зависимости от своих слабостей.&nbsp;</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он застрял в своих зависимостях &mdash; будь то плохие привычки, деньги или зависимость от чужого мнения.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он попал в ловушку собственных решений &mdash; и теперь не может выбраться.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Вместо того чтобы двигаться вперёд, он закопался ещё глубже.</span></li>
</ul>
<p><span style="font-weight: 400;">Бывший прямиком шагает в ловушку своих пороков, и, надо сказать, он делает это с удовольствием, практически вальсируя. Танец под звуки своих же соблазнов: власть, деньги, зависимость от чужого мнения и, конечно же, токсичные отношения. Он сам выстроил себе золотую клетку из соблазнов, лжи и вечной неудовлетворенности. И самое пикантное: чем больше он будет пытаться доказать миру, что у него всё &laquo;пучком&raquo;, тем отчаяннее будет его внутренний крик о помощи.</span></p>
<p><span style="font-weight: 400;">А ты? Ты, булочка, только улыбнёшься и поправишь корону.&nbsp;</span><span style="font-weight: 400;"><br /></span></p>
`
            }
        }
    },
    "tower": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Жизнь рушится? Отлично, значит, пора строить заново! Если тебе выпала Башня, готовься &ndash; сейчас не просто небольшие перемены, а настоящий землетрясение в твоей жизни.Иллюзии сгорают, ложные убеждения рушатся, а то, что ты считала стабильным, может исчезнуть.</span></p>
<p><strong>Что означает карта Башня в прямом положении?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Что-то в твоей жизни летит к чертям &ndash; и это неизбежно.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты жила в иллюзии, но сейчас пришло время увидеть правду.Это может быть крах планов, отношений, работы, взглядов на жизнь &ndash; но оно было построено на шатком фундаменте.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">&nbsp;Да, будет больно, но потом ты скажешь &laquo;Спасибо!&raquo; &ndash; потому что это очистит пространство для чего-то лучшего.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Это кармический момент &ndash; если ты что-то откладывала, игнорировала, прятала под ковер, то Вселенная решила сделать это за тебя.</span></li>
</ul>
<p><span style="font-weight: 400;">Старое больше не работает &ndash; ломаем к чертям, строим заново!</span></p>
<p><strong>В каких сферах сейчас идёт разрушение?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Отношения &ndash; маски сорваны, партнёр оказался не тем, кем казался, или связь держалась на самообмане.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Карьера &ndash; работа, на которую ты рассчитывала, может рухнуть &ndash; но возможно, она уже не приносила тебе пользы?</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Финансы &ndash; Вложилась не туда? Время осознать ошибки, пересчитать бюджет и перестроить финансовые привычки.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Личность &ndash; Всё, что ты о себе думала, может оказаться ложью &ndash; время понять, кто ты на самом деле.</span></li>
</ul>
<p><span style="font-weight: 400;">&nbsp;Не бойся &ndash; да, это удар, но он ведёт тебя к свободе!</span></p>
<p><strong>Как использовать энергию Башни себе во благо?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не пытайся спасти то, что уже разрушено. Если это рушится &ndash; значит, оно уже мертво. Не трать энергию на &laquo;ремонт&raquo;, лучше подумай, что ты хочешь создать заново.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Перестань цепляться за ложную стабильность. Было удобно, было комфортно &ndash; но это не значит, что это было правильно. Если оно рухнуло, значит, так нужно.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">&nbsp;Будь честной с собой.Возможно, ты жила в самообмане, закрывала глаза на реальность &ndash; теперь у тебя есть шанс увидеть истину.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Позволь себе переродиться. Не держись за старую версию себя &ndash; это шанс начать с чистого листа, но на более прочном фундаменте.</span></li>
</ul>
`, 
                reversed: `<p><span style="font-weight: 400;">Если в раскладе выпала перевернутая Башня, поздравляю &ndash; масштаб катастрофы не такой уж и разрушительный. Ты либо чудом избежала большого краха, либо Вселенная дает тебе ещё один шанс исправить ситуацию без полного уничтожения.&nbsp;</span></p>
<p><span style="font-weight: 400;">Ты могла избежать серьезных потерь, но вопрос в том, не откладываешь ли ты неизбежное?</span></p>
<p><strong>Что означает перевернутая карта Башня?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты отделалась лёгким испугом &ndash; разрушения могли быть глобальнее, но пока жизнь даёт тебе поблажку.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты избежала самого худшего, но проблемы всё ещё остаются.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты могла получить урок мягче &ndash; но если проигнорируешь его, в следующий раз Башня может рухнуть по-крупному.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты сопротивляешься переменам &ndash; держишься за старое, боишься потерять что-то, что уже давно не работает.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">&nbsp;Ты знаешь, что что-то надо менять, но пока не решаешься сделать этот шаг.</span></li>
</ul>
<p><strong>В каких сферах ты можешь &laquo;удерживать падающую Башню&raquo;?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Отношения &ndash; ты понимаешь, что связь исчерпала себя, но боишься её разорвать.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Карьера &ndash; ты знаешь, что пора двигаться дальше, но страх перемен держит тебя на месте.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Личная жизнь &ndash; ты ощущаешь, что старые привычки, убеждения или страхи мешают тебе расти, но пока не готова их отпускать.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Финансы &ndash; ты можешь пытаться &laquo;удержать&raquo; материальное положение, игнорируя реальные проблемы.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты можешь считать, что &laquo;спасла ситуацию&raquo;, но на самом деле просто продлила её агонию.</span></li>
</ul>
<p><strong>Как использовать энергию перевернутой Башни?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Используй этот шанс, чтобы подготовиться к переменам. Разрушение можно предотвратить, если вовремя укрепить фундамент.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Разберись с проблемами, пока они ещё не стали катастрофой. Ты можешь предотвратить полный крах, если начнёшь действовать уже сейчас.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Прекрати откладывать неизбежное. Если ты понимаешь, что что-то в жизни &laquo;уже на грани&raquo; &ndash; лучше самой сделать шаг, чем ждать, пока тебя выбросят из зоны комфорта.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">&nbsp;Не держись за то, что должно уйти.</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;"> Если что-то трещит по швам &ndash; значит, оно уже не твоё. Отпусти, пока это не стало проблемой.</span></li>
</ul>
<p><span style="font-weight: 400;">Перевернутая Башня &ndash; это шанс изменить всё по своей воле, прежде чем судьба сделает это за тебя.</span></p>
`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Если твоей картой года стала Башня &mdash; жди освобождение от рухнувших надежд и планов. Эта карта сокрушении фальши, выходе из зоны комфорта... в нечто намного большее. Этот год &mdash; встряска, просветление и мощный поворот судьбы.</span></p>
<h3><strong>Что принесет год?</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Возможно неожиданное увольнение, смена работы, закрытие проектов. Но знай &mdash; это не крах, а освобождение от того, что больше не работает.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Разводы, расставания, переоценка ценностей &mdash; вполне вероятны. Год с Башней разрушает токсичные связи, вскрывает всё скрытое, поднимает на поверхность правду, которую давно пора принять.</span></li>
</ul>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Башня сбросит с тебя всё ложное: маски, роли, удобные установки. Этот год поможет тебе прозреть и перестать бояться перемен.</span><strong><br /><br /></strong></li>
</ul>
<h3><strong>Что делать (и чего не делать):</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Прими перемены, даже если они пришли с громом и молнией.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Будь честна с собой &mdash; где ты живёшь не своей жизнью?</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Строй новое на истине, а не на &laquo;так надо</span><span style="font-weight: 400;">&raquo;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не держись за то, что рушится.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не пытайся &laquo;склеить</span><span style="font-weight: 400;">&raquo;</span><span style="font-weight: 400;"> старое &mdash; оно отжило.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не бойся начать с нуля &mdash; ты уже не на том уровне, что раньше.</span></li>
</ul>
<p><span style="font-weight: 400;">Год очищения, взросления и освобождения. После него &mdash; ты уже не та. Ты &mdash; лучше.</span></p>`,
            },
            "ex": {
                normal: `<h3><span style="font-weight: 400;">Здесь пахнет эпическим крахом. Он всё разрушил и теперь не знает, что с этим делать.&nbsp;</span></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он потерял что-то важное &mdash; и осознал это слишком поздно.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он пытался удержать старый мир, но он всё равно рухнул.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Теперь он не знает, как жить дальше, потому что все планы разрушены.</span></li>
</ul>
<p><strong>Что его ждёт?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Либо он поймёт урок и начнёт всё заново&hellip;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Либо он просто останется среди руин своей старой жизни.</span></li>
</ul>
<p><span style="font-weight: 400;">Башня &mdash; это не просто тревожный звоночек. Это вселенский сигнал тревоги, сирена и грохот молнии, попавшей прямиком в крышу его жизни. Собственное эго &mdash; его главный враг. Он сам построил эту башню из своих амбиций, лжи, иллюзий и надменности. И теперь наблюдает, как она летит в тартарары. И да, с балкона его собственной гордыни.&nbsp;</span></p>
<p><span style="font-weight: 400;">Урок? Не играй с чувствами людей, которых можно было бы любить, а не ломать. Особенно если одна из них &mdash; ТЫ. </span></p>
`
            }
        }
    },
    "star": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Вселенная тебя ведёт &ndash; просто доверься ей! Если в раскладе выпала Звезда, это знак, что впереди &ndash; светлая полоса, новые мечты, вдохновение и надежда. Вселенная открывает перед тобой двери &ndash; теперь главное не бояться в них войти!</span></p>
<p><strong>Что означает карта Звезда в прямом положении?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">&nbsp;Ты на пути к чему-то большему &ndash; наконец-то перед тобой открываются новые горизонты!</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты начинаешь видеть свет там, где раньше был только туман.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты чувствуешь себя вдохновлённой &ndash; у тебя снова есть цели и желания!</span></li>
</ul>
<p><strong>&nbsp;В каких сферах тебя ждет удача?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Любовь. Если ты одна, впереди тебя ждёт знакомство, которое наполнит твою душу светом. Если у тебя уже есть партнер &ndash; в ваших отношениях наступает период гармонии и доверия.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Карьера. Ты приближаешься к своему призванию! Скоро у тебя появятся новые перспективы и вдохновение для больших свершений.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Финансы. Неожиданное улучшение материального положения, новые возможности для роста.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Духовное развитие. Ты начинаешь видеть знаки Вселенной, доверять интуиции, понимать своё истинное предназначение.</span></li>
</ul>
`, 
                reversed: `<p><span style="font-weight: 400;">Когда кажется, что свет погас, но на самом деле это всего лишь тень.Если тебе выпала перевёрнутая Звезда, то ощущение надежды и лёгкости вдруг сменилось разочарованием и потерей веры. Это не конец света &ndash; но это момент, когда ты чувствуешь, что твои планы, мечты или доверие оказались под ударом.</span></p>
<p><strong>Что означает перевернутая карта Звезда?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ощущение, что Вселенная тебя подвела &ndash; ты ждала чуда, а оно не случилось.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Люди, которым ты доверяла, могут не оправдать твоих ожиданий.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты можешь чувствовать растерянность и разочарование в себе и окружающем мире.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ситуация не складывается так, как ты планировала &ndash; и тебе трудно принять это.</span></li>
</ul>
<p><span style="font-weight: 400;">Но помни: это не конец пути, а временное затемнение. Твоя Звезда не исчезла &ndash; она просто скрыта облаками.</span></p>
<p><strong>Как вернуть свой свет?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Перестань ждать чудо &ndash; начни действовать сама. Звезда не погасла &ndash; просто Вселенная говорит: &laquo;Перестань надеяться и начни что-то делать&raquo;.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Оцени ситуацию без иллюзий. Может, ты надеялась на легкий успех, но теперь понимаешь, что нужно пересмотреть план?</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не завышай ожидания &ndash; учись принимать реальность. То, что не случилось, не значит, что всё плохо &ndash; может, просто нужно немного подождать?</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не теряй веру &ndash; она твой главный ресурс! Твой свет внутри тебя &ndash; он не зависит от внешних обстоятельств.</span></li>
</ul>
<p><span style="font-weight: 400;">Перевёрнутая Звезда &ndash; это не знак, что надежда умерла. Это знак, что тебе нужно найти свет внутри себя, а не ждать его извне.</span></p>
`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Если тебе выпала Звезда как карта года &mdash; всё будет не просто хорошо, а волшебно! Это время, когда вселенная начинает шептать тебе: &laquo;давай, дерзай</span><span style="font-weight: 400;">&raquo;</span><span style="font-weight: 400;">, а внутренний компас находит верный путь.</span></p>
<h3><strong>Что принесет год?</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Наконец-то появится ясность в целях и вдохновение работать над проектами. Мечты о работе мечты или своем деле &mdash; становятся реальными! Но важно сохранять веру и действовать последовательно.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Карта сулит романтику, искреннюю связь и светлые чувства.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Исцеление от прошлого. Сердце открывается, внутренний свет возвращается.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Повышается интуиция, ты начинаешь лучше чувствовать свою суть и доверять миру.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Год Звезды поднимает тебя на уровень вдохновительницы &mdash; ты сама становишься путеводным светом для других.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<h3><strong>Что делать (и чего не делать):</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Мечтай. Прямо по-настоящему. По-крупному.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Уходи от разочарований, не зацикливайся на боли &mdash; она позади.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Верь в свой путь. Даже если он пока неосвещён &mdash; ты сама Звезда.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не опускай руки, если что-то не случается мгновенно.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не сомневайся в себе &mdash; ты достойна счастья.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не бойся быть уязвимой &mdash; это твоя суперсила.</span></li>
</ul>
<p><span style="font-weight: 400;">Всё, что ты отдашь миру &mdash; вернется в три раза больше. Так что мечтай, твори, люби и сияй. Вселенная на твоей стороне.</span></p>`,
            },
            "ex": {
                normal: `<h3>Он потерял свой ориентир и больше не видит смысла. Звезда в раскладе на бывшего &mdash; это разочарование, потеря надежды, депрессия.</h3>
<ul>
<li>Он больше не верит в себя &mdash; потому что всё рушится.</li>
<li>Он потерял мечту &mdash; теперь живёт на автомате, без вдохновения.</li>
<li>Он видит только серость и не понимает, зачем вообще что-то делать.</li>
</ul>
<p><strong>Что его ждёт?</strong></p>
<ul>
<li>Ощущение пустоты и потерянности.</li>
<li>Поиски чего-то, что снова зажжёт его, но безуспешно.</li>
<li>Ощущение, что он упустил самое главное.</li>
</ul>
<p>Звезда обещает надежды, мечты и новые горизонты. Но только для тех, кто заслужил. И твой бывший на старте года будет пытаться реализовать свои надежды и строить иллюзорные замки в небе:</p>
<ul>
<li>Он решит, что скоро всё наладится.</li>
<li>Он увидит перед собой манящую Звезду, поверит в &laquo;новую судьбу&raquo;, &laquo;новую любовь&raquo; и &laquo;новые шансы&raquo;.</li>
</ul>
<p>Спойлер: звезда будет фальшивой, как глянцевая обложка дешевого журнала.</p>
<p>А ещё... он будет время от времени натыкаться на твой успех, и это будет самая острая соль на его раны. А ты уже танцуешь под свои звезды. Ты реальна, твои мечты становятся планами, а планы &mdash; реальностью.&nbsp;</p>
`
            }
        }
    },
    "moon": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Если тебе выпала Луна, то ты сейчас в состоянии полной неопределённости. Что-то кажется тебе реальным, но это может быть просто иллюзия. Ты не видишь всей картины, но всё равно пытаешься разобраться в происходящем.</span></p>
<p><span style="font-weight: 400;">&nbsp;&laquo;Что, если я ошибаюсь? Что, если всё не так, как мне кажется?&raquo;</span></p>
<p><span style="font-weight: 400;">Ты словно бродишь в тумане &ndash; тебе кажется, что ты понимаешь, куда идешь, но на самом деле можешь двигаться в ловушку.</span></p>
<p><strong>Что означает карта Луна в прямом положении?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты не обладаешь полной информацией &ndash; а это значит, что сейчас не время для решительных действий.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты можешь обманывать себя или находиться под влиянием чужих манипуляций.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ситуация, в которой ты оказалась, полна скрытых аспектов, тайн и двойных смыслов.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Будь осторожна &ndash; сейчас высок риск попасть в ситуацию, где тебя могут обмануть.</span></li>
</ul>
<p><span style="font-weight: 400;">Это момент, когда нужно слушать интуицию, а не доверять только тому, что кажется очевидным.</span></p>
<p><strong>&nbsp;Как пережить этот период?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Доверься интуиции, но проверяй факты.Твой внутренний голос чувствует опасность &ndash; не игнорируй его. Но и не верь всему без проверки.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не принимай важных решений в этом состоянии.</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">Сейчас слишком много неясного &ndash; подожди, пока туман рассеется.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не поддавайся страху. Многие из твоих тревог могут быть надуманными &ndash; твой разум рисует монстров там, где их нет.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Избегай людей, которым не доверяешь. Вокруг могут быть манипуляторы, сплетники или просто люди, которые не хотят тебе добра.</span></li>
</ul>
<p><span style="font-weight: 400;">Сейчас важно не торопиться и наблюдать &ndash; скоро правда откроется.</span></p>
`, 
                reversed: `<p><span style="font-weight: 400;">Правда вскрылась &ndash; и теперь что с этим делать?</span></p>
<p><span style="font-weight: 400;">Если в раскладе выпала перевернутая Луна, значит, завеса тумана начинает спадать. Ты видишь то, что раньше было скрыто, и, возможно, реальность тебе не слишком нравится.</span></p>
<p><span style="font-weight: 400;">Но знаешь, что круто? Ты наконец-то знаешь правду. А значит, можешь двигаться дальше &ndash; без иллюзий и самообмана.</span></p>
<p><strong>Что означает перевернутая карта Луна?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Обман вскрылся &ndash; всё тайное стало явным.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты наконец-то избавилась от ложных надежд и можешь увидеть реальную картину.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты осознаешь, кто был с тобой честен, а кто манипулировал тобой.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты больше не живешь в страхах &ndash; ты понимаешь, что правда даёт свободу.</span></li>
</ul>
<p><span style="font-weight: 400;">&nbsp;Луна больше не пугает &ndash; она освещает твой путь, и теперь ты знаешь, куда идти.</span></p>
<p><strong>&nbsp;Как использовать энергию перевернутой Луны?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Прими реальность такой, какая она есть. Может, она не совпадает с твоими мечтами, но зато теперь ты знаешь, с чем работаешь.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Действуй по совести. Если ты достигла чего-то сомнительным путём &ndash; подумай, как это скажется на тебе в будущем.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Перестань оправдывать токсичных людей. Если кто-то тебя обманывал &ndash; не закрывай глаза. Теперь у тебя есть факты.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">4. Используй это прозрение во благо. Зная правду, ты можешь принять осознанные решения, которые приведут тебя к успеху.</span></li>
</ul>
<p><span style="font-weight: 400;">Перевёрнутая Луна &ndash; это момент истины. Ты либо используешь его мудро, либо продолжаешь жить в прошлом.</span></p>
`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Год Луны &mdash; это не про контроль. Это про чувства, знаки, интуицию, лунные циклы и полную перезагрузку мышления. Здесь нельзя всё просчитать, но зато можно ощутить. Всё важное будет происходить за кулисами, и только ты сама сможешь это расшифровать.</span></p>
<h3><strong>Что принесет год?</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Может быть ощущение, что тебе чего-то недоговаривают или что проект нечист на руку.</span></li>
</ul>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Может всплыть прошлое, появиться странные, таинственные персонажи или усилиться &laquo;чувствую, что что-то не так</span><span style="font-weight: 400;">&raquo;.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Это время, когда твое сердце говорит громче логики. И ты учишься любить себя на глубине, а не на поверхности.</span><span style="font-weight: 400;"><br /><br /></span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Слушай себя, не торопись, не строй иллюзии &mdash; и тебя ждет настоящее волшебство.</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<h3><strong>Чего избегать:</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Жизни в розовых очках. Луна любит туман, но ты можешь зажечь свой свет.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Манипуляций &mdash; своими или чужими. Всё тайное станет явным.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Погружения в чужие эмоции &mdash; береги свой эмоциональный фон.</span></li>
</ul>
<p><span style="font-weight: 400;">Год по карте Луна &mdash; глубокий, таинственный, мистический. Ты словно входишь в сказку, где сама становишься героиней, которая проходит лабиринт эмоций, страхов и желаний &mdash; и выходит оттуда возрожденной. Осторожно: возможно пробуждение магических способностей и обострение интуиции. И помни &mdash; всё не так, как кажется&hellip; но всё будет именно так, как надо.</span></p>`,
            },
            "ex": {
                normal: `<p><span style="font-weight: 400;">Луна &mdash; это человек, который запутался в своём же самообмане.</span><span style="font-weight: 400;"><br /></span><strong><br /></strong><strong>Что с ним происходит?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он не понимает, что правда, а что ложь.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он живёт в страхе и не знает, кому верить.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он может попасть в окружение, которое его обманывает.</span></li>
</ul>
<p><span style="font-weight: 400;">Добро пожаловать в психоделическую вечеринку, на которую он купил билет без возврата.&nbsp;</span></p>
<p><span style="font-weight: 400;">А ты? Ты уже купила себе солнцезащитные очки и шагаешь по жизни уверенно! Пока он тонет в своих призраках, ты наслаждаешься реальными успехами, любовью и радостью. И помни: его Луна &mdash; это твое напоминание о том, как красиво ты научилась выбирать свет вместо тени.&nbsp;</span></p>
`
            }
        }
    },
    "sun": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Если тебе выпала карта Солнце, то Вселенная буквально говорит: &laquo;Расслабься, наслаждайся &ndash; ты в потоке удачи!&raquo;. Ты вошла в период, когда жизнь дарит тебе свет, энергию, счастье &ndash; и всё идёт так, как надо.</span></p>
<p><span style="font-weight: 400;">Что означает карта Солнце в прямом положении?</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Тебя ждут успех, радость и мощный рост во всех сферах жизни.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты наконец-то видишь вещи ясно &ndash; никаких сомнений и скрытых подвохов!</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты обретаешь уверенность в себе, твои таланты и усилия приносят плоды.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты излучаешь позитив, и это привлекает к тебе людей и новые возможности.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты готова к новым достижениям, потому что сейчас твой момент сиять!</span></li>
</ul>
<p><span style="font-weight: 400;">Солнце &ndash; это абсолютное &laquo;ДА!&raquo; от Вселенной. У тебя всё получится!</span></p>
<p><strong>&nbsp;Как использовать энергию Солнца?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Лови момент &ndash; сейчас тебе всё по силам! Любая мечта, любое желание &ndash; сейчас идеальное время для их реализации.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не бойся быть в центре внимания. Сейчас твой свет притягивает людей &ndash; используй это, чтобы расширять связи, находить новые возможности.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">&nbsp;Будь благодарна за этот период.Ты на вершине &ndash; наслаждайся этим, но не забывай, что благодарность умножает удачу!&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Действуй смело! Не сомневайся, не откладывай, не жди &laquo;идеального момента&raquo; &ndash; он уже настал!</span></li>
</ul>
<p><span style="font-weight: 400;">Солнце даёт тебе максимум энергии &ndash; направь её на то, что сделает тебя ещё счастливее.</span></p>
`, 
                reversed: `<p><span style="font-weight: 400;">Если тебе выпало перевернутое Солнце, значит, успех и счастье уже рядом, но пока скрыты от тебя временными препятствиями или внутренними сомнениями.</span></p>
<p><strong>Что означает перевернутая карта Солнце?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты идешь к успеху, но путь к нему не такой гладкий, как хотелось бы.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты не видишь всей картины &ndash; возможно, есть детали, которые ты упускаешь.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты можешь недооценивать себя и свои возможности.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Тебе кажется, что что-то идёт не так, но на самом деле Вселенная ведет тебя туда, где тебе действительно место.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Тебе нужно больше уверенности &ndash; свет уже есть, но ты пока не решаешься его принять.</span></li>
</ul>
<p><span style="font-weight: 400;">&nbsp;Солнце не пропало &ndash; просто сейчас его скрыли облака, которые скоро рассеются!</span></p>
<p><strong>Какие преграды могут стоять на пути?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Твои собственные сомнения. Ты не до конца веришь, что можешь быть успешной, счастливой, любимой.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Задержки во времени. Ты ждёшь быстрых результатов, но всему своё время &ndash; просто будь терпеливой.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Искажение реальности. Ты можешь быть уверена, что что-то идёт не так, но на самом деле всё движется в верном направлении.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Внешние обстоятельства. Может, кто-то мешает тебе раскрыться, или ты находишься в ситуации, где пока трудно проявить себя.</span></li>
</ul>
<p><span style="font-weight: 400;">Перевернутое Солнце &ndash; это не отказ в удаче, это знак, что ты пока не видишь, как близко она на самом деле.</span></p>
`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Год под покровительством Солнца &mdash; это праздник жизни. Наступает период, когда всё проясняется, становится легче, ярче и&hellip; радостнее! Сомнения уходят. Темные полосы &mdash; позади. Ты наконец-то чувствуешь себя уверенно, красиво, сильно и по-настоящему счастливой. Это год признания, удачи, большой любви и громких &laquo;ура!</span><span style="font-weight: 400;">&raquo;.</span><span style="font-weight: 400;">&nbsp;</span></p>
<h3><strong>Что сулит год?&nbsp;</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Любой проект, за который ты берешься с душой, будет успешным. Возможны выход на новый уровень, повышение, открытие собственного дела, популярность.</span></li>
</ul>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Любовь! Любовь! Любовь! Новые отношения, которые приносят радость, легкость и настоящее тепло.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты сияешь. Наступает период, когда ты умеешь быть настоящей, не прячешь эмоции и искренне радуешься жизни.</span></li>
</ul>
<p><strong><em>Вишенка на торте:</em></strong><em><span style="font-weight: 400;"> карта часто символизирует появление ребёнка или укрепление семьи.</span></em></p>
<h3><strong>Чего стоит остерегаться:</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Только одного: выгорать. Ты так ярко горишь, что можешь забывать про отдых.</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">Не стесняйся брать паузы, заботься о себе &mdash; не только как о звезде, но и как о хрупком цветке. </span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><span style="font-weight: 400;">Это год твоей победы, внутреннего света и радости. Всё, что ты посеяла раньше, теперь расцветает. Ты излучаешь тепло &mdash; и оно возвращается к тебе. У тебя есть всё, чтобы стать главной героиней собственной истории. Так что улыбайся, сияй, действуй и&hellip; наслаждайся каждой минутой. Ведь этот год &mdash; о тебе и для тебя. </span></p>`,
            },
            "ex": {
                normal: `<h3><span style="font-weight: 400;">Когда-то он был на вершине, а теперь даже луч солнца не заглядывает в его жизнь.Он человек, который потерял радость, смысл и энергию.</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;"><br /></span><strong>Что с ним происходит?</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он притворяется, что у него всё хорошо, но на самом деле внутри пусто.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Его жизнь стала серой: без вдохновения, без страсти, без кайфа.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он понимает, что сделал ошибку, но слишком гордый, чтобы признать это.</span></li>
</ul>
<p><span style="font-weight: 400;">Его солнце закатилось &mdash; и теперь ему остаётся только смотреть в темноту.</span> <span style="font-weight: 400;">Вместо того чтобы купаться в лучах успеха, бывший будет напоминать солнечного зайчика на стене: мечется, прыгает, мечтает поймать свет, но увы. Светлый путь? Нет, это не его история.</span></p>
<p><strong>Урок от Солнца: </strong><span style="font-weight: 400;">истинный свет идет изнутри, а не из количества лайков и аплодисментов. Учиться радоваться даже маленьким победам, а не ждать идеального дня расклада дел. Но бывший выберет не уроки, а страдальческий марафон. </span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">А ты в это время? Идешь по жизни в блестках, с бокальчиком любимого напитка и самыми солнечными планами! Твой свет не зависит ни от кого &mdash; он внутри тебя. </span></p>
`
            }
        }
    },
    "judgement": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Твой момент истины: пора принимать важные решения!&nbsp;</span></p>
<p><span style="font-weight: 400;">Если тебе выпала карта Суд, значит, Вселенная зовёт тебя к переменам, которые ты уже не можешь игнорировать. Это момент осознания, момент, когда всё, что было скрыто, становится явным. Теперь ты видишь свою жизнь такой, какая она есть &ndash; и пора решать, что с этим делать.</span></p>
<p><span style="font-weight: 400;">Ты прошла огромный путь &ndash; и теперь перед тобой открываются новые двери. Главное &ndash; не бояться их открыть.</span></p>
<p><strong>Что означает карта Суд в прямом положении?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты наконец осознаешь истину &ndash; больше нет самообмана, нет тумана.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты можешь полностью изменить свою жизнь &ndash; начать всё заново, но уже на другом уровне.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты стоишь перед важным выбором &ndash; и этот выбор определит твоё будущее.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты освобождаешься от прошлого &ndash; но только если сама этого хочешь.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">&nbsp;Ты проходишь через трансформацию &ndash; но она будет только к лучшему.</span></li>
</ul>
<p><span style="font-weight: 400;">&nbsp;Суд &ndash; это не конец, это начало новой главы твоей жизни.</span></p>
<p><strong>В каких сферах тебя ждёт обновление?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Любовь. Если ты была в токсичных отношениях, сейчас самое время разорвать этот цикл. Если ты одинока &ndash; ты готова к новой любви, но уже на другом уровне.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Карьера. Ты понимаешь, чего хочешь на самом деле, и теперь можешь сделать выбор, который приведет тебя к успеху.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Финансы &ndash; Ты можешь выйти на новый уровень доходов, если перестанешь бояться больших шагов.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Личностный рост &ndash; Ты пробуждаешься, осознаешь свои ошибки, анализируешь свой путь &ndash; и становишься сильнее.</span></li>
</ul>
<p><span style="font-weight: 400;">Это момент, когда ты можешь отпустить старые страхи, сомнения и ограничения &ndash; и переродиться.</span></p>
`, 
                reversed: `<p><span style="font-weight: 400;">Если тебе выпал перевернутый Суд, значит, ты пытаешься закрыть глаза на что-то важное, но это всё равно догонит тебя.</span></p>
<p><span style="font-weight: 400;">&laquo;Я не хочу разбираться с этим, может, само рассосется?&raquo;.&nbsp; Нет, не рассосется. Это момент, когда тебе нужно принять ответственность за свою жизнь &ndash; но ты пока сопротивляешься.</span></p>
<p><strong>Что означает перевернутая карта Суд?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты не хочешь смотреть правде в глаза &ndash; но это уже неизбежно.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты избегаешь перемен, потому что боишься выйти из зоны комфорта.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">&nbsp;Ты отказываешься признавать свои ошибки &ndash; но от этого они не исчезнут.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">&nbsp;Ты можешь чувствовать вину за прошлое, но пока не готова исправлять ситуацию.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты тормозишь свой рост &ndash; вместо того чтобы двигаться вперёд, ты застряла в прошлом.</span></li>
</ul>
<p><span style="font-weight: 400;">Рано или поздно придётся разгрести завалы &ndash; лучше сделать это самой, чем ждать, пока жизнь заставит.</span></p>
<p><strong>&nbsp;Какие проблемы могут всплыть?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Прошлые ошибки &ndash; Ты сделала что-то, о чём не хочешь вспоминать, но теперь последствия стучатся в дверь.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Невыполненные обещания &ndash; Кому-то ты что-то задолжала &ndash; будь то слова, дела или честный разговор.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Страх ответственности &ndash; Ты не хочешь признавать, что именно твои решения привели тебя туда, где ты сейчас.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Застой в жизни &ndash; Ты не двигаешься вперед, потому что боишься перемен.</span></li>
</ul>
<p><span style="font-weight: 400;">Перевёрнутый Суд &ndash; это шанс пересмотреть свои ошибки и исправить их, пока не стало поздно.</span></p>
`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Этот год &mdash; твоя вторая попытка, твой рехаб от старой версии себя и шанс начать заново, но уже с багажом мудрости, опыта и веры в себя. Аркан Суд символизирует момент, когда внутренний голос становится громче всех остальных, когда ты наконец-то понимаешь: &laquo;Хватит! Я больше не та, что была раньше&raquo;.</span></p>
<h3><strong>Главное слово года: ВОЗРОЖДЕНИЕ</strong></h3>
<p><span style="font-weight: 400;">Будут ситуации, которые встряхнут тебя до глубины души &mdash; но только для того, чтобы ты смогла вспомнить, кто ты есть. Возможно, ты вернёшься к какому-то старому проекту или мечте, на которую когда-то махнула рукой. Или вдруг осознаешь, что пора простить, отпустить, разрешить себе жить по-новому. Всё, что не несёт свет &mdash; отправляется в утиль.</span></p>
<h3><strong>Что ждёт в этом году:</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Признание. Мир услышит тебя. Даже если раньше всё было в тени &mdash; теперь ты на свету.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Очищение. Психо-детокс, эмоциональный шейк и, возможно, генеральная уборка в окружении.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Карма возвращается &mdash; но теперь, чтобы наградить. Всё, что ты когда-то вложила с любовью, возвращается сторицей.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Новый путь. Ты выходишь из тоннеля сомнений &mdash; и перед тобой разворачивается новый маршрут.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<h3><strong>Советы карты Суд:</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не игнорируй знаки и интуицию. Они станут навигатором.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не бойся отказаться от старого &mdash; всё, что рушится, больше не служит тебе.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Будь честна с собой. И прими себя со всеми взлётами и падениями.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Готовься вдохновлять других &mdash; твой путь станет примером.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><strong>Карта Суд</strong><span style="font-weight: 400;"> &mdash; это как голос Вселенной, который говорит: &laquo;Проснись, девочка. Время жить в полной силе. Всё самое важное только начинается&raquo;. </span></p>`,
            },
            "ex": {
                normal: `<p><span style="font-weight: 400;">Когда настал момент осознать свои ошибки, но уже поздно. Он человек, который упустил свой шанс исправить ошибки.</span></p>
<h3><strong>Что с ним происходит?</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он понял, что сделал что-то не так, но исправить уже не может.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он не услышал предупреждающие знаки судьбы&nbsp; и теперь пожинает последствия.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он боится перемен, поэтому просто застрял в старых паттернах.</span></li>
</ul>
<p><span style="font-weight: 400;">На самом деле, вселенная подает ему знаки: пора взрослеть, пора принять ответственность, пора двигаться дальше! Но он будет упорно держаться за старые сценарии, как за любимую, но дырявую футболку.</span> <span style="font-weight: 400;">А ведь принять свои ошибки &mdash; это не проигрыш. Это начало новой жизни.</span></p>
<p><span style="font-weight: 400;">А ты в это время? Расцветаешь! Строишь свою жизнь! Ты проходишь свой Суд блестяще: принимая себя, свою силу и ответственность за решения. А бывший... Ну, пусть остается зрителем. </span></p>
`
            }
        }
    },
    "world": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Ты прошла весь путь &ndash; и вот он, твой триумф!</span></p>
<p><span style="font-weight: 400;">Если тебе выпала карта Мир, значит, ты достигла финальной точки своего путешествия, и теперь можешь наконец-то насладиться результатами! Ты на вершине, где всё логично, гармонично и наполнено смыслом. Всё, что ты хотела, пришло к тебе, и теперь можно просто быть счастливой.</span></p>
<p><strong>&nbsp;Что означает карта Мир в прямом положении?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты завершила важный этап &ndash; и сделала это блестяще!</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты ощущаешь полную гармонию &ndash; с собой, с окружающим миром, с судьбой.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Тебе больше не нужно суетиться &ndash; всё приходит само, без борьбы.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты наконец-то видишь картину целиком &ndash; и понимаешь, что всё происходило не зря.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты в состоянии абсолютного удовлетворения &ndash; ты заслужила этот момент!</span></li>
</ul>
<p><span style="font-weight: 400;">&nbsp;Мир &ndash; это твой личный триумф, точка, где всё сошлось, как и должно было.</span></p>
<p><strong>Как использовать энергию Мира?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Отпразднуй свой успех! Ты на финише &ndash; сделай паузу, насладись этим, гордись собой!</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Позволь себе просто быть счастливой. Иногда не нужно бороться, не нужно торопиться &ndash; просто наслаждайся моментом.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Оцени весь свой путь &ndash; ты прошла через многое и выросла.Посмотри назад не с сожалением, а с благодарностью &ndash; это сделало тебя той, кто ты есть.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Готовься к новым горизонтам.Финал одной истории &ndash; это только начало следующей. Теперь у тебя есть ресурсы для чего-то ещё более масштабного!</span></li>
</ul>
<p><span style="font-weight: 400;">Мир &ndash; это не конец, а новый уровень жизни.</span></p>
`, 
                reversed: `<p><span style="font-weight: 400;">Если тебе выпала перевёрнутая карта Мир, значит, ты на грани завершения важного этапа, но что-то мешает тебе сделать финальный шаг. Ты либо не веришь, что заслуживаешь успеха, либо боишься перемен, либо просто потеряла мотивацию.</span></p>
<p><strong>Что означает перевернутая карта Мир?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты на грани завершения чего-то важного, но что-то тебя тормозит.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты можешь чувствовать апатию, усталость, нежелание доводить начатое до конца.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты не понимаешь, куда идти дальше &ndash; завершенность кажется пугающей.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты можешь ждать, что что-то случится само, вместо того чтобы действовать.</span></li>
</ul>
<p><strong>Какие причины могут скрываться за этим застоем?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты боишься успеха. &ndash; Да, это бывает. Что, если всё получится, но потом придётся соответствовать новому уровню?</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты не можешь отпустить прошлое. &ndash; Иногда завершение чего-то важного кажется страшным, потому что оно означает, что пора двигаться дальше.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты не прикладываешь достаточно усилий. &ndash; Ощущение, что &laquo;всё придёт само&raquo;, на самом деле мешает тебе приблизить свой успех.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты просто устала. &ndash; Быть продуктивной 24/7 невозможно &ndash; возможно, тебе просто нужна пауза.</span></li>
</ul>
<p><span style="font-weight: 400;">Твой успех уже здесь &ndash; просто забери его!</span></p>
`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Аркан Мир&mdash; это про завершение, триумф и безграничное &laquo;Ура, я это сделала!</span><span style="font-weight: 400;">&raquo;</span><span style="font-weight: 400;">. Ты поднимаешься на новую вершину и с этой высоты вдруг видишь: всё имело смысл.</span></p>
<p><span style="font-weight: 400;">Ты завершаешь важный жизненный цикл. Может, ты годами шла к этой точке &mdash; и вот она.&nbsp;</span></p>
<h3><strong>Что принесёт тебе карта МИР в этом году:</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Глобальное завершение: важный проект, отношения, история &mdash; с лёгкостью и красивой точкой.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Награды за труды: всё, что ты делала &mdash; возвращается успехом, уважением и новыми возможностями.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Гармония с собой: ты больше не сомневаешься в себе. Ты &mdash; не часть мира. Ты &mdash; сам мир.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Путешествия и расширение горизонтов: физически, духовно, интеллектуально.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Слияние с предназначением: ты делаешь то, для чего пришла в этот мир. И это чувствуется.</span></li>
</ul>
<h3><strong>Подсказки от карты Мир:</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Заверши всё, что начато &mdash; не тяни хвосты. Они мешают новому зайти в твою жизнь.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Позволь себе больше лёгкости и радости &mdash; ты заслужила!</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не бойся показать миру, кто ты. Сейчас ты особенно яркая и целостная.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Отпразднуй &mdash; это твой звездный год!</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><strong>Карта Мир шепчет тебе:</strong></p>
<p><span style="font-weight: 400;">&laquo;Смотри, ты справилась. Теперь живи. Не выживай, не доказывай, не сравнивай &mdash; просто живи. Полной грудью. Полным сердцем. Полной собой&raquo;.</span></p>`,
            },
            "ex": {
                normal: `<p><span style="font-weight: 400;">Когда-то у него был весь мир &mdash; но теперь он застрял в пустоте. Он человек, который не смог завершить важный этап и теперь застрял между прошлым и будущим.</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;"><br /></span><strong>Что с ним происходит?&nbsp;</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он не понимает, куда двигаться дальше, потому что не сделал нужных выводов.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он чувствует, что остался позади &mdash; в то время как ты идёшь вперёд.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он хочет вернуть что-то из прошлого, но не понимает, что оно уже ушло</span><strong>.</strong></li>
</ul>
<p><span style="font-weight: 400;">Когда-то он чувствовал себя победителем &mdash; а теперь у него нет даже карты, чтобы понять, куда идти.Всё, что ему остается, &mdash; наблюдать за твоим счастьем издалека.&nbsp;</span></p>
<p><span style="font-weight: 400;">А ты? Ты расправляешь плечи. Ты расцветаешь. Ты находишь новые смыслы, новых людей и новые мечты. А бывший... всё еще ищет старую дверь в закрытый замок.</span></p>
`
            }
        }
    },
    "king-of-wands": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Ох, милая, если в твоём раскладе появился Король Жезлов, то знай &mdash; это вспышка харизмы, уверенности и деловой хватки! Это карта человека, который не просит шанса &mdash; он его создаёт.</span></p>
<p><span style="font-weight: 400;">В раскладе она может означать и энергичного мужчину, готового стать твоим союзником, и&hellip; тебя, если ты наконец-то решила взять свою жизнь в крепкие, ухоженные руки!</span></p>
<p><strong>&nbsp;Что обещает эта карта?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Новый этап лидерства и влияния.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Поддержку от сильных людей &mdash; будь то совет, помощь или конкретные действия.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Возможность проявить себя на полную катушку.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Амбициозные проекты, которые реально выстрелят.</span></li>
</ul>
<p><strong>Советы от Короля Жезлов:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не сомневайся в себе &mdash; ты уже достаточно знаешь и умеешь.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Будь активной: самоуверенность сейчас &mdash; это не минус, а плюс!</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Используй поддержку &mdash; не всё нужно делать в одиночку.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Следи за образом: уверенность начинается с того, как ты входишь в комнату.</span></li>
</ul>
<p><span style="font-weight: 400;">Ты можешь всё. Главное &mdash; не сидеть сложа руки. Двигайся, действуй, бери своё!</span></p>
`, 
                reversed: `<p><span style="font-weight: 400;">&laquo;Босс? Да. Только с перегибом.&nbsp;</span></p>
<p><span style="font-weight: 400;">Если в раскладе появляется перевернутый Король Жезлов, то держись, дорогая: тут либо токсичный начальник, либо ты сама становишься жесткой версией себя, которой уже пора выдохнуть и остановиться. Это карта про человека, у которого куча амбиций, но реализация идет с перекосом &mdash; на показуху, на давление, на &laquo;я тут главный!&raquo;.&nbsp;</span></p>
<p><strong>Что она может означать?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты хочешь всё и сразу, но Вселенная шепчет: &laquo;Не сейчас&raquo;.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты (или кто-то рядом) включил тирана: &laquo;Будет так, как я сказал(а)!&raquo;.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Громкие слова, пафосные обещания, но по факту &mdash; действий или ноль, или они жестко проламывают чужие границы.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Лидерство без эмпатии, контроль ради самоутверждения, харизма &mdash; но из серии &laquo;посмотрите, какой я молодец!&raquo;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Могут быть вспышки агрессии, обиды на весь мир и желание всем доказать, кто тут царь.</span></li>
</ul>
<p><strong>Что стоит сделать:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Остынь. Подыши. Перепроверь свои цели. Сейчас можно легко перегореть или испортить отношения с теми, кто был за тебя.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не дави. Настоящая сила &mdash; в уверенности, а не в командном тоне.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Отложи важные решения. Вселенная пока не даёт зелёный свет &mdash; не потому что ты плохая, а потому что время не пришло.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Присмотрись к себе: не слишком ли много показухи? Ты вдохновляешь, когда ты настоящая &mdash; а не когда стараешься быть &laquo;идеальной версией себя&raquo;.</span></li>
</ul>
<p><span style="font-weight: 400;">Король Жезлов перевернутый говорит: &laquo;Ты не проиграла &mdash; просто пора выдохнуть, навести порядок внутри и только потом снова выходить на сцену&raquo;.</span></p>
`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Этот год &mdash; твой звездный час! С картой Король Жезлов впереди &mdash; лидерство, успех и восхищенные взгляды окружающих. Ты готова наконец-то заявить о себе на полную мощность? Потому что этот год требует от тебя огня, амбиций и смелости мечтать по-крупному!</span></p>
<p><strong>Что принесет тебе этот год?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Личная сила и авторитет. Тебя будут видеть сильной, уверенной, невероятно харизматичной личностью. Это тот год, когда ты в буквальном смысле будешь в центре внимания. Даже если ты скромняшка по натуре, светить придется, и&hellip; это будет прекрасно!&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Если ты в поиске любви &mdash; готовься к встрече с сильным, зрелым партнером, который знает, чего хочет, и умеет это показать. Причем это будет не просто увлечение, а союз двух равных сильных людей. Если ты уже в отношениях &mdash; готовься выходить на новый уровень: совместные проекты, переезды, планы на будущее, а возможно и создание семьи.</span></li>
<li style="font-weight: 400;"><strong>Карьера и деньги. </strong><span style="font-weight: 400;">Повышение? Абсолютно да! Новая должность? Время заявить о себе! Собственный бизнес? Идеальный момент, чтобы начать!</span></li>
</ul>
<p><strong>Этот год требует от тебя:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Больше ответственности.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Смелых идей.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Готовности брать на себя лидерские функции.</span></li>
</ul>
<p><span style="font-weight: 400;">Но поверь &mdash; ты справишься! Финансово год сулит стабильность, рост доходов и неожиданные приятные бонусы.</span></p>
<p><span style="font-weight: 400;">Поверь в свой свет и не бойся его! Мир хочет видеть тебя яркой, сильной и вдохновляющей. Не прячь свои мечты &mdash; время действовать красиво, смело и с огоньком в глазах!</span></p>`,
            },
            "ex": {
                normal: `<p><span style="font-weight: 400;">Когда-то он был Королём &mdash; весь мир был для него ареной. Он вел за собой людей, громко смеялся, обещал золотые горы&hellip; А теперь? Теперь он &mdash; король без трона, заблудившийся в собственных амбициях.</span></p>
<p><strong>Что происходит с ним сейчас?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он всё ещё ходит, выпячивая грудь колесом, но уже никто не слушает его речей.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он строит планы... но на песке.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он пытается командовать... но некому подчиняться.</span></li>
</ul>
<p><span style="font-weight: 400;">Он словно актер на пустой сцене: яркие жесты, гордый взгляд, но зрителей в зале больше нет. Он всё ещё мечтает быть главным героем, но стал второстепенным персонажем даже в собственной жизни. И знаешь что самое обидное? Он до сих пор думает, что всё контролирует &mdash; хотя контроль давно ускользнул.</span></p>
<p><strong>Что его ждёт?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Разочарование в себе: Почему мир мне больше не аплодирует?</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Безуспешные опытки вернуть былую славу.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Новые знакомства, которые будут казаться перспективными&hellip; а на деле обернутся очередной ошибкой.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Гордость не позволит признать свои ошибки, а эго будет нашептывать: &laquo;Ты просто недооценен&raquo;.</span></li>
</ul>
<p><span style="font-weight: 400;">А ты? Ты строишь свою империю &mdash; без лишнего шума и понтов. И когда он в тысячный раз скажет: &laquo; Я еще всем покажу!&raquo;, ты будешь далеко &mdash; жить своей лучшей жизнью. </span></p>`
            }
        }
    },
    "queen-of-wands": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Когда в раскладе появляется Королева Жезлов, знай &mdash; это воплощение огненной женственности, уверенности, обаяния и деловой хватки. Это не просто женщина &mdash; это икона уверенного &laquo;Я могу всё, и даже чуть больше!&raquo;.</span></p>
<p><span style="font-weight: 400;">Она может быть твоим союзником, твоим отражением или твоим состоянием в моменте. И каждый вариант &mdash; по-своему мощный.</span></p>
<p><strong>Если это женщина рядом с тобой&hellip;</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты столкнёшься с яркой, харизматичной, горячей натурой.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Она уверена в себе настолько, что рядом с ней хочется тоже выпрямиться и включить режим &laquo;королева&raquo;.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Это может быть подруга, наставница, босс или женщина, которая поможет тебе продвинуться к цели.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Она даст дельный совет, протянет руку помощи, но не потерпит лени, нытья и слабости.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Если нужно &mdash; она будет твоим щитом, если заиграешься &mdash; может слегка подпалить крылья.</span></li>
</ul>
<p><span style="font-weight: 400;">Это женщина-огонь. Уважай её, и она зажжёт твой путь.</span></p>
<p><span style="font-weight: 400;">Если карта описывает тебя&hellip;</span></p>
<p><span style="font-weight: 400;">Ты сейчас &mdash; та самая Королева!</span></p>
<p><strong>Королева Жезлов советует:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Будь уверенной &ndash; даже если внутри трясёт. Люди верят в тех, кто верит в себя.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не туши свой огонь, чтобы &laquo;всем было удобно&raquo;. Пусть привыкают к яркому свету!</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Прояви инициативу. Сейчас быть скромной &ndash; не вариант.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не бойся быть той, кто ведёт за собой. У тебя на это есть всё &ndash; от внутреннего стержня до внешнего вау-эффекта.</span></li>
</ul>
`, 
                reversed: `<p><span style="font-weight: 400;">Огонь вышел из-под контроля (и да, кому-то уже поджарило крылышки).</span></p>
<p><span style="font-weight: 400;">Когда в раскладе появляется перевернутая Королева Жезлов, в комнате ощущается легкий запах гари &mdash; потому что кто-то переборщил с самоуверенностью, пафосом и контролем.</span></p>
<p><span style="font-weight: 400;">Это карта про женщину, которая могла бы быть и музой, и защитницей, и союзницей, но решила, что мир должен вертеться вокруг нее. И, к сожалению, иногда этой женщиной можешь быть ты сама.</span></p>
<p><strong>Что предупреждает эта карта?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Сложности в переговорах &mdash; твоя (или чья-то) резкость и самоуверенность могут отпугнуть важного партнёра.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Неудачи в карьере &mdash; из-за высокомерия, конфликта с начальством или завышенных ожиданий.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Проблемы с авторитетом &mdash; когда люди начинают видеть в тебе не лидера, а командира с хлыстом.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Одиночество в успехе &mdash; когда ты всё можешь, но с тобой никто не хочет.</span></li>
</ul>
<p><strong>Как вырулить красиво:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Проверь, не сожгла ли ты мосты. Может, пора наладить отношения и отложить мега-эго в сторону?</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Прислушайся к другим. Иногда совет от кого-то менее яркого может спасти твой проект.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Сбавь градус контроля. Позволь другим блистать рядом с тобой, а не только в тени.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Будь лидером, а не драма-квин. Уверенность &mdash; это круто. Токсичная уверенность &mdash; не очень.</span></li>
</ul>
<p><span style="font-weight: 400;">Перевернутая Королева Жезлов говорит: &laquo;Ты &mdash; огонь. Но даже пламя должно знать, где остановиться, чтобы не сжечь всё вокруг&raquo;.</span></p>
`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Этот год будет твоим личным триумфом силы, красоты и уверенности!&nbsp; Королева Жезлов &mdash; это женщина, которая сияет сама по себе, освещая весь мир вокруг. И в этом году ты будешь именно такой &mdash; притягательной, яркой и неотразимой.</span></p>
<p><strong>Что принесет тебе этот год?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Будь готова почувствовать, как в тебе пробуждается настоящая внутренняя огонь. Ты наконец-то перестанешь сомневаться в своих талантах и начнешь уверенно заявлять о себе миру.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты будешь настоящим магнитом для внимания. Флирт, романтика, восхищенные взгляды окружающих &mdash; все это идет бонусом. Если ты в отношениях, партнер будет смотреть на тебя с новым восторгом, гордиться и вдохновляться тобой. Если свободна &mdash; приготовься к бурному сезону ярких знакомств, настоящих ухаживаний и признаний. Ты будешь выбирать, а не ждать, когда выберут тебя.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты берешь карьеру в свои сильные и красивые руки. Легко закрываешь важные проекты. Вдохновляешь других. Двигаешься к повышению или начинаешь новое перспективное дело.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><strong>Совет карты:&nbsp;</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">&nbsp;Не прячься в тени, не стесняйся своей яркости. Ты родилась, чтобы светить.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Верь в себя, действуй смело &mdash; и Вселенная сама начнет подкидывать тебе удачные шансы.</span></li>
</ul>`,
            },
            "ex": {
                normal: `<p><span style="font-weight: 400;">Когда-то она была настоящей королевой в его глазах: яркой, уверенной, непокорной.</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">Он смотрел на неё снизу вверх, словно на солнце, которое согревает и даёт жизнь. Но что он сделал? Вместо того чтобы беречь эту огненную звезду, он попытался затушить её свет. И угадай что? Королева не тускнеет. Она просто уходит &mdash; туда, где её сияние ценят.</span></p>
<p><span style="font-weight: 400;">А бывший остаётся. Один. На обочине. Под моросящим дождиком своих промахов.</span></p>
<p><span style="font-weight: 400;">Что происходит с ним сейчас?</span></p>
<p><span style="font-weight: 400;">Теперь он сидит в кресле своей унылой реальности и пытается убедить себя, что и не особо-то хотелось. Только вот вместо уверенной Королевы рядом &mdash; пустота. Или, в лучшем случае, кто-то, кто не зажигает сердце, а скорее напоминает остывший чай. Ему кажется, что он может начать всё заново. Только проблема в том, что сам он &mdash; всё тот же.</span></p>
<p><span style="font-weight: 400;">Скучные свидания, попытки казаться крутым, рассказы о великих планах (которые так и остаются рассказами). И всё это &mdash; на фоне внутреннего ощущения: что-то важное я потерял. Будет много попыток построить что-то похожее, но каждая новая история обернется пародией.</span></p>
<p><span style="font-weight: 400;">Он будет листать твои соцсети тайком ночью, увидев твои сияющие фото и каждый раз будет испытывать противное чувство, будто проглотил кактус.</span></p>
<p><span style="font-weight: 400;">А ты... О, ты расцветаешь, королева. Ты не просто нашла свет &mdash; ты стала светом. Ты строишь свою реальность, где ты главный герой, а не приложение к чужим планам. Ты притягиваешь к себе таких людей, которые знают: Королеву уважают, а не пытаются переделать. И пока он будет задумчиво смотреть в окно, вспоминая ту огненную богиню, ты будешь лететь навстречу своему счастью &mdash; легкой походкой, с высоко поднятой головой. </span></p>
`
            }
        }
    },
    "knight-of-wands": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Собирай чемоданы и вперёд! Время действовать!</span></p>
<p><span style="font-weight: 400;">Когда в раскладе появляется Рыцарь Жезлов, ждать и медлить больше нельзя &mdash; пора мчать на всех парах! Это карта движения, драйва, действия и риска. Тут не про &laquo;подумать&raquo;, тут про &laquo;попробовать, сделать и победить&raquo;.</span></p>
<p><span style="font-weight: 400;">Ждала знака? Вот он! Вперёд, дерзай!</span></p>
<p><strong>&nbsp;Что означает Рыцарь Жезлов в прямом положении?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты сейчас в суперэнергичном состоянии &mdash; тебя просто распирает от желания действовать.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">&nbsp;У тебя есть идея, цель или мечта &mdash; и ты готова в неё влететь, как торнадо в отпуск.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Это время начинаний, поездок, переездов, смены работы, новой главы в жизни.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты не просто хочешь перемен &mdash; ты несёшься к ним, и хорошо, если на коне, а не на скейте.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Риск? Да! Но сейчас он оправдан, если ты не теряешь голову и действуешь с планом.</span></li>
</ul>
<p><span style="font-weight: 400;">Эта карта &mdash; как энергетик во флаконе. Ты готова свернуть горы. Главное &mdash; знать, куда их катить.</span></p>
<p><strong>&nbsp;Совет от Рыцаря Жезлов:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Будь смелой, но не безрассудной.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Делай шаг &mdash; но с картой маршрута в руках.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Решайся &mdash; потому что идеальное время не будет ждать.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">И да, бери с собой любимую помаду и уверенность. Оно тебе пригодится.</span></li>
</ul>
`, 
                reversed: `<p><span style="font-weight: 400;">Когда в раскладе появляется перевернутый Рыцарь Жезлов, это не про рывок к цели, а про то, как ты, размахивая флагом, несешься не туда. Или туда, но без карты, тормозов и идеи, зачем вообще едешь.</span></p>
<p><span style="font-weight: 400;">Эта карта про импульсивность, поспешность, необдуманные решения и энергию, которая разлетается во все стороны и не даёт толка.</span></p>
<p><strong>Что означает перевернутый Рыцарь Жезлов?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты можешь рваться в бой, но не понимаешь, за что и зачем.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Всё кажется срочным, важным, горящим, но в итоге &mdash; ты просто устаёшь от гонки без финиша.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты рискуешь ввязаться в авантюру или сомнительное предложение.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ощущение, что всё вокруг подозрительное, люди не внушают доверия, и ты не знаешь, кому верить.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты спешишь туда, где стоило бы остановиться и подумать.</span></li>
</ul>
<p><span style="font-weight: 400;">Перевернутый Рыцарь &mdash; это когда хочется бежать, но лучше сначала проверить, не сломаны ли каблуки.</span></p>
<p><strong>Будь начеку:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Поспешные решения приведут к головной боли, а не к успеху.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Кто-то может втянуть тебя в сомнительное дело, прикрываясь красивыми речами.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты сама можешь саботировать свой успех, хватаясь за десять дел сразу и ни одно не завершая.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Будь осторожна с новыми предложениями &mdash; особенно &laquo;горячими&raquo; и &laquo;супер выгодными&raquo;.</span></li>
</ul>
<p><span style="font-weight: 400;">&nbsp;Не всё золото, что сверкает. Иногда это просто фольга от шоколадки.</span></p>
<p><span style="font-weight: 400;">Рыцарь Жезлов перевернутый говорит: &laquo;Да, ты быстрая. Но иногда нужно знать, когда сбросить скорость, чтобы не влететь в стену&raquo;.&nbsp;</span></p>
`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Этот год будет таким же стремительным и огненным, как сам Рыцарь Жезлов. Будь готова к приключениям, внезапным решениям, ярким эмоциям и ощущению, будто мир &mdash; твой личный парк аттракционов!</span></p>
<p><strong>Что принесет тебе этот год?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Если прошлые годы казались тебе вялыми, этот будет полной противоположностью.&nbsp; Все будет меняться быстро &mdash; работа, планы, отношения, желания.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Будет много страсти, увлеченности, искр. Если ты в отношениях, вспыхнет вторая волна любви, появится желание вместе путешествовать, строить большие мечты.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">В карьере тоже все будет развиваться молниеносно: новая работа, перспективные проекты. Переезд ради карьеры? Почему бы и нет!</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><span style="font-weight: 400;">Важно: действуй быстро, но не теряй голову. Интуиция &mdash; твой лучший советчик. Год благоволит всем, кто готов рисковать и верит в свои идеи.</span></p>
<p><strong>Совет карты: </strong><span style="font-weight: 400;">будь дерзкой, но внимательной. Следи за своими целями, не разбрасывайся энергией впустую. И помни: твое сердце знает, куда тебе нужно мчаться.</span></p>
<p><span style="font-weight: 400;">Да, путь будет полон поворотов, но каждый поворот &mdash; это новая возможность. Ты научишься не бояться перемен и быть гибкой, как настоящий мастер импровизации.</span></p>`,
            },
            "ex": {
                normal: `<p><span style="font-weight: 400;">Когда-то он был настоящим искателем приключений. Все его мечты были полны драйва! Ты верила в его золотые горы, его гениальные планы...А он?&nbsp; Он мог только говорить, не дойдя до дела.&nbsp;</span></p>
<p><strong>Что происходит с ним сейчас?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Теперь его жизнь сплошной затянувшийся старт.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он мечется между начать бизнес и купить беговую дорожку&hellip; И в итоге выбирает снова лежать на диване и листать мемы.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Внутри &mdash; огонь. Снаружи &mdash; пепел.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он просто наблюдает за тем, как другие делают то, о чём он только мечтает.</span></li>
</ul>
<p><strong>Что его ждёт?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Постоянные внутренние качели: &laquo;Я всё могу!&raquo; до &laquo;Не сегодня&raquo;&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Проекты будут сгорать на старте. Новые связи будут заканчиваться так же быстро, как расплавляется мороженое в июльскую жару.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он будет чувствовать, что поезд уехал. И на перроне остался только он &mdash; с чемоданом планов и пустыми руками.</span></li>
</ul>
<p><span style="font-weight: 400;">И да, он будет думать о тебе. О той, кто была его искренним вдохновением &mdash; и чьё сияние он не сумел удержать.</span></p>
<p><span style="font-weight: 400;">А ты в это время &mdash; ураган свежего ветра, который сметает с пути всё старое и открывает новые горизонты! Ты не просто идешь вперед &mdash; ты танцуешь сквозь жизнь, яркая, дерзкая и неуловимая. И если бывший вдруг решит написать тебе унылое &laquo;Спишь?&raquo;. Ты, возможно, даже не заметишь. Ты будешь слишком занята &mdash; жить настоящую, яркую жизнь.</span></p>
`
            }
        }
    },
    "page-of-wands": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Если тебе выпал Паж Жезлов, то знай &mdash; жизнь вот-вот щёлкнет пальцами и скажет: &laquo;Время начинать!&raquo; Эта карта &mdash; как пуш-уведомление от Вселенной: &laquo;У тебя будет шанс, и он уже в пути!&raquo;.</span></p>
<p><strong>Что означает Паж Жезлов?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Скоро будет новость, и она тебя подбросит вверх как пробку от шампанского!</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Это может быть сообщение, предложение, шанс, важная весточка &mdash; то, чего ты давно ждала (или даже не ждала, но приятно удивишься).</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Это звоночек: вставай, заправляй постель, крась губы &mdash; сейчас что-то начнётся.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты в предвкушении &mdash; и не зря. Эта карта приносит вдохновение, огонёк и желание двигаться.</span></li>
</ul>
<p><span style="font-weight: 400;">Паж Жезлов &mdash; как подружка, которая прибегает к тебе с глазами-огонь и кричит: &laquo;Ты не поверишь, что случилось!&raquo;</span></p>
<p><strong>Что делать с этой картой?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Жди новостей &mdash; и будь готова схватить шанс за хвост!</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Начинай, даже если боишься. Лучше не идеально, чем никак.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Верь в себя &mdash; даже если это твой первый шаг.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Будь открытой и любопытной &mdash; тебе идут навстречу!</span></li>
</ul>
`, 
                reversed: `<p><span style="font-weight: 400;">&laquo;Хочу всё и сразу, но сама не знаю, что именно!&raquo;. </span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">Когда в раскладе появляется перевернутый Паж Жезлов, знай &mdash; твой внутренний огонь пытается вырваться наружу, но ты или тушишь его сама, или поджигаешь не то, что нужно. Это карта юношеского максимализма, когда энергия есть, а вот направления, плана или внутренней устойчивости &mdash; увы, не хватает.</span></p>
<p><strong>Что означает перевернутый Паж Жезлов?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты можешь чувствовать, что вот-вот что-то должно начаться&hellip; но всё тормозит.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Есть энергия, вдохновение, идеи &mdash; но ты распыляешься, не можешь выбрать одно и идти до конца.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты действуешь под импульсом эмоций, и в итоге сама не понимаешь, чего добиваешься.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Новости задерживаются, проекты стоят, вдохновение ускользает, а планы разваливаются.</span></li>
</ul>
<p><strong>Что можно сделать, чтобы изменить положение:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Успокой огонь. Прежде чем жать на газ &mdash; проверь, куда рулишь.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Наведи порядок в мыслях. Напиши, что ты действительно хочешь, а что просто внезапная &laquo;идея-секунда&raquo;.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не торопи события. Да, всё немного затянулось &mdash; но иногда задержка спасает от глупых решений.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Перераспределить энергию. Вместо 10 дел начни с одного &mdash; и доведи его до конца.</span></li>
</ul>
<p><strong>Итог: </strong><span style="font-weight: 400;">ты не потеряла путь &mdash; ты просто на обочине.</span></p>
`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Этот год для тебя &mdash; как первая страничка нового яркого блокнота, где хочется рисовать мечты цветными маркерами и писать списки желаний шрифтом с завитушками. Паж Жезлов приносит энергию старта, вдохновения и волшебных возможностей!</span></p>
<p><strong>Что ждет тебя в этом году?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Будут предложения, идеи, внезапные шансы, которые на первый взгляд покажутся авантюрой. Но именно за ними &mdash; твои самые важные открытия.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">В этом году любовь будет легкой, игривой и вдохновляющей.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Паж Жезлов открывает перед тобой целый мир новых возможностей в работе и учебе. Новый проект? Соглашайся! Повышение квалификации? Иди учиться! Идея о смене сферы деятельности? Прислушайся!</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Учись снова радоваться мелочам &mdash; ароматному кофе, первой весенней грозе, длинным посиделкам с подругами. Будь искренней, дерзкой, любознательной. Этот год &mdash; чтобы почувствовать себя живой.</span></li>
</ul>
<p><span style="font-weight: 400;">Год будет благоволить тем, кто не боится делать шаги в неизвестность. Особенно успешными станут творческие проекты, стартапы, все, где нужно вдохновение и страсть.</span></p>
<p><strong>Совет карты, </strong><span style="font-weight: 400;">не бойся быть наивной в самом лучшем смысле. Смотри на жизнь глазами девочки, которая верит в чудо &mdash; и оно обязательно произойдет.</span></p>`,
            },
            "ex": {
                normal: `<p><span style="font-weight: 400;">Когда-то он сверкал глазами и мечтал о великих свершениях. Мир казался ему огромной ареной для подвигов. Он был уверен: стоит только захотеть &mdash; и всё будет его.</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">Но годы прошли, а слова так и остались словами. Сегодня он стоит на месте, окружённый несбывшимися мечтами. Его энергия рассеялась в мелочах, а вера в себя растаяла, как утренний туман.</span></p>
<p><span style="font-weight: 400;">Он полон сожалений, но не находит сил сделать первый шаг. Каждая попытка что-то изменить заканчивается унылым &laquo;потом&raquo;. И только тоска по ушедшим возможностям стучит в сердце.</span></p>
<h3><strong>Что его ждёт?</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он будет снова и снова обещать себе начать заново. Новые идеи будут вспыхивать ярко и гаснуть, как бумажные фонарики на ветру.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он попытается что-то изменить: работу, город, окружение... Но внутренние страхи и неуверенность будут возвращать его на круги своя.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Планы будут срываться. Отношения &mdash; заканчиваться еще до начала. Возможности &mdash; ускользать сквозь пальцы.</span></li>
</ul>
<p><span style="font-weight: 400;">&nbsp;И в какой-то момент он поймет: он застрял. Между мечтой и реальностью. Между прошлым и будущим. Между тем, кем хотел быть, и тем, кем стал.</span> <span style="font-weight: 400;">Он будет вспоминать тебя. С теплом, с болью, с лёгкой завистью. Ты была тем человеком, который видел в нём больше, чем он сам. Ты верила в его мечты, даже тогда, когда он сам перестал в них верить. И теперь, каждый раз, когда его планы рушатся, он вспоминает о тебе как о символе того, что он потерял. Он хочет вернуть то время, вернуть ту веру... но знает, что это уже невозможно.</span></p>
<p><span style="font-weight: 400;">А ты в это время &mdash; как расцветающий сад. Ты не ждёшь. Ты не оглядываешься назад. Ты идёшь вперёд с искрами в глазах и весной в сердце. Ты влюбляешься в жизнь: в новые путешествия, новые встречи, новые книги, новые мечты. Ты строишь свой мир: кирпичик за кирпичиком, улыбка за улыбкой. Твоя дорога ведет вверх &mdash; туда, где свобода, вдохновение и счастье. Ты не та, кем была тогда. Ты стала собой &mdash; сильной, красивой, настоящей.</span></p>
`
            }
        }
    },
    "ten-of-wands": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Когда на сцену выходит Десятка Жезлов, можно сразу сказать: &laquo;Ты пахала &mdash; и ты это знаешь&raquo;. Ты тащишь, тянешь, подбираешь, доделываешь, берёшь на себя и своё, и чужое&hellip; И уже не просто устала &mdash; ты буквально согнулась под тяжестью ответственности.</span></p>
<p><span style="font-weight: 400;">Что говорит карта Десятка Жезлов?</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты сейчас в состоянии перегруза. Физически, ментально, эмоционально &mdash; ты на пределе.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Кажется, что вокруг только обязанности, дедлайны, чужие просьбы и груз ожиданий.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты боишься, что всё это никто не заметит, не оценит, а ты просто выгоришь.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты устала, но идёшь дальше &mdash; потому что знаешь, что надо.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Планов на будущее нет, потому что ты просто не успеваешь выдохнуть в настоящем.</span></li>
</ul>
<p><strong>Что делать?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Перестань пытаться все контролировать. Ты не обязана быть и проектом, и менеджером, и декорацией одновременно. Делегируй, откажись от лишнего.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Сделай паузу. Никто не умрёт, если ты выйдешь на час раньше с работы, выключишь телефон или скажешь &laquo;нет&raquo; чужой проблеме.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Признай свою силу. Ты проделала колоссальную работу &mdash; и тебе есть, чем гордиться. Даже если пока никто не аплодирует.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Сделай планы. Не живи только задачами. Пусть у тебя будет что-то, что тебя ждёт &mdash; не как обязанность, а как награда.</span></li>
</ul>
<p><span style="font-weight: 400;">Десятка Жезлов говорит: &laquo;Ты супер. Но супергерои тоже отдыхают.&raquo;&nbsp;</span></p>
`, 
                reversed: `<p><span style="font-weight: 400;">&laquo;Груз сброшен, можно дышать! Но сначала &mdash; отдых и масочка!&raquo;&nbsp;</span></p>
<p><span style="font-weight: 400;">Когда в раскладе появляется перевернутая Десятка Жезлов, это как долгожданное &laquo;фух&laquo; после марафона. Ты дотащила, доделала, дожала, и вот теперь время расправить плечи, снять каблуки и напомнить себе: &laquo;Я тоже человек, между прочим!&raquo;</span></p>
<p><strong>&nbsp;Что означает карта в перевернутом положении?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Тяжелый период подходит к концу &mdash; ты либо закрыла важный этап, либо наконец-то перестала тащить чужие проблемы, которые тебе туда никто не просил ставить.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Возможно, ты передала обязанности, сказала &laquo;нет&raquo;, делегировала задачи или просто поняла, что устала быть всесильной героиней без выходных.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Да, сил почти не осталось, но ты на пути к восстановлению.</span></li>
</ul>
<p><span style="font-weight: 400;">Сейчас важнейшая задача &mdash; не схватиться за новый груз, пока не перезагрузишься.</span></p>
<p><strong>&nbsp;Что советует карта?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Восстанови энергию. СПА, маска для лица, массаж, любимая книга &mdash; всё, что возвращает тебя к себе.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не бросайся снова в бурю. Отдохни по-настоящему, а не между делом.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не возвращай обратно то, от чего избавилась. Ты не обязана снова тащить чужой чемодан.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Устрой себе маленький праздник. Ты достойна награды &mdash; хотя бы в виде новых сережек и бранча с подружкой.</span></li>
</ul>
<p><strong>&nbsp;Итог:</strong><span style="font-weight: 400;"> ты сбросила груз. Теперь &mdash; время стать лёгкой.</span></p>
`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Этот год &mdash; год освобождения от лишнего. Представь, что ты шла по жизни с огромным рюкзаком за плечами &mdash; и вот сейчас пришло время его снять, расправить плечи и наконец-то дышать полной грудью.</span></p>
<p><strong>Что ждет тебя в этом году?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Десятка Жезлов показывает: в последнее время ты брала на себя слишком много. И в этом году тебе придется признаться самой себе: &laquo;Я не обязана тащить всё на себе</span><span style="font-weight: 400;">&raquo;.&nbsp; </span><span style="font-weight: 400;">Ты поймешь, где несешь чужие заботы, а где перегружаешь себя ожиданиями. И начнешь постепенно освобождаться &mdash; легко, по-женски, с заботой о себе.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Если в отношениях ты чувствовала, что отдаешь слишком много, этот год поможет навести порядок.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">На работе станет понятно: что стоит твоих усилий, а что нет. Если ты вкладываешься в проекты, которые не приносят радости и результатов &mdash; значит, пора подумать о переменах. Этот год научит тебя говорить: &laquo;Я выбираю то, что важно для меня</span><span style="font-weight: 400;">&raquo;. </span><span style="font-weight: 400;">&nbsp;А там, где ты сосредоточишь свою энергию, тебя ждут: повышение, новые финансовые возможности, проекты, которые действительно зажигают душу.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Самый главный урок года: беречь себя. Переутомление &mdash; больше не модно. В моде &mdash; забота о себе, отдых, правильное распределение сил.</span></li>
</ul>
<p><strong>Совет карты:</strong><span style="font-weight: 400;"> ты не обязана всегда быть продуктивной. Освобождай свою жизнь от лишнего &mdash; людей, дел, переживаний. Ты имеешь право отдыхать и кайфовать от жизни. </span></p>`,
            },
            "ex": {
                normal: `<p>Представь, он тащит на себе огромную сумку, в которой всё: неудачные решения, токсичные люди, незаконченные дела. Будущее его &mdash; это бесконечная беготня, как хомяк в колесе: дел много, толку ноль. Кажется, будто успех вот-вот, но споткнулся о свой же&nbsp;</p>
<p dir="ltr">Что ждёт его в будущем?&nbsp;</p>
<ul>
<li dir="ltr">
<p dir="ltr">Он будет истощен, обижен на весь мир и думать: За что мне это всё? На душе &mdash; тяжесть. Никакой легкости, спонтанности, радости. Ему будет казаться, что он вечно кому-то что-то должен: начальнику, друзьям, семье.</p>
</li>
<li dir="ltr">
<p dir="ltr">Будет много людей, которые будут требовать от него внимания и помощи, но никто не даст ему поддержку в ответ. Новые отношения, если появятся, принесут не облегчение, а дополнительную головную боль. Постоянные скандалы, недопонимания, чувство одиночества даже в паре.</p>
</li>
<li dir="ltr">
<p dir="ltr">Он поймет, что игра в крутого закончилась полным выгоранием. В какой-то момент ему придётся либо всё бросить (уйти с работы, разорвать отношения, уйти в переосмысление жизни), либо продолжать быть этим уставшим мальчиком с двадцатью сумками.</p>
</li>
</ul>
<p>Совет для тебя: любуйся его судьбой с безопасного расстояния.</p>`
            }
        }
    },
    "nine-of-wands": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Если в твоём раскладе появилась Девятка Жезлов, то знай: ты прошла через огонь, воду, дедлайны и токсичные чаты, но всё ещё стоишь &mdash; с высоко поднятой головой.</span></p>
<p><span style="font-weight: 400;">&nbsp;&laquo;Я на пределе, но я не сдамся. А ну-ка, кто еще на меня?&raquo;</span></p>
<p><span style="font-weight: 400;">Что означает Девятка Жезлов в прямом положении?</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты на страже своих границ, интересов и личной крепости. Никто не проскочит без проверки.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Твоя тревожность и осторожность &mdash; результат прошлых обид и перегрузов.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты держишься, даже если морально вымотана. Защищаешь своё &mdash; и правильно делаешь.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Но за этой стойкостью &mdash; усталость, которая просит признания и восстановления.</span></li>
</ul>
<p><span style="font-weight: 400;">Это как охранять замок после битвы: враги отступили, но ты всё ещё с факелом в руке и не веришь, что можно расслабиться.</span></p>
<p><strong>Совет от Девятки Жезлов:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">&nbsp;Признай: ты сильная, но уставшая. Дай себе отдых хотя бы эмоционально.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Подумай: всё ли, что ты защищаешь, действительно стоит твоей энергии?</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Позволь себе верить, что дальше может быть лучше &mdash; не всё в жизни повторяется.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Отпускай старые установки &mdash; они охраняют прошлое, но мешают будущему.</span></li>
</ul>
<p><span style="font-weight: 400;">Ты уже выстояла. Осталось чуть-чуть &mdash; и ты сможешь не просто выживать, а дышать полной грудью.</span></p>
<p><span style="font-weight: 400;">&nbsp;Девятка Жезлов говорит: &laquo;Ты не сломалась. Ты закалилась. А теперь &mdash; доверься миру и иди дальше.&raquo;&nbsp;</span></p>
`, 
                reversed: `<p><span style="font-weight: 400;">&laquo;Я держусь из последних сил&hellip; но зачем?&raquo;&nbsp;</span></p>
<p><span style="font-weight: 400;">Если тебе выпала перевернутая Девятка Жезлов, значит, ты уже так долго держишь оборону, что сама не помнишь, кого защищаешь и зачем. Всё, что раньше казалось важным, блекнет и осыпается, как листья, падающие с посохов.</span></p>
<p><strong>&nbsp;Что означает эта карта в таком положении?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты в состоянии внутреннего кризиса. Всё кажется шатким, размытым, непонятным.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты продолжаешь защищать свои границы, но сил уже нет, и, возможно, они никому больше и не нужны.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Твои старые убеждения теряют смысл, но ты всё ещё держишься за них из привычки или страха.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты чувствуешь себя одиноко, потеряно, как будто мир стал чужим.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты прощаешься с чем-то значимым &mdash; это может быть мечта, человек, роль, которую ты играла.</span></li>
</ul>
<p><span style="font-weight: 400;">Перевернутая Девятка &mdash; это не просто &laquo;я устала&raquo;, это &laquo;я устала держаться за то, что больше не моё&raquo;.</span></p>
<p><strong>Что поможет:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Признай, что ты выросла. То, что раньше грело &mdash; теперь сковывает. И это нормально.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не бойся прощаться. Печально? Конечно. Но это открывает путь к новой свободе.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Поговори с собой по-честному. Что ты держишь? И для чего?</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Пусти. Не всё, что ты потеряешь &mdash; это утрата. Иногда это освобождение.</span></li>
</ul>
<p><span style="font-weight: 400;">Иногда настоящая сила &mdash; не в том, чтобы держаться, а в том, чтобы вовремя отпустить.&nbsp;</span></p>
`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Если этот год был бы образом, то это &mdash; красивая амазонка в золотых доспехах, которая пережила много битв, но всё равно стоит гордо, держа свой меч. Девятка Жезлов говорит: Ты уже многое прошла. И этот год &mdash; момент, когда сила внутри тебя засверкает ярче прежнего.</span></p>
<p><strong>Что ждет тебя в этом году?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Тема года &mdash; самоуважение. Ты поймешь, кто достоин быть в твоей жизни, а кто нет. Границы будут твоим супероружием: четкие и незыблемые. Ты научишься говорить &laquo;нет</span><span style="font-weight: 400;">&raquo;</span><span style="font-weight: 400;"> без угрызений совести. И это будет лучшим подарком самой себе.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">В любви Девятка Жезлов говорит: ты уже знаешь цену своим чувствам. Год не про сказочные иллюзии, а про настоящее: тех, кто рядом ради выгоды, ты увидишь насквозь; тех, кто по-настоящему заботится, ты обнимешь обеими руками. В отношениях возможны проверочные ситуации, но каждая такая проверка &mdash; путь к укреплению союза или освобождению от ненужных связей.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Там, где раньше хотелось сдаться, ты вдруг найдешь в себе силы идти до конца. Да, будут вызовы. Да, придется работать над собой. Но каждый пройденный этап будет поднимать тебя на новый уровень.</span></li>
</ul>
<p><strong>О чем предупреждает карта</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Иногда из-за накопленной усталости может появиться подозрительность или излишняя защита. Помни: Не все хотят тебе зла.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Важно оставаться открытой к добрым людям и новым возможностям. Не превращайся в крепость без ворот. Будь сильной, но не ожесточенной.</span></li>
</ul>
<p><span style="font-weight: 400;">Этот год научит тебя быть своим главным рыцарем. Ты научишься ценить себя как никогда раньше. И именно это притянет в твою жизнь ещё больше тепла, успеха и любви.</span></p>`,
            },
            "ex": {
                normal: `<p><span style="font-weight: 400;">Его будущее &mdash;</span> <span style="font-weight: 400;">это</span> <span style="font-weight: 400;">цикличность бед: как только он закроет одну проблему (долги, отношения, карьерный кризис), следующая тут как тут! Битвы будут бесконечными. Внутри него постоянная тревога. Он начнёт всех подозревать, закрываться от людей, может даже стать тем самым нудным нытиком на вечеринках. </span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">Любовная жизнь?</span> <span style="font-weight: 400;">Ой, тут будет как в комедийном хорроре: он будет строить стены такие высокие, что ни одна девушка туда даже взглядом не достанет. И даже если кто-то к нему приблизится, он первым убежит.&nbsp;</span></p>
<p><span style="font-weight: 400;">К чему всё это приведёт? Он построит себе маленький замок из подозрений, страхов и былых обид.&nbsp; Девятка</span> <span style="font-weight: 400;">жезлов &mdash; это про упорство, да. Но иногда упорство превращается в упрямство и одиночество. Он так старательно защищает себя... что в итоге защищается даже от счастья.</span></p>
<p><span style="font-weight: 400;">Совет для тебя:</span> <span style="font-weight: 400;">наблюдать за этим можно только издалека, с пивом и чипсами. Ты &mdash; солнышко, которое не обязано светить в его серые замки страха. Пусть он сам варится в своём супчике тревог, а ты &mdash; на танцпол счастья!</span></p>
`
            }
        }
    },
    "eight-of-wands": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">&laquo;Жизнь ускоряется? Пристегни ремни, звезда!&raquo;&nbsp;</span></p>
<p><span style="font-weight: 400;">Когда в раскладе появляется Восьмерка Жезлов, это значит одно: всё полетело вперед на бешеной скорости, и теперь твоя задача &mdash; не паниковать, а включиться по полной!</span></p>
<p><strong>Что означает Восьмёрка Жезлов в прямом положении?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">События мчатся как сумасшедшие &mdash; одно за другим, без паузы на кофе.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Кажется, ты ещё не закончила разбираться с одним вопросом, как уже прилетело три новых.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Да, ты в вихре перемен &mdash; но это не шторм, а форсаж, который выведет тебя в новое состояние.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты на грани важного рывка, где всё зависит от твоей скорости реакции и смелости. И знаешь что? У тебя получится &mdash; если не будешь тормозить и бояться.</span></li>
</ul>
<p><span style="font-weight: 400;">Это карта про момент, когда Вселенная нажала кнопку &laquo;ускорить&laquo; &mdash; и ты летишь навстречу возможностям.</span></p>
<p><span style="font-weight: 400;">&nbsp;Совет карты:</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Действуй! Не жди идеального момента &mdash; он уже.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не пытайся контролировать всё. Просто будь гибкой и уверенной.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Доверься интуиции. Именно она поможет в буре событий выбрать правильный путь.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Будь смелой. Именно сейчас нужна не осторожность, а уверенность.</span></li>
</ul>
`, 
                reversed: `<p><span style="font-weight: 400;">Когда выпадает перевёрнутая Восьмёрка Жезлов, можно выдохнуть &mdash; но не от радости. Все стремительные перемены, которые вот-вот должны были случиться, внезапно встали на паузу.&nbsp;</span></p>
<p><strong>Что означает эта карта в перевернутом положении?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты внезапно оказалась в ступоре. Всё, что раньше двигалось быстро, теперь затормозилось.То ли сроки срываются, то ли люди тормозят, то ли ты сама вдруг потеряла запал.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты будто идешь против ветра &mdash; и он дует не просто сильно, а прямо в лицо.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Возможен откат в делах, разочарование в результатах или ощущение, что вся энергия ушла в никуда.</span></li>
</ul>
<p><strong>Совет карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не паникуй &mdash; это не конец, это остановка. Иногда она нужна, чтобы не попасть в ещё больший завал.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Проверь маршрут. Уверена, что цель всё ещё твоя? А ресурс в тебя уходит туда, куда надо?</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не суетись. Сейчас не время &laquo;бежать, куда глаза глядят&raquo;. Сейчас время начать двигаться к новым целям.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">&nbsp;Работай с тем, что есть. Да, не идеальные условия. Зато отличная возможность научиться терпению и стратегии.</span></li>
</ul>
<p><span style="font-weight: 400;">Сделай паузу. Перепроверь цели. Потом &mdash; снова в путь, но уже с новой силой и точным направлением. </span></p>
`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Восьмерка Жезлов &mdash; это знак того, что в этом году все события будут развиваться быстро, легко и ярко!</span></p>
<p><strong>Что ждет тебя в этом году?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Готовься: планировать наперед будет сложновато, потому что жизнь приготовила для тебя настоящий водоворот событий!</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Возможности будут сыпаться как из рога изобилия: встречи, знакомства, идеи, предложения, путешествия.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Если ты мечтала о новой любви &mdash; будь готова к встрече, которая произойдет неожиданно. Если ты уже в отношениях &mdash; ждите быстрый переход на новый уровень: совместное проживание, помолвка, новые романтические эмоции. Сердце будет биться быстрее, и это будет прекрасно!</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Идеи, которые ты вынашивала, вдруг начнут приносить плоды. Кто-то заметит твой талант, предложит выгодное сотрудничество или проект мечты. В карьере будет ощущение, что тебя подхватил попутный ветер, и осталось только правильно управлять парусами.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Если ты мечтала отправиться куда-то &mdash; собирай чемодан! Эта карта &mdash; одна из самых сильных в Таро на перемещения и дороги. Даже если сейчас кажется, что никуда не поедешь &mdash; будет шанс совершить незапланированное, но незабываемое путешествие.</span></li>
</ul>
<p><strong>О чем предупреждает карта</strong></p>
<p><span style="font-weight: 400;">Когда всё движется так быстро, есть риск не успевать осмысливать происходящее. Не забывай: иногда нужно остановиться, вдохнуть полной грудью и спросить себя: &laquo;А мне это точно нужно?</span><span style="font-weight: 400;">&raquo;. </span><span style="font-weight: 400;">Не соглашайся на всё подряд &mdash; выбирай только то, что по-настоящему зажигает твое сердце.</span></p>`,
            },
            "ex": {
                normal: `<p><span style="font-weight: 400;">Представь, твой бывший решил, что теперь-то он возьмёт жизнь в свои руки. Прыгает в ракету без инструкций, без ремней безопасности, без карты маршрута. И полетел!</span> <span style="font-weight: 400;">Только ракета летит в сторону ближайшей стены. На полном ходу.</span></p>
<p><span style="font-weight: 400;">События в его жизни несутся с бешеной скоростью: куча возможностей, звонков, предложений, проблем и тупиков, которые будут валиться одно за другим. Хотел драйва? Получай Формулу-1 без тормозов!</span></p>
<p><span style="font-weight: 400;">Сначала он будет получать кайф, а потом начнет паниковать. Он будет не успевать за собственной жизнью. Работа? Без конца! Женщина? Не одна. Деньги? Получай. Но это обилие всего его и погубит. Отправит новой пассии рабочий отчёт, клиенту напишет &laquo;В душ и без меня?&raquo;. Скорость бешеная, планов море, а контроля &mdash; ноль. Результат? Скоро он выгорит и от возможностей останутся лишь обломки последствий, которые он не в силах разобрать.&nbsp;</span></p>
<p><span style="font-weight: 400;">Совет для тебя: не беги за его ракетой. Попытаешься &mdash; закружишься и вылетешь на встречную полосу. </span></p>
`
            }
        }
    },
    "seven-of-wands": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Это карта бойца, который хоть и уставший, но сдаваться не собирается. Да, тебе бросили вызов. Но ты не просто выдержишь &mdash; ты покажешь, кто тут на самом деле босс.</span></p>
<p><strong>Что означает Семерка Жезлов в прямом положении?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты находишься в ситуации, где нужно отстаивать свои позиции.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Это не просто &laquo;непростой период&raquo; &mdash; это прям настоящая схватка за своё.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Могут быть конфликты, завистники, конкуренты, или просто обстоятельства, которые мешают двигаться вперёд.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты как будто на вершине холма, а внизу кто-то всё время пытается тебя столкнуть.</span></li>
</ul>
<p><span style="font-weight: 400;">&nbsp;Но главное &mdash; ты уже наверху. Осталось только удержаться. И ты сможешь.</span></p>
<p><strong>&nbsp;Совет карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не сдавайся. Даже если очень хочется. Ты почти у цели.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">У тебя есть всё, чтобы отбить любой удар. Ты сильнее, чем ты думаешь.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не оправдывайся. Просто делай своё и уверенно держи позицию.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Пусть они говорят. Ты не обязана никому ничего доказывать &mdash; твои действия говорят за тебя.</span></li>
</ul>
<p><span style="font-weight: 400;">Никто не обещал, что будет легко. Но ты не из тех, кто разворачивается и уходит. Ты остаешься &mdash; и побеждаешь.</span></p>
`, 
                reversed: `<p><span style="font-weight: 400;">Если в твоём раскладе появилась перевернутая Семерка Жезлов, значит&hellip; ты либо устала бороться, либо вообще не уверена, стоит ли за что-то сражаться. А может, ты просто хочешь закрыть глаза, укутаться в плед и сделать вид, что всё само рассосется.</span></p>
<p><span style="font-weight: 400;">Спойлер: не рассосется. Но ты точно справишься &mdash; если перестанешь убегать.</span></p>
<p><strong>&nbsp;Что говорит карта в таком положении?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты сейчас на спаде мотивации.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Проблемы навалились, а ты смотришь на них с выражением &laquo;ну, серьёзно?.. ещё и это?!&raquo;.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Вместо того чтобы решать &mdash; ты избегаешь: отвлекаешься, перекладываешь ответственность, прокрастинируешь.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Есть ощущение, что ты проигрываешь ещё до начала сражения, потому что просто не веришь в себя.</span></li>
</ul>
<p><strong>Что делать:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Признай: да, тебе страшно. Это нормально. Но теперь пора развернуться к страху лицом.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Разбери хаос. Что именно тебя пугает? Где ты теряешь опору? Назови это &mdash; и станет легче.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Делай хоть маленькие шаги. Не надо прыгать с флагом на баррикаду. Начни с возвращения контроля.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Напомни себе: ты уже бывала в похожих ситуациях &mdash; и выкарабкивалась. А значит, сможешь снова.</span></li>
</ul>
<p><span style="font-weight: 400;">Надень корону, поправь плечи, открой глаза &mdash; и посмотри в лицо задачам. Они меньше, чем кажутся. А ты &mdash; гораздо больше.&nbsp;</span></p>
`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Семерка Жезлов &mdash; это история про твою силу, про умение отстаивать свои мечты, цели и ценности, даже если кто-то будет пытаться тебя сдвинуть.</span></p>
<p><strong>Что ждет тебя в этом году?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Этот год бросит тебе вызов: ты чего-то добилась &mdash; теперь будь готова это отстоять. Будут ситуации, где придется показать характер &mdash; на работе, в семье, в личных отношениях или в творчестве.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Семерка Жезлов говорит: ты уже выше многих преград. Ты стоишь на вершине, а те, кто внизу, могут лишь пытаться достать тебя. Но ты сильнее. Твои ценности, твои мечты, твои цели &mdash; важнее всего. Этот год научит тебя не сомневаться в себе под давлением окружающих.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">&nbsp;Отношения, дружба, семья &mdash; везде будет важно установить здоровые границы. Если кто-то будет требовать слишком многого или пытаться нарушить твой комфорт, ты научишься мягко, но твердо говорить: &laquo;Я тебя люблю. Но мои границы &mdash; это моя забота о себе</span><span style="font-weight: 400;">&raquo;.&nbsp;</span></li>
</ul>
<p><strong>О чем предупреждает карта</strong><strong><br /></strong><span style="font-weight: 400;">Не нужно сражаться ради самой борьбы. Выбирай свои битвы мудро. Не обязательно доказывать свою правоту каждому. Иногда лучше просто улыбнуться и идти дальше.</span></p>
<p><span style="font-weight: 400;">Это будет год, когда твое сердце станет еще более смелым, а твоя душа &mdash; еще более мудрой.</span></p>
<p><strong>Совет карты</strong><strong><br /></strong><span style="font-weight: 400;">Доверяй себе. Береги свои мечты. И помни: только ты решаешь, кто может быть в твоем королевстве.&nbsp;</span></p>`,
            },
            "ex": {
                normal: `<p><span style="font-weight: 400;">Будет ощущение, что он наконец-то чего-то добился (новая работа, признание, новая девушка?), но вместе с этим приходит целый отряд проблем: конкуренты, завистники и личные страхи. И ему придётся отбиваться от всего этого в одиночку. Держать позицию легко... пока по тебе не стреляют из всех сторон. А потом он начнёт видеть врагов даже там, где их нет. Будет защищаться не только от реальных атак, но и от собственных страхов и комплексов. Его ждёт постоянная борьба за авторитет, бесконечные попытки доказать, как он крут и безумная жажда признания &mdash; любой ценой. В отношениях вместо доверия &mdash; борьба за доминирование. Новая девушка быстро устанет от того, что он вечно в режиме защиты и видит в ней скорее угрозу своей свободе, чем союзника. Его бойцовский настрой доведет до того, что люди начнут реально уходить из его жизни. Друзья устанут от вечной обороны. Коллеги начнут ставить палки в колёса. Отношения разрушатся из-за недоверия и конфликтов.</span></p>
<p><strong>Совет тебе:</strong><span style="font-weight: 400;"> не вмешивайся в эту битву. Ты &mdash; королева своего мирного королевства. Пусть он строит свои баррикады и сам же с ними разбирается. Твои заботы &mdash; это не спасение упрямых рыцарей.</span></p>`
            }
        }
    },
    "six-of-wands": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">&laquo;Аплодисменты, овации и фанфары &mdash; ты сделала это!&raquo;&nbsp;</span></p>
<p><span style="font-weight: 400;">Если тебе выпала Шестерка Жезлов, то это тот момент, когда ты уже не просто идёшь к цели &mdash; ты въезжаешь к ней на белом коне в сиянии славы и уверенности. Всё, ради чего ты вкладывалась, терпела, сражалась с ленью, тревогами и внешними обстоятельствами &mdash; теперь приносит тебе плоды. И какие! Это не просто успех. Это заслуженная победа!</span></p>
<p><strong>Что означает Шестерка Жезлов в раскладе?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты выходишь на свет после сложного этапа &mdash; и этот свет сияет именно для тебя.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты победила. Может, не всех &mdash; но точно самое главное: свои страхи, сомнения и &laquo;неуверенность в себе&raquo;.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Теперь ты видишь: всё было не зря. Вся эта борьба, усилия и бессонные ночи &mdash; теперь это медали на твоей груди.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Люди тебя замечают, уважают, гордятся. А главное &mdash; ты сама собой гордишься.</span></li>
</ul>
<p><span style="font-weight: 400;">Это карта, когда ты не просто выжила &mdash; ты поднялась на пьедестал.</span></p>
<p><strong>Совет карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не скромничай. Это твоя победа. Ты ее заслужила.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Позволь себе быть гордой собой &mdash; не только внутри, но и внешне.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Используй этот успех как трамплин &mdash; сейчас тебе многое по плечу.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Поделись радостью. Кто-то рядом вдохновится твоим примером.</span></li>
</ul>
`, 
                reversed: `<p><span style="font-weight: 400;">Да, ты боролась. Да, ты старалась. Но результат, мягко говоря, не радует.&nbsp;</span></p>
<p><strong>Что означает перевернутая Шестерка Жезлов?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты на финише, но ощущение, будто не победила, а просто доползла.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты получаешь результат, но он &mdash; не тот, на который надеялась.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Разочарование, обида, даже горечь: вроде бы было близко&hellip; а вышло как всегда.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Возможно, ты переоценила свои силы, взяла на себя слишком много или слишком рассчитывала на успех.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Иногда это не просто разочарование &mdash; а прям крах ожиданий и потеря авторитета. Особенно если кто-то из близких или коллег вдруг &laquo;переобулся&raquo; и вместо поддержки вставил палки в колёса.</span></li>
</ul>
<p><strong>Совет карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">&nbsp;Оцени ситуацию трезво. Не накручивай. Всё не идеально &mdash; но и не провал.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Признай: да, обидно. Но жизнь не закончилась &mdash; просто будет новый раунд.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не замыкайся &mdash; общайся, ищи поддержку. Ты не обязана справляться одна.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Проверь окружение. Если кто-то играет не за тебя &mdash; пора его заменить.</span></li>
</ul>
<p><strong>Итог:</strong><span style="font-weight: 400;"> да, сейчас ты не на пьедестале. Но ты всё ещё в игре.</span></p>
<p><span style="font-weight: 400;">Неудача &mdash; это не точка. Это запятая. И ты решаешь, что будет дальше.</span></p>
`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Если бы у этого года было название, оно бы звучало как Год твоей личной победы! Шестерка Жезлов &mdash; это аплодисменты, овации, заслуженное признание и счастливые улыбки.</span></p>
<p><strong>Что ждет тебя в этом году?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Твои усилия наконец-то дадут о себе знать &mdash; и не тихонечко, а громко и красиво! Ты окажешься на пьедестале почета &mdash; в прямом или переносном смысле. Будь то повышение, окончание проекта, запуск бизнеса, блог, творчество &mdash; люди увидят твой талант и оценят его. Помни, ты не получаешь признание случайно. Ты пахала, старалась, шла к этому &mdash; и вот теперь наслаждайся заслуженной наградой! Этот год о том, чтобы научиться принимать похвалу, а не отмахиваться скромно.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">В работе будет ощущение, что ты наконец-то на коне. Будут успехи в проектах, выгодные предложения, поддержка руководства или коллег. Твои усилия заметят, а твой авторитет заметно вырастет.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Люди будут тебе аплодировать, а кто-то тихо восхищаться за спиной. Ты будешь источником вдохновения для других. И рядом окажутся те, кто искренне за тебя радуется.</span></li>
</ul>
<p><strong>О чем предупреждает карта</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Единственная ловушка &mdash; это самодовольство или ожидание вечных оваций.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Шестерка Жезлов говорит: победа &mdash; это этап, а не финал.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не застревай на вершине, а строй новые мечты.</span></li>
</ul>
<p><strong>Итог года</strong><strong><br /></strong><span style="font-weight: 400;">В конце года ты будешь улыбаться себе в зеркало и думать: &laquo;Я справилась. Я смогла. Я выросла</span><span style="font-weight: 400;">&raquo;.</span></p>`,
            },
            "ex": {
                normal: `<p><span style="font-weight: 400;">Когда-то он ощущал себя триумфатором: на белом коне, в лавровом венке, в лучах фанфар и оваций. Он шел по жизни, думая, что все победы &mdash; навсегда, а успех приклеился к нему супер-клеем. Но времена изменились. Он пытается самоутверждаться старыми заслугами. Но всех это давно перестало волновать.</span></p>
<h3><strong>Что его ждёт:</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Неспособность строить новое: каждый его проект будет напоминать жалкую попытку воссоздать былой успех. </span><span style="font-weight: 400;"><br /><br /></span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Упущенные возможности: пока он смотрит в зеркало заднего вида, жизнь вокруг идёт вперёд. Новые шансы пройдут мимо него, а он и не заметит.</span><span style="font-weight: 400;"><br /><br /></span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Фантомная публика: он будет мечтать о признании и славе, которых уже не будет. Аплодисменты &mdash; только в его воображении.</span></li>
</ul>
<p><span style="font-weight: 400;">А ты? Твоя жизнь &mdash; как свежий марафон новых побед. Ты не застряла в старых историях, потому что ты идешь вперед: с новыми целями, новыми мечтами и настоящим уважением к себе. Ты празднуешь новые успехи, а не вспоминаешь старые. Ты строишь будущее, в котором победы будут гораздо ярче, чем любое старое славное прошлое.</span></p>
<p><span style="font-weight: 400;">И знаешь, кто победил в итоге? Конечно же ты. </span></p>`
            }
        }
    },
    "five-of-wands": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Если в раскладе выпала Пятерка Жезлов в прямом положении, то жизнь сейчас &mdash; не прогулка по розовому саду, а скорее переговоры на повышенных тонах. Но не пугайся! Это не разрушение &mdash; это рост через действие, вызов, конкурентную искру и... может, пару острых слов.</span></p>
<p><strong>Ключевое значение карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Конфликт, но с потенциалом роста. Это не скандал ради скандала, а противостояние, которое помогает выявить истину.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Конкуренция. Кто-то рядом хочет того же, что и ты. И ты чувствуешь: либо я включаюсь, либо сижу на обочине.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">&nbsp;Разногласия. Может быть шумно, но это шанс прояснить, кто ты, чего хочешь, и как отстоять свое.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Работа с усилием. Победа &mdash; не гарантирована, но очень даже реальна, если поднажать.</span></li>
</ul>
<p><span style="font-weight: 400;">Карта говорит: ты в самой гуще событий. Сейчас не время пить чай и наблюдать со стороны &mdash; пора в бой.</span></p>
<p><strong>Совет карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Прими вызов. Это твой момент показать, что ты не просто &laquo;милая девочка&raquo;, а та, кто знает, чего стоит.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Слушай критику. Даже если сказано резко &mdash; в этом может быть золото.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Работай с огоньком. Победа не упадёт с неба &mdash; её нужно взять.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не избегай спора. Иногда спор &mdash; это способ выстроить честный диалог.</span></li>
</ul>
<p><span style="font-weight: 400;">&laquo;Сейчас шумно, активно, не всегда комфортно &mdash; но ты на пути к росту. Конкуренция закаляет. И ты вполне способна выйти победительницей.&raquo;</span></p>
`, 
                reversed: `<p><span style="font-weight: 400;">Если тебе выпала Пятерка Жезлов в перевернутом положении, знай: какой-то конфликт вышел из-под контроля и превратился в полномасштабную битву без правил. Тут уже не про конструктив, компромиссы и &laquo;в спорах рождается истина&raquo;. Это про &laquo;я права потому что кричу громче!&raquo;, обиды с драмой, взаимное недопонимание, и ощущение, что все стали внезапно немножко токсичными.</span></p>
<p><strong>Общее значение карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Переговоры, дискуссии и споры скатились в хаос. Все кричат, никто не слушает.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Отсутствие командности. Если это работа или группа &mdash; каждый тянет одеяло на себя, и в итоге ничего не движется.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Конфликты стали слишком личными. Не важно, кто прав &mdash; важно, кто кого перекричит или укусит больнее.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты (или оппонент) не готовы к диалогу. Все разговоры &mdash; в стену. Всё ведёт к тупику.</span></li>
</ul>
<p><span style="font-weight: 400;">Совет карты:</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Стоп, дыхание, пауза. Не стоит втягиваться в скандалы, где нет ни смысла, ни цели.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не отвечай агрессией на агрессию. Ты не обязана &laquo;переорать&laquo;. Твоя сила &mdash; в осознанности.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Проверь, не тратишь ли ты энергию на то, что уже не стоит того. Не каждая война требует твоего участия.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Обрати внимание на свою мотивацию. Ты действительно борешься за ценное &mdash; или просто из принципа?</span></li>
</ul>
<p><span style="font-weight: 400;">Перевернутая Пятерка Жезлов говорит:</span></p>
<p><span style="font-weight: 400;">&laquo;Ты в эпицентре бурного конфликта &mdash; но только ты решаешь, подлить масла или выйти из огня с короной на голове.&raquo;</span></p>
`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Этот год будет для тебя временем роста через движение. Пятерка Жезлов &mdash; это не про скуку и спокойствие. Это про амбиции, про борьбу за место под солнцем, про поиск своего уникального пути.</span></p>
<p><strong>Что ждет тебя в этом году?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">В этом году придется активно бороться за свои желания. Конкуренция, споры, обсуждения &mdash; все это будет частью пути. Но не пугайся! Это будет дружеская конкуренция, а не вражда. Ты будешь встречать людей, которые своим примером или даже маленькими вызовами будут подталкивать тебя становиться сильнее и лучше.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Рост через вызовы</span><strong>. </strong><span style="font-weight: 400;">Каждая &laquo;битва</span><span style="font-weight: 400;">&raquo; </span><span style="font-weight: 400;">&nbsp;&mdash; это возможность вырасти. Проекты, карьера, личные инициативы &mdash; все это потребует от тебя ясности, стойкости и креативности. Год даст тебе шанс отточить свои навыки, показать свой талант, обрести ту уверенность, которой иногда так не хватает.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не удивляйся, если рядом окажутся люди, которые будут с тобой спорить, подталкивать к принятию решений, бросать маленькие вызовы. Они не враги! Они &mdash; тренажеры для твоего характера и новые союзники в будущем.</span></li>
</ul>
<p><strong>О чем предупреждает карта</strong><strong><br /></strong><span style="font-weight: 400;">Единственный риск &mdash; это растерять энергию на лишние споры или пустые выяснения отношений. Помни: не каждая битва стоит твоего времени. Выбирай свои &laquo;сражения</span><span style="font-weight: 400;">&raquo;</span><span style="font-weight: 400;"> мудро.</span></p>`,
            },
            "ex": {
                normal: `<p><span style="font-weight: 400;">Его жизнь теперь &mdash; это бесконечная борьба. Но не за высокие цели, а за элементарные вещи: внимание, признание, нормальные отношения. Представь арену гладиаторов, только без зрителей и без награды. И бывший там &mdash; один. Борется с тенью. Спотыкается о собственные страхи. Падает. Встает. И снова никого это не интересует.</span></p>
<p><span style="font-weight: 400;">Он все время дерется с коллегами за проекты, которые не дают результата. С друзьями за уважение, которого не заслуживает. С собой за кусочек самооценки, которая всё падает и падает.</span><span style="font-weight: 400;"><br /><br /></span></p>
<h3><strong>Что его ждёт:</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Постоянные конфликты: вместо решения проблем &mdash; вечные выяснения отношений и битвы на ровном месте.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Отсутствие поддержки: каждый будет сам за себя, а ему никто не подаст руку.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Эмоциональная усталость: он будет сражаться до последнего только чтобы понять, что это всё было зря.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ошибочные приоритеты: сражаясь за крошки прошлого, он упустит все шансы построить нормальное будущее.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Синдром обиженного лидера: желание всех побеждать в итоге оставит его без команды.</span></li>
</ul>
<p><span style="font-weight: 400;">А ты? Ты двигаешься по жизни легко, как ветер в волосах. Ты знаешь, где твоя сила. И теперь умеешь выбирать людей, которые не воюют с тобой, а идут рядом.</span></p>`
            }
        }
    },
    "four-of-wands": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Если тебе выпала Четверка Жезлов, то, поздравляем, вселенная буквально подаёт тебе бокал шампанского и говорит:</span></p>
<p><span style="font-weight: 400;">&laquo;Ты умничка! Можно немного расслабиться &mdash; ты заслужила.&raquo;</span></p>
<p><span style="font-weight: 400;">Это карта радости, гармонии, стабильности и праздника. Причём праздник может быть и внутренний (ты наконец-то в мире с собой), и вполне буквальный &mdash; от завершения важного этапа до свадьбы, новоселья или классной вечеринки с близкими.</span></p>
<p><strong>Общее значение карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты пришла к какому-то важному результату. Причём честным путём: трудилась, вкладывалась &mdash; и теперь получаешь.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Внутренний баланс. Тот редкий случай, когда ты не борешься, не спасешь мир, не жонглируешь делами &mdash; а просто живешь и радуешься тому, что уже есть.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Поддержка и уют. Вокруг тебя &mdash; твои люди. Те, кто не просто рядом, а по-настоящему с тобой.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Пауза на счастье. Это не конец пути, но очень тёплая остановка, чтобы передохнуть и насладиться моментом.</span></li>
</ul>
<p><strong>&nbsp;Совет карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Позволь себе радость. Не жди подвоха &mdash; иногда жизнь действительно просто хороша.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Благодари. За путь, за результат, за людей рядом.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Отпразднуй. Символически или по-настоящему. Признай: ты прошла важный путь. И ты молодец.</span></li>
</ul>
`, 
                reversed: `<p><span style="font-weight: 400;">Праздник отменяется, но не навсегда!</span></p>
<p><span style="font-weight: 400;">Если в раскладе появилась перевернутая Четверка Жезлов, значит&hellip; что-то явно пошло не по плану. Ты уже почти представляла, как задуваешь свечи, танцуешь босиком в саду и получаешь комплименты за свои успехи &mdash; а тут бах! и всё сдулось. Вроде бы вот-вот был финиш, а теперь ощущение, что тебя вернули на пару кругов назад.</span></p>
<p><strong>Общее значение карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Задержка на пути к радости. Ты почти на финише, но обстоятельства решили, что тебе нужен ещё один квест.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Нарушение планов, срыв событий. Это может быть всё что угодно: от отмены важной встречи до переноса отпуска, который ты ждала полгода.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Чувство одиночества. Ты как будто &laquo;выпала&raquo; из поддержки и окружения, которые раньше были рядом.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Внутренняя тревога: даже если снаружи всё неплохо, внутри может быть ощущение, что ты не на своём месте &mdash; как будто &laquo;дом&raquo; потерялся.</span></li>
</ul>
<p><strong>Совет карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Отложенный праздник &mdash; это всё ещё праздник. Просто позже. Не ставь крест на себе или мечте.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Восстанови опору. Посмотри, где в жизни ты потеряла &laquo;дом&raquo; &mdash; в себе, в отношениях, в профессии?</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Перестань ждать идеальных условий. Иногда нужно просто признать: сейчас непросто &mdash; но это временно.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Поддержи себя сама. Не жди оваций. Купи себе цветы, устрой мини-праздник без повода. Ты заслужила.</span></li>
</ul>
<p><span style="font-weight: 400;">Перевернутая Четверка Жезлов говорит:</span></p>
<p><span style="font-weight: 400;">&laquo;Твоя победа задерживается, но не отменяется. Сейчас немного дождливо &mdash; но зонт ты уже держишь в руках&raquo;.</span></p>
`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Четверка Жезлов приходит как знак: &laquo;Ты заслужила спокойствие, радость и стабильность</span><span style="font-weight: 400;">&raquo;.&nbsp;</span></p>
<p><strong>Что ждет тебя в этом году?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Все, что ты строила и создавала ранее, начинает давать свои результаты. Этот год &mdash; про стабильность, семейное счастье, комфорт и поддержку. Ты почувствуешь, что твоя жизнь наконец-то обретает надежную основу, на которую можно опереться.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Четверка Жезлов всегда предвещает радостные встречи, вечеринки, свадьбы, юбилеи. В этом году будет много поводов нарядиться, смеяться до слез, обнимать родных и танцевать под звездами. Ожидай важные события в личной жизни или семейные торжества.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты обнаружишь, что рядом с тобой соберутся люди, которые искренне радуются твоим успехам. Это может быть новая компания, близкие друзья или любимая семья. Окружение будет поддерживать тебя так, как ты давно мечтала.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Год особенно хорош для романтических отношений и укрепления связей. Если ты в отношениях &mdash; они станут крепче и теплее. Если в поиске &mdash; знай, что тебя может ждать встреча с человеком, с которым захочется строить будущее. Возможно, переезд в новый дом, создание уюта или даже пополнение в семье.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Покупка недвижимости, ремонт мечты, обустройство собственного уголка &mdash; все это будет очень успешным начинанием в этом году. Твой дом &mdash; твоя крепость.</span></li>
</ul>
<p><strong>О чем предупреждает карта</strong><strong><br /></strong><span style="font-weight: 400;">Есть только один маленький совет: не забывай ценить то, что уже есть. Когда жизнь наконец становится стабильной, есть соблазн начать искать новые острые ощущения. Но Четверка Жезлов учит нас радоваться именно текущему моменту &mdash; здесь и сейчас.</span></p>`,
            },
            "ex": {
                normal: `<p><span style="font-weight: 400;">Его жизнь напоминает недостроенный дом: стены вроде стоят, крыша вроде есть, а жить там невозможно &mdash; сквозняки, сырость и окна без стекол. Он почти поймал удачу за хвост: новая работа, новые отношения, новые цели. Казалось бы, ещё немного &mdash; и он войдёт в золотой век своего существования. Но желать счастья мало, нужно постараться его удержать.&nbsp;</span></p>
<h3><strong>Что его ждёт:</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Несбывшиеся мечты: всё, что казалось началом новой эпохи, превращается в очередную печальную главу.</span><span style="font-weight: 400;"><br /><br /></span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ошибки из прошлого: он будет тащить их за собой, как чемодан без ручки, который и бросить жалко, и нести неудобно.</span><span style="font-weight: 400;"><br /><br /></span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Чувство пустоты: праздники будут проходить мимо, а моменты радости останутся недостижимыми миражами.</span><span style="font-weight: 400;"><br /><br /></span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Вечная нехватка внутренней зрелости: он будет строить замки из песка, а они снова и снова будут рушиться при первом ветре.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><span style="font-weight: 400;">Пока бывший сидит на руинах своих несбывшихся мечт и в сотый раз думает, почему всё так сложно, Ты танцуешь босиком по мраморному полу своих побед. Ты живешь той жизнью, о которой он только мечтал. И это &mdash; самая красивая месть без мести. Просто счастье. </span></p>
`
            }
        }
    },
    "three-of-wands": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Ты на старте новой масштабной главы!&nbsp;</span></p>
<p><span style="font-weight: 400;">Если в раскладе тебе выпала Тройка Жезлов, знай: ты стоишь на вершине холма, смотришь вперед и видишь&hellip; целый мир возможностей. Это не момент финиша, а точка триумфального &laquo;дальше!&raquo;. Всё, чего ты добивалась &mdash; теперь твой трамплин.</span></p>
<p><span style="font-weight: 400;">Ты уже не просто мечтаешь &mdash; ты действуешь. И самое классное: результаты уже заметны, и это только начало.</span></p>
<p><strong>Общее значение карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Наступает фаза расширения &mdash; горизонтов, амбиций, связей, проектов. Всё, что казалось сложным &mdash; становится возможным.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты строишь планы с позиции силы. Ты уже не боишься &mdash; у тебя есть опыт, понимание и четкое ощущение: &laquo;Я могу&raquo;.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Будущее &mdash; реально прекрасное. Всё складывается!</span></li>
</ul>
<p><strong>Совет карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Думай масштабно. Не бойся загадывать больше, просить лучше, мечтать громче.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Действуй стратегически. Всё &mdash; в твоих руках, но без плана даже крылья не помогут.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не застревай в &laquo;я уже и так многого добилась&raquo;. Ты только начинаешь!</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Будь открыта к сотрудничеству, новым территориям, новым людям. Сейчас &mdash; именно то время, когда возможности идут тебе навстречу.</span></li>
</ul>
<p><span style="font-weight: 400;">Тройка Жезлов говорит:</span></p>
<p><span style="font-weight: 400;">&laquo;Ты сделала мощный старт &mdash; теперь расширяйся. Мир не просто открыт тебе. Он зовёт.&raquo;</span></p>
`, 
                reversed: `<p><span style="font-weight: 400;">Планы? Мечты? Всё пока в режиме &laquo;загрузка&raquo;.&nbsp;</span></p>
<p><span style="font-weight: 400;">Когда на раскладе появляется перевернутая Тройка Жезлов, ощущение примерно такое, как если бы ты собиралась на модный уикенд, собрала чемодан, пришла на вокзал... а поезда нет.&nbsp;</span></p>
<p><span style="font-weight: 400;">Эта карта &mdash; про замешательство, потерю направления, самоуверенность, которая обернулась тупиком.&nbsp;</span></p>
<p><strong>Общее значение карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Растерянность. Ты не понимаешь, куда двигаться, и цель, которая казалась ясной, вдруг померкла.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Неверный маршрут. Всё пошло не по сценарию: ты строила стратегию, а вышла импровизация &mdash; и неудачная.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Самоуверенность. Возможно, ты отказалась от помощи, проигнорировала советы, переоценила силы.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Отдаление от реальности. Ты могла увлечься красивыми мечтами, но забыла про реализацию. И теперь не знаешь, как выбраться.</span></li>
</ul>
<p><strong>Совет карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Сделай шаг назад. Не потому что проиграла, а чтобы увидеть путь шире.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Пересмотри маршрут. Может, цель &mdash; та же, а вот способ к ней уже устарел.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Позволь себе отдохнуть. Иногда &laquo;ничего не делать&raquo; &mdash; это тоже действие.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Признай: ты &mdash; не всезнайка. Поговори с теми, кто может дать трезвый взгляд со стороны.</span></li>
</ul>
<p><span style="font-weight: 400;">Перевернутая Тройка Жезлов говорит:</span></p>
<p><span style="font-weight: 400;">&laquo;Ты заблудилась не потому, что не умеешь идти. А потому что слишком долго шла в темноте, не оглянувшись. Зажги фонарик, передохни &mdash; и выбери новый путь.&raquo;</span></p>
`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Год, который тебе выпадает под энергией Тройки Жезлов, &mdash; это настоящее путешествие возможностей. Ты стоишь на берегу своей жизни, ветер играет волосами, а впереди &mdash; безграничный горизонт. Этот Аркан &mdash; про развитие, расширение своих границ и движение к большим мечтам.</span></p>
<p><strong>Что ждет тебя в этом году?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">С самого начала года ты почувствуешь, что пришло время вырваться за рамки старого. Ощущение &laquo;я готова к большему</span><span style="font-weight: 400;">&raquo;</span><span style="font-weight: 400;"> будет вести тебя за собой. Ты начнешь искать новые пути &mdash; в карьере, в творчестве, в личных отношениях. Это время новых амбиций и глобальных планов.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ожидай возможности для путешествий, новых знакомств, сотрудничества с другими странами, переездов или обучения. Всё, что связано с выходом за рамки привычного круга, будет тебе доступно. Если в прошлом ты боялась перемен, то в этом году перемены будут сладкими и желанными, как первая весна.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты не останешься одна. Вокруг появятся союзники, партнеры, единомышленники, которые захотят поддержать твои проекты и мечты. Оглянись вокруг &mdash; кто-то уже готов плыть с тобой в одной лодке к новым берегам.</span></li>
</ul>
<p><strong>О чем предупреждает карта</strong><strong><br /></strong><span style="font-weight: 400;">Единственная опасность этого года &mdash; остаться в мечтах и не сделать реальных шагов. Не жди идеального момента. Тройка Жезлов говорит: &laquo;Лучшее время начать &mdash; прямо сейчас</span><span style="font-weight: 400;">&raquo;.</span><span style="font-weight: 400;"> Даже если страшно &mdash; делай. Даже если сомневаешься &mdash; иди вперед.</span></p>`,
            },
            "ex": {
                normal: `<p><span style="font-weight: 400;">Бывший &mdash; словно капитан без корабля. Он стоит на обрыве своей судьбы, всматриваясь вдаль, щурясь от солнца и надеясь увидеть приближающиеся паруса. Вот-вот, думает он, придёт шанс! Вот-вот начнётся новая жизнь! Но корабль счастья отплыл. Давно. Вместе с тобой.&nbsp;</span></p>
<p><span style="font-weight: 400;">Он строит грандиозные планы: </span><span style="font-weight: 400;">&laquo;</span><span style="font-weight: 400;">Я открою бизнес!, Я встречу ту самую!, Я перееду в другую страну!</span><span style="font-weight: 400;">&raquo;.</span><span style="font-weight: 400;">&nbsp; Но все планы так и остаются воздушными замками. Почему? Потому что вместо действия он выбирает бесконечное ожидание идеального момента.</span></p>
<h3><strong>Что его ждёт:</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Несбыточные ожидания: мечты останутся мечтами, потому что он будет ждать идеальных условий &mdash; которые никогда не наступят.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Упущенные шансы: возможности будут проплывать мимо, а он будет махать им платочком с берега.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ощущение пустоты: он будет понимать, что жизнь идёт, но как будто без него.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Одиночество: он всё ещё будет ждать свою идеальную любовь, не замечая, что идеал давно сменил адрес.</span></li>
</ul>
<p><span style="font-weight: 400;">Пока бывший стоит на пустом причале в обнимку со своими сожалениями. Ты уже организуешь вечеринки на палубе собственного корабля. Ты улыбаешься ветру и знаешь: твой курс &mdash; только вперед, к новым горизонтам.</span></p>
`
            }
        }
    },
    "two-of-wands": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Если в раскладе выпала Двойка Жезлов, знай: ты стоишь на перепутье, но не растерянная &mdash; наоборот, как уверенная королева на балконе замка, с картой мира в одной руке и жезлом силы в другой. Ты уже сделала многое, получила первую победу &mdash; и теперь перед тобой новая высота.</span></p>
<p><span style="font-weight: 400;">Это не карта хаотичного выбора &mdash; это взвешенное планирование, стратегия, решимость. Ты смотришь вперёд, анализируешь &mdash; и готова действовать.</span></p>
<p><strong>&nbsp;Общее значение карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты находишься в сильной позиции. Ты не в начале пути &mdash; у тебя уже есть ресурсы, знания, достижения.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты четко осознаешь: пора делать выбор. Сидеть между &laquo;да&raquo; и &laquo;нет&raquo; больше нельзя.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">У тебя есть власть &mdash; внутренняя и внешняя. Лидерство, самодисциплина, способность к стратегии &mdash; на максимуме.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Это время больших решений, которые дадут рост. Пусть страшно &mdash; но ты готова.</span></li>
</ul>
<p><strong>Совет карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Определи приоритеты. Всё не утащить &mdash; выбери то, что действительно важно.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не тормози. Решение будет правильным. Главное &mdash; не пытаться угодить всем и остаться в нерешительности.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Признай свои амбиции. Это не стыдно. Это прекрасно.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ищи союзников. Сильная женщина не всегда должна всё тянуть одна.</span></li>
</ul>
<p><span style="font-weight: 400;">Двойка Жезлов говорит:</span></p>
<p><span style="font-weight: 400;">&laquo;Ты у штурвала. У тебя есть всё, чтобы выбрать лучший курс. Хватит ждать попутного ветра &mdash; пора поднять паруса&raquo;.</span></p>
`, 
                reversed: `<p><span style="font-weight: 400;">Если в раскладе выпала перевернутая Двойка Жезлов, это сигнал: ты застряла на этапе &laquo;хочу&raquo; и &laquo;могу&raquo;, но никак не переходишь к &laquo;делаю&raquo;. Силы как будто есть, желания вроде бы тоже, но вот ясности, четкого плана и уверенности &mdash; увы, не хватает.</span></p>
<p><span style="font-weight: 400;">Ты мечешься между вариантами, не чувствуя твердой почвы под ногами. И, что хуже всего &mdash; есть риск принять импульсивное решение, которое заведет в тупик.</span></p>
<p><span style="font-weight: 400;">&nbsp;Общее значение карты:</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Растерянность и неготовность к действиям. Слишком много мыслей, слишком мало структурности.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты можешь переоценивать свои силы. Взялась за проект/отношения/переезд &mdash; а ресурсов нет. Ни внутреннего, ни внешнего.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Страх ошибиться &mdash; и как результат, либо хаотичные поступки, либо полная стагнация.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Нет ясности в видении цели. Ты смотришь на горизонт, но не понимаешь, куда идти.</span></li>
</ul>
<p><strong>О чем предупреждает карта:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не бери на себя больше, чем можешь. Сейчас не лучшее время для амбициозных рывков &mdash; ты можешь выгореть.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Слишком много решений на эмоциях. Лучше притормозить, чем &laquo;впрыгнуть в поезд&raquo;, не зная даже его направления.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Избегай самообмана. Признай: тебе страшно, ты не знаешь, что делать. Это нормально &mdash; и с этим можно работать.</span></li>
</ul>
<p><span style="font-weight: 400;">Перевернутая Двойка Жезлов говорит:</span></p>
<p><span style="font-weight: 400;">&laquo;Ты хочешь всё и сразу &mdash; но без карты, компаса и маршрута. Остановись. Подумай. Не бойся начать с малого.&raquo;</span></p>
`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Год, в который тебе выпала Двойка Жезлов, &mdash; это как стоять на вершине холма и держать в руках карту сокровищ. Всё вокруг манит, переливается возможностями, а твое сердце замирает в предвкушении великих свершений. Этот Аркан &mdash; про осознанный выбор, большие планы и уверенные шаги в новую жизнь.</span></p>
<p><strong>Что ждет тебя в этом году?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Год начинается с ощущения, что все дороги открыты. Ты почувствуешь прилив внутренней силы и понимания, что готова к новому этапу. В твоей голове родятся масштабные мечты: возможно, это смена карьеры, начало серьезных отношений, путешествие или даже переезд. Двойка Жезлов говорит: &laquo;Планируй крупно!</span><span style="font-weight: 400;">&raquo; </span><span style="font-weight: 400;">&nbsp;&mdash; не ограничивай себя мелочами.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Символ карты &mdash; выбор. И перед тобой встанет минимум два мощных варианта развития событий. Может показаться, что сделать выбор будет сложно: обе дороги будут привлекательными. Но знай &mdash; правильного и неправильного пути нет. Есть путь, который больше всего соответствует твоему сердцу.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Этот год научит тебя думать стратегически. Ты научишься рассматривать последствия своих действий на много шагов вперед. Где-то нужно будет рискнуть, где-то &mdash; проявить терпение. Но умение видеть &laquo;картину целиком&raquo; станет твоим секретным оружием. Ты превратишься в настоящего мастера планирования своей судьбы!</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">К середине года ты увидишь первые результаты своих решений. Они будут вдохновлять тебя двигаться дальше, а новые горизонты начнут манить еще сильнее. Ты почувствуешь, как растешь &mdash; как личность, как профессионал, как человек.</span></li>
</ul>
<p><strong>Что важно помнить</strong><strong><br /></strong><span style="font-weight: 400;">Самая большая ошибка этого года &mdash; это промедление. Если ты будешь долго размышлять и откладывать решение, время уплывет сквозь пальцы. Смелость будет твоим союзником. И помни: выбрать что-то &mdash; не значит навсегда отказаться от всего </span></p>`,
            },
            "ex": {
                normal: `<p><span style="font-weight: 400;">Бывший словно турист на перекрёстке жизни. Он держит в руках карту, на которой нарисованы пути успеха, счастья и личностного роста. Но вот беда: он не понимает, куда идти. И честно говоря, иногда он держит карту вверх ногами.&nbsp;</span></p>
<p><span style="font-weight: 400;">Он стоит, мнется, делает умное лицо, задумывается о глобальных перспективах&mdash; и... продолжает стоять. Даже если перед ним открывается шанс, он тратит всё своё время на метания. </span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">Что его ждёт</span><span style="font-weight: 400;">:</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Вечные сомнения: он будет колебаться перед любым решением, теряя важные возможности.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ощущение застоя: он поймёт, что стоит на месте, но не сможет заставить себя сделать первый шаг.&nbsp;</span><span style="font-weight: 400;"><br /></span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Тоска по прошлому: он начнёт жалеть, что потерял тебя, когда рядом была девушка с компасом в душе.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Зависть к другим: он будет наблюдать за чужими достижениями и грустить, что у него не так всё легко.</span></li>
</ul>
<p><span style="font-weight: 400;">Пока бывший будет ворочать карту туда-сюда, путаясь в своих &laquo;хочу&raquo; и &laquo;боюсь&raquo;. Ты уже откроешь новые страны своего счастья. Ты знаешь: дорога под ногами появляется у идущего. И твой путь &mdash; всегда только вперёд, в яркое, живое и счастливое будущее!</span></p>
`
            }
        }
    },
    "ace-of-wands": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Если в твоём раскладе появляется Туз Жезлов, знай: Вселенная жмет тебе руку и говорит &mdash; &laquo;Ну что, запускаем фейерверк?&raquo;. Эта карта &mdash; как первая спичка, от которой может разгореться костер судьбоносного проекта, страстного романа, нового этапа жизни или просто взрывного вдохновения, которое способно перевернуть всё.</span></p>
<p><span style="font-weight: 400;">Ты стоишь на пороге чего-то яркого и мощного. Это шанс, момент, импульс. И он твой.</span></p>
<p><span style="font-weight: 400;">&nbsp;Общее значение карты:</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Начало чего-то большого. Это может быть идея, вдохновение, шанс, предложение &mdash; всё, что сжигает тебя изнутри.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Уверенность и поддержка Вселенной. Всё складывается так, как нужно. Даже если пока не видно результата &mdash; вектор верный.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Бешеная энергия. Внутри кипит сила, мотивация, страсть к действию. Не зарывай этот огонь &mdash; используй!</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">&nbsp;Благоприятное время для старта. Если долго думала, сомневалась, откладывала &mdash; пора перестать. Сейчас &mdash; тот самый момент.</span></li>
</ul>
<p><strong>Совет карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не сиди. Вдохновение &mdash; штука капризная. Поймала волну &mdash; греби!</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не жди одобрения. У тебя уже есть всё, чтобы начать. И да, ты справишься.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">&nbsp;Действуй быстро. Это не про высиживание плана на 5 лет. Это про &laquo;горю &mdash; делаю&raquo;.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Верь в свою идею. Даже если она кажется безумной &mdash; а вдруг это и есть твой путь?</span></li>
</ul>
<p><span style="font-weight: 400;">Туз Жезлов говорит:</span></p>
<p><span style="font-weight: 400;">&laquo;Ты на старте. И это &mdash; старт мощный. У тебя есть шанс, который не стоит упускать. Зажигай!&raquo;</span></p>
`, 
                reversed: `<p><span style="font-weight: 400;">Если в раскладе появляется перевернутый Туз Жезлов, это звоночек: внутренний огонь, что должен был зажечься &mdash; как будто тухнет на сквозняке сомнений, усталости и неуверенности.</span></p>
<p><span style="font-weight: 400;">Это не провал. Это пауза. Карта не говорит &laquo;нет&raquo;, она говорит &laquo;не сейчас.</span></p>
<p><strong>Общее значение карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Упадок сил и энтузиазма. Что-то, что казалось классной идеей, перестаёт вдохновлять.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Неподходящее время. Ты можешь быть не готова к старту, даже если уже стоишь на линии.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Разочарование. Ожидания не совпали с реальностью. Всё как будто не так: не те люди, не те ресурсы, не те ощущения.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Промах с идеей или реализацией. Может, ты переоценила проект. Или вложилась туда, где отклика не будет.</span></li>
</ul>
<p><strong>&nbsp;О чем предупреждает карта:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты можешь застрять в ожидании чуда, вместо того чтобы посмотреть правде в глаза: тебе нужна пауза, энергия и пересборка.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты можешь бежать вперёд, не разобравшись, куда и зачем.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Или наоборот &mdash; откладывать старт бесконечно, из-за страха, неуверенности или чувства, что ты &laquo;недостаточно готова&raquo;.</span></li>
</ul>
<p><span style="font-weight: 400;">ление. Твоё топливо &mdash; это не кофе и дедлайны, а ясность, отдых, вдохновение.</span></p>
<p><span style="font-weight: 400;">Перевернутый Туз Жезлов говорит:</span></p>
<p><span style="font-weight: 400;">&laquo;Ты хотела стартовать на всех парах, а у ракеты пока не работает двигатель. Не беда. Почини &mdash; и полетишь ещё круче.&raquo;</span></p>
`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Год, в который тебе выпал Туз Жезлов, &mdash; это будто первая сцена нового, яркого спектакля, в котором ты &mdash; главная звезда!&nbsp; Этот Аркан шепчет о безграничных возможностях, новых началах, вспышках вдохновения и потрясающем внутреннем драйве.</span></p>
<p><strong>Что ждет тебя в этом году?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Уже в начале года в твоей душе словно вспыхнет искра! То, что раньше казалось обычным и скучным, внезапно окрасится в сочные цвета. Ты почувствуешь, как много вокруг возможностей, и главное &mdash; появляется невероятное желание действовать. Это год, когда твои мечты перестанут быть мечтами и начнут превращаться в реальность.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Туз Жезлов всегда приносит неожиданные подарки. Тебе могут поступить новые предложения, о которых ты даже не думала. Будь готова ловить удачу на лету: интересная работа, творческий проект, путешествие мечты или даже случайная встреча, которая изменит многое.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Если давно думала начать что-то свое &mdash; самое время! Бизнес? Блог? Новая профессия? Да! Этот год как будто специально создан для того, чтобы ты раскрыла свои таланты. Перестань сомневаться &mdash; маленький первый шаг превратится в стремительный взлет.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Туз Жезлов говорит: &laquo;Ты можешь всё!&raquo;. И это не просто красивые слова. Ты будешь удивляться, насколько уверенной и энергичной себя почувствуешь. Даже если появится страх, даже если будет сложно &mdash; помни: ты на правильном пути. Этот год &mdash; проверка твоего огня внутри.&nbsp;</span></li>
</ul>
<p><strong>Что важно помнить</strong><strong><br /></strong><span style="font-weight: 400;">Туз Жезлов даёт возможность, но требует от тебя инициативы. Просто мечтать будет недостаточно &mdash; нужно брать идеи в руки и воплощать их. Иногда тебе придется проявить настойчивость и даже немного дерзости, чтобы добиться желаемого.</span></p>`,
            },
            "ex": {
                normal: `<p><span style="font-weight: 400;">Бывший внезапно чувствует, что нужно срочно что-то изменить! И в нём загорается искра. Прямо как в рекламах энергетиков: мотивация, великие планы, воодушевление!&nbsp;</span></p>
<p><span style="font-weight: 400;">Он делает пару вдохновленных сторис в соцсетях и&hellip; всё. Сил на реальные действия нет. Искра тухнет, энергия уходит, диван снова становится главным орудием судьбы.&nbsp;</span></p>
<p><span style="font-weight: 400;">И так по кругу: идея &rarr; энтузиазм &rarr; прокрастинация &rarr; печаль.</span></p>
<h3><span style="font-weight: 400;">Что его ждёт:</span></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Много начинаний и мало завершений: он будет хвататься за всё подряд и бросать на полпути.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Разочарование: каждый несостоявшийся проект будет бить по самолюбию.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Потеря веры в себя: он будет винить всех и вся в своих провалах, кроме себя самого.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Псевдо-успехи: казаться занятым и важным &mdash; да, реально достигать чего-то &mdash; нет.</span></li>
</ul>
<p><span style="font-weight: 400;">А ты? Ты не сидишь на месте, ты в пути, строишь, создаешь, живешь на полную. Пока бывший вздыхает над очередной зажженной спичкой. Ты освещаешь свой путь собственным сиянием.</span></p>
`
            }
        }
    },
    "king-of-cups": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Всё под контролем. Даже если эмоции зашкаливают&nbsp;&nbsp;</span></p>
<p><span style="font-weight: 400;">Когда в раскладе появляется Король Кубков, это как будто рядом вдруг оказывается тот взрослый, мудрый, мягкий, но невероятно сильный человек, которого хочется обнять и сказать: &laquo;Спасибо, что ты рядом!&raquo;. В прямом положении карта &mdash; мощный знак стабильности, внутренней зрелости и доброй силы, которая тебя поддерживает.</span></p>
<p><strong>Общее значение карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты проходишь через важный, но благоприятный этап. Он требует не всплеска, а мягкой уверенности, чуткости и контроля.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Рядом &mdash; человек, на которого можно опереться. Это может быть отец, партнёр, коллега, учитель &mdash; кто-то, кто владеет эмоциями и хочет тебе добра.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты сама можешь быть этим Королём. Если ты чувствуешь, что хочешь заботиться, вести за собой, помогать другим &mdash; время действовать.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Все испытания уже позади. Карта словно говорит: &laquo;Ты выдержала. Теперь расслабься и начинай наслаждаться тем, что создала.&raquo;</span></li>
</ul>
<p><strong>Совет карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Сохраняй эмоциональный баланс &mdash; он твоя суперсила.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Доверься мудрым людям рядом &mdash; они не подведут.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не бойся проявлять доброту и сострадание &mdash; сейчас это не слабость, а твой магнит.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Прислушивайся к себе &mdash; твое сердце подскажет верный путь.</span></li>
</ul>
<p><span style="font-weight: 400;">Король Кубков говорит:</span></p>
<p><span style="font-weight: 400;">&laquo;Ты не просто справилась. Ты стала глубже, сильнее, мягче. А теперь &mdash; пожинай плоды и помогай другим найти свой баланс&raquo;.</span></p>
`, 
                reversed: `<p><span style="font-weight: 400;">Когда эмоции берут власть, а здравый смысл уходит в отпуск...&nbsp;</span></p>
<p><span style="font-weight: 400;">Если в раскладе появляется перевернутый Король Кубков, знай &mdash; что-то пошло не по сценарию. Тот, кто должен быть источником поддержки, вдруг становится источником драмы, манипуляций или туманных обещаний.&nbsp; Эмоции бьют через край, и вместо мудрого совета &mdash; двусмысленность, пассивная агрессия или зависимость от чужого мнения.</span></p>
<p><strong>Общее значение карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Эмоции вышли из-под контроля. Ты можешь быть на грани: срыва, усталости, обиды, внутреннего перенапряжения.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">В окружении &mdash; человек, который играет на чувствах. Это может быть манипулятор, скрытый агрессор, или просто эмоционально нестабильная персона.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты слишком подстраиваешься, забывая о себе. Ты, возможно, пытаешься быть хорошей для всех, но внутри чувствуешь выгорание и пустоту.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Отсутствие опоры. Ни внутренней, ни внешней. Ты вроде бы на воде &mdash; но без вёсел и без карты.</span></li>
</ul>
<p><strong>Совет карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Признай свои чувства. Даже если они не такие &laquo;мудрые&raquo;, как хотелось бы &mdash; они настоящие.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Почисти эмоциональные границы. Кто/что тебя истощает? Пора отключать доступ.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не спасай всех. Сейчас важно спасти себя.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Восстанови контакт с логикой. Иногда &laquo;честный список дел&raquo; и &laquo;план на день&raquo; лучше любых духовных практик.</span></li>
</ul>
<p><span style="font-weight: 400;">Перевернутый Король Кубков говорит:</span></p>
<p><span style="font-weight: 400;">&laquo;Ты &mdash; океан, но даже океану нужен берег. Не позволяй никому бросать якоря в твою душу без разрешения&raquo;.&nbsp;</span></p>
`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Этот год &mdash; про любовь, гармонию и внутреннюю магию. Когда появляется Король Кубков, это значит: твое сердце станет твоей суперсилой! И впереди у тебя не только успехи, но и настоящее счастье в душе.</span></p>
<p><strong>Что принесет тебе этот год?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты научишься чувствовать тонко, но не утопать в эмоциях. Год будет напоминать тебе: истинная сила не в крике, а в спокойствии. Ты сможешь решать сложные вопросы мягко, но очень уверенно.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Если ты свободна &mdash; готовься к приходу в жизнь человека с душой поэта и сердцем героя. Если ты в отношениях &mdash; ваши чувства углубляются, появится больше доверия, романтики и теплоты. Это год, когда любовь будет не бурей страстей, а тихим светом маяка &mdash; постоянным, верным и уютным.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">&nbsp;Король Кубков благоволит художникам, писателям, музыкантам, психологам, коучам &mdash; всем, кто работает с сердцем и душой.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Финансово год будет спокойным и стабильным. Возможны приятные подарки судьбы: премии, неожиданные предложения, удачные сделки.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Главное настроение года &mdash; гармония. Больше отдыхай у воды &mdash; море, реки, даже ванна со свечами будет исцеляющей! Удели внимание своему внутреннему миру: медитации, йога, творчество.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><strong>Совет карты</strong><strong><br /></strong><span style="font-weight: 400;">Не бойся чувствовать!</span> <span style="font-weight: 400;">Твоя нежность &mdash; это не слабость, а невероятная сила, которая поможет тебе прожить этот год самым красивым и глубоким образом.</span></p>`,
            },
            "ex": {
                normal: `<p><span style="font-weight: 400;">Король Кубков &mdash; это тот, кто раньше казался уверенным, добрым, почти идеальным. Но без тебя он словно потерял руль своего корабля.&nbsp;</span></p>
<h3><strong>Что его ждёт:</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Бесконечные сожаления: он будет тосковать по прошлому и мечтать о тебе, даже не пытаясь двигаться дальше.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Эмоциональные качели: от грусти до бурной радости и обратно за 5 минут.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ошибочные отношения: он будет искать в новых людях тебя, но всё будет не то и не так.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Псевдо-романтика: попытки казаться счастливым и влюбленным &mdash; только для соцсетей. В реальности &mdash; пустота.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><span style="font-weight: 400;">Он станет тем самым человеком, который красиво говорит о чувствах, но не умеет ими управлять. И как старый пират, потерявший карту сокровищ, он будет метаться по жизни, не находя настоящего пути.</span></p>
<p><span style="font-weight: 400;">А ты? Ты смело идешь вперед, в сердце весна, в глазах мечты, а за спиной &mdash; крылья. И пока бывший кусает локти, ты &mdash; настоящая главная героиня своей собственной, яркой истории. </span></p>
`
            }
        }
    },
    "queen-of-cups": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Если тебе выпала Королева Кубков, поздравляем &mdash; это как если бы Вселенная сказала:</span></p>
<p><span style="font-weight: 400;">&laquo;Ты &mdash; мягкая сила, магия заботы и ходячий уют. И мир это чувствует!&raquo;.&nbsp;</span></p>
<p><span style="font-weight: 400;">В прямом положении карта указывает на ту самую девушку, в чьём присутствии становится теплее и спокойнее, даже если до этого было ощущение, что душа в раздрае. Она &mdash; не просто эмоциональна. Она тонко чувствует, глубоко любит, и умеет лечить не только слова, но и вниманием, жестами и чаем с лимоном.</span></p>
<p><strong>Общее значение карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты сейчас в энергии исцеления. Или сама такой человек, или в твоей жизни есть та самая Королева, которая понимает с полуслова и греет без слов.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Это время заботы, нежности, открытого сердца, интуитивных решений и полной душевной вовлеченности.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Всё, что ты сейчас создаешь &mdash; будь то проект, отношения или даже интерьер квартиры &mdash; наполнено любовью.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Никаких бурь. Карта сулит эмоциональную безопасность и умиротворение.</span></li>
</ul>
<p><span style="font-weight: 400;">&nbsp;Если карта описывает тебя:</span></p>
<p><span style="font-weight: 400;">Ты сейчас &mdash; высший пилотаж женственности: не в смысле макияжа, а в том, как умеешь чувствовать, прощать, понимать и вдохновлять. Ты тот человек, которому плачут в голосовых, пишут в 3 ночи и за которого молятся подруги: &laquo;пусть у неё всё будет хорошо!&raquo;.&nbsp;</span></p>
<p><span style="font-weight: 400;">Совет карты:</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Доверься своей интуиции. Сейчас именно она подскажет лучше логики.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не бойся быть мягкой. Это не слабость, это твоя магия.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Позволь себе отдых. Переполненная чаша тоже проливается &mdash; наполняй себя.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Дари добро, но не забывай про свои границы. Ты не обязана спасать всех.</span></li>
</ul>
`, 
                reversed: `<p><span style="font-weight: 400;">Ой-ой, если в твоём раскладе появилась перевернутая Королева Кубков, то знаки точно не про &laquo;чай с булочкой у камина&raquo;. Это карта переполненной эмоциями души, которая то вспыхивает, то плачет, то манипулирует, а потом снова делает вид, что ничего не произошло.</span></p>
<p>&nbsp;</p>
<p><strong>Общее значение карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Эмоции вышли из берегов &mdash; ты или кто-то рядом может быть обидчивой, капризной, мнительной, с желанием &laquo;сделать драму&raquo; на ровном месте.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Чувства не под контролем: от супер-нежности до &laquo;всё достали, дайте мне покой!&raquo; &mdash; и всё это за 5 минут.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Иллюзии, фантазии и розовые очки могут полностью заменить реальность.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Также может указывать на женщину, погруженную в свои страдания, которая винит весь мир, кроме себя.</span></li>
</ul>
<p><strong>&nbsp;Предупреждение карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты можешь тонуть в эмоциях, не понимая, где истина.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Будь внимательна к людям, которые выглядят милыми, но действуют из тени.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Сейчас не лучшее время для принятия решений на эмоциях. Сначала &mdash; стакан воды, потом &mdash; выводы.</span></li>
</ul>
<p><span style="font-weight: 400;">&laquo;Ты &mdash; океан чувств. Но если не навести порядок на берегу, волны унесут тебя туда, где даже GPS не ловит.&raquo;</span></p>
`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Твой год будет словно сказка, наполненная нежностью, чудесами и волшебными преображениями. Когда появляется Королева Кубков, мир словно окрашивается в пастельные тона: розовый рассвет, бирюзовая гладь моря, золотой песок мечты.&nbsp;</span></p>
<p><strong>Что принесет тебе этот год?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Любовь к себе &mdash; на первом месте. Твоя душа распустится, как цветок! Этот год &mdash; время мягких трансформаций. Ты не будешь ломать себя &mdash; ты будешь расти естественно, как роза в саду любви.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Твои отношения с окружающими станут глубже. Люди будут тянуться к тебе за теплом и пониманием.</span></li>
</ul>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Год идеально подходит для самореализации в творческих профессиях (дизайн, психология, косметология, искусство).</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Деньги будут приходить к тебе легко, когда ты будешь заниматься делом, которое по-настоящему откликается в сердце. Работать &laquo;ради денег</span><span style="font-weight: 400;">&raquo; </span><span style="font-weight: 400;">&nbsp;&mdash; скучно. Работать &laquo;ради мечты</span><span style="font-weight: 400;">&raquo;</span><span style="font-weight: 400;"> &mdash; твоя дорога.</span></li>
</ul>
<p><strong>Совет карты</strong><strong><br /></strong><span style="font-weight: 400;">Люби себя без условий. Когда ты выбираешь себя &mdash; весь мир начинает выбирать тебя тоже.</span></p>`,
            },
            "ex": {
                normal: `<p><span style="font-weight: 400;">Когда-то он думал, что ты девочка на побегушках, которую можно вернуть одним звонком. А теперь он понимает, что тебя не догнать. Он попытается восстановить связь. Но эти попытки будут тщетны.&nbsp;</span></p>
<h3><strong>Что его ждёт:</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Погоня за призраками: он будет искать новую тебя в других женщинах. Безуспешно.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Осознание: позднее понимание того, что ты была его лучшим союзником, другом и музой в одном лице.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Эмоциональная зима: отношения будут приходить и уходить, но внутри будет только ледяная пустота.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Внутренняя борьба: попытка доказать самому себе, что он не жалеет... и полное отсутствие убедительных аргументов.</span></li>
</ul>
<p><span style="font-weight: 400;">А ты? Твоя энергия вдохновляет других. Твоя независимость восхищает. Твоя мудрость пугает тех, кто не готов к женщине, которая знает себе цену. И если он однажды увидит тебя среди счастливых людей, сверкающей как звезда&hellip; Он поймёт, что упустил не просто человека. Он упустил целую вселенную, которую уже никогда не сможет вернуть. </span></p>
`
            }
        }
    },
    "knight-of-cups": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">&laquo;Мечтатель на белом коне уже в пути&hellip; с цветами и, возможно, с гитарой&raquo;&nbsp;</span></p>
<p><span style="font-weight: 400;">Когда тебе выпадает Рыцарь Кубков, знай: в твою жизнь врывается романтика!</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;"> И нет, это не просто образ прекрасного принца из сказки. Это &mdash; всплеск эмоций, волна вдохновения, предложение, от которого захочется сказать &laquo;да&laquo;, и период, когда всё вокруг обретает чуть больше розового свечения.</span></p>
<p><strong>Общее значение карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Это про движение навстречу мечте. Медленное, изящное, с цветами в одной руке и сердцем в другой.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Рыцарь Кубков может быть человеком, который уже на подходе в твою жизнь &mdash; нежный, чувственный, заботливый и вдохновляющий.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Или ты сама сейчас в такой роли: ищешь красоту, хочешь любить, творить, чувствовать каждую эмоцию до кончиков пальцев.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты на волне вдохновения &mdash; хочешь признаний, красивых историй, свиданий под звёздами и лёгкости в душе.</span></li>
</ul>
<p><strong>Совет карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Открой сердце. Рыцарь стучит именно туда.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Позволь себе романтику. Даже если это просто ванна со свечами.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Следуй вдохновению. Сейчас &mdash; время жить красиво и нежно.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">И не бойся немного пофантазировать &mdash; в этом и есть магия момента.</span></li>
</ul>
<p><span style="font-weight: 400;">Рыцарь Кубков говорит:</span></p>
<p><span style="font-weight: 400;">&laquo;Я иду туда, где чувствуют, где мечтают, где верят в любовь. И если ты готова &mdash; я уже рядом&raquo;.</span></p>
`, 
                reversed: `<p><span style="font-weight: 400;">Если тебе в раскладе выпал перевернутый Рыцарь Кубков, пора снять розовые очки и надеть эмоциональный бронежилет. Этот красавчик с кубком в руке может быть не тем, кем кажется. Тут всё про обманчивые обещания, разбитые мечты, зависимость от чужих эмоций и склонность драматизировать даже чаепитие.</span></p>
<p><strong>Общее значение карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Кто-то рядом притворяется рыцарем, но на деле &mdash; мастер иллюзий.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Манипуляции, лесть, обещания без действий &mdash; всё это в воздухе витает.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты можешь быть чересчур податлива, доверчива, или наоборот &mdash; сама увлеклась красивой историей, но уже чувствуешь: это не про глубину, а про спектакль.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Настроение скачет, эмоции берут вверх, а интуиция шепчет: &laquo;Осторожно, тут ловушка!&raquo;</span></li>
</ul>
<p><strong>&nbsp;Совет карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Проверь чувства на прочность. Это влюблённость или привычка?</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Смотри на действия, а не на слова.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Осторожнее с мечтами &mdash; фантазии легко обмануться.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">И главное &mdash; не меняй себя, чтобы угодить тому, кто сам не знает, чего хочет.</span></li>
</ul>
`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Этот год будет как фильм о любви, мечтах и вдохновении, а ты &mdash; главная героиня! Когда в раскладе появляется Рыцарь Кубков, жизнь превращается в красивую историю о поиске счастья, о верности себе и о самых красивых чувствах.&nbsp;</span></p>
<p><strong>Что принесет тебе этот год?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Готовься, красавица, потому что этот год полон сюрпризов для сердца: возможны неожиданные признания в любви, подарки без повода, трепетные встречи. Кто-то будет мечтать о тебе и стремиться завоевать твое сердце. Если ты уже в отношениях, то они станут словно роман: полные ухаживаний, комплиментов, маленьких безумств и сказочных моментов.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Рыцарь Кубков &mdash; это не про скучную работу. Это про дело, которое вдохновляет. Твои идеи будут искриться, твое вдохновение заразит окружающих.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Деньги будут приходить через связи и симпатию. Улыбка, легкий шарм и искренность помогут тебе получить то, о чем ты давно мечтала. Да, прям вот так &mdash; по любви, а не &laquo;через кровь и пот&raquo;.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты будешь словно плыть на волнах мечты: легкая, воздушная, светлая. Этот год &mdash; не про борьбу, а про доверие себе и Вселенной. Иногда лучшая тактика &mdash; не сражаться, а позволить потоку нести тебя к чудесам.</span></li>
</ul>
<p><strong>Совет карты</strong><strong><br /></strong><span style="font-weight: 400;">Следуй за мечтой.&nbsp; Этот год не для логики, а для интуиции. Если сердце поет &mdash; иди туда. Ты будешь нежной, сильной, вдохновленной &mdash; и весь мир ответит тебе тем же.</span></p>`,
            },
            "ex": {
                normal: `<p><span style="font-weight: 400;">Рыцарь Кубков в этом раскладе &mdash; это герой с большими ожиданиями об отношениях. Он мечтает о романтике, о страсти, о любви. Но реальность оказалась менее поэтичной, чем он себе представлял. Всё вокруг будет казаться недостаточно вдохновляющим, а люди &mdash; недостаточно понимающими его тонкую душу.</span></p>
<p><strong>&nbsp;Что его ждёт:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Пустые мечты: он будет вечно ждать идеальных условий для счастья. Но идеальное завтра будет всегда оставаться завтра.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Бесконечные влюбленности: он будет искать новые отношения, но ни одно не принесёт ему ту полноту чувств, которую он потерял вместе с тобой.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Эмоциональные качели: сегодня он пишет признание, завтра &mdash; забывает об этом и уходит в депрессию.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Жажда признания: ему будет казаться, что его никто не ценит. А на самом деле &mdash; просто он сам давно забыл, кто он есть.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><span style="font-weight: 400;">А ты? Ты строишь реальный мир, а не воздушные замки. И если он когда-нибудь оглянется... он увидит не ту девочку, которую он потерял. Он увидит женщину, которая сама выбирает, кто достоин быть рядом. </span></p>
`
            }
        }
    },
    "page-of-cups": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Ах, Паж Кубков &mdash; это как первое смс от симпатичного человека, как бабочка в животе, как вдохновение посреди серых будней. Если он выпал тебе в раскладе, то готовься к чему-то милому, нежному и очень-очень приятному. Это маленький, но очень трогательный подарок от Вселенной, который обязательно растопит лёд даже самого серьёзного периода.</span></p>
<p><strong>&nbsp;Общее значение карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Карта обещает приятные новости, комплименты, знаки внимания или внезапные творческие инсайты.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Возможно, ты получишь признание в чувствах, приглашение на свидание или вдохновение на что-то душевное и красивое.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Энергия этой карты мягкая, робкая и очень искренняя. Это начало чего-то важного, но в форме лёгкого флирта, первой идеи или нежного эмоционального открытия.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты (или кто-то рядом) открывается миру и чувствам &mdash; не грубо, а очень деликатно.</span></li>
</ul>
<p><strong>Совет карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Будь открыта эмоциям &mdash; не бойся быть немного наивной.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Позволь себе мечтать и влюбляться &mdash; в людей, в дела, в жизнь.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не жди, что всё придёт само &mdash; Паж приносит импульс, но действовать всё равно тебе.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Улыбнись, даже если не знаешь зачем &mdash; иногда доброе настроение и есть магия.</span></li>
</ul>
<p><strong>Паж Кубков шепчет:</strong></p>
<p><span style="font-weight: 400;">&laquo;Откройся миру. Я принёс тебе нежность в конвертике, вдохновение в ладошке и влюблённость в глазах. Всё начинается с малого, но если полить &mdash; вырастет большое чувство&raquo;.</span></p>
`, 
                reversed: `<p><span style="font-weight: 400;">Если Паж Кубков вдруг перевернулся &mdash; пора немного открыть глаза на свои чувства и то, что происходит вокруг. Это уже не романтическая волна, которая радует и вдохновляет, а, скорее, эмоциональные качели, легкая драма и детские обидки. Причём как со своей стороны, так и от других.</span></p>
<p><strong>Общее значение карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Наступает период, когда чувства перепутались, мечты под вопросом, а вдохновение будто исчезло.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Возможна эмоциональная незрелость &mdash; ты или кто-то рядом ведет себя капризно, обидчиво или чересчур чувствительно, как будто хочет, чтобы весь мир его утешал.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Карта может указывать на ложные надежды, фальшивые признания или неискренние поступки. Обещали &laquo;люблю навсегда&raquo;, а ответили &laquo;ой, я просто шутил&raquo;.</span></li>
</ul>
<p><span style="font-weight: 400;">Совет карты:</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не убегай от своих чувств, но и не растворяйся в них без остатка.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не играй роль, если не чувствуешь ее сердцем.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Вернись к себе. Успокойся. Выпей чай. Позвони тому, кто тебя понимает.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">И знай: даже перевернутый Паж Кубков напоминает &mdash; ты умеешь мечтать. Просто сейчас тебе нужен перерыв.</span></li>
</ul>
`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Этот год будет как утро в сказке: нежный, трепетный и полный чудесных открытий. Паж Кубков &mdash; это всегда о новых чувствах, о первых шагах к мечте и о том, чтобы видеть мир глазами влюбленной девушки, которой все подвластно.&nbsp;</span></p>
<p><strong>Что принесет тебе этот год?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Новые эмоции и знакомства. Готовься к ярким впечатлениям и трепетным встречам! Появятся люди, которые внесут в твою жизнь тепло, радость и лёгкость. Кто-то будет очень робко, но искренне пытаться стать частью твоего мира.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">&nbsp;Паж Кубков намекает: ты только в начале важного пути. Этот год &mdash; идеален для обучения, поиска новых направлений, стажировок, старта творческих проектов.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не волнуйся о деньгах. Всё, что тебе нужно сейчас &mdash; расти, учиться, вкладываться в свои мечты. Деньги потянутся за искренностью и вдохновением. Да, возможно, в этом году придется проявить терпение. Но каждое твое усилие даст всходы &mdash; и твой сад обязательно расцветет!&nbsp;</span></li>
</ul>
<p><strong>Совет карты</strong><strong><br /></strong><span style="font-weight: 400;">Будь наивной, мечтательной, верь в чудеса! Не бойся казаться смешной &mdash; за детской открытостью скрывается настоящая магия, которая творит чудеса. Паж Кубков напоминает: &laquo;В этом году мечты станут ближе. Только позволь себе снова верить&raquo;.&nbsp;</span></p>`,
            },
            "ex": {
                normal: `<p><span style="font-weight: 400;">Когда-то он был очень милым, романтичным, нежным и немного легкомысленным. Он обещал тебе мир в розовых тонах&hellip; но забыл, что отношения требуют не только красивых слов, но и реальных поступков.</span></p>
<h3><strong>Что его ждёт:</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Блуждание в собственных фантазиях: он будет строить тысячи планов, но реализует ровно ноль.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Легкие увлечения. Новые знакомства? Легко! Серьёзные отношения? Эээ... нет, он еще не дорос.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Финансовые качели. Порывы начать новую жизнь будут сменяться лежанием на диване и мечтами о великих свершениях.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Поиски счастья через других. Он будет искать женщину, которая делает его взрослым. Только вот секрет в том, что взрослеть нужно самому.</span></li>
</ul>
<p><span style="font-weight: 400;">А ты? Ты смеёшься чаще. Ты светишься ярче. Ты не ждёшь, что кто-то сделает тебя счастливой &mdash; ты уже счастлива. И скоро он увидит тебя &mdash; улыбающуюся, окруженную искренними людьми, в новом красивом мире, который ты создала для себя сама. </span></p>
`
            }
        }
    },
    "ten-of-cups": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Когда она появляется в раскладе, просто знай: твоё время быть счастливой пришло. И не&nbsp; &laquo;когда-нибудь&raquo;, а прямо сейчас.</span></p>
<p><strong>Общее значение карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Это энергия завершения с хеппи-эндом &mdash; все усилия окупаются, мечты становятся явью, а на горизонте радуга и звучит музыка из фильмов 2000-х.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты входишь в период внутренней гармонии, когда всё наконец-то становится на свои места &mdash; в любви, семье, делах, здоровье, эмоциях.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Всё складывается так, как ты когда-то представляла в самых тёплых фантазиях. Да, без драм. Да, без подвохов. Просто &mdash; счастье. Потому что ты его заслужила.</span></li>
</ul>
<p><strong>Совет карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Наслаждайся этим периодом &mdash; он по-настоящему волшебный.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Раздели радость с другими &mdash; счастье любит компанию.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Благодари себя за пройденный путь &mdash; эта гармония пришла не случайно. Ты её выстроила.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не бойся верить, что счастье возможно &mdash; оно уже здесь.</span></li>
</ul>
`, 
                reversed: `<p><span style="font-weight: 400;">Если прямая Десятка Кубков &mdash; это идеальная открытка с надписью &laquo;И жили они долго и счастливо&raquo;, то перевернутая &mdash; это та самая открытка, которую кто-то не отправил. Или потерял. Или уронил в лужу. Эмоции есть, желания тоже, но вот исполнение &mdash; увы, не по плану.</span></p>
<p><strong>Общее значение карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">&nbsp;Ты можешь чувствовать себя обманутой в ожиданиях. Что-то, что должно было принести радость и ощущение &laquo;всё, теперь точно счастье&raquo; &mdash; внезапно рассыпается на части.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Возникает ощущение отстраненности, пустоты, как будто ты пришла на праздник, где никого не знаешь, и все обнимаются без тебя.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Или это просто внутреннее: вроде всё &laquo;норм&raquo;, а на душе как-то неуютно и одиноко.</span></li>
</ul>
<p><strong>Совет карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не гонись за картинкой &laquo;идеального счастья&raquo; &mdash; посмотри, где в твоей жизни уже есть настоящая теплота. Не сравнивай свою жизнь с чужими инстаграмами.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Поговори с близкими &mdash; иногда одно &laquo;я устала&raquo; может изменить всё.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">И главное: внутренний уют начинается с честности с собой. Спроси: что мне сейчас нужно на самом деле?</span></li>
</ul>
<p><span style="font-weight: 400;">Перевернутая Десятка Кубков тихо шепчет:</span></p>
<p><span style="font-weight: 400;">&laquo;Счастье есть. Просто оно сейчас не в том месте, где ты его искала. Поищи внутри&raquo;.&nbsp;</span></p>
`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Этот год &mdash; про любовь, счастье и ощущение, что ты дома. Десятка Кубков &mdash; это самая настоящая карта радости, гармонии и душевного тепла. Она словно говорит тебе: &laquo;Поздравляю, ты входишь в самый светлый этап своей жизни!&raquo;.</span></p>
<p><strong>Что принесет тебе этот год?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Будет очень много радостных моментов с близкими. Если ты мечтала о настоящей любви &mdash; мечта близка к исполнению. Этот год &mdash; про создание уюта, совместные вечера под пледом, кофе по утрам и самые искренние объятия.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Год идеально подходит для исполнения заветных желаний. Открывайся миру, мечтай без ограничений!&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Жди стабильности и успеха.Особенно хорошо будут идти дела у тех, кто работает в творческих профессиях, помогает другим или создает что-то красивое.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Деньги будут приходить легко, особенно если твоя работа связана с эмоциями, заботой или вдохновением других людей.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><strong>Совет карты</strong><strong><br /></strong><span style="font-weight: 400;">Верь в свою звезду!&nbsp; Не бойся быть счастливой!</span> <span style="font-weight: 400;">&nbsp;Ты заслуживаешь самых ярких эмоций, самой искренней любви и самой уютной жизни.</span></p>`,
            },
            "ex": {
                normal: `<p><span style="font-weight: 400;">Когда-то он рисовал в своём воображении картинку идеальной жизни: домик, садик, семейные обеды и счастье до конца дней. И, возможно, видел в тебе ту самую спутницу для этой идеальной сказки. Но вот беда: чтобы мечты сбывались, мало просто мечтать &mdash; надо ещё и действовать.</span></p>
<h3><strong>Что его ждёт:</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Погоня за ускользающим счастьем: Будет судорожно пытаться догнать уходящий поезд &mdash; строить отношения наспех, лишь бы не быть одному.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Разочарование, потомоу что подлинная близость не покупается красивыми обещаниями.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Постоянное сравнение: Каждая встречная будет невольно сравниваться с тобой. И &mdash; увы для него &mdash; проигрывать.</span><span style="font-weight: 400;"><br /></span></li>
</ul>
<p><span style="font-weight: 400;">А ты? Ты обнимаешь свою жизнь всей душой. Ты знаешь: счастье не приходит извне &mdash; оно рождается в тебе. А бывший... всё ещё листает свои пустые сценарии, думая: &laquo;Где я свернул не туда?&raquo;.</span></p>`
            }
        }
    },
    "nine-of-cups": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Мечты сбываются, и да, ты в главной роли!&nbsp;</span></p>
<p><span style="font-weight: 400;">Ах, Девятка Кубков &mdash; это когда ты просыпаешься с мыслью &laquo;Вот бы всё сложилось&raquo; &mdash; и оно действительно начинает складываться. Это карта удовольствия, праздника жизни и момента, когда можно расслабиться и сказать: &laquo;Я это заслужила!&raquo;</span></p>
<p><strong>Общее значение карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Карта символизирует удовлетворение, радость, исполнение желаний и заслуженные плоды твоих стараний.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты проделала путь, собрала опыт, иногда шла сквозь шторм &mdash; и вот теперь можно выдохнуть и кайфануть.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Это ещё не &laquo;финиш&raquo;, как у Десятки Кубков, но это тот волшебный момент, когда жизнь будто делает тебе реверанс.</span></li>
</ul>
<p><strong>Совет карты:</strong><span style="font-weight: 400;">&nbsp;</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не пытайся контролировать всё &mdash; позволь жизни удивить тебя.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Побалуй себя &mdash; прямо сейчас. Не потому что надо, а потому что ты можешь.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Отмечай даже маленькие победы &mdash; это и есть магия жизни.</span></li>
</ul>
<p><span style="font-weight: 400;">Девятка Кубков улыбается тебе из расклада и шепчет:</span></p>
<p><span style="font-weight: 400;">&laquo;Ты заслужила момент, когда можно быть просто счастливой. Не анализируй &mdash; почувствуй. И бокал подними за себя!&raquo;</span></p>
`, 
                reversed: `<p><span style="font-weight: 400;">Когда вроде всё есть, но не радует.&nbsp;&nbsp;</span></p>
<p><span style="font-weight: 400;">Перевернутая Девятка Кубков &mdash; это та ситуация, когда пир устроен, стол накрыт, свечи горят&hellip; а внутри пусто. Ты вроде сделала всё по списку &laquo;как быть счастливой&raquo;, но удовольствие &mdash; не доставлено. Карта подсказывает: что-то идёт не так, как хотелось, и скорее всего &mdash; это не внешние обстоятельства, а внутренний дисбаланс.</span></p>
<p><strong>Общее значение карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты могла достичь цели, но она оказалась не такой сладкой, как ожидалось.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Либо мечта всё никак не реализуется, и ты начинаешь сомневаться в себе, своих силах, или вообще в смысле пути.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Иногда это про завышенные ожидания, иллюзию того, что счастье обязательно должно выглядеть &laquo;вот так&raquo;. Но нет.</span></li>
</ul>
<p><span style="font-weight: 400;">Внутри &mdash; эмоциональная пустота или разочарование, даже если внешне всё вроде &laquo;норм&raquo;.</span></p>
<p><span style="font-weight: 400;">Совет карты:</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Вернись к себе. Не к идеалам и картинкам из соцсетей, а к своим желаниям и ощущениям.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Попробуй отпустить сценарии &laquo;как должно быть&raquo; и спроси себя: &laquo;а как мне хочется?&raquo;.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не пытайся заглушить внутреннюю пустоту яркой мишурой. Лучше честно с ней встретиться и понять, что хочет твоя душа.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Устрой себе детокс от ожиданий, от чужих мнений, от сравнения.</span></li>
</ul>
<p><span style="font-weight: 400;">Перевернутая Девятка Кубков честно говорит:</span></p>
<p><span style="font-weight: 400;">&laquo;Ты заслуживаешь кайфа от жизни &mdash; но, может быть, ищешь его не там. Не в тарелке суши и не в новых туфлях. Хотя туфли &mdash; класс&raquo;.</span></p>
`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Этот год будет для тебя настоящим праздником! Девятка Кубков &mdash; это карта исполнения желаний, радости и наслаждения жизнью.&nbsp;</span></p>
<p><strong>Что принесет тебе этот год?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты наконец-то увидишь результаты своего труда! Все, что ты вкладывала в свои мечты и проекты &mdash; начнет приносить плоды.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ожидаются яркие, эмоциональные моменты в любви.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Этот год сулит финансовую стабильность и даже изобилие.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Этот год &mdash; про то, чтобы научиться отдыхать красиво. Шопинг? СПА-день? Путешествие туда, где ты всегда мечтала побывать? Все это будет тебе доступно &mdash; позволь себе радоваться и наслаждаться жизнью.</span></li>
</ul>
<p><strong>Совет карты</strong><strong><br /></strong><span style="font-weight: 400;">Позволь себе роскошь быть счастливой! Мечтай, празднуй каждый день, балуй себя! Твои мечты реальны &mdash; Вселенная тебя поддерживает.</span></p>`,
            },
            "ex": {
                normal: `<p><span style="font-weight: 400;">Когда-то он чувствовал себя королём жизни. Желания сбывались, удовольствия лились рекой, друзья хлопали по плечу, а эго росло быстрее, чем тесто в духовке. Его жизнь напоминает ресторан, в котором подают только десерты: вроде бы красиво и сладко, а питательности &mdash; ноль.</span></p>
<h3><strong>Что его ждёт:</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Переедание удовольствиями: он будет хватать всё подряд &mdash; новые отношения, новые игрушки, новые забавы &mdash; лишь бы не оставаться наедине с собой.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Как только очередная цель будет достигнута, он будет ощущать не радость, а опустошение.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Потеря ориентиров: без реальных целей он начнет топтаться на месте, превращаясь в вечного искателя счастья в чужих глазах.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Страх быть забытым: ощущение, что жизнь проходит мимо, а он остаётся всё в той же комнате со старыми желаниями и выцветшими плакатами мечт.</span></li>
</ul>
<p><span style="font-weight: 400;">А ты? Ты умеешь радоваться маленьким моментам. Ты не просто загадываешь желания &mdash; ты их воплощаешь. А бывший... остается в ловушке своих иллюзий, окружённый мишурой, которая больше не блестит. </span></p>
`
            }
        }
    },
    "eight-of-cups": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Восьмёрка Кубков &mdash; это не просто карта ухода. Это момент, когда ты выбираешь себя, даже если путь вперёд &mdash; в темноту. Всё вроде бы есть: комфорт, стабильность, &laquo;нормальная&raquo; жизнь... Но что-то внутри чего-то не хватает.&nbsp;</span></p>
<p><span style="font-weight: 400;">Общее настроение карты:</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты стоишь на пороге важного личного перехода. Это может быть смена взглядов, ценностей, внутренней философии.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Твоё прошлое не плохое, ты многое там получила &mdash; но теперь оно стало тесным. Как платье, из которого ты выросла.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Это карта внутреннего взросления, интуитивного отказа от &laquo;не твоего&raquo;.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Возможно, ты пока не видишь, что дальше. Но ты точно знаешь: так, как раньше &mdash; уже не хочется.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><span style="font-weight: 400;">Совет карты:</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Прислушайся к себе. Если душа шепчет &laquo;уходи&raquo; &mdash; услышь.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не бойся неопределенности. Ты не теряешь, ты очищаешь пространство.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Помни: уйти &mdash; это тоже действие. И иногда оно важнее, чем оставаться.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Восьмёрка Кубков нежно, но настойчиво говорит:</span></li>
</ul>
<p><span style="font-weight: 400;">&laquo;Ты выросла из этой жизни. Поблагодари её &mdash; и иди. Там, за горизонтом, тебя ждёт нечто большее. Не бойся. Это твой путь&raquo;.&nbsp;</span></p>
`, 
                reversed: `<p><span style="font-weight: 400;">Перевёрнутая Восьмёрка Кубков &mdash; это звонок от Вселенной, в духе: &laquo;Хватит ходить по кругу, красотка, пора на выход из этого лабиринта комфорта&raquo;.</span></p>
<p><span style="font-weight: 400;">Ты вроде живешь, улыбаешься, занимаешься делами... Но где-то глубоко внутри понимаешь, что всё это &mdash; не совсем твоя жизнь. Ты будто примеряешь чужое платье и убеждаешь себя, что оно сидит идеально. Но оно колется, жмёт и не радует.</span></p>
<p><strong>Общее значение карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты давно знаешь, что что-то не так. Но продолжаешь оставаться там, где тебе уже неинтересно, неудобно, не по душе.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Причин может быть масса: страх перемен, привычка, давление извне, иллюзия стабильности.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Но сейчас момент, когда это &laquo;притворное счастье&raquo; начинает откровенно утомлять.</span></li>
</ul>
<p><span style="font-weight: 400;">И ты ловишь себя на мысли: &laquo;А может, всё бросить и начать сначала? Но как&hellip;&raquo;</span></p>
<p><span style="font-weight: 400;">Эта карта как зеркало: показывает, где ты себе врешь &mdash; и просит быть честной.</span></p>
<p><strong>Совет карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Верни себе право выбирать.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не бойся отказаться от жизни, которая тебе не подходит &mdash; даже если она выглядит &laquo;нормально&raquo;.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не тяни с перезагрузкой &mdash; ты уже чувствуешь, что пора.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Сделай шаг. Маленький. Но свой.</span></li>
</ul>
<p><span style="font-weight: 400;">Перевернутая Восьмерка Кубков говорит тебе мягко, но твёрдо:</span></p>
<p><span style="font-weight: 400;">&laquo;Ты слишком долго шла не туда, чтобы продолжать. Пора развернуться и пойти туда, где тебя действительно ждут&raquo;.&nbsp;</span></p>
`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Этот год для тебя будет годом больших открытий и осознанных шагов. Восьмёрка Кубков аккуратно берет тебя за руку и шепчет: &laquo;Оставь позади то, что больше не греет твою душу. Впереди тебя ждет настоящее счастье!&raquo;.&nbsp;</span></p>
<p><strong>Что принесет тебе этот год?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты поймешь, что какие-то вещи, отношения или проекты отжили своё.Смело отпуская старое, ты освободишь место для чего-то по-настоящему твоего.</span></li>
</ul>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Возможно, ты отпустишь отношения, которые давно перестали делать тебя счастливой.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">В сфере работы &mdash; время решительных перемен. Ты можешь уйти с работы, которая больше тебя не вдохновляет, или запустить проект мечты, на который раньше не хватало смелости.</span></li>
</ul>
<p><strong>Совет карты</strong><strong><br /></strong><span style="font-weight: 400;">Не бойся перемен. Доверься внутреннему зову &mdash; он не обманет. То, что ты отпустишь, уйдет для того, чтобы дать тебе намного больше, чем ты когда-либо могла себе представить.</span>&nbsp;</p>`,
            },
            "ex": {
                normal: `<p><span style="font-weight: 400;">Когда-то ему казалось, что все блага мира уже в кармане: отношения, успехи, красивые цели. Но теперь у него всё внутри будет звенеть тишиной &mdash; как в пустом доме после вечеринки. Он будет стараться удержаться за старое, искать смысл в привычных вещах, но... тщетно.&nbsp;</span></p>
<p><strong>Что его ждёт:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Блуждание между мирами: он будет метаться, уходить от всего привычного... и снова возвращаться к нему, потому что страшно двигаться в неизвестность.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Постоянное ощущение упущенной выгоды.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Эмоциональное одиночество: люди вокруг будут, но связи &mdash; нет. Потому что настоящий он остался где-то в прошлом.</span></li>
</ul>
<p><span style="font-weight: 400;">А ты та, кто не боится уходить туда, где начинается настоящая жизнь. Ты понимаешь, что нельзя стоять на месте, если душа требует движения. Ты делаешь шаги вперёд, даже если страшно. Потому что знаешь: за страхом всегда стоит новая свобода. Твои мечты больше не заперты в старых стенах. Твои желания больше не поддаются сомнениям. Ты строишь свою жизнь так, как хочешь &mdash; ярко, смело, искренне.</span></p>
`
            }
        }
    },
    "seven-of-cups": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Ах, Семерка Кубков &mdash; королева розовых очков, воздушных замков и &laquo;ну это точно судьба!&raquo;. Если эта карта выпадает, знай: ты в моменте, когда реальность будто бы размыта. Много всего хочется, но куда идти &mdash; непонятно. А может и не очень хочется решать, ведь в мире фантазий уютно...</span></p>
<p><strong>Общее настроение карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Много идей, планов, мечт &mdash; но все пока на уровне &laquo;хочу всего и сразу!&raquo;.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Много вариантов &mdash; и каждый кажется заманчивым. Но при этом: ни один путь не ясен до конца, и ты словно в тумане.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Это карта иллюзий, мечтаний и соблазнов. Она не говорит, что ты на неправильном пути, но намекает, что путь пока только воображаемый.</span></li>
</ul>
<p><strong>&nbsp;Как распознать фальшивые желания?</strong></p>
<ol>
<li style="font-weight: 400;"><span style="font-weight: 400;">Они звучат красиво, но не дают тебе спокойствия.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты боишься их потерять, но при этом не спешишь воплощать.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Вдохновение есть только в голове, но нет энергии для реальных действий.</span></li>
</ol>
<p><strong>Совет карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Сделай список желаний и спроси по каждому: &laquo;А я это точно для себя хочу?&raquo;.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Перестань гнаться за всем сразу. Один шаг в правильную сторону &mdash; лучше десяти прыжков в никуда.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не принимай решения под влиянием чужих мнений. Сейчас твоя задача &mdash; выйти из &laquo;режима влияния&raquo;.</span></li>
</ul>
<p><strong>Семерка Кубков мягко шепчет:</strong></p>
<p><span style="font-weight: 400;">&laquo;Мечтать &mdash; прекрасно. Но выбирать &mdash; необходимо. Фантазии не сделают шаг за тебя&raquo;.</span></p>
`, 
                reversed: `<p><span style="font-weight: 400;">Очки сняты. Иллюзии &mdash; рассеялись. Осталась ты и правда.&nbsp;&nbsp;</span></p>
<p><span style="font-weight: 400;">Когда Семерка Кубков переворачивается, всё сказочное, что раньше кружило голову, начинает&hellip; рассыпаться. Но не пугайся &mdash; это очень даже хорошо. Потому что вместо того, чтобы летать среди миражей, ты наконец видишь реальность такой, какая она есть.</span></p>
<p><strong>Общее настроение карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты выныриваешь из облака фантазий, иллюзий и чужих ожиданий.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Что-то стало наконец-то кристально ясным, хоть это и немного выбило из колеи.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">&nbsp;Возможно, ты разочаровалась в ком-то или в чём-то &mdash; но на смену пришло чувство свободы: &laquo;Так, с этим теперь всё понятно&raquo;.</span></li>
</ul>
<p><strong>Совет карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Определи, что осталось настоящим. Из всего, что ты хотела &mdash; что всё ещё откликается внутри?</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не бойся пересмотреть цели и мечты. Отказаться &mdash; не значит проиграть. Это значит освободить место для своего.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Сделай акцент на конкретных шагах, а не на абстрактных мечтах. Сейчас &mdash; время реалистичных решений.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">И помни: ты не обязана больше никому ничего доказывать.</span></li>
</ul>
<p><span style="font-weight: 400;">Перевернутая Семерка Кубков &mdash; это момент истины.</span></p>
`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Этот год для тебя будет словно прогулка по сказочному саду возможностей.</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">Семёрка Кубков шепчет: &laquo;Мечтай, желай, выбирай! Только помни: не всё золото, что блестит!&raquo;.&nbsp;</span></p>
<p><strong>Что принесет тебе этот год?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты окажешься в ситуации, когда жизнь щедро подаст тебе множество вариантов. Новые проекты, знакомства, идеи &mdash; все будет кружиться вокруг тебя, как красивый калейдоскоп.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ожидай бурю эмоций и много новых знакомств. Люди будут к тебе тянуться, восхищаться тобой и дарить внимание. Главное &mdash; не спешить с выбором: кто-то будет носить красивую маску, но под ней не окажется глубины.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Возможностей для роста будет множество: повышение, смена работы, новые бизнес-идеи. Но здесь тоже действует правило &laquo;семь раз отмерь &mdash; один отрежь&raquo;.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Могут появиться неожиданные источники дохода, но не все они будут надежными.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><strong>Совет карты</strong><strong><br /></strong><span style="font-weight: 400;">Не гонись за блестяшками. Выбирай сердцем, а не глазами. Только тогда твои мечты превратятся в прочную и красивую реальность.</span></p>`,
            },
            "ex": {
                normal: `<p><strong>Что с ним происходит сейчас?</strong><strong><br /></strong><span style="font-weight: 400;">Он мечтает... о прошлом, о будущих победах, о новых отношениях, которые точно будут лучше прежних. Мечтает так усердно, что уже сам запутался, где реальность, а где его фантазии. Бывший строит воздушные замки, в которых он главный герой &mdash; богатый, счастливый, вечно желанный. Только вот реальная жизнь в это время тихонько смеется в сторонке.</span></p>
<p><strong>Что его ждёт?</strong><strong><br /></strong><span style="font-weight: 400;">Ему придется узнать неприятную правду: иллюзии не спасают от одиночества. Планы срываются один за другим. Люди, которых он считал друзьями, начнут потихоньку отходить в сторону &mdash; устали слушать его рассказы о грандиозных проектах, которые так и остаются в мечтах. В личной жизни &mdash; то же самое: много фантазий, мало реальных действий. И когда он будет ждать чуда... оно просто не придет.</span></p>
<p><span style="font-weight: 400;">А ты? Ты уверенно идешь вперед. Ты больше не строишь воздушных замков &mdash; ты строишь реальный замок, в котором сама себе королева. У тебя живые мечты, реальные планы и яркая, полная счастья жизнь. Ты любишь себя больше, чем когда-либо, и это притягивает к тебе новые возможности. Его путь &mdash; это путь через облака пустых фантазий. Твой путь &mdash; дорога по солнечному саду возможностей.</span></p>
`
            }
        }
    },
    "six-of-cups": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Когда в раскладе выпадает Шестерка Кубков, можно облегченно выдохнуть &mdash; шторм закончился, солнышко снова светит, и жизнь будто возвращается в добрые, спокойные рельсы. Эта карта про радость, лёгкость, чувство безопасности и тёплые воспоминания, которые вдруг снова становятся частью настоящего.</span></p>
<p><strong>Общее настроение карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Всё становится мягким, светлым и уютным, будто на сердце включили гирлянду.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Воспоминания из прошлого могут не просто нахлынуть, а вдохновить на новые начинания.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Может возникнуть желание вдохнуть в себя новую жизнь, обновить пространство, окружение, стиль &mdash; или вообще вернуть себе ту самую &laquo;настоящую&raquo; версию себя.</span></li>
</ul>
<p><span style="font-weight: 400;">Совет карты:</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Позволь себе радоваться.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Побудь в моменте. В этой простой, уютной счастливости.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Загляни в прошлое не с болью, а с благодарностью &mdash; оно подарило тебе корни.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Сейчас ты можешь строить новую жизнь из чувства &laquo;мне хорошо&raquo;, а не &laquo;мне надо&raquo;. И это &mdash; главная магия.</span></li>
</ul>
<p><span style="font-weight: 400;">Шестёрка Кубков улыбается тебе и говорит:</span></p>
<p><span style="font-weight: 400;">&laquo;Ты больше не должна быть сильной каждую минуту. Сейчас можно просто жить. И быть счастливой. Потому что ты уже там, где душа поёт&raquo;.&nbsp;</span></p>
`, 
                reversed: `<p><span style="font-weight: 400;">Шестерка Кубков &mdash;&nbsp; это когда ты вроде бы и хочешь нового, но мысленно продолжаешь листать старые фото, вспоминать &laquo;как было&raquo; и сравнивать это с настоящим. Спойлер: обычно &mdash; не в пользу настоящего.</span></p>
<p><strong>Общее настроение карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Прошлое не отпускает &mdash; и ты сама как будто не очень хочешь из него выбираться.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">&nbsp;Может быть, ты цепляешься за старые обиды, несбывшиеся мечты, отношения, которые давно пора отпустить.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Или наоборот &mdash; идеализируешь &laquo;как было&raquo;, обесценивая &laquo;как есть&raquo;.</span></li>
</ul>
<p><span style="font-weight: 400;">Перевернутая Шестерка Кубков шепчет:</span></p>
<p><span style="font-weight: 400;">&laquo;Ты держишься за дверь, которая давно закрыта. А рядом &mdash; другая. Открытая. Только повернись&hellip;&raquo;.&nbsp;</span></p>
<p><strong>Совет карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Посмотри на настоящее не глазами той, кем ты была &mdash; а той, кем ты стала.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Сделай ревизию воспоминаний. Что действительно дает тебе силы? А что &mdash; отнимает?</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Прости. Отпусти. Благодари. И двигайся дальше &mdash; теперь уже без чемоданов с призраками.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Хватит жить в архиве. Твой новый альбом ждет наполнения.</span></li>
</ul>
<p><span style="font-weight: 400;">Перевернутая Шестерка Кубков &mdash; это нежный толчок вперёд:</span></p>
<p><span style="font-weight: 400;">&laquo;Ты достойна быть счастливой не только в воспоминаниях. Время написать новую главу &mdash; не продолжение, а новую историю. И ты можешь её придумать сама&raquo;.&nbsp;</span></p>
`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Всё вокруг будет напоминать тебе, как важно доверять сердцу, радоваться простым вещам и ценить искренние моменты. Шестёрка Кубков приносит с собой атмосферу доброты, ностальгии и душевного комфорта. Это время возвращения к своим корням, переосмысления прошлого и закладки фундамента для будущего.</span></p>
<p><strong>Что ждать от года?&nbsp;</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Возможны неожиданные и очень теплые знакомства &mdash; легкие, словно летний ветерок. Без напряжения, без игр.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Этот год в работе будет очень гармоничным и спокойным. Нет гонки, стресса или борьбы &mdash; только размеренное движение к цели.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Возможны подарки от близких, наследство или неожиданные приятные выплаты.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Эмоциональный фон года будет мягким и исцеляющим. Ты словно проживаешь внутреннюю перезагрузку: обретешь больше гармонии с собой, отпустишь обиды и начнешь ценить мелочи.</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><strong>Совет карты</strong></p>
<p><span style="font-weight: 400;">Твоя главная сила этого года &mdash; способность видеть прекрасное в маленьком. Не нужно спешить &mdash; всё самое лучшее войдет в твою жизнь мягко и вовремя. Ищи вдохновение в простом. Вспомни, кем ты мечтала стать. Позволь себе быть мягкой, открытой и радостной, как ребенок. И ты увидишь, как Вселенная начнет дарить тебе маленькие чудеса каждый день.</span></p>`,
            },
            "ex": {
                normal: `<p><span style="font-weight: 400;">Твой бывший эмоционально застрянет в прошлом, как в старой спальне с выцветшими обоями и плюшевыми игрушками. Может начать искать старые контакты, дружить с бывшими друзьями, писать тебе (или хотя бы смотреть сторис в полночь). </span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;"><br /></span><strong>Что его ждёт?&nbsp;</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Будет пытаться воссоздать атмосферу старых добрых времен. Общаться с теми, кто напоминает ему о его золотом прошлом.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Страх перед новыми знакомствами и новыми возможностями.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">&nbsp;Вместо того чтобы строить новое счастье, будет жить копиями того, что когда-то потерял.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><strong>Совет для тебя: </strong><span style="font-weight: 400;">ты &mdash; не музейный экспонат его памяти. Ты &mdash; экспонат в Зале Славы!&nbsp; </span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">И пока он листает альбомы былой жизни, напевай песню Монеточки: </span><span style="font-weight: 400;"><br /></span><em><span style="font-weight: 400;">Если б мне платили каждый раз</span></em><em><span style="font-weight: 400;"><br /></span></em><em><span style="font-weight: 400;">Каждый раз, когда я думаю о тебе </span></em><em><span style="font-weight: 400;"><br /></span></em><em><span style="font-weight: 400;">Я бы бомжевала возле трасс </span></em><em><span style="font-weight: 400;"><br /></span></em><em><span style="font-weight: 400;">Я бы стала самой бедной из людей&hellip;</span></em></p>
`
            }
        }
    },
    "five-of-cups": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Когда выпадает Пятёрка Кубков, это как застать себя на слезливом финале любимого фильма, только&hellip; фильм &mdash; твоя жизнь. Карта про потерю, сожаление, горечь, разбитые надежды и ощущение, что &laquo;всё не так, как хотелось&raquo;. Но давай разберёмся: это не конец истории, а эмоционическая пауза.</span></p>
<p><strong>Общее состояние:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты можешь чувствовать себя опустошенной, разочарованной, разбитой.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Внутри звучит &laquo;а ведь могло бы быть по-другому...&raquo;, и это мешает отпустить ситуацию.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты застряла в сожалениях о прошлом и не замечаешь, что жизнь не остановилась.</span></li>
</ul>
<p><span style="font-weight: 400;">Пятерка Кубков &mdash; это про утрату. Но также про то, что не всё потеряно.</span></p>
<p><strong>Совет карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Позволь себе погрустить. Но не вечно. Поплачь. Выговорись. Выпиши на бумагу. Но не строй себе гнёздышко в этой печали.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Посмотри: что ещё осталось целым? Что ты по-прежнему можешь сделать? Кто рядом с тобой?</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Постарайся увидеть за болью возможности. Даже если они пока маленькие и хрупкие.</span></li>
</ul>
`, 
                reversed: `<p><span style="font-weight: 400;">Из болота &mdash; да в счастье, если хватит смелости отпустить.&nbsp;</span></p>
<p><span style="font-weight: 400;">Когда Пятерка Кубков переворачивается, это похоже на момент, когда ты наконец-то вытираешь слёзы, отодвигаешь пустую чашку кофе и такая: &laquo;Всё! Хватит! Жизнь продолжается&raquo;. Это карта восстановления, выхода из апатии и эмоционального похмелья. Не всегда легко, не всегда весело &mdash; но это уже движение. Ты начинаешь выныривать из эмоционального дна, пусть и с помятой прической.</span></p>
<p><strong>Общее настроение карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты прожила свою боль и потихоньку начинаешь видеть свет в конце тоннеля.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Возможно, ещё где-то грустит внутри, но ты уже не в эпицентре шторма.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты принимаешь факт утраты, перестаешь играть роль жертвы и наконец-то начинаешь жить дальше.</span></li>
</ul>
<p><span style="font-weight: 400;">Карта говорит тебе:</span></p>
<p><span style="font-weight: 400;">&laquo;Ты можешь снова выбрать жизнь. Только на этот раз &mdash; свою. Без боли. Без старых обид. Просто &mdash; новую&raquo;.&nbsp;</span></p>
`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Когда на весь год выпадает Пятёрка Кубков, кажется, что жизнь предлагает важный урок: научиться отпускать. Это не будет тяжелый год. Скорее &mdash; время нежного исцеления, когда ты наконец-то попрощаешься с тем, что больше не радует, и освободишь место для настоящего счастья.&nbsp;</span></p>
<p><strong>Что принесет тебе этот год?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Старые обиды и недопонимания могут всплыть, чтобы их наконец-то исцелить.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Этот год поможет отпустить старые связи, которые тянули вниз.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Возможна смена профессии или учеба чему-то совершенно новому.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Конец года обещает приятные бонусы за стойкость и веру в себя!</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты пройдешь через стадии: боль &rarr; принятие &rarr; прощение &rarr; новая жизнь.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Важно уделять время себе: дневники, арт-терапия, работа с психологом или просто прогулки в одиночестве помогут пройти этот путь легче.</span></li>
</ul>
<p><strong>Советы карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не бойся быть честной с собой. Разреши себе плакать, грустить и радоваться заново. Только через принятие приходит настоящее счастье.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ошибки &mdash; это всего лишь часть пути. Настоящие победы приходят к тем, кто умеет подниматься снова и снова.</span></li>
</ul>
<p><span style="font-weight: 400;">Пятёрка Кубков учит смотреть не только на опрокинутые чаши (на потери и разочарования), но и замечать те чаши, что остались полными &mdash; надежду, любовь, мечты.</span></p>`,
            },
            "ex": {
                normal: `<p><span style="font-weight: 400;">Его ждёт эмоциональный крах. Какая-то ситуация в жизни (развал отношений, карьеры или мечт) заставит его погрузиться в режим драма кинг. Он будет зациклен на своих потерях и винить всех вокруг... кроме себя.</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;"><br /></span><strong>Что его ждёт в жизни?&nbsp;</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Отстранение от друзей. Ощущение, что никто его не понимает. Страх довериться снова.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Погружение в депрессивное зацикливание. Одиночество. Самосожаление.</span></li>
</ul>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Отказ видеть новые возможности. Он будет настолько занят тем, что разбил три кубка, что не заметит: рядом стоят два идеальных, целых шанса на счастье. Но... он их не возьмёт. По крайней мере долгое время.</span></li>
</ul>
<p><span style="font-weight: 400;">5 Кубков &mdash; карта о том, что человек сам себе строит тюрьму из боли. И он будет сидеть в ней, упиваясь своим героическим страданием.</span></p>
<p><strong>Совет для тебя: </strong><span style="font-weight: 400;">ты &mdash; весенний сад, а он &mdash; осенняя лужа грусти. Не нужно садиться в лужу, когда можно танцевать босиком по лепесткам сакуры. Пусть он занимается своими драмами, а ты &mdash; своей шикарной жизнью.</span></p>
`
            }
        }
    },
    "four-of-cups": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Когда выпадает Четвёрка Кубков, это как день, когда ты в уютном пледе, у тебя есть кофе, Netflix и свободное время&hellip; но настроение всё равно где-то на дне.&nbsp; Карта говорит: всё вроде бы неплохо &mdash; но что-то внутри не радуется.</span></p>
<p><span style="font-weight: 400;">Это карта эмоционального ступора, скуки, тоски и отсутствия вдохновения. Ты смотришь на всё привычное и ловишь себя на мысли: &laquo;А зачем всё это?&raquo;.&nbsp;</span></p>
<p><strong>Общее настроение:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты вроде бы достигла каких-то целей, но внутри &mdash; тишина и разочарование.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Всё, чего ты хотела, у тебя уже есть... но радости это почему-то не приносит.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Может быть ощущение эмоционального выгорания, потери вкуса к жизни.</span></li>
</ul>
<p><strong>Что делать с этой картой:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Посмотри внутрь себя. Чего ты на самом деле хочешь? Это было твоё желание &mdash; или навязанное?</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Откройся новым ощущениям. Может быть, ты просто устала &mdash; и тебе не грустно, а скучно.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Посмотри по сторонам. Есть шанс, что что-то очень крутое уже рядом &mdash; просто ты его не замечаешь.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Поддайся вдохновению. Это хороший момент перепридумать свои мечты. Да, так можно.</span></li>
</ul>
`, 
                reversed: `<p><span style="font-weight: 400;">Привет от упущенных шансов!&nbsp;</span></p>
<p><span style="font-weight: 400;">Когда эта карта выпадает вверх дном, Таро как бы включает тревожный звоночек.&nbsp;</span></p>
<p><span style="font-weight: 400;">Перевернутая Четверка Кубков часто сигнализирует о том, что шанс был. Возможность была. Окно открылось&hellip; но ты либо не увидела, либо не захотела смотреть в ту сторону. </span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;"><br /></span><strong>Основной посыл:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты что-то упустила. Причём &mdash; не из-за злого рока, а скорее из-за своей вялости и апатии.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Сейчас может накрывать жалость к себе, сожаление, разочарование &mdash; не в других, а в своих реакциях.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Карта мягко, но настойчиво напоминает: &laquo;Всё, что приходит &mdash; не обязательно приходит дважды&raquo;.&nbsp;</span></li>
</ul>
<p><strong>Что делать:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не грызи себя. Да, упустила &mdash; но это не конец света.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ищи новое окно. Если одно закрылось &mdash; откроется другое (и ты уже будешь с уроком).</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Проанализируй, почему ты пропустила шанс. Страх? Лень? Сомнения? Это важно.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">&nbsp;Будь бдительна к следующей возможности. Она может быть не такой яркой, но более настоящей.</span></li>
</ul>
<p><span style="font-weight: 400;">Перевернутая Четверка Кубков &mdash; не про вину, а про осознание.</span></p>
<p><span style="font-weight: 400;">&laquo;Всё, что мы упустили, чему не обрадовались &mdash; не всегда возвращается. Но это не повод плакать в подушку. Это повод &mdash; стать внимательнее к себе и своим желаниям&raquo;.&nbsp;</span></p>
`
            },
            "year": {
                normal: `<h3><strong>Общая энергия года</strong></h3>
<p><span style="font-weight: 400;">Когда на весь год выпадает Четвёрка Кубков, это сигнал от Вселенной посмотреть на рутину по-новому. Это время, когда внешне всё может казаться скучным, обыденным или слишком привычным. Но на самом деле &mdash; самые важные перемены происходят внутри тебя.&nbsp; Это год, когда ты сможешь перестроить свои ожидания и начать жить с чувством благодарности и осознанности.</span></p>
<p><strong>О чём будет год?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Может прийти ощущение пресности: всё слишком стабильно, спокойно, без вспышек страсти. Но это не повод грустить! Год дарит шанс перезагрузить чувства, добавить свежести в отношения.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Иногда будет казаться, что всё стоит на месте, и прогресса нет. Но на самом деле за кулисами происходят важные подготовительные процессы.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">В карьере или учёбе год пройдет без резких скачков, но и без падений. Это время, когда тебе важно научиться получать радость от процесса, а не только от результата.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><strong>Советы карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Учись принимать жизнь, не обесцениваний её подарки.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не торопи события. Делай своё дело с любовью &mdash; результаты придут тогда, когда ты сама будешь к ним готова внутренне.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Очень важно не уходить в апатию или жалость к себе, а искать новые источники вдохновения.&nbsp;</span></li>
</ul>
<h3><strong>Мудрость карты:</strong></h3>
<p><span style="font-weight: 400;">Порой самые чудесные подарки приходят тогда, когда мы перестаём их ждать. Открой глаза и сердце &mdash; жизнь полна удивительных чудес. Не упусти свой шанс быть счастливой уже сегодня.</span></p>`,
            },
            "ex": {
                normal: `<p><span style="font-weight: 400;">В ближайшем будущем твоего бывшего ждёт полнейшая апатия. Он будет чувствовать, что всё не то, всё скучно, что ему ничего не нравится, но при этом пальцем не пошевелит, чтобы что-то изменить. Подарки судьбы будут падать ему на колени, а он будет воротить носом. </span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">Что ещё его ждёт?&nbsp;</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Скука. Раздражение на весь мир. Ощущение пустоты.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он будет сам создавать себе эмоциональное болото, жалуясь на то, что в его жизни нет фейерверков.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Постепенно он станет тем самым странным чуваком, который всегда на тусовке, но в углу. Типа пришёл, но как бы я выше этого, уходит обиженный, что его никто не развлекал.</span></li>
</ul>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Постепенно закроется от мира, став циничным и неудовлетворенным.&nbsp;</span></li>
</ul>
<p><strong>Совет для тебя: </strong><span style="font-weight: 400;">ты &mdash; праздник, который случается каждый день. Пусть он сидит на своём диване вечной скуки, а ты &mdash; разгуливаешь по ярмарке чудес, обнимая свои мечты и смеясь до упаду.</span></p>
`
            }
        }
    },
    "three-of-cups": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Готовься к празднику, душа моя!</span></p>
<p><span style="font-weight: 400;">Когда на столе появляется Тройка Кубков, это значит, что время грустить официально отменяется. Карта будто говорит тебе:</span></p>
<p><span style="font-weight: 400;">&laquo;Бери бокальчик, зови подружек, надевай платье &mdash; потому что жизнь снова улыбается тебе!&raquo;.&nbsp;</span></p>
<p><span style="font-weight: 400;">Это Аркан радости, эмоционального подъема, дружбы, поддержки и праздника. Здесь про объединение, женскую энергию, душевное тепло и ту самую легкость бытия, за которой мы так скучаем в серых буднях.</span></p>
<p><strong>Общее настроение карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты выходишь из сложного этапа жизни с ощущением: &laquo;Фух, пронесло!&raquo;.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Всё начинает налаживаться, светлеть и раскрываться, как бокал просекко на закате.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты чувствуешь поддержку от мира и людей. Причем не фальшивую, а настоящую, теплую, как объятия лучшей подруги.</span></li>
</ul>
<p><strong>&nbsp;Совет карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Остановись и поблагодари мир за то, что становится легче.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Разреши себе радоваться, даже если &laquo;ещё не всё идеально&raquo;.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Проведи время с близкими и душевными людьми &mdash; они сейчас как витамин С для твоей энергии.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><span style="font-weight: 400;">Карта говорит:</span></p>
<p><span style="font-weight: 400;">&laquo;Жизнь &mdash; это не только борьба. В ней есть место лёгкости, веселью, близости. Не бойся быть счастливой. Даже просто сегодня&raquo;.&nbsp;</span></p>
`, 
                reversed: `<p><span style="font-weight: 400;">Если в прямом положении Тройка Кубков &mdash; это праздник, объятия и радость, то перевернутая карта говорит: &laquo;Кто-то перенёс веселье... на неопределенный срок&raquo;.</span></p>
<p><span style="font-weight: 400;">В общем, вместо вечеринки с шампанским &mdash; синдром &laquo;всё не то и всё не с теми&raquo;.</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">Это карта разочарования, упущенных встреч, эмоционального холода, который пришёл, когда ждали тепла.</span></p>
<p><strong>Ключевые сигналы:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Обманутые надежды &mdash; то, что ты так ждала, оказалось переоценено.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Провал в коммуникации &mdash; отменённые встречи, игнор, неловкость в отношениях.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Отстраненность в дружбе или семье &mdash; ты реже общаешься с близкими или отдаляешься сама.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Хроническое откладывание &mdash; и дело не в лени, а в эмоциональном истощении или загруженности.</span></li>
</ul>
<p><strong>Советы карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не вини себя за отсутствие радости. У всех бывают периоды &laquo;эмоциональной зимы&raquo;.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Назначь себе время для тёплого общения. Иногда даже одна встреча может разжечь угасший огонёк внутри.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не строй грандиозных ожиданий. Сейчас &mdash; период &laquo;маленьких шагов и тихих радостей&raquo;.</span></li>
</ul>
<p><span style="font-weight: 400;">Сейчас важно пересмотреть свои ожидания. Возможно, ты просто устала. Ты не обязана быть весёлой, если внутри штиль. Иногда Таро просит нас остановиться и позволить себе почувствовать разочарование. Это не слабость &mdash; это честность. Но помни: жизнь циклична, и если сегодня настроение &laquo;дома, плед, тишина&raquo;, то завтра всё снова может заиграть яркими красками.</span></p>
`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Когда в раскладе на целый год появляется Тройка Кубков, знай: год будет полон праздников, теплых встреч и маленьких побед. Это карта легкости, дружбы, поддержки и счастья.</span><span style="font-weight: 400;"><br /></span><strong><br /></strong><strong>Что принесет тебе этот год?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Это год укрепления любви через радость. Будет много совместных праздников, свиданий, поездок. Вы почувствуете себя не только парой, но и настоящими друзьями, готовыми поддерживать друг друга.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Если ты одна, </span><strong>г</strong><span style="font-weight: 400;">отовься к новым знакомствам! Карта сулит романтические встречи, флирт, дружеские посиделки, где легко может вспыхнуть искра.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">В карьере год будет невероятно плодотворным, но без ощущения выгорания.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Деньги будут приходить через людей: рекомендации, совместные проекты, помощь друзей.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты вспомнишь, как важно разрешать себе просто быть счастливой, без повода и сверхусилий.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><strong>Совет:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не ищи отношения &laquo;ради галочки&raquo;. Ищи людей, с которыми смеяться легко и по-настоящему! Тогда любовь сама найдёт тебя.</span></li>
</ul>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Делай ставку на коллектив, а не на одиночный забег.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Благодари Вселенную за каждый прекрасный день. </span></li>
</ul>`,
            },
            "ex": {
                normal: `<p><span style="font-weight: 400;">Твой бывший окажется на нескончаемом празднике жизни: тусовки, вечеринки, знакомства, смех до упаду&hellip; Только вот прикол: для всех это праздник, а для него &mdash; отчаянная попытка убежать от внутренней пустоты. Он будет как клоун в блестках: снаружи весело, а внутри &mdash; хочется сесть в угол и поплакать.</span></p>
<p><strong>Будущее:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Постоянные компании. Поверхностное веселье.</span> <span style="font-weight: 400;">Сначала &mdash; эйфория! Потом &mdash; пресыщение.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он будет цепляться за внешние удовольствия, чтобы заглушить внутреннюю боль &mdash; но удовольствие будет выветриваться быстрее шампанского на солнце.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Много пустых разговоров и фальшивых улыбок. Быстрые, легкие романы. Флирт без глубины.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Погоня за вниманием.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Партнёры будут приходить и уходить, оставляя его еще более опустошенным.</span></li>
</ul>
<p><strong>К чему всё это приведёт?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Чувство одиночества в толпе.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Понимание, что настоящее счастье не купишь за деньги.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Стремительное эмоциональное выгорание.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Желание вернуться к чему-то настоящему, но неумение это найти.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он станет человеком, который смеётся громче всех &mdash; потому что тишина для него страшнее всего.</span></li>
</ul>
<p><strong>Совет для тебя: </strong>т<span style="font-weight: 400;">ы &mdash; настоящий праздник, но не для всех.&nbsp; Твой бал не для тех, кто ищет развлечения, а для тех, кто умеет ценить настоящее. Пусть он пляшет в своём вечном карнавале иллюзий, а ты строишь свою жизнь полную счастья. </span></p>
`
            }
        }
    },
    "two-of-cups": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Связь, которая согревает.&nbsp;</span></p>
<p><span style="font-weight: 400;">Если эта карта появляется в раскладе &mdash; приготовься к магии контакта. Это может быть романтическое влечение, глубокое взаимопонимание, союз по любви или душе. Но суть не в форме &mdash; суть в энергии: притяжение, гармония, душевная синхронность.</span></p>
<p><span style="font-weight: 400;">Двойка Кубков &mdash; это про &laquo;мы&raquo;, не &laquo;я&raquo;. Про соединение, в котором хочется задержаться надолго.</span></p>
<p><strong>Ключевые значения карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Новая встреча, полная симпатии и открытости.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Гармония в союзе: будь то любовь, дружба или творческое партнёрство.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Честный обмен эмоциями &mdash; без манипуляций и недосказанностей.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Обоюдное притяжение и тёплая душевная близость.</span></li>
</ul>
<p><span style="font-weight: 400;">На более глубоком уровне:</span></p>
<p><span style="font-weight: 400;">Это карта про резонанс душ, про то, как легко и просто может быть с &laquo;тем самым&raquo; человеком. Необязательно влюбиться &mdash; иногда Двойка Кубков предвещает союз, который просто идеально ложится на твою душу.</span></p>
<p><strong>Это может быть:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Новый любимый человек.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Новый партнёр по делу.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Новый путь в профессии, к которому лежит сердце.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Или даже примирение с самим собой.</span></li>
</ul>
<p><strong>Совет карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не бойся открыться.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Позволь себе поверить в доброе и красивое.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не анализируй &mdash; чувствуй. </span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><span style="font-weight: 400;">Двойка Кубков &mdash; это про нежность, взаимность, и то редкое чувство: &laquo;меня понимают&raquo;. Ты на пути к чему-то настоящему, доброму, трепетному. Позволь этому прийти &mdash; и впусти в сердце.&nbsp;</span></p>
`, 
                reversed: `<p><span style="font-weight: 400;">Перевернутая Двойка Кубков &mdash; это не катастрофа и не &laquo;всё пропало&raquo;, но определённо сигнал: гармония нарушена, чувства не совпадают, что-то пошло не так. Вроде бы и был контакт, но теперь &mdash; конфликты, неловкость или даже боль.</span></p>
<p><strong>Что говорит карта:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Разочарование в отношениях. Ты ожидала любви, а получила нервотрепку.</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">Несовпадение на глубоком уровне. Внешне всё мило, но внутри &mdash; пусто.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Неподходящее время для союза. Может, вы оба просто не готовы.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Тот случай, когда &laquo;влюбилась в идею&raquo;, а не в человека.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><strong>Как проявляется:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ссоры на ровном месте, ощущение, что вас постоянно не слышат или не понимают.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Притворство в отношениях, игра в &laquo;идеальную пару&raquo;, когда в душе всё ноет.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Дисбаланс: один любит, другой терпит, один дает, другой берет.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Обещания без действий, романтика без настоящей близости</span></li>
</ul>
<p><strong>А можно ли всё починить?</strong></p>
<p><span style="font-weight: 400;">Иногда &mdash; да. Но только если обе стороны хотят работать над этим.&nbsp;</span></p>
<p><strong>Советы карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не цепляйся за то, что не делает тебя счастливой.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не подстраивайся под человека, если он не видит в тебе ценности.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Дай себе время понять: это реальное чувство или самообман.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Иногда лучше отпустить, чем держаться за иллюзию &laquo;счастливой пары&raquo;.</span></li>
</ul>
<p><span style="font-weight: 400;">Перевернутая Двойка Кубков &mdash; это не трагедия, а проверка: на зрелость, на готовность, на правду. Если вы оба сможете пройти сквозь шипы &mdash; может быть, выйдете в сад. А если нет &mdash; не беда. Ты поменяешь отношение к жизни&nbsp; &mdash; и встретишь того, с кем не придётся притворяться.</span></p>
`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Когда выпадает Двойка Кубков, это значит, что главная тема года &mdash; соединение. Соединение сердец, союз интересов, зеркальное отражение себя в другом человеке. Это время любви: не только романтической, но и глубокой душевной. Ты можешь почувствовать себя как никогда понятой, услышанной, принятой. В твоей жизни появятся (или укрепятся) связи, от которых внутри будет светло.</span></p>
<p><strong>Что принесет тебе этот год?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">В отношениях возможно предложение, съезд, общий проект, малыш &mdash; да, карта сильная!</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Если ты одна, то это год судьбоносной встречи. Ты притянешь в свою жизнь человека, с которым будет ощущение: &laquo;Как будто мы знакомы тысячу лет&raquo;.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">На работе или учёбе ты найдешь настоящих единомышленников. В делах будет много согласованности, гармонии, общих целей.</span></li>
</ul>
<p><strong>Советы от карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Будь открыта &mdash; и не бойся показаться ранимой. Именно уязвимость станет магнитом для любви.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не бойся делегировать и доверять другим. Путь в одиночку &mdash; не для этого года!</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Если раньше ты пыталась соответствовать &mdash; теперь просто будь собой. И это будет самым прекрасным подарком самой себе.</span></li>
</ul>`,
            },
            "ex": {
                normal: `<p><span style="font-weight: 400;">Твой бывший, устав от одиночества, найдет кого-то. Всё будет выглядеть как романтическая комедия: свидания, нежные взгляды, понимание друг друга с полуслова&hellip; Он реально почувствует, что нашёл ту самую связь, что его снова любят и он нужен.</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">Но скоро в этой сказке начнут трещать швы:&nbsp;</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он будет сам портить отношения своими страхами, ревностью и придирками, даже если с другой стороны будет идеальный человек.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Постарается влиться в новый круг общения через партнера. Будет играть роль идеального бойфренда, но его раскусят.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он получит отказ, возможно, ему даже разобьют сердце. Угадай, к кому он побежит за поддержкой?&nbsp;</span></li>
</ul>
<p><strong>Совет для тебя: </strong>т<span style="font-weight: 400;">ы &mdash; не его терапевт. И ты не обязана его спасать. Пусть разбирается со своими проблемами сам, а ты иди дальше к тому, кто обнимет тебя не потому что боится остаться один, а потому что ценит тебя и не ищет кого-то лучше.</span></p>
`
            }
        }
    },
    "ace-of-cups": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">О, вот и он &mdash; настоящий &laquo;Грааль&raquo; в Таро! Если Туз Кубков выпадает в раскладе, знай: Вселенная налила тебе бокал чистейшей радости, готовый перелиться через край. Но! Только если ты готова его принять с открытым сердцем.</span></p>
<p><strong>Общее значение карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Внутренний покой и гармония.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Духовное обновление.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Глубокое эмоциональное удовлетворение.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Подарки судьбы: от радостных новостей до настоящей любви.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Начало нового душевного цикла.&nbsp;</span></li>
</ul>
<p><span style="font-weight: 400;">Это момент, когда ты наконец-то чувствуешь, что дышишь полной грудью, улыбаешься не через силу и искренне веришь в добро. Ну разве не магия?</span></p>
<p><span style="font-weight: 400;">Совет карты:</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Прими свои чувства. Даже те, что неудобны.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не бойся новой любви &mdash; будь это человек, дело или идея.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Позволь себе быть ранимой, искренней, настоящей.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Будь открыта миру, и он откроется тебе.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><span style="font-weight: 400;">Туз Кубков &mdash; это момент, когда душа расправляет крылья. Ты вошла в зону высокой вибрации, полной света, любви и возможностей. Пусть это будет не просто эмоция, а старт твоей новой главы &mdash; искренней, наполненной, живой. Ты заслужила это. </span></p>
`, 
                reversed: `<p><span style="font-weight: 400;">Вот это поворот! Перевернутый Туз Кубков &mdash; не просто потерянные эмоции, а предупреждение: что-то не так с тем, чему ты открыла своё сердце. Карта шепчет (а иногда кричит): &laquo;Ты выливаешь чувства в сосуд с трещиной. И тебе же потом будет больно&raquo;.&nbsp;</span></p>
<p><strong>Ключевые послания карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Эмоциональное разочарование, пустота, слёзы.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Чувства, в которые вложилась &mdash; неискренни или не ценны.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Обман, самообман или манипуляция через эмоции.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Попытка залить душевную пустоту чужой любовью, одобрением, вниманием.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Нарушенный баланс: ты даёшь больше, чем получаешь</span></li>
</ul>
<p>&nbsp;</p>
<p><strong>Как себя поддержать:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не ругай себя за то, что чувствовала. Это не слабость, а человечность.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Устрой себе эмоциональную детокс-паузу &mdash; убери телефон, соцсети, токсичных собеседников.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Если что-то (или кто-то) заставляет тебя сомневаться в себе &mdash; держись подальше.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не поддавайся на манипуляции: &laquo;если любишь &mdash; потерпи&raquo; &mdash; это не про любовь.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><span style="font-weight: 400;">Перевернутый Туз Кубков &mdash; не про трагедию, а про сигнал тревоги. Ты &mdash; не марионетка в театре чужих эмоций. Очисти свою чашу. Заново наполни её тем, что настоящее. Вода может быть живительной, но и токсичной. Не пей из чаши, в которой бурлит яд.&nbsp;</span></p>
`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Когда выпадает Туз Кубков, это значит только одно: Вселенная решила одарить тебя по-королевски! Это год эмоций, вдохновения, любви, творчества и нового счастья. Ты словно держишь в руках наполненную чашу, а она переливается через край. И ты готова делиться этой радостью со всем миром &mdash; просто потому, что счастья так много, что невозможно удержать только для себя.&nbsp;</span></p>
<p><strong>Что принесет тебе этот год?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Если в отношениях были трудности, на смену придут гармония и взаимопонимание.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Появятся новые вдохновляющие проекты. Возможны предложения, от которых сердце запрыгает от радости. Все начинания, где нужна душа (искусство, психология, мода, благотворительность, блогерство, креативные профессии) &mdash; будут особенно успешными.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Это год, когда ты поймешь, какая ты удивительная. Не из-за достижений. Просто потому, что ты есть.&nbsp;</span></li>
</ul>
<p><strong>Советы карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не бойся открыться чувствам. Этот год &mdash; чтобы любить, принимать любовь и позволять себе быть счастливой.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Выбирай только те проекты, которые зажигают тебя изнутри. Если дело не вызывает улыбку &mdash; оно не твое!</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Радуйся маленьким моментам. </span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<h3><strong>Мудрость года от Туза Кубков:</strong></h3>
<p><span style="font-weight: 400;">Туз Кубков говорит, что твоя Чаша Года уже наполнена светом &mdash; бери её с собой и иди творить волшебство вокруг.</span></p>`,
            },
            "ex": {
                normal: `<p><span style="font-weight: 400;">Твой бывший внезапно почувствует, что готов начать всё с чистого листа! Его сердце открыто! Душа поёт! Он действительно получит шанс начать что-то лучшее: новое чувство, новый этап, возможность перерождения.</span> <span style="font-weight: 400;">Но не всё так просто.</span> <span style="font-weight: 400;">Его эмоциональная незрелость снова всё испортит. Как ребёнок, который обнимает любимую игрушку так сильно, что ломает ее.</span></p>
<p><strong>Что его ждёт?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Эмоциональные качели: от вдохновения до апатии.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Попытки быть открытым, дружелюбным, строить новые связи.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Быстрое выгорание, потому что он не выдержит баланс </span><span style="font-weight: 400;">&laquo;Брать </span><span style="font-weight: 400;">&mdash;</span><span style="font-weight: 400;"> давать&raquo;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он поймёт: отношения, дружба всё это супер, но чтобы удержать их, нужно уметь заботиться не только о себе, но и о другом человеке. А он так не умеет.&nbsp;</span></li>
</ul>
<p><span style="font-weight: 400;">А ты? А ты умеешь как отдавать, так и брать своё. Никто больше не будет пользоваться тобой, и никто не будет тебя обделять. А ему ещё долго долго учиться&hellip; </span></p>
`
            }
        }
    },
    "king-of-swords": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Если бы в Таро был адвокат дьявола &mdash; это точно Король Мечей. Он не плачет в подушку, не кидается в эмоции и не шлёт голосовые на 3 минуты. Он анализирует, решает и побеждает. А теперь внимание: если эта карта выпала тебе &mdash; пора взять ответственность за жизнь в свои руки.</span></p>
<p><strong>Общее значение карты:</strong></p>
<p><strong>Король Мечей &mdash; это:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Мудрец, стратег, ментор или глава.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Официальное лицо, юрист, врач, преподаватель, госслужащий.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Человек с холодным умом, но горячим чувством справедливости.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Символ того, что сейчас рулит логика, а не эмоции.&nbsp;</span></li>
</ul>
<p><strong>Если карта про ситуацию:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты вступаешь в этап, когда важны четкость, рассудительность и самоконтроль.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Никаких &laquo;а вдруг&raquo;, &laquo;а если&raquo; и &laquo;ой, не знаю&raquo; &mdash; только четкие цели и план действий.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Возможно, предстоит официальное разбирательство, оформление документов, собеседование, суд &mdash; и все пройдет удачно, если будешь думать, а не драматизировать.</span></li>
</ul>
<p><strong>Что карта просит от тебя:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Быть внутренним Королем Мечей &mdash; уверенной, собранной, разумной.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Отставить эмоции &mdash; хватит сомневаться, начни анализировать.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не рубить с плеча &mdash; взвесь, оцени, потом действуй.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Сохранять спокойствие, даже когда вокруг все в панике.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><span style="font-weight: 400;">Король Мечей &mdash; это экзамен на взрослость. Он не даст тебе плакаться в жилетку, но даст силу стать самой себе опорой. Ты проходишь важный рубеж, где эмоции &mdash; на паузу, а здравый смысл &mdash; на максимум. Будь своей собственной авторитетной фигурой. Ты уже знаешь, что делать &mdash; просто сделай. </span></p>
`, 
                reversed: `<p><span style="font-weight: 400;">Когда логика становится оружием.&nbsp;</span></p>
<p><span style="font-weight: 400;">Если в прямом положении этот король &mdash; эталон разума, то перевернутый он превращается в хладнокровного манипулятора, диктатора и демона аргументов. Да, он по-прежнему умен. Но... использует свой интеллект не для помощи, а в своих, часто мрачных целях.</span></p>
<p><strong>Ключевые смыслы карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Тиран, самодур, жестокий начальник или холодный манипулятор.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Человек, который давит интеллектом, а не ведёт диалог.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Несправедливость, злоупотребление властью, словесная агрессия.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Недоброжелатель в тени &mdash; может плести интриги, вставлять палки в колёса.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><strong>Если карта про ситуацию:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Вокруг нечестная игра &mdash; кто-то нарушает правила, и тебе надо быть осторожной.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Это не время доверять на слово, особенно если обещания слишком красиво звучат.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Могут быть судебные разбирательства, конфликты с властями, трудные разговоры с начальством.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Возможно, ты сама стала слишком жесткой и контролирующей, пора отпустить хватку</span></li>
</ul>
<p><strong>Что делать:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не ведись на провокации &mdash; оставайся выше, не вступай в бессмысленные споры.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Проверь документы, договора, переписки &mdash; могут быть подводные камни.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ограничь общение с тем, кто тебя подавляет, унижает или манипулирует.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Прими, что некоторые битвы не стоят твоего душевного спокойствия</span></li>
</ul>
<p><span style="font-weight: 400;">Мягкий совет:</span></p>
<p><span style="font-weight: 400;">Иногда Король Мечей в таком положении указывает не только на внешнего врага, но и на внутреннего критика. Того самого, который говорит:&nbsp; &mdash; &laquo;Ты недостаточно хороша, чтобы...&raquo;</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">Останови его. Ты достойна, сильна и умна. Просто будь внимательна и добрее к себе.</span></p>
`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Когда на трон садится Король Мечей, начинается эпоха разума, мудрости и стратегий. Этот год &mdash; про зрелость, силу мысли, умение управлять своей жизнью четко и уверенно. </span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;"><br /></span><strong>Что принесёт тебе этот год?&nbsp;</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Король Мечей &mdash; блестящий профессионал. И тебе предстоит делать карьерные рывки за счет своих знаний и уверенности. Ты будешь продвигаться вверх не потому, что &laquo;повезло&raquo;, а потому что ты доказала свою компетентность и силу духа. Финансовая стабильность будет напрямую связана с твоей решимостью и готовностью действовать умно.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">В отношениях возможны разговоры о будущем, совместные важные решения (например, брак, крупные покупки, переезд).</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Если ты одинока, то высока вероятность встретить умного, успешного и статусного мужчину.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Этот год идеален для начала серьёзных проектов, обучения, получения дипломов, оформления важных документов.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Этот год &mdash; про расстановку приоритетов, зрелость и осознанность.</span></li>
</ul>
<p><strong>Советы карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Держи эмоции под контролем и доверяй логике. Успех будет на стороне тех, кто умеет планировать и соблюдать внутреннюю дисциплину.</span></li>
</ul>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Пусть разум не подавляет сердце. Любовь &mdash; это тоже искусство баланса.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Помни, настоящая сила &mdash; в ясности намерений и честности перед собой.</span></li>
</ul>`,
            },
            "ex": {
                normal: `<h3><strong>Что его ждёт?</strong></h3>
<p><span style="font-weight: 400;">Он будет </span><strong>делать вид</strong><span style="font-weight: 400;">, что всё прекрасно, что он всё просчитал, что у него есть план, цели. Но внутри &mdash; пустота. Прям гулкая пустота, как в дорогом лофте без мебели.</span></p>
<p><strong>Будущее:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Карьера вверх, а личная жизнь &mdash; вниз. Он будет привлекать умных, сильных, но не сможет быть рядом, потому что вечно на эмоциональной дистанции.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он будет казаться успешным мужчиной, но на деле &mdash; глубоко несчастный.&nbsp;</span></li>
<li><span style="font-weight: 400;">Он останется с умом &mdash; но без души рядом. И сердце, которое когда-то могло любить, теперь просто работает как калькулятор: чувства = ошибка 404.</span><span><br /></span></li>
</ul>
<p><span style="font-weight: 400;"><strong>Совет тебе:</strong> ты &mdash; пламя. Ты &mdash; искра. Ты &mdash; живое сердце в мире офисных сердец. А он?&nbsp; Пусть сидит, анализирует, строит схемы и логические конструкции. А ты &mdash; танцуй. Люби. Живи.</span></p>
`
            }
        }
    },
    "queen-of-swords": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Если тебе выпала Королева Мечей &mdash; знай: ты на грани важной правды. Не эмоциональной, не приукрашенной &mdash; а честной, обнажённой и зрелой.</span></p>
<p><span style="font-weight: 400;">Кто такая Королева Мечей?</span></p>
<p><strong>Это женщина, которая:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Уже прошла своё пламя боли &mdash; и теперь знает себе цену.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Стратегична и умна &mdash; если и говорит, то по делу.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Справедлива, но может быть безжалостной к самообману.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Видит суть вещей, как рентген &mdash; не лезь к ней с манипуляциями.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Чётко разделяет чувства и действия &mdash; потому что иначе бы не выжила.&nbsp;</span></li>
</ul>
<p><strong>Что значит эта карта в раскладе:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Появление в твоей жизни влиятельной, разумной, решительной женщины &mdash; может быть как союзницей, так и зеркалом.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Пора тебе самой стать этой Королевой &mdash; включить голову, убрать эмоции с пьедестала.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Сейчас важна ясность, правда, и твоя способность сказать &laquo;нет&raquo; &mdash; даже если будет неприятно.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Карта может указывать на ситуацию, где только логика, рассудительность и самообладание спасут положение. </span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><span style="font-weight: 400;">Королева Мечей &mdash; это сила, отточенная болью. Она не плачет от боли &mdash; она делает из неё лезвие. И этим лезвием она разрезает путы, ложь, иллюзии и страх. Ты способна жить так, как решишь сама. Главное &mdash; не забывай: под этим королевским панцирем бьётся твоё доброе сердце. Холод снаружи &mdash; не значит пустота внутри.</span></p>
`, 
                reversed: `<p><span style="font-weight: 400;">Когда Королева Мечей переворачивается, ее сдержанность превращается в холодность, а её сила &mdash; в горечь. Она уже не просто сильная женщина, она женщина, которая не простила. Себя. Мир. Или прошлое. Эта карта о том, как боль может заморозить душу и превратить остроту ума в оружие саморазрушения.</span></p>
<p><strong>Что говорит перевернутая Королева Мечей:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Одиночество стало не выбором, а наказанием.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Чувства игнорируются, но внутри кипит гнев, обида, разочарование.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Резкость и язвительность &mdash; способ защититься и не подпустить никого близко.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Упрямство мешает признать, что нужна помощь или поддержка</span><span style="font-weight: 400;"><br /><br /></span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Логика и холодный расчёт начинают доминировать даже там, где нужны душа и тепло. </span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><strong>&nbsp;Если карта о тебе:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Возможно, ты слишком долго &laquo;держишь фасад&raquo; и носишь маску &laquo;мне всё равно&raquo;.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Внутри &mdash; буря эмоций, страх быть отвергнутой, боль, которую ты не выпускаешь наружу.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты могла стать слишком строгой к себе и другим, закрыв сердце из страха снова почувствовать боль.&nbsp;</span></li>
</ul>
<p><strong>Что делать:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не бойся признать слабость, просить о поддержке &mdash; это не делает тебя слабее.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Перестань держать всё в себе &mdash; проговори боль, проживи чувства.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Научись снова чувствовать &mdash; пусть не сразу, но понемногу.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не бойся отпустить контроль и впустить тепло &mdash; ты не обязана быть ледяной. </span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><span style="font-weight: 400;">Перевернутая Королева Мечей &mdash; это женщина на грани, уставшая от войны с миром и собой. Ей нужна не броня, а объятие. Пусть разум и логика не исчезают &mdash; они важны. Но без сердца даже самый острый ум режет не к месту. Ты сильная. Но сила &mdash; это ещё и способность быть живой.&nbsp;</span></p>
`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Когда на троне оказывается Королева Мечей, в жизнь приходит потрясающая ясность.</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">Ты скидываешь все иллюзии, убираешь розовые очки и начинаешь видеть мир таким, какой он есть &mdash; без прикрас, но и без лишних страхов.</span></p>
<p><strong>Что принесёт тебе этот год?&nbsp;</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">В карьере наступает период мудрых решений и новых возможностей. Деньги будут приходить, если будешь твердо отстаивать свои интересы и не давать никому использовать тебя.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">В отношениях время важных разговоров: возможно, совместное принятие решений о будущем.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Освобождение от старых обид и ограничений. Ты научишься спокойно проходить через любые испытания, сохраняя достоинство.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты будешь той самой женщиной, которую невозможно сбить с пути, потому что ты &mdash; сама себе компас.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Год идеально подходит для обучения, развития логических навыков, оформления документов, работы с информацией.&nbsp;</span></li>
</ul>
<p><strong>Советы карты:&nbsp;</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не бойся брать на себя лидерство. Ты способна организовать всё так, чтобы и другие тянулись за тобой.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Смело заявляй о своих потребностях.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Отделяй важное от лишнего без жалости.</span></li>
</ul>`,
            },
            "ex": {
                normal: `<p><span style="font-weight: 400;">Внутри него теперь как в библиотеке без окон &mdash; всё умно, сухо и ни капли живого. Он всё анализирует, режет эмоции на части, делает выводы, страдает строго по расписанию. Сердце у него теперь не бьётся. Он думает, что он всё контролирует. Но если бы ты только знала, сколько всего он на самом деле не прожил. Он заледенел. Не потому что стал мудрым, а потому что испугался быть уязвимым снова. Он всё ещё помнит. И бережно прячет эти воспоминания за 10 слоями сарказма и псевдоинтеллектуализма.</span></p>
<p><span style="font-weight: 400;">Он идёт по жизни один. Не потому что выбрал свободу, а потому что построил стены, а не мосты. Он будет умным. Он будет правильным. Он будет рассудительным. И будет смотреть, как вокруг смеются и любят другие.&nbsp;</span></p>
<p><span style="font-weight: 400;">Ты останешься для него </span><strong>той самой, с которой было по-настоящему</strong><span style="font-weight: 400;">, но он НИКОГДА это не признает. Он будет вспоминать твои слова, твои взгляды, твои эмоции. Теперь у него &mdash; дисциплина, сдержанность и эмоциональная диета. А у тебя &mdash; жизнь. С теплом, с настоящими чувствами и местом для счастья.</span></p>
<p><span style="font-weight: 400;">Он выбрал лёд. Ты выбрала пламя. </span></p>
`
            }
        }
    },
    "knight-of-swords": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Когда этот умный, резкий и очень решительный парень въезжает в твой расклад, знай: время на раздумья &mdash; ноль, действовать надо вчера! Рыцарь Мечей &mdash; это чистая энергия движения, слов, идей и резких поворотов. Он не будет сидеть и долго рассуждать. Он уже в седле, уже мчится, уже побеждает &mdash; а ты успевай за ним.</span></p>
<p><strong>Что говорит карта:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Готовься к бурному развитию событий, особенно если ты ждала какого-то прорыва &mdash; он на подходе!</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты сейчас как на адреналине: мозг работает быстрее, чем у окружающих, ты в теме, ты остра, ты на коне. </span><span style="font-weight: 400;"><br /><br /></span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Появляется вдохновение, идея, которая кажется судьбоносной &mdash; и ты готова за неё бороться. Ты заряжена и мотивирована, словно только что вышла с манифеста самореализации.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">У тебя тысяча мыслей в секунду, язык &mdash; как скальпель: острый и беспощадный.</span></li>
</ul>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты не боишься вызова, берёшь ответственность и летишь к цели на всех парах.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Но: есть риск стать слишком резкой, упрямой и даже невыносимо нетерпимой.</span></li>
</ul>
<p><strong>Важные сигналы:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Скорость &mdash; это круто, но не забывай про повороты: не вылети с трассы!</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Идея может быть гениальной, но нужно её чуть-чуть притормозить и продумать детали.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не превращайся в токсичного рыцаря, который &laquo;всё знает&raquo; и не слушает других.</span></li>
</ul>
`, 
                reversed: `<p><span style="font-weight: 400;">Ох, девчонки, перевернутый Рыцарь Мечей &mdash; это ураган с характером. Он несётся на всех парах... непонятно куда, зачем и против кого. Энергия у него бурлит, страсти кипят, но вот куда всё это выплескивается &mdash; тот ещё вопрос.</span></p>
<p><strong>Что значит эта карта:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Импульсивность на максималках: слово за слово &mdash; и вот ты уже в эпицентре драмы, где даже не планировала участвовать.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Гордость, гнев и &laquo;я знаю лучше всех&raquo; &mdash; прямо как сериал, где героиня решает всё сама, не спрашивая сценария у жизни.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Эгоцентризм: &laquo;Я, мне, моё!&raquo; &mdash; и всё. Остальные могут подождать, или вообще исчезнуть с радаров.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><strong>Советы от карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Перестань игнорировать тревожные звоночки &mdash; ты слышишь их, просто не хочешь принимать.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Постарайся не втягиваться в ссоры.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ищи суть, а не победу в споре &mdash; потому что иногда трофей в битве оказывается пустым.&nbsp;</span></li>
</ul>
<p><strong>Мудрость карты:</strong></p>
<p><span style="font-weight: 400;">&laquo;Когда ты всё знаешь и ни в чём не сомневаешься &mdash; ты в самой опасной точке своего пути&raquo;.</span></p>
`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Рыцарь Мечей &mdash; это ветер перемен, буря решимости и поток вдохновения! В этом году ты будешь жить по принципу: </span><span style="font-weight: 400;">&laquo;</span><span style="font-weight: 400;">Хочу &mdash; делаю</span><span style="font-weight: 400;">&raquo;</span><span style="font-weight: 400;">, </span><span style="font-weight: 400;">&laquo;</span><span style="font-weight: 400;">Мечтаю &mdash; достигаю</span><span style="font-weight: 400;">&raquo;.</span></p>
<p><strong>Что несет карта:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Суперскорость событий: твои планы будут сбываться быстрее, чем ты успеешь удивиться.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Остроту ума и языка &mdash; ты будешь находить самые точные слова и принимать решения мгновенно.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Возможность проявить свои таланты &mdash; особенно если нужно быстро принимать решения и быть первой.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">С деньгами все будет активно: могут быть большие приходы &mdash; и такие же большие расходы. Важно планировать, чтобы не тратить сгоряча.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">В отношениях возможны вспышки ревности, споры, но главное &mdash; это будет проверка чувств на прочность.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">В этом году ты поймёшь, что настоящий успех приходит к тем, кто не ждет идеального момента, а создает его сам.</span></li>
</ul>
<p>&nbsp;</p>
<p><strong>Советы карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Смелость откроет перед тобой двери, но мудрость поможет удержаться внутри!</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Следи за словами &mdash; твоя искренность прекрасна, но лишняя резкость может ранить. Береги то, что тебе дорого.</span></li>
</ul>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">События будут происходить стремительно, так что держи баланс между скоростью и внимательностью.</span></li>
</ul>`,
            },
            "ex": {
                normal: `<p><span style="font-weight: 400;">Он маскирует свою тревожность под гиперактивность. Он боится, что если он замедлится &mdash; почувствует пустоту. И вот он мчится: делами, спорами, решениями, спонтанными идеями&hellip; Чтобы не слышать и не видеть правду о том, что он несчастен.&nbsp;</span></p>
<p><span style="font-weight: 400;">Он будет нестись по жизни, оставляя за собой шлейф недоделанных дел, обиженных людей и&hellip; сломанных дверей. Карьерный рывок? Да. Смелые решения? Да.Результат? Хаотичный, нервный и временами абсолютно абсурдный.</span></p>
<p><span style="font-weight: 400;">Он будет казаться динамичным, пробивным, с характером.&nbsp;&nbsp;</span></p>
<h3><strong>Чем всё закончится?</strong></h3>
<p><span style="font-weight: 400;">Он выгорит. Он поймёт, что постоянно быть в боевом режиме &mdash; значит истязать себя. Он надел меч, но забыл щит. В итоге он останется с ощущением: &laquo;Почему всё так сложно? Почему всё рушится? Почему меня никто не понимает?&raquo;. И ответ будет прост: потому что он не научился останавливаться. Думать. Чувствовать. Прощать.</span></p>
<p><strong>Что советуют тебе карта: </strong><span style="font-weight: 400;">Ты &mdash; не трасса для его гонок. Ты &mdash; сад, в котором всё цветёт медленно, но по-настоящему. Пусть он дальше мечется, как ужаленный. А ты &mdash; наслаждайся жизнью, в которой каждое чувство имеет смысл, а не тайминг.</span></p>
`
            }
        }
    },
    "page-of-swords": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Когда в твоей голове &mdash; идеи, в рукаве &mdash; козырь, а в глазах &mdash; вечный вопрос &laquo;А что, если?..&raquo;.&nbsp;</span></p>
<p><strong>Общий вайб карты:</strong></p>
<p><span style="font-weight: 400;">Ты сейчас &mdash; как любопытная ведьмочка с блокнотом и бокалом просекко: глаз да глаз за всеми, ушки на макушке, анализируешь всё, даже то, о чём никто не подумал! Паж Мечей &mdash; это про наблюдательность, про интеллект, про острый язычок, но ещё и про то, что ты пока только на старте чего-то крутого.</span></p>
<p><strong>О чём сигналит Паж:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Информация &mdash; ключ к успеху. Не спеши действовать, сначала всё разведай, прослушай, подгляди (но красиво!).</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты можешь получить новости, инсайты, сплетни или правду, которая многое изменит.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Будь готова учиться, гуглить, читать, задавать вопросы и быть на шаг впереди &mdash; да, это твой стиль!</span></li>
</ul>
<p><strong>Итог:</strong><span style="font-weight: 400;"> Не суетись, не поддавайся тревожности &mdash; ты умна, сообразительна и шикарно вооружена знанием. А значит &mdash; победа за тобой. &laquo;Маленький меч &mdash; тоже меч. Особенно если ты умеешь им блистать&raquo;.&nbsp;</span></p>
`, 
                reversed: `<p><span style="font-weight: 400;">Когда ты думала, что играешь в &laquo;Шерлока&raquo;, а вышло&hellip; &laquo;Дом-2&raquo; с драмой и надуманными выводами.&nbsp;</span></p>
<p><strong>Общий вайб карты:</strong></p>
<p><span style="font-weight: 400;">Паж Мечей в перевернутом виде &mdash; это когда мозг кипит, но логика уплыла, как шампанское на вечеринке. Тут &mdash; и лишняя подозрительность, и необоснованные выводы, и даже желание &laquo;всё знать&raquo; приводит только к стрессу.</span></p>
<p><strong>Что здесь не так:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Подозреваешь всех подряд, хотя реальных оснований &mdash; кот наплакал.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Считаешь, что всё уже разгадала, но ошиблась в интерпретации.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Хватаешься за слухи, драмы и домыслы, вместо фактов.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">В голове &mdash; хаос, мысли скачут, как зайчики на весеннем лугу. </span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><strong>Совет карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Сделай шаг назад. Выдохни. Ты запуталась, но это не навсегда.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Проверь свои источники &mdash; ты не CNN, чтобы раздувать сенсации без подтверждений.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Лучше сфокусируйся на себе, на реальных чувствах, а не на ментальных конспирологиях. </span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><strong>Итог: </strong><span style="font-weight: 400;">Паж Мечей в перевернутом положении &mdash; это как блогерша, которая сделала громкий вывод по заголовку, не дочитав статью. Ты не обязана все знать. Не обязана всё понимать. Просто признай, что устала, и дай себе перезагрузку.</span></p>
`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Паж Мечей &mdash; это любопытство, легкость и жажда знаний! В этом году ты &mdash; девочка-исследовательница, которая расправляет крылья и отправляется навстречу приключениям!&nbsp;</span></p>
<p><strong>Что несет карта:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Озарения, догадки, озорные идеи и вспышки вдохновения.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Новые интересные знакомства и полезные связи.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Внутреннее пробуждение: ты захочешь узнавать, учиться, экспериментировать.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Этот год &mdash; не про глобальные прорывы, а про умное вложение своих сил и знаний. Возможность прокачать навыки: курсы, стажировки, новая специализация. В финансах год может быть на обучение, инвестиции в себя. И это самое умное вложение!&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">В личной жизни все будет, как в красивом ромкоме!&nbsp;</span></li>
</ul>
<p><strong>Советы карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не гонись за быстрой прибылью &mdash; ты строишь фундамент для грандиозного будущего.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Иногда могут быть сомнения или боязнь сделать шаг вперед &mdash; но Паж Мечей советует: Иди! Узнавай! Пробуй!</span></li>
</ul>`,
            },
            "ex": {
                normal: `<p><span style="font-weight: 400;">Если бы карта была шпионом, то это Паж мечей. Но в случае с твоим бывшим, попахивет немного сталкерством. </span><strong><br /></strong><strong><br /></strong><strong>Что он делает?&nbsp;</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Залипает в на твои сторис.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Смотрит твои фото и делает вид, что ему вообще-то пофиг (не пофиг).</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Сидит и думает: Где она? Что она делает? С кем? А вдруг это всё показуха?.. А вдруг она написала это про меня?</span><em><span style="font-weight: 400;"><br /><br /></span></em></li>
</ul>
<p><span style="font-weight: 400;">Он боится. Чувствовать, говорить, проявляться. Поэтому он предпочитает стоять в тени и&nbsp; Он будет обсуждать тебя... но только с теми, кто не скажет тебе об этом.Вместо того чтобы расти, он будет продолжать играть в эмоциональный шпионаж:&nbsp;</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не делает шагов.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не признается в чувствах.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не отпускает тебя по-настоящему.</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">Но и не возвращается &mdash; ведь тогда надо говорить по-взрослому.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><span style="font-weight: 400;">Всё, что он делает &mdash; это собирает данные, чтоб убедить себя, что у тебя всё не так радужно без него. Не угадал. Ты для него &mdash; загадка, к которой он уже не имеет ключа. Он вспоминает тебя как ту, с кем было сложно, но захватывающе. А ещё он ОЧЕНЬ хочет знать, не забыла ли ты его. Но спросить? Никогда!</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;"><br /></span><strong>Чем всё это закончится?&nbsp;</strong></p>
<p><span style="font-weight: 400;">Он останется с горой невыраженных слов и миллионом несделанных шагов. Он всё прослушает, всё проанализирует, но ничего не изменит. Превратится в того, кто когда-то мог, но испугался собственных чувств. Он станет мастером наблюдения за чужой жизнью&hellip; но свою так и не построит.</span><br /><br /><strong>Совет карты:</strong><span style="font-weight: 400;"> ты &mdash; не документ для анализа, не пост в соцсети и не головоломка. Ты &mdash; вселенная. И в неё не заглядывают украдкой. Ты заслуживаешь тех, кто не боится сказать: Я тебя вижу. Я тебя чувствую. Я рядом. Пусть он сидит в тени, наблюдая за твоим сиянием.</span></p>
`
            }
        }
    },
    "ten-of-swords": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Когда кажется, что хуже уже не будет &mdash; и ты права. Это дно. Но под ним&hellip; есть батут!</span></p>
<p><strong>Атмосфера карты:</strong><strong><br /></strong><span style="font-weight: 400;">О да, эта карта &mdash; не из лёгких. Здесь всё по-настоящему: разбитое сердце, предательство века, тотальное &laquo;всё пропало!&raquo;. Это когда ты лежишь, уставшая от жизни, а сверху &mdash; еще десять мечей в спине. Ну а как иначе? Настоящая финалистка сезона &laquo;Как не надо жить&raquo;. Но, девочка, это конец только одного этапа, а не всей жизни.</span></p>
<p><strong>Что происходит:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Крах надежд, утраты, боль, от которых не отвертеться.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Карта говорит: &laquo;Не сопротивляйся, уже всё случилось. Просто признай это&raquo;.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Старые пути закрыты, мосты сожжены, привычное &mdash; рухнуло</span></li>
</ul>
<p><strong>Совет карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Признай, что случилось. Не гони от себя боль, это часть исцеления.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не вини себя. Всё произошло не просто так &mdash; это закрытие токсичного сценария.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Пусть слёзы текут, сколько нужно, а потом &mdash; поднимай голову и строй новую реальность.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не звони бывшему! Он, возможно, и есть причина меча номер восемь в спине.</span></li>
</ul>
<p><span style="font-weight: 400;">Десятка Мечей &mdash; не только про конец. Это обнуление, за которым будет нечто светлое.&nbsp;</span></p>
`, 
                reversed: `<p><span style="font-weight: 400;">Что-то действительно было на грани, но ты справилась. И теперь &mdash; только вверх.</span></p>
<p><strong>Общий смысл карты:</strong></p>
<p><span style="font-weight: 400;">Перевернутая Десятка Мечей &mdash; это момент возрождения, когда ты будто поднимаешься из-под груды обломков собственной жизни и&hellip; улыбаешься. Потому что больше не страшно. Ты уже прошла сквозь бурю &mdash; и вышла из неё сильнее, мудрее и, черт возьми, даже красивее. Это карта большой внутренней победы.</span></p>
<p><strong>Что она обещает:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Восстановление после краха &mdash; ты была на дне, теперь ты на старте новой вершины.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Финансовое улучшение, шанс вырваться из долгов, неожиданный рост доходов.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Победа над конкурентами и недоброжелателями &mdash; теперь ты не просто в игре, ты ведёшь игру.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Возвращение энергии и мотивации после апатии или болезни.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Исцеление &mdash; физическое, эмоциональное, духовное. Словно тело и душа нашли общий язык и снова хотят жить. </span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><span style="font-weight: 400;">Совет карты:</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не бойся начать с нуля &mdash; ты уже знаешь, как это.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Принимай подарки судьбы с благодарностью, но без страха: ты их заслужила.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Доверься процессу &mdash; даже если не всё понятно, тебя ведёт мощная энергия обновления.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">И, пожалуйста, не возвращайся туда, где однажды тебя уже уничтожили</span></li>
</ul>
<p><strong>Итог:</strong><span style="font-weight: 400;"> Перевернутая Десятка Мечей &mdash; это когда после тяжёлого шторма ты выходишь на балкон в шелковом халате.&nbsp;</span></p>
`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Десятка Мечей &mdash; карта непростая, но она не про вечное горе, а про конец темной полосы и рассвет после долгой ночи.</span></p>
<p><strong>Что значит эта карта в раскладе года:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты наконец-то попрощаешься с болью и прошлыми обидами. Закончится какая-то тяжелая история &mdash; и освободит место для новой сказки в твоей жизни. Да, будет момент, когда захочется сесть и поплакать &mdash; но потом ты встанешь... и сияешь ярче, чем когда-либо!&nbsp;</span></li>
</ul>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Старая работа/проект/направление могут уйти в прошлое. Освободится пространство для чего-то нового, вдохновляющего и настоящего. Ты наконец поймешь, что хочешь делать &mdash; и перестанешь тратить силы на то, что не работает.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">В любви год честности и истинных чувств. Сложные отношения либо перерастут в новую стадию, либо завершатся.И это &mdash; к лучшему. Жизнь очистит твое пространство для настоящей, искренней любви.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><strong>Советы карты:&nbsp;</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Отпусти всех, кто не ценит тебя. Ты достойна любви, где тебя видят, слышат и берегут. Отпусти всё, что не зажигает тебя. Ты достойна лучшего.&nbsp;</span></li>
</ul>
<p><span style="font-weight: 400;">Это будет год, когда ты найдешь себя заново.</span></p>`,
            },
            "ex": {
                normal: `<p><span style="font-weight: 400;">Десятка</span> <span style="font-weight: 400;">Мечей &mdash; это не просто драма, это </span><em><span style="font-weight: 400;">финал сезона, где герой лежит лицом в грязь. </span></em><em><span style="font-weight: 400;"><br /></span></em><em><span style="font-weight: 400;"><br /></span></em><strong>Что с ним сейчас?&nbsp;</strong></p>
<p><span style="font-weight: 400;">Он лежит с десятью мысленными мечами в спине &mdash; каждый меч подписан:</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Гордыня</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Зависть&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Чревоугодие</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Уныние</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;"> ...и дальше по списку&hellip;</span></li>
</ul>
<p><span style="font-weight: 400;">Он может делать вид, что всё хорошо: фоточки, фейковая продуктивность, бодрые статусы в мессенджере. Но сам знает &mdash; он на дне. </span><span style="font-weight: 400;"><br /></span><strong><br /></strong><strong>Что ждёт его в будущем?&nbsp;</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Замкнется в себе, но всем будет говорить, что всё нормально.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Будет погружаться в зависимости в одиночку &mdash; даже если не алкоголь будет его компанией, то точно фастфуд и бесконечна лента Reels.&nbsp;</span></li>
</ul>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Возможно, удалит тебя из всех соц.сетей. Но в скором времени разблокирует. Соблазн знать, что с тобой, будет больше.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Апатия к жизни.&nbsp;</span></li>
</ul>
<p><span style="font-weight: 400;">Он сломан. И если и встанет &mdash; то уже не тем, кем был.</span></p>
<p><strong>Совет карты: </strong><span style="font-weight: 400;">ты была его шансом на жизнь с сердцем. Он выбрал гордость и понты. Теперь у него &mdash; ничего, кроме боли, уроков и пустоты в груди. А у тебя? Ты &mdash; расцвела. Пока он валяется в своих 10 мечах, ты примеряешь 10 оттенков счастья. Ты не причина его боли. Ты &mdash; та, кто когда-то давала ему свет. А теперь &mdash; забрала его с собой.&nbsp;</span></p>`
            }
        }
    },
    "nine-of-swords": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Если бы у тревоги была визитка &mdash; на ней была бы эта карта.</span></p>
<p><strong>Общий смысл:</strong></p>
<p><span style="font-weight: 400;">Девятка Мечей в прямом положении &mdash; это ночь без сна, сердце без покоя и мозг, устроивший марафон катастроф. Ты накручиваешь себя по полной, видишь мир в мрачных красках, и даже самые простые задачи кажутся непосильными. Это период глубокого внутреннего кризиса, тревоги и даже панических атак. Страхи давят, вина душит, а самокритика не оставляет в покое.</span></p>
<p><strong>Что может происходить:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Навязчивые мысли: ты просыпаешься с тревогой и засыпаешь с ней.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Бессонница и кошмары: подсознание кричит о перегрузке.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Чувство вины: за что-то из прошлого или даже то, что не зависело от тебя.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Сильное разочарование, ощущение, что выхода нет.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Психоэмоциональный срыв, когда любое слово &mdash; как иголка по сердцу.&nbsp;</span></li>
</ul>
<p><strong>Важно понять:</strong></p>
<p><span style="font-weight: 400;">Это не всегда объективная реальность. Ты видишь ситуацию через искаженную линзу тревоги. Иногда мы сами становимся своими худшими врагами &mdash; Девятка Мечей именно об этом.</span></p>
<p><strong>Совет карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Поговори с кем-то: психотерапевт, друг, дневник &mdash; важно выпустить тревоги наружу.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не бойся просить помощи &mdash; ты не слабая, ты человечная.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">&nbsp;Отдели факты от фантазий &mdash; тревога любит драматизировать.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><span style="font-weight: 400;">Девятка Мечей &mdash; это ночь перед рассветом. Больно, страшно, одиноко. Но даже эта буря пройдёт. И ты снова увидишь утро. А пока &mdash; будь мягкой с собой, обними себя покрепче и напомни себе:&nbsp; &laquo;Это просто фаза. Я сильная. Я выберусь&raquo;.&nbsp;</span></p>
`, 
                reversed: `<p><span style="font-weight: 400;">Общее значение:</span></p>
<p><span style="font-weight: 400;">Перевернутая Девятка Мечей &mdash; это глоток воздуха после паники, луч света после кошмарной ночи. То, что казалось концом света, начинает терять свою силу. Ты постепенно выходишь из тревожного кокона, и самое главное &mdash; начинаешь видеть, что не всё было так ужасно, как казалось.</span></p>
<p><strong>О чём говорит карта:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Облегчение: ситуация начинает проясняться, тяжесть уходит.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Тревога становится управляемой: ты учишься справляться с эмоциями.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Переоценка страхов: оказывается, половина из них &mdash; просто фантазии.</span><span style="font-weight: 400;"><br /><br /></span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Возвращение в реальность: ты снова можешь трезво оценивать происходящее.</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><strong>Совет карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Отключись от источников тревоги &mdash; особенно от сплетен, новостей и соцсетей.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Проверь: действительно ли есть повод для паники или это игра ума?</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Поддержи себя: ты умничка, ты уже делаешь важный шаг к спокойствию.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Поставь фокус на то, что уже стало легче &mdash; даже если совсем немного.&nbsp;</span></li>
</ul>
<p><span style="font-weight: 400;">Главное:&laquo;Твои страхи &mdash; это не факты. Это просто мысли. И они не обязаны быть истиной&raquo;.</span></p>
`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Девятка Мечей &mdash; карта, которая символизирует тревоги, внутренние страхи и беспокойства. Но не пугайся! Этот год &mdash; твоя великая внутренняя трансформация. Ты научишься не убегать от страхов, а превращать их в свою силу.</span></p>
<p><strong>Что значит эта карта в раскладе года:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Пришло время увидеть свои страхи лицом к лицу.</span></li>
</ul>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты перестанешь тревожиться по поводу своей карьеры так сильно, как раньше. Возможно, придется отпустить старые проекты или бесполезные ожидания.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты отпустишь страхи из прошлого, которые мешали тебе строить новые отношения. Откроешься красивой, чистой любви, без драм и страха быть отвергнутой.</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><strong>Советы карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Верь в себя и не слушай внутреннего критика &mdash; в реальности ты гораздо сильнее и успешнее, чем думаешь.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">&nbsp;Перестань додумывать за других! Говори о своих чувствах мягко и честно &mdash; это откроет перед тобой двери к настоящей близости.</span></li>
</ul>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Помни, после каждой ночной бури обязательно наступает рассвет.</span></li>
</ul>`,
            },
            "ex": {
                normal: `<p><span style="font-weight: 400;">Девятка мечей &mdash; это уже не просто страдание, это раскаяние.&nbsp; Добро пожаловать в клуб ночных кошмаров. Да, сложно это представить, но он сожалеет о том, что сделал и ему стыдно за это.&nbsp;</span></p>
<p><strong>Что с ним сейчас?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он падает в ментальную яму, полную сожалений, вины и фантазий о том, как могло быть. Но уже поздно. Очень поздно.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он больше не винит тебя. Теперь он винит себя. Но не вслух &mdash; это же бывший. Он страдает молча, чтобы никто не подумал, что он&hellip; человек с чувствами. О, ужас!</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он испытывает страх, что ты уже счастлива (а ты да, кстати, красавица, счастлива или скоро будешь, но только без него).&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Но больше всего он боится не за тебя, что тебе может быть плохо. Он боится за себя, что никто его больше не примет таким, какой он есть.</span></li>
</ul>
<h3><strong>Чем всё это закончится?</strong></h3>
<p><span style="font-weight: 400;">Он не разрушит свою жизнь... но станет её призраком. Он будет жить, работать, общаться &mdash; и при этом тащить за собой эту чёрную тень сожалений. Тень, в которой будешь ты &mdash; как шанс, который он просрал с блеском. Он понимает, что потерял не просто тебя. Он потерял СЕБЯ с тобой. И это самое страшное.</span></p>
<p><strong>Совет карты</strong><span style="font-weight: 400;">: ты &mdash; не его кошмар. Ты &mdash; его когда-то былое солнце, которое он закрыл шторой гордыни. Теперь пусть сам варится в своей бессоннице, а ты &mdash; спишь спокойно и просыпаешься к жизни, где тебя любят и ценят, когда ты рядом, а не когда тебя потеряли. </span></p>
`
            }
        }
    },
    "eight-of-swords": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Ах, милая, вот ты и в ловушке. Но не в подземелье, а в собственной голове. Ты чувствуешь себя скованной, будто мир сжал тебя в объятиях, от которых не вырваться. Всё вокруг кричит: &laquo;Нельзя! Не получится! Не твоё!&raquo; &mdash; и ты стоишь, словно в невидимом корсете страхов и ограничений.</span></p>
<p><span style="font-weight: 400;">Но знаешь, что самое ироничное? Все эти мечи &mdash; не стены, а просто мысли. Ты можешь выйти, только поверить в это пока сложно.</span></p>
<p><strong>Сигналы карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ограничения &mdash; внешние, внутренние, надуманные и навязанные.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Женская скованность &mdash; от страха быть осужденной до &laquo;а что скажет мама/муж/общество&raquo;.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Сомнения &mdash; ты не веришь, что достойна большего.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Решение есть, но ты его не видишь.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Страхи, тревожность, фобии &mdash; как кокон, в котором ты спряталась от перемен.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Чувство одиночества &mdash; и как будто никто не понимает.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><span style="font-weight: 400;">Ты &mdash; словно героиня мелодрамы, у которой всё есть, чтобы освободиться, но она стоит в платье на ветреном холме, потому что... страшно. Боишься остаться без одобрения. Боишься не оправдать ожидания. Боишься быть &laquo;слишком&raquo; &mdash; громкой, сильной, амбициозной. И в итоге &mdash; боишься быть собой.</span></p>
<p><strong>Совет карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не бойся быть дерзкой, если тебе некомфортно в приличной тишине.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Перестань ждать спасения от других &mdash; ты уже можешь вытащить себя сама.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Развяжи себе руки: ты сама себе и судья, и защитник, и подруга.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Напиши список: что тебя сдерживает &mdash; и что из этого правда, а что фантазия.&nbsp;</span></li>
</ul>
<p><span style="font-weight: 400;">Восьмерка Мечей напоминает: твои страхи умеют красиво притворяться реальностью. Но ты &mdash; умная, красивая и вполне способная включить свет и рассмотреть, что они &mdash; всего лишь тень.</span></p>
`, 
                reversed: `<p><span style="font-weight: 400;">А вот и она &mdash; долгожданная передышка после эмоционального шторма. Ты больше не пленница собственных страхов, девочка. Ты &mdash; выжившая. И даже если вышла из бури с растрепанной прической и размазанной тушью, ты всё равно стоишь. А значит, победила.</span></p>
<p><strong>Что сулит карта:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Эмоциональное освобождение &mdash; отпустила всё, что тянуло на дно.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Конец ментальных ограничений &mdash; &laquo;не могу&raquo;, &laquo;не смогу&raquo;, &laquo;не положено&raquo; &mdash; delete.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты вернула себе голос, тело, выбор &mdash; больше никаких &laquo;а вдруг он обидится&raquo;.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Принятие прошлого &mdash; да, было больно, да, предали, но теперь ты &mdash; стальная леди с мягким сердцем.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Появление целей, которые зажигают &mdash; наконец-то снова хочется хотеть.&nbsp;</span></li>
</ul>
<p><strong>Совет карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Обними перемены, они больше не пугают &mdash; они твои союзники.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Разреши себе мечтать широко &mdash; без скидок на &laquo;реальность&raquo;.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Порадуй себя чем-то новым: новая цель, новый проект, новое платье &mdash; всё можно.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Прими свою уязвимость &mdash; она не слабость, а глубина,</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><span style="font-weight: 400;">Ты прошла через мрак, разобралась с тенями и теперь видишь дорогу. Да, не всё ещё идеально. Но ты снова дышишь полной грудью, в любимых духах и с ясным взглядом на будущее. Восьмерка Мечей перевернулась &mdash; и с тобой перевернулась жизнь. В лучшую сторону.&nbsp;</span></p>
`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Восьмерка Мечей &mdash; это про ощущения ловушки своих страхов, сомнений и ограничений.</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">Но в раскладе на год она говорит: </span><span style="font-weight: 400;">&laquo;</span><span style="font-weight: 400;">Твои оковы &mdash; иллюзорны</span><span style="font-weight: 400;">. </span><span style="font-weight: 400;">Ты намного свободнее, чем думаешь</span><span style="font-weight: 400;">&raquo;</span><span style="font-weight: 400;">. Год научит тебя верить в себя и делать первые шаги к своей мечте, даже если пока страшно.</span><strong><br /><br /></strong></p>
<p><strong>Что значит эта карта в раскладе года:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Этот год станет началом великого освобождения! Ты сможешь скинуть с себя старые цепи страха, сомнений и чужих ожиданий.&nbsp;</span></li>
</ul>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">В начале года может казаться, что карьерный рост застопорился. Будет много моментов, когда страхи или комплексы скажут тебе: &laquo;Ты не справишься!</span><span style="font-weight: 400;">&raquo;. </span><span style="font-weight: 400;">Но как только ты начнешь пробовать новое и перестанешь ждать идеальных условий &mdash; прорыв не заставит себя ждать!</span></li>
</ul>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Финансовые ограничения в начале года могут напрягать.Но новые идеи (и новые источники дохода!) появятся, как только ты уберешь внутренние запреты.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">В этом году ты научишься строить здоровые границы и выражать свои чувства. </span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><strong>Советы карты:&nbsp;</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не бойся начинать маленькими шагами. Смелость действовать хотя бы чуть-чуть каждый день откроет огромные перспективы.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Открывай своё сердце. Ты заслуживаешь любви, которая наполняет, а не пугает.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Помни, большинство &laquo;границ</span><span style="font-weight: 400;">&raquo;</span><span style="font-weight: 400;"> только в твоей голове.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><span style="font-weight: 400;">В начале года ты можешь чувствовать неуверенность, желание &laquo;не высовываться</span><span style="font-weight: 400;">&raquo;</span><span style="font-weight: 400;">. Весной захочется попробовать что-то новое &mdash; и это даст первый прилив энергии! К осени ты оглянешься назад и поймешь: ты больше не та девушка, что боялась. Ты стала героиней собственной жизни.</span></p>`,
            },
            "ex": {
                normal: `<p><span style="font-weight: 400;">Восьмёрка мечей говорит о человеке, который завзял себе глаза, чтобы не видеть правду, потому что с правдой нужно что-то делать, а он не имеет для этого ни храбрости, ни сил.</span><em><span style="font-weight: 400;">&nbsp;</span></em></p>
<h3><strong>Что он чувствует сейчас?&nbsp;</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Страх совершить ошибку. Он не просто боится &mdash; он парализован.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он не доверяет себе. Он боится осуждения. Он боится всё испортить. И каждый раз, когда жизнь дает ему шанс &mdash; он закрывает глаза на него.&nbsp;</span></li>
</ul>
<h3><strong>К чему это приведёт в будущем?&nbsp;</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Его будущее &mdash; внутренний тупик, где он сам себе и суд, и охрана, и охранная сигнализация.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Страх настолько его парализует, что он упустит всё. В итоге, он останется в одиночестве, довольствуясь малым.&nbsp;</span></li>
</ul>
<h3><strong>Что советует тебе карта?&nbsp;</strong></h3>
<p><span style="font-weight: 400;">Ты &mdash; свобода. Ты &mdash; поток. Ты &mdash; лёгкость. А он &mdash; тот, кто выбрал жить в клетке страха и контроля. Пусть варится. Ты не его спасатель. Ты уже далеко впереди &mdash; и там, где летают, не ползают.</span></p>
`
            }
        }
    },
    "seven-of-swords": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Ой, ну держи сумочку покрепче, потому что эта карта &mdash; про хитрость, обман и игры за кулисами. Здесь не место наивности и открытым объятиям. Семерка Мечей приходит, когда кто-то плетёт интриги или ты сама играешь в &laquo;кошки-мышки&raquo; с обстоятельствами.</span></p>
<p><strong>Ключевые значения:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Потери или предательство &mdash; кто-то ускользает с твоими идеями, доверием или даже сердцем.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ложь в воздухе &mdash; будь внимательна: слова могут звучать медом, а внутри &mdash; уксус.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты &mdash; мастер маневров &mdash; возможно, именно ты прибегаешь к уловкам ради цели. </span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><strong>Внутренний контекст:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты не доверяешь &mdash; и не зря. Сейчас не время &laquo;открытых душ&raquo;.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты можешь действовать из страха или ради выгоды &mdash; задай себе честный вопрос: &laquo;А где грань между спасением и манипуляцией?&raquo;.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Интуиция&nbsp; обострена, слушай внутренний шепот. Он не врёт.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><strong>Совет карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не делись сокровенным &mdash; даже с &laquo;лучшими&raquo;.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Проверь документы, условия, слова. Всё, что кажется слишком гладким &mdash; подозрительно.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Если сама используешь хитрость &mdash; будь осторожна, не заиграйся.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не доверяй всем &mdash; доверяй себе. </span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><span style="font-weight: 400;">Семерка Мечей &mdash; не враг. Это твой урок по взрослой жизни, где доброе сердце &mdash; прекрасно, но вместе с умом, границами и здоровым скепсисом. Ты &mdash; не марионетка. Ты &mdash; сценаристка. И сейчас самое время переписать сюжет в свою пользу.&nbsp;</span></p>
`, 
                reversed: `<p><span style="font-weight: 400;">&nbsp;Правда вскрылась, маски сброшены</span></p>
<p><strong>Общий посыл карты:</strong><strong><br /></strong><span style="font-weight: 400;">Перевернутая Семерка Мечей &mdash; это момент прозрения, когда обман, манипуляции, двойные игры либо прекращаются, либо становятся настолько очевидными, что ты больше не участвуешь в этом спектакле.&nbsp;</span></p>
<p><span style="font-weight: 400;">Что означает карта:</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты вывела кого-то на чистую воду &mdash; либо тебя больше невозможно одурачить.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Сброшены иллюзии &mdash; ты наконец-то видишь всё как есть.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты больше не бежишь от проблемы, а начинаешь разбираться в ней по-взрослому.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Наступает внутреннее облегчение &mdash; всё тайное стало явным. </span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">Эта карта будто шепчет тебе на ушко:</span></p>
<p><span style="font-weight: 400;">&laquo;Девочка, ты ведь знала&hellip; просто не хотела верить. Но теперь &mdash; пора себя слушать, а не оправдывать чужую ложь.&raquo;</span></p>
<p><strong>Перевернутая Семерка может быть про:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Разрыв с токсичным человеком &mdash; ты выдохнула, вышла из игры.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Освобождение от ложной самооценки &mdash; ты уже не доказываешь, что достойна.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Откровенность &mdash; с собой и с другими: &laquo;Да, мне было больно. Но теперь я знаю, чего хочу&raquo;. </span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><strong>Совет карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не бойся разочароваться &mdash; бойся остаться в иллюзии. Теперь, когда правда на столе, ты можешь строить что-то настоящее. Не возвращайся туда, где было фальшиво, даже если там красиво.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Пересмотри границы &mdash; теперь ты знаешь, кого пускать, а кого &mdash; нет.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не вини себя за доверие &mdash; винить стоит тех, кто его обманул.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Используй этот опыт как щит, а не как повод для закрытия сердца.&nbsp;</span></li>
</ul>
<p><span style="font-weight: 400;">Ты прошла через обман и осталась собой. Не потеряла веру в людей, но теперь ты не просто веришь &mdash; ты выбираешь. Выбираешь ясность, осознанность и тех, кто умеет быть настоящими, а не просто обаятельными. Ты не разоблачила ложь &mdash; ты выбрала правду. И это победа. Твоя. </span></p>
`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Семерка Мечей &mdash; это карта стратегии, хитрости и умения действовать тонко.&nbsp; Это будет год твоей дипломатии, остроумия и маленьких личных побед!</span></p>
<p><strong>Что значит эта карта в раскладе года:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">В делах важнее всего будет умение действовать тонко и продуманно. Успех будет ждать там, где ты проявишь гибкость, находчивость и умение выбрать правильный момент.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">В отношениях попытки что-то скрыть могут привести к недопониманию &mdash; даже если ты хотела всего лишь избавить партнера от переживаний. Придется быть особенно честной и открытой.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты откроешь в себе новый суперсилу: стратегическое мышление! Придётся научиться смотреть на жизнь как на шахматную партию.</span></li>
</ul>
<p><strong>Советы карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не делись своими планами со всеми подряд. Ищи возможности там, где другие их не замечают.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Тонкая дипломатия и искренность &mdash; твое секретное оружие в любви в этом году.</span></li>
</ul>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">В начале года возможны сомнения, но уже к концу года тебя ждет сладкое ощущение победы &mdash; все тайные усилия окупятся с лихвой!</span></li>
</ul>`,
            },
            "ex": {
                normal: `<p><strong>Семёрка мечей</strong><span style="font-weight: 400;"> &mdash; это карта о хитром человеке, который никогда не возьмёт на себя ответственность. У него виноваты все вокруг: ты, обстоятельства, система. </span><em><span style="font-weight: 400;"><br /></span></em><em><span style="font-weight: 400;"><br /></span></em><strong>Его внутреннее состояние сейчас:&nbsp;</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Прячется от ответственности.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Боится честности.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Делает вид, что всё под контролем, но на самом деле просто скользит по жизни, как по мыльной плитке. Он постоянно строит схемы, врет самому себе, играет чужую роль.&nbsp;</span></li>
</ul>
<p><strong>К чему всё приведёт в будущем?&nbsp;</strong></p>
<p><span style="font-weight: 400;">Он останется в своей паутине самозащитных лжи и оправданий.</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он так и не научится говорить открыто. И каждый раз, когда появится кто-то, кто будет любить его &mdash; он будет всё портить из страха быть разоблаченным.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Люди будут чувствовать его наигранность и неискренность. Это будет отталкивать их от него. Он боится быть честным, чтобы не потерять&hellip;А в итоге теряет всё &mdash; именно из-за нечестности.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Заигравшись, он сам запутается где он настоящий, а где &mdash; образ.&nbsp;</span></li>
</ul>
<p><strong>Совет карты: </strong><span style="font-weight: 400;">ты &mdash; правда. Чистая. Настоящая. Ты ушла не потому что он был плохим, а потому что он боялся быть собой. А ты заслуживаешь быть с тем, что будет с тобой искренним.&nbsp;</span></p>
`
            }
        }
    },
    "six-of-swords": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Общий вайб карты:</span></p>
<p><span style="font-weight: 400;">Шестёрка Мечей &mdash; это как интуитивный чемоданчик, который ты уже начала собирать, даже если ещё не призналась себе, что пора двигаться вперёд. Что бы там ни происходило &mdash; ссора, стресс, выгорание, слёзы под пледом &mdash; ты уже на пути к новой главе.</span></p>
<p><strong>О чём говорит карта:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты выдыхаешь после шторма &mdash; и начинаешь двигаться к свету.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Проблема ещё не до конца решена, но ты уже не тонешь в ней.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Может быть переезд, поездка, смена декораций, путешествие или ментальный &laquo;релокейт&raquo; от драмы к стабильности.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Возможна весточка: от подруги, бывшего (упс) или судьбы в виде странного совпадения &mdash; не игнорь.&nbsp;</span></li>
</ul>
<p><strong>Совет карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Поменяй обстановку: иногда новая подушка творит чудеса.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Отпусти ожидания &mdash; как только отпустишь, сразу станет легче.</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">Разреши себе грустить и радоваться одновременно &mdash; ты не обязана быть либо сильной, либо сломанной. Ты можешь быть собой.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><span style="font-weight: 400;">Шестёрка Мечей &mdash; это твой личный внутренний Uber, который тихо вывозит тебя из зоны турбулентности. Да, не всё решилось. Да, впереди еще путь. Но ты уже в такси. Ты уже едешь. И ты обязательно приплывёшь туда, где будет светло, спокойно и по-настоящему твое.&nbsp;</span></p>
`, 
                reversed: `<p><span style="font-weight: 400;">Когда Шестерка Мечей переворачивается, это будто лодка не хочет отчаливать от берега, а ты в ней сидишь, по пояс в драме, уткнувшись в носовой платок и цепляясь за старое, хоть оно уже давно себя изжило. И вроде бы понятно, что надо двигаться дальше, но всё как будто застопорилось: руки опущены, вдохновения &mdash; ноль, и мысль &laquo;а вдруг всё ещё наладится&raquo; мешает отплыть от берега боли.</span></p>
<p><strong>Что происходит:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Застой и тупик &mdash; вроде шевелишься, но никуда не продвигаешься.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Нежелание отпускать прошлое, даже если оно причиняет боль.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Отсутствие поддержки &mdash; ощущение, что ты одна в этой буре.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Потуги что-то изменить оборачиваются новыми кругами хаоса.</span></li>
</ul>
<p><strong>Что делать:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Прекрати спасать то, что не хочет спасаться.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Сожги мост, если он ведет в пропасть.</span></li>
</ul>
<p><span style="font-weight: 400;">Попроси о помощи, если устала быть сильной &mdash; это не слабость, это сила.</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">Сделай глубокий вдох, перезагрузи навигацию своей жизни, и выбери новый маршрут. Тот, где ты &mdash; не жертва обстоятельств, а главная героиня, наконец-то плывущая по течению своей свободы. </span></p>
`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Шестерка Мечей &mdash; это карта перемен, нового курса и долгожданного облегчения.</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">В этом году тебя ждёт:</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">На работе и в деньгах тебя ждут спокойные, но уверенные перемены. Возможно предложение о новой должности, смене работы или даже переезде. Ты уплывешь от берега старых забот &mdash; туда, где легче дышится.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">В отношениях тема ухода от прошлого будет особенно актуальна. Прощание с прошлым даст начало новому этапу.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Этот год научит тебя важной истине: отпускать &mdash; значит расти. Жизнь начнет налаживаться шаг за шагом, как после долгой бури появляется утро с ярким солнцем.</span></li>
</ul>
<p><strong>Совет карты</strong><strong><br /></strong><span style="font-weight: 400;">Если будет шанс уехать, сменить обстановку или работать в новом направлении &mdash; соглашайся! Это твой билет в светлое будущее.</span></p>
<p><br /><br /><span style="font-weight: 400;">В начале года будет казаться, что сложно отпустить старое. К весне ты уже с улыбкой закроешь старые двери. Летом в твоей жизни появятся люди и возможности, которых ты давно ждала. Осенью ты поймешь: Как же хорошо, что я тогда сделала этот шаг!</span> <span style="font-weight: 400;">Этот год &mdash; про мягкий уход от всего, что тебя тяготит, и про новые горизонты!</span></p>`,
            },
            "ex": {
                normal: `<p><span style="font-weight: 400;">Он будет пытаться сбежать. От мыслей. От вины. От боли. От воспоминаний. Нужно просто сменить обстановку. Город. Людей. Телефон. Он так и не понял, что куда бы ты ни поехал, ты берешь с собой себя. Как чемодан, набитый мыслями. Он будет пытаться переплыть боль &mdash; но всё, что он сделает, это станет её носителем на новом фоне.</span></p>
<p><strong>К чему это приведёт в будущем? </strong><strong><br /></strong><span style="font-weight: 400;">Он не проживёт эту потерю. Он перевезет её с собой. И, пока он будет строить новую жизнь, его душа будет продолжать шептать: &laquo;Ты потерял не просто любовь. Ты потерял ту, с кем мог быть собой&raquo;.</span> <span style="font-weight: 400;">Он будет рядом с людьми, но одинок. Он будет занят, но опустошен. Он будет двигаться&hellip; но внутри &mdash; боль.</span></p>
<h3><strong>Что советует карта?&nbsp;</strong></h3>
<p><span style="font-weight: 400;">Ты &mdash; не станция на пути. Ты &mdash; была его домом. Но он ушёл, думая, что в пути бдует лучше. Теперь он знает: это не ты была бурей. Это он был не готов к штилю.</span></p>
<p><span style="font-weight: 400;">Ты осталась на берегу. Солнце в волосах, спокойствие в сердце и кофе в руке. А он &mdash; плывёт. Один. В тишине. С шестью мечами под сиденьем.</span></p>
`
            }
        }
    },
    "five-of-swords": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Если тебе выпала Пятерка Мечей в прямом положении, знай &mdash; ты оказалась в эпицентре эмоционального шторма. Это карта конфликтов, боли и борьбы, где победителей нет. Даже если ты вроде бы &laquo;выиграла&raquo; спор или ситуацию, осадочек точно остался.</span></p>
<p><strong>Что символизирует карта:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Конфликт &mdash; громкий или тихий, но очень неприятный.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Манипуляции и обманы, возможно даже предательство.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Одиночество на фоне борьбы &mdash; даже если ты окружена людьми.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Раненое эго &mdash; как после эмоционального побоища</span></li>
</ul>
<p><strong>Что делать:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не молчи, но и не кричи громче всех.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Если ситуация проиграна &mdash; уйди с достоинством.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Оцени, что важнее: быть правой или быть счастливой.</span></li>
</ul>
<p><strong>Совет карты:</strong></p>
<p><span style="font-weight: 400;">Иногда, чтобы сохранить себя &mdash; нужно проиграть бой. Даже если в нем ты могла бы победить&raquo;.&nbsp; Это не про слабость. Это про зрелость и прощение &mdash; себя в первую очередь.</span></p>
`, 
                reversed: `<p><span style="font-weight: 400;">Когда эта карта ложится в перевернутом положении, она про боль, которая уже произошла, про утрату, горечь, и внутреннюю тишину, в которой слишком громко звучат слезы. Это момент, когда эмоции захлестывают с такой силой, что кажется &mdash; не выбраться.</span></p>
<p><strong>Что может происходить:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Потеря &mdash; кого-то или чего-то очень важного.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Сильное душевное страдание, из которого трудно выйти.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Изоляция &mdash; не потому что ты одна, а потому что никто не может тебя понять.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Внутренний крах &mdash; надежд, планов, веры в себя или других.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><strong>Как справиться:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Позволь себе прожить боль. Это не слабость &mdash; это очищение.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не запирайся в себе, даже если кажется, что никто не поймёт. Иногда просто быть рядом &mdash; уже лекарство.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Откажись от попытки всё понять. Некоторым событиям не нужно логического объяснения.</span></li>
</ul>
<p><strong>Совет карты:</strong></p>
<p><span style="font-weight: 400;">Ты не обязана быть сильной всегда. Иногда важно просто быть. Дышать. Плакать. Молчать. И ждать&hellip; пока небо снова посветлеет.&nbsp;</span></p>
`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Пятерка Мечей &mdash; карта борьбы, отстаивания своих интересов и... важных уроков.</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">Этот год даст тебе шанс:</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Научиться стоять за себя, даже если сложно.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Увидеть, кто друг, а кто лишь казался им.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Выйти из любого конфликта с высоко поднятой головой.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><span style="font-weight: 400;">Это год, когда ты скажешь: Я достойна большего &mdash; и я это получу!</span></p>
<h3><strong>Что ждать от года?&nbsp;</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Рабочая атмосфера будет похожа на захватывающее реалити-шоу! Вокруг может быть много конкуренции и споров. Но не переживай &mdash; твоя компетентность победит! Будут испытания, но каждое испытание &mdash; это ступенька вверх.</span> <span style="font-weight: 400;">Осенью возможен неожиданный доход &mdash; как награда за упорство.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Присмотрись внимательно к своим отношениям, если люди не готовы идти навстречу &mdash; может быть, пришло время пересмотреть связи? Год учит выбирать себя, а не соглашаться на отношения &laquo;лишь бы не быть одной&raquo;.</span></li>
</ul>
<p><strong>Советы карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Учись видеть, где стоит бороться, а где &mdash; отпустить и идти дальше.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Истинная любовь начинается с честности перед собой.</span></li>
</ul>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Учись защищать свои мечты и не позволять другим рушить твои границы.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Помни, быть доброй &mdash; не значит позволять собой пользоваться.</span></li>
</ul>`,
            },
            "ex": {
                normal: `<p><strong>Пятёрка мечей</strong><span style="font-weight: 400;"> &mdash; это не карта победителя, который достигает всего любой ценой. Тебе это что-то напоминает? Да, это карта про того самого бывшего, который добьется своего, даже потеряв любовь и собственную репутацию. Он будет долго праздновать свою победу, но будет удивлён, что другие люди не присоединятся к празднованию. Но правда в том, что ты не проиграла. Ты просто вышла из игры, где игра шла только по его правилам.&nbsp;</span></p>
<h3><strong>Что его ждёт в будущем?&nbsp;</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Обида, что больше никто не хочет с ним соревноваться. Гордость будет говорить, что все его боятся. Но на деле, люди просто не хотят ввязываться в его безумие.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Гордость сменится гневом. Он почувствует себя дураком и клоуном.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он будет делать вид, что у него всё прекрасно, но всё это &mdash; ширма, за которой он прячет факт: он мог самоутверждаться только за счёт слабости других.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он так и не поймёт, что желание бороться &mdash;&nbsp; это комплексы.&nbsp;</span></li>
</ul>
<p><strong>Совет карты:</strong><span style="font-weight: 400;"> ты не та, на ком можно отыгрывать свои комплексы. Ты заслуживаешь жить с тем, кто знает, что никакая победа не стоит любви.&nbsp;</span></p>
`
            }
        }
    },
    "four-of-swords": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Четвёрка Мечей в раскладе приходит тогда, когда ты буквально выжата как лимон. Всё, хватит бежать. Вселенная мягко, но настойчиво кладёт тебя на диван с пледом, сериалом и чашкой чая, потому что ты нуждаешься в восстановлении &mdash; физическом, ментальном, эмоциональном.</span></p>
<p><strong>Ключевые послания карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Восстановление после сложного этапа.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Пауза перед важными решениями.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Нужна тишина, чтобы услышать свое истинное </span><span style="font-weight: 400;">&laquo;</span><span style="font-weight: 400;">хочу</span><span style="font-weight: 400;">&raquo;</span><span style="font-weight: 400;">.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Отдых &mdash; не роскошь, а необходимость. </span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><strong>Совет от карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Устрой себе день молчания &mdash; минимум слов, максимум уюта.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Отключи уведомления &mdash; ты никому ничего не должна сегодня.</span></li>
</ul>
<p><span style="font-weight: 400;">Сделай что-то только для себя: ванна с пеной, маска на лицо, тихая книга, дневник.&nbsp;</span><span style="font-weight: 400;"><br /></span></p>
`, 
                reversed: `<p><span style="font-weight: 400;">Если в прямом положении Четверка Мечей уговаривала тебя прилечь и передохнуть, то перевернутая говорит: </span><span style="font-weight: 400;">&laquo;</span><span style="font-weight: 400;">Всё, хватит спать &mdash; пора действовать!</span><span style="font-weight: 400;">&raquo;.</span><span style="font-weight: 400;"> Жизнь снова стучится в двери, и, возможно, даже бьет в них пяткой &mdash; перемены назревают, и уже не получится от них отмахнуться. Но не паникуй: это начало нового витка, и у тебя есть силы, чтобы его прожить!</span></p>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">Ключевые послания карты:</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Пробуждение &mdash; пора выходить из стагнации.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Осторожность в отношениях с новыми людьми.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Чёткий внутренний стержень &mdash; поможет не сбиться с пути.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Будь осознанной &mdash; кто-то рядом может сбить тебя с курса. </span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><strong>Совет от карты:</strong></p>
<p><span style="font-weight: 400;">&laquo;Не хватайся за первое попавшееся предложение &mdash; фильтруй людей и возможности. Перемены &mdash; это круто, но только если они не выносят тебя из себя. Держи свой фокус и помни, кто ты. Даже если мир вдруг начнёт крутиться слишком быстро &mdash; ты управляешь своей скоростью&raquo;.</span></p>
<p><span style="font-weight: 400;">Перевернутая Четверка Мечей &mdash; это звонок будильника: пора вставать, но не бегом &mdash; а с чувством, с толком, с расстановкой.&nbsp;&nbsp;</span></p>
`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Четверка Мечей приносит тебе год передышки и глубокого исцеления. Этот год словно шепчет: </span><span style="font-weight: 400;">&laquo;</span><span style="font-weight: 400;">Замедлись. Переведи дыхание. Позволь себе быть в гармонии</span><span style="font-weight: 400;">&raquo;.&nbsp;</span></p>
<h3><strong>Что ждать от года?&nbsp;</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты будешь восстанавливать силы после бурных событий прошлых лет. Появится возможность выстроить жизнь мягко, осознанно и в своем ритме. Это твой личный год тихого триумфа.</span></li>
</ul>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Год без резких скачков, но именно это даст тебе шанс построить надежный фундамент для будущего роста. Важно будет избегать переработок. Приоритет &mdash; забота о себе.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Деньги будут приходить стабильно, если ты выберешь разумное отношение к тратам. Лучше сосредоточиться на накоплении и планировании, а не на крупных расходах.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">В отношениях появится больше душевной близости, спокойных вечеров и теплых разговоров.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Если ты свободна, в этом году судьба будет подталкивать тебя к осознанным выборам. Появится шанс на новое знакомство, но оно потребует от тебя терпения и готовности строить отношения не на страсти, а на дружбе и доверии.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><strong>Совет:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Тише едешь &mdash; дальше будешь.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ищи тех, кто приносит в твою душу тишину, а не бурю.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Помни, что истинная сила приходит не от бесконечной гонки, а от умения слышать себя.</span></li>
</ul>`,
            },
            "ex": {
                normal: `<p><strong>Четвёрка мечей</strong><span style="font-weight: 400;"> всегда про грусть и изоляцию. Он будто нажал на кнопку &laquo;Пауза&raquo; &mdash; на отношения, на общение, на развитие. Он устал. Сгорел. От всего. И теперь сидит в внутреннем карантине, где вместо любви &mdash; тишина, а вместо планов &mdash; &laquo;Отдохну еще недельку&raquo;&hellip; лет так десять.</span></p>
<p><span style="font-weight: 400;">Он не рыдает в голос. Он не орёт в подушку. Он просто выключился. Как ноутбук, у которого батарейка сдохла посреди презентации о смысле жизни. Это не драма на показ. Это тишина, в которой он не хочет чувствовать вообще ничего, потому что боится, что если снова откроется &mdash; будет только боль.</span></p>
<h3><strong>К чему всё это приведёт?&nbsp;</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Если он так и будет сидеть в этом коконе молчаливого переживания, он просто превратится в человека, который мог бы&hellip; но не смог.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он будет упускать возможности.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Люди будут отдаляться от него.&nbsp;</span></li>
</ul>
<p><strong>Совет карты: </strong><span style="font-weight: 400;">ты &mdash; движение, жизнь и свет. А он &mdash; ушёл в режим не беспокоить, думая, что так он себя защитит. Ты была его шансом на исцеление &mdash; а не на уход в спячку. Он замер. А ты &mdash; расцветаешь.</span></p>
`
            }
        }
    },
    "three-of-swords": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Эта карта &mdash; квинтэссенция болезненных переживаний, разбитых иллюзий и душевных ран, которые, увы, не зашьешь ни кружевом, ни терапией за одно занятие. Но и не всё так трагично! Потому что эта боль очищающая &mdash; как гроза после удушливой жары.</span></p>
<p><strong>О чём говорит карта:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Разбитое сердце &mdash; это может быть утрата, предательство, расставание или просто о-о-очень неприятное разочарование.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Выбор вопреки себе &mdash; когда пришлось поступить разумно, а сердце плачет.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Резкое осознание правды &mdash; и да, оно больно, но ты теперь видишь всё без розовых фильтров.</span></li>
</ul>
<p><strong>Что делать:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Позволь себе побыть в одиночестве, чтобы прожить эмоции &mdash; не прячь их.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не вини себя за слабость &mdash; ты человек, а не гвоздь.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Перепиши ситуацию как опыт: что ты узнала о себе? о других?</span></li>
</ul>
`, 
                reversed: `<p><span style="font-weight: 400;">Если в прямом положении Тройка Мечей &mdash; это буря слёз, разбитое сердце и грозовые тучи над головой, то в перевернутом положении эта карта говорит: </span><span style="font-weight: 400;">&laquo;</span><span style="font-weight: 400;">Ты уже прошла через самое тяжёлое. Теперь &mdash; путь к исцелению</span><span style="font-weight: 400;">&raquo;.&nbsp;</span></p>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">Это тот момент, когда сердце всё ещё болит, но ты уже дышишь легче, глаза снова могут видеть свет, а изнутри растет понимание, что боль не навсегда.</span></p>
<p><strong>Что означает карта:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Заживление ран: сердце было разбито, но ты выжила. Теперь внутри &mdash; процесс восстановления. Возможно, ещё щемит, но уже не рвёт на части.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Прощение &mdash; себя или других: пришло время простить, отпустить ожидания, обиды и воспоминания, которые тянули вниз.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Открытое общение: ты наконец-то говоришь о том, что чувствовала, или готова выслушать другого. Это путь к облегчению.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Второй шанс любви, мечте или себе: ты пересматриваешь прошлое и находишь там не только боль, но и уроки, за которые можно быть благодарной.</span></li>
</ul>
<p><span style="font-weight: 400;">Перевернутая Тройка Мечей &mdash; не про то, что </span><span style="font-weight: 400;">&laquo;</span><span style="font-weight: 400;">всё хорошо</span><span style="font-weight: 400;">&raquo;</span><span style="font-weight: 400;">, а про то, что </span><span style="font-weight: 400;">&laquo;</span><span style="font-weight: 400;">больно, но ты уже на пути к свету</span><span style="font-weight: 400;">&raquo;</span><span style="font-weight: 400;">. Ты умеешь выживать. Но теперь &mdash; пора учиться быть счастливой. Слезы позади, впереди &mdash; новая ты. Более мудрая и по-настоящему живая.&nbsp;</span></p>
`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Тройка Мечей &mdash; это карта очищения души через слезы и честность. Да, в этом году придется пройти через испытания. Но! Это не год боли &mdash; это год перерождения.</span></p>
<h2><strong>Что ждать от года?&nbsp;</strong></h2>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты отпустишь старые обиды и разочарования. Твое сердце научится снова биться свободно и легко.</span></li>
</ul>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Возможны перемены: может быть смена работы, команды или даже переосмысление своего пути.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Нужно быть аккуратной с крупными вложениями и обещаниями.&nbsp;&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">В паре будут периоды непонимания, которые покажут насколько ваша связь крепка. Главное &mdash; не замалчивать обиды. Только честный разговор спасет то, что действительно ценно.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Год очищения сердец: время отпустить тех, кто ранил.</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><strong>Советы карты :</strong><strong><br /><br /></strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не бойся перемен. Они ведут тебя туда, где твоя истинная сила.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Придерживайся плана &laquo;бережливости и осознанности&raquo; &mdash; и избежишь лишних стрессов.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Порой нужно разбить старые иллюзии, чтобы построить дворец реального счастья.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><span style="font-weight: 400;">Год Тройки Мечей &mdash; это твое эмоциональное взросление. </span></p>`,
            },
            "ex": {
                normal: `<p><strong>Тройка мечей </strong><span style="font-weight: 400;">&mdash; это про&nbsp; настоящее осознание утраты. Он может улыбаться внешне, делать вид, что у него всё отлично&hellip; Но внутри &mdash; рана. И не царапина, девочка. А три острых, честных меча, которые он сам себе воткнул.</span> <span style="font-weight: 400;">Ирония? Он понял, как ты ему дорога, только когда всё потерял.</span></p>
<h3><strong>Что его ждёт в будущем?</strong><strong>&nbsp;</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Грусть. Печаль. Боль. Ощущение потери. Это не паника, не злость &mdash; это тишина после бури. Он не кричит &mdash; он тихо тонет. И главное &mdash; осознаёт, что виноват.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он не будет всех винить. Не будет говорить она стерва или всё было неважно. Он признает: &laquo;Я сделал больно и теперь боль вернулась ко мне&raquo;.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он станет тише, мягче&hellip; и странно пустым. Может извиниться &mdash; но через время. Может появиться в твоей жизни, но не как герой, а как раскаявшийся призрак.</span></li>
</ul>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Может молчать, но будет думать о тебе постоянно.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он не забудет. Эта боль &mdash; станет частью его. Он может жить дальше, строить что-то новое&hellip; Но там всегда будет тень. Твоя тень.</span></li>
</ul>
<p><span style="font-weight: 400;">Тройка мечей &mdash; это рана, которая оставляет шрам. Он будет жить. Но уже &mdash; не тем, кем был.</span></p>
<p><strong>Совет карты для тебя:</strong><span style="font-weight: 400;"> ты &mdash; его урок. Теперь он знает, что разбитое сердце &mdash; это не поэтика, а очень реальная боль. Ты &mdash; та, кто когда-то любила его по-настоящему. А теперь ты &mdash; свободна.</span></p>
`
            }
        }
    },
    "two-of-swords": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Представь себя на берегу тихого озера, ночь, луна отражается в воде&hellip; ты стоишь с закрытыми глазами и двумя мечами в руках, не зная, куда повернуться. Это и есть Двойка Мечей &mdash; карта выбора, ступора и замороженных эмоций.</span></p>
<p><span style="font-weight: 400;">Она появляется, когда ты находишься на распутье &mdash; умом понимаешь, что нужно что-то решить, а душа застыла в режиме </span><span style="font-weight: 400;">&laquo;</span><span style="font-weight: 400;">я не готова</span><span style="font-weight: 400;">&raquo;</span><span style="font-weight: 400;">. Снаружи ты можешь казаться спокойной и сдержанной, но внутри &mdash; буря, метания и страх сделать неверный шаг.</span></p>
<p><span style="font-weight: 400;">О чём говорит карта:</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Сложный выбор: перед тобой два пути, и ни один не кажется идеальным. Ты колеблешься, боишься потерять, ошибиться или причинить боль &mdash; себе или другим.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Замороженные эмоции: ты подавляешь чувства, не позволяешь себе расплакаться, закричать или просто сказать: &laquo;Я не знаю!</span><span style="font-weight: 400;">&raquo;</span><span style="font-weight: 400;">.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Слепота к истине: ты нарочно не хочешь видеть всё как есть. Возможно, ты надеешься, что проблема решится сама. (Спойлер: не решится).</span><span style="font-weight: 400;"><br /><br /></span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Временный баланс: ты будто зависла в состоянии &laquo;тишины перед бурей</span><span style="font-weight: 400;">&raquo;</span><span style="font-weight: 400;">. Но этот баланс нестабилен и может разрушиться, если ты не сделаешь шаг вперёд.</span></li>
</ul>
<p><strong>Совет от карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Слушай интуицию, а не только логику. Если ты закрыла глаза &mdash; открой сердце.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не бойся принять решение. Ты не обязана быть идеальной. Главное &mdash; двигаться, а не стоять.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Разблокируй эмоции. Проплачь, прокричи, выговорись подруге &mdash; тебе нужно освободить место для ясности.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><span style="font-weight: 400;">И помни: даже если ты пока не знаешь, куда идти, &mdash; не делать выбор вовсе &mdash; это тоже выбор. Но, возможно, не самый лучший. Ты сильная, умная и чувствующая. А значит &mdash; ты справишься.</span></p>`, 
                reversed: `<p><span style="font-weight: 400;">Ты стоишь на перепутье, а вокруг &mdash; хаос, шум, чужие голоса, и тебе приходится выбирать, даже если ты не готова. Это стресс, это дискомфорт, это ощущение, что кто-то навязывает свои правила. Но даже в этом беспорядке &mdash; ты найдёшь опору внутри себя.</span></p>
<p><span style="font-weight: 400;">Значения карты:</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Решение принято за тебя &mdash; и теперь приходится подстраиваться, даже если душа сопротивляется.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Давление извне: семья, работа, отношения &mdash; все тянут в разные стороны.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Выбор между &laquo;плохо</span><span style="font-weight: 400;">&raquo;</span><span style="font-weight: 400;"> и &laquo;очень плохо</span><span style="font-weight: 400;">&raquo;</span><span style="font-weight: 400;">: не бывает идеального выхода, но будет лучший из возможных.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Испытание силы воли: тебе придётся отстоять своё, даже если весь мир настроен против.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Осознание и пробуждение: даже если всё трещит по швам &mdash; тебя уже не обманешь. Ты наконец видишь суть происходящего.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><strong>Советы от карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не принимай решений в панике. Да, на тебя давят &mdash; но ты имеешь право на паузу и своё мнение.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Проверь, кто влияет на твой выбор. Это действительно твои желания? Или ты живёшь под диктовку чужих ожиданий?</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Оцени реальность без розовых очков. Правда может быть неудобной, но она даёт свободу.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><span style="font-weight: 400;">Перевернутая Двойка Мечей &mdash; это не тупик. Это точка выбора, из которой ты вырастешь, даже если сперва будет больно. Ты &mdash; не пешка, ты &mdash; главная героиня своего романа. И даже если сценарий писали без тебя &mdash; ты можешь переписать финал.&nbsp;</span></p>`
            },
            "year": {
                normal: `<h3><strong>Главная энергия года</strong></h3>
<p><span style="font-weight: 400;">Двойка Мечей &mdash; это карта спокойствия перед бурей и выбора, который изменит всё.</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">Тебе предстоит научиться слышать себя, а не только советы окружающих. Принять решения сердцем, а не только логикой. Обрести гармонию внутри, чтобы не метаться в поисках ответов вовне.</span></p>
<p><strong>Что значит эта карта в раскладе года:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Появится две заманчивые дороги, и выбрать будет непросто: возможно, два проекта, две вакансии, две большие мечты.</span></li>
</ul>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Год требует бережливости и мудрого подхода в финансах. Не стоит ввязываться в авантюры, кредиты или рискованные вложения. Идеальное время для планирования и создания подушки безопасности.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Отношения потребуют баланса. Возможно, придется наладить честный диалог, чтобы ни одна из сторон не чувствовала себя &laquo;на втором месте&raquo;.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Перед тобой появится выбор: оставаться в одиночестве или открыть сердце новым чувствам. Главное &mdash; не бросаться в омут с головой. Позволь отношениям развиваться мягко и естественно.</span></li>
</ul>
<p><strong>Советы карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Главное &mdash; не спешить. Самый лучший выбор &mdash; тот, который даст тебе ощущение радости и внутреннего &laquo;Да!&raquo;.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">&nbsp;Этот год словно подсказывает:&nbsp; &laquo;Дорогая, все ответы уже внутри тебя. Просто прислушайся!&raquo;.</span></li>
</ul>
<p><span style="font-weight: 400;">Год Двойки Мечей &mdash; это год, когда ты научишься быть собственной опорой.</span></p>`,
            },
            "ex": {
                normal: `<p><strong>Двойка мечей</strong><span style="font-weight: 400;"> &mdash; это про безразличие. Он ничего не чувствует. Как сожалений или боли, так и радости и вдохновения. Он поставил сердце на паузу. Знаешь почему? Потому что чувства &mdash; это страшно. Чувства &mdash; это больно. Чувства &mdash; означают, что он должен что-то решать.</span></p>
<p><strong>Что его ждёт в будущем?&nbsp;</strong></p>
<p><span style="font-weight: 400;">Он зависнет. Ни вперёд, ни назад. Он не проживёт свою боль, не отпустит тебя, но и не сделает шага к тебе. Он будет жить в вечном подвешенном состоянии. А жизнь не любит тех, кто не может принять решение. Она идет дальше.</span></p>
<p><strong>Совет карты: </strong><span style="font-weight: 400;">ты не должна его ждать, пока он оттает и его чувства расцветут, как сакура весной. Ты &mdash; движение, жизнь, эмоции, выбор. Пусть он сидит со своими двумя мечами &mdash; один направлен в голову, другой в сердце. Ты можешь выбрать того, кто впустит тебя в свой цветущий сад эмоций и любви.</span></p>`
            }
        }
    },
    "ace-of-swords": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Туз Мечей про момент, когда в голове внезапно щёлкает инсайт, и ты вдруг всё понимаешь. Где ты была не права, кто врал, куда нужно идти, что делать, с кем быть. И не просто &laquo;думаешь&raquo;, а знаешь. Впервые за долгое время &mdash; ясность, как будто убрали туман.</span></p>
<p><span style="font-weight: 400;">Это карта резкого, но точного движения, правды без прикрас, силы в логике и решимости. Она может показаться холодной, но порой именно холодный ум спасает от горячего сердца.</span></p>
<p><strong>Ключевые значения карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Интеллектуальный прорыв &mdash; инсайт, осознание, момент &laquo;ага!&raquo;.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Решимость действовать &mdash; не просто думать, а рубить с плеча (но желательно &mdash; с умом).</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Победа разума над эмоциями &mdash; ты перестаешь вести себя по наитию и начинаешь стратегически мыслить.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Начало чего-то масштабного &mdash; будь то проект, разговор, решение или борьба.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><strong>Совет от карты:</strong></p>
<p><span style="font-weight: 400;">Не бойся быть прямой. Иногда одно &laquo;нет&raquo; защищает лучше, чем тысяча &laquo;может быть&raquo;.</span></p>
<p><span style="font-weight: 400;">Туз Мечей &mdash; это новое начало, но не мягкое и тёплое, а четкое и резкое. Это как перестать ждать весну и просто выйти в холодный воздух, чтобы дышать полной грудью. Ты готова. У тебя есть всё: ясность, сила и смелость. Осталось только сказать себе: &laquo;Всё, хватит &mdash; я знаю, что делать&raquo;.&nbsp;</span></p>`, 
                reversed: `<p><span style="font-weight: 400;">Карта говорит о том, что ты хочешь прорваться, но как будто всё идёт вразрез &mdash; не снаружи, так внутри. Планы не срастаются, энергия разбросана, логика хромает, а мозг перегружен ненужными мыслями. Внутренний критик кричит в рупор, и ты не можешь услышать свой настоящий голос.</span></p>
<p><strong>Что это значит?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Переутомление ума &mdash; слишком много думаешь, слишком мало действуешь.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Идеи рушатся до того, как ты успела их воплотить &mdash; вроде хотела запуск, а вышел слив.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Конфликт внутри себя &mdash; сердце одно говорит, разум другое, а тело уже просит отпуска.</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">Попытки контролировать ситуацию усугубляют её &mdash; чем больше дергаешься, тем сильнее вязнешь.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Внутренние блоки и сомнения мешают двигаться вперёд.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><strong>Совет от карты:&nbsp;</strong></p>
<p><span style="font-weight: 400;">Перевернутый Туз Мечей &mdash; это перегрев ментального процессора. Твои мысли мечутся, а сердце молчит. Задумайся: не пора ли выдохнуть, снять корону идеальности и просто дать себе передышку? Сейчас тебе не логика нужна, а вера в себя, даже если путь к цели немного отложится.</span></p>
<p><span style="font-weight: 400;">Иногда лучший ход &mdash; это отступить на шаг.&nbsp;</span></p>`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Туз Мечей &mdash; это карта озарения. В этом году к тебе придут ясность мысли, словно вспышка света среди тумана, смелость говорить &laquo;Да!&raquo; своим мечтам и &laquo;Нет!&raquo; всему, что больше не служит тебе.</span><span style="font-weight: 400;"><br /><br /></span></p>
<p><strong>Что значит эта карта в раскладе года:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Год новых идей и крутых начинаний! Ты сможешь увидеть самые выгодные перспективы там, где другие видят только проблемы. Будет много ситуаций, требующих четких решений: важно не бояться брать на себя ответственность.</span></li>
</ul>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Удачные возможности для вложений, старта новых проектов и продвижения идей. Главное &mdash; анализируй, будь внимательной к мелочам и не бойся инвестировать в себя.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Возможны откровенные разговоры, которые выведут отношения на совершенно новый уровень. Ложь и недосказанности в этом году будут особенно разрушительными &mdash; говори честно о своих чувствах.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><span style="font-weight: 400;">&nbsp;</span><strong>Совет карты</strong></p>
<p><span style="font-weight: 400;">Четкость и честность в делах притянут к тебе уважение и ресурсы. Верь в свою силу слова!</span></p>`,
            },
            "ex": {
                normal: `<p><span style="font-weight: 400;">Вот это карта озарения, жесткой правды и мозговой пощёчины от Вселенной. Бывший получит истину в лицо: чётко, резко, без вазелина и обёртки. И да, спойлер: правда ему не понравится.</span></p>
<p><strong>Что его ждёт в будущем?&nbsp;</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Инсайты. Но не те, что помогают взойти на пьедестал, а те, что свалят его оттуда.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он осознает, что не просто потерял тебя. Он потерял себя с тобой. И всё это придёт не по капле,&nbsp; а как ледяной душ на голову.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он будет... резко адекватным. Может попытаться написать. Может вдруг повзрослеть. Может начать говорить то, чего НИКОГДА не говорил. Но...Это всё будет после того, как ты уже перестанешь ждать, когда он одумается.&nbsp;</span></li>
</ul>
<p><span style="font-weight: 400;">Его урок: правда &mdash; это не всегда освобождение. Иногда &mdash; это приговор.</span></p>
<p><strong>Совет карты: </strong><span style="font-weight: 400;">ты &mdash; не та, кто должна ждать, пока он дозреет. Ты &mdash; та, кто заслуживает, чтобы её сразу увидели, услышали, поняли и ценили.</span> <span style="font-weight: 400;">Он понял. Но поздно.</span> <span style="font-weight: 400;">А ты &mdash; уже в новой главе своей жизни, без его мечей и&nbsp; задержек. Он проснулся. А ты &mdash; уже сияешь.</span></p>`
            }
        }
    },
    "king-of-pentacles": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Ты в окружении влиятельной энергии, связанной с богатством, стабильностью и уважением. Король Пентаклей &mdash; это мужчина (или черта в тебе самой), который уверенно стоит на земле, знает цену деньгам, труду и своему времени. Это не про мечты и воздушные замки &mdash; это про реальные достижения и грамотные решения.</span></p>
<p><span style="font-weight: 400;">Он умеет зарабатывать, инвестировать, поддерживать и обеспечивать. Он не срывается в порыве страсти &mdash; он строит фундамент, проверяет прочность каждой стены и кладет плитку ровно.</span></p>
<p><span style="font-weight: 400;">В раскладе это означает:</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Финансовая стабильность. Все под контролем, доходы растут, риски сведены к минимуму.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Крепкая база. Ты уже создала себе &laquo;замок&raquo;, осталось украсить его любимым декором.</span><span style="font-weight: 400;"><br /><br /></span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Надежный союзник. Возможно, в твоей жизни есть (или появится) зрелый, ресурсный, заботливый мужчина, который не бросает слова на ветер.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Мудрые решения. Ты действуешь грамотно: планируешь, вкладываешься, не суетишься.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Рост и плодородие. Всё, во что ты вкладываешься сейчас &mdash; принесет плоды. Стабильные, вкусные, и в хорошем урожае.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><strong>Совет карты:&nbsp;</strong></p>
<p><span style="font-weight: 400;">Король Пентаклей &mdash; это награда за терпение, стратегию и зрелость мышления. Всё, к чему ты сейчас прикасаешься &mdash; может стать золотом. Главное &mdash; не метаться и не сомневаться в своей силе. Ты знаешь, что делать. И ты уже на вершине &mdash; просто наслаждайся видом.</span></p>`, 
                reversed: `<p><span style="font-weight: 400;">Король Пентаклей в перевернутом положении показывает, что кто-то (возможно, ты, возможно, кто-то рядом) слишком сильно заигрался в &laquo;контроль, деньги и влияние&raquo;. Эта карта про одержимость материальным, упрямство и жадность, которую сложно не заметить.</span></p>
<p><strong>Что значит карта</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Гонка за деньгами. Желание наживы перекрывает всё остальное &mdash; от счастья до совести.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Токсичный авторитет. Кто-то давит, манипулирует и самоутверждается за счёт других.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Жадность и контроль. Либо ты, либо кто-то рядом &mdash; &laquo;держит всё при себе&raquo; и боится делиться, будь то деньги, знания или чувства.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Фальшивый комфорт. Внешне &mdash; успех, внутри &mdash; страх потерять всё нажитое непосильным трудом (или хитростью).</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Упертость. Когда человек продолжает строить стену, даже если дверь уже открыта.</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">&nbsp;</span></li>
</ul>
<p><strong>Совет от карты:</strong></p>
<p><span style="font-weight: 400;">Проверь, не бежишь ли ты за тем, что тебя истощает? Или рядом кто-то, кто обесценивает тебя? Помни: настоящая сила &mdash; не в упрямстве, а в гибкости. Возможно, пора перестать держаться за токсичную стабильность, или перестать превращать себя в генератор прибыли. Иногда успех &mdash; это просто умение дышать свободно.</span></p>`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Король Пентаклей &mdash; это символ процветания, уверенности и контроля над своей жизнью. В этом году ты придешь к внутреннему спокойствию и материальному благополучию.</span></p>
<p><strong>Что значит эта карта в раскладе года:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Всё, за что ты берешься, будет приносить результат. Этот год про долгосрочные успехи &mdash; повышение, авторитет, признание. Возможна встреча с влиятельным мужчиной или ментором, который даст мощный профессиональный рывок.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">В финансах всё просто шик: стабильность, рост дохода, покупка дорогих вещей, инвестиции, которые стреляют в десятку. Главное &mdash; не ленись и не откладывай на потом. Сейчас самое время действовать: грамотные вложения окупятся втройне.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Партнер проявит заботу, стабильность и готовность брать на себя ответственность. Отношения выходят на уровень прочного союза &mdash; совместные цели, общие инвестиции, стабильность в чувствах.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Если ты свободна, возможна встреча с серьезным, успешным и очень &laquo;земным&raquo;&nbsp; мужчиной. Он не будет разбрасываться словами &mdash; он будет делать.</span><span style="font-weight: 400;"><br /></span></li>
</ul>
<p><strong>Советы карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Думай как Королева &mdash; строй свою империю шаг за шагом. Даже мечты о миллионах начинаются с первого контракта.&nbsp;</span></li>
</ul>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Главное &mdash; не теряй свою ценность и достоинство, и ты притянешь человека такого же уровня.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не соглашайся на меньшее. Ты уже в статусе внутренней Королевы &mdash; и мир откликается на это соответствующими людьми.</span></li>
</ul>`,
            },
            "ex": {
                normal: `<p><span style="font-weight: 400;">Король Пентаклей говорит о человеке, который думает, что деньги лечат всё, включая его разбитое сердечко и твой уход. Но нет&hellip; не лечат.&nbsp;</span></p>
<h3><strong>Что ждёт его в ближайшем будущем?&nbsp;</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Внешне он &mdash; картина успеха: костюмчик сидит, графики растут, часики блестят на руке. Он будет вкладываться в работу, проекты, инвестиции, шлифовать свои достижения, только чтобы не думать о главной потере, которую нельзя измерить в цифрах.</span></li>
</ul>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он будет смотреть свои сторис через анонимный аккаунт. Спокойно спросит общих друзей, как у тебя дела, делая вид, что просто так. Но он не сделает шаг, потому что слишком горд.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он останется на своём троне. Сильный, надёжный, одинокий. Он будет тем самым мужчиной, с которым удобно, спокойно, стабильно. Но который, как сам понимает, никогда не сможет вернуть то, что действительно было важным &mdash; тёплые искренние чувства.</span></li>
</ul>
<p><strong>Совет от карты: </strong><span style="font-weight: 400;">ты &mdash; не инвестиция, не долгосрочный план и не чек-лист для счастливой жизни. Ты &mdash; настоящая. Живая. Чувствующая. Он тебя оценил&hellip; когда уже поздно. А ты &mdash; уже на другой волне.</span> <span style="font-weight: 400;">Ты не его актив. Ты его упущенное счастье.</span></p>`
            }
        }
    },
    "queen-of-pentacles": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Прекраснейшая Королева Монет &mdash; это воплощение зрелости, уюта и уверенности. Она не мечется, не драматизирует и не суетится &mdash; она просто спокойно и красиво рулит своей жизнью, превращая любую ситуацию в уютный уголок. Если тебе выпала эта карта &mdash; всё идёт к благополучию, но не без твоих усилий.</span></p>
<p><strong>Что сулит карта:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Финансовая стабильность. Или ты её уже достигла, или вот-вот войдешь в состояние &laquo;деньги любят меня&raquo;.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Женщина в силе. Ты сама или кто-то рядом &mdash; зрелая, независимая, земная и очень надёжная дама.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Комфорт во всём. Материальный достаток сочетается с душевным покоем. А ещё &mdash; умение создать уют не только дома, но и в сердцах людей рядом.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Наставничество. Возможно, ты сама сейчас для кого-то как &laquo;тихая гавань&raquo;. Или рядом появится такая женщина &mdash; добрая, мудрая и без тени зависти.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Умение наслаждаться жизнью. Не суета, а размеренное движение к цели. Ты знаешь, чего хочешь &mdash; и получаешь это без истерик.</span></li>
</ul>
<p><strong>Совет от карты:</strong></p>
<p><span style="font-weight: 400;">Не спеши. Сейчас важно не куда ты идёшь, а как. Создай себе красивую, надежную базу &mdash; будь то отношения, финансы, дом или просто душевное состояние. Твоя сила &mdash; в мягкости и последовательности.</span></p>
<p><span style="font-weight: 400;">Королева Пентаклей &mdash; это знак, что ты либо уже стоишь на твёрдом фундаменте, либо уверенно к нему идёшь. Твои старания будут вознаграждены. А ещё &mdash; ты становишься той самой женщиной, к которой тянутся за теплом и стабильностью. Так что варим кофе, зажигаем свечи и продолжаем строить свою красивую реальность.</span></p>`, 
                reversed: `<p><span style="font-weight: 400;">Перевернутая Королева Пентаклей &mdash; это знак, что твой внутренний и внешний сад требует внимания и любви.&nbsp;</span></p>
<p><span style="font-weight: 400;">Что может происходить:</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Финансовые &laquo;перепады давления&raquo;. Деньги утекают, как вода из дуршлага. Причём вместе с ними &mdash; и мотивация.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Проекты буксуют. Всё, за что ты берёшься, как будто срывается. И это &mdash; звоночек: сейчас не время строить воздушные замки. Лучше &mdash; пересидеть бурю.</span><span style="font-weight: 400;"><br /><br /></span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Остывшие отношения. Будь осторожна &mdash; в любви может нарастать отчуждение, а в доме витает холодок. Нежность? Где-то потерялась между упреками.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Темная энергия. Кто-то из окружения тянет соки. Возможно, это контролирующий, манипулятивный человек, который красиво улыбается, но действует исподтишка.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Искажённая забота. Ты либо отдаешь себя без остатка и забываешь про личные границы, либо, наоборот, становишься слишком сосредоточенной на материальном и начинаешь контролировать всё и вся.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><span style="font-weight: 400;">Советы карты:</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не начинай новых проектов, пока не восстановишь внутренний баланс.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не позволяй никому вторгаться в твои границы. Даже если это &laquo;очень заботливый человек&raquo;.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Финансы &mdash; не сейчас. Пересмотри траты, отложи рискованные шаги.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">В отношениях &mdash; побольше честности и меньше пассивной агрессии. Иногда отдых друг от друга &mdash; лучшее решение.</span></li>
</ul>
<p><span style="font-weight: 400;">Успех вернется, как только ты перестанешь быть &laquo;рабочей лошадкой с обидами&raquo; и снова станешь собой &mdash; великолепной, уверенной, тёплой женщиной, у которой под контролем даже штормы.&nbsp;</span></p>`
            },
            "year": {
                normal: `<h3><strong>Главная энергия года</strong></h3>
<p><span style="font-weight: 400;">Королева Пентаклей &mdash; это о бережной любви к себе, создании красивой жизни и уверенности в своих силах. В этом году ты научишься заботиться о себе без чувства вины, построишь вокруг себя уютный, стабильный мир.</span></p>
<p><strong>Что значит эта карта в раскладе года:</strong></p>
<p><strong>Карьера и финансы</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Успех приходёт через аккуратное планирование, терпение и практичные шаги. Возможно открытие собственного дела, связанного с красотой, заботой или уютом.</span></li>
</ul>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Финансовая грамотность выходит на новый уровень: ты не просто зарабатываешь, ты умеешь сохранять и приумножать. Возможны крупные, но очень радостные покупки: недвижимость, украшения, что-то важное для твоего уюта.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Отношения станут крепче, появится больше заботы и совместных планов.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Если ты свободна, высока вероятность встретить человека, который будет видеть в тебе не просто красоту, а женщину-Вселенную.</span></li>
</ul>
<p><strong>Советы карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Инвестируй в то, что приносит тебе радость и безопасность. Уютный дом, комфортная жизнь, счастливая ты &mdash; всё это лучшие инвестиции.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Помни: настоящая забота начинается с себя. Чем бережнее ты относишься к себе, тем красивее становятся твои отношения с другими.</span></li>
</ul>`,
            },
            "ex": {
                normal: `<p><strong>Королева Пентаклей</strong><span style="font-weight: 400;"> в раскладе на бывшего может значит только одно &mdash; он потерял стабильную, заботливую и мудрую женщину, которая делала его жизнь уютной и тёплой. </span><em><span style="font-weight: 400;"><br /></span></em><em><span style="font-weight: 400;"><br /></span></em><strong>Что его ждёт в будущем?&nbsp;</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он будет оглядываться назад и видеть тебя как образ идеальной женщины. Будет сравнивать своих новых девушек с тобой.&nbsp;</span></li>
</ul>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Безумная зависть и ревность к тому, кто будет рядом с тобой.</span></li>
</ul>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он так и не станет человеком, который умеет не только принимать заботу, но и дарить её другим. Он, как мужчина, не даст ни одной женщине стабильность и безопасность. Наоборот, он будет искать это в них. И каждая будет уставать от этого.&nbsp;</span></li>
</ul>
<p><strong>Совет карты: </strong><span style="font-weight: 400;">приятно осознавать, что твоя забота для кого-то важна, пока эта забота не превратилась в материнские обязанности. Ты &mdash; не бесплатный сервис комфорта и любви. Ты &mdash; Королева, которая дает много, но не дважды. </span></p>`
            }
        }
    },
    "knight-of-pentacles": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Если тебе выпал этот надежный, но слегка упрямый трудяга, знай: ты сейчас &mdash; как марафонец, не спринтер. Ты не бежишь &mdash; ты уверенно шагаешь к цели, проверяя каждый шаг, перепроверяя список дел и экономя силы. Не драматично? Возможно. Но очень продуктивно.</span></p>
<p><strong>Рабочая энергия и настрой</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Фокус на задаче: Всё разложено по папочкам, таблички готовы, дедлайны ясны. Никаких воздушных замков &mdash; только стратегия, только хардкор!</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Рутина &mdash; не враг: Рыцарь Пентаклей не ищет приключений. Он знает: результат рождается из стабильных усилий. Эта карта поддержит тебя, если ты берешься за скучные, но нужные дела.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Строй крепкий фундамент: Сейчас ты закладываешь основу чего-то большого &mdash; бизнеса, переезда, нового проекта. Ты не ждешь всплесков вдохновения &mdash; ты знаешь, что вода камень точит.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><strong>Вердикт:</strong></p>
<p><span style="font-weight: 400;">Да, ты всё делаешь правильно. Может, не быстро, не феерично, но зато &mdash; стабильно, умно и с гарантией на результат. Рыцарь Пентаклей всегда выигрывает марафон. Пусть и в грязных ботинках &mdash; зато с дипломом и призом.&nbsp;</span></p>`, 
                reversed: `<p><span style="font-weight: 400;">Если тебе выпал перевернутый Рыцарь Пентаклей, то вселенная буквально шепчет:&nbsp; &laquo;А может, хватит уже тащить всё на себе?&raquo;.&nbsp; Это карта застопорившегося прогресса, усталости от бесконечной рутины и&hellip; немного излишнего упрямства. Ты вроде идешь, но не туда. Или топчешься на месте, потому что боишься свернуть с проверенного маршрута, даже если он давно не работает.</span></p>
<p><span style="font-weight: 400;">Главные сигналы карты:</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Рутина стала ловушкой. Вместо стабильности &mdash; зацикленность. День сурка.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Финансы тормозят. Денежка капает, но ты чувствуешь, что усилия не окупаются.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Все процессы &mdash; как в замедленной съёмке. Не потому что ты медленная, а потому что система неэффективна.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Упертая лошадка. Ты знаешь, что метод устарел, но всё равно тащишь. Потому что &laquo;так надо&raquo;. А может, не надо?</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><strong>Совет карты:&nbsp;</strong></p>
<p><span style="font-weight: 400;">Разреши себе притормозить. Прямо сейчас не время пахать вхолостую. Перепиши цели и методы. Что из этого действительно работает? Подумай, не стала ли ты &laquo;рабыней стабильности&raquo;. Быть надежной &mdash; супер. Но жизнь &mdash; это не только список задач, это ещё и кайф, свобода, удовольствие.</span></p>`
            },
            "year": {
                normal: `<h3><strong>Главная энергия года</strong></h3>
<p><span style="font-weight: 400;">Рыцарь Пентаклей говорит о том, что в этом году ты будешь двигаться вперед пусть не стремительно, зато очень уверенно. Все, что ты начнешь, обязательно даст результаты &mdash; если будешь терпелива и последовательна.</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">Год шепчет тебе: Шаг за шагом ты меняешь свою реальность к лучшему.</span></p>
<p><strong>Что значит эта карта в раскладе года:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Наступает период долгосрочных проектов: никаких спонтанных решений, только четкие планы и продуманные стратегии. Ты можешь получить повышение или долгожданное признание своего труда.</span></li>
</ul>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Деньги будут приходить не в формате выиграла в лотерею, а через планомерные усилия и правильное управление ресурсами.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Если ты в отношениях, то вы научитесь вместе планировать будущее и строить крепкий фундамент для семьи, работы или совместных мечт.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Если ты свободна, возможна встреча с серьезным, верным партнером, который будет не только мечтать о счастье с тобой, но и строить его на деле.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><strong>Советы карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Сохраняй ритм и не бросай начатое. Этот год вознаграждает именно стойких и верных своим мечтам.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Проявляй терпение и не требуй мгновенных результатов.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Смотри на поступки, а не на слова. И сама цени стабильность там, где раньше искала бурю.</span></li>
</ul>`,
            },
            "ex": {
                normal: `<p><strong>Рыцарь Пентаклей</strong><span style="font-weight: 400;"> про очень медленного человека, который не имеет энергии для поступков и изменений. Пока он планирует изменить свою жизнь, переехать и найти новую работу, ты уже будешь в другой стране, в руководящих позициях и двумя детьми. И главное, он даже не понимает, что было не так в ваших отношениях. Он ведь не делал ничего плохого. Просто он не делал ВООБЩЕ НИЧЕГО. </span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">Что его ждёт в будущем?&nbsp;</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он будет двигаться. Медленно. Стойко. Но пока он доберется до финальной точки... ты уже будешь на Марсе.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">В работе он будет топтаться на одном месте. Дело даже не в недостатке возможностей, а в том, что он даже не поднимает на них голову.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Возможно, у него появятся отношения, но они будут очень медленно развиваться.&nbsp;</span></li>
</ul>
<p><strong>Совет карты: </strong><span style="font-weight: 400;">ты &mdash; не проект на потом. Ты &mdash; момент, который нужно ловить, чувствовать, любить здесь и сейчас. Пока он думает, ты &mdash; делаешь.&nbsp;</span></p>`
            }
        }
    },
    "page-of-pentacles": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Если тебе выпал Паж Пентаклей, знай: ты на пороге чего-то нового и классного! Это карта новых возможностей, пусть и пока еще в &laquo;тестовом режиме&raquo;. Тут всё про старт, обучение, полезные связи, первые шаги к финансовой независимости. Так что если давно мечтала начать учиться чему-то интересному, сменить профессию или наконец подать заявку на ту вакансию мечты &mdash; считай, что вселенная уже сказала тебе &raquo;ДА!&raquo;.&nbsp;&nbsp;</span></p>
<p><strong>Что она тебе шепчет:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Учись, учись и ещё раз учись! Сейчас ты особенно восприимчива к новой информации. Курсы, книги, обучающие видео &mdash; всё в копилку.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Первые шаги в карьере. Возможно, новая стажировка, подработка или предложение, которое кажется &laquo;мелким&raquo; &mdash; но на деле это золотой билет.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Полезные знакомства. Кто-то рядом &mdash; твой будущий союзник или спонсор идеи. Присмотрись.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Финансовая жилка на старте. Умеешь монетизировать свое хобби? Самое время попробовать!</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><strong>Совет карты:</strong></p>
<p><span style="font-weight: 400;">Не стесняйся задавать вопросы &mdash; даже самые простые! Ты не обязана знать всё сразу.</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">Заведи блокнот идей или целей &mdash; это поможет систематизировать вдохновение.</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">Не бойся быть &laquo;новичком&raquo; &mdash; каждая королева когда-то была пажом!</span></p>`, 
                reversed: `<p><span style="font-weight: 400;">Перевернутый Паж Пентаклей &mdash; это как будто ты взяла в руки шикарный шанс&hellip; и тут же уронила его в лужу. Упс. Карта говорит: что-то ты подзабыла про ответственность, фокус и внимание. А жизнь-то тебя уже звала в ЗОЖ, учебу, работу или взрослую финансовую грамотность!</span></p>
<p><strong>Что это значит:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Проект встал. Была идея &mdash; и осталась на стадии &laquo;о, прикольно&raquo;. Дальше фантазий дело не пошло.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">В голове каша. Учиться не хочется, работу делать лень, а результат хочется как у Илона Маска.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Растраты без пользы. Мелкие траты, импульсивные покупки, &laquo;просто побаловать себя&raquo; &mdash; а потом ах! Где деньги, Лебовски?</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Непринятый урок. Жизнь уже била по носу, но уроки проигнорированы. И теперь снова грабли &mdash; с усилением.</span></li>
</ul>
<p><strong>SOS-совет:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Заведи финансовый трекер, даже если туда ничего записывать &mdash; это начнёт менять мышление.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Возьми одну цель на ближайшую неделю и не отвлекайся.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не доверяй &laquo;бизнес-предложениям&raquo; от сомнительных знакомых.&nbsp;&nbsp;</span></li>
</ul>
<p><span style="font-weight: 400;">Паж Пентаклей перевернулся &mdash; значит, ты свернула не туда. Но не беда! Это звоночек, а не приговор. Вселенная даёт шанс выучить урок. Разворачивайся, расчёсывай амбиции и вперёд &mdash; по-настоящему, а не понарошку!&nbsp;</span></p>`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Паж Пентаклей приносит в твою жизнь начало нового захватывающего пути. Будет большой прилив любопытства к миру и желание учиться. Возможны перспективы, которые кажутся маленькими, но на деле могут вырасти в нечто потрясающее!</span></p>
<p><strong>Что значит эта карта в раскладе года:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Этот год идеален для обучения и повышения квалификации. Новые знания выведут тебя на новый уровень!</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Появится шанс получить первую прибыль в новом деле или стартовать в интересном проекте.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Отношения будут напоминать первую весну: много нежности, новых эмоций и вдохновения.&nbsp;</span></li>
</ul>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Если ты свободна, ожидается новое знакомство, которое начнется легко и непринужденно. Поначалу чувства могут казаться легкими и невесомыми, но они имеют шанс перерасти в нечто большое.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><strong>Советы карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Вкладывай силы в знания и долгосрочные проекты. Финансовая стабильность начнет выстраиваться постепенно, но верно.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Будь готова к предложениям, которые сначала покажутся скромными &mdash; в них скрыт огромный потенциал.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не бойся быть открытой миру и новым людям. Любовь часто приходит тогда, когда ты увлечена собой и своим развитием.</span></li>
</ul>
<p><span style="font-weight: 400;">Год нашептывает тебе: Ты стоишь у начала дороги, ведущей к сокровищам.</span></p>`,
            },
            "ex": {
                normal: `<p><strong>Паж Пентаклей</strong><span style="font-weight: 400;"> &mdash; это про человека, который только учится. Возможно, с ним может быть какое-то будущее, но ждать придётся очень долго. Он вечный студент. Набирается опыта, пробует, ошибается. Потенциал есть, а скорости нет.&nbsp;&nbsp;</span></p>
<p><strong>Что его ждёт в будущем?&nbsp;</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он может внезапно появиться в твоей жизни с чем-то милым. Скорее всего, это будет милая мелочь, недорогая, но значащая очень много. Не ведись на это, возможно, это даже манипуляция. Такой жест не будет гарантировать тебе с ним стабильности и крепких отношений.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он первокурсник во всём: в работе, в отношениях, в быту.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Прежде, чем он обретёт хоть какую-то мальскую стабильность и успех, ты уже будешь с двумя детьми или на руководящей должности в крутой компании. Ваши&nbsp;</span></li>
</ul>
<p><strong>Совет карты: </strong><span style="font-weight: 400;">ты &mdash; не его учительница по жизни.&nbsp; Ты &mdash; не мотивация для роста. Ты &mdash; уже готовая женщина. Он был просто черновиком, а тебе давно нужен финальный роман. </span></p>`
            }
        }
    },
    "ten-of-pentacles": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Десятка Пентаклей в раскладе &mdash; как будто вы одновременно нашли идеального партнера, купили дом мечты, открыли успешный бизнес и бабушка оставила щедрое наследство. Да-да, всё сразу! Это карта устойчивости, изобилия, поддержки семьи и плодовитой реализации во всех сферах.</span></p>
<p><strong>Что это значит для тебя:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Семья &mdash; опора и поддержка. Всё на своих местах: в доме уют, в отношениях тепло, а на горизонте &mdash; традиции, ценности и объединение поколений.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Финансовая стабильность. Проекты завершаются, сделки закрываются, карьера уверенно идёт вверх. Деньги не просто приходят &mdash; они остаются!&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Корни и наследие. Сейчас лучшее время задуматься о будущем &mdash; не только своем, но и семейном. Это карта &laquo;династии&raquo;, передачи опыта и накоплений.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Материальное = духовное. Здесь духовная наполненность идёт рука об руку с успехом в реальной жизни. Ты не просто &laquo;заработала&raquo;, ты создала основу для полноценной, счастливой жизни.</span></li>
</ul>
<p><strong>Что нужно сделать:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Прими то, чего ты добилась. Не занижай свои заслуги &mdash; ты всё это заслужила!</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Подумай о будущем: куда ты хочешь инвестировать (деньги, энергию, любовь)?</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Поделись своим успехом &mdash; будь той самой женщиной, которая тянет за собой других.</span></li>
</ul>
<p><span style="font-weight: 400;">Десятка Пентаклей в прямом положении &mdash; это когда у тебя всё есть, всё получается, и ты уверена в завтрашнем дне. Тебя ждет стабильность, крепкие связи, забота и любовь. Даже если сейчас ещё не всё идеально &mdash; карта говорит: ты на пороге своего благополучия. Главное &mdash; не бойся принимать изобилие! </span></p>`, 
                reversed: `<p><span style="font-weight: 400;">Когда Десятка Пентаклей ложится вверх тормашками, сказка про &laquo;достаток, уют и поддержку&raquo; становится чуть... хрупкой. Это как дом, который снаружи &mdash; конфетка, а внутри &mdash; трещины по стенам. Карта говорит: что-то с твоим фундаментом пошло не так &mdash; будь то финансы, семейные связи или твои ожидания от жизни.</span></p>
<p><strong>Что это может значить:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Финансовые трудности. Деньги утекают сквозь пальцы, бюджет не складывается, траты растут. Возможны неудачные вложения или конфликт из-за денег.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Семья и традиции под угрозой. Возможно, напряженные отношения с близкими, непонимание между поколениями, отсутствие поддержки, которой ты ждала.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Неоправданные ожидания. Ты много строила планов, мечтала о стабильности, но реальность не совпала с картинкой. И теперь кажется, что &laquo;всё не так&laquo;.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Стремление к статусу &mdash; вместо искренности. Возможно, гонишься за внешним успехом, забывая, что настоящее счастье &mdash; не в количестве ноликов на счету.</span></li>
</ul>
<p><strong>Что делать:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Перепроверь финансы. Не время для крупных покупок, вложений или долгов.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не полагайся на других вслепую. Поддержка должна быть реальной, а не &laquo;на словах&raquo;.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Спроси себя: а что для меня по-настоящему значит &laquo;успех&raquo;? И не пора ли поменять ориентиры?</span></li>
</ul>
<p><span style="font-weight: 400;">Перевернутая Десятка Пентаклей &mdash; это не конец света, а скорее будильник от Вселенной. Да, стабильность пошатнулась, но именно сейчас ты можешь перестроить свою личную башню счастья &mdash; так, как хочется тебе. Начни с себя, не сравнивай себя с другими, и строй свой комфортный мир кирпичик за кирпичиком. Ты обязательно справишься.</span></p>`
            },
            "year": {
                normal: `<h3><strong>Главная энергия года</strong></h3>
<p><span style="font-weight: 400;">Десятка Пентаклей шепчет тебе: </span><span style="font-weight: 400;">&laquo;Т</span><span style="font-weight: 400;">ы на верном пути. Всё, над чем ты так долго трудилась, начинает приносить свои плоды</span><span style="font-weight: 400;">&raquo;.&nbsp;</span></p>
<p><strong>Что значит эта карта в раскладе года:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Твой дом, семья, финансы, личное счастье &mdash; всё будет выстраиваться в прочный, надежный фундамент.</span> <span style="font-weight: 400;">Это год благополучия, традиций и исполнения мечт, которые касаются стабильности и уюта.</span></li>
</ul>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Важные проекты завершатся успешно и принесут тебе признание. В течение года возможны предложения о долгосрочном сотрудничестве, смене работы на более престижную, выход на новый уровень профессионализма.</span></li>
</ul>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Десятка Пентаклей предвещает финансовую стабильность и увеличение доходов. Возможны крупные покупки: новый дом, квартира, автомобиль, вложение в недвижимость. Также это отличный год для инвестиций в будущее: обучение, бизнес, здоровье.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><strong>Советы карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Строй планы на перспективу, вкладывай в свое развитие и создавай финансовую подушку. Это время закладывать фундамент для будущего богатства.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Оценивай не только эмоции, но и стабильность партнера. Выбирай того, кто мечтает о будущем вместе с тобой.</span></li>
</ul>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Цени корни &mdash; свои традиции, семью, жизненные ценности.</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><span style="font-weight: 400;">Ты осознаешь: быть сильной &mdash; значит не только побеждать, но и сохранять, защищать то, что важно для сердца.</span></p>`,
            },
            "ex": {
                normal: `<p><strong>Десятка Пентаклей</strong><span style="font-weight: 400;"> &mdash; карта иллюзий. Когда внешний фасад идеален, но внутри пустота. </span><em><span style="font-weight: 400;">Возможно, у твоего бывшего всё идеально: стабильная работа, квартира, машина. Он думал, что счастье </span></em><span style="font-weight: 400;">&mdash; это набор вещей, но оказалось, что пустоту вещами не заполнить. </span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;"><br /></span><strong>Что ждёт его в будущем?&nbsp;</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Формально у него всё будет хорошо. Дела будут идти в гору.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Счастье? Обойдет стороной. Не будет новых чувств и ярких эмоций. Однако его ответственность будет привлекать женщин. Но ни с одной из них, он не будет чувствовать трепет внутри.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Пустота. Жизнь будет лишена ярких событий.&nbsp;</span></li>
</ul>
<p><strong>Совет карты:</strong><span style="font-weight: 400;"> Ты &mdash; душа, которую он побоялся впустить в свою жизнь. А без души &mdash; хоть дворец, хоть особняк с гаражом на три машины &mdash; просто пустой фасад. Он получил всё, кроме главного &mdash; тебя. Ты заслуживаешь того, кто откроет тебе свою душу, а не пустой салон машины. </span></p>`
            }
        }
    },
    "nine-of-pentacles": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Если бы у Таро была своя инфлюенсерша, то это точно Девятка Пентаклей! Карта символизирует женскую независимость, шик, уверенность и благополучие, которое было достигнуто не подарками судьбы, а благодаря упорному труду, самодисциплине и внутренней силе. Да, ты сделала это сама &mdash; и заслужила каждый момент этого великолепия!&nbsp;</span></p>
<p><strong>Что говорит карта:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Финансовая стабильность &mdash; ты в ресурсе, и это не случайность. Это результат: стараний, просчетов, упорства.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Комфорт и спокойствие &mdash; ты наконец можешь выдохнуть, почувствовать землю под ногами и побаловать себя заслуженными удовольствиями.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Завершение важного этапа &mdash; всё близится к логическому и очень приятному финалу: проект, план, цель &mdash; уже почти в кармане.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Независимость и уверенность &mdash; ты не нуждаешься в чужом одобрении. Ты сама себе и авторитет, и поддержка, и вдохновение.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><strong>Совет карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Поблагодари себя. Не забывай: всё, что у тебя есть &mdash; это результат твоих усилий.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Позволь себе роскошь: время для себя, красивый наряд, тишину, любимую книгу, даже если &laquo;ещё не всё сделано&raquo;.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Продолжай строить: ты умеешь создавать крепкие, надёжные основы &mdash; и в работе, и в отношениях, и в себе.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><span style="font-weight: 400;">Всё, к чему ты прикасалась, дало плоды. И сейчас &mdash; время наслаждаться. Без оправданий. Без оглядки. Просто потому, что ты заслужила.</span></p>`, 
                reversed: `<p><span style="font-weight: 400;">Перевернутая Девятка Пентаклей &mdash; это как Insta-реальность, где всё вроде бы красиво, но только на фото. В реальности &mdash; немного хаос, переутомление, шопинг в кредит и &laquo;мне всё должны&raquo;. Звоночек, что внутренний баланс нарушен, а энергия утекает сквозь пальцы вместе с деньгами.</span></p>
<p><strong>Что говорит карта:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Зависимость от внешнего &mdash; возможно, ты полагаешься на партнёра, родителей или просто не хочешь решать всё сама. Но пора.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Насыщенность материальным и пустота внутри &mdash; вроде бы всё есть, но счастья и удовлетворения &mdash; ноль.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Лень и прокрастинация &mdash; &laquo;сделаю завтра&raquo; превращается в &laquo;ой, уже 2026?&raquo;. Эта карта тянет за рукав: &laquo;Девочка, очнись&raquo;.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Фальшивое благополучие &mdash; красивая картинка, но фундамент &mdash; хлипкий. Карта намекает: хватит делать вид, что всё под контролем.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><strong>Что делать:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Включить взрослую тебя: пересмотри свои цели, финансовые привычки и установки. Ты же не хочешь быть принцессой на содержании или леди с пустым винным бокалом.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Вернись к себе: что тебе реально нужно, чтобы чувствовать себя счастливой? Может, пора вложиться не в сумочку, а в самооценку, развитие или терапию?</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Перестань ждать спасения &mdash; ты сама себе спасательный круг, просто нужно перестать плыть по течению.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><span style="font-weight: 400;">Это не провал, а момент прозрения. Карта намекает, что пора перестать жить по чужим сценариям и начать по-своему. Немного дисциплины, немного честности &mdash; и ты снова будешь блистать не только внешне, но и изнутри.&nbsp;</span></p>`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Девятка Пентаклей шепчет тебе: </span><span style="font-weight: 400;">&laquo;</span><span style="font-weight: 400;">Ты заслужила всё хорошее, что входит в твою жизнь. Живи красиво, наслаждайся собой и плодами своих усилий!</span><span style="font-weight: 400;">&raquo;. </span><span style="font-weight: 400;">Это год самодостаточности, внутренней силы, удовольствия от жизни и свободы делать то, что хочется сердцем.</span></p>
<h3><strong>Что ждать от года?&nbsp;</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты будешь признана как профессионал, к твоему мнению будут прислушиваться. Возможен рост доходов за счет повышения квалификации, открытия собственного дела или перехода на новый уровень в текущей сфере.</span></li>
</ul>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Можно позволить себе то, о чем давно мечтала: обновить гардероб, сделать ремонт, поехать в роскошное путешествие.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Этот год &mdash; год ярких поклонников, романтических знакомств и восхищения твоей личностью. Ты буквально светишься! И потому привлекаешь к себе достойных людей.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Этот год научит тебя жить для себя, не чувствуя вины. Наслаждаться своей независимостью и зрелостью.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><strong>Советы карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не бойся тратить на себя &mdash; ты этого заслуживаешь! Но помни: мудрая дива всегда оставляет часть средств для умных инвестиций.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Помни: ты выбираешь, кого подпускать к своему сердцу. Оценивай мужчин по поступкам, а не обещаниям.</span></li>
</ul>
<p><span style="font-weight: 400;">Ты почувствуешь себя хозяйкой своей судьбы &mdash; сильной, уверенной, гармоничной.</span></p>`,
            },
            "ex": {
                normal: `<p dir="ltr">Девятка Пентаклей &mdash; вот это вкусно! Потому что тут бывший смотрит на картинку твоей жизни без него, где ты &mdash; независимая, цветущая, вся сияешь&hellip; А он? Он будто в музее твоего успеха, ходит молча, без аудиогида и с разбитым сердцем в кармане.</p>
<h3 dir="ltr">Что ждёт его в будущем?&nbsp;</h3>
<ul>
<li dir="ltr">
<p dir="ltr">Боль от того, что ты не просто пережила разрыв &mdash; ты расцвела от него. Он не будет злиться. Он будет... замирать от зависти и сожаления. &nbsp;</p>
</li>
<li dir="ltr">
<p dir="ltr">Он будет следить. Смотреть все твои сторисы и проверять статус, когда ты была онлайн в последний раз. Но он не напишет. Потому что чувствует себя недостаточным. Теперь ты &mdash; слишком звезда для его уже неактуальной роли.</p>
</li>
</ul>
<ul>
<li dir="ltr">
<p dir="ltr">Он понимает, что ты выбрала себя.&nbsp; А это &mdash; его личное поражение.</p>
</li>
<li dir="ltr">
<p dir="ltr">Он будет жить, работать, развиваться. Но всегда будет с фантомной болью от утраченной возможности быть рядом с женщиной, которая стала самой версией мечты &mdash; без него.</p>
</li>
</ul>
<p dir="ltr">Совет карты: ты &mdash; не его стимул, не его мотивация, не его повод меняться. Ты &mdash; сама по себе. Ты &mdash; та, кто умеет быть счастливой не вопреки всему, а потому ты любишь себя и знаешь, что ты заслуживаешь счастья.&nbsp;</p>`
            }
        }
    },
    "eight-of-pentacles": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Эта карта о труде, концентрации и совершенствовании мастерства. Ты как будто сидишь в уютной мастерской собственной судьбы и оттачиваешь идеальную монетку за монеткой, день за днём становясь круче, умнее и увереннее. Восьмерка Пентаклей &mdash; это не про легкую удачу, а про стабильный рост и прогресс шаг за шагом. Не момент с фейерверками, а уверенное движение вперёд.</span></p>
<p><strong>Что карта тебе говорит:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты строишь свое будущее &mdash; и делаешь это на совесть. Ты в правильном ритме: обучение, практика, работа, рост.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Каждая мелочь &mdash; это вклад. Ты сейчас в том самом моменте, где &laquo;кажется, я просто делаю свою работу&raquo;, а на деле &mdash; ты творишь магию стабильности и уверенности.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Пора учиться и совершенствоваться. Возможно, стоит записаться на курсы, пройти стажировку или освоить новый скилл. Это даст плоды.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты в процессе становления профессионала. Ты становишься той самой девушкой, на которую все будут равняться. Главное &mdash; не бросай начатое.</span></li>
</ul>
<p><strong>Совет карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не сбавляй темп &mdash; ты близка к результату.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Сфокусируйся: одна цель, одно направление, одно действие за раз.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Поверь в свою ценность: ты растешь и светишься от каждого вложенного усилия.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><span style="font-weight: 400;">Восьмерка Пентаклей говорит: &laquo;Ты &mdash; художница своей жизни, и твоя картина уже начинает сиять!&raquo;. Оставайся верна себе, доводи начатое до конца и знай: блестящий успех приходит к тем, кто умеет работать с любовью к делу и к себе.&nbsp;</span></p>`, 
                reversed: `<p><span style="font-weight: 400;">Ох, солнышко, если эта карта перевернулась &mdash; значит, всё идет не по плану, и ты это чувствуешь каждой клеточкой. Вроде стараешься, вроде работаешь&hellip; а результата нет. Или результат есть, но он не вдохновляет и не радует. Много усилий &mdash; мало толку. Это как рисовать идеальные стрелки 40 минут, а потом умыться, потому что они всё равно получились разными.</span></p>
<p><strong>Что хочет сказать тебе карта:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Прокрастинация рулит. Есть ощущение, что всё как-то однообразно, скучно, и ты ловишь себя на мысли: &laquo;А зачем вообще всё это?&raquo;.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Вложения без отдачи. Ты что-то вкладываешь &mdash; время, силы, деньги &mdash; а в ответ тишина. Либо выбрала не тот путь, либо пора пересмотреть тактику.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Отсутствие роста. Возможно, ты топчешься на месте, потому что боишься перемен или просто не получаешь нужной поддержки.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Низкая мотивация. Всё, что раньше зажигало, теперь вызывает зевоту. Вдохновение? Оно где-то пошло за кофе и не вернулось.</span></li>
</ul>
<p><strong>Совет карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Пора задать себе вопрос: &laquo;А мне это вообще нужно?&raquo;.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Возможно, ты стараешься не там, где стоит. Переориентируй энергию.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не бери всё на себя. Делегируй, проси помощи, сокращай список дел.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Меньше перфекционизма &mdash; больше доброты к себе.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><span style="font-weight: 400;">Восьмерка Пентаклей перевернутая говорит: &laquo;Ты заслуживаешь большего, чем просто &ldquo;выживать&rdquo; в своей рутине&raquo;. Смотри по сторонам, прислушайся к себе и помни: ты &mdash; не робот, ты живая, настоящая и классная. Не забывай об этом.&nbsp;</span></p>`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Восьмерка Пентаклей нашептывает тебе:&nbsp; </span><span style="font-weight: 400;">&laquo;</span><span style="font-weight: 400;">Работа над собой &mdash; это волшебство, которое строит лучшую жизнь. Терпение и внимание к деталям выведут тебя в число лучших</span><span style="font-weight: 400;">&raquo;</span><span style="font-weight: 400;">. Это год обучения, шлифовки мастерства, профессионального роста и накопления богатства.</span></p>
<h3><strong>Что ждать от года?&nbsp;</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Год подарит тебе шанс стать настоящей профи в выбранной области. Возможно начало долгожданного проекта, стажировки, повышения квалификации или даже смена работы на более перспективную.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Год идеально подходит для работы над совместными проектами или укрепления отношений через общее дело.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Если ты свободна, то встретишь человека, который оценит тебя за глубину, доброту и трудолюбие, а не только за яркую оболочку.</span></li>
</ul>
<p><strong>Советы карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не ищи быстрых побед. Этот год &mdash; про стабильный рост и радость от процесса. Позволь себе гордиться даже маленькими победами!</span></li>
</ul>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Полюби процесс, а не только результат. Оттачивай мастерство, а не гонись за быстрой славой.</span></li>
</ul>
<p><span style="font-weight: 400;">Ты поймешь, что каждый вложенный час, каждый маленький успех складываются в огромную личную победу.</span></p>`,
            },
            "ex": {
                normal: `<p><strong>Восьмёрка Пентаклей</strong><span style="font-weight: 400;"> &mdash; это уже целый </span><em><span style="font-weight: 400;">мастер-класс по позднему раскаянию,</span></em><span style="font-weight: 400;"> когда бывший вдруг понял, что надо работать над собой&hellip; только ты уже уволилась с должности его личной мотивации.</span></p>
<h3><strong>Что его ждёт в будущем?&nbsp;</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он входит в свою эпоху развития: может запишется на курсы, начнёт читать книги, напишет список целей и задач.&nbsp; Он всё делает правильно &mdash; но с ужасным опозданием</span><strong>. </strong><span style="font-weight: 400;">Он будет строить новую версию себя.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Тоска вперемешку с усердием. Он будет заглушать боль занятостью. Потому что если он остановится, придется почувствовать всё &mdash; в том числе потерю тебя.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он искренне жалеет. Но не может это сказать.&nbsp;</span></li>
</ul>
<p><strong>Совет карты: </strong><span style="font-weight: 400;">ты &mdash; не проект &laquo;Исправить парня за 10 дней&raquo;. Ты &mdash; звезда, которая уже ушла за горизонт, а он только сейчас достал телескоп. Пусть работает. Пусть растёт.</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">Но ты уже не та, кто ждёт. Ты &mdash; та, кто идёт дальше.</span></p>`
            }
        }
    },
    "seven-of-pentacles": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Ты посадила своё денежное деревце, полила его надеждой, удобрила трудолюбием&hellip; и теперь стоишь, поглядывая на него, и думаешь: &laquo;Ну где же мой шик, блеск, деньги и признание?&raquo;.&nbsp;</span></p>
<p><span style="font-weight: 400;">Семерка Пентаклей в прямом положении &mdash; это момент, когда всё не просто так, но результат еще не наступил. А значит &mdash; ты на правильном пути, просто не время срывать плоды.</span></p>
<p><strong>Что говорит тебе карта:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты уже проделала большую работу, даже если пока не видишь ощутимого эффекта.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Прояви терпение. Всё действительно сработает, но не по щелчку пальцев, как в фильмах. Тебе нужно еще чуть-чуть времени.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Если ты не в восторге от результата &mdash; не спеши всё бросать. Возможно, стоит скорректировать план, а не начинать с нуля.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Карта намекает: сейчас &mdash; время анализа. Не бегай, не суетись, оцени промежуточные итоги.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><strong>Совет карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Делай всё с любовью, но не жди мгновенного фейерверка. Это марафон, не спринт.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Проверь: ты движешься в верном направлении? Если да &mdash; просто продолжай.</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">Если появилась новая идея &mdash; не кидайся с места в карьер. Сначала &mdash; план, потом &mdash; дело.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не поддавайся тревоге. Это всего лишь пауза перед результатом.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><span style="font-weight: 400;">Семерка Пентаклей &mdash; это &laquo;почти&raquo; перед &laquo;ура!&raquo; Ты посеяла, и вселенная тебя услышала. Теперь &mdash; наблюдай, подкармливай свои мечты и не сомневайся: ты всё делаешь правильно.&nbsp;</span></p>`, 
                reversed: `<p><span style="font-weight: 400;">Перевернутая Семерка Пентаклей &mdash; это крик вселенной: &laquo;Алло, девочка, ты точно уверена, что хочешь продолжать именно в этом направлении?&raquo;. Карта прямым текстом говорит: результата либо не будет, либо он тебя разочарует.</span></p>
<p><span style="font-weight: 400;">Что происходит:</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Надежды и ожидания не совпадут с реальностью. Это как ждать принца, а получить&hellip; его лошадь.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Любые вложения &mdash; финансовые, эмоциональные, временные &mdash; скорее всего, не окупятся.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Неоправданный риск = потенциальный провал. Авантюры? Нетушки, королева, не сегодня.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты вкладываешься туда, где отдачи быть не может. Что-то или кто-то просто не стоит твоих ресурсов.</span></li>
</ul>
<p><strong>Совет карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Стоп! Не беги вперёд, если не уверена, куда ведёт дорога.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Пересмотри планы. Что-то здесь нуждается в полной перезагрузке.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Зачисти поле: избавься от бесполезных дел, токсичных связей и устаревших целей.</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">Фокус на перспективность. Выбирай только то, что реально может дать рост.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><span style="font-weight: 400;">Перевернутая Семерка Пентаклей &mdash; не трагедия, а трезвый звонок: &laquo;Не жди урожая с чужого огорода и не корми иллюзии&raquo;. Ты заслуживаешь вкладываться только в то, что откликается, растёт и делает тебя счастливее. Иногда отпускать &mdash; это лучший шаг к настоящему успеху.</span></p>`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Этот год полон ожидания, оценки результатов и стратегического планирования. Это не момент забега на скорость &mdash; это время для вдумчивого ухода за своим &laquo;садом&raquo;.</span></p>
<h3><strong>Что ждать от года?&nbsp;</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Год наградит тебя за упорный труд последних лет. Ты увидишь первые реальные результаты своих вложений времени и сил. Возможно, придется немного подождать окончательного успеха, но это не остановит твой рост.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты поймешь, что финансовое благополучие &mdash; это марафон, а не спринт. Избегай рисков и больших трат &mdash; лучше вложиться в развитие своих навыков.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Если ты в отношениях, то вы с партнёром окажетесь на этапе переоценки отношений: куда вы движетесь дальше?</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Если ты свободна, то любовные перспективы будут появляться не быстро, но обещают быть более зрелыми и перспективными.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><strong>Советы карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Регулярные маленькие шаги принесут куда больше, чем один скачок. Работай над проектами, которые действительно резонируют с твоим сердцем.</span></li>
</ul>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не торопи события. Правильные люди приходят в правильное время.</span></li>
</ul>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Оценивай свои достижения с благодарностью.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Доверяй жизни, даже когда результаты не сразу заметны.</span></li>
</ul>
<p><span style="font-weight: 400;">Ты поймешь, что каждый момент ожидания &mdash; это тоже путь. И иногда именно в тишине происходит самая важная магия.</span></p>`,
            },
            "ex": {
                normal: `<p><strong>Семёрка Пентаклей</strong><span style="font-weight: 400;"> &mdash; это карта про того самого мужчину, который готов вкладываться только ради того, чтобы получить что-то взамен. А когда ты не даёшь ему то, что он ожидает, он строит из себя обиженного и оскорблённого.&nbsp;</span></p>
<h3><strong>Его внутреннее состояние</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он будет всегда считать, что его используют и не ценят того, что он делает ради других</span><span style="font-weight: 400;">. Он думает: </span><span style="font-weight: 400;">&laquo;Не, ну я же розы дарил. В рестораны водил. Разве этого недостаточно?&raquo;.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Его ожидание, что все ему должны будет распространяться и на работу. Возможно, там эта манипуляция как раз таки сыграет на руку. Может, он даже преуспеет в инвестициях.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Очень поздно, он осознаёт, что ты ушла не потому что тебе было мало подарков. Ты ушла из-за отсутствия процесса. Жизнь &mdash; это не только букеты роз и украшения. Жизнь, это когда мужчина помогает тебе дотащить тяжёлые сумки до дома, встречает поздно вечером и провожает до дома, ухажиает за тобой, когда ты болеешь. А он не умеет отдавать делами, только вещами.&nbsp;</span></li>
</ul>
<p><span style="font-weight: 400;">Ирония в том, что он станет тем, кем ты хотела его видеть, но ты уже будешь с другим, которого не нужно было ждать.&nbsp;</span></p>
<p><strong>Совет карты: </strong><span style="font-weight: 400;">ты &mdash; не влад, на который можно бросить сумму денег и ждать, когда они принесут свои проценты. Ты &mdash; женщина, с которой нужно жить и быть настоящим уже сейчас. Бескорыстно, от чистого сердца.</span><strong>&nbsp;</strong></p>`
            }
        }
    },
    "six-of-pentacles": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Поздравляем, ты сейчас в роли феи материального изобилия!&nbsp; Шестерка Пентаклей &mdash; это про равновесие между &laquo;давать&laquo; и &laquo;получать&laquo;, про помощь, поддержку и взаимность. Аркан говорит: ты &mdash; тот самый светлый человечек, который способен делиться и не ждать ничего взамен. Или... в твоей жизни появится такой человек.</span></p>
<p><strong>Что несёт карта:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты &mdash; даритель: ресурсы, советы, поддержка &mdash; ты готова делиться тем, что у тебя есть. И делаешь это от души.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Или ты &mdash; получатель: Вселенная уже пакует для тебя коробочку помощи, будь то деньги, предложение, поддержка, подарок или просто волшебное &laquo;всё будет хорошо&raquo;.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Баланс энергии: карта намекает, что ты пришла к здоровому взаимодействию с окружающим миром &mdash; не обесцениваешь себя, но и не становишься спасательницей за свой счёт.</span></li>
</ul>
<p><strong>Совет карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Дари с лёгким сердцем. Что даешь &mdash; то вернётся.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не бойся принимать. Быть нужной &mdash; это приятно и безопасно.</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">Открывайся миру. Он тоже хочет быть для тебя щедрым.&nbsp;</span></li>
</ul>
<p><span style="font-weight: 400;">Шестерка Пентаклей &mdash; это про доверие жизни, доброту без задней мысли и уверенность, что твоя щедрость &mdash; инвестиция в светлое будущее. Ты светишь, и этот свет возвращается к тебе.&nbsp;</span></p>`, 
                reversed: `<p><span style="font-weight: 400;">Когда Шестерка Пентаклей переворачивается, баланс &laquo;давать-получать&raquo; нарушен, и всё превращается в драму: либо помогаешь в ущерб себе, либо ожидаешь благодарности за каждую мелочь, либо тебя держат на коротком поводке &laquo;помощи с условиями</span><span style="font-weight: 400;">&raquo;</span><span style="font-weight: 400;">.</span></p>
<p><strong>Что означает карта:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Щедрость с ноткой контроля: вам могут что-то давать, но не бесплатно &mdash; за это потом попросят. Причём много.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Финансовые неудачи: возможно, были неразумные траты или вложения, и теперь вы чувствуете ущерб и внутреннюю скупость.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Зависимость: кто-то в вашей жизни может манипулировать ресурсами, делая вид, что &laquo;помогает&raquo;. Или это вы слегка злоупотребляете своим положением.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><strong>Совет карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Стоп! Перепроверь границы. Помогаете ли вы по зову сердца &mdash; или из страха быть &laquo;плохой девочкой&raquo;?</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не позволяйте пользоваться собой. Даже если &laquo;очень нужно&raquo;.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Возьмите паузу в растрате ресурсов &mdash; будь то деньги, время или эмоциональная энергия.</span></li>
</ul>
<p><span style="font-weight: 400;">Перевернутая Шестёрка Пентаклей говорит:&nbsp; &laquo;Милая, ты не банкомат и не эмоциональный донор. Верни себе ресурс, не будь валютой в чужих играх&raquo;. Пусть твоя щедрость остаётся золотой, а не золотой клеткой.&nbsp;</span></p>`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Шестерка Пентаклей улыбается тебе и шепчет: </span><span style="font-weight: 400;">&laquo;</span><span style="font-weight: 400;">Вселенная видит твои старания и готова щедро отблагодарить тебя</span><span style="font-weight: 400;">&raquo;. </span><span style="font-weight: 400;">Этот год &mdash; про взаимность, дарение и благодарность.</span></p>
<h3><strong>Что ждать от года?&nbsp;</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ожидается много приятных бонусов: премии, новые проекты, предложения от людей, которые ценят твой труд.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не бойся сама стать дарителем &mdash; если можешь кого-то поддержать советом, связями или рекомендацией, сделай это. Бумеранг вернется сторицей!</span></li>
</ul>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Возможны неожиданные денежные подарки, возврат старых долгов или появление новых источников дохода.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Если ты в отношениях, партнёр будет особенно заботлив и щедр.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Если ты свободна, очень вероятно знакомство с человеком, который будет готов дать тебе тепло и заботу просто так &mdash; без условий.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><strong>Советы карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Дари миру больше добра &mdash; и он ответит тебе тем же!&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Давай и получай с открытым сердцем.</span></li>
</ul>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Помни, что любовь &mdash; это не счетчик услуг. Она живет там, где царит благодарность.&nbsp;</span></li>
</ul>
<p><span style="font-weight: 400;">Ты почувствуешь, что в тебе рождается внутренняя щедрость &mdash; и это сделает тебя ещё сильнее и прекраснее.</span></p>`,
            },
            "ex": {
                normal: `<p><strong>Шестёрка Пентаклей</strong><span style="font-weight: 400;"> &mdash; про человека, который не умеет слышать и слушать. Ты просишь его купить кофе, а он возьмёт какао. Ты просишь встретить тебя в 18:00, а он приедет в 20:00, даже ещё выставит тебя виноватой, что ты обиделась на это и портишь всем настроение. Потребности других людей для него ничего не значат, главное это то, чего хочет он. </span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;"><br /></span><strong>Что ждёт бывшего в будущем?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он это осознает свои ошибки и начнётся меняться, но ты уже будешь с тем, кого не нужно было ждать.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он может начать помогать другим. Станет хорошим, внимательным, чутким. Но тебе уже это не нужно.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Первое время, по иронии судьбы, им кто-то воспользуется. Он получит урок. Бумеранг вернётся. Уже он будет ждать кого-то два часа и получать какао вместо кофе.&nbsp;</span></li>
</ul>
<p><strong>Совет карты: </strong><span style="font-weight: 400;">ты &mdash; была той, кто дает от сердца. А он давал от удобства. Пусть теперь щедро сеет заботу другим. Но ты &mdash; уже цветёшь в саду, который он не умел поливать.</span></p>
<p><br style="font-weight: 400;" /><br style="font-weight: 400;" /><br style="font-weight: 400;" /><br style="font-weight: 400;" /></p>`
            }
        }
    },
    "five-of-pentacles": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Пятерка Пентаклей &mdash; это как выйти в лёгкой куртке в ледяной ливень&hellip;Ты замёрзла, устала и немного потерялась, а деньги как будто испарились с банковской карты. Карта предвещает время тревог, особенно в материальной или эмоциональной сфере.</span></p>
<p><strong>О чём говорит карта:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Финансовые заминочки: возможны долги, потери, расходы, которые выбивают из колеи.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ощущение одиночества: когда даже в толпе чувствуешь, что остаёшься наедине со своими страхами.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Состояние &laquo;ничего не радует&raquo; &mdash; упадок мотивации, низкий энергетический фон, тревожные мысли.</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">Потребность в поддержке, но ты или стесняешься её попросить, или убеждена, что тебя не поймут.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><strong>Что делать?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Включи разум, отключи панику. Сейчас главное &mdash; не поддаваться эмоциональной лавине.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Проверь бюджет, не трать по импульсу, даже если акция &laquo;два за цену одного&raquo;.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Обратись за помощью. Иногда просто нужен кто-то, кто выслушает и скажет: &laquo;Ты справишься!&raquo;.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Найди способ вернуть себе опору: медитация, прогулки, дневник, хороший сериал, любимый плед.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><strong>Совет карты:</strong></p>
<p><span style="font-weight: 400;">Не стыдно быть в минусе &mdash; стыдно не пытаться выбраться. Ты не одна, ты сильнее, чем думаешь. Просто подожди немного, и ты увидишь: помощь ближе, чем кажется.</span></p>`, 
                reversed: `<p><span style="font-weight: 400;">Если в прямом положении карта была как затяжная гроза над душой, то в перевернутом &mdash; это первые солнечные лучи сквозь тучи. Ты уже не та, что вчера сидела в тревогах и смотрела в потолок. Ты понимаешь, что да, было тяжело, но это не конец, а только передышка перед новым стартом.</span></p>
<p><strong>Что несёт перевернутая Пятерка Пентаклей:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты осознала: &laquo;Окей, я в заднице. Но я туда не прописывалась &mdash; и точно не останусь&raquo;.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Настроение на перемены. Ты как будто собираешь волосы в хвост и думаешь: &laquo;Так, а теперь вперёд &mdash; делать красиво&raquo;.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Появляется возможность восстановить финансы, даже если медленно &mdash; главное, ты уже в процессе.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты снова выходишь к людям, открываешься миру &mdash; возможно, после долгой изоляции или душевной перезагрузки.</span></li>
</ul>
<p><strong>Что делать сейчас:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Четкий план действий: пусть это будут 3 маленьких шага к большой цели.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Меньше самокритики &mdash; больше самоподдержки. Да, были ошибки. Но ты их видишь и делаешь выводы.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Говори о своих чувствах &mdash; подруга, терапевт, дневник, даже голосовые себе самой в телегу.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Поблагодари себя за то, что не сдалась. Это важнее, чем кажется.</span></li>
</ul>
<p><strong>Вывод:&nbsp;</strong></p>
<p><span style="font-weight: 400;">Перевернутая Пятерка Пентаклей &mdash; это не о боли, это о выздоровлении. О том, как ты встаёшь, вытираешь слёзы и говоришь:&nbsp; &laquo;Ну что, мир, я готова на второй раунд. Только теперь &mdash; по моим правилам&raquo;. </span></p>`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Пятерка Пентаклей говорит тебе: </span><span style="font-weight: 400;">&laquo;</span><span style="font-weight: 400;">Не бойся временных трудностей &mdash; они закаляют твой дух. Ты сильнее, чем думаешь, и даже шторм тебе на пользу</span><span style="font-weight: 400;">&raquo;.</span><span style="font-weight: 400;"> Этот год &mdash; про преодоление испытаний, поиск поддержки и открытие своих внутренних ресурсов.</span></p>
<p><strong>Что значит эта карта в раскладе года:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Могут быть моменты, когда тебе покажется, что успех слишком далёк. Важное напоминание: этот этап временен! Возможны неожиданные перемены &mdash; например, смена работы или пересмотр целей.</span></li>
</ul>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">С финансами могут быть трудности: задержки выплат, неоправданные ожидания. Но Пятерка Пентаклей обещает: если ты не сдашься, ситуация обязательно наладится.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Если ты в отношениях, могут быть испытания: бытовые проблемы, стресс, непонимание. Те, кто смогут пройти этот путь вместе, станут ближе, чем когда-либо.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Возможны моменты одиночества и разочарований в новых знакомствах. Но карта напоминает: иногда судьба сначала убирает неподходящих людей, чтобы расчистить место для настоящей любви.</span></li>
</ul>
<p><strong>Советы карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не бойся просить помощи, если она нужна. Настоящие друзья и союзники проявляются именно в сложные моменты.&nbsp;</span></li>
</ul>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Доверяй времени. Даже в периоды одиночества ты не одна &mdash; твоя лучшая любовь уже на пути к тебе.&nbsp;</span></li>
</ul>
<p><span style="font-weight: 400;">Этот год научит тебя определять, кто твоя настоящая опора.</span></p>`,
            },
            "ex": {
                normal: `<p><strong>Пятёрка Пентаклей</strong><span style="font-weight: 400;"> &mdash; это про осознание потери, это тоска щемящая в сердце. Возможно, твой бывший осознал, что упустил тебя и сейчас он страдает.&nbsp;</span></p>
<h3><strong>Что его ждёт в будущем?&nbsp;</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ох, там минус 30 по самооценке и полнейшая заморозка. Он одинок, растерян, и ощущает себя выброшенным из собственного мифа о том, что он всё держит под контролем. Он не понимает, как оказался на обочине жизни.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он не будет активно пытаться вернуться. Он будет страдать тихо. Прятаться в работе.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Иногда он попытается мелькнуть: лайкнуть, написать привет, но страх быть отвергнутым сильнее в нём, чем желание что-то исправить.</span></li>
</ul>
<p><strong>Совет карты:</strong> <span style="font-weight: 400;">ты &mdash; не приют для эмоционально замёрзших мальчиков. Ты &mdash; камин. Очаг. Солнце. И если он вышел на холод, сам виноват, что не захотел согреться, пока ты была рядом. Пусть теперь варится в своей вьюге. А ты &mdash; согреваешь себя, своих близких и того, кто не боится держать тебя за руку даже в метель.</span></p>`
            }
        }
    },
    "four-of-pentacles": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Ты &mdash; хозяйка положения. Всё под контролем: финансы, границы, цели. Ты умеешь удерживать своё, выстраивать вокруг себя порядок и стабильность. Но! В этой стабильности есть одна ловушка: чем крепче ты сжимаешь &mdash; тем меньше остаётся воздуха.</span></p>
<p><strong>Предупреждение от карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Стагнация. Застой в жизни может быть следствием страха потерять нажитое. Ты как будто держишься за &laquo;стабильность&laquo; даже тогда, когда пора бы уже шагнуть вперёд.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Слишком много контроля. Возможно, ты удерживаешь не только финансы, но и людей. Карта мягко подсказывает: контроль &ne; любовь.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Недоверие к миру. Боишься тратить, боишься делиться, боишься потерять. Но иногда, чтобы получить больше, нужно отпустить хоть чуть-чуть.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><strong>Что делать:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Распиши свои финансы. Что действительно важно, а что просто страх?</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Позволь себе мини-щедрость. Купи кофе подруге, сделай донат благотворительности, подари себе ужин в красивом месте.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Обнови свое пространство. Даже перестановка в комнате освежит энергию.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Планируй рост, а не только удержание. Деньги &mdash; не враги, они хотят двигаться вместе с тобой.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><span style="font-weight: 400;">У тебя уже всё есть &mdash; теперь важно научиться не просто сберегать, но и наслаждаться тем, что имеешь.&nbsp;</span></p>`, 
                reversed: `<p><span style="font-weight: 400;">Перевернутая Четверка Пентаклей говорит: финансовая стабильность пошатнулась, пора пересматривать подходы к деньгам и контролю.</span></p>
<p><strong>Возможные значения карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Деньги утекают как вода сквозь пальцы.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ссоры на почве финансов, особенно с близкими: &laquo;А куда ушли эти деньги?!&raquo;.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Возможно, ты потеряла постоянный источник дохода или переоценила свою загруженность и ресурсы.</span></li>
</ul>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты учишься быть уязвимой, открываться людям, делиться чувствами.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Возможно, до этого держалась за старые установки, привычки, отношения... но теперь пришло время пустить чувства наружу &mdash; и деньгам, и людям.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Урок: отпусти. И не только кошелёк, но и эмоции.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><br /><br /></p>
<p><strong>Что стоит сделать:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Поговори. Если ссора на деньгах &mdash; обсудите, а не замалчивай. Иногда дело не в сумме, а в эмоциях.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Наведи порядок в жизни и кошельке. Пора избавиться от лишнего &mdash; не только из гардероба, но и из финансовых привычек.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Позволь себе расслабиться. Не держи всё внутри &mdash; тебе тоже можно быть уязвимой, и это не делает тебя слабой.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><strong>Итог:</strong></p>
<p><span style="font-weight: 400;">Перевернутая Четверка Пентаклей &mdash; как неожиданный переезд: вроде бы теряешь старую зону комфорта, но взамен получаешь шанс создать новый уют.&nbsp; Пусть финансы и эмоции не пугают тебя &mdash; ты гораздо сильнее и мудрее, чем кажется. А если всё разваливается &mdash; значит, пришло время построить заново. Но уже на своих, настоящих условиях.&nbsp;</span></p>`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Четвёрка Пентаклей напоминает тебе:</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты уже многое имеешь &mdash; научись это ценить.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Стабильность &mdash; это не клетка, а твоя прочная опора.</span></li>
</ul>
<p><span style="font-weight: 400;">Этот год про обретение внутренней уверенности, укрепление своих позиций и осознанное отношение к ресурсам &mdash; материальным и эмоциональным.</span></p>
<p><strong>Что несет эта карта?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Будь осторожна с резкими решениями &mdash; стабильность сейчас ценнее быстрых успехов. Проекты будут развиваться медленно, но верно. Главное &mdash; настойчивость и терпение.</span></li>
</ul>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Этот год идеально подходит для укрепления материального положения: накоплений, вложений, планирования бюджета.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">В отношениях может быть нарушение баланса, потому что требований с твоей стороны будет больше, чем вложений.&nbsp;</span></li>
</ul>
<p><strong>Советы карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Научись отличать реальную необходимость от страха потерять. Щедрость сердца откроет перед тобой новые пути!&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Если ты в отношениях, не зажимай партнёра в &laquo;золотую клетку&raquo;. Вместо ревности и контроля &mdash; доверие и поддержка.</span></li>
</ul>`,
            },
            "ex": {
                normal: `<p><strong>Четвёрка Пентаклей</strong><span style="font-weight: 400;"> &mdash; это карта про человека, который не умеет отпускать. Ни людей, ни прошлое, ни старые вещи. Он сидит, вцепившись в свои чувства, страхи и контроль, как в старые штаны в дырках.&nbsp;</span></p>
<p><strong>Что его ждёт в будущем?&nbsp;</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Может даже себя так, будто ты всё ещё его. Собственничество не может позволить ему отпустить тебя.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он будет одержим контролем: на работе, в новых отношениях, в быту. Возможно, он даже перегнёт палку. Ведь любовь как бабочка в руке: сожмешь слишком сильно раздавишь, отпустишь и она улетит.&nbsp;</span></li>
</ul>
<p><strong>Совет карты</strong><span style="font-weight: 400;">: ты &mdash; не человек, которого надо удерживать. Ты &mdash; та, с кем нужно делиться. Любовью. Временем. Словами. А если кто-то закрывает всё в сейф и боится делиться, пусть сам и живет в этом банке с консервированными чувствами. А ты &mdash; живи. Свети. Люби открыто. Ты принадлежишь только себе.</span></p>`
            }
        }
    },
    "three-of-pentacles": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Привет, деловая пчёлка! Если в раскладе выпала Тройка Пентаклей, знай: ты на правильном пути! Всё, что ты сейчас делаешь &mdash; важно, нужно и продвигает тебя вперёд. Это карта усердной работы, командной синергии и вдохновения через действие.</span></p>
<p><strong>Значение карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты строишь свое будущее.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Работа кипит! Проект или идея уже в процессе реализации &mdash; и всё идет по плану.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Результат не заставит себя ждать &mdash; успех уже маячит на горизонте.</span></li>
</ul>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты не одна! Возможно, рядом есть люди, которые готовы помочь или уже делают это. Твоя задача &mdash; прислушиваться, делиться, учиться.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Если планируешь сотрудничество &mdash; зелёный свет! Это идеальный момент для объединения усилий.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><span style="font-weight: 400;">Совет карты:</span></p>
<p><span style="font-weight: 400;">Ты не просто работаешь &mdash; ты творишь! Даже если процесс утомительный или рутинный, не забывай: ты строишь основу для своей мечты. Относись к себе как к художнице, которая раскрашивает мир своей настойчивостью и талантом!</span></p>
<p><strong>Заключение:</strong></p>
<p><span style="font-weight: 400;">Тройка Пентаклей &mdash; это карта уверенного старта, плодотворного труда и больших перспектив. Ты мастерски закладываешь фундамент своего будущего, кирпичик за кирпичиком. Успех не за горами, ты просто молодец! Продолжай в том же духе &mdash; и вся Вселенная будет аплодировать тебе стоя! </span></p>`, 
                reversed: `<p><span style="font-weight: 400;">Когда Тройка Пентаклей выпадает в перевернутом положении, это значит: ты будто топчешься на месте. И вроде бы цель есть, и вроде бы даже ресурсы какие-то под рукой&hellip; но прогресса нет. Почему? Потому что что-то мешает &mdash; и это &laquo;что-то</span><span style="font-weight: 400;">&raquo;</span><span style="font-weight: 400;"> чаще всего внутри тебя.</span></p>
<p><strong>Значения карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Недостаток навыков или знаний. Возможно, ты переоценила свои силы или недооценила масштаб задачи. Вполне вероятно, что время поучиться, добрать опыта, или просто остановиться и переосмыслить стратегию.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Лень, апатия, прокрастинация. Вместо того, чтобы делать &mdash; хочется лежать. Или, наоборот, ты &laquo;занята&raquo;, но совсем не тем, что приближает к цели. Перевернутая Тройка шепчет: &laquo;Ты в курсе, что твой успех сам себя не создаст?&raquo;.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Изоляция и работа в одиночку. Ты либо игнорируешь помощь, либо не можешь наладить диалог с командой. Если сейчас всё &laquo;тащишь на себе&laquo; и результат не радует &mdash; самое время делегировать или пересмотреть тактику.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><strong>Совет карты:&nbsp;</strong></p>
<p><span style="font-weight: 400;">Это не провал &mdash; это сигнал. Тебе просто нужно взять паузу, проанализировать, чего именно не хватает: знаний, мотивации, плана или поддержки. Ты всё ещё можешь выровнять траекторию &mdash; но для этого нужно перестать играть в самозванку и начать действовать честно перед собой.&nbsp;</span></p>`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Тройка Пентаклей шепчет тебе: </span><span style="font-weight: 400;">&laquo;</span><span style="font-weight: 400;">Ты на правильном пути &mdash; продолжай творить! Успех приходит к тем, кто готов строить свою мечту по кирпичику</span><span style="font-weight: 400;">&raquo;</span><span style="font-weight: 400;">.</span><span style="font-weight: 400;"><br /><br /></span></p>
<p><span style="font-weight: 400;">Этот год про совместную работу, признание заслуг и реализацию проектов, о которых ты давно мечтала.</span></p>
<p><strong>Что несет эта карта?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Год идеален для командных проектов, творческих союзов, учебы и повышения квалификации. Всё, что ты вложишь в работу сейчас, даст щедрые плоды в будущем.</span></li>
</ul>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Жди бонусов, премий или даже повышения! Важно сохранять терпение &mdash; богатство приходит постепенно, шаг за шагом.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Если ты в отношениях, вас ждет этап развития: совместные проекты, планы на будущее, укрепление союза. Важно уважать мнение партнера и уметь договариваться.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Если ты свободна,</span> <span style="font-weight: 400;">готовься встретить человека, с которым можно будет строить что-то настоящее: не только романтику, но и общее дело, общую мечту. </span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><strong>Советы карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Будь открыта для сотрудничества. Великие вещи редко строятся в одиночку! Обменивайся идеями и опытом &mdash; вместе вы взлетите выше.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ищи отношения, где оба вкладываются в будущее. Это не про страсть одного дня, а про тёплый дом, построенный из доверия и уважения.&nbsp;</span></li>
</ul>
<p><span style="font-weight: 400;">Ты ощутишь, каково это &mdash; быть важной частью чего-то большего.</span></p>`,
            },
            "ex": {
                normal: `<p><strong>Тройка Пентаклей</strong><span style="font-weight: 400;"> &mdash; это карта про человека, который умеет только создавать видимость деятельности.&nbsp;</span></p>
<p><strong>Что ждёт его в будущем?&nbsp;</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Сейчас он в состоянии позднего осознания, что отношения &mdash; это не просто быть рядом, а работать над вместе. Он понял, что ты не просила невозможного. Ты просто хотела партнёрства. Не делать всё за него, а делать вместе.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Скорее всего, он начнёт пытаться встраиваться куда-то: в новые отношения, в работу, в проекты&hellip; Потому что наконец понял: быть рядом &mdash; мало. Надо быть в деле.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты &mdash; мастер-партнёр. Ты не просто любила &mdash; ты строила. Он теперь будет искать кого-то вроде тебя: умную, включенную, с амбициями.&nbsp;</span></li>
</ul>
<p><strong>Совет карты: </strong><span style="font-weight: 400;">ты &mdash; не подрядчик по ремонту отношений. Ты &mdash; архитектор своего счастья. И если рядом кто-то не готов брать в руки инструменты любви, доверия и поддержки &mdash; пусть уходит со стройплощадки. А он? Он теперь будет вспоминать не только тебя, а всю ту жизнь, которую вы могли бы построить &mdash; если бы он хоть раз взял в руки ответственность.</span></p>`
            }
        }
    },
    "two-of-pentacles": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Когда в раскладе появляется Двойка Пентаклей, Вселенная будто говорит:</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;"> &laquo;Ты умничка! Продолжаешь лавировать в бешеном ритме жизни &mdash; и у тебя это получается&raquo;. Это карта многозадачности, гибкости и&hellip; чуть-чуть циркового жонглирования</span><span style="font-weight: 400;">&raquo;. </span><span style="font-weight: 400;">&nbsp;</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Работа, финансы, жизнь. Ты отлично справляешься с несколькими делами сразу. Успеваешь быть и деловой женщиной, и душой компании.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Отношения и настроение. Всё под контролем, хоть и есть ощущение, что баланс хрупкий. Ты не зависаешь в драмах, умеешь вовремя уйти в &laquo;дзен&raquo; и переключиться на то, что действительно важно.</span></li>
</ul>
<p><strong>Совет карты</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Продолжай двигаться в своём ритме &mdash; ты на верном пути.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не стесняйся попросить помощи, если почувствуешь, что &laquo;жонглируешь&raquo; уже слишком многим.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Береги свою энергию: достигать целей &mdash; супер, но не в ущерб себе.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><strong>Заключение:</strong></p>
<p><span style="font-weight: 400;">Двойка Пентаклей &mdash; это ты в своей лучшей многозадачной форме. Ты управляешь потоками &mdash; деньгами, делами, эмоциями &mdash; как настоящая волшебница продуктивности. Главное &mdash; не забывай, что успех &mdash; это не только про работу, но и про то, чтобы жить в кайф.&nbsp;</span></p>`, 
                reversed: `<p><span style="font-weight: 400;">Когда эта карта переворачивается в раскладе, она шепчет (или орёт) тебе:&nbsp; &laquo;Милая, ты слишком многое взвалила на себя &mdash; и всё летит куда-то в тартарары&raquo;. Баланс нарушен, жонглирование не удалось, и сейчас всё требует срочной перезагрузки.</span></p>
<p><strong>Что происходит?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ты перегружена, причем эмоционально, физически и, возможно, финансово. Как будто одновременно и работа, и быт, и отношения &mdash; всё просит внимания, а сил всё меньше.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Финансы могут нестабильно себя вести. Или ты просто не можешь сосредоточиться, чтобы четко спланировать свои ресурсы. Траты идут, а контроль &mdash; улетает в космос.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Хаос в голове &rarr; хаос в жизни. Начинается эффект снежного кома: неудачи накапливаются, и ты теряешь энергию на борьбу с тем, что раньше давалось легко.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><strong>Совет карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Сделай паузу. Выбери хотя бы одну сферу, которую сможешь привести в порядок прямо сейчас.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Делегируй, попроси помощи, не будь супергероиней 24/7.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Проверь финансы: нет ли утечек, ненужных подписок, импульсивных трат?</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Приведи мысли в порядок &mdash; можно даже пореветь, если накопилось (это тоже перезагрузка).</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><strong>Заключение:</strong></p>
<p><span style="font-weight: 400;">Двойка Пентаклей в перевёрнутом положении &mdash; не катастрофа, а SOS-сигнал. Тебе просто нужно снова настроить свою внутреннюю систему: восстановить равновесие, сделать вдох-выдох и перестроить график, цели и приоритеты. Ты сильная, ты справишься. Просто сейчас &mdash; нужно чуть больше заботы о себе.&nbsp;</span></p>`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Двойка Пентаклей шепчет: </span><span style="font-weight: 400;">&laquo;</span><span style="font-weight: 400;">Жизнь &mdash; это не экзамен, а танец! Будь гибкой, легкой и не бойся перемен</span><span style="font-weight: 400;">&raquo;.&nbsp;</span></p>
<p><span style="font-weight: 400;">Этот год про баланс, игру на нескольких фронтах и мастерство лёгкости даже тогда, когда весь мир вокруг кажется хаотичным.</span></p>
<p><strong>Что несет эта карта?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Тебе предстоит научиться жонглировать несколькими задачами одновременно &mdash; и ты с этим справишься, как звезда цирка! </span><span style="font-weight: 400;"><br /><br /></span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Год подкинет возможности для развития в нескольких сферах сразу. Секрет успеха &mdash; расставить приоритеты и двигаться гибко.</span></li>
</ul>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Если ты в отношениях, год научит вас вместе преодолевать сложности, сохраняя игру, легкость и юмор.</span></li>
</ul>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Если ты свободна, в этот период ты можешь одновременно общаться с несколькими интересными людьми. Карта подсказывает: не торопись выбирать. Пусть сердце подскажет, кто достоин быть рядом.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><strong>Советы карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не стремись схватить всё и сразу. Легкость в управлении ресурсами и спокойное отношение к переменам приведут тебя к победе.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не перегружай отношения ожиданиями. Дай им течь естественно &mdash; и увидишь, как счастье придет само!</span></li>
</ul>`,
            },
            "ex": {
                normal: `<p><strong>Двойка Пентаклей</strong><span style="font-weight: 400;"> &mdash; это про человека, который пытался совмещать несовместимое. Он как фокусник, у которого все шары на полу, а он всё равно стоит и делает вид, что всё под контролем. Он пытался быть и классным парнем, и карьеристом, и свободным духом, и ответственным мужчиной &mdash; и в итоге получился уставший, запутавшийся и с ощущением полного провала.&nbsp;</span></p>
<p><strong>Что его ждёт в будущем?&nbsp;</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он будет пытаться держать баланс дальше. Падать, вставать и снова падать.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Возможно, он начнет сожалеть, что потерял тебя. Попробует вернуться. Однако, в ваших отношениях ничего не изменится в лучшую сторону.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Стабильность в его жизни появится очень нескоро.&nbsp;</span></li>
</ul>
<p><strong>Совет карты:</strong><span style="font-weight: 400;"> ты &mdash; не шарик для жонглирования. Ты &mdash; якорь. Опора. Партнер. Ты заслуживаешь быть с тем, кто держит тебя нежно и с уважением. Потому что с такой, как ты, не играют. Тебя выбирают.</span></p>`
            }
        }
    },
    "ace-of-pentacles": {
        "singleCard": {
            "answer": {
                normal: `<p><span style="font-weight: 400;">Если бы фортуна была феей, то она влетела бы сейчас в твой расклад с блестящим мешочком и сказала: &laquo;Поздравляю, ты на пороге крупного благословения!&raquo; Туз Пентаклей &mdash; это когда судьба достаёт свою золотую карту и говорит: &laquo;Ваша заявка на изобилие одобрена!&raquo;</span></p>
<p><strong>Что несет эта карта?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Финансовая удача. Это может быть новая работа, выгодная сделка, неожиданные деньги, премия или щедрый подарок. Иногда &mdash; даже наследство от троюродной бабушки, о которой ты и не знала!</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Материальное воплощение мечт. Хотела уютное гнёздышко, свою кофейню, курс обучения или новую сумку? Теперь у тебя есть шанс получить это всё &mdash; но не только мечтать, а ДЕЙСТВОВАТЬ.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Фундамент на будущее. Это инвестиции, стабильность, первые кирпичики большого дела или проекта. Ты не просто ловишь монетку на удачу &mdash; ты строишь замок с золотым фундаментом.</span></li>
</ul>
<p><strong>Совет карты:</strong></p>
<p><span style="font-weight: 400;">Не упусти шанс! Это не просто везение &mdash; это входной билет в новую реальность. Ты должна распознать возможность и ухватиться за неё обеими руками. Не бойся инвестировать в себя, учиться, рисковать обдуманно.</span></p>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">P.S. Удача любит решительных.&nbsp;</span></p>`, 
                reversed: `<p><span style="font-weight: 400;">Ох&hellip; если бы удача могла ускользнуть сквозь пальцы &mdash; это было бы именно то, о чём говорит перевернутый Туз Пентаклей. Всё выглядело так многообещающе: проект, идея, отношения, сделка...Но &mdash; упс! &mdash; или звезды не так легли, или кто-то сильно переоценил свои ресурсы.</span></p>
<p><span style="font-weight: 400;">Что несёт карта?</span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Финансовые потери. Деньги могли быть потрачены не туда, вложения &mdash; без отдачи, или ты просто &laquo;не почувствовала момент&raquo;.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Упущенные возможности. Бывает, шанс был прямо под носом, но ты засомневалась, замешкалась &mdash; и он прошёл мимо.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Жадность и злоупотребление. Перевернутый Туз &mdash; это когда человек заигрался в &laquo;всё моё&raquo; и упустил нечто важное: отношения, репутацию, душевное равновесие.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Потеря стабильности. Могут быть задержки зарплаты, неудачные сделки, споры из-за денег или даже ощущение, что &laquo;почва уходит из-под ног&raquo;.</span><span style="font-weight: 400;"><br /><br /></span></li>
</ul>
<p><span style="font-weight: 400;">Совет карты</span></p>
<p><span style="font-weight: 400;">Снимай розовые очки иллюзий, надевай бейсболку практичности и вперёд &mdash; выстраивать новую стратегию. У тебя осталась главная валюта: опыт и воля.</span></p>
<p><span style="font-weight: 400;">Иногда дорога к большому успеху начинается с фиаско. Главное &mdash; не потерять себя, даже если временно потерял доход. Ты все еще королева &mdash; просто на переучете.</span></p>`
            },
            "year": {
                normal: `<p><span style="font-weight: 400;">Туз Пентаклей шепчет: </span><span style="font-weight: 400;">&laquo;</span><span style="font-weight: 400;">Ты достойна всего самого лучшего! Держи крепче свой шанс &mdash; он может изменить всю твою жизнь</span><span style="font-weight: 400;">&raquo;</span><span style="font-weight: 400;">.</span> <span style="font-weight: 400;">Этот год &mdash; словно драгоценный подарок от судьбы. Но важно: не просто получить его, а грамотно распорядиться!</span></p>
<p><strong>Что несет эта карта?</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Появится шанс проявить себя в новом деле или укрепить свои позиции. Возможны повышение, новая должность, прибыльный проект или стабильный источник дохода.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Если ты в отношениях, появится шанс укрепить ваш союз: начать жить вместе, создать семью, сделать важный совместный шаг.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Если ты свободна, жди встречи с человеком, который станет для тебя &laquo;домом</span><span style="font-weight: 400;">&raquo;</span><span style="font-weight: 400;"> &mdash; надёжным, тёплым, родным.</span></li>
</ul>
<p><strong>Советы карты:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Не упусти момент! Туз Пентаклей приходит нечасто, а его энергия любит решительных. Увидела шанс &mdash; хватай и используй!&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ориентируйся на стабильность. Сияющая, но пустая оболочка &mdash; не твой вариант в этом году.</span></li>
</ul>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Перестань бояться успеха &mdash; ты его заслуживаешь!</span></li>
</ul>
<p><span style="font-weight: 400;">Ты почувствуешь уверенность в завтрашнем дне и начнешь проявлять свои таланты с новой силой.</span></p>`,
            },
            "ex": {
                normal: `<p><strong>Туз Пентаклей</strong><span style="font-weight: 400;"> &mdash; это карта человека, который упустил большие возможности.&nbsp;</span></p>
<h3><strong>Что его ждёт в будущем?&nbsp;</strong></h3>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он осознает, что упустил не просто отношения, а целую жизнь, с любовью, ростом и надёжностью. Как инвестор, который который не вложился в Apple в 90-х и теперь плачет.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он может попробовать вернуться. Туз &mdash; карта вдруг озарило, и да, может прийти с раскаянием. Но будет слишком поздно.&nbsp;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Он будет строить свою жизнь дальше. Может даже добьётся чего-то внешне. Но внутри будет сидеть </span><em><span style="font-weight: 400;">одно большое если бы&hellip;</span></em></li>
</ul>
<p><strong>Совет карты:</strong><span style="font-weight: 400;"> ты &mdash; не просто возможность. Ты &mdash; потенциал. Но только для того, кто умеет его принять, понять и беречь его. Ты ушла, он &mdash; остался смотреть на пустые ладони.</span></p>`
            }
        }
    },
};

// Расклады
const spreads = {
    singleCard: [
        {
            type: "singleCard",
            positions: ["Ответ на вопрос по одной карте"],
            description: "Эта карта даст прямой ответ на ваш вопрос."
        },
        {
            type: "singleCard",
            positions: ["Прогноз года по одной карте"],
            description: "Эта карта покажет основную тенденцию предстоящего года."
        },
        {
            type: "singleCard",
            positions: ["Будущее бывшего по одной карте"],
            description: "Эта карта покажет, что ждет вашего бывшего."
        }
    ],
    threeCard: [
        {
            type: "threeCard",
            positions: ["Ваше прошлое", "Ваше настоящее", "Ваше будущее"],
            description: "Этот расклад покажет ваш путь во времени. Первая карта расскажет о прошлом и о том, как оно влияет на текущую ситуацию. Вторая карта отразит настоящий момент и ваше текущее состояние. Третья карта приоткроет завесу будущего и подскажет, к чему приведут ваши действия.",
            generalReading: "Посмотрите, как карты связаны между собой. Если в раскладе преобладают позитивные карты, это говорит о благоприятном развитии ситуации. Обратите особое внимание на карту будущего — она подскажет, какие энергии будут преобладать в грядущем периоде. Если карта перевернута, это не обязательно плохо — возможно, она указывает на необходимость пересмотреть свой подход или извлечь урок из прошлого опыта."
        },
        {
            type: "threeCard",
            positions: ["Текущая ситуация", "Препятствия", "Совет"],
            description: "Расклад на карьеру поможет разобраться в профессиональной ситуации. Первая карта покажет текущее положение дел на работе. Вторая карта укажет на препятствия и сложности, которые мешают достижению целей. Третья карта даст совет, как действовать дальше.",
            generalReading: "Этот расклад особенно полезен, когда вы находитесь на профессиональном перепутье или размышляете о смене работы. Обратите внимание на взаимосвязь между картами: часто препятствия, показанные второй картой, можно преодолеть, следуя совету третьей карты. Если в раскладе появляются карты Старших Арканов, значит ситуация имеет важное значение для вашего профессионального роста."
        }
    ],
    fiveCard: [
        {
            type: "fiveCard",
            positions: ["Вы", "Партнер", "Отношения", "Препятствия", "Перспективы"],
            description: "Глубокий расклад на отношения, который поможет понять все аспекты вашей любовной ситуации. Первая карта отражает ваше состояние и отношение к ситуации. Вторая карта показывает позицию и чувства партнера. Третья карта описывает суть ваших отношений на данный момент. Четвертая карта указывает на препятствия и сложности. Пятая карта раскрывает перспективы развития отношений.",
            generalReading: "В этом раскладе важно обратить внимание на то, как карты взаимодействуют между собой. Особенно показательно сравнение первых двух карт (вы и партнер) с третьей картой (отношения) — это покажет, насколько ваши энергии совместимы. Препятствия, показанные четвертой картой, часто можно преодолеть, если оба партнера готовы работать над отношениями. Пятая карта не только показывает будущее, но и подсказывает, какие действия помогут прийти к желаемому результату."
        }
    ]
};

// Функции для работы с картами
function createFullDeck() {
    const allCards = [];

    // Добавляем ТОЛЬКО прямые карты в колоду
    Object.values(fullCardData).forEach(suit => {
        suit.forEach(card => {
            allCards.push({
                id: card.id,
                name: card.name, // Имя без "(перевернутая)"
                image: card.image,
                reversed: false, // Всегда false для базовой колоды
                position: "Общий совет" // Это поле можно убрать, т.к. оно устанавливается в раскладе
            });
        });
    });
    return { cards: allCards };
}

function getCardDescription(cardId, isReversed, spreadType, spreadSubtype) {
    if (!cardDescriptions[cardId]) {
        return "Описание для этой карты пока не добавлено";
    }

    // Получаем описание для конкретного типа расклада
    const spreadDescriptions = cardDescriptions[cardId][spreadType];
    if (!spreadDescriptions) {
        return "Описание для этого типа расклада пока не добавлено";
    }

    // Получаем описание для конкретного подтипа расклада
    const subtypeDescription = spreadDescriptions[spreadSubtype];
    if (!subtypeDescription) {
        return "Описание для этого подтипа расклада пока не добавлено";
    }

    return isReversed ? subtypeDescription.reversed : subtypeDescription.normal;
}

function getRandomSpread(type) {
    if (!spreads[type]) {
        return null;
    }
    const availableSpreads = spreads[type];
    const randomIndex = Math.floor(Math.random() * availableSpreads.length);
    return availableSpreads[randomIndex];
}

function getCardDescription(cardId, isReversed, spreadType, spreadSubtype) {
    console.log("getCardDescription: cardId:", cardId, "isReversed:", isReversed, "spreadType:", spreadType, "spreadSubtype:", spreadSubtype);

    if (!cardDescriptions[cardId]) {
        console.warn("getCardDescription: Описание для ID карты не найдено:", cardId);
        return "Описание для этой карты пока не добавлено";
    }

    const spreadDescriptions = cardDescriptions[cardId][spreadType];
    if (!spreadDescriptions) {
        console.warn("getCardDescription: Описание для типа расклада не найдено:", spreadType);
        return "Описание для этого типа расклада пока не добавлено";
    }
    console.log("getCardDescription: spreadDescriptions найдено.");


    const subtypeDescription = spreadDescriptions[spreadSubtype];
    if (!subtypeDescription) {
        console.warn("getCardDescription: Описание для подтипа расклада не найдено (spreadSubtype):", spreadSubtype, "для cardId:", cardId);
        // Если описание для подтипа 'ex' не найдено, ваша логика может возвращаться к 'answer' или чему-то еще.
        // Именно здесь мы, вероятно, и находим проблему.
        // В вашем случае, если 'ex' не найден, а 'answer' есть, может быть автоматический fallback.
        return "Описание для этого подтипа расклада пока не добавлено"; // или что у вас по умолчанию
    }
    console.log("getCardDescription: subtypeDescription найдено.");


    return isReversed ? subtypeDescription.reversed : subtypeDescription.normal;
}
try {
        // ... (получение currentSpread и currentCards)

        // Определяем подтип расклада на основе заголовка
        let spreadSubtype = 'answer'; // значение по умолчанию
        console.log("До проверки: currentTitle:", currentTitle, "spreadSubtype (по умолчанию):", spreadSubtype); // NEW
        if (currentTitle.includes('год')) {
            spreadSubtype = 'year';
            console.log("Условие 'год' сработало. spreadSubtype:", spreadSubtype); // NEW
        } else if (currentTitle.includes('бывший')) {
            spreadSubtype = 'ex';
            console.log("Условие 'бывший' сработало. spreadSubtype:", spreadSubtype); // NEW
        } else {
            console.log("Ни одно из условий 'год' или 'бывший' не сработало. spreadSubtype остается:", spreadSubtype); // NEW
        }
        console.log("Итоговый spreadSubtype перед вызовом getCardDescription:", spreadSubtype); // NEW

        // Деактивируем все экраны
        // ... остальной код selectCards

        // ... внутри currentCards.forEach
        // Вызов getCardDescription:
        const cardDescription = getCardDescription(card.id, card.reversed, currentType, spreadSubtype);
        console.log("Card ID:", card.id, "isReversed:", card.reversed, "spreadType:", currentType, "spreadSubtype:", spreadSubtype); // Уже добавлено
        console.log("Полученное описание карты:", cardDescription); // Уже добавлено
        // ...
    } catch (error) {
        // ...
    }


function getRandomCardsForSpread(spread, cards) {
    if (!spread || !cards || !spread.positions || !Array.isArray(cards)) {
        return null;
    }

    // ИЗМЕНЕНИЕ ЗДЕСЬ: Убедитесь, что строка совпадает с вашей strings.positions[0]
    const isYearReading = spread.positions[0] === "Прогноз года по одной карте"; // <-- ЭТО КЛЮЧЕВОЕ ИЗМЕНЕНИЕ!
    const isFutureOfExReading = spread.positions[0] === "Будущее бывшего по одной карте"; // <-- НОВОЕ УСЛОВИЕ

    const isSingleCard = spread.type === "singleCard";

    const shuffledCards = [...cards].sort(() => Math.random() - 0.5);
    const selectedCards = shuffledCards.slice(0, spread.positions.length);

    return selectedCards.map((card, index) => {
        let actualIsReversed = false;
        let actualCardName = card.name;

        if (isYearReading || isFutureOfExReading) { // <-- ИЗМЕНЕНО: теперь включает и "Будущее бывшего"
            // Для этих раскладов карта всегда прямая, имя чистое
            actualIsReversed = false;
            actualCardName = card.name;
        } else if (isSingleCard) {
            // Для других одиночных раскладов - случайное положение
            actualIsReversed = Math.random() < 0.5;
            actualCardName = actualIsReversed ? `${card.name} (перевернутая)` : card.name;
        } else {
            // Для многокарточных раскладов - случайное положение
            actualIsReversed = Math.random() < 0.5;
            actualCardName = actualIsReversed ? `${card.name} (перевернутая)` : card.name;
        }

        return {
            id: card.id,
            name: actualCardName,
            image: card.image,
            reversed: actualIsReversed,
            position: spread.positions[index]
        };
    });
}

// Создаем полную колоду
const fullDeck = createFullDeck(); 