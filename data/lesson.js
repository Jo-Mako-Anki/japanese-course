// =========================================
// Load Lesson
// =========================================
const params = new URLSearchParams(window.location.search);
const lesson = params.get("lesson");
if (!lesson) {
    alert("No lesson specified.");
    throw new Error("No lesson specified.");
}
const script = document.createElement("script");
script.src = `../Pages/${lesson}.js`;
script.onload = () => {
    buildScenes();
    initializeLesson();
};
script.onerror = () => {
    console.error("Couldn't load lesson:", script.src);
};
document.head.appendChild(script);

// =========================================
// Build Scenes
// =========================================
function buildScenes() {
    const slider = document.getElementById("slider");
    slider.innerHTML = "";
    window.lessonScenes.forEach(scene => {
        const div = document.createElement("div");
        div.className = "scene";
        // ---------------------------------
        // Custom Page
        // ---------------------------------
        if (scene.type === "custom") {
            div.innerHTML = scene.html;
        }
        // ---------------------------------
        // Text Page
        // ---------------------------------
        else if (scene.type === "text") {
            div.innerHTML = `
                <div
                    class="Japanese"
                    style="font-size:20px;text-align:left;max-width:600px;">
                    ${scene.japanese}
                </div>
            `;
        }
// ---------------------------------
// Summary
// ---------------------------------
else if (scene.type === "Summary") {
    const vocab = getWordsForLesson(`${lesson}`);
    div.classList.add("summary-scene");

    const hasCover = !!scene.cover;

    div.innerHTML = `
    <div class="summary-intro">
        <h1>${lesson.replace(/^\d+\s*-\s*/, "").replace(".html","")}</h1>
        ${scene.intro || ""}
    </div>

    <div class="summary-layout ${hasCover ? "" : "no-cover"}">

        ${hasCover ? `
        <div class="summary-left">
            <img src="${scene.cover}" class="summary-cover">
        </div>
        ` : ""}

        <div class="summary-right">
            <div class="table-container">
                <table id="vocabTable">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Word</th>
                            <th>Type 1</th>
                            <th>Type 2</th>
                            <th>Frequency</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${vocab.map((v,index)=>`
                        <tr>
                            <td>${index+1}</td>
                            <td><strong>${v.word}</strong></td>
                            <td>${v.type1||"-"}</td>
                            <td>${v.type2||"-"}</td>
                            <td>${v.frequency||"-"}</td>
                        </tr>
                        `).join("")}
                    </tbody>
                </table>
            </div>
        </div>

    </div>`;
}

// ---------------------------------
// Vocabulary
// ---------------------------------
else if (scene.type === "Vocabulary") {
    div.innerHTML = `
<div class="vocab-card">
    <div class="Morph">
        ${scene.morph || ""}
    </div>

    ${scene.definition ? `
    <div class="definition">
        ${scene.definition}
    </div>
    ` : ""}

    ${(scene.type1 || scene.type2 || scene.frequency) ? `
    <div class="meta">
        ${scene.frequency ? `<span>#${scene.frequency}</span>` : ""}
        ${scene.type1 ? `<span>• ${scene.type1}</span>` : ""}
        ${scene.type2 ? `<span>• ${scene.type2}</span>` : ""}

    </div>
    ` : ""}

    ${scene.exampleJP ? `
    <div class="reading">
        ${scene.exampleJP}
    </div>
    ` : ""}

    ${scene.exampleEN ? `
    <div class="translation">
        ${scene.exampleEN}
    </div>
    ` : ""}

    ${scene.image ? `
    <img src="${scene.image}" class="zoomable">
    ` : ""}

    ${scene.audio ? `
    <audio controls preload="metadata" class="lesson-audio">
        <source src="${scene.audio}">
    </audio>
    ` : ""}
</div>
    `;
}

// ---------------------------------
// Basic Sentences
// ---------------------------------
else if (scene.type === "Basic Sentences Summary") {

    div.innerHTML = `
<div class="summary-page">

    <h1>${scene.title}</h1>

<p class="summary-subtitle">
    ${scene.subtitle}
</p>

${scene.intro || ""}

<div class="summary-divider"></div>

    <ul class="summary-list">
        ${scene.items.map(item => `
            <li class="${item.class}">
                ${item.text}
            </li>
        `).join("")}
    </ul>

</div>
    `;
}

else if (scene.type === "Basic Sentences") {

    div.innerHTML = `
<div class="grammar-page">

    <div class="centered-header-group">
        <h2 class="${scene.color}">
            ${scene.title}
        </h2>

        <div class="subheader ${scene.color}">
            ${scene.subtitle}
        </div>
    </div>

    <div style="display:flex;justify-content:center;margin-bottom:60px;">
        <div class="example-card">

            <p class="ex-jp ${scene.color}">
                ${scene.exampleJP}
            </p>

            <p class="ex-en">
                ${scene.exampleEN}
            </p>

        </div>
    </div>

    <ul class="fact-list">
        ${scene.facts.map(f => `
            <li class="${scene.color === "hl-verb"
                ? "v-fact"
                : scene.color === "hl-adj"
                    ? "a-fact"
                    : "n-fact"}">
                ${f}
            </li>
        `).join("")}
    </ul>

</div>
`;
}

        
        // ---------------------------------
        // Standard Scene
        // ---------------------------------
        else if (scene.type === "Immersion") {
            let imageHTML = "";
            if (scene.images) {
                imageHTML = `
                    <div class="img-group">
                        ${scene.images.map(img =>
                            `<img src="${img}" class="zoomable">`
                        ).join("")}
                    </div>
                `;
            }
            else if (scene.image) {
                imageHTML = `
                    <img src="${scene.image}" class="zoomable">
                `;
            }
            div.innerHTML = `
                ${imageHTML}
                <p
                    lang="ja"
                    class="Japanese ${scene.japaneseClass || ""}">
                    ${scene.japanese}
                </p>
                <p class="English">
                    ${scene.english || ""}
                </p>
                ${scene.note ? `
                    <p class="Note">
                        ${scene.note}
                    </p>
                ` : ""}
                ${scene.audio ? `
                    <audio controls preload="metadata" class="lesson-audio">
                        <source src="${scene.audio}">
                    </audio>
                ` : ""}
            `;
        }
        slider.appendChild(div);
    });
}








