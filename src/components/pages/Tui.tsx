import { styled } from "goober";

const TERMINAL_FONT =
  '"SF Mono", "Fira Code", "JetBrains Mono", "Consolas", monospace';

export const Tui = () => {
  return (
    <FullPage>
      <Terminal>
        <Output>
          <Line>$ cat intro.txt</Line>
          <Line />
          <Line> Welcome. Same site, terminal view.</Line>
          <Line />
          <Line>$ _</Line>
        </Output>
      </Terminal>
    </FullPage>
  );
};

const FullPage = styled("div")`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a1a;
`;

const Terminal = styled("div")`
  width: 100%;
  max-width: 560px;
  min-height: 240px;
  background: #0d1117;
  border-radius: 8px;
  padding: 1rem 1.25rem;
  font-family: ${TERMINAL_FONT};
  font-size: 0.875rem;
  line-height: 1.5;
`;

const Output = styled("div")`
  color: #e6edf3;
`;

const Line = styled("div")`
  color: inherit;
`;
