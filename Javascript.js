
fetch("https://raw.githubusercontent.com/Tw1nTwin/Mensch-Aergere-dich-nicht-/main/ReadMe.json",{
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "habub"})
})
.then(res => {
    return res.json()
    })
    .then(data => console.log(data))
    .catch(error => console.log(error))