// Add any custom JavaScript functionality here
document.addEventListener("DOMContentLoaded", () => {
  console.log("Eat2Fit website loaded successfully!");
});

// mealplanner steps
function nextStep(step) {
  document.getElementById(`step${step}`).classList.add("hidden");
  document.getElementById(`step${step + 1}`).classList.remove("hidden");
}

// const mealPlans = {
//   weight_loss: {
//     vegan: [
//       {
//         meal: "BREAKFAST",
//         food: "Chia Pudding with Berries",
//         img: "https://www.thehealthymaven.com/wp-content/uploads/2016/03/Very-Berry-Chia-Pudding-4-600x900.png",
//         calories: 300,
//       },
//       {
//         meal: "LUNCH",
//         food: "Quinoa Salad with Chickpeas & Avocado",
//         img: "https://hurrythefoodup.com/wp-content/uploads/2021/02/Avocado-Chickpea-Salad-with-Quinoa-3.jpg",
//         calories: 500,
//       },
//     ],
//     keto: [
//       {
//         meal: "BREAKFAST",
//         food: "Scrambled Eggs with Avocado",
//         img: "https://th.bing.com/th/id/OIP.9PJEisA0fl6FteOA8I3VMQHaJQ?rs=1&pid=ImgDetMain",
//         calories: 350,
//       },
//       {
//         meal: "LUNCH",
//         food: "Grilled Chicken with Broccoli & Butter Sauce",
//         img: "https://th.bing.com/th/id/OIP.L9PoogdvSFhZlDJQFJ1z1gHaKX?rs=1&pid=ImgDetMain",
//         calories: 600,
//       },
//     ],
//     vegetarian: [
//       {
//         meal: "BREAKFAST",
//         food: "Oatmeal with Peanut Butter & Banana",
//         img: "https://www.eatingbirdfood.com/wp-content/uploads/2017/01/Peanut-Butter-Banana-Chia-Oatmeal-4.jpg",
//         calories: 600,
//       },
//       {
//         meal: "LUNCH",
//         food: "Paneer Curry with Brown Rice & Chapati",
//         img: "https://th.bing.com/th/id/OIP.tDwOnHNXYsPUdLzvwNzwrQHaHa?rs=1&pid=ImgDetMain",
//         calories: 900,
//       },
//     ],
//     high_protein: [
//       {
//         meal: "BREAKFAST",
//         food: "Greek Yogurt with Nuts & Honey",
//         img: "https://as1.ftcdn.net/v2/jpg/05/45/79/96/1000_F_545799645_aT212Tl4LznkMFJhc9rlsJ34A0PXadVB.jpg",
//         calories: 500,
//       },
//       {
//         meal: "LUNCH",
//         food: "Grilled Steak with Sweet Potatoes & Butter",
//         img: "https://th.bing.com/th/id/OIP.BrWAEYEWPh8wiC88tyhQVgAAAA?rs=1&pid=ImgDetMain",
//         calories: 1000,
//       },
//     ],
//     non_vegetarian: [
//       {
//         meal: "BREAKFAST",
//         food: "Whole Eggs with Sausages & Toast",
//         img: "https://littlehousebigalaska.com/wp-content/uploads/2022/02/Air-Fryer-Breakfast-Sausages-5.jpg",
//         calories: 800,
//       },
//       {
//         meal: "LUNCH",
//         food: "Grilled Chicken with Rice & Avocado",
//         img: "https://th.bing.com/th/id/OIP.vN6-k2QP2i9pmYh1Bm_YdQHaLH?rs=1&pid=ImgDetMain",
//         calories: 1200,
//       },
//     ],
//   },
//   weight_gain: {
//     vegan: [
//       {
//         meal: "BREAKFAST",
//         food: "Smoothie with Almond Milk & Chia Seeds",
//         img: "https://th.bing.com/th/id/OIP.J9mFkhGBxsQ3i6rENmp58gHaJ4?rs=1&pid=ImgDetMain",
//         calories: 500,
//       },
//       {
//         meal: "LUNCH",
//         food: "Lentil Stew with Brown Rice",
//         img: "https://www.theyucatantimes.com/wp-content/uploads/2023/03/lentil-soup-sq-029.jpg",
//         calories: 700,
//       },
//     ],
//     keto: [
//       {
//         meal: "BREAKFAST",
//         food: "Bacon & Eggs with Avocado",
//         img: "https://th.bing.com/th/id/OIP.9PJEisA0fl6FteOA8I3VMQHaJQ?rs=1&pid=ImgDetMain",
//         calories: 600,
//       },
//       {
//         meal: "LUNCH",
//         food: "Fatty Steak with Butter & Asparagus",
//         img: "https://th.bing.com/th/id/OIP.BrWAEYEWPh8wiC88tyhQVgAAAA?rs=1&pid=ImgDetMain",
//         calories: 900,
//       },
//     ],
//     vegetarian: [
//       {
//         meal: "BREAKFAST",
//         food: "Banana Pancakes with Honey",
//         img: "https://th.bing.com/th/id/OIP.tDwOnHNXYsPUdLzvwNzwrQHaHa?rs=1&pid=ImgDetMain",
//         calories: 700,
//       },
//       {
//         meal: "LUNCH",
//         food: "Cheese & Spinach Stuffed Paneer",
//         img: "https://th.bing.com/th/id/OIP.VMW-nDIbOuBLdSToo11TkgHaLG?rs=1&pid=ImgDetMain",
//         calories: 800,
//       },
//     ],
//     high_protein: [
//       {
//         meal: "BREAKFAST",
//         food: "Protein Shake with Peanut Butter",
//         img: "https://th.bing.com/th/id/OIP.kYzP0D-dVGvtkkt0u4EXggAAAA?rs=1&pid=ImgDetMain",
//         calories: 700,
//       },
//       {
//         meal: "LUNCH",
//         food: "Grilled Salmon with Quinoa",
//         img: "https://th.bing.com/th/id/OIP.ncnelRMGb4lYiF1Gl4iUkAHaLH?rs=1&pid=ImgDetMain",
//         calories: 1000,
//       },
//     ],
//     non_vegetarian: [
//       {
//         meal: "BREAKFAST",
//         food: "Egg & Sausage Muffins",
//         img: "https://th.bing.com/th/id/OIP.hOvcCQUox0XDScAJQlBA6gHaHa?rs=1&pid=ImgDetMain",
//         calories: 900,
//       },
//       {
//         meal: "LUNCH",
//         food: "Beef Stir Fry with Rice",
//         img: "https://th.bing.com/th/id/OIP.vN6-k2QP2i9pmYh1Bm_YdQHaLH?rs=1&pid=ImgDetMain",
//         calories: 1200,
//       },
//     ],
//   },
//   weight_maintain: {
//     vegan: [
//       {
//         meal: "BREAKFAST",
//         food: "Green Smoothie with Almond Milk",
//         img: "https://th.bing.com/th/id/OIP.VNQ_pH4AnrT_s18u0s5q1QHaLH?rs=1&pid=ImgDetMain",
//         calories: 400,
//       },
//       {
//         meal: "LUNCH",
//         food: "Grilled Vegetable Wrap with Hummus",
//         img: "https://th.bing.com/th/id/OIP.mU0VZX7pV9OdxqptYr7xnAHaE8?rs=1&pid=ImgDetMain",
//         calories: 600,
//       },
//     ],
//     keto: [
//       {
//         meal: "BREAKFAST",
//         food: "Cheese Omelet with Spinach",
//         img: "https://th.bing.com/th/id/OIP.4P5kwTfdsb3z2QyZYlMmVAHaLH?rs=1&pid=ImgDetMain",
//         calories: 500,
//       },
//       {
//         meal: "LUNCH",
//         food: "Grilled Fish with Avocado Salad",
//         img: "https://th.bing.com/th/id/OIP.oOl8WB16cMxjzZEdg8h_7gHaLH?rs=1&pid=ImgDetMain",
//         calories: 700,
//       },
//     ],
//     vegetarian: [
//       {
//         meal: "BREAKFAST",
//         food: "Fruit & Nut Yogurt Bowl",
//         img: "https://th.bing.com/th/id/OIP.0uYcsHSxJcW-6RVyQe_e_wHaLH?rs=1&pid=ImgDetMain",
//         calories: 450,
//       },
//       {
//         meal: "LUNCH",
//         food: "Vegetable Stir Fry with Tofu",
//         img: "https://th.bing.com/th/id/OIP.KMiXcD8pi4yJcSxwMGbWxAHaE8?rs=1&pid=ImgDetMain",
//         calories: 650,
//       },
//     ],
//     high_protein: [
//       {
//         meal: "BREAKFAST",
//         food: "Scrambled Eggs with Cottage Cheese",
//         img: "https://th.bing.com/th/id/OIP.hEaeW7h-kt3qTtWgAboXHgHaLH?rs=1&pid=ImgDetMain",
//         calories: 550,
//       },
//       {
//         meal: "LUNCH",
//         food: "Grilled Chicken Breast with Quinoa",
//         img: "https://th.bing.com/th/id/OIP.vN6-k2QP2i9pmYh1Bm_YdQHaLH?rs=1&pid=ImgDetMain",
//         calories: 750,
//       },
//     ],
//     non_vegetarian: [
//       {
//         meal: "BREAKFAST",
//         food: "Omelette with Smoked Salmon",
//         img: "https://th.bing.com/th/id/OIP.xxxxxxx?rs=1&pid=ImgDetMain",
//         calories: 600,
//       },
//       {
//         meal: "LUNCH",
//         food: "Grilled Fish with Roasted Vegetables",
//         img: "https://th.bing.com/th/id/OIP.yyyyyyy?rs=1&pid=ImgDetMain",
//         calories: 800,
//       },
//     ],
//   },
// };

