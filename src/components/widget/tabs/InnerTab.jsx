import React, { useState, useEffect, useRef } from "react";
import "./Tabs.scss";
import useDirectionDetect from "../../utiles/useDirectionDetect";

export default function InnerTab({ list = [], swipe = false }) {
  const [activeTab, setActiveTab] = useState(0);
  const [activeTabStyle, setActiveTabStyle] = useState({});
  const firstItem = useRef(null);
  //set Active tab by touch
  let setActiveTabBySwipe = (direction) => {
    let count = 0;
    if (direction < 0 && direction < -80) count = -1;
    else if (direction > 0 && direction > 80) count = +1;
    if (count + activeTab > list.length - 1) {
    } else if (count + activeTab < 0) {
    } else setActiveTab(count + activeTab);
  };
  // detect the direction to change the tab
  const {
    setStartingPosition,
    setEndPosition,
    getDirection,
  } = useDirectionDetect();
  // pointer functions
  let onPointerDown = (x) => {
    setStartingPosition({ x, y: 0 });
  };
  let onPointerUp = (x) => {
    setEndPosition({ x, y: 0 });
    setActiveTabBySwipe(getDirection().x);
  };
  // initial activeTabStyle aat mount and when active tab changed
  useEffect(() => {
    let node = firstItem.current;
    let width = node.clientWidth;
    if (activeTab === 0) width = 0;
    let left = -node.offsetLeft + width + "px";
    setActiveTabStyle({ left });
  }, [activeTab]);

  let changeActiveTab = (event, tabNumber) => {
    if (activeTab !== tabNumber) {
      let node = event.target;
      let width = node.clientWidth;
      if (tabNumber === 0) width = 0;
      let left = -node.offsetLeft + width + "px";
      setActiveTabStyle({ left });
      setActiveTab(tabNumber);
    }
  };
  return (
    <div className="innerTab">
      <div className="innerTab-tabsList">
        <div className="innerTab-tabsList_activeTab" style={activeTabStyle}>
          {list.map((item, i) => (
            <div
              className={`innerTab-tabsList_tab ${
                i === activeTab ? "active" : "notActive"
              }`}
              onPointerDown={(e) => {
                changeActiveTab(e, i);
              }}
              key={i + "tab" + item.label}
              style={{ zIndex: 10 }}
              ref={i === activeTab ? firstItem : null}
            >
              {item.Icon ? <item.Icon /> : item.label}
            </div>
          ))}
        </div>
      </div>
      {/* tab content */}
      <div className="innerTab-tabsContent">
        {list.map((item, i) => (
          <div
            className={`innerTab-tabsContent_content 
            ${i < activeTab ? "left " : i > activeTab ? "right " : ""}
             ${i === activeTab ? "active" : "notActive"}`}
            key={i + "tabContent" + item.label}
            {...(swipe
              ? {
                  onMouseDown: (e) => onPointerDown(e.clientX),
                  onMouseUp: (e) => onPointerUp(e.clientX),
                  onTouchStart: (e) => onPointerDown(e.touches[0].clientX),
                  onTouchEnd: (e) => onPointerUp(e.changedTouches[0].clientX),
                }
              : {})}
            style={{
              zIndex: 10,
            }}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
}
