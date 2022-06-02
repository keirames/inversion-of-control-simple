import { Container } from "./container";
import { CountService } from "./count-service";
import { RandomService } from "./random-service";

const main = () => {
  const container = new Container();

  container.serviceLazyLoad("RandomService", (c) => new RandomService());

  container.serviceLazyLoad(
    "CountService",
    (c) => new CountService((c as any).RandomService)
  );

  const countService = new CountService(new RandomService());
};

main();
