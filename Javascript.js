fetch('https://raw.githubusercontent.com/Tw1nTwin/Mensch-Aergere-dich-nicht-/main/ReadMe.json')
    .then(res => res.json())
    .then(data => console.log(data))