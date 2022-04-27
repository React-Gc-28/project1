// import React, { Fragment } from "react";
// import { Link } from "react-router-dom";
// import "./index.scss";

// const MenuItem = ({ menuData1, menuData2, menuData3, menuData4, cardData }) => {
//     console.log(cardData)
//   return (
//     <Fragment>
//       <section className="container">
//         <img
//           src="/images/bgimg.png"
//           alt="Products"
//           style={{ width: "100%", backgroundSize: "cover" }}
//         />
//         <div>
//           <p className="Products-text">Menu</p>
//           <div>
//             <img
//               className="Products-under"
//               src="/images/frill-free-img.webp"
//               alt="Products underline"
//             />
//           </div>
//         </div>
//       </section>
//       <section className="section">
//     {menuData1.map((menu1) => {
//             console.log(menu1)
//             return(
//             <div className="grid grid1">
//             <div>
//                 <h2 className="sub-head">Various Breads & Dips</h2>
//                 <div>
//                 <img
//                     className="decoration"
//                     src="/images/divider-free-img.webp"
//                     alt="decoration"
//                 />
//                 </div>
//                 {/* <div className="grid-text">
//                 <div className="inner-grid ">
//                     <p className="sub-header">{menu1.name}</p>
//                     <p className="grid-price"> {menu1.price}€</p>
//                 </div>
//                 </div>

//                 <div className="grid-text">
//                 <div className="inner-grid ">
//                     <p className="sub-header"> {props.menuData1[0].name}</p>
//                     <p className="grid-price">2,90€</p>
//                 </div>
//                 </div> */}
//                 <div className="grid-text">
//                 <div className="inner-grid ">
//                     <p className="sub-header">{menu1.name}</p>
//                     <p className="grid-price">{menu1.price}€</p>
//                 </div>
//                 <p className="sub-text">
//                     {menu1.desc}
//                 </p>
//                 </div>
//                 {/* <div className="grid-text">
//                 <div className="inner-grid ">
//                     <p className="sub-header">Hummus</p>
//                     <p className="grid-price">4,80€</p>
//                 </div>
//                 <p className="sub-text">
//                     With dehydrated onions and virgin olive oil
//                 </p>
//                 </div> */}
//             </div>
//             <div>
//                 <img
//                 className="grid-img"
//                 src={menu1.src}
//                 alt="parfet"
//                 />
//             </div>
//             </div>
//             )
//         }
        
//         )}
//        {menuData2.map((menu2)=>
//        ( <div className="grid grid2">
//           <div>
//             <img
//               className="grid-img"
//               src={menu2.src}
//               alt="parfet"
//             />
//           </div>
//           <div>
//             <h2 className="sub-head">Salads</h2>
//             <div>
//               <img
//                 className="decoration"
//                 src="/images/divider-free-img.webp"
//                 alt="decoration"
//               />
//             </div>

//             <div className="grid-text">
//               <div className="inner-grid ">
//                 <p className="sub-header">{menu2.name}</p>
//                 <p className="grid-price">{menu2.price}€</p>
//               </div>
//               <p className="sub-text">
//                {menu2.desc}
//               </p>
//             </div>
//             {/* <div className="grid-text">
//               <div className="inner-grid ">
//                 <p className="sub-header">Octopus Salad</p>
//                 <p className="grid-price">13,20€</p>
//               </div>
//               <p className="sub-text">
//                 Octopus, bulgur (couscous), cherry tomatoes, teardrop peppers,
//                 caper, dill, grilled nori and mango dressing
//               </p>
//             </div>
//             <div className="grid-text">
//               <div className="inner-grid">
//                 <p className="sub-header">Vegan Salad</p>
//                 <p className="gird-price">7,80€</p>
//               </div>
//               <p className="sub-text">
//                 Red beans, seasonal vegetables, black sesame, goji berry and
//                 orange dressing
//               </p>
//             </div> */}
//           </div>
//         </div>))}
//        {menuData3.map((menu3) =>
//        ( <div className="grid grid1 grid3">
//           <div>
//             <h2 className="sub-head">Cold & Warm Appetizers</h2>
//             <div>
//               <img
//                 className="decoration"
//                 src={menu3.src}
//                 alt="decoration"
//               />
//             </div>
//             <div className="grid-text">
//               <div className="inner-grid ">
//                 <p className="sub-header">{menu3.name}</p>
//                 <p className="grid-price">{menu3.price}€</p>
//               </div>
//               <p>{menu3.desc}</p>
//             </div>

