import React, { useState } from 'react';

const CheckboxTree = ({ data }) => {

  const [checkedItems, setCheckedItems] = useState({});

  const handleCheck = (item) => {
    const newCheckedItems = { ...checkedItems };
    
    newCheckedItems[item.id] = !newCheckedItems[item.id];
    

    if (item.children) {
      updateChildren(item, newCheckedItems[item.id], newCheckedItems);
    }
    




    updateParent(item, newCheckedItems);

    setCheckedItems(newCheckedItems);
  };

  const updateChildren = (item, checked, newCheckedItems) => {
    item.children.forEach(child => {
      newCheckedItems[child.id] = checked;
      if (child.children) {
        updateChildren(child, checked, newCheckedItems);
      }
    });
  };

  const updateParent = (item, newCheckedItems) => {
    if (item.parent) {
      const parent = data.find(i => i.id === item.parent);
      const allChildrenChecked = parent.children.every(child => newCheckedItems[child.id]);
      newCheckedItems[parent.id] = allChildrenChecked;
      updateParent(parent, newCheckedItems);
    }
  };

  const renderItem = (item) => (
    <div key={item.id} style={{ marginLeft: '20px', }}>
      <label>
        <input
          type="checkbox"
          checked={!!checkedItems[item.id]}
          onChange={() => handleCheck(item)}
        />
        {item.name}
      </label>
      {item.children && item.children.map(renderItem)}
    </div>
  );

  return (
    <>
        <div style={{display: 'flex', justifyContent: 'center', width: '100%', marginTop: '20%'}}>{data.map(renderItem)}</div>;
    </>
  )
};

export default CheckboxTree;