const mealPlans = {
  weight_loss: {
    vegan: [
      {
        meal: "BREAKFAST",
        food: "Chia Pudding with Berries",
        img: "https://www.thehealthymaven.com/wp-content/uploads/2016/03/Very-Berry-Chia-Pudding-4-600x900.png",
        calories: 300,
      },
      {
        meal: "LUNCH",
        food: "Quinoa Salad with Chickpeas & Avocado",
        img: "https://hurrythefoodup.com/wp-content/uploads/2021/02/Avocado-Chickpea-Salad-with-Quinoa-3.jpg",
        calories: 500,
      },
      {
        meal: "DINNER",
        food: "Vegan Buddha Bowl with Tahini Dressing",
        img: "https://th.bing.com/th/id/OIP.038D8cSmn-f3jZ4ElfOHRwHaJQ?rs=1&pid=ImgDetMain",
        calories: 400,
      },
    ],
    keto: [
      {
        meal: "BREAKFAST",
        food: "Scrambled Eggs with Avocado",
        img: "https://th.bing.com/th/id/OIP.9PJEisA0fl6FteOA8I3VMQHaJQ?rs=1&pid=ImgDetMain",
        calories: 350,
      },
      {
        meal: "LUNCH",
        food: "Grilled Chicken with Broccoli & Butter Sauce",
        img: "https://th.bing.com/th/id/OIP.L9PoogdvSFhZlDJQFJ1z1gHaKX?rs=1&pid=ImgDetMain",
        calories: 600,
      },
      {
        meal: "DINNER",
        food: "Zucchini Noodles with Pesto & Grilled Shrimp",
        img: "https://diethood.com/wp-content/uploads/2015/12/Pesto-Zucchini-Noodles-Shrimp-1.jpg",
        calories: 450,
      },
    ],
    vegetarian: [
      {
        meal: "BREAKFAST",
        food: "Oatmeal with Peanut Butter & Banana",
        img: "https://www.eatingbirdfood.com/wp-content/uploads/2017/01/Peanut-Butter-Banana-Chia-Oatmeal-4.jpg",
        calories: 600,
      },
      {
        meal: "LUNCH",
        food: "Paneer Curry with Brown Rice & Chapati",
        img: "https://th.bing.com/th/id/OIP.tDwOnHNXYsPUdLzvwNzwrQHaHa?rs=1&pid=ImgDetMain",
        calories: 900,
      },
      {
        meal: "DINNER",
        food: "Vegetable Stir Fry with Tofu",
        img: "https://www.eatingbirdfood.com/wp-content/uploads/2019/11/Tofu-Stir-Fry-3.jpg",
        calories: 500,
      },
    ],
    high_protein: [
      {
        meal: "BREAKFAST",
        food: "Greek Yogurt with Nuts & Honey",
        img: "https://as1.ftcdn.net/v2/jpg/05/45/79/96/1000_F_545799645_aT212Tl4LznkMFJhc9rlsJ34A0PXadVB.jpg",
        calories: 500,
      },
      {
        meal: "LUNCH",
        food: "Grilled Steak with Sweet Potatoes & Butter",
        img: "https://th.bing.com/th/id/OIP.BrWAEYEWPh8wiC88tyhQVgAAAA?rs=1&pid=ImgDetMain",
        calories: 1000,
      },
      {
        meal: "DINNER",
        food: "Grilled Salmon with Asparagus",
        img: "https://www.surlatable.com/dw/image/v2/BCJL_PRD/on/demandware.static/-/Sites-shop-slt-master-catalog-recipes/default/dw952d1edb/images/large/REC_301896_Salmon_Asparagus.jpg?sw=1350&sh=1000&sm=fit",
        calories: 700,
      },
    ],
    non_vegetarian: [
      {
        meal: "BREAKFAST",
        food: "Whole Eggs with Sausages & Toast",
        img: "https://littlehousebigalaska.com/wp-content/uploads/2022/02/Air-Fryer-Breakfast-Sausages-5.jpg",
        calories: 800,
      },
      {
        meal: "LUNCH",
        food: "Grilled Chicken with Rice & Avocado",
        img: "https://th.bing.com/th/id/OIP.vN6-k2QP2i9pmYh1Bm_YdQHaLH?rs=1&pid=ImgDetMain",
        calories: 1200,
      },
      {
        meal: "DINNER",
        food: "Beef Stir Fry with Vegetables",
        img: "https://www.twopeasandtheirpod.com/wp-content/uploads/2020/03/Beef-Stir-Fry-6.jpg",
        calories: 900,
      },
    ],
  },
  weight_gain: {
    vegan: [
      {
        meal: "BREAKFAST",
        food: "Smoothie with Almond Milk & Chia Seeds",
        img: "https://th.bing.com/th/id/OIP.J9mFkhGBxsQ3i6rENmp58gHaJ4?rs=1&pid=ImgDetMain",
        calories: 500,
      },
      {
        meal: "LUNCH",
        food: "Lentil Stew with Brown Rice",
        img: "https://www.theyucatantimes.com/wp-content/uploads/2023/03/lentil-soup-sq-029.jpg",
        calories: 700,
      },
      {
        meal: "DINNER",
        food: "Vegan Mac & Cheese with Broccoli",
        img: "https://dietitiandebbie.com/wp-content/uploads/2019/06/Vegan-Macaroni-and-Cheese-with-Broccoli-2.jpg",
        calories: 800,
      },
      {
        meal: "SNACK",
        food: "Trail Mix with Nuts & Dried Fruits",
        img: "https://www.foodandwine.com/thmb/jqL0yU33CIpjJpo-MzIgimsxepk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/201012-xl-fruit-nut-trail-mix-2000-4d001d1e962e49708304a1cd2f648cd4.jpg",
        calories: 300,
      },
      {
        meal: "SNACK",
        food: "Avocado Toast with Chia Seeds",
        img: "https://i.pinimg.com/736x/1d/a8/b7/1da8b778e57d62dc7e8d9baf962bf260.jpg",
        calories: 400,
      },
      {
        meal: "SNACK",
        food: "Protein Smoothie with Spinach & Banana",
        img: "https://th.bing.com/th/id/OIP.C1895VFv4flniA-82tbprgHaLH?rs=1&pid=ImgDetMain",
        calories: 350,
      },
    ],
    keto: [
      {
        meal: "BREAKFAST",
        food: "Bacon & Eggs with Avocado",
        img: "https://cookinglowkey.com/wp-content/uploads/2020/04/Low-Key-Breakfast-Toast-980x980.jpg",
        calories: 600,
      },
      {
        meal: "LUNCH",
        food: "Fatty Steak with Butter & Asparagus",
        img: "https://th.bing.com/th/id/OIP.wXyT0XZmXq_dlsIkuyvZuAAAAA?rs=1&pid=ImgDetMain",
        calories: 900,
      },
      {
        meal: "DINNER",
        food: "Keto Pizza with Cauliflower Crust",
        img: "https://th.bing.com/th/id/OIP.KzYPbCiQ4lrXgkZGPQY7fQHaHa?rs=1&pid=ImgDetMain",
        calories: 700,
      },
      {
        meal: "SNACK",
        food: "Cheese & Pepperoni Roll-Ups",
        img: "https://th.bing.com/th/id/OIP.D6vLZsebcnJwb8w_JRqhsAHaLF?rs=1&pid=ImgDetMain",
        calories: 400,
      },
      {
        meal: "SNACK",
        food: "Keto Fat Bombs",
        img: "https://www.wholesomeyum.com/wp-content/uploads/2018/05/wholesomeyum-fat-bomb-recipe-keto-chocolate-fat-bombs.jpg",
        calories: 300,
      },
      {
        meal: "SNACK",
        food: "Avocado & Tuna Salad",
        img: "https://th.bing.com/th/id/OIP.z6BuevB_V8H5NrryAlS9UQHaLH?rs=1&pid=ImgDetMain",
        calories: 350,
      },
    ],
    vegetarian: [
      {
        meal: "BREAKFAST",
        food: "Banana Pancakes with Honey",
        img: "https://woolworths.scene7.com/is/image/woolworthsgroupprod/0605_bananahoneypancakes?wid=1300&hei=1300",
        calories: 700,
      },
      {
        meal: "LUNCH",
        food: "Cheese & Spinach Stuffed Paneer",
        img: "https://c8.alamy.com/comp/PT4JHM/saag-paneer-spinach-with-indian-cheese-PT4JHM.jpg",
        calories: 800,
      },
      {
        meal: "DINNER",
        food: "Vegetable Lasagna",
        img: "https://www.elmlea.com/-/media/project/upfield/whitelabels/elmlea/assets/recipes/synced-images/ccca5ac9-f248-4ac7-9fb3-89a58b9fc826.jpg",
        calories: 900,
      },
      {
        meal: "SNACK",
        food: "Yogurt with Granola & Berries",
        img: "https://th.bing.com/th/id/OIP.Cy7OMa6YhfLVho1hO_1OkQHaLH?rs=1&pid=ImgDetMain",
        calories: 300,
      },
      {
        meal: "SNACK",
        food: "Peanut Butter & Banana Toast",
        img: "https://th.bing.com/th/id/OIP.SF3H7bECIZ6j3uWgCs3o8QHaHa?rs=1&pid=ImgDetMain",
        calories: 400,
      },
      {
        meal: "SNACK",
        food: "Trail Mix with Dark Chocolate",
        img: "https://www.studiodelicious.com/wp-content/uploads/2017/09/dark-chocoalte-trail-mix-12-12-720x720.jpg",
        calories: 350,
      },
    ],
    high_protein: [
      {
        meal: "BREAKFAST",
        food: "Protein Shake with Peanut Butter",
        img: "https://th.bing.com/th/id/OIP.kYzP0D-dVGvtkkt0u4EXggAAAA?rs=1&pid=ImgDetMain",
        calories: 700,
      },
      {
        meal: "LUNCH",
        food: "Grilled Salmon with Quinoa",
        img: "https://th.bing.com/th/id/OIP.3d11tWT-yBzSwBzaK-nAkAHaJQ?rs=1&pid=ImgDetMain",
        calories: 1000,
      },
      {
        meal: "DINNER",
        food: "Grilled Chicken with Sweet Potatoes",
        img: "https://www.lecremedelacrumb.com/wp-content/uploads/2017/10/honey-roasted-chicken-sweet-potatoes-skillet-103.jpg",
        calories: 800,
      },
      {
        meal: "SNACK",
        food: "Hard-Boiled Eggs with Avocado",
        img: "https://www.skinnytaste.com/wp-content/uploads/2015/01/Avocado-Toast-with-Egg-6.jpg",
        calories: 300,
      },
      {
        meal: "SNACK",
        food: "Cottage Cheese with Pineapple",
        img: "https://tagvault.org/wp-content/uploads/2024/01/Pineapple-Cottage-Cheese-Salad-Recipe.jpg",
        calories: 350,
      },
      {
        meal: "SNACK",
        food: "Protein Bar",
        img: "https://thebigmansworld.com/wp-content/uploads/2022/06/protein-bars-recipe.jpg",
        calories: 400,
      },
    ],
    non_vegetarian: [
      {
        meal: "BREAKFAST",
        food: "Egg & Sausage Muffins",
        img: "https://www.theculinarycompass.com/wp-content/uploads/2019/07/Egg-Muffins-17-1-735x1103.jpg",
        calories: 900,
      },
      {
        meal: "LUNCH",
        food: "Beef Stir Fry with Rice",
        img: "https://th.bing.com/th/id/OIP.br8Qt1FHPvmzV_lXescndAHaJQ?rs=1&pid=ImgDetMain",
        calories: 1200,
      },
      {
        meal: "DINNER",
        food: "Grilled Steak with Mashed Potatoes",
        img: "https://th.bing.com/th/id/OIP.OeNmSzHL6GyWpEfQxrfVvAHaFj?rs=1&pid=ImgDetMain",
        calories: 1000,
      },
      {
        meal: "SNACK",
        food: "Turkey & Cheese Roll-Ups",
        img: "https://nourishedbynic.com/wp-content/uploads/2023/01/turkey-and-cheese-roll-ups-on-a-plate-720x1083.jpg",
        calories: 400,
      },
      {
        meal: "SNACK",
        food: "Chicken Skewers with Peanut Sauce",
        img: "https://th.bing.com/th/id/OIP.VoHhF5FA0h3vArRGZZSywgHaFX?rs=1&pid=ImgDetMain",
        calories: 350,
      },
      {
        meal: "SNACK",
        food: "Tuna Salad with Crackers",
        img: "https://th.bing.com/th/id/OIP.AfoAEcGznmgL35OuoZUcCAHaFI?rs=1&pid=ImgDetMain",
        calories: 300,
      },
    ],
  },
  weight_maintain: {
    vegan: [
      {
        meal: "BREAKFAST",
        food: "Green Smoothie with Almond Milk",
        img: "https://th.bing.com/th/id/OIP.1d0yGq0H6saKG4v3fkJUawHaLG?rs=1&pid=ImgDetMain",
        calories: 400,
      },
      {
        meal: "LUNCH",
        food: "Grilled Vegetable Wrap with Hummus",
        img: "https://th.bing.com/th/id/OIP.HHh_OGTjjDBhK8iWbpi7QQHaLH?w=1200&h=1800&rs=1&pid=ImgDetMain",
        calories: 600,
      },
      {
        meal: "DINNER",
        food: "Vegan Lentil Curry with Rice",
        img: "https://th.bing.com/th/id/OIP.nc2WQ1tajyjAhuaXbosk-wHaJQ?rs=1&pid=ImgDetMain",
        calories: 500,
      },
      {
        meal: "SNACK",
        food: "Roasted Chickpeas",
        img: "https://bakedbree.com/wp-content/uploads/2023/05/Feature1_Roasted-Chickpeas-scaled.jpg",
        calories: 200,
      },
      {
        meal: "SNACK",
        food: "Apple Slices with Almond Butter",
        img: "https://th.bing.com/th/id/OIP.iPJYdT1uBunFcCY9dXxLvwHaFj?rs=1&pid=ImgDetMain",
        calories: 250,
      },
      {
        meal: "SNACK",
        food: "Dark Chocolate & Nuts",
        img: "https://th.bing.com/th/id/OIP.NbK-8cLR7FS3bp6APF5ETQHaE8?rs=1&pid=ImgDetMain",
        calories: 300,
      },
    ],
    keto: [
      {
        meal: "BREAKFAST",
        food: "Cheese Omelet with Spinach",
        img: "https://th.bing.com/th/id/OIP.tf1TZfKj3Hy4EIDrGESGGQHaHa?w=750&h=750&rs=1&pid=ImgDetMain",
        calories: 500,
      },
      {
        meal: "LUNCH",
        food: "Grilled Fish with Avocado Salad",
        img: "https://www.laylita.com/recipes/wp-content/uploads/2015/03/Grilled-salmon-and-avocado-salad-682x1024.jpg",
        calories: 700,
      },
      {
        meal: "DINNER",
        food: "Keto Chicken Alfredo with Zoodles",
        img: "https://i2.wp.com/thelittlepine.com/wp-content/uploads/2015/08/keto-chicke-alfredo-4.jpg",
        calories: 600,
      },
      {
        meal: "SNACK",
        food: "Cheese Crisps",
        img: "https://th.bing.com/th/id/R.950dacc80fd99dcebac2ad0f75a39c80?rik=eEzAAk7KXa8WsA&riu=http%3a%2f%2finsidekarenskitchen.com%2fwp-content%2fuploads%2f2015%2f05%2fCheese-Crisps-3.jpg&ehk=Kf86BmUP191cxiDGVLKdOix34b%2bTgDJ0U9FcuL8WjOk%3d&risl=&pid=ImgRaw&r=0",
        calories: 200,
      },
      {
        meal: "SNACK",
        food: "Avocado & Bacon Bites",
        img: "https://creativescookery.com/wp-content/uploads/2024/07/Cream-Cheese-Avocado-Bacon-Bites-Recipe-3.jpeg",
        calories: 250,
      },
      {
        meal: "SNACK",
        food: "Keto Chocolate Fat Bombs",
        img: "https://kimspireddiy.com/wp-content/uploads/2020/03/keto-2-ingredient-chocolate-peanut-butter-fat-bombs-1-1.jpg",
        calories: 300,
      },
    ],
    vegetarian: [
      {
        meal: "BREAKFAST",
        food: "Oatmeal with Fresh Berries and Honey",
        img: "https://th.bing.com/th/id/OIP.1na_cJm5TW-wM_2wGEKKyAHaHa?rs=1&pid=ImgDetMain",
        calories: 350,
      },
      {
        meal: "LUNCH",
        food: "Quinoa Salad with Roasted Vegetables",
        img: "https://th.bing.com/th/id/OIP.Z2USy7Wjff49PnxWNMQxbQHaKO?rs=1&pid=ImgDetMain",
        calories: 450,
      },
      {
        meal: "DINNER",
        food: "Vegetable Stir-Fry with Tofu",
        img: "https://www.eatgood4life.com/wp-content/uploads/2015/05/veggie-tofu-stir-fry.jpg",
        calories: 500,
      },
      {
        meal: "SNACK",
        food: "Greek Yogurt with Granola",
        img: "https://mycasualpantry.com/wp-content/uploads/2022/07/Greek-Yogurt-with-Granola-and-Fruit-bowl-1200-%C3%97-1200-px.jpg",
        calories: 200,
      },
      {
        meal: "SNACK",
        food: "Trail Mix with Dried Fruits",
        img: "https://masalachilli.com/wp-content/uploads/2021/11/Homemade-Trail-Mix-5.jpg",
        calories: 250,
      },
    ],
    non_vegetarian: [
      {
        meal: "BREAKFAST",
        food: "Scrambled Eggs with Smoked Salmon",
        img: "https://th.bing.com/th/id/OIP.JIBglqlY2ZnqV-iTp7G73wHaHa?rs=1&pid=ImgDetMain",
        calories: 450,
      },

      {
        meal: "SNACK",
        food: "Hard-Boiled Eggs",
        img: "https://th.bing.com/th/id/OIP.M9JTthlaNYVETSrg3zaHuwAAAA?rs=1&pid=ImgDetMain",
        calories: 150,
      },
      {
        meal: "LUNCH",
        food: "Grilled Chicken Caesar Salad",
        img: "https://2.bp.blogspot.com/-rBQyPCnJKwQ/W6YYBs_oAyI/AAAAAAACEpg/pra_Ah-J3NUGiUOLkTQX4GbMPwsTRNieACLcBGAs/s1600/DSCN1612.JPG",
        calories: 550,
      },
      {
        meal: "SNACK",
        food: "Turkey Jerky",
        img: "https://th.bing.com/th/id/OIP.IzJJxncHq9wSIUlEl9m2AQHaE8?rs=1&pid=ImgDetMain",
        calories: 200,
      },
      {
        meal: "DINNER",
        food: "Beef Steak with Mashed Potatoes",
        img: "https://i.pinimg.com/736x/34/07/f5/3407f5e6e9714a0ef2d3646cdd903467.jpg",
        calories: 700,
      },
    ],
    high_protein: [
      {
        meal: "BREAKFAST",
        food: "Protein Pancakes with Greek Yogurt",
        img: "https://www.ambitiouskitchen.com/wp-content/uploads/2020/12/Yogurt-Pancakes-5.jpg",
        calories: 400,
      },
      {
        meal: "LUNCH",
        food: "Grilled Chicken Breast with Broccoli",
        img: "https://th.bing.com/th/id/OIP.5iGJiOtxgZ5GVLFwIAvg5QAAAA?rs=1&pid=ImgDetMain",
        calories: 600,
      },
      {
        meal: "DINNER",
        food: "Salmon with Quinoa and Asparagus",
        img: "https://img.freepik.com/premium-photo/grilled-salmon-quinoa-steamed-asparagus-omega-3-rich-meal_1003615-4289.jpg",
        calories: 650,
      },
      {
        meal: "SNACK",
        food: "Cottage Cheese with Pineapple",
        img: "https://tagvault.org/wp-content/uploads/2024/01/Pineapple-Cottage-Cheese-Salad-Recipe.jpg",
        calories: 200,
      },
      {
        meal: "SNACK",
        food: "Protein Shake with Almond Milk",
        img: "https://th.bing.com/th/id/OIP.bvcSJEOvQ8Ju1cTega3dKQHaHa?w=720&h=720&rs=1&pid=ImgDetMain",
        calories: 250,
      },
    ],
  },
};

