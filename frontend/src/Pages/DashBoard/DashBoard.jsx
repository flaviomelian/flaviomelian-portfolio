import React from 'react';
import { Link } from 'react-router-dom';
import './DashBoard.css';

const data = {
  Web: [
    { id: 4, title: "Pókimon App", path: '/pokimonApp' },
  ],
  FullStack: [
    { id: 1, title: "ComandApp", path: '/commandApp' },
    { id: 2, title: "Devly", path: '/devly' },
    { id: 5, title: "Cookbook", path: '/cookBook' },
    { id: 9, title: "ChatRealTime", path: '/chatRealTime' },
    { id: 10, title: "ECMAS Software", path: '/ecmas' },
    { id: 11, title: "SmartSolarLAB", path: '/smartSolarLab' },
    { id: 12, title: "Electronic Shop", path: '/e-shop' },
  ],
  Scripts: [
    { id: 3, title: "Autoejecutable Backups", path: '/backupsSh' },
  ],
  Tools: [
    { id: 6, title: "FLA$H", path: '/fla$h' },
    { id: 7, title: "Wallpaper Pattern Editor", path: '/wallpaperPatternEditor' },
    { id: 8, title: "Odoo Pet", path: '/odooPet' },
  ],
};

const DashBoard = () => {
  return (
    <div className="topology-container">
      {Object.entries(data).map(([area, projects], i) => (
        <div key={area} className={`area-cluster cluster-${i}`}>
          <h3>{area}</h3>
          <div className="nodes">
            {projects.map(proj => (
              <Link key={proj.id} to={proj.path} className="node">
                {proj.title}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashBoard;
