menu_list_items = ["Veggie Salad" , "Raita" , "Biryani" , "Aloo Paratha"];
function show(){
document.getElementById("dishes").innerHTML = menu_list_items;
}
function add(){
    dish_new = document.getElementById("name_of_new_dish").value;
    menu_list_items.push(dish_new);
    menu_list_items.sort();
    document.getElementById("dishes").innerHTML = menu_list_items;
}
