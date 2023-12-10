import { deleteBoard } from "@/actions/delete-board";
import { Button } from "@/components/ui/button";
import { FormDeleteButton } from "./form-delete-button";

interface BoardProps {
  title: string;
  id: string;
}
const Board = ({ title, id }: BoardProps) => {
  const deleteBoardWithId = deleteBoard.bind(null, id);
  return (
    <form action={deleteBoardWithId} className="flex items-center gap-x-2">
      <p>Board name: {title}</p>
      <FormDeleteButton />
    </form>
  );
};

export default Board;