function generateMealPlan() {
  const goal = document.querySelector('input[name="goal"]:checked')?.value;
  const diet = document.querySelector('input[name="meal-plan"]:checked')?.value;
  let mealPlanHTML = "";

  if (goal && diet && mealPlans[goal][diet]) {
    mealPlanHTML = `<div class='bg-transparent p-6'>
      <h4 class='text-3xl text-black font-bold mb-10 text-center tracking-wider'>Your ${goal.replace(
        "_",
        "- "
      )} Meal Plan (${diet})</h4>`;

    mealPlans[goal][diet].forEach((meal) => {
      mealPlanHTML += `
        <div>
          <p class='text-lg font-semibold text-black mb-2'>${meal.meal}</p>
          <div class='meal-item flex items-center gap-6 p-6 bg-gray-50 rounded-lg shadow-md'>
            <img src='${meal.img}' class='w-40 h-32 rounded-md'/>
            <p class='text-gray-800'>${meal.food} - ${meal.calories} kcal</p>
          </div>
        </div>`;
    });
    mealPlanHTML += "</div>";
  } else {
    mealPlanHTML =
      "<p class='text-red-500'>Please select both a goal and a diet type.</p>";
  }

  document.getElementById("meal-plan-result").innerHTML = mealPlanHTML;
  document.getElementById("generate-plan").classList.add("hidden");
}