//             {/* <div className="grid-text">
//               <div className="inner-grid ">
//                 <p className="sub-header">Spanakopita</p>
//                 <p className="grid-price">7,80€</p>
//               </div>
//               <p className="sub-text">
//                 Bread with charcoal, hot jello feta cheese, rice flakes, mint,
//                 vinaigrette and pink pepper
//               </p>
//             </div>
//             <div className="grid-text">
//               <div className="inner-grid ">
//                 <p className="sub-header">Pita falafel</p>
//                 <p className="grid-price">7,20€</p>
//               </div>
//               <p className="sub-text">
//                 With kourou dough, chickpeas, tomato mousse, salt foam and
//                 parsley oil
//               </p>
//             </div>
//             <div className="grid-text">
//               <div className="inner-grid ">
//                 <p className="sub-header">Aubergine with Gazpacho sauce</p>
//                 <p className="grid-price">9,90€</p>
//               </div>
//               <p className="sub-text">
//                 Aubergine (eggplant), gazpacho, burrata mozzarella sphere, basil
//                 pesto, fresh basil
//               </p>
//             </div>
//             <div className="grid-text">
//               <div className="inner-grid">
//                 <p className="sub-header">Panna Cotta feta</p>
//                 <p className="grid-price">8,20€</p>
//               </div>
//               <p className="sub-text">
//                 Feta cheese, semi-dried tomato, maple syrup, black olives oil
//                 and parsley powder gazpacho, burrata mozzarella sphere, basil
//                 pesto, fresh basil
//               </p>
//             </div>
//             <div className="grid-text">
//               <div className="inner-grid">
//                 <p className="sub-header">Sea bass Ceviche</p>
//                 <p className="grid-price">9,90€</p>
//               </div>
//               <p className="sub-text">
//                 Teardrop peppers, orange dressing, onions, orange, lime
//               </p>
//             </div>
//             <div className="grid-text">
//               <div className="inner-grid">
//                 <p className="sub-header">Sauteed Shrimps</p>
//                 <p className="grid-price">12,90€</p>
//               </div>
//               <p className="sub-text">
//                 Served with sautéed vegetables (onions/peppers/mushroom), feta
//                 and soy mousse
//               </p>
//             </div>
//             <div className="grid-text">
//               <div className="inner-grid">
//                 <p className="sub-header">Grilled Octopus</p>
//                 <p className="grid-price">13,20€</p>
//               </div>
//               <p className="sub-text">
//                 Served with chickpeas puree, onions, rocket, paprika rice chip
//                 and our homemade vinaigrette sauce
//               </p>
//             </div>
//             <div className="grid-text">
//               <div className="inner-grid">
//                 <p className="sub-header">Squid with Feta and Peppers</p>
//                 <p className="grid-price">14,90€</p>
//               </div>
//               <p className="sub-text">
//                 Squid filled with traditional feta cheese and peppers. Served
//                 with our gazpacho dressing and basil pesto
//               </p>
//             </div>
//             <div className="grid-text">
//               <div className="inner-grid">
//                 <p className="sub-header">Beef Carpaccio</p>
//                 <p className="grid-price">17,90€</p>
//               </div>
//               <p className="sub-text">
//                 Beef fillet with parmesan cheese flakes, dijon mustard, rocket
//                 and olive oil
//               </p>
//             </div> */}
//           </div>
//           <div>
//             <img
//               className="grid-img3"
//               src={menu3.src}
//               alt="parfet"
//             />
//           </div>
//         </div>))}
//        {menuData4.map((menu4) => ( <div className="grid grid2">
//           <div>
//             <img
//               className="grid-img"
//               src={menu4.src}
//               alt="parfet"
//             />
//           </div>
//           <div>
//             <h2 className="sub-head">Main Courses</h2>
//             <div>
//               <img
//                 className="decoration"
//                 src="/images/divider-free-img.webp"
//                 alt="decoration"
//               />
//             </div>

