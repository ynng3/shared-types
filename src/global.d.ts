declare global {
  namespace MyApp {
    interface Example1 {
      id: number;
      text: string;
    }

    type Example2 = {
      id: number;
      text: string;
    };
  }
}

export {};
