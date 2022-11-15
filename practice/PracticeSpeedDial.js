import {SpeedDial} from "@rneui/themed";
import {useState} from "react";

export default function PracticeSpeedDial() {
  const [open, setOpen] = useState(false);

  return (
    <SpeedDial
      isOpen={open}
      icon={{name: "edit", color: "#fff"}}
      openIcon={{name: "close", color: "#fff"}}
      onOpen={() => setOpen(!open)}
      onClose={() => setOpen(!open)}
    >
      <SpeedDial.Action
        icon={{name: "add", color: "#fff"}}
        title="Add"
        onPress={() => console.log("Add Something")}
      />
      <SpeedDial.Action
        icon={{name: "delete", color: "#fff"}}
        title="Delete"
        onPress={() => console.log("Delete Something")}
      />
    </SpeedDial>
  );
}
