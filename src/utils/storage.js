class Storage {
  constructor(initialSate) {
    this.storageCache = { ...initialSate };
  }

  async init() {
    try {
      const items = await chrome.storage.sync.get();
      // Copy the data retrieved from storage into storageCache.
      this.storageCache = Object.assign(this.storageCache, items);
      return this.storageCache;
    } catch (error) {
      console.log('Storage init error :>> ', error);
    }
  }

  set(options) {
    chrome.storage.sync.set(options);
  }
}

export default Storage;
