import * as React from "react";
import { io, Socket } from "socket.io-client";

export const useSocket = <T>(roomId: string) => {
  const [data, setData] = React.useState<T>();
  let socket: React.MutableRefObject<Socket | null> = React.useRef<Socket | null>(null);

  React.useEffect(() => {
    socket.current = io({ query: { roomId } });
    socket.current.on("data", (newData: T) => setData(newData));

    return () => {
      socket.current = null;
      setData(undefined);
    };
  }, [roomId]);

  const sendData = React.useCallback((newData: T) => {
    if (socket.current) {
      socket.current.emit("data", newData);
    }
  }, [socket.current]);

  return [data, sendData] as const;
};
