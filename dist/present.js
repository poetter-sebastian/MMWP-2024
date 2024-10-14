Reveal.initialize({
    maxScale: 1.0,
    margin: 0.2,
    controls: true,
    progress: true,
    center: true,
    hash: true,
    slideNumber: 'c/t',
    plugins: [RevealMarkdown, RevealHighlight, RevealNotes, CopyCode, Simplemenu],
    simplemenu: {
        barhtml: {
            header: "<div class='menubar' style='font-size: 1.5rem'><ul class='menu'></ul></div>",
            footer: ""
        }
    },
});