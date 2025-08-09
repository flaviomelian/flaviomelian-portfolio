import React from 'react';
import next from '../../assets/next.png';
import node from '../../assets/node.png';
import mysql from '../../assets/mysql.jpg';
import tailwind from '../../assets/tailwind.png';
import bootstrap from '../../assets/bootstrap.png';
import commandAppDashBoard from '../../assets/commandApp-dashboard.png';
import dailyMenu from '../../assets/daily-menu.png';
import getCommand from '../../assets/get-command.png';
import Commands from '../../assets/commands.png';
import CommandDetail from '../../assets/command-detail.png';
import TableStatus from '../../assets/table-status.png';
import menus from '../../assets/menus.png';
import dishes from '../../assets/dishes.png';
import homeMobile from '../../assets/home-mobile.jpg';
import dishesMobile from '../../assets/dishes.jpg';
import tablesMobile from '../../assets/tables-mobile.jpg';
import menusMobile from '../../assets/menus-mobile-details.jpg';
import burgerMenu from '../../assets/burger-menu.jpg';
import commandsMobile from '../../assets/comandas-mobile.jpg';
import './CommandApp.css';

const ComandApp = () => {
  return (
    <div className="comandapp-container">
      <h1>ComandApp</h1>
      <p>Una aplicación para la gestión de comandas y menús en un restaurante.</p>

      <div className="stack-commandapp">
        <img className="next" src={next} alt="Next.js" />
        <img className="node-js" src={node} alt="Node.js" />
        <img className="mysql" src={mysql} alt="MySQL" />
      </div>

      <div className="styles-stack">
        <img className="twind" src={tailwind} alt="Tailwind CSS" />
        <img className="bstrap" src={bootstrap} alt="Bootstrap" />
      </div>

      <div className="project-images-pm">
        <img className="pm" src={commandAppDashBoard} alt="Dashboard" />
        <img className="pm" src={dailyMenu} alt="Daily Menu" />
        <img className="pm" src={getCommand} alt="Get Command" />
        <img className="pm" src={Commands} alt="Commands" />
        <img className="pm" src={CommandDetail} alt="Command Detail" />
        <img className="pm" src={TableStatus} alt="Table Status" />
        <img className="pm" src={menus} alt="Menus" />
        <img className="pm" src={dishes} alt="Dishes" />
      </div>

      <div className="mobile">
        <img className="pm" src={homeMobile} alt="Home Mobile" />
        <img className="pm" src={burgerMenu} alt="Burger Menu" />
        <img className="pm" src={dishesMobile} alt="Dishes Mobile" />
        <img className="pm" src={tablesMobile} alt="Tables Mobile" />
        <img className="pm" src={menusMobile} alt="Menus Mobile" />
        <img className="pm" src={commandsMobile} alt="Commands Mobile" />
      </div>
    </div>
  );
};

export default ComandApp;
