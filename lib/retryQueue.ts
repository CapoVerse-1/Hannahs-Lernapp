export class RetryQueue<T> {
  private queue: T[] = []
  enqueue(item: T) {
    this.queue.push(item)
  }
  enqueueMany(items: T[]) {
    this.queue.push(...items)
  }
  enqueueAfter(item: T, afterCount: number) {
    // Ensure we don't insert at head (to avoid immediate repeat) if there are other items
    const minIndex = this.queue.length > 0 ? 1 : 0
    const index = Math.min(Math.max(afterCount, minIndex), this.queue.length)
    this.queue.splice(index, 0, item)
  }
  dequeue(): T | undefined {
    return this.queue.shift()
  }
  isEmpty(): boolean {
    return this.queue.length === 0
  }
  size(): number {
    return this.queue.length
  }
}


