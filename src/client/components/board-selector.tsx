import * as React from "react";

export const BoardSelector: React.FC = () => {
  const [value, setValue] = React.useState("");

  const onChange = React.useCallback((event: React.SyntheticEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  }, []);

  const onSubmit = React.useCallback(() => {
    if (value.length) {
      window.location.href = `?board=${encodeURIComponent(value)}`;
    }
  }, [value]);

  return (
    <>
      <input type="text" placeholder="Type board ID" value={value} onChange={onChange} />
      <button type="button" disabled={!value.length} onClick={onSubmit}>Submit</button>
    </>
  );
};
