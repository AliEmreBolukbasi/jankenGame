import ContentStore from "./contentStore.ts";


class RootStore {
  ContentStore:ContentStore;

  constructor() {
    this.ContentStore = new ContentStore();
  }

}
export default new RootStore();