function calculateCalories() {
  let age = parseInt(document.getElementById("age").value);
  let gender = document.getElementById("gender").value;
  let height = parseInt(document.getElementById("height-cm").value);
  let weight = parseInt(document.getElementById("weight-kg").value);
  let activity = parseFloat(document.getElementById("activity").value);

  if (!age || !height || !weight) {
    document.getElementById("result").innerText = "Please fill all fields.";
    return;
  }

  let BMR =
    gender === "male"
      ? 10 * weight + 6.25 * height - 5 * age + 5
      : 10 * weight + 6.25 * height - 5 * age - 161;
  let calories = BMR * activity;
  document.getElementById(
    "result"
  ).innerText = `Your daily calorie need: ${Math.round(calories)} kcal`;

  setTimeout(() => {
    nextStep(1);
  }, 2000);
}

function nextStep(step) {
  document.getElementById(`step${step}`).classList.add("hidden");
  document.getElementById(`step${step + 1}`).classList.remove("hidden");
}

// function generateMealPlan() {
//   const goal = document.querySelector('input[name="goal"]:checked')?.value; // Get selected radio button value
//   let mealPlanHTML = "";

//   if (goal === "weight_loss") {
//     mealPlanHTML = `
//     <div class="bg-transparent p-6">
//         <h4 class="text-3xl text-black font-bold mb-10 text-center tracking-wider "> Your Weight-Loss Meal-Plan </h4>
//       <div>
//         <p class="text-lg font-semibold text-black mb-2">BREAKFAST</p>
//         <div class="meal-item flex items-center gap-6 p-6 bg-gray-50 rounded-lg shadow-md">
//           <img src="https://images.unsplash.com/photo-1604480132715-bd70038b74df?q=80&w=2118&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="w-32 h-20 rounded-md"/>
//           <p class="text-gray-800">Oatmeal with fruits</p>
//         </div>
//       </div>
//       <div>
//         <p class="text-lg font-semibold text-black mt-4 mb-2">LUNCH</p>
//         <div class="meal-item flex items-center gap-6 p-6 bg-gray-50 rounded-lg shadow-md">
//           <img src="https://images.unsplash.com/photo-1604480132715-bd70038b74df?q=80&w=2118&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="w-32 h-20 rounded-md"/>
//           <p class="text-gray-800">Grilled chicken with quinoa</p>
//         </div>
//       </div>
//       <div>
//         <p class="text-lg font-semibold text-black mt-4 mb-2">DINNER</p>
//         <div class="meal-item flex items-center gap-6 p-6 bg-gray-50 rounded-lg shadow-md">
//           <img src="https://images.unsplash.com/photo-1604480132715-bd70038b74df?q=80&w=2118&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="w-32 h-20 rounded-md"/>
//           <p class="text-gray-800">Salad with lean protein</p>
//         </div>
//       </div>
//     </div>
//     `;
//   } else if (goal === "weight_gain") {
//     mealPlanHTML = `
//     <div class="bg-transparent p-6">
//         <h4 class="text-3xl text-black font-bold mb-10 text-center tracking-wider "> Your Weight-G@in Meal-Plan </h4>
//       <div>
//         <p class="text-lg font-semibold text-black mb-2">BREAKFAST</p>
//         <div class="meal-item flex items-center gap-6 p-6 bg-gray-50 rounded-lg shadow-md">
//           <img src="https://images.unsplash.com/photo-1604480132715-bd70038b74df?q=80&w=2118&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="w-32 h-20 rounded-md"/>
//           <p class="text-gray-800">Oatmeal with fruits</p>
//         </div>
//       </div>
//       <div>
//         <p class="text-lg font-semibold text-black mt-4 mb-2">LUNCH</p>
//         <div class="meal-item flex items-center gap-6 p-6 bg-gray-50 rounded-lg shadow-md">
//           <img src="https://images.unsplash.com/photo-1604480132715-bd70038b74df?q=80&w=2118&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="w-32 h-20 rounded-md"/>
//           <p class="text-gray-800">Grilled chicken with quinoa</p>
//         </div>
//       </div>
//       <div>
//         <p class="text-lg font-semibold text-black mt-4 mb-2">DINNER</p>
//         <div class="meal-item flex items-center gap-6 p-6 bg-gray-50 rounded-lg shadow-md">
//           <img src="https://images.unsplash.com/photo-1604480132715-bd70038b74df?q=80&w=2118&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="w-32 h-20 rounded-md"/>
//           <p class="text-gray-800">Salad with lean protein</p>
//         </div>
//       </div>
//     </div>
//     `;
//   } else {
//     mealPlanHTML = `
//     <div class="bg-transparent p-6">
//         <h4 class="text-3xl text-black font-bold mb-10 text-center tracking-wider "> Your Weight-Maintain Meal-Plan </h4>
//       <div>
//         <p class="text-lg font-semibold text-black mb-2">BREAKFAST</p>
//         <div class="meal-item flex items-center gap-6 p-6 bg-gray-50 rounded-lg shadow-md">
//           <img src="https://images.unsplash.com/photo-1604480132715-bd70038b74df?q=80&w=2118&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="w-32 h-20 rounded-md"/>
//           <p class="text-gray-800">Oatmeal with fruits</p>
//         </div>
//       </div>
//       <div>
//         <p class="text-lg font-semibold text-black mt-4 mb-2">LUNCH</p>
//         <div class="meal-item flex items-center gap-6 p-6 bg-gray-50 rounded-lg shadow-md">
//           <img src="https://images.unsplash.com/photo-1604480132715-bd70038b74df?q=80&w=2118&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="w-32 h-20 rounded-md"/>
//           <p class="text-gray-800">Grilled chicken with quinoa</p>
//         </div>
//       </div>
//       <div>
//         <p class="text-lg font-semibold text-black mt-4 mb-2">DINNER</p>
//         <div class="meal-item flex items-center gap-6 p-6 bg-gray-50 rounded-lg shadow-md">
//           <img src="https://images.unsplash.com/photo-1604480132715-bd70038b74df?q=80&w=2118&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="w-32 h-20 rounded-md"/>
//           <p class="text-gray-800">Salad with lean protein</p>
//         </div>
//       </div>
//     </div>
//     `;
//   }

