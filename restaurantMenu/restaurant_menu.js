const breakfastMenu = ['Pancakes -$12', 'Eggs Benedict -$23', 'Oatmeal -$78', 'Frittata -$45'];
const mainCourseMenu = ['Steak -$34', 'Pasta -$22', 'Burger -$11', 'Salmon -$4'];
const dessertMenu = ['Cake -$5', 'Ice Cream -$67', 'Pudding -$98', 'Fruit Salad -$29'];

const breakfastMenuItemsHTML = breakfastMenu.map((item,index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach ((item, index) => {
    mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;
})
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i=0; i<dessertMenu.length; i++){
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;