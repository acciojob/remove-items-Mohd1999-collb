//your JS code here. If required.
const colorSelect = document.getElementById('colorSelect');
// console.log(temp)
document.getElementsByTagName('input')[0].addEventListener('click', ()=>{
    // console.log();
    colorSelect.remove(colorSelect.selectedIndex);
})