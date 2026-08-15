$(document).ready(function() {
    const envelope = $("#envelope");
    const btnOpen = $("#open");
    const music = document.getElementById("loveSong");
    const heartsContainer = $(".hearts");

    // Try to start the music the moment the page opens. Browsers usually
    // block audio with sound until there's been a user gesture, so if this
    // gets blocked we fall back to starting on the very first tap/click
    // anywhere on the page (not just the "Open" button).
    music.volume = 0.7;
    const autoplayAttempt = music.play();
    if (autoplayAttempt !== undefined) {
        autoplayAttempt
            .then(() => console.log("Music autoplaying"))
            .catch(() => {
                const startOnFirstTouch = () => {
                    music.play().catch(() => {});
                };
                document.addEventListener("click", startOnFirstTouch, { once: true });
                document.addEventListener("touchstart", startOnFirstTouch, { once: true });
            });
    }

    // Stop this page's music if another same-origin tab (e.g. the memories
    // page's Play Video button) asks everyone to go quiet.
    if ("BroadcastChannel" in window) {
        const audioChannel = new BroadcastChannel("labidabs-audio");
        audioChannel.onmessage = (e) => {
            if (e.data === "stop") {
                music.pause();
            }
        };
    }

    // Function to create floating hearts
    function createHearts() {
        heartsContainer.empty();
        for (let i = 0; i < 8; i++) {
            let heart = $("<div class='heart'></div>");
            heart.css({
                left: Math.random() * 80 + 10 + "%",
                animationDelay: Math.random() * 1 + "s"
            });
            heartsContainer.append(heart);
            setTimeout(() => heart.remove(), 3000);
        }
    }

    // Function to create falling flowers
    function createFlower() {
        const flower = document.createElement("div");
        flower.classList.add("flower");

        const flowers = ["🌸", "🌷", "🌺", "🌼", "🪻"];
        flower.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];

        flower.style.left = Math.random() * 100 + "vw";
        flower.style.fontSize = (20 + Math.random() * 20) + "px";
        const duration = 8 + Math.random() * 7;
        flower.style.animationDuration = duration + "s";

        document.body.appendChild(flower);
        setTimeout(() => flower.remove(), duration * 1000);
    }

    // Start continuous flowers falling
    function startFlowers() {
        setInterval(createFlower, 600); // a new flower every 0.6s
    }

    // Function to open the envelope
    function openEnvelope() {
        envelope.addClass("open").removeClass("close");
        createHearts();

        // Make sure music is playing (iOS-friendly: this click itself
        // counts as a user gesture even if the earlier autoplay attempt
        // was blocked)
        music.volume = 0.7;
        music.play().catch(() => {});

        // Start falling flowers
        startFlowers();
    }

    // Bind open button
    btnOpen.click(openEnvelope);

    // Cursor hearts effect
    document.addEventListener("mousemove", function(e) {
        const heart = document.createElement("div");
        heart.classList.add("cursor-heart");
        heart.style.left = e.clientX + "px";
        heart.style.top = e.clientY + "px";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 1000);
    });
});

// Back button
function goBack() {
    window.history.back();
}