//             <div className="grid-text">
//               <div className="inner-grid ">
//                 <p className="sub-header">{menu4.name}</p>
//                 <p className="grid-price">{menu4.price}€</p>
//               </div>
//               <p className="sub-text">
//                {menu4.desc}
//               </p>
//             </div>
//             {/* <div className="grid-text">
//               <div className="inner-grid ">
//                 <p className="sub-header">Octopus Salad</p>
//                 <p className="grid-price">13,20€</p>
//               </div>
//               <p className="sub-text">
//                 Octopus, bulgur (couscous), cherry tomatoes, teardrop peppers,
//                 caper, dill, grilled nori and mango dressing
//               </p>
//             </div>
//             <div className="grid-text">
//               <div className="inner-grid">
//                 <p className="sub-header">Vegan Salad</p>
//                 <p className="grid-price">7,80€</p>
//               </div>
//               <p className="sub-text">
//                 Red beans, seasonal vegetables, black sesame, goji berry and
//                 orange dressing
//               </p>
//             </div> */}
//           </div>
//         </div>))}
//       </section>
//       <section className="btn-container">
//         <Link to="../reservation">
//           <button className="btn">
//             Reserve Now <span>&rarr;</span>
//           </button>
//         </Link>
//       </section>
//       <section className="card-container">
//         <div className="bg-overlay" />
//         <div className="sweet-dessert">
//           <img src="/images/leaf-free-img.webp" alt="flower" />
//           <p className="overlay-text">Our Sweet Desserts</p>
//         </div>
//         <div className="card-div">
//          {cardData.map((card)=>( <div className="card card-color1">
//             <p className="card-heading">{card.name}</p>
//             <div className="card-flex">
//               <p className="card-text">
//                 {card.desc}
//               </p>
//               <p className="card-price">{card.price}€</p>
//             </div>
//             <hr />
//           </div>))}
//           {/* <div className="card card-color2">
//             <p className="card-heading">Sweet touch</p>
//             <div className="card-flex">
//               <p className="card-text">
//                 Elastic chocolate ganache, sesame with honey (melekouni),
//                 mascarpone mousse, strawberry coulis and mint syrup
//               </p>
//               <p className="card-price">6,60€</p>
//             </div>
//             <hr />
//           </div> */}
//         </div>
//       </section>
//     </Fragment>
//   );
// };

// export default MenuItem;



// <------------------------------------------------------------------->


