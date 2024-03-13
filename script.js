function submit() {
    let input = document.getElementById('input').value
    document.getElementById('output').textContent = input
}

function submit_enter(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById('input').submit();
    }
}