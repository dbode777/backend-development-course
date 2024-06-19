class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    get(key) {
        if (this.cache.has(key)) {
            return this.cache.get(key);
        }

        return -1;
    }

    set(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        } else if (this.cache.size === this.capacity) {
            const LRU = this.cache.keys().next().value; // oldest key would be the least used key.
            this.cache.delete(LRU);
        }

        this.cache.set(key, value)
    }
}


// Test Cases, expected results are in the comments
const cache = new LRUCache(3);
cache.set(1, 1); // Cache is {1=1}
cache.set(2, 2); // Cache is {1=1, 2=2}
console.log(cache.get(1)); // returns 1
cache.set(3, 3); // Cache is {1=1, 2=2, 3=3}
console.log(cache.cache)
cache.set(4, 4); // LRU key was 1, deletes key 1, cache is {2=2, 3=3, 4=4}
console.log(cache.get(1)); // returns -1 (not found)
console.log(cache.get(3)); // returns 3
console.log(cache.get(4)); // returns 4
console.log(cache.cache)