// =========================================
// Initialize Lesson
// =========================================
function initializeLesson() {
    const scenes = document.querySelectorAll(".scene");
    const startBtn =
        document.getElementById("startBtn");
    const prevBtn =
        document.getElementById("prevBtn");
    const nextBtn =
        document.getElementById("nextBtn");
    const jumpSelect =
        document.getElementById("jumpToSlide");
    const progressBar =
        document.getElementById("progressBar");
    const toggleEnglishBtn =
        document.getElementById("toggleEnglish");
    const toggleHighlightsBtn =
        document.getElementById("toggleHighlights");
    let currentIndex = parseInt(
    sessionStorage.getItem(`lesson-${lesson}`)
) || 0;
    let highlightsEnabled = true;
    
   document.querySelectorAll(".summary-list li[data-slide]").forEach(item => {
    item.addEventListener("click", () => {
        currentIndex = parseInt(item.dataset.slide);
        updateSlides();
    });
});

// =====================================
// Update Header
// =====================================
function updateHeader() {

    const summary =
        document.getElementById("lessonSummaryLink");

    const vocab =
        document.getElementById("lessonVocabularyLink");

    const immersion =
        document.getElementById("lessonImmersionLink");

    if (!summary || !vocab || !immersion) return;

    summary.classList.remove("active");
    vocab.classList.remove("active");
    immersion.classList.remove("active");

    const currentScene = window.lessonScenes[currentIndex];

    if (!currentScene) return;

    switch (currentScene.type) {

        case "Summary":
            summary.classList.add("active");
            break;

        case "Vocabulary":
            vocab.classList.add("active");
            break;

        default:
            immersion.classList.add("active");
            break;
    }
}
    
    // =====================================
    // Auto Play Audio
    // =====================================
    function playCurrentAudio() {
        document.querySelectorAll("audio").forEach(audio => {
            audio.pause();
            audio.currentTime = 0;
        });
        const scene = scenes[currentIndex];
        if (!scene) return;
        const audio = scene.querySelector("audio");
        if (!audio) return;
        audio.play().catch(() => {});
    }
    // =====================================
    // Update Slides
    // =====================================
    function updateSlides() {
scenes.forEach((scene, i) => {
    scene.classList.remove("active", "prev", "next");

    if (i === currentIndex)
        scene.classList.add("active");
    else if (i < currentIndex)
        scene.classList.add("prev");
    else
        scene.classList.add("next");
});
        const total =
            Math.max(scenes.length - 1, 1);
        progressBar.style.width =
            `${currentIndex / total * 100}%`;
startBtn.disabled = currentIndex === 0;

prevBtn.textContent =
    currentIndex === 0
        ? "Library"
        : "Prev";
        jumpSelect.value =
            currentIndex;
        nextBtn.textContent =
            currentIndex === scenes.length - 1
                ? "Library"
                : "Next";
        playCurrentAudio();
        updateHeader();
            sessionStorage.setItem(
    `lesson-${lesson}`,
    currentIndex
);
    }
    

    // =====================================
    // Highlight Vocabulary
    // =====================================
    function applyHighlights() {
        const words =
            getWordsForLesson(`${lesson}`)
                .map(v => v.word);
        if (words.length === 0) return;
        const sorted =
            [...new Set(words)]
                .sort((a, b) => b.length - a.length);
        const regex =
            new RegExp(`(${sorted.join("|")})`, "g");
        document.querySelectorAll(".Japanese").forEach(el => {
            if (el.dataset.highlighted) return;
            el.innerHTML =
                el.innerHTML.replace(
                    regex,
                    '<span class="highlight">$1</span>'
                );
            el.dataset.highlighted = "true";
        });
    }
        // =====================================
    // Image Zoom
    // =====================================
    document.querySelectorAll(".zoomable").forEach(img => {
        img.onclick = () => {
            document.querySelectorAll(".zoomable.zoomed").forEach(other => {
                if (other !== img) {
                    other.classList.remove("zoomed");
                }
            });
            img.classList.toggle("zoomed");
        };
    });
    // =====================================
    // English Toggle
    // =====================================
    document.querySelectorAll(".English").forEach(el => {
        el.onclick = () => {
            el.classList.toggle("revealed");
        };
    });
    toggleEnglishBtn.onclick = () => {
        document.querySelectorAll(".English").forEach(el => {
            el.classList.toggle("revealed");
        });
    };
    // =====================================
    // Highlight Toggle
    // =====================================
    toggleHighlightsBtn.onclick = () => {
        highlightsEnabled = !highlightsEnabled;
        document.body.classList.toggle(
            "no-highlights",
            !highlightsEnabled
        );
        toggleHighlightsBtn.textContent =
            highlightsEnabled
                ? "Highlight ON"
                : "Highlight OFF";
    };
    // =====================================
    // Navigation
    // =====================================
    nextBtn.onclick = () => {
        if (currentIndex < scenes.length - 1) {
            currentIndex++;
            updateSlides();
        }
        else {
            window.location.href = "../index.html";
        }
    };
prevBtn.onclick = () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlides();
    }
    else {
        window.location.href = "../index.html";
    }
};
    jumpSelect.onchange = e => {
        currentIndex = parseInt(e.target.value);
        updateSlides();
    };
    startBtn.onclick = () => {
    currentIndex = 0;
    updateSlides();
    };