import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const MenuItem = () => {
  return (
    <Fragment>
      <section className="container">
        <img
          src="/images/bgimg.png"
          alt="Products"
          style={{ width: "100%", backgroundSize: "cover" }}
        />
        <div>
          <p className="menu-text">Menu</p>
          <div>
            <img
              className="menu-under"
              src="/images/frill-free-img.webp"
              alt="Products underline"
            />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="grid grid1">
          <div>
            <h2 className="sub-head">Various Breads & Dips</h2>
            <div>
              <img
                className="decoration"
                src="/images/divider-free-img.webp"
                alt="decoration"
              />
            </div>
            <div className="grid-text">
              <div className="inner-grid ">
                <p className="sub-header">Rye, wholegrain, corn, olive bread</p>
                <p className="grid-price"> 4,80€</p>
              </div>
            </div>

            <div className="grid-text">
              <div className="inner-grid ">
                <p className="sub-header">Gluten free bread</p>
                <p className="grid-price">2,90€</p>
              </div>
            </div>
            <div className="grid-text">
              <div className="inner-grid ">
                <p className="sub-header">Tzatziki mousse</p>
                <p className="grid-price">4,80€</p>
              </div>
              <p className="sub-text">
                With dill powder and dehydrated cucumber
              </p>
            </div>
            <div className="grid-text">
              <div className="inner-grid ">
                <p className="sub-header">Hummus</p>
                <p className="grid-price">4,80€</p>
              </div>
              <p className="sub-text">
                With dehydrated onions and virgin olive oil
              </p>
            </div>
          </div>
          <div>
            <img className="grid-img" src="/images/1-681x1024.webp" alt="parfet" />
          </div>
        </div>
        
        <div className="grid grid2">
          <div>
            <img className="grid-img" src="/images/2-681x1024.webp" alt="parfet" />
          </div>
          <div>
            <h2 className="sub-head">Salads</h2>
            <div>
              <img
                className="decoration"
                src="/images/divider-free-img.webp"
                alt="decoration"
              />
            </div>

            <div className="grid-text">
              <div className="inner-grid ">
                <p className="sub-header">Greek Salad</p>
                <p className="grid-price">8,40€</p>
              </div>
              <p className="sub-text">
                With cucumber, cherry tomatoes, onions, teardrop peppers, feta
                cheese puree and caper sponge
              </p>
            </div>
            <div className="grid-text">
              <div className="inner-grid ">
                <p className="sub-header">Octopus Salad</p>
                <p className="grid-price">13,20€</p>
              </div>
              <p className="sub-text">
                Octopus, bulgur (couscous), cherry tomatoes, teardrop peppers,
                caper, dill, grilled nori and mango dressing
              </p>
            </div>
            <div className="grid-text">
              <div className="inner-grid">
                <p className="sub-header">Vegan Salad</p>
                <p className="gird-price">7,80€</p>
              </div>
              <p className="sub-text">
                Red beans, seasonal vegetables, black sesame, goji berry and
                orange dressing
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid1 grid3">
          <div>
            <h2 className="sub-head">Cold & Warm Appetizers</h2>
            <div>
              <img
                className="decoration"
                src="/images/divider-free-img.webp"
                alt="decoration"
              />
            </div>
            <div className="grid-text">
              <div className="inner-grid ">
                <p className="sub-header">Salty Loukoumades & seaweed</p>
                <p className="grid-price">6,80€</p>
              </div>
              <p className="sub-text">Tomato mousse, bean sprouts, maple syrup</p>
            </div>

            <div className="grid-text">
              <div className="inner-grid ">
                <p className="sub-header">Spanakopita</p>
                <p className="grid-price">7,80€</p>
              </div>
              <p className="sub-text">
                Bread with charcoal, hot jello feta cheese, rice flakes, mint,
                vinaigrette and pink pepper
              </p>
            </div>
            <div className="grid-text">
              <div className="inner-grid ">
                <p className="sub-header">Pita falafel</p>
                <p className="grid-price">7,20€</p>
              </div>
              <p className="sub-text">
                With kourou dough, chickpeas, tomato mousse, salt foam and
                parsley oil
              </p>
            </div>
            <div className="grid-text">
              <div className="inner-grid ">
                <p className="sub-header">Aubergine with Gazpacho sauce</p>
                <p className="grid-price">9,90€</p>
              </div>
              <p className="sub-text">
                Aubergine (eggplant), gazpacho, burrata mozzarella sphere, basil
                pesto, fresh basil
              </p>
            </div>
            <div className="grid-text">
              <div className="inner-grid">
                <p className="sub-header">Panna Cotta feta</p>
                <p className="grid-price">8,20€</p>
              </div>
              <p className="sub-text">
                Feta cheese, semi-dried tomato, maple syrup, black olives oil
                and parsley powder gazpacho, burrata mozzarella sphere, basil
                pesto, fresh basil
              </p>
            </div>
            <div className="grid-text">
              <div className="inner-grid">
                <p className="sub-header">Sea bass Ceviche</p>
                <p className="grid-price">9,90€</p>
              </div>
              <p className="sub-text">
                Teardrop peppers, orange dressing, onions, orange, lime
              </p>
            </div>
            <div className="grid-text">
              <div className="inner-grid">
                <p className="sub-header">Sauteed Shrimps</p>
                <p className="grid-price">12,90€</p>
              </div>
              <p className="sub-text">
                Served with sautéed vegetables (onions/peppers/mushroom), feta
                and soy mousse
              </p>
            </div>
            <div className="grid-text">
              <div className="inner-grid">
                <p className="sub-header">Grilled Octopus</p>
                <p className="grid-price">13,20€</p>
              </div>
              <p className="sub-text">
                Served with chickpeas puree, onions, rocket, paprika rice chip
                and our homemade vinaigrette sauce
              </p>
            </div>
            <div className="grid-text">
              <div className="inner-grid">
                <p className="sub-header">Squid with Feta and Peppers</p>
                <p className="grid-price">14,90€</p>
              </div>
              <p className="sub-text">
                Squid filled with traditional feta cheese and peppers. Served
                with our gazpacho dressing and basil pesto
              </p>
            </div>
            <div className="grid-text">
              <div className="inner-grid">
                <p className="sub-header">Beef Carpaccio</p>
                <p className="grid-price">17,90€</p>
              </div>
              <p className="sub-text">
                Beef fillet with parmesan cheese flakes, dijon mustard, rocket
                and olive oil
              </p>
            </div>
          </div>
          <div>
            <img className="grid-img3" src="/images/DSC_4981-1024x1024.webp" alt="parfet" />
          </div>
        </div>
        <div className="grid grid2">
          <div>
            <img className="grid-img" src="/images/4-681x1024.webp" alt="parfet" />
          </div>
          <div>
            <h2 className="sub-head">Main Courses</h2>
            <div>
              <img
                className="decoration"
                src="/images/divider-free-img.webp"
                alt="decoration"
              />
            </div>

            <div className="grid-text">
              <div className="inner-grid ">
                <p className="sub-header">Vegan Ravioli</p>
                <p className="grid-price">13,90€</p>
              </div>
              <p className="sub-text">
                Raviolis from dough with beetroot, stuffed with chickpeas and
                vegetables, peppers, parsley oil and coconut sauce
              </p>
            </div>
            <div className="grid-text">
              <div className="inner-grid ">
                <p className="sub-header">Octopus Salad</p>
                <p className="grid-price">13,20€</p>
              </div>
              <p className="sub-text">
                Octopus, bulgur (couscous), cherry tomatoes, teardrop peppers,
                caper, dill, grilled nori and mango dressing
              </p>
            </div>
            <div className="grid-text">
              <div className="inner-grid">
                <p className="sub-header">Vegan Salad</p>
                <p className="grid-price">7,80€</p>
              </div>
              <p className="sub-text">
                Red beans, seasonal vegetables, black sesame, goji berry and
                orange dressing
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="btn-container">
        <Link to="../reservation">
          <button className="btn">
            Reserve Now <span>&rarr;</span>
          </button>
        </Link>
      </section>
      <section className="card-container">
        <div className="bg-overlay" />
        <div className="sweet-dessert">
          <img src="/images/leaf-free-img.webp" alt="flower" />
          <p className="overlay-text">Our Sweet Desserts</p>
        </div>
        <div className="card-div">
          <div className="card card-color1">
            <p className="card-heading">Lava Brownie</p>
            <div className="card-flex">
              <p className="card-text">
                Served with caramelized peanuts, hazelnuts, vanilla ice cream
                quenelle, dark chocolate syrup and whipped cream
              </p>
              <p className="card-price">6,60€</p>
            </div>
            <hr />
          </div>

          <div className="card card-color2">
            <p className="card-heading">Sweet touch</p>
            <div className="card-flex">
              <p className="card-text">
                Elastic chocolate ganache, sesame with honey (melekouni),
                mascarpone mousse, strawberry coulis and mint syrup
              </p>
              <p className="card-price">6,60€</p>
            </div>
            <hr />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default MenuItem;

