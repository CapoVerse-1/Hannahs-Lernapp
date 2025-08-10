import { RetryQueue } from "../lib/retryQueue"

test("retry queue enqueues wrong items to tail", () => {
  const q = new RetryQueue<string>()
  q.enqueueMany(["a", "b", "c"])
  expect(q.dequeue()).toBe("a")
  q.enqueue("a")
  expect(q.dequeue()).toBe("b")
  expect(q.dequeue()).toBe("c")
  expect(q.dequeue()).toBe("a")
  expect(q.isEmpty()).toBe(true)
})