document.getElementById("lessonSummaryLink").onclick = e => {
    e.preventDefault();
    const i = lessonScenes.findIndex(s => s.type === "Summary");
    if (i >= 0) {
        currentIndex = i;
        updateSlides();
    }
};

document.getElementById("lessonVocabularyLink").onclick = e => {
    e.preventDefault();
    const i = lessonScenes.findIndex(s => s.type === "Vocabulary");
    if (i >= 0) {
        currentIndex = i;
        updateSlides();
    }
};

document.getElementById("lessonImmersionLink").onclick = e => {
    e.preventDefault();
    const i = lessonScenes.findIndex(s => s.type === "Immersion");
    if (i >= 0) {
        currentIndex = i;
        updateSlides();
    }
};
    
// =====================================
// Keyboard
// =====================================
document.addEventListener("keydown", e => {

    // Ignore shortcuts while typing
    if (
        e.target.tagName === "INPUT" ||
        e.target.tagName === "TEXTAREA" ||
        e.target.tagName === "SELECT"
    ) return;

    switch (e.key.toLowerCase()) {

        case "arrowright":
        case " ":
            e.preventDefault();
            nextBtn.click();
            break;

        case "arrowleft":
            e.preventDefault();
            prevBtn.click();
            break;

        case "s":
            e.preventDefault();
            startBtn.click();
            break;

        case "h":
            e.preventDefault();
            toggleHighlightsBtn.click();
            break;

        case "e":
            e.preventDefault();
            toggleEnglishBtn.click();
            break;

        case "r":
            e.preventDefault();
            const media = scenes[currentIndex].querySelector("audio, video");
            if (media) {
                media.currentTime = 0;
                media.play().catch(() => {});
            }
            break;

        case "l":
            e.preventDefault();
            window.location.href = "../index.html";
            break;
    }
});
    // =====================================
    // Populate Slide Selector
    // =====================================
jumpSelect.innerHTML = "";

const totalSlides = scenes.length;

scenes.forEach((_, i) => {
    const current = String(i + 1).padStart(2, "0");
    const total = String(totalSlides).padStart(2, "0");

    jumpSelect.add(
        new Option(`Slide ${current} / ${total}`, i)
    );
});

    // =====================================
    // Start
    // =====================================
    applyHighlights();
    updateSlides();
}