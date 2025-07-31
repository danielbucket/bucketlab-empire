import { FinanceStyle } from "./finance.styled";
import { useLoaderData } from "react-router-dom";

export default function Finance() {
  const data = useLoaderData();

  return (
    <FinanceStyle>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </FinanceStyle>
  );
};