import * as React from "react";

export const BoardSelector: React.FC = () => {
  return (
    <form action="/" method="get">
      <input type="text" name="board" placeholder="Type board ID" required />{" "}
      <button type="submit">Submit</button>
    </form>
  );
};
