import { RandomService } from "./random-service";

export class CountService {
  private randomService: RandomService;

  constructor(randomService: RandomService) {
    this.randomService = randomService;
  }

  countFunction() {
    return "count function";
  }
}
