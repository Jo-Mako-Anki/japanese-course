window.lessonScenes = [

{
    type: "custom",
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Japanese Course: Particles Summary</title>
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Noto+Sans+JP:wght@400;700&family=Bree+Serif&display=swap" rel="stylesheet">
    
    <style>
        /* All CSS scoped under .lesson-particles-root to prevent any style leakage or conflict */
        .lesson-particles-root {
            /* Scoped color variables */
            --lp-bg: #121212;
            --lp-slide-bg: #1e1e1e;
            --lp-text-main: #eaeaea;
            --lp-text-dim: #999999;
            --lp-border: #2d2d2d;
            
            --lp-color-word-order: #ffffff;
            --lp-color-case: #ffe082;
            --lp-color-topic: #90caf9;
            --lp-color-sentence-end: #b39ddb;

            margin: 0;
            padding: 4px 12px;
            width: 100%;
            height: 100vh;
            min-height: 100vh;
            background-color: var(--lp-bg);
            font-family: 'Inter', 'Noto Sans JP', sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
            overflow: hidden;
        }

        /* Pure CSS responsive container without JavaScript requirements */
        .lesson-particles-card {
            background-color: var(--lp-slide-bg);
            border: 1px solid var(--lp-border);
            border-radius: 16px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            padding: clamp(20px, 3vh, 44px) clamp(28px, 5vw, 64px);
            text-align: center;
            width: 100%;
            max-width: 1400px;
            height: calc(100vh - 12px);
            max-height: calc(100vh - 12px);
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .lesson-particles-h1 {
            font-size: clamp(32px, 4.2vw, 54px);
            color: #ffffff; 
            margin: 0 0 6px 0;
            font-family: 'Bree Serif', serif;
            line-height: 1.1;
        }

        .lesson-particles-subtitle {
            font-size: clamp(16px, 2vw, 22px);
            color: var(--lp-text-dim);
            margin: 0 0 16px 0;
        }

        .lesson-particles-divider {
            width: 80px;
            height: 2px;
            background: var(--lp-border);
            margin: 0 auto 20px auto;
            border-radius: 2px;
        }

        .lesson-particles-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: clamp(12px, 2vh, 24px) 48px;
            text-align: left;
        }

        .lesson-particles-section-title {
            font-size: clamp(17px, 2.1vw, 24px);
            font-weight: 700;
            margin: 0 0 8px 0;
            border-bottom: 1px solid var(--lp-border);
            padding-bottom: 6px;
            line-height: 1.25;
        }

        /* Scoped category title colors */
        .lesson-particles-title-word-order { color: var(--lp-color-word-order); }
        .lesson-particles-title-case { color: var(--lp-color-case); }
        .lesson-particles-title-topic { color: var(--lp-color-topic); }
        .lesson-particles-title-sentence-end { color: var(--lp-color-sentence-end); }

        .lesson-particles-list {
            list-style: none !important;
            list-style-type: none !important;
            padding: 0 !important;
            margin: 0 0 16px 0 !important;
        }

        .lesson-particles-list:last-child {
            margin-bottom: 0 !important;
        }

        .lesson-particles-item {
            list-style: none !important;
            list-style-type: none !important;
            font-size: clamp(14px, 1.65vw, 19px);
            font-weight: 600;
            color: var(--lp-text-main);
            margin-bottom: 6px;
            display: flex;
            align-items: center;
            line-height: 1.35;
        }

        .lesson-particles-bullet {
            display: inline-block;
            width: 18px;
            font-size: clamp(15px, 1.8vw, 22px);
            line-height: 1;
            margin-right: 8px;
            user-select: none;
            flex-shrink: 0;
        }

        /* Scoped bullet colors */
        .lesson-particles-bullet-word-order { color: var(--lp-color-word-order); }
        .lesson-particles-bullet-case { color: var(--lp-color-case); }
        .lesson-particles-bullet-topic { color: var(--lp-color-topic); }
        .lesson-particles-bullet-sentence-end { color: var(--lp-color-sentence-end); }
    </style>
</head>
<body>

    <div class="lesson-particles-root">
        <div class="lesson-particles-card">
            <h1 class="lesson-particles-h1">Japanese Course</h1>
            <p class="lesson-particles-subtitle">Particles & Structure Summary</p>
            <div class="lesson-particles-divider"></div>

            <div class="lesson-particles-grid">
                <!-- Left Column -->
                <div>
                    <h3 class="lesson-particles-section-title lesson-particles-title-word-order">1. Word Order</h3>
                    <ul class="lesson-particles-list">
                        <li class="lesson-particles-item"><span class="lesson-particles-bullet lesson-particles-bullet-word-order">•</span> English Structure (S-V-O)</li>
                        <li class="lesson-particles-item"><span class="lesson-particles-bullet lesson-particles-bullet-word-order">•</span> Japanese Structure (S-O-V)</li>
                    </ul>

                    <h3 class="lesson-particles-section-title lesson-particles-title-case">2. Case Marking Particles</h3>
                    <ul class="lesson-particles-list">
                        <li class="lesson-particles-item"><span class="lesson-particles-bullet lesson-particles-bullet-case">•</span> Subject Marker: が (Ga)</li>
                        <li class="lesson-particles-item"><span class="lesson-particles-bullet lesson-particles-bullet-case">•</span> Direct Object: を (Wo)</li>
                        <li class="lesson-particles-item"><span class="lesson-particles-bullet lesson-particles-bullet-case">•</span> Target & Time: に (Ni)</li>
                        <li class="lesson-particles-item"><span class="lesson-particles-bullet lesson-particles-bullet-case">•</span> Direction Marker: へ (He)</li>
                        <li class="lesson-particles-item"><span class="lesson-particles-bullet lesson-particles-bullet-case">•</span> Companion / With: と (To)</li>
                        <li class="lesson-particles-item"><span class="lesson-particles-bullet lesson-particles-bullet-case">•</span> Setting & Means: で (De)</li>
                    </ul>

                    <h3 class="lesson-particles-section-title lesson-particles-title-case">3. Parallel Markers</h3>
                    <ul class="lesson-particles-list">
                        <li class="lesson-particles-item"><span class="lesson-particles-bullet lesson-particles-bullet-case">•</span> Choice Option: か (Ka)</li>
                        <li class="lesson-particles-item"><span class="lesson-particles-bullet lesson-particles-bullet-case">•</span> Listing Systems: と (To) & や (Ya)</li>
                    </ul>
                </div>

                <!-- Right Column -->
                <div>
                    <h3 class="lesson-particles-section-title lesson-particles-title-case">4. Noun-Modifying Particle</h3>
                    <ul class="lesson-particles-list">
                        <li class="lesson-particles-item"><span class="lesson-particles-bullet lesson-particles-bullet-case">•</span> Possessive & Linker: の (No)</li>
                    </ul>

                    <h3 class="lesson-particles-section-title lesson-particles-title-topic">5. Binding Particles</h3>
                    <ul class="lesson-particles-list">
                        <li class="lesson-particles-item"><span class="lesson-particles-bullet lesson-particles-bullet-topic">•</span> Topic Marker: は (Wa)</li>
                        <li class="lesson-particles-item"><span class="lesson-particles-bullet lesson-particles-bullet-topic">•</span> Inclusion / Also: も (Mo)</li>
                    </ul>

                    <h3 class="lesson-particles-section-title lesson-particles-title-topic">6. Adverbial Particle</h3>
                    <ul class="lesson-particles-list">
                        <li class="lesson-particles-item"><span class="lesson-particles-bullet lesson-particles-bullet-topic">•</span> Limit / Only: だけ (Dake)</li>
                    </ul>

                    <h3 class="lesson-particles-section-title lesson-particles-title-sentence-end">7. Sentence-ending Particles</h3>
                    <ul class="lesson-particles-list">
                        <li class="lesson-particles-item"><span class="lesson-particles-bullet lesson-particles-bullet-sentence-end">•</span> Question Marker: か (Ka)</li>
                        <li class="lesson-particles-item"><span class="lesson-particles-bullet lesson-particles-bullet-sentence-end">•</span> Soft Question: の (No)</li>
                        <li class="lesson-particles-item"><span class="lesson-particles-bullet lesson-particles-bullet-sentence-end">•</span> Overview: Ending Particles (よ, ぞ, さ, な, ね...)</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

</body>
];
`
},


{
    type: "custom",
    html: `
    <style>
        :root {
            --bg: #121212;
            --slide-bg: #1e1e1e;
            --text-main: #eaeaea;
            --text-dim: #999999;
            --border: #2d2d2d;
            /* Color Themes */
            --color-word-order: #ffe082;    /* Warm Coral for Word Order */
            --color-case: #ffe082;          /* Soft Yellow for Case Particles */
            /* Custom syntax block color standards */
            --color-blue: #64b5f6;          /* Vivid Blue for Nouns */
            --color-green: #81c784;         /* Action Green for Verbs */
        }
        body, html {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            background-color: var(--bg);
            overflow: hidden; 
            font-family: 'Segoe UI', 'Inter', sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .viewport {
            width: 1920px;
            height: 1080px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(1);
            transform-origin: center center;
            flex-shrink: 0;
            background-color: var(--bg);
            overflow: hidden;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
        }
        .slide {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background-color: var(--bg);
            display: flex; 
            padding: 80px 100px 80px 100px;
            box-sizing: border-box;
            flex-direction: column;
            justify-content: center;
        }
        .anki-section {
            background-color: var(--slide-bg);
            border: 1px solid var(--border);
            border-radius: 24px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            padding: 40px 80px;
            text-align: center;
        }
        h1 {
            font-size: 86px;
            color: #ffffff; 
            margin: 0 0 5px 0;
            text-align: center;
            font-family: 'Bree Serif', serif;
        }
        .centered-header-group {
            text-align: center;
            margin-bottom: 30px;
        }
        .centered-header-group h2 {
            font-size: 64px;
            margin: 0;
            font-family: 'Bree Serif', serif;
            letter-spacing: 1px;
        }
        .centered-header-group .subheader {
            font-size: 32px;
            font-weight: 500;
            margin-top: 10px;
            font-family: 'Noto Sans JP', sans-serif;
        }
        .japanese-text {
            font-family: 'Noto Sans JP', sans-serif;
            font-weight: 700;
        }
        .typewriter-text {
            display: inline;
        }
        .reveal {
            opacity: 1;
            transform: none;
        }
        /* Highlight & Fact borders */
        .hl-word-order { color: var(--color-word-order) !important; }
.fact-list {
    width: 1200px;
    margin: 30px auto 0;
    padding: 0;
    list-style: none;
}
.k-fact {
    display: flex;
    align-items: baseline;
    font-size: 28px;
    line-height: 1.5;
    margin-bottom: 18px;
}
.k-fact::before {
    content: "•";
    color: var(--color-case);
    width: 30px;
    flex-shrink: 0;
    text-align: center;
    font-size: 1em;
}

.j-fact::before {
    content: "•";
    color: var(--color-case);
    width: 30px;
    flex-shrink: 0;
    text-align: center;
    font-size: 1em;
}

        /* Dynamic Visualizing Containers */
        .word-order-container {
            position: relative;
            width: 1200px;
            height: 140px;
            margin: 20px auto;
            border-radius: 16px;
            background: rgba(255,255,255,0.01);
            border: 1px dashed #333;
        }
        .word-block {
            position: absolute;
            top: 20px;
            height: 100px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-radius: 12px;
            font-weight: bold;
            font-size: 30px; 
            transition: all 0.8s cubic-bezier(0.25, 1, 0.5, 1);
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            box-sizing: border-box;
            border: 1px solid transparent;
        }
        .word-block small {
            display: block;
            font-size: 14px;
            font-weight: normal;
            margin-top: 4px;
            color: #aaa;
            text-transform: uppercase;
        }
        /* Action Pill indicator */
        .order-indicator-pill {
            display: inline-block;
            margin-top: 15px;
            padding: 12px 30px;
            border-radius: 30px;
            font-size: 28px;
            font-weight: 600;
            color: #fff;
            background: rgba(255,255,255,0.05);
            border: 1px solid #444;
            transition: all 0.4s ease;
        }
    </style>
</head>
<body>
    <div class="viewport" id="viewport">
        <div class="slide">
            <div class="centered-header-group">
                <h2 class="hl-word-order">English Word Order (Rigid S-V-O)</h2>
                <div class="subheader" style="color: #ffffff;"><span style="color: var(--color-case);">Changing the position of words changes the meaning of the sentence</div>
            </div>
            <div style="text-align: center; margin-bottom: 25px;">
                <div class="word-order-container">
                    <div id="en-block-0" class="word-block" style="width: 240px; left: 60px; background: rgba(100, 181, 246, 0.1); border-color: var(--color-blue); color: var(--color-blue); font-size: 34px;">
                        Prof. Oak <small>Subject</small>
                    </div>
                    <div id="en-block-1" class="word-block" style="width: 240px; left: 340px; background: rgba(129, 199, 132, 0.1); border-color: var(--color-green); color: var(--color-green); font-size: 34px;">
                        Gives <small>Verb</small>
                    </div>
                    <div id="en-block-2" class="word-block" style="width: 240px; left: 620px; background: rgba(100, 181, 246, 0.1); border-color: var(--color-blue); color: var(--color-blue); font-size: 34px;">
                        Red <small>Ind. Object</small>
                    </div>
                    <div id="en-block-3" class="word-block" style="width: 240px; left: 900px; background: rgba(100, 181, 246, 0.1); border-color: var(--color-blue); color: var(--color-blue); font-size: 34px;">
                        a Pokémon <small>Dir. Object</small>
                    </div>
                </div>
                <div id="jp-meaning-box" class="order-indicator-pill" style="border-color: var(--color-verb); background: rgba(165, 214, 167, 0.05);">
                    Meaning: Prof. Oak is the giver. Red receives a Pokémon.
                </div>
            </div>
<ul class="fact-list">
    <li class="k-fact">
        English uses a rigid <strong>Subject - Verb - Object</strong> layout structure.
    </li>
    <li class="k-fact">
        The grammatical function of a word is directly dictated by its position in the sentence.
    </li>
    <li class="k-fact">
        Swapping the words entirely corrupts or reverses who is performing the action!
    </li>
</ul>
    </div>
`
},

{
    type: "custom",
    html: `
<body>
    <div class="viewport" id="viewport">
        <div class="slide">
            <div class="centered-header-group">
                <h2 class="hl-word-order">English Word Order (Rigid S-V-O)</h2>
                <div class="subheader" style="color: #ffffff;"><span style="color: var(--color-case);">Changing the position of words changes the meaning of the sentence</div>
            </div>
            <div style="text-align: center; margin-bottom: 25px;">
                <div class="word-order-container">
                    <div id="en-block-0" class="word-block" style="width: 240px; left: 60px; background: rgba(100, 181, 246, 0.1); border-color: var(--color-blue); color: var(--color-blue); font-size: 34px;">
                         Red <small>Subject</small>
                    </div>
                    <div id="en-block-1" class="word-block" style="width: 240px; left: 340px; background: rgba(129, 199, 132, 0.1); border-color: var(--color-green); color: var(--color-green); font-size: 34px;">
                        Gives <small>Verb</small>
                    </div>
                    <div id="en-block-2" class="word-block" style="width: 240px; left: 620px; background: rgba(100, 181, 246, 0.1); border-color: var(--color-blue); color: var(--color-blue); font-size: 34px;">
                      Prof. Oak  <small>Ind. Object</small>
                    </div>
                    <div id="en-block-3" class="word-block" style="width: 240px; left: 900px; background: rgba(100, 181, 246, 0.1); border-color: var(--color-blue); color: var(--color-blue); font-size: 34px;">
                        a Pokémon <small>Dir. Object</small>
                    </div>
                </div>
                <div id="jp-meaning-box" class="order-indicator-pill" style="border-color: var(--color-verb); background: rgba(165, 214, 167, 0.05);">
                    Meaning: Red is the giver. Prof. Oak receives a Pokémon.
                </div>
            </div>
<ul class="fact-list">
    <li class="k-fact">
        English uses a rigid <strong>Subject - Verb - Object</strong> layout structure.
    </li>
    <li class="k-fact">
        The grammatical function of a word is directly dictated by its position in the sentence.
    </li>
    <li class="k-fact">
        Swapping the words entirely corrupts or reverses who is performing the action!
    </li>
</ul>
    </div>
`
},
{
    type: "custom",
    html: `
<body>
    <div class="viewport" id="viewport">
        <div class="slide">
            <div class="centered-header-group">
                <h2 class="hl-word-order">English Word Order (Rigid S-V-O)</h2>
                <div class="subheader" style="color: #ffffff;"><span style="color: var(--color-case);">Changing the position of words changes the meaning of the sentence</div>
            </div>
            <div style="text-align: center; margin-bottom: 25px;">
                <div class="word-order-container">
                    <div id="en-block-0" class="word-block" style="width: 240px; left: 60px; background: rgba(100, 181, 246, 0.1); border-color: var(--color-blue); color: var(--color-blue); font-size: 34px;">
                        a Pokémon <small>Subject</small>
                    </div>
                    <div id="en-block-1" class="word-block" style="width: 240px; left: 340px; background: rgba(129, 199, 132, 0.1); border-color: var(--color-green); color: var(--color-green); font-size: 34px;">
                        Gives <small>Verb</small>
                    </div>
                    <div id="en-block-2" class="word-block" style="width: 240px; left: 620px; background: rgba(100, 181, 246, 0.1); border-color: var(--color-blue); color: var(--color-blue); font-size: 34px;">
                        Red <small>Ind. Object</small>
                    </div>
                    <div id="en-block-3" class="word-block" style="width: 240px; left: 900px; background: rgba(100, 181, 246, 0.1); border-color: var(--color-blue); color: var(--color-blue); font-size: 34px;">
                       Prof. Oak  <small>Dir. Object</small>
                    </div>
                </div>
                <div id="jp-meaning-box" class="order-indicator-pill" style="border-color: var(--color-verb); background: rgba(165, 214, 167, 0.05);">
                    Meaning: A Pokémon is the giver. Red receives Prof. Oak
                </div>
            </div>
<ul class="fact-list">
    <li class="k-fact">
        English uses a rigid <strong>Subject - Verb - Object</strong> layout structure.
    </li>
    <li class="k-fact">
        The grammatical function of a word is directly dictated by its position in the sentence.
    </li>
    <li class="k-fact">
        Swapping the words entirely corrupts or reverses who is performing the action!
    </li>
</ul>
    </div>
`
},
{
    type: "custom",
    html: `
<body>
    <div class="viewport" id="viewport">
        <div class="slide">
            <div class="centered-header-group">
                <h2 class="hl-word-order">Japanese Word Order (Flexible S-O-V)</h2>
                <div class="subheader" style="color: #ffffff;"><span style="color: var(--color-case);">Case-Marking Particles explain the role of each word. Position don't affect the meaning of the sentence.</div>
            </div>
            <div style="text-align: center; margin-bottom: 25px;">
                <div class="word-order-container">
                    <div id="jp-block-0" class="word-block" style="width: 240px; left: 60px; background: rgba(255, 255, 255, 0.02); border-color: #444;">
                        <span style="font-family: 'Noto Sans JP', sans-serif;">
                            <span style="color: var(--color-blue);">オーキド博士</span><span style="color: var(--color-case);">が</span>
                        </span>
                        <small>Prof Oak + が (Subject)</small>
                    </div>
                    <div id="jp-block-1" class="word-block" style="width: 240px; left: 340px; background: rgba(255, 255, 255, 0.02); border-color: #444;">
                        <span style="font-family: 'Noto Sans JP', sans-serif;">
                            <span style="color: var(--color-blue);">レッド</span><span style="color: var(--color-case);">に</span>
                        </span>
                        <small>Red + に (Target)</small>
                    </div>
                    <div id="jp-block-2" class="word-block" style="width: 240px; left: 620px; background: rgba(255, 255, 255, 0.02); border-color: #444;">
                        <span style="font-family: 'Noto Sans JP', sans-serif;">
                            <span style="color: var(--color-blue);">ポケモン</span><span style="color: var(--color-case);">を</span>
                        </span>
                        <small>Pokémon + を (Object)</small>
                    </div>
                    <div id="jp-block-3" class="word-block" style="width: 240px; left: 900px; background: rgba(255, 255, 255, 0.02); border-color: #444;">
                        <span style="font-family: 'Noto Sans JP', sans-serif;">
                            <span style="color: var(--color-green);">あげる</span>
                        </span>
                        <small>To Give (Verb)</small>
                    </div>
                </div>
                <div id="jp-meaning-box" class="order-indicator-pill" style="border-color: var(--color-case); background: rgba(165, 214, 167, 0.05);">
                    Translation: "Prof. Oak gives Red a Pokémon." 
                </div>
            </div>
            <ul class="fact-list">
                <li class="k-fact"><span class="typewriter-text">In Japanese, the verb must stay at the end, but the other blocks can swap places freely.</span></li>
                <li class="k-fact"><span class="typewriter-text">This flexibility exists because particles act as sticky tags defining grammatical roles.</span></li>
                <li class="k-fact"><span class="typewriter-text">Even with blocks rearranged, the sentence meaning stays identical!</span></li>
            </ul>
        </div>
`
},
{
    type: "custom",
    html: `
<body>
    <div class="viewport" id="viewport">
        <div class="slide">
            <div class="centered-header-group">
                <h2 class="hl-word-order">Japanese Word Order (Flexible S-O-V)</h2>
                <div class="subheader" style="color: #ffffff;"><span style="color: var(--color-case);">Case-Marking Particles explain the role of each word. Position don't affect the meaning of the sentence.</div>
            </div>
            <div style="text-align: center; margin-bottom: 25px;">
                <div class="word-order-container">
                    <div id="jp-block-0" class="word-block" style="width: 240px; left: 60px; background: rgba(255, 255, 255, 0.02); border-color: #444;">
                        <span style="font-family: 'Noto Sans JP', sans-serif;">
                            <span style="color: var(--color-blue);">ポケモン</span><span style="color: var(--color-case);">を</span>
                        </span>
                        <small>Pokémon + を (Object)</small>
                    </div>
                    <div id="jp-block-1" class="word-block" style="width: 240px; left: 340px; background: rgba(255, 255, 255, 0.02); border-color: #444;">
                       <span style="font-family: 'Noto Sans JP', sans-serif;">
                            <span style="color: var(--color-blue);">オーキド博士</span><span style="color: var(--color-case);">が</span>
                        </span>
                        <small>Prof Oak + が (Subject)</small>
                    </div>
                    <div id="jp-block-2" class="word-block" style="width: 240px; left: 620px; background: rgba(255, 255, 255, 0.02); border-color: #444;">
                     <span style="font-family: 'Noto Sans JP', sans-serif;">
                            <span style="color: var(--color-blue);">レッド</span><span style="color: var(--color-case);">に</span>
                        </span>
                        <small>Red + に (Target)</small>

                    </div>
                    <div id="jp-block-3" class="word-block" style="width: 240px; left: 900px; background: rgba(255, 255, 255, 0.02); border-color: #444;">
                        <span style="font-family: 'Noto Sans JP', sans-serif;">
                            <span style="color: var(--color-green);">あげる</span>
                        </span>
                        <small>To Give (Verb)</small>
                    </div>
                </div>
                <div id="jp-meaning-box" class="order-indicator-pill" style="border-color: var(--color-case); background: rgba(165, 214, 167, 0.05);">
                    Translation: "Prof. Oak gives Red a Pokémon." 
                </div>
            </div>
            <ul class="fact-list">
                <li class="k-fact"><span class="typewriter-text">In Japanese, the verb must stay at the end, but the other blocks can swap places freely.</span></li>
                <li class="k-fact"><span class="typewriter-text">This flexibility exists because particles act as sticky tags defining grammatical roles.</span></li>
                <li class="k-fact"><span class="typewriter-text">Even with blocks rearranged, the sentence meaning stays identical!</span></li>
            </ul>
        </div>
`
},


{
    type: "custom",
    html: `
        <!-- SLIDE 3: GA -->
        <div class="slide" id="slide-3">
            <div class="centered-header-group reveal" id="ga-header">
                <h2 class="hl-case">Case-Marking Particle</h2>
                <div class="subheader hl-case">Marks a noun's grammatical role</div>
            </div>

            <div style="display: flex; justify-content: center; margin-bottom: 40px;">
                <div class="example-card reveal" id="ga-card">
                    <p class="ex-jp japanese-text hl-case">が</p>
                    <p class="ex-en">Subject Marker</p>
                </div>
            </div>
            
            <ul class="fact-list">
                <li class="ga-fact"><span class="typewriter-text">Marks the grammatical subject of a sentence (who or what performs the action).</span></li>
                <li class="ga-fact"><span class="typewriter-text">The subject is usually clear by context and が will often be omitted from the sentence.</span></li>
                <li class="ga-fact"><span class="typewriter-text">Ex: "いい" could be seen as : "(xが)　いい" => (It's) good.</span></li>
                <li class="ga-fact"><span class="typewriter-text">Understanding that the subject doesn't always appear helps with more complex sentences.</span></li>
            </ul>
        </div>
`
},

{ type: "Vocabulary", morph: "が", type1: "Particles", type2: "Case-Marking", frequency: "7", definition: "【が】<br>indicates sentence subject (occasionally object)", exampleJP: "それが俺だ", exampleEN: "That child was me.", image: "../Files/Anki/A_VioletEvergarden_06_0.15.24.025.jpg", audio: "../Files/Anki/A_VioletEvergarden_06_0.15.23.530-0.15.24.520.mp3" },


{
    type: "custom",
    html: `
            <!-- SLIDE 4: WO -->
        <div class="slide" id="slide-4">
            <div class="centered-header-group reveal" id="wo-header">
                <h2 class="hl-case">Case-Marking Particle</h2>
                <div class="subheader hl-case">Marks a noun's grammatical role</div>
            </div>

            <div style="display: flex; justify-content: center; margin-bottom: 40px;">
                <div class="example-card reveal" id="wo-card">
                    <p class="ex-jp japanese-text hl-case">を</p>
                    <p class="ex-en">Direct Object Marker</p>
                </div>
            </div>
            
            <ul class="fact-list">
                <li class="wo-fact"><span class="typewriter-text">Marks the grammatical direct object receiving a transitive action (e.g., <span style="color: var(--color-blue);">水</span><span style="color: var(--color-case);">を</span>　<span style="color: var(--color-green);">飲む</span> - Drink water).</span></li>
                <li class="wo-fact"><span class="typewriter-text">Commonly omitted or dropped in highly casual conversation, but essential for formal settings.</span></li>
                <li class="wo-fact"><span class="typewriter-text">Pronounced simply as "o" (identical to お) in spoken Japanese.</span></li>
            </ul>
        </div>
`
},

{ type: "Vocabulary", morph: "を", type1: "Particles", type2: "Case-Marking", frequency: "8", definition: "【を】<br>indicates direct object of action", exampleJP: "何をする", exampleEN: "The hell's wrong with you?!", image: "../Files/Anki/A_PsychoPassS01_E01_1_0.18.13.380.jpg", audio: "../Files/Anki/A_PsychoPassS01_E01_1_0.18.12.900-0.18.13.860.mp3" },


{
    type: "custom",
    html: `
            <!-- SLIDE 5: NI -->
        <div class="slide" id="slide-5">
            <div class="centered-header-group reveal" id="ni-header">
                <h2 class="hl-case">Case-Marking Particle</h2>
                <div class="subheader hl-case">Marks a noun's grammatical role</div>
            </div>

            <div style="display: flex; justify-content: center; margin-bottom: 40px;">
                <div class="example-card reveal" id="ni-card">
                    <p class="ex-jp japanese-text hl-case">に</p>
                    <p class="ex-en">Target Marker (Time, Location, person, goal...)</p>
                </div>
            </div>
            
            <ul class="fact-list">
                <li class="ni-fact"><span class="typewriter-text"><strong>Time points:</strong> Appended to specific numeric time elements (e.g., <span style="color: var(--color-blue);">7時</span><span style="color: var(--color-case);">に</span>　<span style="color: var(--color-green);">起きる</span>).</span></li>
                <li class="ni-fact"><span class="typewriter-text"><strong>Destination point:</strong> Specifies the final point of arrival for motion (e.g., <span style="color: var(--color-blue);">日本</span><span style="color: var(--color-case);">に</span>　<span style="color: var(--color-green);">行く</span>).</span></li>
                <li class="ni-fact"><span class="typewriter-text"><strong>Indirect Object:</strong> Points to the recipient of an interaction (e.g., <span style="color: var(--color-blue);">レッド</span><span style="color: var(--color-case);">に</span>　<span style="color: var(--color-green);">あげる</span> - Give to Red).</span></li>
                <li class="ni-fact"><span class="typewriter-text">Avoid adding <strong>に</strong> to relative dates like "tomorrow" (明日) or "next week" (来週).</span></li>
            </ul>
        </div>
`
},

{ type: "Vocabulary", morph: "に", type1: "Particles", type2: "Case-Marking", frequency: "6", definition: "【に】 <br>to (direction, state), toward, into", exampleJP: "あたしに", exampleEN: "For me?", image: "../Files/Anki/A_Shirokuma_Cafe_28_0.21.19.070.jpg", audio: "../Files/Anki/A_Shirokuma_Cafe_28_0.21.18.530-0.21.19.610.mp3" },
{ type: "Vocabulary", morph: "に", type1: "Particles", type2: "Case-Marking", frequency: "6", definition: "【に】 <br>to (direction, state), toward, into", exampleJP: "控え室に行く", exampleEN: "I'm going to the waiting room.", image: "../Files/Anki/A_3GatsunoLion_S01E20_1_0.16.12.367.jpg", audio: "../Files/Anki/A_3GatsunoLion_S01E20_1_0.16.11.762-0.16.12.972.mp3" },
{ type: "Vocabulary", morph: "に", type1: "Particles", type2: "Case-Marking", frequency: "6", definition: "【に】<br>at (place, time), in, on, during", exampleJP: "家にいるよ", exampleEN: "She's at home.", image: "../Files/Anki/A_KOn_S01E10_1_0.03.08.728.jpg", audio: "../Files/Anki/A_KOn_S01E10_1_0.03.08.278-0.03.09.178.mp3" },
{ type: "Vocabulary", morph: "に", type1: "Particles", type2: "Case-Marking", frequency: "6", definition: "【に】 <br>at (place, time), in, on, during", exampleJP: "では　明日7時に", exampleEN: "Then tomorrow at 7:00.", image: "../Files/Anki/A_Erased_08_0.15.49.400.jpg", audio: "../Files/Anki/A_Erased_08_0.15.48.580-0.15.50.220.mp3" },
{ type: "Vocabulary", morph: "に", type1: "Particles", type2: "Case-Marking", frequency: "6", definition: "【に】 <br>per, in, for, a (e.g. \"once a month\")", exampleJP: "年に１回のね", exampleEN: "It's held once every year.", image: "../Files/Anki/A_Shirokuma_Cafe_13_0.02.49.620.jpg", audio: "../Files/Anki/A_Shirokuma_Cafe_13_0.02.48.430-0.02.50.810.mp3" },
{ type: "Vocabulary", morph: "に", type1: "Particles", type2: "Case-Marking", frequency: "6", definition: "【に】 <br>for (purpose)", exampleJP: "絶交しに来た", exampleEN: "I came to break up.", image: "../Files/Anki/A_aPlaceFurther_E05_1_0.18.12.071.jpg", audio: "../Files/Anki/A_aPlaceFurther_E05_1_0.18.11.466-0.18.12.675.mp3" },


{
    type: "custom",
    html: `
            <!-- SLIDE 6: HE -->
        <div class="slide" id="slide-6">
            <div class="centered-header-group reveal" id="he-header">
                <h2 class="hl-case">Case-Marking Particle</h2>
                <div class="subheader hl-case">Marks a noun's grammatical role</div>
            </div>

            <div style="display: flex; justify-content: center; margin-bottom: 40px;">
                <div class="example-card reveal" id="he-card">
                    <p class="ex-jp japanese-text hl-case">へ</p>
                    <p class="ex-en">Direction Marker</p>
                </div>
            </div>
            
            <ul class="fact-list">
                <li class="he-fact"><span class="typewriter-text"><strong>Direction of Movement:</strong> Indicates heading towards a destination or path (e.g., <span style="color: var(--color-blue);">日本</span><span style="color: var(--color-case);">へ</span>　<span style="color: var(--color-green);">行く</span> - Go towards Japan).</span></li>
                <li class="he-fact"><span class="typewriter-text">Written with the Hiragana character <strong>へ (He)</strong>, but universally pronounced as <strong>"E"</strong> when acting as a particle.</span></li>
                <li class="he-fact"><span class="typewriter-text"><strong>Contrast with に (Ni):</strong> While <strong>に</strong> focuses on the endpoint of destination, <strong>へ</strong> highlights the path or heading direction itself.</span></li>
                <li class="he-fact"><span class="typewriter-text">Used gracefully when writing letters to address someone at the start (e.g., <span style="color: var(--color-blue);">田中さん</span><span style="color: var(--color-case);">へ</span> - To Mr. Tanaka).</span></li>
            </ul>
        </div>
`
},
{ type: "Vocabulary", morph: "へ", type1: "Particles", type2: "Case-Marking", frequency: "102", definition: "【へ】<br>indicates direction or goal (e.g. \"to\")", exampleJP: "みんな！　城へ～！", exampleEN: "Everyone to the castle!", image: "../Files/Anki/A_Nausicaa_1_0.32.03.822.jpg", audio: "../Files/Anki/A_Nausicaa_1_0.32.02.796-0.32.04.848.mp3" },

{
    type: "custom",
    html: `
            <!-- SLIDE 7: TO (COMPANION - WITH) -->
        <div class="slide" id="slide-7">
            <div class="centered-header-group reveal" id="tocompanion-header">
                <h2 class="hl-case">Case-Marking Particle</h2>
                <div class="subheader hl-case">Marks a noun's grammatical role</div>
            </div>

            <div style="display: flex; justify-content: center; margin-bottom: 40px;">
                <div class="example-card reveal" id="tocompanion-card">
                    <p class="ex-jp japanese-text hl-case">と</p>
                    <p class="ex-en">Companion / Mutual Action ("With")</p>
                </div>
            </div>
            
            <ul class="fact-list">
                <li class="tocompanion-fact"><span class="typewriter-text"><strong>Companion Marker:</strong> Indicates the person or group with whom you perform an action (e.g., <span style="color: var(--color-blue);">友達</span><span style="color: var(--color-case);">と</span>　<span style="color: var(--color-green);">話す</span> - Talk with a friend).</span></li>
                <li class="tocompanion-fact"><span class="typewriter-text"><strong>Mutual Verbs:</strong> Required for verbs that inherently involve two parties, such as to marry (結婚する) or to fight (戦う).</span></li>
                <li class="tocompanion-fact"><span class="typewriter-text"><strong>Strict Distinction:</strong> While Parallel <strong>と</strong> links nouns together ("and"), Case-marking <strong>と</strong> links a companion to the active verb.</span></li>
            </ul>
        </div>
`
},
{ type: "Vocabulary", morph: "と", type1: "Particles", type2: "Case-Marking", frequency: "11", definition: "【と】 <br>with", exampleJP: "ううん　ママと", exampleEN: "No, I'm with my mom.", image: "../Files/Anki/A-NastumeSeason1_11_0.13.21.935.jpg", audio: "../Files/Anki/A-NastumeSeason1_11_0.13.21.010-0.13.22.860.mp3" },

{
    type: "custom",
    html: `
            <!-- SLIDE 8: DE -->
        <div class="slide" id="slide-8">
            <div class="centered-header-group reveal" id="de-header">
                <h2 class="hl-case">Case-Marking Particle</h2>
                <div class="subheader hl-case">Marks a noun's grammatical role</div>
            </div>

            <div style="display: flex; justify-content: center; margin-bottom: 40px;">
                <div class="example-card reveal" id="de-card">
                    <p class="ex-jp japanese-text hl-case">で</p>
                    <p class="ex-en">Location of active events, tools, or causes.</p>
                </div>
            </div>
            
            <ul class="fact-list">
                <li class="de-fact"><span class="typewriter-text"><strong>Action Scene:</strong> Indicates the active physical site of behavior (e.g., <span style="color: var(--color-blue);">図書館</span><span style="color: var(--color-case);">で</span>　<span style="color: var(--color-green);">勉強する</span> - Study at the Library).</span></li>
                <li class="de-fact"><span class="typewriter-text"><strong>Tools/Method:</strong> Marks the instrument, mode of travel, or language used (e.g., <span style="color: var(--color-blue);">車</span><span style="color: var(--color-case);">で</span>　<span style="color: var(--color-green);">行く</span> - Go by car).</span></li>
                <li class="de-fact"><span class="typewriter-text"><strong>Cause/Reason:</strong> Translates to "due to" or "because of" (e.g., <span style="color: var(--color-blue);">風邪</span><span style="color: var(--color-case);">で</span>　<span style="color: var(--color-green);">休む</span> - Absent due to a cold).</span></li>
            </ul>
        </div>
`
},
{ type: "Vocabulary", morph: "で", type1: "Particles", type2: "Case-Marking", frequency: "13", definition: "【で】 <br>indicates means of action, cause of effect, by", exampleJP: "目で殺す", exampleEN: "Kill you with my eyes!!", image: "../Files/Anki/Anime-SlamDunk2_10_0.13.24.035.jpg", audio: "../Files/Anki/Anime-SlamDunk2_10_0.13.23.340-0.13.24.730.mp3" },
{ type: "Vocabulary", morph: "で", type1: "Particles", type2: "Case-Marking", frequency: "13", definition: "【で】 <br>indicates means of action, cause of effect, by", exampleJP: "1000円で", exampleEN: "Here's 1000 yen.", image: "../Files/Anki/A_DailyLivesofHighSchoolBoys_S01E08_1_0.10.05.455.jpg", audio: "../Files/Anki/A_DailyLivesofHighSchoolBoys_S01E08_1_0.10.04.910-0.10.06.000.mp3" },

{
    type: "custom",
    html: `
            <!-- SLIDE 9: KA (Parallel Choice) -->
        <div class="slide" id="slide-9">
            <div class="centered-header-group reveal" id="ka-header">
                <h2 class="hl-case">Parallel Marker</h2>
                <div class="subheader hl-case">Links items in a list</div>
            </div>

            <div style="display: flex; justify-content: center; margin-bottom: 40px;">
                <div class="example-card reveal" id="ka-card">
                    <p class="ex-jp japanese-text hl-case">か</p>
                    <p class="ex-en">Choice Option ("Or")</p>
                </div>
            </div>
            
            <ul class="fact-list">
                <li class="ka-fact"><span class="typewriter-text"><strong>Choice Connection:</strong> Connects nouns to form an "A or B" selection (e.g., <span style="color: var(--color-blue);">コーヒー</span><span style="color: var(--color-case);">か</span>　<span style="color: var(--color-blue);">お茶</span> - Coffee or tea).</span></li>
                <li class="ka-fact"><span class="typewriter-text"><strong>Indefinites:</strong> Combines with question words to create non-specific terms (e.g., <span style="color: var(--color-blue);">何</span><span style="color: var(--color-case);">か</span> - something, <span style="color: var(--color-blue);">だれ</span><span style="color: var(--color-case);">か</span> - someone).</span></li>
            </ul>
        </div>
`
},
{ type: "Vocabulary", morph: "か", type1: "", type2: "", frequency: "", definition: "【か】<br>indicates a question (sometimes rhetorical)", exampleJP: "門か　森か", exampleEN: "The gate, or the forest?", image: "../Files/Anki/A_ThePromisedNeverland_E02_1_0.05.35.711.jpg", audio: "../Files/Anki/A_ThePromisedNeverland_E02_1_0.05.34.751-0.05.36.670.mp3" },

{
    type: "custom",
    html: `
            <!-- SLIDE 10: TO & YA (Parallel Listing) -->
        <div class="slide" id="slide-10">
            <div class="centered-header-group reveal" id="toya-header">
                <h2 class="hl-case">Parallel Marker</h2>
                <div class="subheader hl-case">Links items in a list</div>
            </div>

            <div style="display: flex; gap: 40px; justify-content: center; margin-bottom: 40px;">
                <div class="example-card reveal" id="toya-card-to" style="min-width: 450px;">
                    <p class="ex-jp japanese-text hl-case">と</p>
                    <p class="ex-en">Exhaustive "And" (Closed List)</p>
                </div>
                <div class="example-card reveal" id="toya-card-ya" style="min-width: 450px;">
                    <p class="ex-jp japanese-text hl-case">や</p>
                    <p class="ex-en">Partial "And, etc." (Open List)</p>
                </div>
            </div>
            
            <ul class="fact-list">
                <li class="toya-fact"><span class="typewriter-text"><strong>と (Complete List):</strong> Links nouns in a strict, exhaustive layout with no omissions (e.g., <span style="color: var(--color-blue);">猫</span><span style="color: var(--color-case);">と</span>　<span style="color: var(--color-blue);">犬</span> - Only cats and dogs).</span></li>
                <li class="toya-fact"><span class="typewriter-text"><strong>や (Partial List):</strong> Joins items in an open-ended listing, implying other elements exist (e.g., <span style="color: var(--color-blue);">本</span><span style="color: var(--color-case);">や</span>　<span style="color: var(--color-blue);">ペン</span> - Books, pens, etc.).</span></li>
            </ul>
        </div>
`
},
{ type: "Vocabulary", morph: "と", type1: "Particles", type2: "Case-Marking", frequency: "11", definition: "【と】 <br>and", exampleJP: "ツォンとイリーナ", exampleEN: "Tseng and Elena.", image: "../Files/Anki/A_Final_Fantasy_VII_Advent_Children_1_0.54.35.460.jpg", audio: "../Files/Anki/A_Final_Fantasy_VII_Advent_Children_1_0.54.34.750-0.54.36.170.mp3" },
{ type: "Vocabulary", morph: "や", type1: "", type2: "", frequency: "", definition: "【や】<br>such things as (non-exhaustive list related to a specific time and place), and ... and", exampleJP: "草花や水や風…", exampleEN: "Plants, water, and wind...", image: "../Files/Anki/A_CardCaptorSakura36_61_0.13.21.025.jpg", audio: "../Files/Anki/A_CardCaptorSakura36_61_0.13.19.450-0.13.22.600.mp3" },

{
    type: "custom",
    html: `
            <!-- SLIDE 11: NO (Noun linker) -->
        <div class="slide" id="slide-11">
            <div class="centered-header-group reveal" id="no-header">
                <h2 class="hl-case">Noun-Modifying Particle</h2>
                <div class="subheader hl-case">Links something to a noun it modifies</div>
            </div>

            <div style="display: flex; justify-content: center; margin-bottom: 40px;">
                <div class="example-card reveal" id="no-card">
                    <p class="ex-jp japanese-text hl-case">の</p>
                    <p class="ex-en">Possessive & Noun Linker</p>
                </div>
            </div>
            
            <ul class="fact-list">
                <li class="no-fact"><span class="typewriter-text">Links two nouns together to establish ownership, relationship, or description (e.g., <span style="color: var(--color-blue);">私</span><span style="color: var(--color-case);">の</span>　<span style="color: var(--color-blue);">本</span> - My book).</span></li>
                <li class="no-fact"><span class="typewriter-text">Works in a "noun modifier" layout to clarify details (e.g., <span style="color: var(--color-blue);">日本語</span><span style="color: var(--color-case);">の</span>　<span style="color: var(--color-blue);">本</span> - Japanese language book).</span></li>
            </ul>
        </div>
`
},
{ type: "Vocabulary", morph: "の", type1: "Particles", type2: "Case-Marking", frequency: "2", definition: "【の】<br>indicates possessive", exampleJP: "君の名前…", exampleEN: "What's your name?", image: "../Files/Anki/KoenoKatachi_1_0.37.12.693.jpg", audio: "../Files/Anki/KoenoKatachi_1_0.37.12.046-0.37.13.339.mp3" },

{
    type: "custom",
    html: `
            <div class="slide" id="slide-12">
            <div class="centered-header-group reveal" id="wa-header">
                <h2 class="hl-topic">Binding Particle</h2>
                <div class="subheader hl-topic">Marks topic, focus, or emphasis</div>
            </div>

            <div style="display: flex; justify-content: center; margin-bottom: 40px;">
                <div class="example-card reveal" id="wa-card">
                    <p class="ex-jp japanese-text hl-topic">は</p>
                    <p class="ex-en">Topic Marker</p>
                </div>
            </div>
            
            <ul class="fact-list">
                <li class="wa-fact"><span class="typewriter-text">Written with "は" but pronounced as "わ" when acting as a grammatical particle.</span></li>
                <li class="wa-fact"><span class="typewriter-text">は doesn't change the basic meaning of a sentence like case markers but put emphasis on the topic: "As for ...".</span></li>
                <li class="wa-fact"><span class="typewriter-text">Usually replaces case markers like が (subject) or を (object) when they become the topic.</span></li>
                <li class="wa-fact"><span class="typewriter-text">When put at the end of a sentence, it works as a question like: "What about ..." .</span></li>
            </ul>
        </div>
`
},
{ type: "Vocabulary", morph: "は", type1: "Particles", type2: "Binding ", frequency: "3", definition: "【は】<br>topic marker particle", exampleJP: "私はイクラ", exampleEN: "I have salmon roe.", image: "../Files/Anki/Chi056_1_0.2.00.920.jpg", audio: "../Files/Anki/Chi056_1_0.2.00.040-0.2.01.800.mp3" },
{ type: "Vocabulary", morph: "は", type1: "Particles", type2: "Binding ", frequency: "3", definition: "【は】<br>topic marker particle", exampleJP: "名前は", exampleEN: "What's your name?", image: "../Files/Anki/Anime_-_YourName_1_1.22.32.400.jpg", audio: "../Files/Anki/Anime_-_YourName_1_1.22.31.590-1.22.33.210.mp3" },

{
    type: "custom",
    html: `
            <!-- SLIDE 13: MO -->
        <div class="slide" id="slide-13">
            <div class="centered-header-group reveal" id="mo-header">
                <h2 class="hl-topic">Binding Particle</h2>
                <div class="subheader hl-topic">Marks topic, focus, or emphasis</div>
            </div>

            <div style="display: flex; justify-content: center; margin-bottom: 40px;">
                <div class="example-card reveal" id="mo-card">
                    <p class="ex-jp japanese-text hl-topic">も</p>
                    <p class="ex-en">Also, Too</p>
                </div>
            </div>
            
            <ul class="fact-list">
                <li class="mo-fact"><span class="typewriter-text">Indicates addition or inclusion, replacing the subject (は/が) or direct object (を) to mean "also" or "too" (e.g., <span style="color: var(--color-blue);">私</span><span style="color: var(--color-topic);">も</span>　<span style="color: var(--color-green);">行く</span>).</span></li>
                <li class="mo-fact"><span class="typewriter-text">Connects multiple parallel elements to mean "both A and B" (e.g., <span style="color: var(--color-blue);">犬</span><span style="color: var(--color-topic);">も</span>　<span style="color: var(--color-blue);">猫</span><span style="color: var(--color-topic);">も</span>　<span style="color: var(--color-word-order);">好き</span> - I like both dogs and cats).</span></li>
                <li class="mo-fact"><span class="typewriter-text">Expresses emphasis, scale, or surprise when highlighting quantity (e.g., <span style="color: var(--color-blue);">3時間</span><span style="color: var(--color-topic);">も</span>　<span style="color: var(--color-green);">待ちました</span> - I waited for a whole 3 hours).</span></li>
            </ul>
        </div>
`
},
{ type: "Vocabulary", morph: "も", type1: "Particles", type2: "Binding ", frequency: "10", definition: "【も】<br>too, also, in addition, as well, (not) either (in a negative sentence)", exampleJP: "私も", exampleEN: "Me too.", image: "../Files/Anki/Chi069_1_0.2.46.315.jpg", audio: "../Files/Anki/Chi069_1_0.2.45.950-0.2.46.680.mp3" },

{
    type: "custom",
    html: `
           <!-- SLIDE 14: DAKE -->
        <div class="slide" id="slide-14">
            <div class="centered-header-group reveal" id="dake-header">
                <h2 class="hl-topic">Adverbial Particle</h2>
                <div class="subheader hl-topic">Adds nuance such as only, also, even, or about</div>
            </div>

            <div style="display: flex; justify-content: center; margin-bottom: 40px;">
                <div class="example-card reveal" id="dake-card">
                    <p class="ex-jp japanese-text hl-topic">だけ</p>
                    <p class="ex-en">Limit / Only / Just</p>
                </div>
            </div>
            
            <ul class="fact-list">
                <li class="dake-fact"><span class="typewriter-text">Expresses a limit or boundary, translating directly to "only" or "just" (e.g., <span style="color: var(--color-blue);">これ</span><span style="color: var(--color-topic);">だけ</span> - Only this).</span></li>
                <li class="dake-fact"><span class="typewriter-text">Attaches safely directly to nouns, verbs, or adjectives (e.g., <span style="color: var(--color-blue);">水</span><span style="color: var(--color-topic);">だけ</span>　<span style="color: var(--color-green);">飲む</span> - Drink only water).</span></li>
                <li class="dake-fact"><span class="typewriter-text">Can combine sequentially with case-marking particles (e.g., <span style="color: var(--color-blue);">あなた</span><span style="color: var(--color-topic);">だけに</span>　<span style="color: var(--color-green);">言う</span> - Say only to you).</span></li>
            </ul>
        </div> 
`
},
{ type: "Vocabulary", morph: "だけ", type1: "Particles", type2: "Adverbial ", frequency: "61", definition: "だけ【丈】 <br>only, just, merely, simply, no more than, nothing but, alone", exampleJP: "ちょっとだけね", exampleEN: "I'll give you only a bit.", image: "../Files/Anki/Chi072_1_0.1.20.755.jpg", audio: "../Files/Anki/Chi072_1_0.1.19.970-0.1.21.540.mp3" },

{
    type: "custom",
    html: `
            <!-- SLIDE 15: SENTENCE ENDING KA (QUESTION MARKER) -->
        <div class="slide" id="slide-15">
            <div class="centered-header-group reveal" id="kaq-header">
                <h2 class="hl-sentence-end">Sentence-Ending Particle</h2>
                <div class="subheader hl-sentence-end">Adds speaker attitude at sentence end</div>
            </div>

            <div style="display: flex; justify-content: center; margin-bottom: 40px;">
                <div class="example-card reveal" id="kaq-card">
                    <p class="ex-jp japanese-text hl-sentence-end">か</p>
                    <p class="ex-en">Question Marker (Spoken Question Mark)</p>
                </div>
            </div>
            
            <ul class="fact-list">
                <li class="kaq-fact"><span class="typewriter-text">Acts as a spoken question mark, instantly turning statements into direct inquiries (e.g., <span style="color: var(--color-blue);">いい</span><span style="color: var(--color-sentence-end);">か</span> - Is it good ?).</span></li>
            </ul>
        </div>
`
},
{ type: "Vocabulary", morph: "か", type1: "Particles", type2: "Sentence-ending", frequency: "17", definition: "【か】<br>indicates a question (sometimes rhetorical)", exampleJP: "うまいか", exampleEN: "Does it taste good?", image: "../Files/Anki/A_ClannadS01_E23_1_0.18.42.835.jpg", audio: "../Files/Anki/A_ClannadS01_E23_1_0.18.42.300-0.18.43.370.mp3" },

{
    type: "custom",
    html: `
            <!-- SLIDE 16: SENTENCE ENDING NO (SOFT QUESTION / ENQUIRY) -->
        <div class="slide" id="slide-16">
            <div class="centered-header-group reveal" id="noq-header">
                <h2 class="hl-sentence-end">Sentence-Ending Particle</h2>
                <div class="subheader hl-sentence-end">Adds speaker attitude at sentence end</div>
            </div>

            <div style="display: flex; justify-content: center; margin-bottom: 40px;">
                <div class="example-card reveal" id="noq-card">
                    <p class="ex-jp japanese-text hl-sentence-end">の</p>
                    <p class="ex-en">Soft Question / Tone Softener</p>
                </div>
            </div>
            
            <ul class="fact-list">
                <li class="noq-fact"><span class="typewriter-text">Turns a plain-form statement into a casual, soft question when spoken with rising intonation.</span></li>
                <li class="noq-fact"><span class="typewriter-text">Carries a gentle, seeking, or explanation-inviting tone compared to the blunter, bare plain-form question.</span></li>
                <li class="noq-fact"><span class="typewriter-text">Often used in friendly casual conversations, carrying a slightly softening or intimate nuance.</span></li>
            </ul>
        </div>
`
},
{ type: "Vocabulary", morph: "の", type1: "Particles", type2: "Sentence-ending", frequency: "68", definition: "【の】 <br>(at sentence-end, rising tone) indicates question", exampleJP: "話すの？", exampleEN: "You're still going to tell me?", image: "../Files/Anki/A_Shirokuma_Cafe_20_0.02.53.855.jpg", audio: "../Files/Anki/A_Shirokuma_Cafe_20_0.02.53.330-0.02.54.380.mp3" },

{
    type: "custom",
    html: `
            <!-- SLIDE 17: SENTENCE ENDING GENERAL DESCRIPTION OVERVIEW -->
        <div class="slide" id="slide-17">
            <div class="centered-header-group reveal" id="yone-header">
                <h2 class="hl-sentence-end">Sentence-Ending Particles</h2>
                <div class="subheader hl-sentence-end">The interpersonal spices of spoken Japanese</div>
            </div>

            <div style="display: flex; justify-content: center; margin-bottom: 40px;">
                <div class="example-card reveal" id="yone-card" style="min-width: 700px;">
                    <p class="ex-jp japanese-text" style="font-size: 56px;">
                        <span class="hl-sentence-end">よ</span> ・ <span class="hl-sentence-end">ね</span> ・ <span class="hl-sentence-end">ぞ</span> ・ <span class="hl-sentence-end">さ</span> ・ <span class="hl-sentence-end">な</span> ・ <span class="hl-sentence-end">わ</span> ・ <span class="hl-sentence-end">かな</span>
                    </p>
                    <p class="ex-en">Expresses emotional stance, assertiveness, and social connection.</p>
                </div>
            </div>
            
            <ul class="fact-list">
                <li class="yone-fact"><span class="typewriter-text">Placed at the very end of sentences to convey interpersonal energy and speaker attitude.</span></li>
                <li class="yone-fact"><span class="typewriter-text"><strong>Assertion & Focus:</strong> <span class="hl-sentence-end">よ</span> (informative/assertive), <span class="hl-sentence-end">ぞ</span> (strong/masculine force), <span class="hl-sentence-end">さ</span> (casual assertion/by-the-way).</span></li>
                <li class="yone-fact"><span class="typewriter-text"><strong>Shared Agreement:</strong> <span class="hl-sentence-end">ね</span> (seeking agreement/soft confirmation), <span class="hl-sentence-end">な</span> (reflective/masculine 'ne' equivalent).</span></li>
                <li class="yone-fact"><span class="typewriter-text"><strong>Stance & Wondering:</strong> <span class="hl-sentence-end">わ</span> (gentle/feminine touch), <span class="hl-sentence-end">かな</span> (wondering out loud / "I wonder if...").</span></li>
            </ul>
        </div>
`
},
{ type: "Vocabulary", morph: "よ", type1: "Particles", type2: "Sentence-ending", frequency: "12", definition: "【よ】<br>indicates certainty, emphasis, contempt, request, etc.", exampleJP: "いいよ。", exampleEN: "Go for it.", image: "../Files/Anki/A_UsagiDrop_08_0.19.45.055.jpg", audio: "../Files/Anki/A_UsagiDrop_08_0.19.43.590-0.19.46.520.mp3" },
{ type: "Vocabulary", morph: "ぞ", type1: "Particles", type2: "Sentence-ending", frequency: "62", definition: "【ぞ】<br>(sentence end) adds force, indicates command", exampleJP: "いくぞ～！", exampleEN: "Let’s do it!", image: "../Files/Anki/A-Akira_1_1.35.08.530.jpg", audio: "../Files/Anki/A-Akira_1_1.35.07.360-1.35.09.700.mp3" },
{ type: "Vocabulary", morph: "さ", type1: "Particles", type2: "Sentence-ending", frequency: "108", definition: "【さ】 <br>(sentence end, mainly masc.) indicates assertion", exampleJP: "金さ", exampleEN: "Money!", image: "../Files/Anki/A_Assassination_classroom_E17_1_0.02.58.895.jpg", audio: "../Files/Anki/A_Assassination_classroom_E17_1_0.02.58.220-0.02.59.570.mp3" },
{ type: "Vocabulary", morph: "な", type1: "Particles", type2: "Sentence-ending", frequency: "23", definition: "【な】<br>(sentence end, mainly masc.) indicates emotion or emphasis", exampleJP: "すごいな", exampleEN: "Wow...", image: "../Files/Anki/A_AttackonTitan_03_0.21.19.620.jpg", audio: "../Files/Anki/A_AttackonTitan_03_0.21.19.070-0.21.20.170.mp3" },
{ type: "Vocabulary", morph: "ね", type1: "Particles", type2: "Sentence-ending", frequency: "24", definition: "【ね】<br>indicates emphasis, agreement, request for confirmation, etc., is it so", exampleJP: "すごいね", exampleEN: "That is amazing.", image: "../Files/Anki/A_Shirokuma_Cafe_48_0.10.59.505.jpg", audio: "../Files/Anki/A_Shirokuma_Cafe_48_0.10.58.810-0.11.00.200.mp3" },
{ type: "Vocabulary", morph: "わ", type1: "Particles", type2: "Sentence-ending", frequency: "56", definition: "【わ】<br>indicates emotion or admiration", exampleJP: "（ナミ）ここだわ", exampleEN: "Here we are!", image: "../Files/Anki/A_One_Piece_S01_07_0.11.50.149.jpg", audio: "../Files/Anki/A_One_Piece_S01_07_0.11.49.085-0.11.51.212.mp3" },
{ type: "Vocabulary", morph: "かな", type1: "", type2: "", frequency: "", definition: "【かな】<br>(at sentence end) I wonder", exampleJP: "ここかな", exampleEN: "I hope this is the place.", image: "../Files/Anki/A_Shirokuma_Cafe_28_0.13.03.005.jpg", audio: "../Files/Anki/A_Shirokuma_Cafe_28_0.13.02.470-0.13.03.540.mp3" },


];