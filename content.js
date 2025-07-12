document.addEventListener("keydown", function (e) {
    const isPlainEnter =
        e.key === "Enter" &&
        !e.shiftKey &&
        !e.ctrlKey &&
        !e.altKey &&
        !e.metaKey;

    const isComposerFocused =
        document.activeElement?.getAttribute("data-testid") === "composer-input";

    if (isPlainEnter && isComposerFocused) {
        const btn = document.querySelector('[data-testid="submit-button"]');
        if (btn) btn.click();
    }
});
