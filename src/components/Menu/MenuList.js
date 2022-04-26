import React, { Fragment } from "react";
import MenuItem from "./MenuItem";

const menuList = [
  {
    "Various Breads & Dips": [
      {
        name: "Rye, wholegrain, corn, olive bread",
        price: "4,80",
        desc: "",
        src: "/images/1-681x1024.webp",
        category: "Various Breads & Dips",
      },
      {
        name: "Gluten free bread",
        price: "2,90",
        desc: "",
      },
      {
        name: "Tzatziki mousse",
        price: "4,80",
        desc: "With dill powder and dehydrated cucumber",
      },
      {
        name: "Hummus",
        price: "4,80",
        desc: "With dehydrated onions and virgin olive oil",
      },
    ],
    id: "p1",
  },

  {
    Salads: [
      {
        name: "Greek Salad",
        price: "8,40",
        desc: "With cucumber, cherry tomatoes, onions, teardrop peppers, feta cheese puree and caper sponge",
        src: "/images/2-681x1024.webp",
      },
      {
        name: "Octopus Salad",
        price: "13,20",
        desc: "Octopus, bulgur (couscous), cherry tomatoes, teardrop peppers, caper, dill, grilled nori and mango dressing",
      },
      {
        name: "Vegan Salad",
        price: "7,80",
        desc: "Red beans, seasonal vegetables, black sesame, goji berry and orange dressing",
      },
    ],
    id: "p2",
  },

  {
    "Cold & warm Appetizers": [
      {
        name: "Salty Loukoumades & seaweed",
        price: "6,80",
        desc: "Tomato mousse, bean sprouts, maple syrup",
        src: "/images/DSC_4981-1024x1024.webp",
      },
      {
        name: "Spanakopita",
        price: "7,80",
        desc: "Bread with charcoal, hot jello feta cheese, rice flakes, mint, vinaigrette and pink pepper",
      },
      {
        name: "Pita falafel",
        price: "7,20",
        desc: "With kourou dough, chickpeas, tomato mousse, salt foam and parsley oil",
      },
      {
        name: "Aubergine with Gazpacho sauce",
        price: "9,90",
        desc: "Aubergine (eggplant), gazpacho, burrata mozzarella sphere, basil pesto, fresh basil",
      },
      {
        name: "Panna Cotta feta",
        price: "8,20",
        desc: "Feta cheese, semi-dried tomato, maple syrup, black olives oil and parsley powder",
      },
      {
        name: "Sea bass Ceviche",
        price: "9,90",
        desc: "Teardrop peppers, orange dressing, onions, orange, lime",
      },
      {
        name: "Sauteed Shrimps",
        price: "12,90",
        desc: "Served with sautéed vegetables (onions/peppers/mushroom), feta and soy mousse",
      },
      {
        name: "Grilled Octopus",
        price: "13,20",
        desc: "Served with chickpeas puree, onions, rocket, paprika rice chip and our homemade vinaigrette sauce",
      },
      {
        name: "Squid with Feta and Peppers",
        price: "14,90",
        desc: "Squid filled with traditional feta cheese and peppers. Served with our gazpacho dressing and basil pesto",
      },
      {
        name: "Beef Carpaccio",
        price: "17,90",
        desc: "Beef fillet with parmesan cheese flakes, dijon mustard, rocket and olive oil",
      },
    ],
    id: "p3",
  },

  {
    "Main Courses": [
      {
        name: "Vegan Ravioli",
        price: "13,90",
        desc: "Raviolis from dough with beetroot, stuffed with chickpeas and vegetables, peppers, parsley oil and coconut sauce",
        src: "/images/4-681x1024.webp",
      },
      {
        name: "Shrimp/Yogurt Ravioli",
        price: "15,90",
        desc: "Aegean shrimps, yogurt, parmesan cream, fresh mint and shellfish broth",
      },
      {
        name: "Salmon Fillet",
        price: "16,50",
        desc: "Served with saffron bulgur, Parisienne carrots, green beans and homemade tartar sauce",
      },
      {
        name: "Braised cod fish fillet",
        price: "16,30",
        desc: "Served with potato nests, sauteed spinach, parsley oil and tomato sauce",
      },
      {
        name: "Chicken fillet ballotine",
        price: "14,90",
        desc: "Chicken fillet sous vide (66°), stuffed with spinach/mozzarella/prosciutto, croquette of potato puree, parsley powder, turmeric sauce.",
      },
      {
        name: "Lamb shank",
        price: "18,90",
        desc: "Served with potato puree,mini artichokes, parmesan cream and demi glace sauce",
      },
      {
        name: "Beef cheeks",
        price: "19,90",
        desc: "Served with potato nests, carrots puree, parmesan cream and demi-glace sauce",
      },
      {
        name: "Lobster Tagliatelle",
        price: "89,90",
        desc: "Shellfish broth",
      },
    ],
    id: "p4",
  },
  {
    cardContent: [
      {
        name: "Lava Brownie",
        desc: " Served with caramelized peanuts, hazelnuts, vanilla ice cream quenelle, dark chocolate syrup and whipped cream",
        price: "6,60",
      },
      {
        name: "Sweet touch",
        desc: " Elastic chocolate ganache, sesame with honey (melekouni),mascarpone mousse, strawberry coulis and mint syrup",
        price: "6,60",
      },
    ],
    id: "p5",
  },
];

const MenuList = () => {
  return (
    <Fragment>
      {menuList.map((menu) => (
        <MenuItem
          key={menu.id}
          menuData1={menu["Various Breads & Dips"]}
          menuData2={menu["Salads"]}
          menuData3={menu["Cold & warm Appetizers"]}
          menuData4={menu["Main Courses"]}
          cardData={menu["cardContent"]}
        />
      ))}
    </Fragment>
  );
};

export default MenuList;
