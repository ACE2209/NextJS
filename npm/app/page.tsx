"use client";

import { useState } from "react";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import ComboBox from "@/app/ComboBox";

export default function Home() {
  // state để ẩn/hiện Alert
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div style={{ padding: 16 }}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setShowAlert(true)}
      >
        Hello world
      </Button>

      {showAlert && (
        <div style={{ marginTop: 16 }}>
          <Alert
            severity="success"
            onClose={() => setShowAlert(false)} // click dấu X để đóng
          >
            Here is a gentle confirmation that your action was successful.
          </Alert>
        </div>
      )}

      <ComboBox />
    </div>
  );
}
