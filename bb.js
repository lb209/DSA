<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Linked List Example - Complete</title>
</head>
<body>

<script>
  // Node constructor
  function node(value) {
    return { data: value, next: null };
  }

  // Initial list
  let head = node(10);
  head.next = node(11);
  head.next.next = node(13);
  head.next.next.next = node(14);

  // Print list
  function print(head) {
    let current = head;
    console.log("---- LIST ----");
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
    console.log("--------------");
  }

  // Add node at end
  function addNode(head, value) {
    let newNode = node(value);
    if (head === null) return newNode; // if list empty
    let current = head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
    return head; // always return updated head
  }

  // Search for value
  function search(head, value) {
    let current = head;
    while (current !== null) {
      if (current.data === value) {
        console.log(value, "found");
        return true;
      }
      current = current.next;
    }
    console.log(value, "not found");
    return false;
  }

  // Delete node
  function deleteNode(head, value) {
    if (head === null) return head;

    // if head is the node to delete
    if (head.data === value) {
      console.log("Deleted head:", head.data);
      return head.next;
    }

    let current = head;
    while (current.next !== null && current.next.data !== value) {
      current = current.next;
    }

    if (current.next !== null) {
      console.log("Deleted:", current.next.data);
      current.next = current.next.next;
    } else {
      console.log("Value not found to delete:", value);
    }

    return head; // return updated head
  }

  // Reverse linked list
  function reverseList(head) {
    let prev = null;
    let current = head;
    let next = null;

    while (current !== null) {
      next = current.next;      // save next node
      current.next = prev;      // reverse current node's pointer
      prev = current;           // move prev forward
      current = next;           // move current forward
    }

    return prev; // new head
  }

  // ---------- Demo sequence ----------

  console.log("Original list:");
  print(head);

  // Add nodes
  head = addNode(head, 101);
  head = addNode(head, 102);
  head = addNode(head, 103);
  console.log("After adding 101,102,103:");
  print(head);

  // Delete a node
  head = deleteNode(head, 11);
  console.log("After deleting 11:");
  print(head);

  // Search
  search(head, 33); // not found
  search(head, 102); // found

  // Reverse list
  head = reverseList(head);
  console.log("After reversing:");
  print(head);

</script>

</body>
</html>
