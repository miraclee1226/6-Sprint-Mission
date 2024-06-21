import { useState } from "react";

type AsyncFunction<T> = (...args: any[]) => Promise<T>;

function useAsync<T>(asyncFunction: AsyncFunction<T>): [Error | null, (...args: any[]) => Promise<T>] {
  const [error, setError] = useState<Error | null>(null);

  const wrappedFunction = async (...args: any[]): Promise<T> => {
    try {
      setError(null);
      return await asyncFunction(...args);
    } catch (error: any) {
      setError(error);
      throw error;
    }
  }
  return [error, wrappedFunction];
}

export default useAsync;