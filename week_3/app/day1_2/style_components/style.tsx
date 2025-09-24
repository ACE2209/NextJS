"use client"; // Đảm bảo component là Client Component để sử dụng Styled Components

import styled from "styled-components";
import { Button } from "@/components/ui/button";

const StyledContainer = styled.div`
  padding: 20px;
  background-color: #e0e7ff; /* Màu nền khác để phân biệt */
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const StyledTitle = styled.h1`
  color: #2c3e50;
  font-size: 2.5em;
  margin-bottom: 10px;
`;

const StyledDescription = styled.p`
  color: #34495e;
  font-size: 1.3em;
  margin-bottom: 20px;
`;

export default function Style() {
  return (
    <StyledContainer>
      <StyledTitle>Chào mừng đến với Styled Components!</StyledTitle>
      <StyledDescription>CSS trong JavaScript.</StyledDescription>
      <Button
        onClick={() => alert("Ấn nút hiện thông báo nè!!!")}
        className="mt-4"
      >
        Thử ngay!
      </Button>
    </StyledContainer>
  );
}
