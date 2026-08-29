window.lessonScenes = [



{
    type: "Basic Sentences Summary",

    title: "Japanese Course",
    subtitle: "Pronouns, Prefixes and Suffixes",

    intro: `
        <p>
            Japanese <span class="hl-noun">pronouns</span> work quite differently from English. <br>They are often omitted when they can be understood from context, and there are many different ways to refer to yourself or to others depending on the situation.

            We will also learn about <span class="hl-affix">prefix</span> and <span class="hl-affix">suffix</span> that can be attached to <span class="hl-noun">nouns</span>, or <span class="hl-noun">pronouns</span>. 
        </p>
    `,

    items: [
        {
            class: "hl-noun",
            text: "Interrogative Pronoun: 何 (なに / なん)"
        },
        {
            class: "hl-noun",
            text: "The Logical Ko-So-A-Do System (こ・そ・あ・ど)"
        },
        {
            class: "hl-noun",
            text: "First-Person: Self-Referrals (一人称)"
        },
        {
            class: "hl-noun",
            text: "Second-Person: Addressing Others (二人称)"
        },
        {
            class: "hl-noun",
            text: "Third-Person & Plurals (三人称・複数)"
        },
        {
            class: "hl-affix",
            text: "Honorific Prefixes (接頭辞) & Suffixes (接尾辞)"
        }
    ]
},

{
    type: "Basic Sentences",

    title: "Interrogative Pronoun",
    subtitle: "疑問代名詞",

    color: "hl-noun",

    exampleJP: "何",
    exampleEN: "What",

    facts: [
        "<strong>Two functions:</strong> Can be used both as a question: <strong>What is ...</strong> or an exclamation: <strong>What !</strong></span>",
        "<strong>Two readings:</strong> The kanji <strong>何</strong> can be read as either <strong>なに (Nani)</strong> or <strong>なん (Nan)</strong>.</span>",
        "<strong>Pattern:</strong> Many question words begin with <strong>ど (Do)</strong>, such as <strong>どこ (Where)</strong>, <strong>どれ (Which)</strong>, and <strong>どんな (What kind of)</strong>.</span>",
    ]
},



{ type: "Vocabulary", morph: "何", type1: "Pronouns", type2: "", frequency: "27", definition: "なに【何】 <br>what?", exampleJP: "何ー！", exampleEN: "What!??!", image: "../Files/Anki/Anime-SlamDunk1_01_0.04.42.855.jpg", audio: "../Files/Anki/Anime-SlamDunk1_01_0.04.42.240-0.04.43.470.mp3" },
{ type: "Vocabulary", morph: "誰", type1: "Pronouns", type2: "", frequency: "103", definition: "だれ 【誰】<br>who", exampleJP: "誰？", exampleEN: "Who's this?", image: "../Files/Anki/A-Arrietty_1_0.48.56.215.jpg", audio: "../Files/Anki/A-Arrietty_1_0.48.55.545-0.48.56.885.mp3" },


          

{
    type: "custom",

    html: `
<div class="centered-header-group">
    <h2 class="hl-noun">The Ko-So-A-Do System</h2>
    <div class="subheader hl-noun">
        こ・そ・あ・ど • Demonstrative Pronouns
    </div>
</div>

<div style="display:flex;justify-content:center;margin-bottom:35px;">
    <div class="example-card" style="min-width:900px;padding:20px 40px;">

        <div class="kosado-grid">

            <div class="kosado-box" style="border-color:var(--color-noun);">
                <h4 class="hl-noun">こ (Ko)</h4>
                <p>Near Speaker</p>
                <p style="color:#fff;">ここ (Here)</p>
                <p style="color:#fff;">これ (This one)</p>
            </div>

            <div class="kosado-box" style="border-color:var(--color-noun);">
                <h4 class="hl-noun">そ (So)</h4>
                <p>Near Listener</p>
                <p style="color:#fff;">そこ (There)</p>
                <p style="color:#fff;">それ (That one)</p>
            </div>

            <div class="kosado-box" style="border-color:var(--color-noun);">
                <h4 class="hl-noun">あ (A)</h4>
                <p>Far from Both</p>
                <p style="color:#fff;">あそこ (Over there)</p>
                <p style="color:#fff;">あれ (That over there)</p>
            </div>

            <div class="kosado-box" style="border-color:var(--color-noun);">
                <h4 class="hl-noun">ど (Do)</h4>
                <p>Question</p>
                <p style="color:#fff;">どこ (Where?)</p>
                <p style="color:#fff;">どれ (Which one?)</p>
            </div>

        </div>

    </div>
</div>

<ul class="fact-list">
    <li class="k-fact">
        <span><strong>Ko-So-A-Do</strong> is one of the most important patterns in Japanese.</span>
    </li>

    <li class="k-fact">
        <span>The first syllable tells you where something is relative to the speaker and listener.</span>
    </li>

    <li class="k-fact">
        <span>The same pattern is reused for places (ここ), objects (これ), directions (こちら), manners (こんな), and many other words.</span>
    </li>
</ul>
`
},

{ type: "Vocabulary", morph: "ここ", type1: "Pronouns", type2: "", frequency: "71", definition: "ここ 【茲】<br>here (place physically close to the speaker, place pointed by the speaker while explaining), this place", exampleJP: "ここだ", exampleEN: "In here.", image: "../Files/Anki/A_TheWindRises_1_0.32.56.375.jpg", audio: "../Files/Anki/A_TheWindRises_1_0.32.55.960-0.32.56.790.mp3" },
{ type: "Vocabulary", morph: "そこ", type1: "Pronouns", type2: "", frequency: "166", definition: "そこ【其処】 <br>there (place relatively near listener)", exampleJP: "そこ！", exampleEN: "There!", image: "../Files/Anki/A_Spy_x_Family_S01_E01_1_0.11.30.815.jpg", audio: "../Files/Anki/A_Spy_x_Family_S01_E01_1_0.11.30.340-0.11.31.290.mp3" },
{ type: "Vocabulary", morph: "あそこ", type1: "Pronouns", type2: "", frequency: "630", definition: "あそこ 【彼処】<br>there (place physically distant from both speaker and listener), over there, that place, yonder", exampleJP: "あそこだ", exampleEN: "Over there.", image: "../Files/Anki/A_MadeInAbyss03_1_0.07.04.625.jpg", audio: "../Files/Anki/A_MadeInAbyss03_1_0.07.04.310-0.07.04.940.mp3" },
{ type: "Vocabulary", morph: "どこ", type1: "Pronouns", type2: "", frequency: "116", definition: "どこ 【何処】<br>where, what place", exampleJP: "ここ どこ", exampleEN: "Where am I?", image: "../Files/Anki/A_GinNoSaji_S01E1_1_0.03.22.865.jpg", audio: "../Files/Anki/A_GinNoSaji_S01E1_1_0.03.21.820-0.03.23.910.mp3" },
{ type: "Vocabulary", morph: "これ", type1: "Pronouns", type2: "", frequency: "45", definition: "これ【此れ】 <br>this (indicating an item near the speaker, the action of the speaker, or the current topic)", exampleJP: "これ…", exampleEN: "This one?", image: "../Files/Anki/A-LittleWitchAcademia02_1_0.19.41.581.jpg", audio: "../Files/Anki/A-LittleWitchAcademia02_1_0.19.41.097-0.19.42.064.mp3" },
{ type: "Vocabulary", morph: "それ", type1: "Pronouns", type2: "", frequency: "36", definition: "それ【其れ】 <br>that (indicating an item or person near the listener, the action of the listener, or something on their mind), it", exampleJP: "何それ!?", exampleEN: "WHAT!?", image: "../Files/Anki/A_CardCaptorSakura24_32_0.04.36.024.jpg", audio: "../Files/Anki/A_CardCaptorSakura24_32_0.04.35.544-0.04.36.504.mp3" },
{ type: "Vocabulary", morph: "あれ", type1: "Pronouns", type2: "", frequency: "112", definition: "あれ 【彼】<br>that (indicating something distant from both speaker and listener (in space, time or psychologically), or something understood without naming it directly)", exampleJP: "あれだ！", exampleEN: "There it is.", image: "../Files/Anki/Anime-SpiritedAway_1_1.37.50.066.jpg", audio: "../Files/Anki/Anime-SpiritedAway_1_1.37.49.400-1.37.50.731.mp3" },
{ type: "Vocabulary", morph: "どれ", type1: "Pronouns", type2: "", frequency: "734", definition: "どれ 【何れ】<br>which (of three or more)", exampleJP: "どれにする？", exampleEN: "Which one will you choose?", image: "../Files/Anki/A_Code_GeassS01_09_0.06.18.105.jpg", audio: "../Files/Anki/A_Code_GeassS01_09_0.06.17.700-0.06.18.510.mp3" },



{
    type: "Basic Sentences",

    title: "First-Person Pronouns",
    subtitle: "一人称",

    color: "hl-noun",

    exampleJP: "私 / わたし",
    exampleEN: "I / Me",

    facts: [
        "<strong>Many ways to say \"I\":</strong> Japanese chooses first-person pronouns based on politeness, personality, and gender.</span>",
        "<strong>私 (Watashi)</strong> is the default and safest choice. <strong>僕 (Boku)</strong> is softer and masculine, while <strong>俺 (Ore)</strong> is rough and very casual.</span>",
        "<strong>Women's speech:</strong> Forms like <strong>あたし</strong> or <strong>うち</strong> are common in casual conversation.</span>",
    ]
},

{ type: "Vocabulary", morph: "私", type1: "Pronouns", type2: "", frequency: "37", definition: "わたし【私】 <br>I, me", exampleJP: "私だ", exampleEN: "It’s me.", image: "../Files/Anki/A-Akira_1_0.21.24.845.jpg", audio: "../Files/Anki/A-Akira_1_0.21.24.430-0.21.25.260.mp3" },
{ type: "Vocabulary", morph: "俺", type1: "Pronouns", type2: "", frequency: "35", definition: "おれ 【俺】<br>I, me", exampleJP: "俺　相沢祐一", exampleEN: "I'm Aizawa Yuuichi!", image: "../Files/Anki/A_Kanon_E03_1_0.14.05.615.jpg", audio: "../Files/Anki/A_Kanon_E03_1_0.14.04.510-0.14.06.720.mp3" },
{ type: "Vocabulary", morph: "僕", type1: "Pronouns", type2: "", frequency: "86", definition: "ぼく 【僕】<br>I, me", exampleJP: "僕？", exampleEN: "Me?", image: "../Files/Anki/A_Code_GeassS01_15_0.07.02.805.jpg", audio: "../Files/Anki/A_Code_GeassS01_15_0.07.02.420-0.07.03.190.mp3" },



{
    type: "Basic Sentences",

    title: "Second-Person Pronouns",
    subtitle: "二人称",

    color: "hl-noun",

    exampleJP: "田中さん",
    exampleEN: "Tanaka-san",

    facts: [
        "<strong>Avoid \"you\":</strong> Japanese usually addresses people by their <strong>name + さん</strong> or title instead of using a second-person pronoun.</span>",
        "<strong>あなた</strong> is neutral but can feel distant. It's mainly used when you don't know someone's name, or by wives addressing their husbands.</span>",
        "<strong>君 (きみ)</strong> and <strong>お前 (おまえ)</strong> are casual masculine forms. <strong>君</strong> sounds softer, while <strong>お前</strong> is much rougher and should be used with care.</span>",         
    ]
},


{ type: "Vocabulary", morph: "お前", type1: "Pronouns", type2: "", frequency: "47", definition: "おまえ【お前】 <br>you (formerly honorific, now sometimes derog. term referring to an equal or inferior)", exampleJP: "お前", exampleEN: "You...", image: "../Files/Anki/A_HaikyuuS01_E08_1_0.06.05.969.jpg", audio: "../Files/Anki/A_HaikyuuS01_E08_1_0.06.05.531-0.06.06.407.mp3" },
{ type: "Vocabulary", morph: "あなた", type1: "Pronouns", type2: "", frequency: "101", definition: "あなた 【貴方】<br>you (referring to someone of equal or lower status)", exampleJP: "あなた", exampleEN: "You.", image: "../Files/Anki/A-NastumeSeason1_13_0.07.24.265.jpg", audio: "../Files/Anki/A-NastumeSeason1_13_0.07.24.010-0.07.24.520.mp3" },
{ type: "Vocabulary", morph: "君", type1: "Pronouns", type2: "", frequency: "125", definition: "きみ 【君】<br>you, buddy, pal", exampleJP: "君", exampleEN: "You there.", image: "../Files/Anki/A_DeathNote_20_0.01.46.945.jpg", audio: "../Files/Anki/A_DeathNote_20_0.01.46.520-0.01.47.370.mp3" },


{
    type: "Basic Sentences",

    title: "Third-Person & Plurals",
    subtitle: "三人称",

    color: "hl-noun",

    exampleJP: "彼 / 彼女",
    exampleEN: " He or Boyfriend / She or Girlfriend",

    facts: [
        "<strong>Double Meanings:</strong> <strong>彼</strong> means He/Boyfriend, while <strong>彼女</strong> means She/Girlfriend.</span>",
    ]
},

{ type: "Vocabulary", morph: "彼", type1: "Pronouns", type2: "", frequency: "235", definition: "", exampleJP: "それと　彼…", exampleEN: "That goes for him, too.", image: "../Files/Anki/A_KimetsunoYaiba__21_0.11.58.972.jpg", audio: "../Files/Anki/A_KimetsunoYaiba__21_0.11.58.325-0.11.59.618.mp3" },


{
    type: "Basic Sentences",

    title: "Suffixes",
    subtitle: "接尾辞",

    color: "hl-affix",

    exampleJP: "<span class='hl-noun'>田中</span><span class='hl-affix'>様</span>",
    exampleEN: "Tanaka-sama",

    facts: [
        "<strong>Formal Suffixes:</strong> <strong>さん (San)</strong> is the standard \"Mr. or Ms.\", while <strong>様 (Sama)</strong> is extremely formal.</span>",
        "<strong>Casual Suffixes:</strong> <strong>ちゃん (Chan)</strong> is cute (children/pets), and <strong>君 (Kun)</strong> is casual/male-focused.</span>",
        "<strong>〜たち:</strong> A common suffix meaning <em>\"group of\"</em> or <em>\"all of\"</em>, used with pronouns, names, and people (私たち, 山田さんたち, 先生たち).</span>",
    ]
},

{ type: "Vocabulary", morph: "さん", type1: "Suffixes", type2: "Noun-like suffix", frequency: "30", definition: "【さん】<br>Mr., Mrs., Miss, Ms., -san", exampleJP: "高木さんだ", exampleEN: "It's Takagi-san.", image: "../Files/Anki/A_TeasingMasterTakagi-san_06_0.19.05.248.jpg", audio: "../Files/Anki/A_TeasingMasterTakagi-san_06_0.19.04.643-0.19.05.853.mp3" },
{ type: "Vocabulary", morph: "ちゃん", type1: "Suffixes", type2: "Noun-like suffix", frequency: "57", definition: "【ちゃん】<br>suffix for familiar person", exampleJP: "知世ちゃん！", exampleEN: "Tomoyo-chan!", image: "../Files/Anki/A_CardCaptorSakura02_1_0.12.39.704.jpg", audio: "../Files/Anki/A_CardCaptorSakura02_1_0.12.39.078-0.12.40.330.mp3" },
{ type: "Vocabulary", morph: "君", type1: "Suffixes", type2: "Noun-like suffix", frequency: "84", definition: "くん【君】 <br>Mr (junior), master, boy", exampleJP: "鉄雄君！", exampleEN: "Tetsuo!", image: "../Files/Anki/A-Akira_1_0.26.06.915.jpg", audio: "../Files/Anki/A-Akira_1_0.26.06.290-0.26.07.540.mp3" },
{ type: "Vocabulary", morph: "様", type1: "Suffixes", type2: "Noun-like suffix", frequency: "83", definition: "さま【様】 <br>Mr., Mrs., Miss, Ms.", exampleJP: "(ハク)様！", exampleEN: "Master Haku!", image: "../Files/Anki/Anime-SpiritedAway_1_1.42.33.660.jpg", audio: "../Files/Anki/Anime-SpiritedAway_1_1.42.33.040-1.42.34.280.mp3" },
{ type: "Vocabulary", morph: "たち", type1: "Suffixes", type2: "Noun-like suffix", frequency: "52", definition: "たち 【質】<br>quality, nature (of person)", exampleJP: "俺たちだ", exampleEN: "That's us!", image: "../Files/Anki/Anime-SlamDunk2_20_0.19.47.110.jpg", audio: "../Files/Anki/Anime-SlamDunk2_20_0.19.46.680-0.19.47.540.mp3" },
{ type: "Vocabulary", morph: "ら", type1: "Suffixes", type2: "Noun-like suffix", frequency: "73", definition: "ら 【等】<br>pluralizing suffix", exampleJP: "お前ら...", exampleEN: "You guys...", image: "../Files/Anki/A_AttackonTitan2_24_0.03.25.870.jpg", audio: "../Files/Anki/A_AttackonTitan2_24_0.03.25.380-0.03.26.360.mp3" },

{
    type: "Basic Sentences",

    title: "Prefixes",
    subtitle: "接頭辞",

    color: "hl-affix",

    exampleJP: "お名前",
    exampleEN: "Name (Polite)",

    facts: [
        "<strong>Formal Suffixes:</strong> <strong>さん (San)</strong> is the standard \"Mr. or Ms.\", while <strong>様 (Sama)</strong> is extremely formal.</span>",
        "<strong>Casual Suffixes:</strong> <strong>ちゃん (Chan)</strong> is cute (children/pets), and <strong>君 (Kun)</strong> is casual/male-focused.</span>",
        "<strong>〜たち:</strong> A common suffix meaning <em>\"group of\"</em> or <em>\"all of\"</em>, used with pronouns, names, and people (私たち, 山田さんたち, 先生たち).</span>",
    ]
},



{ type: "Vocabulary", morph: "お", type1: "Prefix", type2: "", frequency: "28", definition: "お【御】 <br>honorific/polite/humble prefix", exampleJP: "あなた　お名前は？", exampleEN: "What's your name?", image: "../Files/Anki/A_MahoutsukainoYomeHMH_E03_1_0.16.35.055.jpg", audio: "../Files/Anki/A_MahoutsukainoYomeHMH_E03_1_0.16.33.760-0.16.36.350.mp3" },
{ type: "Vocabulary", morph: "ご", type1: "Prefix", type2: "", frequency: "157", definition: "ご【御】 <br>honorific/polite/humble prefix", exampleJP: "ご名答", exampleEN: "Yeah, that's right.", image: "../Files/Anki/A_CowboyBebop__01_0.14.07.799.jpg", audio: "../Files/Anki/A_CowboyBebop__01_0.14.07.277-0.14.08.320.mp3" },


];