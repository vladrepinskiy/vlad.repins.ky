import { Chip } from "../core/Chip";
import { Collapsible } from "../core/Collapsible";
import { styled } from "goober";

export const CVEntryStack = ({ stack }: { stack: string[] }) => {
  return (
    <Collapsible label="Stack">
      <StackList>
        {stack.map((stackItem) => (
          <Chip key={stackItem} label={stackItem} />
        ))}
      </StackList>
    </Collapsible>
  );
};

const StackList = styled("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;
