const darkModeButton = document.getElementById('dark-mode');
const removeFavoritesButton = document.getElementById('remove-from-favorites');
const addToFavorites = document.getElementById('add-to-favorites');
const lightModeButton = document.getElementById('light-mode');
const clearStorage = document.getElementById('clear-storage');
const clearColorPreferenceButton = document.getElementById('clear-color-preference');

document.addEventListener('DOMContentLoaded', (e) => {
    // an item of a storage (session or local) when does not exist its value is null
    const colorPreference = localStorage.getItem('color-preference');
    if (colorPreference) {
        colorPreferenceChooser(colorPreference);
    }

    const arr = [1];
    const stringifiedArr = JSON.stringify(arr);

    localStorage.setItem('favorite-products', stringifiedArr);

    const parsedArr = JSON.parse(localStorage.getItem('favorite-products'))
});

darkModeButton.onclick = function () {
    colorPreferenceChooser('dark');
    window.localStorage.setItem('color-preference', 'dark');
}

lightModeButton.onclick = function () {
    colorPreferenceChooser('light');
    window.localStorage.setItem('color-preference', 'light');
}

clearStorage.onclick = function () {
    colorPreferenceChooser();
    window.localStorage.clear();
}

function colorPreferenceChooser(color = 'light') {
    document.body.style.backgroundColor = color === 'light' ? 'white' : 'black';
}

addToFavorites.onclick = function () {
    window.localStorage.setItem('favorite', '1');
}

removeFavoritesButton.onclick = function () {
    window.localStorage.removeItem('favorite');
}

clearColorPreferenceButton.onclick = function () {
    window.localStorage.removeItem('color-preference');
    colorPreferenceChooser();
}