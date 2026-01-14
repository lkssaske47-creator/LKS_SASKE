const input = document.getElementById("searchInput");
const content = document.getElementById("content");

// Trigger search on Enter key
input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        searchText();
    }
});

function searchText() {
    const query = input.value.trim().toLowerCase();
    if (query === "") return;

    // Remove previous highlights
    content.innerHTML = content.innerHTML.replace(/<mark>|<\/mark>/g, "");

    const text = content.innerHTML;
    const regex = new RegExp(query, "gi");

    if (text.match(regex)) {
        // Highlight all matches
        content.innerHTML = text.replace(regex, match => `<mark>${match}</mark>`);

        // Jump first match to top
        const firstMark = content.querySelector("mark");
        if (firstMark) {
            const offsetTop = firstMark.offsetTop;
            window.scrollTo(0, offsetTop); // instant jump
        }
    } else {
        alert("No results found");
    }
}