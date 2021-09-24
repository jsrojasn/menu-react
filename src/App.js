import { useState } from "react";
import MenuItem from "./components/MenuItem";
import "./App.css";

export const menuContent = [
  {
    label: "Main",
    link: "/",
  },
  {
    label: "Account",
    link: "/acc",
  },
  {
    label: "Buy",
    children: [
      {
        label: "Clothes",
        link: "/",
      },
      {
        label: "Shoes",
        link: "/shoes",
      },
      {
        label: "Real state",
        link: "/real",
        children: [
          {
            label: "Homes",
            link: "/real/homes",
          },
          {
            label: "VIP Homes",
            link: "/real/vip-vip",
          },
          {
            label: "VIP VIP Homes",
            link: "/real/vip-vip",
          },
        ],
      },
    ],
  },
  {
    label: "Travel",
    children: [
      {
        label: "France",
        link: "/travel/france",
        children: [
          {
            label: "Paris",
            link: "/travel/france/paris",
          },
          {
            label: "Touloux",
            link: "/travel/france/touloux",
          },
          {
            label: "Lyon",
            link: "/travel/france/lyon",
          },
        ],
      },
      {
        label: "London",
        link: "/travel/london",
      },
      {
        label: "Berlin",
        link: "/travel/berlin",
      },
    ],
  },
  {
    label: "FAQ",
    link: "/faq",
  },
];

function App() {
  const [openItem, setOpenItem] = useState("");
  const handleToggleMenu = (item) => {
    setOpenItem(item);
  };

  return (
    <div className="App">
      {menuContent.map(({ label, children, link }, index) => (
        <div
          onClick={() => {
            handleToggleMenu(label);
          }}
          key={index}
        >
          <MenuItem
            label={label}
            children={children}
            link={link}
            openItem={openItem}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
