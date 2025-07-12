document.addEventListener("keydown", function (e) {
    const isPlainEnter =
        e.key === "Enter" &&
        !e.shiftKey &&
        !e.ctrlKey &&
        !e.altKey &&
        !e.metaKey;

    if (isPlainEnter) {
        const btn = document.querySelector('[data-testid="submit-button"]');
        if (btn) btn.click();
    }
});