//   document.getElementById("meal-plan-result").innerHTML = mealPlanHTML;
//   document.getElementById("generate-plan").classList.add("hidden");
// }

function convertHeight(type) {
  let cm = document.getElementById("height-cm");
  let ft = document.getElementById("height-ft");
  let inch = document.getElementById("height-in");

  if (type === "cm") {
    let totalInches = Math.round(cm.value / 2.54); // Convert cm to inches and round
    ft.value = Math.floor(totalInches / 12);
    inch.value = totalInches % 12; // Always whole number
  } else {
    let totalInches = parseInt(ft.value) * 12 + parseInt(inch.value || 0);
    cm.value = Math.round(totalInches * 2.54); // Always whole number
  }
}

function convertWeight(type) {
  let kg = document.getElementById("weight-kg");
  let lbs = document.getElementById("weight-lbs");

  if (type === "kg") {
    lbs.value = Math.round(kg.value * 2.20462); // Convert kg to lbs and round
  } else {
    kg.value = Math.round(lbs.value / 2.20462); // Convert lbs to kg and round
  }
}

// function calculateCalories() {
//   let age = parseInt(document.getElementById("age").value);
//   let gender = document.getElementById("gender").value;
//   let height = parseInt(document.getElementById("height-cm").value);
//   let weight = parseInt(document.getElementById("weight-kg").value);
//   let activity = parseFloat(document.getElementById("activity").value);

//   if (!age || !height || !weight) {
//     document.getElementById("result").innerText = "Please fill all fields.";
//     return;
//   }

//   let BMR;
//   if (gender === "male") {
//     BMR = 10 * weight + 6.25 * height - 5 * age + 5;
//   } else {
//     BMR = 10 * weight + 6.25 * height - 5 * age - 161;
//   }

//   let calories = BMR * activity;
//   document.getElementById(
//     "result"
//   ).innerText = `Your daily calorie need: ${Math.round(calories)} kcal`;

//   setTimeout(() => {
//     nextStep(1);
//   }, 2000);
// }
