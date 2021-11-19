import React, { useEffect, useState } from "react";

function Radio() {
  const allWards = [
    "Mri",
    "Pathology",
    "Intensive",
    "Ultrasound",
    "Medcare",
    "Emergency",
    "Homepathology",
    "Ccu",
    "iccu",
    "Sicu",
    "Casualty",
    "Semi-special room",
    "Burn ward",
  ];
  const [selectedWard, setSelectedWard] = useState([]);
  const findSelect = (e) => {
    if (!selectedWard.includes(e.target.value)) {
      setSelectedWard([...selectedWard, e.target.value]);
    } else {
      e.target.checked = false;
      setSelectedWard(selectedWard.filter((ele) => ele !== e.target.value));
    }
  };
  useEffect(() => {
    console.log(selectedWard);
  }, [selectedWard]);
  return (
    <div>
      <div onClick={(e) => findSelect(e)}>
        {allWards.map((item, ind) => (
          <>
            {selectedWard.includes(item) ? (
              <>
                <input
                  type="radio"
                  key={ind}
                  style={{ opacity: "0.4" }}
                  value={item}
                  id={item}
                />
                <label for={item} style={{ opacity: "0.4" }}>
                  {item}
                </label>
                <br />
              </>
            ) : (
              <>
                <input type="radio" key={ind} value={item} id={item} />
                <label for={item}>{item}</label>
                <br />
              </>
            )}
          </>
        ))}
      </div>
    </div>
  );
}

export default Radio;
